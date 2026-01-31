
import React, { useEffect, useRef, useState } from 'react';
import { TimeItem } from '../types/index';

interface WheelProps {
  items: TimeItem[];
  onSpinEnd: (item: TimeItem) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
  hideNonSelected?: boolean;
  selectedItem?: TimeItem | null;
  isLarge?: boolean;
}

export const Wheel: React.FC<WheelProps> = ({ 
  items, 
  onSpinEnd, 
  isSpinning, 
  setIsSpinning,
  hideNonSelected = false,
  selectedItem = null,
  isLarge = false
}) => {
  const [rotation, setRotation] = useState(0);
  const [internalSelectedId, setInternalSelectedId] = useState<number | null>(null);
  const currentRotation = useRef(0);
  
  const numSegments = items.length;
  const anglePerSegment = 360 / numSegments;

  const startSpinning = () => {
    setInternalSelectedId(null);
    const extraDegrees = Math.floor(Math.random() * 360);
    const newRotation = currentRotation.current + 1800 + extraDegrees;
    
    currentRotation.current = newRotation;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const actualAngle = newRotation % 360;
      const winningAngle = (180 - (actualAngle % 360) + 360) % 360;
      const winningIndex = Math.floor(winningAngle / anglePerSegment);
      const safeIndex = Math.min(items.length - 1, Math.max(0, winningIndex));
      
      const winner = items[safeIndex];
      setInternalSelectedId(winner.id);
      onSpinEnd(winner);
    }, 4000); 
  };

  useEffect(() => {
    if (isSpinning && rotation === currentRotation.current) {
      startSpinning();
    }
  }, [isSpinning]);

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y
    ].join(" ");
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  // Dimensioni calcolate per stare sempre nel box con margine extra per l'indicatore
  // Ridotto il min(vh) per essere più sicuri
  const sizeClasses = isLarge 
    ? "w-[min(80vw,60vh)] h-[min(80vw,60vh)] sm:w-[min(75vw,65vh)] sm:h-[min(75vw,65vh)]" 
    : "w-[min(85vw,40vh)] h-[min(85vw,40vh)] landscape:w-[min(35vw,60vh)] landscape:h-[min(35vw,60vh)]";

  return (
    <div className={`relative aspect-square mx-auto flex-shrink-0 transition-all duration-700 ${sizeClasses}`}>
      
      {/* Indicatore - Frecce laterali - Spostato leggermente più all'interno per sicurezza */}
      <div 
        className={`absolute top-1/2 -left-[4%] md:-left-[5%] -translate-y-1/2 z-40 drop-shadow-comic transition-all duration-100 ${isSpinning ? 'animate-tick' : ''}`}
        style={{ transformOrigin: '20% 50%' }}
      >
        <div className="w-0 h-0 
          border-t-[8px] md:border-t-[20px] border-t-transparent 
          border-b-[8px] md:border-b-[20px] border-b-transparent 
          border-l-[16px] md:border-l-[40px] border-l-comic-red 
          relative">
           <div className="absolute 
             top-1/2 -translate-y-1/2 
             left-[-22px] md:left-[-50px] 
             w-6 h-6 md:w-12 md:h-12 
             border-[3px] md:border-6 border-black rounded-full bg-white -z-10 shadow-md flex items-center justify-center">
              <div className="w-2.5 h-2.5 md:w-5 md:h-5 bg-comic-red rounded-full"></div>
           </div>
        </div>
      </div>

      {/* Ruota principale */}
      <div 
        className={`w-full h-full rounded-full border-[5px] md:border-8 border-black shadow-comic overflow-hidden bg-white z-10 transition-transform duration-500
          ${!isSpinning && selectedItem ? 'scale-105' : 'scale-100'}
        `}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)' : 'transform 0.5s ease-out'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-90">
           {items.map((item, index) => {
             const startAngle = index * anglePerSegment;
             const endAngle = (index + 1) * anglePerSegment;
             const isSelected = (selectedItem?.id === item.id) || (internalSelectedId === item.id);
             const shouldHide = !isSpinning && hideNonSelected && selectedItem && !isSelected;
             
             // Font scale per testi lunghi
             const textFontSize = items.length > 7 ? (isSelected ? "4.5" : "3.5") : (isSelected ? "6" : "5");

             return (
               <g key={`${item.id}-${index}`} className="transition-all duration-300">
                 <path 
                   d={describeArc(50, 50, 50, startAngle, endAngle)} 
                   fill={shouldHide ? '#cbd5e1' : item.color}
                   stroke="black"
                   strokeWidth={isSelected && !isSpinning ? "1.5" : "0.6"}
                   className={isSelected && !isSpinning ? 'animate-pulse' : ''}
                 />
                 <text
                   x="50"
                   y="20"
                   fill={shouldHide ? 'transparent' : 'black'}
                   fontSize={textFontSize}
                   fontWeight="900"
                   fontFamily="Bangers, cursive"
                   textAnchor="middle"
                   dominantBaseline="middle"
                   stroke={shouldHide ? 'transparent' : 'white'}
                   strokeWidth="0.4"
                   paintOrder="stroke"
                   transform={`rotate(${startAngle + anglePerSegment / 2}, 50, 50) rotate(90, 50, 20)`}
                   style={{ 
                    pointerEvents: 'none'
                   }}
                 >
                   {item.label.toUpperCase()}
                 </text>
               </g>
             );
           })}
        </svg>
      </div>
      
      {/* Centro della ruota */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] h-[15%] bg-white rounded-full border-[4px] md:border-6 border-black z-30 flex items-center justify-center shadow-lg">
        <div className="w-[30%] h-[30%] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

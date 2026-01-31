
import React from 'react';

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const ComicButton: React.FC<ComicButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "font-heading uppercase transition-all duration-150 transform hover:scale-105 active:scale-95 border-[3px] md:border-[5px] border-black";
  
  const variants = {
    primary: "bg-comic-yellow text-black shadow-comic rounded-xl md:rounded-2xl",
    secondary: "bg-comic-cyan text-white shadow-comic rounded-xl md:rounded-2xl",
    danger: "bg-comic-red text-white shadow-comic rounded-xl md:rounded-2xl",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ComicBubble: React.FC<{ text: string, className?: string }> = ({ text, className = '' }) => {
  return (
    <div className={`relative bg-white border-[3px] md:border-[5px] border-black rounded-[1rem] md:rounded-[2rem] p-3 md:p-6 text-center shadow-comic-sm max-w-full md:max-w-3xl mx-auto z-10 animate-pop-in ${className}`}>
      <p className="font-comic text-lg md:text-2xl lg:text-3xl font-black text-black italic leading-tight">"{text}"</p>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-[3px] md:border-r-[5px] border-b-[3px] md:border-b-[5px] border-black rotate-45"></div>
    </div>
  );
};

export const ComicPop: React.FC<{ text: string, show: boolean, onClick?: () => void }> = ({ text, show, onClick }) => {
  if (!show) return null;
  return (
    <div 
      onClick={onClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-900/90 backdrop-blur-md transition-all duration-300 ${onClick ? 'cursor-pointer' : 'pointer-events-none'}`}
    >
      <div className="relative animate-pop-in transform transition-transform hover:scale-110">
         <div className="font-heading text-[6rem] sm:text-[10rem] md:text-[15rem] text-comic-yellow -rotate-6 select-none leading-none text-center"
           style={{
             textShadow: `
               6px 6px 0 #000,
               -3px -3px 0 #000,
               3px -3px 0 #000,
               -3px 3px 0 #000,
               3px 3px 0 #000,
               0 0 40px rgba(255, 217, 61, 0.4)
             `
           }}
         >
          {text}
         </div>
      </div>
    </div>
  );
};

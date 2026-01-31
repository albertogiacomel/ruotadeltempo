
import React from 'react';
import { Settings, X, Sun, Moon, Volume2, VolumeX, Maximize, Minimize, Languages, Brain } from 'lucide-react';
import { GameDifficulty, Language, Theme } from '../types/index';
import { ComicButton } from './ComicUI';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  difficulty: GameDifficulty;
  setDifficulty: (diff: GameDifficulty) => void;
  theme: Theme;
  toggleTheme: () => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  t: any;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpen, onClose, language, setLanguage, difficulty, setDifficulty,
  theme, toggleTheme, isMuted, setIsMuted, isFullscreen, toggleFullscreen, t
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} border-[6px] border-black rounded-[2.5rem] shadow-[12px_12px_0_#000] p-6 md:p-10 animate-pop-in`}>
        
        {/* Header Menu */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 md:w-10 md:h-10 text-comic-cyan" />
            <h2 className="font-heading text-4xl md:text-5xl text-black uppercase -rotate-1 transform">
              {t.settingsTitle}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-comic-red border-4 border-black rounded-full text-white shadow-comic-sm active-press hover:scale-110 transition-transform"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
          
          {/* Lingua */}
          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-heading text-xl md:text-2xl text-slate-500 uppercase">
              <Languages size={20} /> {t.language}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ComicButton 
                onClick={() => setLanguage('IT')}
                variant={language === 'IT' ? 'primary' : 'secondary'}
                className={`py-2 text-xl ${language !== 'IT' ? 'opacity-50 border-dashed' : ''}`}
              >
                🇮🇹 ITALIANO
              </ComicButton>
              <ComicButton 
                onClick={() => setLanguage('EN')}
                variant={language === 'EN' ? 'primary' : 'secondary'}
                className={`py-2 text-xl ${language !== 'EN' ? 'opacity-50 border-dashed' : ''}`}
              >
                🇬🇧 ENGLISH
              </ComicButton>
            </div>
          </section>

          {/* Difficoltà */}
          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-heading text-xl md:text-2xl text-slate-500 uppercase">
              <Brain size={20} /> {t.difficultyTitle}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ComicButton 
                onClick={() => setDifficulty(GameDifficulty.EASY)}
                variant={difficulty === GameDifficulty.EASY ? 'primary' : 'secondary'}
                className={`py-2 text-xl ${difficulty !== GameDifficulty.EASY ? 'opacity-50 border-dashed' : ''}`}
              >
                {t.easy}
              </ComicButton>
              <ComicButton 
                onClick={() => setDifficulty(GameDifficulty.MEDIUM)}
                variant={difficulty === GameDifficulty.MEDIUM ? 'primary' : 'secondary'}
                className={`py-2 text-xl ${difficulty !== GameDifficulty.MEDIUM ? 'opacity-50 border-dashed' : ''}`}
              >
                {t.medium}
              </ComicButton>
            </div>
          </section>

          {/* Audio & Tema */}
          <div className="grid grid-cols-2 gap-8">
            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-heading text-xl md:text-2xl text-slate-500 uppercase">
                <Volume2 size={20} /> {t.sound}
              </div>
              <ComicButton 
                onClick={() => setIsMuted(!isMuted)}
                variant={isMuted ? 'danger' : 'primary'}
                className="py-2 flex items-center justify-center gap-2 text-xl"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                {isMuted ? t.off : t.on}
              </ComicButton>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-heading text-xl md:text-2xl text-slate-500 uppercase">
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />} {t.theme}
              </div>
              <ComicButton 
                onClick={toggleTheme}
                className="py-2 flex items-center justify-center gap-2 text-xl bg-slate-100 text-black"
              >
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                {theme === 'dark' ? t.dark : t.light}
              </ComicButton>
            </section>
          </div>

          {/* Fullscreen */}
          <section className="pt-4">
            <ComicButton 
              onClick={toggleFullscreen}
              className="w-full py-4 text-2xl flex items-center justify-center gap-3 bg-comic-cyan text-white"
            >
              {isFullscreen ? <Minimize size={28} /> : <Maximize size={28} />}
              {t.fullScreen}
            </ComicButton>
          </section>

        </div>

        <div className="mt-8">
           <ComicButton onClick={onClose} className="w-full py-4 text-2xl shadow-comic">
             {t.close}
           </ComicButton>
        </div>
      </div>
    </div>
  );
};

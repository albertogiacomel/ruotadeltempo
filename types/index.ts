
export enum GameMode {
  DAYS = 'DAYS',
  MONTHS = 'MONTHS',
}

export enum GameDifficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
}

export type Language = 'IT' | 'EN';
export type Theme = 'light' | 'dark';

export interface TimeItem {
  id: number;
  label: string;
  color: string;
}

export enum GameState {
  MENU = 'MENU',
  SPINNING = 'SPINNING',
  QUESTION = 'QUESTION',
  SUCCESS = 'SUCCESS',
}

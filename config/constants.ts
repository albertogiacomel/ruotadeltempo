
import { TimeItem, Language, GameMode } from '../types/index';

// Palette Giorni: Vibrante e distinta (Arcobaleno Comic)
const DAYS_COLORS = [
  '#FF4757', // Lunedì - Red
  '#2ED573', // Martedì - Green
  '#FFA502', // Mercoledì - Orange
  '#1E90FF', // Giovedì - Blue
  '#ECCC68', // Venerdì - Yellow
  '#3742FA', // Sabato - Indigo
  '#FF7F50', // Domenica - Coral
];

const DAYS_IT: TimeItem[] = [
  { id: 0, label: 'Lunedì', color: DAYS_COLORS[0] },
  { id: 1, label: 'Martedì', color: DAYS_COLORS[1] },
  { id: 2, label: 'Mercoledì', color: DAYS_COLORS[2] },
  { id: 3, label: 'Giovedì', color: DAYS_COLORS[3] },
  { id: 4, label: 'Venerdì', color: DAYS_COLORS[4] },
  { id: 5, label: 'Sabato', color: DAYS_COLORS[5] },
  { id: 6, label: 'Domenica', color: DAYS_COLORS[6] },
];

const DAYS_EN: TimeItem[] = [
  { id: 0, label: 'Monday', color: DAYS_COLORS[0] },
  { id: 1, label: 'Tuesday', color: DAYS_COLORS[1] },
  { id: 2, label: 'Wednesday', color: DAYS_COLORS[2] },
  { id: 3, label: 'Thursday', color: DAYS_COLORS[3] },
  { id: 4, label: 'Friday', color: DAYS_COLORS[4] },
  { id: 5, label: 'Saturday', color: DAYS_COLORS[5] },
  { id: 6, label: 'Sunday', color: DAYS_COLORS[6] },
];

// Palette Mesi: Ispirata alle stagioni (Inverno Freddo -> Estate Calda -> Autunno)
const MONTHS_COLORS = [
  '#81ECEC', // Gennaio - Ghiaccio
  '#74B9FF', // Febbraio - Azzurro freddo
  '#A29BFE', // Marzo - Lilla primaverile
  '#55E6C1', // Aprile - Verde germoglio
  '#FDCB6E', // Maggio - Giallo sole
  '#FAB1A0', // Giugno - Pesca
  '#FF7675', // Luglio - Rosa caldo
  '#D63031', // Agosto - Rosso fuoco
  '#E17055', // Settembre - Terra bruciata
  '#F0932B', // Ottobre - Arancione zucca
  '#6C5CE7', // Novembre - Viola scuro
  '#0984E3', // Dicembre - Blu notte
];

const MONTHS_IT: TimeItem[] = [
  { id: 0, label: 'Gennaio', color: MONTHS_COLORS[0] },
  { id: 1, label: 'Febbraio', color: MONTHS_COLORS[1] },
  { id: 2, label: 'Marzo', color: MONTHS_COLORS[2] },
  { id: 3, label: 'Aprile', color: MONTHS_COLORS[3] },
  { id: 4, label: 'Maggio', color: MONTHS_COLORS[4] },
  { id: 5, label: 'Giugno', color: MONTHS_COLORS[5] },
  { id: 6, label: 'Luglio', color: MONTHS_COLORS[6] },
  { id: 7, label: 'Agosto', color: MONTHS_COLORS[7] },
  { id: 8, label: 'Settembre', color: MONTHS_COLORS[8] },
  { id: 9, label: 'Ottobre', color: MONTHS_COLORS[9] },
  { id: 10, label: 'Novembre', color: MONTHS_COLORS[10] },
  { id: 11, label: 'Dicembre', color: MONTHS_COLORS[11] },
];

const MONTHS_EN: TimeItem[] = [
  { id: 0, label: 'January', color: MONTHS_COLORS[0] },
  { id: 1, label: 'February', color: MONTHS_COLORS[1] },
  { id: 2, label: 'March', color: MONTHS_COLORS[2] },
  { id: 3, label: 'April', color: MONTHS_COLORS[3] },
  { id: 4, label: 'May', color: MONTHS_COLORS[4] },
  { id: 5, label: 'June', color: MONTHS_COLORS[5] },
  { id: 6, label: 'July', color: MONTHS_COLORS[6] },
  { id: 7, label: 'August', color: MONTHS_COLORS[7] },
  { id: 8, label: 'September', color: MONTHS_COLORS[8] },
  { id: 9, label: 'October', color: MONTHS_COLORS[9] },
  { id: 10, label: 'November', color: MONTHS_COLORS[10] },
  { id: 11, label: 'December', color: MONTHS_COLORS[11] },
];

export const getGameItems = (mode: GameMode, lang: Language): TimeItem[] => {
  if (mode === GameMode.DAYS) {
    return lang === 'IT' ? DAYS_IT : DAYS_EN;
  } else {
    return lang === 'IT' ? MONTHS_IT : MONTHS_EN;
  }
};

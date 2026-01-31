# 🎡 Giratempo! - Ruota del Tempo per Bambini

**Giratempo!** è un'applicazione web educativa e interattiva progettata per insegnare ai bambini i giorni della settimana e i mesi dell'anno in modo divertente, colorato e magico. Lo stile grafico si ispira ai fumetti classici (Comic style) con animazioni vivaci e feedback sonori immediati.

## ✨ Funzionalità Principali

- **🎡 Ruota Magica**: Gira la ruota per selezionare casualmente un giorno o un mese.
- **🧠 Quiz Interattivo**: Sfida il bambino a identificare cosa viene "prima" e cosa viene "dopo" l'elemento estratto.
- **🎭 AI Storytelling**: Una volta completato il quiz, l'intelligenza artificiale (Google Gemini) genera una rima personalizzata e divertente sull'elemento selezionato.
- **🌍 Bilingue**: Supporto completo per Italiano ed Inglese (testi, UI e rime).
- **🌗 Dark Mode**: Tema scuro ottimizzato per non affaticare la vista, mantenendo lo stile "Pop Art".
- **🔊 Audio & Feedback**: Suoni "tick" della ruota, suoni di successo e vibrazioni visive per un'esperienza coinvolgente.
- **⚡ Performance**: Integrazione ultra-rapida con fallback locale se l'AI è lenta o offline.

## 🚀 Tecnologie Utilizzate

- **Frontend**: React 19 + TypeScript.
- **Styling**: Tailwind CSS con design system personalizzato (Comic shadows, Bangers font).
- **AI**: Google Gemini API (`@google/genai`) utilizzando il modello `gemini-3-flash-preview`.
- **Icone**: Lucide React.
- **Effetti**: React Confetti per le vittorie.
- **Audio**: Web Audio API per sintesi sonora di feedback.

## 🛠️ Configurazione e Installazione

Il progetto utilizza **Vite** come build tool.

### Prerequisiti
Assicurati di avere Node.js installato sul tuo sistema.

### Installazione
1. Clona il repository o scarica i file.
2. Installa le dipendenze:
   ```bash
   npm install
   ```

### Chiave API Gemini
Per attivare le rime magiche generate dall'AI, è necessaria una chiave API di Google AI Studio.
1. Ottieni una chiave su [ai.google.dev](https://ai.google.dev/).
2. Crea un file `.env` nella root del progetto:
   ```env
   VITE_API_KEY=tua_chiave_api_qui
   ```
   *(Nota: Il sistema è configurato per usare `process.env.API_KEY` tramite la configurazione di Vite).*

### Avvio in locale
```bash
npm run dev
```

## 🧠 Logica del Gioco

1. **Menu**: Il bambino sceglie tra "Giorni" o "Mesi" e imposta la difficoltà (Facile: opzioni ordinate; Difficile: opzioni mescolate).
2. **Spin**: Si gira la ruota con un click. L'animazione dura 4 secondi con accelerazione e decelerazione naturale.
3. **Domanda**: Appare il quiz "Prima e Dopo". Il bambino deve trascinare/cliccare le tessere corrette.
4. **Premio AI**: Al successo, viene mostrata una rima. Il gioco tenta di contattare Gemini; se la risposta non arriva entro 800ms, mostra una rima predefinita dalla banca dati locale per garantire un'esperienza senza attese.

## 🎨 Design System

L'app utilizza classi Tailwind personalizzate per l'effetto "Comic":
- `shadow-comic`: Ombre nere piene e spesse.
- `bg-grid-pattern`: Sfondo a puntini tipico dei fumetti stampati.
- **Colori**: Palette vibrante (Comic Yellow, Cyan, Red, Green).
- **Tipografia**: *Bangers* per i titoli (stile supereroe) e *Comic Neue* per i testi leggibili.

---

Creato con ❤️ per i piccoli esploratori del tempo.
Powered by **Google Gemini API**.
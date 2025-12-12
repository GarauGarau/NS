# 🎯 IL TUO SITO WEB - GUIDA COMPLETA

## 📦 CONTENUTO DEL PACCHETTO

Hai scaricato un pacchetto completo con:
- ✅ Sito web funzionante (pronto all'uso)
- ✅ Codice sorgente (per modifiche)
- ✅ Sistema di build professionale (Tailwind CSS v4)

## 📁 STRUTTURA FILE

```
sito-web/
│
├── 🌐 SITO PRONTO (Usa questi file)
│   ├── index.html              - Il tuo sito web
│   ├── data.js                 - I tuoi contenuti (MODIFICA QUI!)
│   ├── app.js                  - Logica JavaScript
│   └── dist/
│       └── styles.css          - CSS compilato (34 KB)
│
├── 📝 SORGENTI (Per modifiche avanzate)
│   └── src/
│       └── input.css           - Codice sorgente CSS
│
├── ⚙️ CONFIGURAZIONE BUILD
│   ├── package.json            - Dipendenze npm
│   ├── tailwind.config.js      - Config Tailwind
│   ├── postcss.config.js       - Config PostCSS
│   └── .gitignore              - Regole Git
│
└── 📖 README.txt               - Questo file
```

## 🚀 UTILIZZO RAPIDO (3 PASSI)

### PASSO 1: Estrai i File
Estrai il contenuto dello ZIP in una cartella sul tuo computer.

### PASSO 2: Apri il Sito
Fai doppio click su `index.html`
→ Il sito si apre nel browser! ✅

### PASSO 3: Personalizza
Apri `data.js` con un editor di testo e cambia:
```javascript
const APP_NAME = "Il Tuo Nome";  // ← Scrivi il tuo nome qui
```

Poi aggiungi le tue pubblicazioni, modifica la bio in `index.html`, ecc.

## ✏️ MODIFICARE I CONTENUTI (Senza npm)

### Cambiare Nome e Pubblicazioni
**File:** `data.js`

```javascript
// Il tuo nome (appare con effetto macchina da scrivere)
const APP_NAME = "Alessio Garau";  // ← CAMBIA QUI

// Le tue pubblicazioni
publications: [
    { 
        title: "Titolo Paper",
        description: "Descrizione...",
        draftLink: "https://link-al-paper.com" 
    }
]
```

### Cambiare Bio e Contatti
**File:** `index.html`

Cerca e modifica:
- **Riga ~78**: La tua bio/descrizione
- **Righe ~83-98**: Link social (GitHub, LinkedIn, Twitter, Email)
- **Riga ~71**: URL della tua foto

### Modificare il CV
**File:** `index.html`

Cerca la sezione `<!-- CV PAGE SECTION -->` e modifica:
- Contatti
- Esperienza lavorativa
- Istruzione
- Competenze

### Cambiare Velocità Effetto Macchina da Scrivere
**File:** `app.js`

Riga ~13:
```javascript
let speed = 150; // Millisecondi tra ogni lettera
                 // 100 = veloce, 200 = lento
```

## 🎨 MODIFICARE GLI STILI (Con npm)

**Solo se vuoi cambiare colori, font, animazioni**

### SETUP (Una volta sola)

#### 1. Installa Node.js
Scarica da: https://nodejs.org/
Installa la versione LTS (consigliata)

#### 2. Apri il Terminale nella Cartella del Sito
**Windows:**
- Shift + Click destro nella cartella → "Apri finestra PowerShell qui"
- Oppure: `cd C:\percorso\della\cartella`

**Mac/Linux:**
- Click destro → "Apri nel terminale"
- Oppure: `cd /percorso/della/cartella`

#### 3. Installa le Dipendenze
```bash
npm install
```

Questo scarica Tailwind CSS e gli strumenti necessari.
Va fatto solo UNA VOLTA.

### MODIFICARE I COLORI

**File:** `src/input.css`

```css
:root {
    --color-primary: #ffffff;    /* Sfondo (bianco) */
    --color-secondary: #000000;  /* Testo (nero) */
    --color-accent: #facc15;     /* Accento (giallo) */
}
```

Dopo aver modificato:
```bash
npm run build:css
```

Questo rigenera `dist/styles.css` con i tuoi nuovi colori.

### MODIFICARE FONT, ANIMAZIONI, ECC.

Tutto in `src/input.css`

Dopo ogni modifica:
```bash
npm run build:css
```

### MODALITÀ SVILUPPO (Auto-ricompila)
```bash
npm run watch:css
```

Lascia questo comando in esecuzione. Ogni volta che salvi `src/input.css`,
il CSS viene ricompilato automaticamente!

## 🌐 PUBBLICARE ONLINE

### Opzione 1: Hosting Moderno (Netlify, Vercel, GitHub Pages)
1. Crea un account gratuito
2. Trascina l'intera cartella
3. Fatto! ✅

### Opzione 2: Server Tradizionale (FTP)

Carica SOLO questi file:
```
✅ index.html
✅ data.js
✅ app.js
✅ dist/styles.css
```

**NON caricare:**
```
❌ node_modules/
❌ src/
❌ package.json
❌ *.config.js
❌ .gitignore
```

## 🔧 COMANDI NPM

```bash
npm install          # Installa dipendenze (una volta)
npm run build:css    # Compila il CSS
npm run watch:css    # Compila automaticamente al salvataggio
npm run build        # Alias di build:css
```

## ❓ DOMANDE FREQUENTI

### D: Posso usare il sito senza installare npm?
**R:** Sì! Il file `dist/styles.css` è già compilato.
npm serve solo se vuoi modificare gli stili.

### D: Dove eseguo i comandi npm?
**R:** Nel terminale, dentro la cartella dove hai estratto i file.

### D: Ho modificato src/input.css ma non vedo cambiamenti?
**R:** Devi eseguire `npm run build:css` per rigenerare dist/styles.css

### D: Cos'è la cartella node_modules?
**R:** Contiene gli strumenti di sviluppo. Si crea con `npm install`.
NON caricarla online!

### D: Posso modificare direttamente dist/styles.css?
**R:** NO! Verrà sovrascritto. Modifica sempre `src/input.css` 
e poi esegui `npm run build:css`

### D: Il sito funziona offline?
**R:** Quasi! Solo le icone Lucide richiedono internet (sono da CDN).
Il resto funziona offline.

## 🎯 PERSONALIZZAZIONE VELOCE

### 1. Il Tuo Nome
`data.js` riga 6:
```javascript
const APP_NAME = "Il Tuo Nome";
```

### 2. La Tua Foto
`index.html` riga ~71:
```html
<img src="URL_DELLA_TUA_FOTO" alt="...">
```

### 3. La Tua Bio
`index.html` riga ~78:
```html
<p class="text-lg mb-8...">
    La tua biografia qui...
</p>
```

### 4. I Tuoi Link Social
`index.html` righe ~83-98:
```html
<a href="https://github.com/tuousername">
<a href="https://linkedin.com/in/tuousername">
<a href="https://twitter.com/tuousername">
<a href="mailto:tua@email.com">
```

### 5. Le Tue Pubblicazioni
`data.js` righe 8-25:
```javascript
publications: [
    { 
        title: "Titolo del Paper",
        description: "Descrizione completa...",
        draftLink: "https://..." 
    },
    // Aggiungi altri qui
]
```

### 6. Il Tuo CV
`index.html` sezione `<!-- CV PAGE SECTION -->`:
Modifica esperienza, istruzione, competenze

### 7. I Colori (richiede npm)
`src/input.css` righe 13-17:
```css
:root {
    --color-primary: #ffffff;
    --color-secondary: #000000;
    --color-accent: #facc15;
}
```
Poi: `npm run build:css`

## 🐛 RISOLUZIONE PROBLEMI

### Gli stili non si applicano
```bash
npm run build:css
```
Poi svuota la cache del browser (Ctrl+F5 o Cmd+Shift+R)

### Errori npm
```bash
rm -rf node_modules
npm install
```

### Le icone non si vedono
Verifica la connessione internet (le icone Lucide sono da CDN)

### Il typewriter non funziona
Controlla la console del browser (F12) per errori JavaScript

## 📊 CONFRONTO: PRIMA vs DOPO

### PRIMA (CDN)
- ⚠️ Warning "not for production"
- 📦 ~300 KB di CSS (tutto Tailwind)
- 🌐 Richiede connessione (CDN)
- ❌ Non ottimizzato

### DOPO (Build)
- ✅ Nessun warning
- 📦 ~34 KB di CSS (solo ciò che usi)
- 💾 Funziona offline (tranne icone)
- ✅ Ottimizzato per produzione

## 🎓 RISORSE

### Tailwind CSS
- Documentazione: https://tailwindcss.com/docs
- Classi utility: https://tailwindcss.com/docs/utility-first

### Lucide Icons
- Elenco icone: https://lucide.dev/icons

### Node.js
- Download: https://nodejs.org/
- Guida npm: https://docs.npmjs.com/

## 📞 SUPPORTO

Hai problemi? Controlla:
1. Questa guida
2. La console del browser (F12)
3. Gli errori nel terminale (se usi npm)

## ✅ CHECKLIST PERSONALIZZAZIONE

Prima di pubblicare, hai:
- [ ] Cambiato il nome in `data.js`?
- [ ] Aggiornato la bio in `index.html`?
- [ ] Aggiunto la tua foto?
- [ ] Modificato i link social?
- [ ] Aggiunto le tue pubblicazioni?
- [ ] Aggiornato il CV?
- [ ] Testato il sito in diversi browser?
- [ ] Testato su mobile?

## 🎉 BUON LAVORO!

Il tuo sito è pronto. Personalizzalo e condividilo con il mondo! 🚀

---

**Versione:** Dicembre 2025
**Sistema Build:** Tailwind CSS v4 + PostCSS
**Compatibilità:** Tutti i browser moderni

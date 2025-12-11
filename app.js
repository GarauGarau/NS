/* ============================================== */
/* APPLICATION LOGIC - app.js */
/* ============================================== */

// --- Core Functions (Home Page: Typewriter Effect) ---

/**
 * Implements the typewriter effect on the name.
 */
function startTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor');
    const text = APP_NAME;
    let i = 0;
    let speed = 200;

    // --- MODIFICA QUI L'ALTEZZA DEL CURSORE ---
    // 1. Rende l'elemento ridimensionabile
    cursorElement.style.display = 'inline-block'; 
    // 2. Imposta l'altezza desiderata (es. 20px, o 80% della riga)
    cursorElement.style.height = '40px'; 
    // 3. (Opzionale) Allinea il cursore verticalmente se appare disallineato
    cursorElement.style.verticalAlign = 'bottom'; 
    // ------------------------------------------

    cursorElement.classList.remove('blinking-cursor');

    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                cursorElement.classList.add('blinking-cursor');
            }, 400);
        }
    }
    
    typingElement.textContent = ""; 
    type();
}

// --- Core Functions (Research Page: Data Rendering) ---

function renderPaperItem(paper, index) {
    // Unique ID to link the title and description
    const id = 'paper-' + index + '-' + paper.title.toLowerCase().replace(/[^a-z0-9]/g, '-');

    // HTML degli autori (visibile sempre)
    const authorsHtml = paper.authors 
        ? `<div class="text-sm text-gray-800 italic ml-6 mb-1">
             With ${paper.authors}
           </div>` 
        : '';

    // --- NUOVA LOGICA ---
    // Genera l'HTML del link SOLO se paper.draftLink esiste
    const linkHtml = paper.draftLink 
        ? `<p class="pt-4 text-black">
                <a href="${paper.draftLink}" target="_blank" class="text-sm border-b border-dotted border-black hover:text-yellow-600 hover:border-yellow-600">
                    Draft / Link 
                    <i data-lucide="external-link" class="w-3 h-3 inline-block ml-1"></i>
                </a>
           </p>`
        : ''; // Altrimenti stringa vuota
    // --------------------

    return `
        <div class="border-b border-gray-200 pb-2">
            <div class="flex items-start justify-between cursor-pointer" onclick="togglePaper('${id}')">
                <p class="text-sm md:text-base hover:text-yellow-600 transition-colors flex-1 pr-4">
                    <span id="icon-${id}" class="inline-block w-4 text-yellow-600 font-bold select-none transition-transform duration-300 transform translate-x-0 mr-2">[+]</span> 
                    ${paper.title}
                </p>
            </div>
            
            ${authorsHtml}

            <div id="${id}" class="paper-description text-xs text-gray-600 ml-6">
                
                ${paper.description}
                
                ${linkHtml}

            </div>
        </div>
    `;
}


/**
 * Injects paper data into the HTML.
 */
function loadResearchContent() {
    // 1. Commenta le variabili delle sezioni che non usi più
    // const pubList = document.getElementById('publications-list');
    // const workPList = document.getElementById('working-papers-list');
    
    // Questa la teniamo
    const wipList = document.getElementById('work-in-progress-list');

    // 2. Commenta le righe che iniettano l'HTML
    // pubList.innerHTML = researchData.publications.map(renderPaperItem).join('');
    // workPList.innerHTML = researchData.workingPapers.map((p, i) => renderPaperItem(p, i + researchData.publications.length)).join('');
    
    // 3. Modifica l'indice per far partire i colori o gli ID da zero (opzionale, ma più pulito)
    // Prima era: i + researchData.publications.length + researchData.workingPapers.length
    // Ora puoi mettere semplicemente: (p, i)
    wipList.innerHTML = researchData.workInProgress.map((p, i) => renderPaperItem(p, i)).join('');

    // Replaces Lucide icons for Research page
    lucide.createIcons();
}

// Global function for paper expansion/collapse
window.togglePaper = function(id) {
    const descriptionDiv = document.getElementById(id);
    const iconSpan = document.getElementById(`icon-${id}`);
    
    if (descriptionDiv.classList.contains('expanded')) {
        descriptionDiv.classList.remove('expanded');
        iconSpan.textContent = '[+]';
        iconSpan.classList.remove('rotate-45');
    } else {
        descriptionDiv.classList.add('expanded');
        iconSpan.textContent = '[-]';
        iconSpan.classList.add('rotate-45');
    }
}


// --- Core Functions (Routing Logic) ---

/**
 * Handles URL hash-based routing.
 */
function handleRouting() {
    const hash = window.location.hash || '#home';
    const homePage = document.getElementById('home-page');
    const researchPage = document.getElementById('research-page');
    const cvPage = document.getElementById('cv-page');

    // Hides all pages
    homePage.classList.add('hidden');
    researchPage.classList.add('hidden');
    cvPage.classList.add('hidden');
    
    // Hides the cursor when not on the home page
    document.getElementById('cursor').style.display = 'none';

    // Shows the correct page based on the hash
    if (hash.startsWith('#research')) {
        researchPage.classList.remove('hidden');
        document.title = `${APP_NAME} | Research`;
    } else if (hash.startsWith('#cv')) {
        cvPage.classList.remove('hidden');
        document.title = `${APP_NAME} | CV`;
        // Ensures icons on CV page are rendered (like download icon)
        lucide.createIcons();
    } else {
        homePage.classList.remove('hidden');
        document.title = `${APP_NAME} | Home`;
        // Restarts the typewriter effect (if not already active)
        startTypingEffect(); 
        document.getElementById('cursor').style.display = 'inline-block';
    }
}

// --- Initialization ---
window.addEventListener('hashchange', handleRouting);

window.onload = function() {
    // 1. Load data and render content for the Research section
    loadResearchContent();
    // 2. Handle initial page view based on URL hash
    handleRouting();
    // 3. Ensure all Lucide icons across all pages are rendered
    lucide.createIcons();
};

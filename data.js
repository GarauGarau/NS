/* ============================================== */
/* DATA CONFIGURATION - data.js */
/* ============================================== */

// --- Data Configuration (Data Modularity) ---
const APP_NAME = "Alessio Garau"; // Replace with your name

const researchData = {
    publications: [
        { 
            title: "Publication Title One: A Minimalist Analysis of Web Aesthetics (2024)", 
            description: "Brief description of Publication One: This work explores the evolution of minimalist web design and the impact of 'dark mode' aesthetics on user experience and accessibility. Comment: This is the first peer-reviewed publication. Published in the Journal of Digital Arts.", 
            draftLink: "https://link-to-publication-one.com" 
        },
        { 
            title: "Computational Theories of the Blinking Cursor: History and Future", 
            description: "Brief description of Publication Two: An in-depth study of the symbolic significance of the block cursor and its persistence in the modern user interface as an element of attention and interaction. Comment: Important work on Human-Computer Interaction.", 
            draftLink: "https://link-to-publication-two.com" 
        },
    ],
    workingPapers: [
        { 
            title: "Working Paper Alpha: Single-File Architectures for Web Projects (Draft)", 
            description: "Description of Working Paper Alpha: Research on how 'single-file' architectures can simplify development, reduce setup time, and improve prototype portability. Comment: Currently under review and update. Will be presented at Conference X.", 
            draftLink: "https://link-to-working-paper-alpha.com" 
        },
        { 
            title: "Working Paper Beta: The Impact of Monospace Fonts on Learning", 
            description: "Description of Working Paper Beta: Preliminary research examining whether and how the use of fixed-width (monospace) fonts in educational materials can influence concentration and memorization in programming students.", 
            draftLink: "https://link-to-working-paper-beta.com" 
        },
    ],
    workInProgress: [
        { 
            title: "Scholars and the Machine, on automation and academic performance [Draft coming soon!]", 
			authors: `<a href="https://www.marconieddu.net/" target="_blank" class="border-b border-dotted border-gray-500 hover:text-yellow-600 hover:border-yellow-600 transition-colors">Marco Nieddu</a> and <a href="https://alessiomoro.it/" target="_blank" class="border-b border-dotted border-gray-500 hover:text-yellow-600 hover:border-yellow-600 transition-colors">Alessio Moro</a>`,
            description: "Technological innovations can complement or substitute workers’ skills, thus enhancing or replacing workers’ productivity. However, occupational output is typically hard to measure, especially for high-skilled workers performing abstract tasks. In this paper, we focus on the effect of technology on productivity and inequality within a specific high-skilled group, that of researchers in economics, for whom we collect the universe of research output (i.e. published papers) for the period 1990-2020. We use the introduction of DYNARE as a case study, a software designed to easily solve and simulate dynamic stochastic general equilibrium (DSGE) models. We develop a heterogeneous agents dynamic model of research and citation accumulation, in which the arrival of technology allows some researchers to perform a subset of the tasks needed to write academic papers more easily. Next, we test the model’s implications by leveraging quasi-experimental variation in DYNARE adoption across economic fields. We find that exposed fields experience a differential increase in the yearly number of publications and in the number of new authors compared to untreated ones, but we find no effect on quality. Second, at the author level, we find that the most-exposed researchers experienced a sharp and persistent decline in citation impact compared to the least-exposed. Analyzing their abstracts using text embeddings shows that they converged on a narrower set of topics rather than exploring new fields, suggesting that while the technology lowered barriers to entry and boosted aggregate output, it lowered the comparative advantage of researchers who had specialized in the now-automated tasks, diminishing their academic standing.", 
        },
        { 
            title: "Labour Market Dynamics - Evidence from Administrative Data", 
			authors: `Silvia Balia, <a href="https://sites.google.com/site/giovannisulis/" target="_blank" class="border-b border-dotted border-gray-500 hover:text-yellow-600 hover:border-yellow-600 transition-colors">Giovanni Sulis</a> and Daniela Sonedda`,            description: "This paper investigates how unexpected adverse labor market conditions affect short-term worker mobility. Using Italian administrative data, we leverage the government-mandated shutdown of non-essential sectors during the COVID-19 pandemic, implemented in a context where layoffs were not allowed, in order to study workers mobility decisions. Applying a difference-in-differences approach, we document how the restrictions significantly increased transitions from employment to unemployment (EU), with no notable impact on employer-to-employer (EE) or unemployment-to-employment (UE) moves. These effects vary by occupation and demographic groups: workers in physically demanding jobs experienced higher EU rates and somewhat slower re-employment (UE), while workers in occupations with remote work potential were less likely to move into voluntary unemployment. Vulnerable workers, such as those with limited experience in the labor market and lower levels of education, faced higher rates of transitioning into unemployment.", 
        },
    ]
};

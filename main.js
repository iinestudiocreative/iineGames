document.addEventListener('DOMContentLoaded', async () => {
    // ─── Initialize i18n before anything else ───
    await initI18n();
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Menu functions
    function openMenu() {
        fullscreenMenu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        fullscreenMenu.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event Listeners
    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ─── Language Switch ───
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            const langs = getSupportedLanguages();
            if (langs.length <= 1) {
                console.log('[i18n] Only one language available');
                return;
            }
            const currentIdx = langs.findIndex(l => l.code === getCurrentLanguage());
            const nextIdx = (currentIdx + 1) % langs.length;
            changeLanguage(langs[nextIdx].code);
        });
    }

    // ─── Listen for language changes to re-render ───
    document.addEventListener('languageChanged', async () => {
        translateStaticElements();
        // Re-render dynamic content with new translations
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            renderPortfolio(data.apps);
            renderStudio(data.studio);
        } catch (error) {
            console.error('Error reloading data on language change:', error);
        }
    });

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ─── Translate static HTML elements ───
    translateStaticElements();

    // ─── Fetch data and render ───
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        renderPortfolio(data.apps);
        renderStudio(data.studio);
    } catch (error) {
        console.error('Error loading data:', error);
    }

    // Smooth scroll for nav links
    // Smooth scroll for nav links (including mobile menu)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty anchors

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // If menu is open, close it first (redundant but safe)
                if (typeof closeMenu === 'function') closeMenu();

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    function renderPortfolio(apps) {
        const portfolioContainer = document.getElementById('portfolio');
        portfolioContainer.innerHTML = '';

        apps.forEach((app, index) => {
            const isReverse = index % 2 !== 0;
            const section = document.createElement('section');
            if (app.id === 'easytrip') {
                section.className = 'game-section easytrip-bg';
            } else {
                section.className = `game-section ${isReverse ? 'snake-bg' : 'dark-section'}`;
            }

            if (app.id === 'easytrip') {
                section.innerHTML = `
                    <div class="container grid-2">
                        <div class="game-info reveal">
                            ${app.badge ? `<span class="badge neon-green">${app.badge}</span>` : ''}
                            <h2 class="title-xl">${app.name}</h2>
                            <p class="slogan">${app.slogan}</p>
                            <p class="description">${app.description}</p>
                            
                            <div class="feature-grid">
                                ${app.features.map(f => `
                                    <div class="feature-card">
                                        <div class="icon-box">${f.icon}</div>
                                        <h3>${f.title}</h3>
                                        <p>${f.desc}</p>
                                    </div>
                                `).join('')}
                            </div>

                            <div class="cta-buttons">
                                <a href="${app.links.learnmore}" class="btn btn-primary">${t('easytrip.learnMore')}</a>
                            </div>
                        </div>
                        <div class="game-media reveal">
                            <div class="phone-mockup">
                                <img src="${app.image}" alt="${app.name} App Screenshot">
                            </div>
                        </div>
                    </div>
                `;
            } else {
                section.innerHTML = `
                    <div class="container grid-2 ${isReverse ? 'reverse' : ''}">
                        <div class="game-info reveal">
                            <h2 class="title-xl">${app.name}</h2>
                            <p class="slogan">${app.slogan}</p>
                            <p class="description">${app.description}</p>
                            
                            <ul class="bullet-list">
                                ${app.bullets.map(b => `<li>${b}</li>`).join('')}
                            </ul>

                            <div class="cta-buttons">
                                <a href="${app.links.playstore}" class="btn btn-secondary" target="_blank">${t('snake360.playAndroid')}</a>
                            </div>
                        </div>
                        <div class="game-media reveal">
                            <div class="art-layer">
                                <img src="${app.image}" alt="${app.name} Hero Image">
                            </div>
                        </div>
                    </div>
                `;
            }
            portfolioContainer.appendChild(section);

            // Add Snapshots Showcase for apps
            if (app.snapshots) {
                const showcase = document.createElement('section');
                showcase.className = 'showcase-section';
                showcase.innerHTML = `
                    <div class="container">
                        <h3 class="title-l text-center">${t('portfolio.interfacePreview')}</h3>
                        <div class="showcase-grid reveal">
                            ${app.snapshots.map(img => `
                                <div class="pixel-mockup">
                                    <div class="pixel-camera"></div>
                                    <div class="pixel-screen">
                                        <img src="${img}" alt="${app.name} UI Preview">
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                portfolioContainer.appendChild(showcase);
            }
        });

        initScrollObserver();
    }

    function renderStudio(studio) {
        const studioSection = document.getElementById('studio');
        studioSection.innerHTML = `
            <div class="container text-center">
                <h2 class="title-l">${studio.name}</h2>
                <div class="divider"></div>
                <p class="studio-desc reveal">${studio.description}</p>
                <div class="studio-link-box reveal">
                    <a href="${studio.url}" class="studio-link" target="_blank">${studio.url.replace('https://', '')}</a>
                </div>
                <div class="studio-services reveal">
                    ${studio.services.map(s => `<div class="service">${s}</div>`).join('')}
                </div>
            </div>
        `;
        initScrollObserver();
    }

    function initScrollObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    /**
     * Traduit tous les éléments HTML statiques ayant l'attribut data-i18n.
     * - data-i18n="key" → met à jour textContent
     * - data-i18n-html="key" → met à jour innerHTML (pour le hero title avec <br>/<span>)
     */
    function translateStaticElements() {
        // Text-only translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });

        // HTML translations (hero title with <br> and <span>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            // For hero title, reconstruct with highlight span
            if (key === 'hero.title') {
                el.innerHTML = `${t('hero.title')} <br><span class="highlight">${t('hero.titleHighlight')}</span>`;
            } else {
                el.innerHTML = t(key);
            }
        });
    }
});

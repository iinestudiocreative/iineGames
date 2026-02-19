/**
 * i18n.js — Configuration i18next pour iineGames
 * Langue par défaut : français (fr)
 * 
 * Pour ajouter une langue :
 * 1. Ajouter un bloc dans `resources` (ex: en: { translation: { ... } })
 * 2. Ajouter le code langue dans le tableau `supportedLngs`
 * 3. Ajouter le label dans `languageLabels`
 */

const SUPPORTED_LANGUAGES = ['fr'];

const languageLabels = {
    fr: 'Français'
};

const resources = {
    fr: {
        translation: {
            // ─── Navigation & Header ───
            nav: {
                home: 'ACCUEIL',
                gamesApps: 'JEUX & APPS',
                studio: 'IINESTUDIO',
                menuClose: 'Fermer le menu',
                chooseLang: 'Choisir la langue'
            },

            // ─── Hero Section ───
            hero: {
                title: 'Crée avec Passion.',
                titleHighlight: 'Jouer avec Style.',
                subtitle: "iineGames réinvente l'expérience mobile avec des applications intelligentes et des jeux addictifs.",
                scroll: 'Scroll'
            },

            // ─── EasyTrip App ───
            easytrip: {
                badge: 'Nouveau Projet',
                name: 'EasyTrip',
                slogan: 'Planifiez, roulez, partagez — Le compagnon ultime du Rider.',
                description: "Une application hybride conçue pour les passionnés de moto, offrant une planification d'itinéraire intelligente, météo précise et gestion des coûts.",
                features: {
                    itinerary: {
                        title: 'Itinéraire',
                        desc: 'Multi-étapes intelligent.'
                    },
                    weather: {
                        title: 'Météo',
                        desc: 'Badges dynamiques pass.'
                    },
                    costs: {
                        title: 'Coûts',
                        desc: 'Carburant & Péages (ETC).'
                    },
                    social: {
                        title: 'Social',
                        desc: 'Sync Discord & Cloud.'
                    }
                },
                learnMore: 'En savoir plus',
                stack: 'React | Vite | Firebase | Capacitor'
            },

            // ─── Snake360 Game ───
            snake360: {
                name: 'Snake360',
                slogan: 'Liberté de mouvement totale sur 360°.',
                description: 'Une réinvention moderne du classique Snake. Rotation fluide, boutique de skins et performances optimisées pour Android 15+.',
                bullets: {
                    rotation: 'Rotation complète pour une précision accrue',
                    customization: 'Personnalisation : Skins, musiques, niveaux',
                    optimized: 'Optimisé pour Android 15 (SDK 36)'
                },
                playAndroid: 'Jouer sur Android'
            },

            // ─── Portfolio / Showcase ───
            portfolio: {
                interfacePreview: "Aperçu de l'Interface"
            },

            // ─── iineStudio Section ───
            studio: {
                name: 'iineStudio',
                description: 'Publicité vidéo, événementiel et services digitaux premium.',
                services: {
                    video: 'Production Vidéo',
                    content: 'Création de Contenu',
                    ads: 'Optimisation Ads'
                }
            },

            // ─── Footer ───
            footer: {
                rights: '© 2026 iineGames / iineStudio. Tous droits réservés.'
            }
        }
    }
};

// ─── i18next Initialization ───
let i18nReady;

function initI18n() {
    return new Promise((resolve, reject) => {
        // Récupérer la langue sauvegardée ou utiliser le français par défaut
        const savedLang = localStorage.getItem('iinegames-lang') || 'fr';

        i18next.init({
            lng: savedLang,
            fallbackLng: 'fr',
            supportedLngs: SUPPORTED_LANGUAGES,
            resources: resources,
            interpolation: {
                escapeValue: false // HTML safe — pas d'échappement nécessaire
            }
        }, (err, t) => {
            if (err) {
                console.error('i18next init error:', err);
                reject(err);
                return;
            }
            console.log(`[i18n] Initialized — Language: ${i18next.language}`);
            resolve(t);
        });
    });
}

/**
 * Traduit une clé i18n.
 * Usage : t('hero.title') → "Crée avec Passion."
 */
function t(key, options) {
    return i18next.t(key, options);
}

/**
 * Change la langue active et sauvegarde le choix.
 * @param {string} lng — Code langue (ex: 'fr', 'en', 'ja')
 */
function changeLanguage(lng) {
    return i18next.changeLanguage(lng).then(() => {
        localStorage.setItem('iinegames-lang', lng);
        console.log(`[i18n] Language changed to: ${lng}`);
        // Déclenche un événement personnalisé pour notifier les composants
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lng } }));
    });
}

/**
 * Retourne la langue courante.
 */
function getCurrentLanguage() {
    return i18next.language;
}

/**
 * Retourne la liste des langues supportées avec leur label.
 */
function getSupportedLanguages() {
    return SUPPORTED_LANGUAGES.map(code => ({
        code,
        label: languageLabels[code] || code
    }));
}

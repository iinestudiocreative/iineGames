/**
 * i18n.js — Configuration i18next pour iineGames
 * Langue par défaut : français (fr)
 * 
 * Pour ajouter une langue :
 * 1. Ajouter un bloc dans `resources` (ex: en: { translation: { ... } })
 * 2. Ajouter le code langue dans le tableau `supportedLngs`
 * 3. Ajouter le label dans `languageLabels`
 */

const SUPPORTED_LANGUAGES = ['fr', 'en', 'ja'];

const languageLabels = {
    fr: 'Français',
    en: 'English',
    ja: '日本語'
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
                title: 'Créé avec Passion.',
                titleHighlight: "L'Expérience avec Style.",
                subtitle: "Améliorez votre quotidien avec nos outils et évadez-vous avec nos jeux. Tout simplement.",
                scroll: 'Scroll'
            },

            // ─── EasyTrip App ───
            easytrip: {
                badge: 'Nouveau Projet',
                name: 'EasyTrip',
                slogan: 'Planifiez, voyagez, partagez ! <br>Le compagnon de toutes vos aventures.',
                description: "Concevez des itinéraires sur mesure et organisez vos sorties en toute simplicité. EasyTrip vous permet de planifier chaque étape de votre voyage et de coordonner vos aventures avec vos proches pour une expérience partagée inoubliable.",
                features: {
                    itinerary: {
                        title: 'Itinéraire',
                        desc: 'Multi-étapes intelligent.'
                    },
                    collab: {
                        title: 'Collaboratif',
                        desc: 'Organisez vos sorties à plusieurs.'
                    },
                    sync: {
                        title: 'Synchronisation',
                        desc: 'Retrouvez vos voyages partout.'
                    },
                    social: {
                        title: 'Social',
                        desc: 'Partagez avec la communauté Discord.'
                    }
                },
                learnMore: 'Découvrir',
                tagline: 'Le compagnon de toutes vos aventures.',
                webVersion: 'Version Web',
                accessWeb: 'Accéder à la',
                availableOn: 'Disponible sur',
                privacyPolicy: 'Privacy Policy',
                termsOfUse: 'Terms of Use',
                stack: 'React | Vite | Firebase | Capacitor'
            },

            // ─── Snake360 Game ───
            snake360: {
                name: 'Snake360',
                slogan: 'Mettez votre perspective à rude épreuve.',
                description: "Maîtrisez la rotation libre à 360° et survivez au cœur d'une arène circulaire sans limites.",
                bullets: {
                    rotation: 'Défiez votre esprit dans une nouvelle dimension',
                    customization: 'Progression dynamique : Modes de jeu et niveaux évolutifs',
                    optimized: 'Style unique : Skins et thèmes musicaux'
                },
                playAndroid: 'Bientôt sur Android'
            },

            // ─── Portfolio / Showcase ───
            portfolio: {
                interfacePreview: "Aperçu de l'Interface"
            },

            // ─── iineStudio Section ───
            studio: {
                name: 'iineStudio',
                tagline: "L'expertise créative au-delà du jeu.",
                description: "iineGames est né de l'expertise technique de iineStudio. <br>De la production vidéo premium à l'événementiel, des installations interactives au 3D motion design, nous accompagnons les marques dans leur communication visuelle avec des solutions digitales sur mesure.",
                services: {
                    video: 'Production Vidéo',
                    content: 'Création de Contenu',
                    ads: 'Stage & Installations Interactives'
                }
            },

            // ─── Footer ───
            footer: {
                rights: '© 2026 iineGames / iineStudio. Tous droits réservés.'
            }
        }
    },
    en: {
        translation: {
            nav: {
                home: 'HOME',
                gamesApps: 'GAMES & APPS',
                studio: 'IINESTUDIO',
                menuClose: 'Close menu',
                chooseLang: 'Choose language'
            },
            hero: {
                title: 'Created with Passion.',
                titleHighlight: 'Experience with Style.',
                subtitle: 'Improve your daily life with our tools and escape with our games. Simply.',
                scroll: 'Scroll'
            },
            easytrip: {
                badge: 'New Project',
                name: 'EasyTrip',
                slogan: 'Plan, Travel, Share! <br>The companion for all your adventures.',
                description: 'Design tailor-made itineraries and organize your outings with ease. EasyTrip allows you to plan every step of your trip and coordinate your adventures with your loved ones for an unforgettable shared experience.',
                features: {
                    itinerary: { title: 'Itinerary', desc: 'Smart multi-stop.' },
                    collab: { title: 'Collaborative', desc: 'Organize group outings.' },
                    sync: { title: 'Sync', desc: 'Access your trips anywhere.' },
                    social: { title: 'Social', desc: 'Share with the Discord community.' }
                },
                learnMore: 'Discover',
                tagline: 'The companion for all your adventures.',
                webVersion: 'Web Version',
                accessWeb: 'Access',
                availableOn: 'Available on',
                privacyPolicy: 'Privacy Policy',
                termsOfUse: 'Terms of Use',
                stack: 'React | Vite | Firebase | Capacitor'
            },
            snake360: {
                name: 'Snake360',
                slogan: 'Challenge your perspective.',
                description: 'Master 360° free rotation and survive in the heart of a boundless circular arena.',
                bullets: {
                    rotation: 'Challenge your mind in a new dimension',
                    customization: 'Dynamic progress: Game modes and evolving levels',
                    optimized: 'Unique style: Skins and music themes'
                },
                playAndroid: 'Coming Soon on Android'
            },
            portfolio: {
                interfacePreview: 'Interface Preview'
            },
            studio: {
                name: 'iineStudio',
                tagline: 'Creative expertise beyond gaming.',
                description: 'iineGames was born from the technical expertise of iineStudio. <br>From premium video production to events, from interactive installations to 3D motion design, we support brands in their visual communication with tailor-made digital solutions.',
                services: {
                    video: 'Video Production',
                    content: 'Content Creation',
                    ads: 'Stage & Interactive Installations'
                }
            },
            footer: {
                rights: '© 2026 iineGames / iineStudio. All rights reserved.'
            }
        }
    },
    ja: {
        translation: {
            nav: {
                home: 'ホーム',
                gamesApps: 'ゲーム＆アプリ',
                studio: 'IINESTUDIO',
                menuClose: 'メニューを閉じる',
                chooseLang: '言語を選択'
            },
            hero: {
                title: '情熱から生まれ、',
                titleHighlight: '洗練された体験を。',
                subtitle: 'ツールで日常をより良く、ゲームで非日常の楽しみを。',
                scroll: 'スクロール'
            },
            easytrip: {
                badge: '新プロジェクト',
                name: 'EasyTrip',
                slogan: '計画、旅、共有！<br>あらゆる冒険のベストパートナー。',
                description: '自分だけのルートを設計し、スムーズに旅を計画。家族や友人と冒険を共有し、忘れられない体験を共に。',
                features: {
                    itinerary: { title: 'ルート作成', desc: 'スマートな多地点計画' },
                    collab: { title: '共同編集', desc: '仲間とのグループ計画' },
                    sync: { title: '同期', desc: 'どこからでも旅にアクセス' },
                    social: { title: 'ソーシャル', desc: 'Discordコミュニティで共有' }
                },
                learnMore: '発見する',
                tagline: 'あらゆる冒険のベストパートナー。',
                webVersion: 'ウェブ版',
                accessWeb: '活用する',
                availableOn: 'で入手可能',
                privacyPolicy: 'プライバシーポリシー',
                termsOfUse: '利用規約',
                stack: 'React | Vite | Firebase | Capacitor'
            },
            snake360: {
                name: 'Snake360',
                slogan: 'その視点を、極限まで試せ。',
                description: '360度自由自在な回転をマスターし、終わりなき円形アリーナの核心で生き残れ。',
                bullets: {
                    rotation: '新次元で己の精神に挑む',
                    customization: 'ダイナミックな進化：モードとレベル',
                    optimized: '唯一無二のスタイル：スキンと楽曲'
                },
                playAndroid: 'Android版 近日公開'
            },
            portfolio: {
                interfacePreview: 'インターフェース・プレビュー',
            },
            studio: {
                name: 'iineStudio',
                tagline: '開発の先にある、創造力の極み。',
                description: 'iineGamesは、iineStudioの技術的専門知識から誕生しました。<br>高品質なビデオ制作からイベント、インタラクティブなインスタレーションから3Dモーションデザインまで、<br>最高級のデジタルソリューションでブランドの視覚的コミュニケーションをサポートします。',
                services: {
                    video: 'ビデオ制作',
                    content: 'コンテンツ制作',
                    ads: 'ステージ＆インタラクティブ演出'
                }
            },
            footer: {
                rights: '© 2026 iineGames / iineStudio. 無断複写・転載を禁じます。'
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

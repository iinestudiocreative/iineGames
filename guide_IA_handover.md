# 🤖 Mission de Passation pour IA : Site Web iineGames

Le but de cette mission est de restaurer et maintenir le site web iineGames sur un nouvel environnement.

## 📁 1. Structure du Projet (Indispensable)
Assurez-vous que l'IA a accès à ces fichiers dans le même dossier :
- `index.html` : Structure de base.
- `style.css` : Design et animations.
- `main.js` : Logique de rendu dynamique.
- `data.json` : Base de données du contenu.
- `assets/` : Dossier contenant `easytrip_phone.png`, `snake360_hero.png`, `iinegames_logo.png`.

## ⚠️ 2. Pourquoi les images ne s'affichent pas ? (CORS)
Le site utilise `fetch()` en JavaScript pour charger `data.json`. Les navigateurs bloquent cette action si le fichier est ouvert directement (`file:///...`).
**Solution pour l'IA :** Elle doit lancer un serveur local.
- Commande recommandée : `python3 -m http.server 8000` ou toute alternative (Live Server VS Code, etc.).
- URL d'accès : `http://localhost:8000`.

## 🛠️ 3. Vérification des Chemins (Paths)
L'IA doit vérifier que dans `data.json`, les chemins d'images sont relatifs :
```json
"image": "assets/nom_de_l_image.png"
```
Si l'autre PC utilise une structure différente, l'IA doit simplement mettre à jour les chemins dans `data.json`.

## 🎨 4. Design & Animations
Le site repose sur des classes `reveal` gérées par un `IntersectionObserver` dans `main.js`. 
- Si les animations ne se déclenchent pas, vérifiez que `style.css` est bien chargé.
- Le design est inspiré de `sybogames.com` (Premium Dark Mode).

## 📝 5. Instructions de Maintenance
Pour toute modification de texte ou d'image, l'IA doit uniquement intervenir sur le fichier `data.json`. Elle ne doit pas modifier le JS ou le CSS sauf demande spécifique de design.

---
*Document conçu pour être interprété par un assistant IA type Gemini, Claude ou GPT.*

# Portfolio - KLOUGBA Gildas

Portfolio moderne développé avec React, présentant mes compétences en développement web et mobile.

## 🚀 Déploiement sur Netlify

### Méthode 1 : Déploiement via Git (Recommandé)

1. **Poussez votre code sur GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connectez-vous à Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur "Sign up" et connectez-vous avec votre compte Git

3. **Déployez votre site**
   - Cliquez sur "New site from Git"
   - Choisissez votre provider (GitHub, GitLab, ou Bitbucket)
   - Sélectionnez votre repository
   - Configurez les paramètres :
     - **Build command** : `npm run build`
     - **Publish directory** : `build`
   - Cliquez sur "Deploy site"

### Méthode 2 : Déploiement manuel

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Déployez sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Glissez-déposez le dossier `build` dans la zone de déploiement
   - Votre site sera automatiquement déployé

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Build pour la production
npm run build
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Hero.jsx        # Section d'accueil
│   ├── About.jsx       # Section À propos
│   └── Contact.jsx     # Section Contact
├── css/                # Styles CSS
│   ├── Hero.css
│   ├── About.css
│   └── Contact.css
└── assets/             # Images et ressources
    └── profil1.jpg
```

## 🎨 Technologies utilisées

- React 18
- CSS3 avec variables CSS
- Responsive Design
- Animations CSS
- SVG Icons

## 📱 Fonctionnalités

- Design moderne et responsive
- Animations fluides
- Modal de contact
- Intégration WhatsApp
- Navigation mobile avec hamburger menu
- Optimisé pour tous les appareils

## 🔗 Liens

- **GitHub** : [https://github.com/Scofield2207](https://github.com/Scofield2207)
- **LinkedIn** : [https://www.linkedin.com/in/gildas-klougba-561073379/](https://www.linkedin.com/in/gildas-klougba-561073379/)
- **WhatsApp** : +229 66 57 24 65
- **Email** : gildasklougba7@gmail.com 
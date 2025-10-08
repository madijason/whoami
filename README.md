# Jason Madi - Portfolio Personnel

> Portfolio moderne et interactif d'un étudiant en informatique à HelHa de Mons

## 🌍 Aperçu

Ce portfolio présente mon parcours, mes compétences et mes projets en tant qu'étudiant en informatique. Il s'agit d'un site web moderne avec un design élégant et des fonctionnalités interactives.

**🔗 Site web :** [madijason.github.io/whoami](https://madijason.github.io/whoami/)

## ✨ Fonctionnalités actuelles

### 🎨 Design & Interface
- **Design moderne** : Interface élégante avec thème sombre
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- **Animations fluides** : Transitions CSS et curseur personnalisé
- **Code blocks visuels** : Présentation créative avec syntaxe C#

### 📝 Contenu
- **Section Hero** : Présentation personnelle avec code block interactif
- **À propos** : Parcours étudiant et philosophie
- **Compètences** : Technologies maîtrisées (C#, JavaScript, Python, etc.)
- **Projets** : Showcase des réalisations principales
  - **adump** : Logiciel de gestion Active Directory
  - **WeaveOS** : Projet en développement
  - **silverdesk** : Interface Windows pour personnes âgées
- **Contact** : Liens vers GitHub et email

### 🔧 Technologies utilisées
- **Frontend** : HTML5, CSS3 (Variables CSS), JavaScript ES6+
- **Fonts** : Google Fonts (Inter)
- **Animations** : CSS Animations & Transitions
- **Icons** : Emojis natifs
- **Hosting** : GitHub Pages

## 🚫 Travaux en cours - Branche `feature/test-site-features`

### 🔐 Intégration AppWrite (En cours)

**✅ Réalisé :**
- **Page d'administration** (`admin.html`) avec authentification sécurisée
- **Connexion AppWrite** fonctionnelle avec gestion d'erreurs
- **Interface admin** : Tableau de bord avec statistiques et actions
- **Gestion du profil** : Modification du numéro de téléphone
- **Design cohérent** : Utilise le même CSS que la page principale
- **Sécurité** : Sessions persistantes et déconnexion propre

**🚫 À venir :**
- **Édition du profil** : Modification des informations personnelles
- **Gestion des projets** : Ajout/modification/suppression de projets
- **Analytics intégrées** : Statistiques réelles de visiteurs
- **Système de commentaires** : Feedback des visiteurs
- **Blog intégré** : Articles techniques et partage d'expériences
- **Mode sombre/clair** : Basculement de thème
- **Multilingue** : Support FR/EN

### 📊 Améliorations UX prévues
- **Performance** : Optimisation du chargement
- **SEO** : Métadonnées et structuration
- **Accessibilité** : Support ARIA et navigation clavier
- **PWA** : Transformation en Progressive Web App

## 🛠 Structure du projet

```
whoami/
├── index.html          # Page principale du portfolio
├── admin.html          # Interface d'administration (AppWrite)
├── style.css           # Styles principaux
├── styles.css          # Styles supplémentaires
├── script.js           # JavaScript pour interactions
└── README.md           # Ce fichier
```

## 🚀 Développement local

### Prérequis
- Navigateur web moderne
- Serveur local (Live Server, Python, Node.js, etc.)

### Installation
1. Cloner le repository :
```bash
git clone https://github.com/madijason/whoami.git
cd whoami
```

2. Basculer sur la branche de développement :
```bash
git checkout feature/test-site-features
```

3. Lancer un serveur local :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (live-server)
npx live-server

# Avec VS Code Live Server extension
# Clic droit > "Open with Live Server"
```

4. Ouvrir dans le navigateur :
- **Portfolio** : `http://localhost:8000/index.html`
- **Administration** : `http://localhost:8000/admin.html`

## 📋 Configuration AppWrite

Pour tester l'interface d'administration :

1. **Créer un compte** sur [AppWrite Cloud](https://cloud.appwrite.io)
2. **Créer un projet** et noter l'ID
3. **Configurer l'authentification** email/mot de passe
4. **Ajouter les domaines** autorisés (localhost pour le dev)
5. **Créer un utilisateur** administrateur
6. **Tester la connexion** sur `admin.html`

> **Note** : Les identifiants de développement sont intégrés pour les tests

## 📊 Statistiques du projet

- **📅 Début** : 2023
- **🔄 Dernière mise à jour** : Octobre 2025
- **💻 Technologies** : 5+ langages/frameworks
- **🎨 Design** : 100% custom CSS
- **🔒 Sécurité** : AppWrite authentification

## 📞 Contact & Contributions

**Jason Madi**
- 🎓 Étudiant BAC 1 Informatique - HelHa
- 💙 GitHub : [@madijason](https://github.com/madijason)
- 🌍 Portfolio : [madijason.github.io/whoami](https://madijason.github.io/whoami/)
- 📫 Email : [Voir portfolio](https://madijason.github.io/whoami/#contact)

---

**🚧 Statut actuel :** Branche de développement active avec intégration AppWrite en cours

> Ce portfolio évolue constamment avec de nouvelles fonctionnalités et améliorations. N'hésitez pas à suivre les mises à jour !

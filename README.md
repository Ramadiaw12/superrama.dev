# 🚀 Portfolio — Ramatoulaye Diawane

> **AI Infrastructure Engineer** · Freelance · Casablanca, Maroc

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://ishared.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Ramadiaw12-181717?logo=github)](https://github.com/Ramadiaw12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ramatoulaye--diawane-0077B5?logo=linkedin)](https://www.linkedin.com/in/ramatoulaye-diawane-bb87b01b4)
[![License](https://img.shields.io/badge/License-MIT-7cf03d)](#license)

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Structure du projet](#structure-du-projet)
- [Sections](#sections)
- [Stack technique](#stack-technique)
- [Projets présentés](#projets-présentés)
- [Installation & déploiement](#installation--déploiement)
- [Configuration EmailJS](#configuration-emailjs)
- [Personnalisation](#personnalisation)
- [License](#license)

---

## Aperçu

Portfolio personnel entièrement statique (HTML/CSS/JS vanilla), sans framework ni dépendance de build. Conçu pour être déployé en un clic sur Vercel, Netlify ou GitHub Pages.

**Caractéristiques principales :**
- 100% statique — aucun serveur requis
- Responsive design — mobile, tablette, desktop
- Menu burger animé sur mobile
- Carrousel de certifications avec modal zoom
- Formulaire de contact via EmailJS (zéro back-end)
- Animations CSS pures — scroll reveal, typing effect, rotating border
- Icônes 100% SVG inline — aucune dépendance externe pour les éléments critiques
- Mini interfaces UI SVG personnalisées pour chaque carte projet

---

## Structure du projet

```
portfolio/
│
├── index.html              ← Page unique (SPA-like, toutes sections)
│
├── css/
│   └── style.css           ← Styles globaux + responsive (5 breakpoints)
│
├── js/
│   ├── carousel.js         ← Carrousel + modal zoom + autoplay + swipe tactile
│   ├── contact.js          ← Validation formulaire + intégration EmailJS
│   └── main.js             ← Burger menu + scroll reveal + navbar active + smooth scroll
│
├── images/                 ← Assets (à compléter)
│   ├── me.jpg              ← Photo de profil (format carré recommandé)
│   ├── coursera4.jpeg
│   ├── courseraTools.jpeg
│   ├── courseraML.jpeg
│   ├── cisco.jpeg
│   ├── huawei.jpeg
│   └── gestion-projet.jpeg
│
└── assets/
    └── Ramatoulaye_Diawane_Resume_UPDATE3.pdf
```

---

## Sections

| # | Section | ID | Description |
|---|---|---|---|
| 1 | **Home** | `#home` | Titre animé (typing effect), photo avec rotating border, liens sociaux, bouton CV |
| 2 | **À propos** | `#about` | Présentation professionnelle + 3 cartes formation (HESTIM, ESP Dakar, Lycée) |
| 3 | **Certifications** | `#portfolio` | Carrousel 7 slides — autoplay, swipe, modal zoom, navigation clavier |
| 4 | **Projets** | `#projects` | 10 cartes avec mini interfaces SVG sur mesure + liens démo/GitHub |
| 5 | **Compétences** | `#skills` | 3 groupes (Data/ML · DevOps/Cloud · Web/Réseaux) + Soft Skills |
| 6 | **Expérience** | `#experience` | Timeline freelance — AI Infrastructure Engineer (2025–présent) |
| 7 | **Contact** | `#contact` | Formulaire EmailJS + cartes contact (téléphone, email, LinkedIn, GitHub) |

---

## Stack technique

### Front-end
| Technologie | Usage |
|---|---|
| HTML5 sémantique | Structure de la page |
| CSS3 (Grid, Flexbox, Custom Properties) | Layout, animations, responsive |
| JavaScript ES6+ Vanilla | Interactivité, carousel, formulaire |

### Librairies CDN
| Librairie | Version | Usage |
|---|---|---|
| Google Fonts | — | Poppins + Montserrat |
| Font Awesome | 6.5.0 | Icônes actions (flèches, liens, spinner) |
| EmailJS Browser SDK | 4.x | Envoi email sans back-end |
| Devicons | latest | Logos tech officiels (Python, Docker, Git...) |

### Stratégie icônes
```
Font Awesome   → icônes UI génériques (flèches, download, external link)
Devicons CDN   → logos tech officiels (Python, Docker, Git, JS, HTML, CSS, PostgreSQL...)
SVG inline     → logos non couverts (LangChain, LangGraph, MCP, N8N, Apache Spark...)
               + logos sociaux (GitHub, LinkedIn, WhatsApp, X/Twitter)
               + soft skills (stylo, bulle, calendrier, ampoule, cible...)
```

> Ce choix garantit l'affichage dans tous les environnements sans dépendance aux polices d'icônes (Boxicons, Font Awesome brands) qui peuvent échouer à charger selon le réseau.

---

## Projets présentés

| # | Projet | Stack | Lien |
|---|---|---|---|
| 1 | **PromptCraft** — AI Prompt Engineering | LangChain · Python · Streamlit | [↗ netlify](https://prompt-craft26.netlify.app/) |
| 2 | **MCP Project** — Model Context Protocol | MCP · LangGraph · AI Agents | [↗ github](https://github.com/Ramadiaw12/mcpproject) |
| 3 | **LikeOil** — Plateforme Web | JavaScript · Vercel · REST API | [↗ vercel](https://likeoil.vercel.app/) |
| 4 | **System Monitor** — Infrastructure | Docker · Linux · AWS · Zabbix | [↗ vercel](https://systemmonitor-sigma.vercel.app/) |
| 5 | **Blockchain** — Ledger décentralisé | Python · Cryptographie · REST API | [↗ vercel](https://blockchain-project-iota-mauve.vercel.app/) |
| 6 | **Zabbix AWS** — Cloud Monitoring | Zabbix · AWS EC2/RDS · Linux | [↗ github](https://github.com/Ramadiaw12/Project_Zabbix_AWS) |
| 7 | **Heart Disease ML** — Prédiction | Scikit-learn · Python · Streamlit | [↗ streamlit](https://hear-desease.streamlit.app/) |
| 8 | **Energy Dashboard** — Visualisation | Plotly · Streamlit · EDA | [↗ streamlit](https://consommation.streamlit.app/) |
| 9 | **VPN Cisco Lab** — Cybersécurité | Cisco IOS · IPSec · AES-256 | [↗ github](https://github.com/Ramadiaw12/Lab-Configuring-VPN-Cisco-IOS) |
| 10 | **iShared** — Micro-services IA Freelance | LangChain · Python · Vercel | [↗ vercel](https://ishared.vercel.app/) |

---

## Installation & déploiement

### En local

```bash
# Cloner le repo
git clone https://github.com/Ramadiaw12/portfolio.git
cd portfolio

# Option 1 — ouvrir directement
open index.html

# Option 2 — serveur local (recommandé pour éviter les erreurs CORS)
npx serve .
# → http://localhost:3000
```

> Aucune installation npm, aucun build requis. Le projet est 100% statique.

### Vercel (recommandé — déploiement en 30 secondes)

```bash
npm i -g vercel
vercel
# suivre les instructions → URL générée automatiquement
```

Ou glisser-déposer le dossier directement sur [vercel.com](https://vercel.com).

### Netlify

Glisser-déposer le dossier sur [app.netlify.com](https://app.netlify.com) → URL type `superrama.netlify.app`.

### GitHub Pages

```bash
git init
git add .
git commit -m "🚀 initial commit — portfolio superrama"
git branch -M main
git remote add origin https://github.com/Ramadiaw12/portfolio.git
git push -u origin main
```

Puis dans le repo GitHub : **Settings → Pages → Branch: main → / (root) → Save**

URL générée : `https://ramadiaw12.github.io/portfolio`

---

## Configuration EmailJS

Le formulaire utilise [EmailJS](https://emailjs.com) — envoi d'email sans back-end, zéro serveur.

### Étapes de configuration

```bash
# 1. Créer un compte sur https://dashboard.emailjs.com
# 2. Ajouter un Service (Gmail, Outlook...) → copier le service_id
# 3. Créer un Template → copier le template_id
# 4. Récupérer la Public Key → Account → API Keys
```

### Dans `js/contact.js`, remplacer les 3 constantes :

```js
const EMAILJS_SERVICE_ID  = "service_xxxx";    // ← ton service_id
const EMAILJS_TEMPLATE_ID = "template_xxxx";   // ← ton template_id
const EMAILJS_PUBLIC_KEY  = "aBcDeFgHiJkL";   // ← ta public key
```

### Variables à utiliser dans le template EmailJS

| Variable | Contenu |
|---|---|
| `{{from_name}}` | Nom de l'expéditeur |
| `{{reply_to}}` | Email de l'expéditeur |
| `{{subject}}` | Sujet du message |
| `{{message}}` | Corps du message |

> Sans configuration, le formulaire fonctionne en **mode démo** (simulation d'envoi) pour les tests.

---

## Personnalisation

### Changer la couleur accent

```bash
# Remplace #7cf03d par ta couleur dans style.css
sed -i 's/#7cf03d/YOUR_COLOR/g' css/style.css
```

### Ajouter une certification

**1.** Ajouter l'image dans `images/`

**2.** Ajouter le slide dans `index.html` (section `#portfolio`) :
```html
<div class="certification-slide">
    <div class="certification-image" onclick="openModal(N)">
        <img src="images/ma-cert.jpeg" alt="Ma certification" loading="lazy">
    </div>
    <div class="certification-info">
        <h3 class="certification-title">Titre</h3>
        <p class="certification-desc">Description</p>
    </div>
</div>
```

**3.** Mettre à jour `js/carousel.js` — ajouter l'entrée dans `certifications[]` et mettre à jour `totalSlides` dans le HTML.

### Ajouter un projet

Dupliquer un bloc `.rounded-lg` dans `#projects`, modifier le SVG preview et les métadonnées (titre, description, tags, liens).

---

## Breakpoints responsive

| Breakpoint | Largeur max | Comportement clé |
|---|---|---|
| Desktop | > 1024px | Layout complet, navbar horizontale |
| Tablette paysage | 1024px | Grilles adaptées, home en colonne |
| Tablette portrait | 768px | **Burger menu**, padding réduit |
| Mobile | 480px | Grilles 1 colonne, carousel adapté |
| Petit mobile | 375px | Tailles minimales, skills 1 colonne |

---

## Détail des modules JavaScript

### `carousel.js`
- Autoplay 4.5s avec reset au clic manuel
- Navigation : boutons, dots, clavier `←` `→` `Escape`
- Swipe tactile avec seuil 40px
- Modal zoom avec navigation inter-slides
- Génération dynamique des indicateurs dots

### `main.js`
- **Burger menu** : toggle, fermeture au clic lien ou `Escape`, `overflow: hidden` sur body
- **Scroll reveal** : `IntersectionObserver` avec délai en cascade (stagger)
- **Navbar active** : lien courant mis en évidence selon la section visible
- **Navbar shrink** : padding réduit au scroll > 60px
- **Smooth scroll** : offset 80px pour compenser la navbar fixe

### `contact.js`
- Validation `onblur` en temps réel sur chaque champ
- États visuels : `.error` (rouge) / `.success` (vert) sur les inputs
- Spinner de chargement pendant l'envoi
- Mode démo fonctionnel sans EmailJS configuré
- Alertes contextuelles (success / error / info)

---

## License

MIT © 2025 [Ramatoulaye Diawane](https://github.com/Ramadiaw12)

---

<div align="center">

**Conçu & développé par [@superrama](https://github.com/Ramadiaw12) · 2025**

[GitHub](https://github.com/Ramadiaw12) · [LinkedIn](https://www.linkedin.com/in/ramatoulaye-diawane-bb87b01b4) · [iShared](https://ishared.vercel.app)

</div>
# Portfolio — Ramatoulaye Diawane

> Portfolio personnel de Data Engineer / ML Engineer

---

## Structure du projet

```
portfolio/
│
├── index.html                  ← Page principale (tout le contenu)
│
├── css/
│   └── style.css               ← Tous les styles (responsive inclus)
│
├── js/
│   ├── carousel.js             ← Carrousel certifications + modal zoom
│   ├── contact.js              ← Formulaire de contact + EmailJS
│   └── main.js                 ← Navbar scroll, reveal animé, smooth scroll
│
├── images/
│   ├── me.jpg                  ← Photo de profil (à ajouter)
│   ├── coursera4.jpeg          ← Certification Data Science Fundamentals
│   ├── courseraTools.jpeg      ← Certification Data Science Tools
│   ├── courseraML.jpeg         ← Certification Machine Learning Basics
│   ├── advanced-data.jpeg      ← Certification Advanced Data Analysis
│   └── cisco.jpeg              ← Certification Cisco Networking
│
└── assets/
    └── DIAWANE_Ramatoulaye_Resume.pdf   ← CV téléchargeable
```

---

## Sections

| Section | ID | Description |
|---|---|---|
| Accueil | `#home` | Titre animé, photo, boutons CTA, liens sociaux |
| À propos | `#about` | Présentation + 3 cartes de formation |
| Certifications | `#portfolio` | Carrousel 5 certifications + modal zoom |
| Projets | `#projects` | 9 projets avec liens démo/GitHub |
| Compétences | `#skills` | 3 groupes tech + soft skills |
| Contact | `#contact` | Formulaire EmailJS + cartes infos |

---

## Configuration EmailJS

1. Crée un compte sur [https://emailjs.com](https://emailjs.com)
2. Crée un **service** (Gmail, etc.) → récupère le `service_id`
3. Crée un **template** → récupère le `template_id`
4. Récupère ta **public key** dans "Account"
5. Dans `js/contact.js`, remplace :

```js
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // → service_xxxx
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // → template_xxxx
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // → aBcDeFgHiJkLmNop
```

### Variables template EmailJS à utiliser :
- `{{from_name}}` — Nom de l'expéditeur
- `{{reply_to}}` — Email de l'expéditeur
- `{{subject}}` — Sujet du message
- `{{message}}` — Corps du message

---

## Technologies utilisées

- **HTML5** — Structure sémantique
- **CSS3** — Animations, Grid, Flexbox, responsive (4 breakpoints)
- **JavaScript Vanilla** — Carrousel, formulaire, scroll reveal
- **EmailJS** — Envoi email sans back-end
- **Font Awesome 6** — Icônes projets
- **Boxicons** — Icônes navbar, skills, contact
- **Google Fonts** — Poppins + Montserrat

---

## Projets listés

| Projet | Stack | Lien |
|---|---|---|
| PromptCraft | LangChain, Streamlit | [netlify](https://prompt-craft26.netlify.app/) |
| MCP Project | MCP, LangGraph, Python | [github](https://github.com/Ramadiaw12/mcpproject) |
| LikeOil | JavaScript, Vercel | [vercel](https://likeoil.vercel.app/) |
| System Monitor | Docker, Linux, AWS | [vercel](https://systemmonitor-sigma.vercel.app/) |
| Blockchain | Python, Cryptographie | [vercel](https://blockchain-project-iota-mauve.vercel.app/) |
| Zabbix AWS | AWS EC2, Linux | [github](https://github.com/Ramadiaw12/Project_Zabbix_AWS) |
| Heart Disease ML | Scikit-learn, Streamlit | [streamlit](https://hear-desease.streamlit.app/) |
| Dashboard Énergie | Plotly, Streamlit | [streamlit](https://consommation.streamlit.app/) |
| VPN Cisco | Cisco IOS, IPSec | [github](https://github.com/Ramadiaw12/Lab-Configuring-VPN-Cisco-IOS) |

---

## Déploiement

### Netlify (recommandé)
```bash
# Drag & drop le dossier portfolio/ sur app.netlify.com
# ou connecte ton repo GitHub
```

### GitHub Pages
```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git push -u origin main
# Active GitHub Pages dans Settings → Pages → Branch: main
```

---

## Personnalisation rapide

- **Photo** : Remplace `images/me.jpg` par ta photo (format carré recommandé)
- **Couleur accent** : Cherche `#7cf03d` dans `style.css` → remplace par ta couleur
- **CV** : Remplace `assets/DIAWANE_Ramatoulaye_Resume.pdf`
- **Certifications** : Ajoute les images dans `images/` et mets à jour `js/carousel.js`
- **Projets** : Édite les blocs `.rounded-lg` dans `index.html`
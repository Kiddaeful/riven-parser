# Riven Market - Extension Chrome

Extension Chrome avec sidepanel pour le marché Riven.

## 🚀 Installation

### Mode développeur

1. Ouvrez Chrome et allez à `chrome://extensions/`
2. Activez le "Mode développeur" en haut à droite
3. Cliquez sur "Charger l'extension non empaquetée"
4. Sélectionnez le dossier de ce projet

## 📁 Structure du projet

```
riven-market/
├── manifest.json          # Configuration de l'extension
├── background.js          # Service worker (background script)
├── sidepanel.html        # Interface du sidepanel
├── styles/
│   └── sidepanel.css     # Styles CSS
├── scripts/
│   └── sidepanel.js      # Logique JavaScript du sidepanel
└── icons/                # Icônes de l'extension (à ajouter)
```

## 🎨 Fonctionnalités

- **Sidepanel moderne** : Interface utilisateur élégante avec design gradient
- **Service Worker** : Gestion des événements en arrière-plan
- **Storage API** : Sauvegarde locale des données
- **Messages API** : Communication entre sidepanel et background

## 📝 Utilisation

1. Cliquez sur l'icône de l'extension dans Chrome
2. Le sidepanel s'ouvre automatiquement
3. Utilisez le bouton "Actualiser" pour rafraîchir les données

## 🔧 Développement

Pour modifier l'extension :

1. Éditez les fichiers sources
2. Retournez à `chrome://extensions/`
3. Cliquez sur l'icône de rechargement de l'extension

## 📋 Permissions

- `sidePanel` : Permet d'utiliser l'API Sidepanel
- `storage` : Permet de sauvegarder des données localement

## 🎯 Prochaines étapes

- [ ] Ajouter des icônes personnalisées (16x16, 48x48, 128x128 pixels)
- [ ] Implémenter la logique métier spécifique à Riven Market
- [ ] Ajouter plus d'interactions et de fonctionnalités
- [ ] Intégrer une API backend si nécessaire

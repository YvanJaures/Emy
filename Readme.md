# 🏌️ EMY — Plateforme de gestion de tournois de golf

> Application web full-stack permettant la gestion complète de communautés, tournois, équipes et prix pour des événements de golf professionnels et amateurs.

**Auteurs :** Yvan, Emma, Mathieu  
**Version :** 1.0.0  
**Licence :** Non licenciée (projet intégrateur — Collège La Cité)  
**Date :** Avril 2026

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Architecture](#architecture)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Prérequis système](#prérequis-système)
- [Installation](#installation)
- [Configuration](#configuration)
- [Base de données](#base-de-données)
- [Lancement de l'application](#lancement-de-lapplication)
- [Utilisation](#utilisation)
- [API REST](#api-rest)
- [Authentification et sécurité](#authentification-et-sécurité)
- [Cache et performances (Redis)](#cache-et-performances-redis)
- [Validation des données](#validation-des-données)
- [Déploiement](#déploiement)
- [Tests](#tests)
- [Contribution](#contribution)
- [Support](#support)
- [Licence](#licence)

---

## Aperçu

EMY est une plateforme web complète dédiée à la gestion d'événements sportifs de golf. L'application permet aux organisateurs de créer et gérer des communautés de golfeurs, d'organiser des tournois compétitifs, de former des équipes et d'attribuer des prix sponsorisés.

L'architecture full-stack combine un backend robuste en Node.js/Express avec un frontend moderne en Next.js, offrant une expérience utilisateur fluide et une gestion sécurisée des données via SQL Server et Prisma ORM.

---

## Fonctionnalités principales

### 👥 Gestion des utilisateurs
- **Inscription et connexion** sécurisées avec sessions persistantes
- **Profils utilisateurs** complets (nom, email, téléphone, avatar, etc.)
- **Rôles multiples** : Membre, Administrateur, Manager, Sponsor, Employé
- **Gestion des mots de passe** avec hashage bcrypt

### 🏘️ Communautés
- **Création de communautés** publiques ou privées
- **Gestion des membres** avec système d'adhésion
- **Profils communautaires** avec avatar et description
- **Localisation géographique** des communautés

### 🏆 Tournois
- **Organisation d'événements** avec dates, lieux et frais d'inscription
- **Gestion des statuts** (ouvert, fermé, en cours, terminé)
- **Système de joueurs** participants
- **Intégration communautaire** (tournois par communauté)

### 👥 Équipes
- **Création d'équipes** avec clés d'accès privées
- **Gestion des membres** d'équipe avec statuts
- **Limites de joueurs** par équipe
- **Association aux tournois**

### 🏅 Prix et sponsors
- **Système de récompenses** avec valeurs monétaires
- **Types de prix** (individuel, équipe)
- **Sponsorisation** par entreprises
- **Gestion des attributions**

### 🔐 Administration
- **Panneau d'administration** complet
- **Gestion des utilisateurs** (ajout, suppression, modification)
- **Contrôle des tournois** et équipes
- **Logs d'actions** administratives

---

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Base de       │
│   Next.js       │◄──►│   Express.js    │◄──►│   données       │
│   React         │    │   Node.js       │    │   SQL Server    │
│   TypeScript    │    │   TypeScript    │    │   Prisma ORM    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Interface     │    │   API REST      │    │   Schéma de     │
│   utilisateur   │    │   Endpoints     │    │   base de       │
│   responsive    │    │   JSON          │    │   données       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Architecture technique
- **Frontend** : Next.js 16 avec App Router, composants React, Tailwind CSS
- **Backend** : Express.js 5 avec contrôleurs modulaires et middlewares
- **Base de données** : SQL Server avec Prisma comme ORM
- **Authentification** : Sessions avec Passport.js et bcrypt
- **Communication** : API REST avec JSON, SSE pour temps réel

---

## Technologies utilisées

### Backend
| Technologie | Version | Description |
|---|---|---|
| **Node.js** | 18+ | Runtime JavaScript |
| **Express.js** | 5.2.1 | Framework web |
| **Prisma** | 7.3.0 | ORM de base de données |
| **SQL Server** | - | Système de gestion de base de données |
| **Passport.js** | 0.7.0 | Authentification |
| **bcrypt** | 6.0.0 | Hashage des mots de passe |
| **express-session** | 1.19.0 | Gestion des sessions |
| **Redis** | - | Cache distributé et sessions |
| **Nodemailer** | 7.0.13 | Envoi d'emails |
| **Helmet** | 8.1.0 | Sécurité HTTP |
| **CORS** | 2.8.6 | Cross-Origin Resource Sharing |
| **Compression** | 1.8.1 | Compression des réponses |

### Frontend
| Technologie | Version | Description |
|---|---|---|
| **Next.js** | 16.1.6 | Framework React full-stack |
| **React** | 18.2.0 | Bibliothèque UI |
| **TypeScript** | 5.9.3 | JavaScript typé |
| **Tailwind CSS** | 4.0 | Framework CSS |
| **React Icons** | 5.5.0 | Bibliothèque d'icônes |

### Outils de développement
- **Nodemon** : Rechargement automatique du serveur
- **ESLint** : Linting du code
- **Faker.js** : Génération de données de test
- **tsx** : Exécution TypeScript

---

## Structure du projet

```
EMY/
├── emy_app/                    # Application Next.js (Frontend)
│   ├── app/                    # Pages Next.js App Router
│   │   ├── adminCommunity/     # Gestion admin communautés
│   │   ├── createTeam/         # Création d'équipes
│   │   ├── createTour/         # Création de tournois
│   │   ├── login/              # Connexion utilisateur
│   │   ├── signup/             # Inscription
│   │   ├── profil/             # Profil utilisateur
│   │   └── ...
│   ├── components/             # Composants React
│   │   ├── atoms/              # Composants de base
│   │   ├── molecules/          # Composants composites
│   │   └── organisms/          # Composants complexes
│   ├── hooks/                  # Hooks personnalisés
│   │   ├── useAuth.tsx         # Gestion authentification
│   │   ├── Type_DTO.tsx        # Types TypeScript
│   │   └── ...
│   ├── public/                 # Assets statiques
│   └── validations/            # Validations frontend
├── src/                        # Code source backend
│   ├── config/                 # Configuration
│   ├── controllers/            # Contrôleurs API
│   │   ├── adminController.js  # Logique admin
│   │   ├── memberController.js # Logique membres
│   │   └── ...
│   ├── models/                 # Modèles de données
│   │   ├── seed.js             # Données de test
│   │   └── seedDatas.js        # Seeds alternatifs
│   ├── routes/                 # Définition des routes
│   │   ├── admin.js            # Routes admin
│   │   ├── member.js           # Routes membres
│   │   └── ...
│   ├── services/               # Services métier
│   └── middlewares/            # Middlewares Express
│       ├── auth.js             # Authentification
│       ├── adminAuth.js        # Auth admin
│       └── sse.js              # Server-Sent Events
├── prisma/                     # Configuration Prisma
│   ├── schema.prisma           # Schéma base de données
│   └── migrations/             # Migrations DB
├── Documentation/              # Documents projet
├── server.js                   # Point d'entrée serveur
├── package.json                # Dépendances backend
└── tsconfig.json               # Configuration TypeScript
```

---

## Prérequis système

### Logiciels requis
- **Node.js** version 18 ou supérieure
- **npm** version 9 ou supérieure
- **SQL Server** (local ou distant)
- **Git** pour le contrôle de version

### Configuration système recommandée
- **RAM** : 4 GB minimum
- **Disque** : 2 GB d'espace libre
- **OS** : Windows 10+, macOS 10.15+, Linux Ubuntu 18.04+

---

## Installation

### 1. Clonage du dépôt
```bash
git clone https://github.com/YvanJaures/Emy.git
cd Emy
```

### 2. Installation des dépendances backend
```bash
npm install
```

### 3. Installation des dépendances frontend
```bash
cd emy_app
npm install
cd ..
```

### 4. Génération du client Prisma
```bash
npx prisma generate
```

---

## Configuration

### Variables d'environnement
Créer un fichier `.env` à la racine du projet :

```env
# Configuration serveur
NODE_ENV=development
PORT=3000

# Base de données SQL Server
DATABASE_URL="sqlserver://localhost:1433;database=EMY;user=sa;password=VotreMotDePasse;trustServerCertificate=true"

# Sessions
SESSION_SECRET=votre_secret_de_session_tres_long_et_aleatoire_au_moins_32_caracteres

# Cache Redis (optionnel - améliore les performances)
REDIS_URL=redis://localhost:6379
# Redis sur port personnalisé : redis://localhost:6380
# Redis avec authentification : redis://:password@localhost:6379

# Email (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=votre.email@gmail.com
MAIL_PASS=votre_mot_de_passe_application

# Autres configurations
TZ=America/Toronto
```

### Configuration Prisma
Le fichier `prisma/schema.prisma` contient la configuration de la base de données :

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

---

## Base de données

### Schéma des entités

#### Utilisateurs et rôles
- **Member** : Utilisateur de base avec profil complet
- **Admin** : Administrateur de communauté
- **Manager** : Gestionnaire de communauté
- **Sponsor** : Sponsor d'événements
- **Employee** : Employé (extension de Member)

#### Événements et organisation
- **Community** : Communauté de golfeurs
- **Tournament** : Tournoi sportif
- **Team** : Équipe participante
- **Player** : Joueur inscrit à un tournoi

#### Récompenses
- **Prize** : Prix à gagner
- **Type** : Type de prix
- **Prize_sponsor** : Liaison sponsor-prix

#### Relations
- **Community_member** : Adhésion communauté
- **Team_member** : Membre d'équipe

### Initialisation de la base de données

#### Application du schéma
```bash
# Appliquer les migrations
npx prisma migrate deploy

# Ou pousser le schéma directement
npx prisma db push
```

#### Peuplement avec données de test
```bash
# Seed avec Faker.js
node ./src/models/seed.js

# Seed alternatif
node ./src/models/seedDatas.js
```

#### Visualisation des données
```bash
# Interface graphique Prisma Studio
npx prisma studio
```

---

## Lancement de l'application

### Mode développement
```bash
# Terminal 1 : Backend
npm run dev

# Terminal 2 : Frontend
cd emy_app
npm run dev
```

### Mode production
```bash
# Build du frontend
cd emy_app
npm run build
cd ..

# Démarrage du serveur
npm start
```

L'application sera accessible sur : **http://localhost:3000**

### Vérifications
- **Backend** : http://localhost:3000/api/health
- **Frontend** : http://localhost:3000
- **Base de données** : Vérifier la connexion via Prisma Studio

---

## Utilisation

### Interface utilisateur

#### Page d'accueil
- Présentation des communautés disponibles
- Redirection automatique si connecté

#### Authentification
- **Inscription** : Création de compte avec validation
- **Connexion** : Accès sécurisé avec sessions
- **Réinitialisation** : Récupération de mot de passe

#### Gestion des communautés
- **Rejoindre** une communauté existante
- **Créer** une nouvelle communauté (Manager)
- **Administrer** sa communauté (Admin)

#### Organisation de tournois
- **Créer** un tournoi avec paramètres
- **Gérer** les inscriptions et équipes
- **Attribuer** les prix

#### Gestion d'équipes
- **Créer** une équipe avec clé d'accès
- **Inviter** des membres
- **Participer** aux tournois

### Rôles utilisateur

| Rôle | Permissions |
|---|---|
| **Membre** | Profil, rejoindre communautés/équipes, participer tournois |
| **Administrateur** | Gestion communauté, modération, organisation tournois |
| **Manager** | Création communautés, supervision |
| **Sponsor** | Parrainage prix, visibilité entreprise |
| **Employé** | Accès limité selon entreprise |

---

## API REST

### Préfixes et conventions
- **Base URL** : `/api`
- **Format** : JSON
- **Authentification** : Sessions (header `connect.sid`)
- **Routes admin** : Préfixe `/api/admin` avec rôle admin requis

### Endpoints principaux

#### Utilisateurs (`/api`)
```
POST   /member/add              # Créer un membre
PATCH  /member/update           # Modifier profil
PATCH  /member/password         # Changer mot de passe
POST   /member/email            # Envoyer email vérification
POST   /member/community/join   # Rejoindre communauté
POST   /member/tour/join        # S'inscrire tournoi
POST   /member/team             # Créer équipe
POST   /member/team/add         # Rejoindre équipe
GET    /users                   # Lister membres
GET    /user                    # Détails membre
```

#### Tournois (`/api`)
```
GET    /tournaments             # Lister tournois
GET    /tournaments/admin/:id   # Tournois d'un admin
```

#### Communautés (`/api`)
```
GET    /communities             # Lister communautés
GET    /community               # Détails communauté
GET    /community/members       # Membres communauté
```

#### Administration (`/api/admin`) 🔒
```
POST   /tour                    # Créer tournoi
PATCH  /tour/status             # Modifier statut tournoi
POST   /member                  # Ajouter membre équipe
DELETE /member                  # Retirer membre équipe
DELETE /member/tour             # Désinscrire tournoi
DELETE /member/community        # Retirer communauté
POST   /prize                   # Créer prix
PATCH  /prize                   # Modifier prix
DELETE /prize                   # Supprimer prix
POST   /admin                   # Ajouter administrateur
DELETE /admin                   # Supprimer administrateur
GET    /admins                  # Lister administrateurs
PATCH  /community/update        # Modifier communauté
```

#### Sponsors (`/api`)
```
POST   /member/sponsor           # Créer sponsor
POST   /member/sponsor/prize     # Parrainer prix
```

### Codes de réponse
- **200** : Succès
- **201** : Créé
- **400** : Requête invalide
- **401** : Non autorisé
- **403** : Interdit
- **404** : Non trouvé
- **500** : Erreur serveur

---

## Authentification et sécurité

### Système d'authentification
- **Passport.js** avec stratégie locale
- **Sessions Express** persistantes
- **Hashage bcrypt** des mots de passe
- **Middleware d'authentification** pour routes protégées

### Sécurité
- **Helmet.js** : Headers de sécurité HTTP
- **CORS** : Contrôle accès cross-origin
- **Validation** des entrées utilisateur
- **Protection XSS** et injection SQL via Prisma
- **Rate limiting** (optionnel)

### Sessions
- **Stockage** : MemoryStore (dev) / Redis (prod)
- **Durée** : 24h par défaut
- **Cookies** : Sécurisés, httpOnly

---

## Cache et performances (Redis)

### Architecture du cache

EMY utilise **Redis** comme système de cache distribué pour optimiser les performances et réduire la charge sur la base de données.

```
┌──────────────┐
│  Requête     │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│  Vérifier Redis      │ ◄── Cache hit = retour immédiat
│  GetRedisCache()     │
└──────┬───────────────┘
       │ Cache miss
       ▼
┌──────────────────────┐
│  Requête DB          │
│  (SQL Server/Prisma) │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Stocker en cache    │ ◄── SetRedisCache() : TTL 5 min
│  Retourner données   │
└──────────────────────┘
```

### Fonctionnalités du cache

#### 1. GetRedisCache(clé)
**Récupère les données du cache**
```javascript
// Usage dans les getters
const cacheKey = "tournaments";
const cached = await GetRedisCache(cacheKey);
if (cached) return cached;  // Cache hit

const data = await prisma.tournament.findMany(...);
await SetRedisCache(cacheKey, data);
return data;
```
- Retourne `null` si Redis non disponible
- Parse automatiquement JSON
- Zero impact si cache désactivé

#### 2. SetRedisCache(clé, données, TTL?)
**Stocke les données avec expiration**
```javascript
// Par défaut : 5 minutes (300 secondes)
await SetRedisCache("admin-1", adminData);

// Clés avec patterns pour invalidation groupée
await SetRedisCache("tournament-123", tourData);
await SetRedisCache("team-456-by-tour-123", teamData);
```
- TTL par défaut : **300 secondes (5 minutes)**
- Stockage JSON automatique
- Cache silencieusement désactivé si Redis offline

#### 3. DelRedisCache(pattern)
**Invalide les données du cache**
```javascript
// Invalidation spécifique
await DelRedisCache("team-456");

// Invalidation par pattern (wildcard)
await DelRedisCache("tournament-*");
await DelRedisCache("admin-*");

// Invalidation massive
await DelRedisCache("*");
```
- Support des patterns avec `*`
- Supprime toutes les clés correspondantes
- Appelé au **début** des opérations CUD (Create, Update, Delete)

### Pattern de cache dans les modèles

#### Opérations de lecture (Getters)
```javascript
export async function getAllTournaments() {
  try {
    // 1. Vérifier le cache
    const cached = await GetRedisCache("tournaments");
    if (cached) return cached;

    // 2. Requête DB
    const tournaments = await prisma.tournament.findMany({...});

    // 3. Mettre en cache
    await SetRedisCache("tournaments", tournaments);
    return tournaments;
  } catch (error) {
    console.error("getAllTournaments error:", error);
    throw error;
  }
}
```

#### Opérations d'écriture (CUD)
```javascript
export async function createTour(name, location, ...) {
  // 1. INVALIDER LE CACHE AU DÉMARRAGE
  try {
    await DelRedisCache("tournaments");
    await DelRedisCache("tournaments-*");
    await DelRedisCache("tour-teams-community-*");
  } catch (error) {
    console.error("Cache invalidation error:", error);
  }

  // 2. Effectuer l'opération DB
  return await prisma.tournament.create({...});
}
```

### Stratégie d'invalidation de cache

| Opération | Clés invalidées | Raison |
|---|---|---|
| `createTour()` | `tournaments-*`, `tour-teams-community-*` | Nouveau tournoi affecte listes |
| `updateTourStatus()` | `tournaments-*`, `teams-by-tour-*` | Changement d'état critique |
| `deleteTour()` | `tournaments-*`, `teams-by-tour-*` | Suppression affecte références |
| `addTeamMember()` | `teams-by-tour-*`, `tour-teams-community-*` | Équipe modifiée |
| `addMember()` | `members-*`, `member-email-*`, `members-community-*` | Nouveau membre |
| `updateMember()` | `member-*`, `members-*` | Données membre mises à jour |
| `deleteAdmin()` | `admins-*`, `admin-*` | Admin supprimé |

### Performance et bénéfices

#### Avant cache Redis
```
Requête d'un tournoi : ~200-300ms (requête DB + sérialisation)
100 requêtes/sec : 100 accès DB/sec
```

#### Après cache Redis
```
Cache hit : ~1-5ms (simple lookup Redis)
Cache miss : ~200-300ms (requête DB normale)
Taux hit estimé : 80-90% en production
100 requêtes/sec : ~10-20 accès DB/sec (reduction 80-90%)
```

### Installation et configuration

### Local (Développement)
```bash
# Windows (avec WSL ou subsystem)
# Installer Redis via WSL : wsl apt-get install redis-server
# Ou utiliser Docker : docker run -d -p 6379:6379 redis:latest

# macOS
brew install redis
redis-server

# Linux (Ubuntu/Debian)
sudo apt-get install redis-server
redis-server
```

#### Vérification de la connexion
```bash
# Test de connexion
redis-cli ping
# Réponse : PONG

# Afficher les clés en cache
redis-cli keys "*"

# Monitorer en temps réel
redis-cli monitor

# Vider le cache
redis-cli FLUSHALL
```

#### En production
```bash
# Option 1 : Azure Redis Cache
# REDIS_URL=redis://:password@emy.redis.cache.windows.net:6379

# Option 2 : AWS ElastiCache
# REDIS_URL=redis://emy.xxxxx.cache.amazonaws.com:6379

# Option 3 : Docker compose
docker run -d --name redis -p 6379:6379 redis:latest
```

### Dépannage

#### Redis non disponible
- **Impact** : Cache automatiquement désactivé
- **Fallback** : Requêtes directes DB sans cache
- **Log** : `Redis non disponible, cache désactivé.`
- **Performance** : Réduite mais fonctionnelle

#### Clé cachée obsolète
- **Cause** : Opération CUD non exécutée ou erreur d'invalidation
- **Solution** : Attendre 5 minutes (TTL auto) ou `FLUSHALL` Redis
- **Prévention** : Invalider au DÉBUT des opérations CUD

#### Taille du cache trop importante
- **Solution** : Réduire TTL ou implémenter LRU eviction
- **Monitoring** : `redis-cli INFO memory`
- **Limite** : Configurable dans Redis (maxmemory)

---

## Validation des données

### Règles de validation frontend
```typescript
// Texte général (max 250 caractères)
texteEstValide(texte: string): boolean

// Email
courrielEstValide(email: string): boolean

// Mot de passe (min 8 caractères)
motDePasseEstvalide(password: string): boolean

// Date de naissance (format DD/MM/YYYY)
NaissanceEstValide(date: string): boolean

// Pays
paysEstValide(country: string): boolean

// Téléphone
telEstValide(phone: string): boolean
```

### Validation backend
- **Middleware de validation** Express
- **Sanitisation** des entrées
- **Vérification des types** de données
- **Contraintes de base de données** Prisma

---

## Déploiement

### Préparation
1. **Build frontend** : `cd emy_app && npm run build`
2. **Configuration production** : Variables d'environnement
3. **Base de données** : Migration et seed en production
4. **Optimisations** : Compression, cache

### Environnements cibles
- **Heroku** : Déploiement facile avec buildpacks
- **Vercel** : Pour le frontend Next.js
- **Azure** : Services cloud Microsoft
- **AWS** : EC2, RDS, S3
- **Docker** : Conteneurisation complète

### Variables production
```env
NODE_ENV=production
DATABASE_URL="sqlserver://prod-server:1433;database=EMY_prod;..."
SESSION_SECRET="production_secret_very_long_and_secure"
MAIL_HOST="smtp.production.com"
```

### Monitoring
- **Logs** : Winston ou console en production
- **Health checks** : Endpoint `/api/health`
- **Métriques** : Response times, erreurs

---

## Tests

### Configuration des tests
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test:unit": "jest",
    "test:e2e": "cypress run"
  }
}
```

### Types de tests recommandés
- **Tests unitaires** : Fonctions utilitaires, validations
- **Tests d'intégration** : API endpoints, base de données
- **Tests E2E** : Parcours utilisateur complets
- **Tests de performance** : Charge, stress

### Données de test
- **Seeds** : Données fictives avec Faker.js
- **Fixtures** : Jeux de données prédéfinis
- **Mocking** : Simulation des services externes

---

## Contribution

### Workflow de développement
1. **Fork** le projet
2. **Créer** une branche feature : `git checkout -b feature/nom-fonctionnalite`
3. **Commiter** régulièrement : `git commit -m "feat: description claire"`
4. **Push** la branche : `git push origin feature/nom-fonctionnalite`
5. **Pull Request** avec description détaillée

### Standards de code
- **ESLint** : Respect des règles de linting
- **Prettier** : Formatage automatique
- **TypeScript** : Typage strict
- **Commits** : Messages conventionnels

### Branches
- `main` : Code de production stable
- `develop` : Développement actif
- `feature/*` : Nouvelles fonctionnalités
- `bugfix/*` : Corrections de bugs
- `hotfix/*` : Corrections urgentes

---

## Support

### Documentation
- **API Routes** : `Documentation/routes api.txt`
- **Guide Prisma** : `Documentation/guide_prisma.md`
- **Corps JSON** : `Documentation/body json de les routes.txt`

### Logs et débogage
- **Logs serveur** : Console ou fichiers logs
- **Prisma Studio** : Inspection base de données
- **Browser DevTools** : Debugging frontend

### Issues et bugs
- **GitHub Issues** : Signaler bugs et demandes
- **Labels** : `bug`, `enhancement`, `question`
- **Templates** : Bug report, Feature request

---

## Licence

**Non licencié** - Projet intégrateur du Collège La Cité

Ce projet est développé dans le cadre d'un projet académique et n'est pas destiné à un usage commercial sans autorisation préalable des auteurs.

### Droits d'auteur
- **Code** : Yvan, Emma, Mathieu
- **Design** : Équipe EMY
- **Documentation** : Équipe EMY

---

*Développé avec ❤️ par Yvan, Emma et Mathieu*  
*Collège La Cité — Session 4 — Avril 2026*
const projects = [
    {
      name: "Electro Dépôt - Contribution professionnelle",
      shortDesc: "Mise en production de la homepage et création de landing pages sous Magento.",
      image: ED,
      tags: ["Magento", "HTML5", "CSS3", "CMS", "Production", "SEO", "E-commerce"],
      link: "https://www.electrodepot.fr", // 🔗 Met le lien exact si spécifique à une landing
      presentation: `
        Dans le cadre de mon expérience professionnelle chez **Electro Dépôt**, j’ai contribué à la mise en production
        de la homepage du site e-commerce via le CMS **Magento**. Mon rôle a été d'assurer l'intégration des éléments
        visuels, la mise à jour des blocs dynamiques, et la gestion du contenu selon les campagnes marketing en cours.
    
        J’ai également conçu et intégré plusieurs **landing pages informatives** destinées à améliorer l’expérience utilisateur
        et à sensibiliser les clients sur des sujets comme la **consommation énergétique** des appareils électroménagers.
        Ces pages combinaient à la fois du contenu éditorial optimisé pour le référencement, des éléments visuels engageants,
        et un respect strict de la charte graphique de l’entreprise.
      `,
      apprentissage: `
        Cette mission m’a permis de :
        - Me familiariser avec le CMS professionnel **Magento**.
        - Comprendre les processus de **mise en production en environnement e-commerce**.
        - Travailler en collaboration avec des équipes marketing, design et SEO.
        - Améliorer mes compétences en **HTML/CSS orienté CMS**.
        - Créer des **pages à forte valeur ajoutée** en termes d’UX et de contenu informatif.
        - Respecter les contraintes de temps et de validation propres au monde de l’entreprise.
    
        J’ai également renforcé ma rigueur dans le suivi des versions et des validations clients, tout en assurant la cohérence visuelle
        sur desktop et mobile.
      `,
    },
    
    {
      name: "Maquette ABC",
      shortDesc: "Première intégration HTML/CSS selon une maquette imposée.",
      image: ABCImage,
      tags: ["HTML5", "CSS3", "Accessibilité"],
      link: "https://ton-lien.vercel.app", // 🔗 Ajoute ton vrai lien ici
      presentation: `
        Ce projet consistait à reproduire fidèlement une maquette graphique en HTML5 et CSS3, 
        tout en respectant les standards W3C et les bonnes pratiques de référencement naturel. 
        Il incluait également l'intégration d'un player YouTube, l'utilisation de polices spécifiques 
        (Oswald, Droid Sans, Droid Serif), et des consignes strictes sur l’accessibilité.
      `,
      apprentissage: `
        - Maîtrise des balises sémantiques HTML5
        - Structuration propre et maintenable du CSS
        - Importation et utilisation de polices personnalisées via @import
        - Intégration d’un lecteur vidéo YouTube
        - Sensibilisation aux normes d’accessibilité
        - Conformité aux standards W3C
      `,
    },
    {
      name: "Maquette Responsive",
      shortDesc: "Intégration d'une maquette responsive en HTML5, CSS3 et JavaScript.",
      image: Safy,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "BEM"],
      link: "https://ton-lien.vercel.app", // 🔗 Ajoute ton vrai lien ici
      presentation: `
        Ce projet consistait à intégrer une maquette responsive en respectant les standards du W3C,
        en utilisant HTML5, CSS3, et JavaScript. L’objectif principal était de rendre la page web
        accessible et fonctionnelle sur tous les types de supports (ordinateur, tablette, smartphone),
        tout en respectant une logique de structure claire avec la méthodologie BEM.
        
        L’intégration devait également s’adapter dynamiquement selon la taille de l’écran, notamment
        en affichant des images en haute ou basse définition selon la résolution. Le tout devait
        également respecter des bonnes pratiques en matière de SEO.
      `,
      apprentissage: `
        Grâce à ce projet, j’ai consolidé mes compétences en :
        - Intégration responsive à l’aide de media queries.
        - Utilisation de la méthodologie BEM pour une structure CSS organisée.
        - Adaptation dynamique des images selon les tailles d’écran.
        - Respect des normes W3C pour un code propre et accessible.
        - Amélioration des performances et du référencement naturel.
        
        Ce projet m’a permis de mieux comprendre les enjeux de l’accessibilité, de l’optimisation
        et de l’adaptabilité d’un site web moderne.
      `,
    },
   
    {
      name: "my_meetic",
      shortDesc: "Site de rencontre inspiré de Meetic avec PHP, JQuery et Ajax.",
      image: Meetic,
      tags: ["PHP", "JQuery", "Ajax", "POO", "HTML5", "CSS3"],
      link: "https://ton-lien.vercel.app", // 🔗 Remplace par le vrai lien déployé si tu l’as
      presentation: `
        Le projet **my_meetic** consistait à développer un site de rencontre en utilisant PHP orienté objet, JQuery et Ajax, sans framework ni plugins externes.
        Le concept reprend celui de Meetic, mais ciblé pour un établissement scolaire, avec des profils filtrables selon plusieurs critères :
        genre, ville, loisirs et tranche d'âge.
    
        Les visiteurs peuvent s’inscrire ou se connecter via un formulaire sécurisé. Les utilisateurs connectés accèdent à leur compte,
        peuvent modifier leurs informations ou supprimer leur compte (de manière logique, sans DELETE SQL).
    
        Une page de recherche permet de filtrer dynamiquement les utilisateurs à l’aide d’un carrousel codé en JQuery.
      `,
      apprentissage: `
        Ce projet m’a permis de :
        - Renforcer ma maîtrise de **PHP orienté objet**.
        - Manipuler le **DOM en JQuery** sans plugins.
        - Gérer les appels AJAX pour une meilleure expérience utilisateur.
        - Protéger les données (hashage des mots de passe, validation front et back, prévention des injections SQL).
        - Concevoir une **base de données relationnelle efficace**.
        - Implémenter des filtres complexes avec gestion dynamique côté client.
        - Organiser un projet sans framework, en full vanilla PHP/JQuery.
    
        En bonus, j’ai exploré la mise en place d’une **messagerie** entre membres et d’un **carrousel interactif**.
      `,
    },
    {
      name: "My Cinema",
      shortDesc: "Site de gestion de cinéma en PHP/MySQL avec recherche, historique et abonnements.",
      image: Cinema,
      tags: ["PHP", "MySQL", "SQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "https://ton-lien.vercel.app", // 🔗 Remplace par ton lien en ligne si dispo
      presentation: `
        Le projet **My Cinema** consiste à créer un site web qui permet d’interagir avec une base de données
        de gestion de cinéma. L’application propose de nombreuses fonctionnalités comme la recherche de films
        par genre, distributeur ou date, la gestion des abonnements clients, et l’affichage de l’historique
        des films vus par chaque abonné.
    
        L’objectif principal était de maîtriser la manipulation de données via PHP et MySQL, tout en séparant
        clairement la logique métier de l’affichage. Le site respecte les normes HTML5 et propose une
        pagination dynamique pour limiter les résultats affichés à l’écran.
      `,
      apprentissage: `
        Ce projet m’a permis de :
        - Approfondir mes compétences en **PHP procédural** et en **SQL**.
        - Manipuler et interroger efficacement une base de données **MySQL**.
        - Gérer dynamiquement des filtres et des formulaires de recherche.
        - Créer des relations entre les tables et assurer leur intégrité (clé étrangère, collation...).
        - Implémenter un système de pagination personnalisable.
        - Organiser un site structuré avec une séparation claire entre logique et affichage.
    
        En bonus, j’ai envisagé des évolutions possibles comme un **accès client**, un **back-office admin**
        et un **système de planification de séances en salle**.
      `,
    }    ,
    {
      name: "My Spotify",
      shortDesc: "Création d’un lecteur musical en ligne avec React, API et JSON.",
      image: Spotify,
      tags: ["React", "API", "Docker", "HTML", "CSS", "JavaScript"],
      link: "https://ton-lien.vercel.app", // 🔗 Remplace par ton vrai lien déployé si tu l’as
      presentation: `
        **My Spotify** est un projet de lecteur musical en ligne développé avec **React**, basé sur l’exploitation
        d’une **API REST** fournie via un container **Docker**. Le site permet de naviguer dans une base de
        données musicale, en affichant des listes paginées et des détails dynamiques pour les albums, artistes
        et genres.
    
        Il comporte plusieurs pages interactives : page d’accueil avec albums aléatoires, recherche globale,
        listing et détails d’albums, artistes et genres. Chaque album permet d’écouter ses titres grâce à un
        lecteur audio HTML5 intégré, empêchant la lecture simultanée de plusieurs musiques.
      `,
      apprentissage: `
        Ce projet m’a permis de :
        - Maîtriser **React** pour créer des composants dynamiques et réactifs.
        - Consommer une **API REST** locale avec **Axios** ou fetch, en manipulant du **JSON**.
        - Gérer la **pagination** côté front pour afficher les données progressivement.
        - Implémenter une **navigation** fluide avec React Router.
        - Utiliser un **lecteur audio HTML5** de manière contrôlée (lecture exclusive).
        - Travailler avec **Docker** pour simuler une API distante.
        
        C’est un excellent projet pour comprendre le lien entre frontend React et backend API, tout en
        manipulant des concepts essentiels du développement web moderne.
      `,
    },
    
  
  ];
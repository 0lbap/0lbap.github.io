export const projects = [
  {
    id: 0,
    title: {
      en: "Online “Guess Who?” game",
      fr: "Jeu du “Qui est-ce ?” en ligne",
    },
    description: {
      en: "A web implementation of the famous “Guess Who?” game, including both multiplayer mode and AI mode. Also includes different game boards, and a board creation tool.",
      fr: "Une implémentation web du jeu du “Qui est-ce ?”, incluant un mode multijoueur et un mode contre l'ordinateur. Inclus également différents plateaux de jeu, et un outil de création de plateaux.",
    },
    tags: ["JavaScript", "Express", "Socket.IO"],
    thumbnail: `${import.meta.env.BASE_URL}guess-who/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}guess-who/1.png`,
      `${import.meta.env.BASE_URL}guess-who/2.png`,
      `${import.meta.env.BASE_URL}guess-who/3.png`,
      `${import.meta.env.BASE_URL}guess-who/4.png`,
      `${import.meta.env.BASE_URL}guess-who/5.png`,
      `${import.meta.env.BASE_URL}guess-who/6.png`,
      `${import.meta.env.BASE_URL}guess-who/7.png`,
      `${import.meta.env.BASE_URL}guess-who/8.png`,
      `${import.meta.env.BASE_URL}guess-who/9.png`,
    ],
    repository: "https://github.com/0lbap/quiestce",
  },
  {
    id: 1,
    title: {
      en: "“check-this-outfit”, an e-commerce website",
      fr: "“check-this-outfit”, un site web de e-commerce",
    },
    description: {
      en: "A responsive streetwear e-commerce website with item sorting and filtering, shopping cart, user accounts and orders history.",
      fr: "Une boutique d'habits de streetwear en ligne responsive avec tri et filtrage des articles, panier, comptes utilisateur et historique des commandes.",
    },
    tags: ["PHP", "MySQL", "Bootstrap"],
    thumbnail: `${import.meta.env.BASE_URL}check-this-outfit/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}check-this-outfit/1.png`,
      `${import.meta.env.BASE_URL}check-this-outfit/2.png`,
      `${import.meta.env.BASE_URL}check-this-outfit/3.png`,
      `${import.meta.env.BASE_URL}check-this-outfit/4.png`,
      `${import.meta.env.BASE_URL}check-this-outfit/5.png`,
      `${import.meta.env.BASE_URL}check-this-outfit/6.png`,
    ],
    repository: "https://github.com/0lbap/check-this-outfit",
  },
  {
    id: 2,
    title: {
      en: "“TER • Rébus”, an online rebus generator",
      fr: "“TER • Rébus”, un générateur de rébus en ligne",
    },
    description: {
      en: "A responsive web application for generating and guessing rebus in french, composed of an API for the rebus generation algorithm, and a web interface for displaying the images.",
      fr: "Une application web responsive pour générer et deviner des rébus en français, composée d'une API pour l'algorithme de génération de rébus, et d'une interface web pour l'affichage des images.",
    },
    tags: ["Flask", "SQLAlchemy", "React", "Bootstrap"],
    thumbnail: `${import.meta.env.BASE_URL}terrebus/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}terrebus/1.png`,
      `${import.meta.env.BASE_URL}terrebus/2.png`,
      `${import.meta.env.BASE_URL}terrebus/3.png`,
      `${import.meta.env.BASE_URL}terrebus/4.png`,
      `${import.meta.env.BASE_URL}terrebus/5.png`,
      `${import.meta.env.BASE_URL}terrebus/6.png`,
      `${import.meta.env.BASE_URL}terrebus/7.png`,
      `${import.meta.env.BASE_URL}terrebus/8.png`,
    ],
    repository: "https://gitlab.com/pablolaviron/ter-rebus-frontend",
  },
  {
    id: 3,
    title: {
      en: "Online “Pictochat” clone",
      fr: "Clone de “Pictochat” en ligne",
    },
    description: {
      en: "An online clone of the famous Nintendo DS chatting app “Pictochat” allowing users to send messages and share drawings through multiples chat rooms.",
      fr: "Un clone en ligne de l'application de tchat “Pictochat” sur Nintendo DS permettant aux utilisateurs d'échanger des messages et partager des dessins via plusieurs salons de discussion.",
    },
    tags: ["JavaScript", "Express", "Socket.IO"],
    thumbnail: `${import.meta.env.BASE_URL}pictochat/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}pictochat/1.png`,
      `${import.meta.env.BASE_URL}pictochat/2.png`,
    ],
    repository: "https://github.com/0lbap/pictochat",
  },
  {
    id: 4,
    title: {
      en: "“Minesweeper” game",
      fr: "Jeu du “Démineur”",
    },
    description: {
      en: "The goal of this project was to learn Java's Swing API by implementing the famous “Minesweeper” game. This project includes three difficulty levels and a custom mode, allowing the player to manually set the size of the grid and the number of bombs.",
      fr: "Le but de ce projet était d'apprendre l'API Swing de Java en implémentant le célèbre jeu du “Démineur”. Ce projet inclus trois niveaux de difficulté et un mode personnalisé, permettant au joueur de paramétrer la taille de la grille et le nombre de bombes.",
    },
    tags: ["Java", "Swing"],
    thumbnail: `${import.meta.env.BASE_URL}minesweeper/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}minesweeper/1.png`,
      `${import.meta.env.BASE_URL}minesweeper/2.png`,
      `${import.meta.env.BASE_URL}minesweeper/3.png`,
      `${import.meta.env.BASE_URL}minesweeper/4.png`,
    ],
    repository: "https://github.com/0lbap/minesweeper",
  },
  {
    id: 5,
    title: {
      en: "“Y”, a social network clone",
      fr: "“Y”, clone d'un réseau social",
    },
    description: {
      en: "A responsive web application inspired by a very famous social network. This project aims to discover and learn Tailwind CSS by trying to recreate the original look of a famous social network. It uses Vue Router for the different views and Vue I18n for internationalization.",
      fr: "Une application web responsive inspirée d'un réseau social très connu. Ce projet a pour objectif de découvrir et apprendre Tailwind CSS en recréant l'interface d'un réseau social connu. Il utilise Vue Router pour les différentes vues et Vue I18n pour l'internationalisation.",
    },
    tags: ["Vue.js", "Tailwind CSS", "i18n"],
    thumbnail: `${import.meta.env.BASE_URL}y/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}y/1.png`,
      `${import.meta.env.BASE_URL}y/2.png`,
      `${import.meta.env.BASE_URL}y/3.png`,
      `${import.meta.env.BASE_URL}y/4.png`,
    ],
    repository: "https://github.com/0lbap/y",
  },
  {
    id: 6,
    title: {
      en: "Lisp VM and compiler",
      fr: "VM et compilateur Lisp",
    },
    description: {
      en: "This project aims to write, in Common Lisp, a register-based virtual machine capable of executing assembly instructions, as well as a compiler from Lisp to this assembly language. Unit tests as well as performance tests have been conducted.",
      fr: "Ce projet vise à écrire, en Common Lisp, une machine virtuelle à registres capable d'exécuter des instructions assembleur, ainsi qu'un compilateur de Lisp vers ce langage d'assembleur. Des tests unitaires ainsi que des tests de performances ont été effectués.",
    },
    tags: ["Lisp", "Assembly"],
    thumbnail: `${import.meta.env.BASE_URL}lisp-vm-compiler/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}lisp-vm-compiler/1.png`,
      `${import.meta.env.BASE_URL}lisp-vm-compiler/2.png`,
      `${import.meta.env.BASE_URL}lisp-vm-compiler/3.png`,
      `${import.meta.env.BASE_URL}lisp-vm-compiler/4.png`,
    ],
    repository: "https://gitlab.com/Muddinana/lisp_vm_compiler",
  },
  {
    id: 7,
    title: {
      en: "“Chicken Chase” game",
      fr: "Jeu “Chicken Chase”",
    },
    description: {
      en: "The goal of this project was to implement Agent Oriented Programming's action logic by programming a simple game in Godot with two classes of agents (chickens and farmers) that behaves by knowing what surrounds them through a vision cone.",
      fr: "L'objectif de ce projet était d'implémenter la logique des actions de la Programmation Orientée Agents en programmant un jeu simple fait sur Godot avec deux classes d'agents (poules et fermiers) qui se comportent selon ce qui les entoure à travers un cône de vision.",
    },
    tags: ["Godot", "GDScript"],
    thumbnail: `${import.meta.env.BASE_URL}chicken-chase/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}chicken-chase/1.png`,
      `${import.meta.env.BASE_URL}chicken-chase/2.png`,
      `${import.meta.env.BASE_URL}chicken-chase/3.png`,
      `${import.meta.env.BASE_URL}chicken-chase/4.png`,
      `${import.meta.env.BASE_URL}chicken-chase/5.gif`,
    ],
    repository: "https://gitlab.com/farmers3/chickenchase",
  },
  {
    id: 8,
    title: {
      en: "“Bunnies Bistro” game",
      fr: "Jeu “Bunny Bistro”",
    },
    description: {
      en: "This project aims to implement Agent Oriented Programming's action logic by programming a complex game in Godot with three classes of agents (8 customers, 2 waiters and 2 cooks), each having a given role and the ability to interact with each other through a food ordering system.",
      fr: "Ce projet a pour objectif d'implémenter la logique des actions de la Programmation Orientée Agents en programmant un jeu complexe fait sur Godot avec trois classes d'agents (8 clients, 2 serveurs et 2 cuisiniers), chacun ayant son propre rôle et la possibilité d'interagir entre eux à travers un système de commande de nourriture.",
    },
    tags: ["Godot", "GDScript"],
    thumbnail: `${import.meta.env.BASE_URL}bunnies-bistro/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}bunnies-bistro/1.png`,
      `${import.meta.env.BASE_URL}bunnies-bistro/2.png`,
      `${import.meta.env.BASE_URL}bunnies-bistro/3.png`,
      `${import.meta.env.BASE_URL}bunnies-bistro/4.png`,
      `${import.meta.env.BASE_URL}bunnies-bistro/5.png`,
    ],
    repository: "https://gitlab.com/bunniesbistro/bunnies-bistro",
  },
  {
    id: 9,
    title: {
      en: "This portfolio",
      fr: "Ce portfolio",
    },
    description: {
      en: "This portfolio is a responsive website presenting some of my work, including for each project a thumbnail, some screenshots, a short description and some tags. It also includes a language switcher for both english and french.",
      fr: "Ce portfolio est un site web responsive présentant une partie de mon travail, incluant pour chaque projet une miniature, des captures d'écran, une courte description et des tags. Il inclus également un sélecteur de langues pour l'anglais et le français.",
    },
    tags: ["React", "ChakraUI"],
    thumbnail: `${import.meta.env.BASE_URL}portfolio/thumbnail.png`,
    images: [
      `${import.meta.env.BASE_URL}portfolio/1.png`,
      `${import.meta.env.BASE_URL}portfolio/2.png`,
      `${import.meta.env.BASE_URL}portfolio/3.png`,
    ],
    repository: "https://github.com/0lbap/0lbap.github.io",
  },
];

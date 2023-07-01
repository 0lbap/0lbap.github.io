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
    images: [`${import.meta.env.BASE_URL}guess-who/1.png`, `${import.meta.env.BASE_URL}guess-who/2.png`, `${import.meta.env.BASE_URL}guess-who/3.png`, `${import.meta.env.BASE_URL}guess-who/4.png`, `${import.meta.env.BASE_URL}guess-who/5.png`, `${import.meta.env.BASE_URL}guess-who/6.png`, `${import.meta.env.BASE_URL}guess-who/7.png`, `${import.meta.env.BASE_URL}guess-who/8.png`, `${import.meta.env.BASE_URL}guess-who/9.png`],
    repository: "https://github.com/0lbap/quiestce",
  }, {
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
    images: [`${import.meta.env.BASE_URL}check-this-outfit/1.png`, `${import.meta.env.BASE_URL}check-this-outfit/2.png`, `${import.meta.env.BASE_URL}check-this-outfit/3.png`, `${import.meta.env.BASE_URL}check-this-outfit/4.png`, `${import.meta.env.BASE_URL}check-this-outfit/5.png`, `${import.meta.env.BASE_URL}check-this-outfit/6.png`],
    repository: "https://github.com/0lbap/check-this-outfit",
  }, {
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
    images: [`${import.meta.env.BASE_URL}terrebus/1.png`, `${import.meta.env.BASE_URL}terrebus/2.png`, `${import.meta.env.BASE_URL}terrebus/3.png`, `${import.meta.env.BASE_URL}terrebus/4.png`, `${import.meta.env.BASE_URL}terrebus/5.png`, `${import.meta.env.BASE_URL}terrebus/6.png`, `${import.meta.env.BASE_URL}terrebus/7.png`, `${import.meta.env.BASE_URL}terrebus/8.png`],
    repository: "https://gitlab.com/pablolaviron/ter-rebus-frontend",
  }, {
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
    images: [`${import.meta.env.BASE_URL}pictochat/1.png`, `${import.meta.env.BASE_URL}pictochat/2.png`],
    repository: "https://github.com/0lbap/pictochat",
  }, {
    id: 4,
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
    images: [`${import.meta.env.BASE_URL}portfolio/1.png`, `${import.meta.env.BASE_URL}portfolio/2.png`, `${import.meta.env.BASE_URL}portfolio/3.png`],
    repository: "https://github.com/0lbap/0lbap.github.io",
  },
]

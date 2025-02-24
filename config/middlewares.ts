module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"], // Origine de votre front-end
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Méthodes autorisées
      headers: [
        "Content-Type", // Header par défaut pour GraphQL
        "Authorization", // Si vous utilisez des tokens JWT
        "Apollo-Client-Name", // Header ajouté par Apollo Client
        "Apollo-Client-Version", // (optionnel) pour Apollo Client
        "apollographql-client-name", // Header spécifique vu dans votre requête
        "apollographql-client-version", // (optionnel) si utilisé
      ],
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

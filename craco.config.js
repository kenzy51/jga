// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@ui-kit": path.resolve(__dirname, "./src/ui-kit"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@validates": path.resolve(__dirname, "./src/validates"),
      "@localStorage": path.resolve(__dirname, "./src/localStorage"),
      "@mappers": path.resolve(__dirname, "./src/mappers"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
    },
  },
};

module.exports = {
  plugins: [
    require("cssnano", "atImport")({
      preset: "default"
    })
  ]
};

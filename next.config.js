const withImages = require("next-images");

module.exports = withImages({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    //polyfills
    // const originalEntry = config.entry;
    // config.entry = async () => {
    //   const entries = await originalEntry();

    //   if (
    //     entries["main.js"] &&
    //     !entries["main.js"].includes("./polyfills.js")
    //   ) {
    //     entries["main.js"].unshift("./polyfills.js");
    //   }

    //   return entries;
    // };

    return config;
  }
});

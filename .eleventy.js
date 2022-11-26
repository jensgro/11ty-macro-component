module.exports = (eleventyConfig) => {
  // let filters = {% import "macros.njk" as macro with context %};
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
        input: 'src',
        output: '_site',
        data: '_data',
        includes: '_includes'
    },
  };
};

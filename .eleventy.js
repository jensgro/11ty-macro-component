module.exports = (eleventyConfig) => {
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

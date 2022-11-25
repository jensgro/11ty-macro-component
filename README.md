# 11ty - Test for macros and components

- [nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [components](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- [catch-all-component](https://github.com/trys/11ty-component-macro)

------------

## TEST 1

- "catch-all-component" configured as described in the article above.
- ``index.md`` on root-level of ``src``-folder.
- Didn't make a difference with `` .njk``-extension or placed inside subfolder ``src/content``, which would be the idea in the end.

### Error

````
[Browsersync] Serving files from: _site
[11ty] File added: src/index.md
[11ty] Problem writing Eleventy templates: (more in DEBUG output)
[11ty] 1. Having trouble rendering njk template ./src/index.md (via TemplateContentRenderError)
[11ty] 2. (./src/index.md)
[11ty]   Error: Unable to call `component`, which is undefined or falsey (via Template render error)
[11ty] 
[11ty] Original error stack trace: Template render error: (./src/index.md)
[11ty]   Error: Unable to call `component`, which is undefined or falsey
[11ty]     at Object._prettifyError (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/lib.js:36:11)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:563:19
[11ty]     at Template.root [as rootRenderFunc] (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:21:3)
[11ty]     at Template.render (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:552:10)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:485:14
[11ty]     at new Promise (<anonymous>)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:484:14
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Markdown.js:73:47
[11ty]     at async Template._render (/Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/TemplateContent.js:432:22)
[11ty]     at async Template.getTemplateMapContent (/Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Template.js:1077:19)
[11ty] Wrote 0 files in 0.07 seconds (v1.0.2)
[11ty] Watching…
[Browsersync] Reloading Browsers...
[11ty] File changed: src/index.md
[11ty] Problem writing Eleventy templates: (more in DEBUG output)
[11ty] 1. Having trouble rendering njk template ./src/index.md (via TemplateContentRenderError)
[11ty] 2. (./src/index.md) [Line 1, Column 14]
[11ty]   Error: Unable to call `component`, which is undefined or falsey (via Template render error)
[11ty] 
[11ty] Original error stack trace: Template render error: (./src/index.md) [Line 1, Column 14]
[11ty]   Error: Unable to call `component`, which is undefined or falsey
[11ty]     at Object._prettifyError (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/lib.js:36:11)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:563:19
[11ty]     at Template.root [as rootRenderFunc] (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:21:3)
[11ty]     at Template.render (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:552:10)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:485:14
[11ty]     at new Promise (<anonymous>)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:484:14
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Engines/Markdown.js:73:47
[11ty]     at async Template._render (/Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/TemplateContent.js:432:22)
[11ty]     at async Template.getTemplateMapContent (/Users/xoxoxo/11ty-macro-component/node_modules/@11ty/eleventy/src/Template.js:1077:19)
[11ty] Wrote 0 files in 0.01 seconds (v1.0.2)
````

# 11ty - Test for macros and components

- [nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [components](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- [catch-all-component](https://github.com/trys/11ty-component-macro)

------------

## TEST 3

Totally **unsuccessfull** test! 

I added a second approach, using the successful macros from *test-nr2*.
In this case the macros are called from inside a partial which is imported into a page and a template. 

Including this partial into a page doesn't work. The error-code:

````
[11ty] Problem writing Eleventy templates: (more in DEBUG output)
[11ty] 1. Having trouble rendering njk template ./src/content/folder2/test1.njk (via TemplateContentRenderError)
[11ty] 2. (./src/content/folder2/test1.njk)
[11ty]   Template render error: (/Users/xoxoxo/11ty-macro-component/src/_includes/partials/components.njk)
[11ty]   Error: Unable to call `headline`, which is undefined or falsey (via Template render error)
[11ty] 
[11ty] Original error stack trace: Template render error: (./src/content/folder2/test1.njk)
[11ty]   Template render error: (/Users/xoxoxo/11ty-macro-component/src/_includes/partials/components.njk)
[11ty]   Error: Unable to call `headline`, which is undefined or falsey
[11ty]     at Object._prettifyError (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/lib.js:36:11)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:563:19
[11ty]     at eval (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:19:11)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:571:11
[11ty]     at eval (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:32:12)
[11ty]     at /Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:613:9
[11ty]     at Template.root [as rootRenderFunc] (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:55:3)
[11ty]     at Template.getExported (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:611:10)
[11ty]     at eval (eval at _compile (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:31:5)
[11ty]     at createTemplate (/Users/xoxoxo/11ty-macro-component/node_modules/nunjucks/src/environment.js:315:9)
````

The approach with including the partial inside the layout (``base2.njk``) didn't work either. Same error message. 

I tested many different approaches to write the path to the partial and/or to the macros from inside the partial. Nothing worked.

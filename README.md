# 11ty - Test for macros and components

- [nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [components](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- [catch-all-component](https://github.com/trys/11ty-component-macro)

------------

## TEST 4

This is a modification of **Test Nr. 1** (branch test-nr1). After playing again with the github-repo I realized that deviating from the usual 11ty-approach in calling the template does the trick. So the solution comes with a downside! 

Usually you would define the layout inside the YAML-frontmatter. Doing this will make 11ty crash. The reference to the page-layout must instead be written inside the page's body with a Nunjucks-notation:

````
{%- extends "layouts/base.njk" -%}
````

And in first tests, this doesn't work either. 11ty doesn't crash but the macros/components aren't rendered at all.

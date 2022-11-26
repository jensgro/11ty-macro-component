# 11ty - Test for macros and components

- [nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [components](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- [catch-all-component](https://github.com/trys/11ty-component-macro)

------------

## Initial position

The master-branch has no component included. The other branches are dealing with different approaches to tackle the problem of integrating components/html snippets without using custom elements. As I don't want to become dependent on JavaScript in the resulting page I don't want to use custom elements.

- **Test Nr. 1** (Branch: test-nr1) **didn't work**. It was an implementation of the [catch-all-component](https://github.com/trys/11ty-component-macro).
- **Test Nr. 2** (Branch: test-nr2) **did work**. 
- **Test Nr. 3** (Branch: test-nr3) **didn't work**. 
- **Test Nr. 4** (Branch: test-nr4) **didn't work**. 
- **Test Nr. 5** (Branch: test-nr5) **did work**. It is my preferred solution and works with Markdown and Nunjucks.

## Short informations about my preferred solution

In test Nr. 5 I made decisions, based on an article by Dart Mall: [Includes and Macros](https://darthmall.net/weblog/2021/includes-and-macros/)

- All macros are collected in one single file. If the number or the code complexity allows for it.
- This macro is imported into the layout file
    `````js
    {% import '../macros.njk' as macro %}
    `````
- All pages/posts (...) cannot be linked with a layout via frontmatter anymore. After the frontmatter there should be a nunjucks-call to the template:
    ````js
    {%- extends "layouts/base.njk" -%}
    ````
- Inside the page/post the macros are called this way:
    ````js
    {{ macro.button({
    primary: 'Hello'
    }) }}
    ````

The macro itself is created this way:
````js
{%- macro button(params) -%}
    <button type="button">{{ params.primary }} {{ params.secondary }}</button>
{%- endmacro -%}
````

The cool thing is, that you can add as many macros into one file as you like. Unlike partials which are only one per file.

The trick with the ``params`` is crucial for easy handling. 

**The downside** of this solution is, that you need nunjucks marker for your content instead of the usual ``{{ content | safe }}`` which plays very nicely with Markdown. So the way to go is at least with this:

````
{% block content %}
{% endblock %}
````

This leads to the understanding that you can have multiple blocks of that kind and therefor will have more flexible and more complex pages as if only managing content with Markdown.

# 11ty Sandbox

Very simple project for testing purposes, especially for technical ideas and plugins. 
# 11ty - Test for macros and components

- [nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [components](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- [catch-all-component](https://github.com/trys/11ty-component-macro)

------------

## TEST 2

**Successfull** test! 

The components are implemented as macros. Each macro is included in a separate folder and always included inside each page.

The macros are located in ``_includes/components/``. In ``headline2`` the macro is located directly in the file ``macro.njk`` which in the other cases only imports the macro-code.

The necessity to import the macros in each file is a little bit annoying.

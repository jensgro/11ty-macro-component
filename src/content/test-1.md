---
title: "Markdown-Test"
templateEngineOverride: njk,md
---
{%- extends "layouts/base.njk" -%}
## A Markdown headline outside a block

{% block content %}
## A Markdown headline inside a block

{{ macro.h({
  level: 2,
  text: "What a great headline"
}) }}

{{ macro.button({
  primary: 'Hello'
}) }}

{{ macro.h({
  level: 2,
  text: "What a great headline",
  link: "#"
}) }}

{{ macro.button({
  primary: 'Hello',
  secondary: 'World'
}) }}
{% endblock %}


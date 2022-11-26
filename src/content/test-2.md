---
title: Test of components in subfolder
---
{%- extends "layouts/base.njk" -%}
{% block content %}
{{ component('h', {
  level: 2,
  text: "What a great headline"
}) }}

{{ component('button', {
  primary: 'Hello'
}) }}

{{ component('h', {
  level: 2,
  text: "What a great headline",
  link: "#"
}) }}

{{ component('button', {
  primary: 'Hello',
  secondary: 'World'
}) }}
{% endblock %}
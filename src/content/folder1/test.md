---
layout: layouts/base.njk
title: Test of components out of subfolder
---
{%- from "components/button/macro.njk" import button -%}

{{ button({
  primary: 'Hi'
}) }}

{{ button({
  primary: 'Hi',
  secondary: 'there'
}) }}

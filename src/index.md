---
layout: layouts/base.njk
title: Test of components
---

  {{ component('button', {
    primary: 'Hello'
  }) }}

  {{ component('button', {
    primary: 'Hello',
    secondary: 'World'
  }) }}

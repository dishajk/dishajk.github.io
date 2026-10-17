---
title: Dodecagonal Tiling
date: 2026-10-18
categories: [Digital Art]
tools: [C++, inkscape]
output: false
---
<figure>
<a href="/assets/design/dodecagonalTiling.png" data-lightbox="IndrasPearls">
<img class="img-fluid" src="/assets/design/dodecagonalTiling.png" alt="dodecagonal tiling" width="100%" height="auto"></a>
</figure>

Here, I have chosen an equilateral triangle as the fundamental unit. Only after creating it did I realise that the triangle itself has rotational symmetry. I could instead use a \\(30\degree\\)-\\(30\degree\\)-\\(120\degree\\) triangle to avoid this. We wont do reflections.

Source code: <a href="https://github.com/dishajk/codes-octo-parakeet/tree/main/IndrasPearls" target="_blank">codes-octo-parakeet/IndrasPearls/dodecagonalTiling.cpp</a>
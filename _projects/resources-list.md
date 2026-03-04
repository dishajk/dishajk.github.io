---
title: I enjoy making lists
date: Sat 21 Dec 00:13:30 IST 2024
categories: [Resources]
tools: [Web browsing]
---
<div class="container pt-5">
    <p>I'll keep updating this one as and when I find new and interesting things.</p>
    <ol>
        {% for resource in site.resources %}
          <li>
            <h2>{{ resource.name }}</h2>
            {{ resource.content}}
          </li>
        {% endfor %}
      </ol>

      <span class="fs-6">Last updated on {{ page.date | date: "%d %B, %Y" }}</span>
</div>
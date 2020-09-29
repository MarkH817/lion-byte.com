---
title: 'Notes'
layout: 'layouts/feed.html'
pagination:
  data: collections.notes
  size: 5
permalink:
  'notes{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%
  endif %}/index.html'
paginationPrevText: 'Newer notes'
paginationNextText: 'Older notes'
paginationAnchor: '#feed-list'
---

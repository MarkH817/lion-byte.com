---
date: 2020-04-05
title: Fetch and Query Parameters
path: /blog/fetch-and-query-params
type: post
---

Lately at work, I've been updating some front-end code to be more modern. Among the changes, I was swapping a lot of API calls to use [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of [Dojo's xhr](https://dojotoolkit.org/reference-guide/1.9/dojo/request/xhr.html) or [jQuery's ajax](https://api.jquery.com/jQuery.ajax/). Fetch calls return a promise, so that meant that we could use it with async/await syntax. Although it's been easy to make this change, the Fetch API doesn't technically support adding query parameters to the URL for HTTP GET, unlike most other library implementations of this.

```javascript
// Desired: GET `/api/item?q=test`
// Below will not work
fetch('/api/item', {
  method: 'get',
  body: JSON.stringify({ q: 'test' })
})
  .then(res => res.json())
  .then(data => {
    // ...
  })
```

While using [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) _could_ solve this, I felt weird seeing it written out. This would also pose an issue if there were multiple parameters needed or if some of the parameters were optional.

```javascript
// Desired: GET `/api/item?q=test`
fetch(`/api/item?q=${encodeURIComponent('test')}`, {
  method: 'get'
})
  .then(res => res.json())
  .then(data => {
    // ...
  })
```

Thankfully, [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL_API) and [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) helped clean up this code.

```javascript
// Desired: GET `/api/item?q=test`
const url = new URL('/api/item', location.href)
url.searchParams.append('q', 'test')

fetch(url.toString(), {
  method: 'get'
})
  .then(res => res.json())
  .then(data => {
    // ...
  })
```

I really love how readable and flexible it is! We're also using Babel and core-js@3 in our builds, so the URL API is polyfilled automatically when needed! This code snippet might not be as succint as just using a library's version of fetch, but I'd like to keep our build sizes lower if I can help it.

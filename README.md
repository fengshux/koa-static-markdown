# koa-static-markdown
[![NPM version][npm-image]][npm-url]

An static resource server in koa, which transform markdown file to html.

## Installation

 requires __node v7.6.0__ 

```
$ npm install koa-static-markdown
```

## Example

```js
const Koa = require('koa');
const app = new Koa();
const server = require('koa-static-markdown')

app.use( server({path:'/doc',
    root:'./static',
    css:"http://example.com/markdown.css"}) );

app.listen(3000);
```


```
$ npm test
```




# License

  MIT

[npm-image]: https://img.shields.io/npm/v/koa-static-markdown.svg?style=flat
[npm-url]: https://www.npmjs.com/package/koa-static-markdown

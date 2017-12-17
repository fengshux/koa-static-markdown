# koa-static-markdown
[![NPM version][npm-image]][npm-url]

An static resource server in koa, which transform markdown file to html. It let you get html file directly when you visit the markdown file in the static directory you specified in config.

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



# License

  MIT

[npm-image]: https://img.shields.io/npm/v/koa-static-markdown.svg?style=flat
[npm-url]: https://www.npmjs.com/package/koa-static-markdown

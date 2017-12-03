"use strict";

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
var showdown  = require('showdown'),
    converter = new showdown.Converter();

converter.setOption('tables', true);


const head = `<!Doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
<title>GitHub Markdown CSS demo</title>

<style>
			body {
				box-sizing: border-box;
				min-width: 200px;
				max-width: 980px;
				margin: 0 auto;
				padding: 45px;
			}
		</style>
</head>
</body>
<article class="markdown-body">
`;

const foot = `
</article>
</body>
</html>
`;

let readFile = function(path) {
    return new Promise((res, rej) => {

        fs.readFile(path, (err, content) =>{
            
            if(err){
                rej(err);
            }
            res(content);
        });

    });
}

let static_markdown = function( option ) {
    
    let test = new RegExp(option.path + "(?:\/\\w+)*\/\\S+\.md");
    return async function ( ctx , next ) {

        let filename = ctx.path;
        if( test.test(filename) ) {
            let file = path.join(option.root, filename.replace(option.path, ''));
            let buffer = await readFile(file); 
            let body = converter.makeHtml(buffer.toString());

            ctx.body = ejs.render('./template.html',{css:option.css, body:body});
        }
        await next();
    };
};

module.exports = static_markdown;

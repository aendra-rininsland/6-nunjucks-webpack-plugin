# Test case for [itgalaxy/nunjucks-webpack-plugin#6](https://github.com/itgalaxy/nunjucks-webpack-plugin/issues/6)

To test this:

1. Clone repo
2. `$ npm install`
3. Working case: `$ npm run working` -- visit localhost:8080, page is rendered.
4. Broken case, with `writeToFileWhenMemoryFS === true`: `$ npm run broken`, visit localhost:8080

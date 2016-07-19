Depending on the syntax used by this code you will need to pass the source
through a transpiler, for example [babel](https://babeljs.io).

### jspm
Configure [jspm](http://jspm.io) to transpile all the code. Then
```js
let redblacktree = require( 'github:aureooms/es-red-black-tree' ) ;
// or
import redblacktree from 'aureooms-es-red-black-tree' ;
```

### npm
Configure your code to transpile dependencies on the fly (for example with
[babel-register](https://babeljs.io/docs/usage/require)). Then you can
```js
import redblacktree from 'aureooms-es-red-black-tree' ;
```

Additionally, for the browser, you can configure
[rollup](http://rollupjs.org),
[browserify](http://browserify.org),
or [webpack](https://webpack.github.io) to transpile and package the
dependencies with your code.

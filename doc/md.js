const { Converter } = require('showdown')
const fs = require('fs')

const classMap = {
	h1: 'font-weight-bold',
	h2: 'ui medium header',
	p: 'font-weight-normal',
	table: 'table table-sm table-striped table-bordered table-hover',
	code: 'prettyprint linenums:1'
}

const bindings = Object.keys(classMap)
	.map(key => ({
		type: 'output',
		regex: new RegExp(`<(${key})(.*)>`, 'g'),
		replace: `<${key} class="${classMap[key]}" $2>`
	}));

const conv = new Converter({
	extensions: [...bindings],
	tables: true,
	strikethrough: true,
	ghCodeBlocks: true,
	openLinksInNewWindow: true
});

const text = fs.readFileSync('./../README.md').toString()
const head = `
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?autoload=true"></script>
`

const html = `
	<head>
		${head}
		<style>
			* {
				font-family: "Open Sans" !important;
			}			
		</style>
	</head>
	<body class="container">
		<div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
			${conv.makeHtml(text)}
		</div>
	</body>
`

console.log(html)

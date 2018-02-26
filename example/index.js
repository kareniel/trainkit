var choo = require('choo')
var html = require('choo/html')
var app = choo()

app.use(store)
app.route('/', mainView)
app.mount('body')

function store (state, emitter) {
  emitter.on('DOMContentLoaded', function () {

  })
}

function mainView () {
  return html`
    <body>
      
    </body>`
}

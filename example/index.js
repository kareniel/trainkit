var choo = require('choo')
var html = require('choo/html')
var RouterView = require('../lib/router-view')
var app = choo()
var routerView = RouterView()

require('./design')

app.use(require('choo-devtools')())
app.use(store)
app.route('/', wrapper(home))
app.route('/docs', wrapper(docs))
app.mount('body')

function store (state, emitter) {
  state.previousState = null

  emitter.on('DOMContentLoaded', function () {

  })
}

function home (state, emit) {
  return html`
    <div class="page">
      <h1 class="pinker">home</h1>
    </div>`
}

function docs (state, emit) {
  return html`
    <div class="page">
      <h1 class="pinker">docs</h1>
    </div>`
}

function wrapper (view) {
  return function (state, emit) {
    var navItem = 'ph2'
    var active = 'bb b--white bw1'
    var isActive = route => route === state.route ? active : ''

    return html`
      <body class="bg-pink sans-serif">

        <div class="h-100 flex flex-column"> 

        <nav class="flex h3 w-100 bg-pinker white  items-center ph2">
          <strong>trainkit</strong>
          <ul class="flex list">
            <li class=${navItem}><a class="pv0 white link ${isActive('/')}" href="/">home</a></li>
            <li class=${navItem}><a class="pv0 white link ${isActive('docs')}" href="/docs">docs</a></li>
          </ul>
        </nav>

        <div class="flex h-100 w-100 flex-column pa4">
          <div class="relative">
          ${routerView.render(state.route, view(state, emit))}
          </div>
        </div>

        </div>

      </body>`
  }
}

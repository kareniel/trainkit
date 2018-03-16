var html = require('choo/html')
var Nanocomponent = require('nanocomponent')
var nanostate = require('nanostate')
var onload = require('on-load')
var raf = require('nanoraf')
var transitionEnd = [
  'transitionend', 'webkitTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'
]

module.exports = Component

function Component () {
  if (!(this instanceof Component)) return new Component()

  this.duration = 5000
  this.route = null
  this.el = null
  this.previousEl = ''

  Nanocomponent.call(this)
}

Component.prototype = Object.create(Nanocomponent.prototype)

Component.prototype.beforerender = function (el) {

}

Component.prototype.createElement = function (route, el) {
  this.route = route
  this.el = el

  return html`
    <div class="w-100 h-100 pa5">
      ${this.previousEl}
      ${this.el}
    </div>`
}

Component.prototype.load = function (el) {
}

Component.prototype.update = function (route, el) {
  var willUpdate = route !== this.route

  if (willUpdate) {
    this.previousEl = this.el

    var enteringEl = el
    var leavingEl = this.previousEl

    enteringEl.classList.add('enter', 'enter-active')
    leavingEl.classList.add('leave', 'leave-active')

    raf(function () {
      enteringEl.classList.remove('enter')
      leavingEl.classList.remove('leave')
    })()

    var t = setTimeout(() => {
      clearTimeout(t)
      enteringEl.classList.remove('enter-active')

      this.previousEl = ''
      this.rerender()
    }, this.duration)
  }

  return willUpdate
}

Component.prototype.afterupdate = function () {

}


# trainkit-modal

## usage

`modal = ModalComponent(viewFn)`
constructor takes in a choo view function and returns a nanocomponent. 

`modal.toggle()`
toggles the modal's visibility by applying css classes to it's element.


### css class transitions

**entering:**
`modal-hidden -> modal-entering -> modal-visible` 

**leaving:** 
`modal-visible -> modal-leaving -> modal-hidden` 


The `modal-entering` and `modal-leaving` classes should specify a css animation.


## example

```cs
.modal-hidden { transform: scale3d(0, 0, 1); }
.modal-entering { animation: enter 0.3s ease-out forwards; }
.modal-leaving { animation: leave 0.3s ease-in forwards; }
@keyframes enter { 
  from { transform: scale3d(0, 0, 1); }
  to { transform: scale3d(1, 1, 1); }
}
@keyframes leave { 
  from { transform: scale3d(1, 1, 1); }
  to { transform: scale3d(0, 0, 1); }
}
```

```js
var ModalComponent = require('trainkit/modal')

var modal = ModalComponent(modalEl)

choo.route('*', function view (state, emit) {
  return `
    <body>
      <button onclick=${toggle}>open</button>
      ${modal.render(state, emit)}
    </body>`  
    
  function toggle (e) { 
    modal.toggle()
  }
})

function modalEl (state, emit) {
  return html`
    <div class="modal">
      <button onclick=${e => modal.toggle()}>
        close
      </button>
    </div>`
}
```

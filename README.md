# Cute Alert

![img](https://i.imgur.com/fuKb4lG.png)
<p align="center">
  <img src="https://media.giphy.com/media/fwnMNrkWLs1TrxK6ab/giphy.gif" />
</p>

I created this JS library as an open-source project (for studying purposes) to provide beautiful alert box messages made with HTML, CSS and JS only. Feel free to contribute with a pull request or suggestions.


## Installation Instructions

- Clone this repository into your project's lib folder.
- Import both "style.css" and "cute-alert.js" into your code just like described on the image below:

![img](https://i.imgur.com/GuK5Uov.png)

## Docs

It's way too simple for you to import this lib into your code, all you have to do is call ```cuteAlert()``` and pass its arguments in object notation.

```buttonText``` is an optional parameter, by default it's set as "OK".

```type``` will define what kind of alert box will be shown.

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    cuteAlert({
        type: "success",
        title: "Success",
        message: "Success in life!!",
        img: "src/img/success.svg",
        buttonText: "OK",
        playSound: 'src/sound/success.mp3',
})
})
```

```js
const btnError = document.querySelector('.show-Error')
btnError.addEventListener('click', () =>{
    cuteAlert({
        type: "error",
        title: "Error",
        message: "Error in broeser",
        img: "src/img/error.svg",
        buttonText: "OK",
        playSound: 'src/sound/error.mp3',
})
})
```

```js
const btnInfo = document.querySelector('.show-Info')
btnInfo.addEventListener('click', () =>{
    cuteAlert({
        type: "info",
        title: "Info",
        message: "The world die",
        img: "src/img/info.svg",
        buttonText: "OK",
        playSound: 'src/sound/info.mp3',
        closeStyle: 'circle',
})
})
```

```js
const btnWarning = document.querySelector('.show-Warning')
btnWarning.addEventListener('click', () =>{
    cuteAlert({
        type: "warning",
        title: "Warning",
        message: "Death in minutes...",
        img: "src/img/warning.svg",
        buttonText: "OK",
        playSound: 'src/sound/warning.mp3',
})
})

```

```js
const btnQuestion = document.querySelector('.show-Question')
btnQuestion.addEventListener('click', () =>{
    cuteAlert({
        type: "question",
        title: "Contributors",
        message: "hello do you want to give the repository a star?",
        img: "src/img/question.svg",
        confirmText: "Conform",
        cancelText: 'Cancel',
        playSound: 'src/sound/Question.mp3',
})
})
```

```cuteAlert()```returns a Promise, so you can use ```then``` to execute an action after the alert box frame is closed.

```js
const btnError = document.querySelector('.show-Error')
btnError.addEventListener('click', () =>{
    cuteAlert({
        type: "error",
        title: "Error",
        message: "Error in broeser",
        img: "src/img/error.svg",
        buttonText: "OK",
        playSound: 'src/sound/error.mp3',
}).then(() =>{
    location.reload()
})
})
```

As for the question alert box, you can choose what you want to do after any of the buttons is pressed with ```then``` aswell.

```confirmText``` and ```cancelText``` are both optional, by the default they are set as "Confirm" and "Cancel" respectively.

```js
const btnQuestion = document.querySelector('.show-Question')
btnQuestion.addEventListener('click', () =>{
    cuteAlert({
        type: "question",
        title: "Contributors",
        message: "hello do you want to give the repository a star?",
        img: "src/img/question.svg",
        confirmText: "Conform",
        cancelText: 'Cancel',
        playSound: 'src/sound/Question.mp3',
}).then(e =>{
    if(e === 'confirm'){
        alert('Thanks!')
    }else{
        alert(':-(')
    }
})
})
```

### Close button as a circle

If you wish to have the close button styled as a circle, you need to pass ```closeStyle: "circle"``` as an argument in ```cuteAlert()```.

<p align="center">
  <img src="https://i.imgur.com/Ak2JidL.png" />
</p>

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    cuteAlert({
        type: "success",
        title: "Success",
        message: "Success in life!!",
        img: "src/img/success.svg",
        buttonText: "OK",
        playSound: 'src/sound/success.mp3',
        closeStyle: 'circle',
})
})
```

### Toasts

<p align="center">
  <img src="https://media.giphy.com/media/fwnMNrkWLs1TrxK6ab/giphy.gif" />
</p>

It's even easier to use toasts, all you have to do is call ```cuteToast()``` and pass ```type```, ```message``` and ```timer```(in miliseconds) as its arguments.

```js
const btnToast = document.querySelector('.show-Toast')
btnToast.addEventListener('click', ()=>{
    cuteToast({
        type: 'success',
        title: 'Toast Success',
        message: 'Success!! We are on the right way!',
        img: 'src/img/success.svg',
        timer: 5000, 
        playSound: 'src/sound/toast.mp3'
        })
})

```

```js
const btnToast = document.querySelector('.show-Toast')
btnToast.addEventListener('click', ()=>{
    cuteToast({
        type: 'error',
        title: 'Toast Error',
        message: 'Mistake! Give trouble.',
        img: 'src/img/error.svg',
        timer: 5000, 
        playSound: 'src/sound/toast.mp3'
        })
})
```

```js
const btnToast = document.querySelector('.show-Toast')
btnToast.addEventListener('click', ()=>{
    cuteToast({
        type: 'info',
        title: 'Toast Info',
        message: 'This repository is open source !!',
        img: 'src/img/info.svg',
        timer: 5000, 
        playSound: 'src/sound/toast.mp3'
        })
})
```

```js
const btnToast = document.querySelector('.show-Toast')
btnToast.addEventListener('click', ()=>{
    cuteToast({
        type: 'warning',
        title: 'Toast Warning',
        message: 'Warning! Open source is welcome!',
        img: 'src/img/warning.svg',
        timer: 5000, 
        playSound: 'src/sound/toast.mp3'
        })
})

```

It also returns a Promise, so you can use ```then``` to execute an action after the toast is closed or reaches its end by a timer.

## Alert Box Design

- **Igor Ferrão de Souza** https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/


## Dev

- **Gustavo Mancuzo** - [gustavosmanc](https://github.com/gustavosmanc)


## Contributors

- **Leonardo Bertoncin** - [lbert1](https://github.com/lbert1)
- **Gabriel Dutra** - [DutraGames](https://github.com/DutraGames)

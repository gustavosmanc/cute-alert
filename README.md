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

![img](https://i.imgur.com/i4OZ7NV.png)

As for the question alert box, you can choose what you want to do after any of the buttons is pressed with ```then``` aswell.

```confirmText``` and ```cancelText``` are both optional, by the default they are set as "Confirm" and "Cancel" respectively.

![img](https://i.imgur.com/VFoRvKR.png)

### Close button as a circle

If you wish to have the close button styled as a circle, you need to pass ```closeStyle: "circle"``` as an argument in ```cuteAlert()```.

<p align="center">
  <img src="https://i.imgur.com/Ak2JidL.png" />
</p>

![img](https://i.imgur.com/QPYnAyg.png)

### Toasts

<p align="center">
  <img src="https://media.giphy.com/media/fwnMNrkWLs1TrxK6ab/giphy.gif" />
</p>

It's even easier to use toasts, all you have to do is call ```cuteToast()``` and pass ```type```, ```message``` and ```timer```(in miliseconds) as its arguments.

![img](https://i.imgur.com/IDUChOO.png)
![img](https://i.imgur.com/HlaJCxL.png)
![img](https://i.imgur.com/hpGOQmh.png)
![img](https://i.imgur.com/LXBz631.png)

It also returns a Promise, so you can use ```then``` to execute an action after the toast is closed or reaches its end by a timer.

## Alert Box Design

- **Igor Ferrão de Souza** https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/


## Dev

- **Gustavo Mancuzo** - [gustavosmanc](https://github.com/gustavosmanc)


## Contributors

- **Leonardo Bertoncin** - [lbert1](https://github.com/lbert1)
- **Gabriel Dutra** - [DutraGames](https://github.com/DutraGames)

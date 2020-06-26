# Cute Alert

![img](https://i.imgur.com/fuKb4lG.png)

I designed this JS library as an open-source project with the purpose of providing beautiful alert box messages for your website. Feel free to contribute with a pull request or suggestions.


## Installation Instructions

- Clone this repository into your project libs folder.
- Import both "style.css" and "cute-alert.js" into your code just like the image below:

![img](https://i.imgur.com/GuK5Uov.png)

## Docs

- It's way too simple for you to use this library into your code, all you have to do is call cuteAlert() and pass it's arguments in object notation.

```
buttonText is an optional parameter, by default it's set as "OK".
```

```
"type" will define what kind of alert box will be shown.
```

![img](https://i.imgur.com/BHqM7Mm.png)
![img](https://i.imgur.com/mLAfKh7.png)
![img](https://i.imgur.com/6012avM.png)
![img](https://i.imgur.com/E9BUQeV.png)

```
cuteAlert() returns a Promise, so you can use "then" to execute an action after the modal window is closed
```

![img](https://i.imgur.com/i4OZ7NV.png)

```
As for the question alert box, you can choose what you want to do after any of the buttons is pressed with "then" aswell.
```

![img](https://i.imgur.com/VFoRvKR.png)

### Close button as a circle

- If you wish to have the close button styled as a circle, you need to pass ```closeStyle: "circle``` in your cuteAlert() arguments.

![img](https://i.imgur.com/Ak2JidL.png)
![img](https://i.imgur.com/QPYnAyg.png)

## Design

- **Igor Ferrão de Souza** https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/


## Dev

- **Gustavo Mancuzo** - [gustavosmanc](https://github.com/gustavosmanc)


## Contributors

- **Leonardo Bertoncin** - [lbert1](https://github.com/lbert1)

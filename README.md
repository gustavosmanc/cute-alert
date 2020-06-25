# Cute Alert

JS library with the purpose of providing success and error alert box messages for your website.

![img](blob:https://imgur.com/b9cba5ae-b967-4d40-967d-91bff80096ea)


## Instructions

- Firstly clone this repo and import both "style.css" and "app.js" into your code. (JS file must be at the end of body tag)
- In your JS file, call cuteAlert() passing the following arguments: type, title, message and buttonText in object notation. (the last one is optional)

Examples:

```
cuteAlert({
  type: "success",
  title: "Congratulations!",
  message: "You won the match!",
  buttonText: "Yaay!!!"
});
```

```
cuteAlert({
  type: "error",
  title: "Sorry...",
  message: "You lost the match!",
  buttonText: "OK :-("
});
```

```
cuteAlert({
    type: "warning",
    title: "Be careful...",
    message: "That's dangerous!",
    buttonText: "OMG!",
  });
```

cuteAlert() returns a Promise, so you can use "then" to execute an action after the modal window is closed:

```
cuteAlert({
  type: "error",
  title: "Sorry...",
  message: "You lost the match!",
  buttonText: "OK :-("
}).then(() => {
  location.reload();
});
```


## Design

- **Igor Ferrão de Souza** https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/


## Dev

- **Gustavo Mancuzo** - [gustavosmanc](https://github.com/gustavosmanc)


## Contributors

- **Leonardo Bertoncin** - [lbert1](https://github.com/lbert1)

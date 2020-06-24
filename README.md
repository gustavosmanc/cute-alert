# Cute Alert

JS library with the purpose of providing success and error alert box messages for your website.

## Instructions

* In order to use this in your code, clone this repo and create a link to the script at the end of your html file's <body> tag.
* In your JS file, call cuteAlert() passing the following arguments: type, title, message and buttonText. (the last one is optional)

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

### Design

* **Igor Ferrão de Souza** https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

## Dev

* **Gustavo Mancuzo** - [gustavosmanc](https://github.com/gustavosmanc)

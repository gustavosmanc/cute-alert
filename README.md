# Cute Alert

![img](https://i.imgur.com/fuKb4lG.png)
<p align="center">
  <img src="https://media.giphy.com/media/fwnMNrkWLs1TrxK6ab/giphy.gif" />
</p>

I created this JS library as an open-source project (for studying purposes) to provide beautiful alert box messages made with HTML, CSS, and JS only. Feel free to contribute with a pull request or suggestions.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Installation Instructions](#installation-instructions)
3. [Docs](#docs)
   - [Alert Types and Toasts](#alert-types-and-toasts)
   - [Alert Box](#alert-box)
   - [Close Button as a Circle](#close-button-as-a-circle)
   - [Toasts](#toasts)
4. [Alert Box Design](#alert-box-design)
5. [Dev](#dev)
6. [Contributors](#Contributors)


## Getting Started
To get started with the project, you can clone the repository and navigate into the project directory by running the following commands in your terminal:

 ```
  git clone https://github.com/gustavosmanc/cute-alert.git
  cd cute-alert
  ```
   

## Installation Instructions
After cloning the repository and navigating into the project's directory, import both "style.css" and "cute-alert.js" into your code just like described on the image below:

![img](https://i.imgur.com/GuK5Uov.png)

## Docs

### Alert Types and Toasts
This library provides different types of alert boxes, each serving a unique purpose:
- **Success Alert**: Indicates a successful operation.
- **Error Alert**: Informs the user of an error or failure.
- **Warning Alert**: Serves as a warning or caution to the user.
- **Question Alert**: Asks the user a question requiring acknowledgment or action.

**Toasts** are lightweight notifications designed to mimic the analogy of popping up like a toast. They are used to display brief, auto-expiring information to the user and are less intrusive than alert boxes.

### Alert Box
```buttonText``` is an optional parameter, by default it's set as "OK".
```type``` will define what kind of alert box will be shown.

![img](https://i.imgur.com/BHqM7Mm.png)
![img](https://i.imgur.com/mLAfKh7.png)
![img](https://i.imgur.com/6012avM.png)
![img](https://i.imgur.com/E9BUQeV.png)

```cuteAlert()``` returns a Promise, so you can use ```then``` to execute an action after the alert box frame is closed.

![img](https://i.imgur.com/i4OZ7NV.png)

As for the question alert box, you can choose what you want to do after any of the buttons is pressed with ```then``` as well.
```confirmText``` and ```cancelText``` are both optional, by default they are set as "Confirm" and "Cancel" respectively.

![img](https://i.imgur.com/VFoRvKR.png)

### Close Button as a Circle
If you wish to have the close button styled as a circle, you need to pass ```closeStyle: "circle"``` as an argument in ```cuteAlert()```.

<p align="center">
  <img src="https://i.imgur.com/Ak2JidL.png" />
</p>

![img](https://i.imgur.com/QPYnAyg.png)

### Toasts
<p align="center">
  <img src="https://media.giphy.com/media/fwnMNrkWLs1TrxK6ab/giphy.gif" />
</p>

It's even easier to use toasts, all you have to do is call ```cuteToast()``` and pass ```type```, ```message```, and ```timer```(in milliseconds) as its arguments.

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

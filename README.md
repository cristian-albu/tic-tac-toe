This is my Tic-Tac-Toe HTML, CSS, and JavaScript project iteration.

```js
function checkWinner() {
    var myObj = {};
    for (let i = 0; i < containerChildren.length; i++) {
        myObj[containerChildren[i].id] = containerChildren[i].textContent;
    }
    return myObj;
}
```

var myContainer = document.getElementById("ticTacToeContainer");
var containerChildren = myContainer.children;
var roundCounter = 0;

for (let i = 0; i < containerChildren.length; i++) {
    containerChildren[i].id = i + 1;
    containerChildren[i].addEventListener("click", whenClicked);
}

function whenClicked() {
    roundCounter += 1;
    if (roundCounter % 2 === 0) {
        this.textContent = "0";
    } else {
        this.textContent = "X";
    }

    var sV = checkWinner();
    var horizontalTop = [sV[1], sV[2], sV[3]];
    var horizontalMid = [sV[4], sV[5], sV[6]];
    var horizontalBottom = [sV[7], sV[8], sV[9]];
    var diagonalLeft = [sV[1], sV[5], sV[9]];
    // rest of winning cases

    if (isWinning(horizontalTop) || isWinning(horizontalMid) || isWinning(horizontalBottom) || isWinning(diagonalLeft)) {
        console.log("Winner");
    }
}

function checkWinner() {
    var myObj = {};
    for (let i = 0; i < containerChildren.length; i++) {
        myObj[containerChildren[i].id] = containerChildren[i].textContent;
    }
    return myObj;
}

function isWinning(arr) {
    if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] != "") {
        return true;
    } else {
        return false;
    }
}

let val;
window.onload = () => {
    let rock = document.getElementById("r");
    let paper = document.getElementById("p");
    let scissors = document.getElementById("s");
    val = [rock.value, paper.value, scissors.value];
    let res = document.getElementById('result');
    res.style.display="none";
}

const getComputerVal = (value) => {
    let computerVal = Math.floor(Math.random() * value.length);
    return computerVal;
}

function humanVal(obj) {
    let x = -1;
    let computerVal = getComputerVal(val);
    if (obj.value == 'rock') {
        x = 0;
        getRes(computerVal, x);
    }
    if (obj.value == 'paper') {
        x = 1;
        getRes(computerVal, x);
    }
    if (obj.value == 'scissors') {
        x = 2;
        getRes(computerVal, x);
    }
    if (obj.value == 'stop') {
        x = -1;
        getRes(computerVal, x);
    }
    console.log(x + " " + computerVal);
}

function getRes(c, x) {
    let res = document.getElementById('result');

    if (x == -1) {
        res.innerText = null;
        res.style.display = 'none';
    }
    else {
        res.style.display = "flex";
        if (x == c)
            res.innerText = "YourChoice: " + x + " ComputerChoice: " + c + " TIE!";
        else
            if (x == 0 && c == 2)
                res.innerText = "YourChoice: " + x + " ComputerChoice: " + c + " You Win!";
            else if (x == 1 && c == 0)
                res.innerText = "YourChoice: " + x + " ComputerChoice: " + c + " You Win!";
            else if (x == 2 && c == 1)
                res.innerText = "YourChoice: " + x + " ComputerChoice: " + c + " You Win!";
            else
                res.innerText = "YourChoice: " + x + " ComputerChoice: " + c + " You Lost!";
    }
}

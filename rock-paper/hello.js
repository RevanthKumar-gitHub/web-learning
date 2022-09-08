//document object 
let redDiv,yellowDiv,greenDiv;
window.onload = () =>
{
    redDiv = document.getElementById('red');
    yellowDiv = document.getElementById('yellow');
    greenDiv = document.getElementById('green');
    const box = document.querySelectorAll('.colorBox');

    const timesClicked = {'red':0,'yellow':0,'green':0};

    box.forEach(box => {
        box.onclick = () =>{
            timesClicked[box.value]+=1;
            box.innerText = timesClicked[box.value];
        }
    });

    
    
    function clear()
    {
        timesClicked.red = 0;
        timesClicked.yellow = 0;
        timesClicked.green = 0;

        box.forEach(box => box.innerText = '');
    }

    const clearDiv = document.getElementById('clear');
    clearDiv.onclick = () =>clear();
}



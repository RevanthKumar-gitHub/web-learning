
window.onload = () => {
  
    
}
const calBill = () => {
    const billInput = document.getElementById("bill");
    const tipInput = document.getElementById('tip');
    let bill =Number(billInput.value);
    let tip = Number(tipInput.value);
    console.log(bill+tip);
    let resDiv = document.getElementById("res");

    let pepDiv = document.getElementById("people");
    pepVal = Number(pepDiv.innerText);
    
    let resVal = (bill+tip)/pepVal;

    resDiv.innerText =  "$" + (resVal);

};

const increasepep = () => {
    let pepDiv = document.getElementById("people");
    pepVal = Number(pepDiv.innerText);
    pepVal += 1;
    pepDiv.innerText = pepVal;

    calBill();
}

const decreasepep = () => {

    let pepDiv = document.getElementById("people");
    pepVal = Number(pepDiv.innerText);
    pepVal -= 1;
    if(pepVal<1)
    {
        return;
    }
    pepDiv.innerText = pepVal;

    calBill();
    
};

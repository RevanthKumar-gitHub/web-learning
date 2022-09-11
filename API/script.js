// https://dog.ceo/api/breeds/image/random

// https://api.unsplash.com/photos/?client_id=Op_TeMKugkNTAe-OXuy7jrkjrff6r2fwBn03ouQT6so
let button = document.getElementById('button');
console.log(button);
let dog = document.getElementById('dog');

const getDog = () =>
{
    let clientId = "DnOTikUHZcu9Gnz3z7F2alZTZgg8Qm7VqwsU432efdw";
    let endpoint = `https://api.unsplash.com/photos/random?client_id=${clientId}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        let x = Math.ceil(Math.random()*3);
        dog.innerHTML=`<img src='${res.urls.regular}' height=200 width=200 />`;
    });
}

button.onclick = () =>
{
    getDog();
}
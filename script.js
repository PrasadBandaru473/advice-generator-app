let URL = 'https://api.adviceslip.com/advice';
let adviceId = document.querySelector(".advice");
let quote = document.querySelector(".quote");
let dice = document.querySelector(".dice-container");
async function getData () {
    let fetchedData = await fetch(URL);
    console.log(fetchedData);
    let data = await fetchedData.json();
    console.log(data);
    adviceId.innerText = `ADVICE #${data.slip.id}`;
    quote.innerText = data.slip.advice;
};
getData();
dice.addEventListener('click',getData);




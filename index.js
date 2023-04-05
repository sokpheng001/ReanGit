"use strict"


// console.log(fetch("https://restcountries.com/v3.1/capital/tallinn").then(e=>e.json()).then(e=>console.log(e)));

const data_ = async function(){
    const json = await fetch("https://restcountries.com/v3.1/name/cambodia");
    const data = await json.json();
    console.log(data[0])
}
data_();

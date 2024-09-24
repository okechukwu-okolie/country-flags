

fetch('data.json')
.then((data)=>{
    return data.json();
})
.then((countryInfo)=>{
    let placeHolder = document.querySelector('.card-container');

    let out = '';
    for(let menu of countryInfo){

        out += `
    <div class='card'>
       <img src="${menu.flags.svg}" alt="nothing">
        <h4>${menu.name}</h4>
        <h5>Population: <span>${menu.population}</span></h5>
        <h5>Region: <span>${menu.region}</span></h5>
        <h5>Capital: <span>${menu.capital}</span></h5>
    </div>
    `
    let cardStyling = document.querySelector('.card-container');
    cardStyling.classList.add('card');

    }
    placeHolder.innerHTML = out; 

})




let countryName = document.getElementById('country-search').value;
console.log(countryName);
// countryName.addEventListener('i', function(){
if (countryName === menu.name){
    console.log('this name is availiable')
}else{
    console.log('this name is not availiable')
}




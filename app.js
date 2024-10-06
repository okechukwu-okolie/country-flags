
let countryList = document.querySelector('.card-container');
let countryName = document.getElementById('countrySearch');
let regionName = document.getElementById('worldRegions');
let modeChange = document.querySelector('.modeChange');


let countryInformation = [];

countryName.addEventListener('keyup',(e)=>{
    let searchCountry = e.target.value.toLowerCase();
    let filteredCharacters = countryInformation.filter(details=>{
        return details.name.toLowerCase().includes(searchCountry) ;
    });
    //   if(searchCountry === filteredCharacters[0].name.toLowerCase()){

    //     console.log('perfect match')
    // }
    // else{
    //     console.log('filtering')
        displayCharacter(filteredCharacters);
    // }
});


//this displays the region chosen
regionName.addEventListener('change',(e)=>{
    let selectedRegion = e.target.value;
    let filteredRegion = countryInformation.filter(details=>{
        return details.region === selectedRegion ;
    });
   
    displayCharacter(filteredRegion);
});



//this changes the mode from light to dark
modeChange.onclick =function(){
    document.body.classList.toggle('changeMode');
}







let loadCharacters =async ()=>{
//***************************************************************************the async destruction of the json file to give the array objects  */
    try{
        let response = await fetch('data.json');//at this stage you are fetching the json file from its repository
        countryInformation = await response.json();//at this stage, you have deconstructed the json file tot an array object

        displayCharacter(countryInformation)
        
        
        //this line of code displays the country information on page loadup. it is the function that holds the cards that are displayed
        // console.log(countryDetails);
        
    }catch(error){
        console.error(err);
        ;
    }
};

let displayCharacter=(countryInformation)=>{
    let htmlString = countryInformation.map((countryInformation)=>{

        let cardStyling = document.querySelector('.card-container');
        cardStyling.classList.add('card');
        return`

        <div class='card'>
            <img src="${countryInformation.flags.svg}" alt="">
            <h4>${countryInformation.name}</h4>
            <h5>Population: <span>${countryInformation.population }</span></h5>
            <h5>Region: <span>${countryInformation.region}</span></h5>
            <h5>Capital: <span>${countryInformation.capital}</span></h5>
        </div>
        `

        
    })
    .join('');
    countryList.innerHTML = htmlString;
}






// let displaySinglePage =(countryInformation)=>{
//     let htmlString = countryInformation.map((countryInformation)=>{

//         let cardStyling = document.querySelector('.singleCardContainer');
//         cardStyling.classList.add('singleCardContainer');
//         return`

//          <button>Back</button>
//                 <div class="singleCardFlex">
//                 <div class="imageDiv">
//                     <img src="" alt="">
//                 </div>
//                 <div class="totalInfoDiv">
//                     <div class="countryInformationDiv">
//                             <div class="countryinformation">
//                                 <h3>${countryInformation.name}</h3>
//                                 <h4>Native name: <span>81,770,000</span></h4>
//                                 <h4>population: <span>Europe</span></h4>
//                                 <h4>Subregion: <span>Berlin</span></h4>
//                                 <h4>Capital: <span>Berlin</span></h4>
//                             </div>
//                             <div class="countryinformation2">
//                                 <h4>Native name: <span>81,770,000</span></h4>
//                                 <h4>population: <span>Europe</span></h4>
//                                 <h4>Subregion: <span>Berlin</span></h4>
//                             </div>
//                     </div>
                    
//                     <div class="borderCountries">
//                         <h4>Border Countries: <span>France</span><span>Germany</span><span>Netherland</span> </h4>
//                     </div>
//                 </div>
//         </div>
//         `

        
//     })
//     .join('');
//     countryList.innerHTML = htmlString;
// }


loadCharacters()














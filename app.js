const BASE_URL  = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
const brooklyn  = '?agency=NYPD&borough=BROOKLYN'
const queens    = '?agency=NYPD&borough=QUEENS'
const staten    = '?agency=NYPD&borough=STATEN ISLAND'
const bronx     = '?agency=NYPD&borough=BRONX'
const manhattan = '?agency=NYPD&borough=MANHATTAN'
const div = document.querySelector('div')
let userInput = document.querySelector('input');
const bronxButton = document.querySelector('#bronx')
const manhattanButton = document.querySelector('#manhattan')
const statenButton = document.querySelector('#staten')
const queensButton = document.querySelector('#queens')
const brooklynButton = document.querySelector('#brooklyn')

// function addedInfo(arr){
//     for(let i = 0; i < arr.length; i++){
//     div.innerHTML += `<ul><li>${arr[i].resolution_description}</li></ul>`; 
//     } 
// }
// testing something



function results(arr){

    for(let i = 0; i < arr.length; i++){
        div.innerHTML += `<ul><li>${arr[i].complaint_type}</li></ul>`;  
        div.innerHTML += `<button onclick='addedInfo()'id ='moreInfo'>Police Action</button>`;
    }
}
bronxButton.addEventListener('click', async () =>{   
    let valueInput = userInput.value;
     if(valueInput ==''){
        valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${bronx}&$limit=${valueInput}`)
        let result = response.data
        console.log(result)
      results(result)
    }
    catch (error) {
        console.log(error)
    }   
});
brooklynButton.addEventListener('click', async () =>{   
    let valueInput = userInput.value;
    if(valueInput ==''){
           valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${brooklyn}&$limit=${valueInput}`);
        let result = response.data
        console.log(result)
        results(result)
    }
    catch (error) {
        console.log(error)
    }   
});
manhattanButton.addEventListener('click', async () =>{ 
    let valueInput = userInput.value;
    if(valueInput ==''){
           valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${manhattan}&$limit=${valueInput}`); 
        let result = response.data
        console.log(result)
        results(result)
    }
    catch (error) {
        console.log(error)
    }   
});
statenButton.addEventListener('click', async () =>{
    let valueInput = userInput.value;
    if(valueInput ==''){
           valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${staten}&$limit=${valueInput}`);
        
        let result = response.data
        console.log(result)
        results(result)
    }
    catch (error) {
        console.log(error)
    }   

});
queensButton.addEventListener('click', async () =>{
    let valueInput = userInput.value;
    if(valueInput ==''){
           valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${queens}&$limit=${valueInput}`);
        
        let result = response.data
        console.log(result)
        results(result)
    }
    catch (error) {
        console.log(error)
    }   
});

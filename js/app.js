// don't show api key on your js file 
const API_KEY = `4496a486f7f5997d911f0e0221480b09`

const  loadTemparature = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` ;

    const res  = await fetch(url)
    const data  = await res.json()
    displayTemparature(data)
    // console.log(url)
    
}
const displayTemparature = data =>{
    setInnertTextById('temparature', data.main.temp)
    setInnertTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main)
}

const setInnertTextById =  (id, text) =>{
    const temparature = document.getElementById(id);
    temparature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click',function(){
    const serachField = document.getElementById('search-field')
    const city = serachField.value ;
    console.log(city);
    // set city 
    const cityName = document.getElementById('city-name');
    cityName.innerText = city;
    loadTemparature(`${city}`)
    console.log('button clicked')
})


// search by enter 
// document.getElementById('search-field').addEventListener('keypress', function(event){
//     console.log(event.key)
//     if(event.key === 'Enter'){
//         const serachField = document.getElementById('search-field')
//     const city = serachField.value ;
//     console.log(city);
//     const cityName = document.getElementById('city-name');
//     cityName.innerText = city;
//     loadTemparature(`${city}`)
//     }
// })

loadTemparature('chittagong')
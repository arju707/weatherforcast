async function fetchdata(){
    let place=document.getElementById("input").value
    try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=99a9e736ea8428119191e8ffdcd9af60`)
        const data=await res.json();

        
    

        let weather=(data.weather[0].main)
        // let rain=(data.rain.1h)
        let clouds=(data.clouds.all)
        let wind=(data.wind.speed)
console.log(weather)
        weather=[...data.weather]
        str=``
        weather.map((data)=>{
        str+=
            `<span>City name :</span><span>${place}</span><br>
         <span>Weather :</span><span>${weather}</span> <br>
         <span>clouds :</span> <span>${clouds}</span><br>
         <span>Wind:</span><span>${wind}km/h</span><br>`
         console.log(weather)
        })
         document.getElementById("output").innerHTML=str;


    }catch (error){
        console.log(error);
        

    }
}
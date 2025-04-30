<script>

    const apikey = "f5d39d51f51250667b36976981dc8be8";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weahterIcon = document.querySelector(".weather-icon")
    async function checkweather(city){
        const response = await fetch(apiurl + city +`&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".weather").style.display="none";
            document.querySelector(".error").style.display = "block";
        }
        else{
            var  data = await response.json();
          
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    
            if(data.weather[0].main == "Clouds"){
                weahterIcon.src = "./../Images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weahterIcon.src = "./../Images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weahterIcon.src = "./../Images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weahterIcon.src ="./../Images/drizzle.png";
            }
            else if(data.weather[0].main  == "Mist"){
                weahterIcon.src = "./../Images/Mist.png";
            }
            document.querySelector(".weather").style.display="block"
            document.querySelector(".error").style.display="none "

        }

    }

    searchButton.addEventListener("click" , function(){
        checkweather(searchBox.value);
    })
</script>
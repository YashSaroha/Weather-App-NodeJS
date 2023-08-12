const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city = document.getElementById("city")
const temp_value = document.getElementById("temp_value")
const temp_status = document.getElementById("temp_status")
const info = document.getElementsByClassName("info")[0]

const getInfo = async (event) => {
    event.preventDefault();
    const cityVal = cityName.value

    if(cityVal === ""){
        info.style.visibility = "hidden"
        city.innerText = "Please enter a city"
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=01683d8c3b24d04fc5d4490e7b62369e`
            const response = await fetch(url)
            const data = await response.json()
            const dataArray = [data]
            
            info.style.visibility = "visible"
            city.innerText = `${dataArray[0].name}, ${dataArray[0].sys.country}`
            temp_value.innerText = dataArray[0].main.temp

            const temp_mood = dataArray[0].weather[0].main
            if(temp_mood == 'Clear'){
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #ffe642;"></i>`
            }
            else if(temp_mood == 'Clouds'){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #dedede;"></i>`
            }
            else if(temp_mood == 'Rain'){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #3b82fc;"></i>`
            }
            else {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #ffe642;"></i>`
            }
            
           
        } catch (error) {
            city.innerText = "Please enter a valid city"
            info.style.visibility = "hidden"
        }
    }

}

submitBtn.addEventListener('click', getInfo)


// for date and day
const date = document.getElementById('date')
const day = document.getElementById('day')

const update = ()=>{
    let time = new Date();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    date.innerText = time.getDate() + " " + month[time.getMonth()] + ", " + time.getFullYear()
    day.innerText = weekday[time.getDay()]
}
setInterval(update , 1000)



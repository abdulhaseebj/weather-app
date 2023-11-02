const form = document.querySelector('.form')
const input = document.querySelector('input')
const div = document.querySelector('div')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let search = input.value;
    const whether = axios.get(`https://api.weatherapi.com/v1/current.json?key=97ddfb9471c94f95b4193244231710&q=${search}`)
        .then((res) => {
            const data = res.data;
            const location = data.location;
            const country = location.country;
            const city = location.name;
            const time = location.localtime;
            const currentWhether = data.current.temp_c;
            const text = data.current.condition.text;
            const icon = data.current.condition.icon;
            // console.log(country);
            // console.log(city);
            // console.log(time);
            console.log(data);
            console.log(icon);
            // console.log(currentWhether);


            div.innerHTML += `<div class="container">
            <h3 class="city">${city}</h3><br>
            <p class="time">${time},${country}</p><br>
            <span class="icon"> <h2 class="temp">${currentWhether}°C</h2><img class="img" src="${icon}" ></span><br>
            <p class="text">${text}</P>
            
            </div>`



            input.value = '';

        }).catch((err) => {
            console.log(err);
            alert('Enter correct city')
        })




})

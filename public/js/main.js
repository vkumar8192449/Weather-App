async function gettemp() {
    try {
        let city = document.getElementsByClassName('search-input')[0].value;
        document.getElementsByClassName('search-input')[0].value = '';
        if (city === '') {
            throw "Enter the City"
        }
        var url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5147d01314mshed417aa870165fap16446bjsnd4902cfcf7fb',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        if (result.error) {
            throw result.error.message;
        }
        document.getElementsByClassName('temperature')[0].innerHTML = `${Math.floor(result.current.temp_c)}°C`;
    } catch (error) {
        console.error(error);
    }
}


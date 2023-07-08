
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
        document.getElementsByClassName('name')[0].innerHTML = `Name : ${result.location.name}`;
        document.getElementsByClassName('region')[0].innerHTML = `Region : ${result.location.region}`;
        document.getElementsByClassName('country')[0].innerHTML = `Country : ${result.location.country}`;
        document.getElementsByClassName('time')[0].innerHTML = `Local Time : ${result.location.localtime}`;
        document.querySelector('.maindisp img').src = result.current.condition.icon;
    } catch (error) {
        console.error(error);
        showErrorPopup(error);
    }
}

function showErrorPopup(err) {
    var errorPopup = document.getElementById("errorPopup");
    errorPopup.classList.add("show");
    errorPopup.style.left = "20px";
    document.getElementById("errmsg").innerHTML = err;

    setTimeout(function () {
        closeErrorPopup();
    }, 3000);
}

function closeErrorPopup() {
    var errorPopup = document.getElementById("errorPopup");
    errorPopup.classList.remove("show");
    errorPopup.style.left = "-300px";
}
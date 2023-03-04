const countris = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data));
}
const displayData = countris => {
    const countryGridWarper = document.getElementById('countrys_grid');

    countris.forEach(country => {
        const grid = document.createElement('div');
        console.log(country)
        grid.innerHTML = `<h1>Name: ${country.name.common} ${country.flag}</h1>
        <h2>Capital: ${country.capital ? country.capital[0] : "Capital Not Found"}</h2>
        <h4><span style="color: red; font-size: 25px;">${country.currencies ? Object.values(country.currencies)[0].symbol : " "}</span> ${country.currencies ? Object.values(country.currencies)[0].name : "USD is the diffult curencies"}</h4>`;
        grid.classList.add("single_grid")
        countryGridWarper.appendChild(grid)
    });
}

countris()
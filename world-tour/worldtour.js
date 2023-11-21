// console.log("Mm");

const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            
            showData(data)
        })
}
const showData = countries => {
    const countryContainer = document.getElementById('countries-info');
    countries.slice(0, 5).forEach((country) => {
        console.log(country);
        const div = document.createElement('div');
        div.innerHTML = `
      <div class="card w-full bg-base-100 shadow-2xl">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl w-full h-64" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button onclick="ShowDetails('${country.cca2}')" class="btn btn-primary">Details</button>
    </div>
  </div>
</div>
      `
        countryContainer.appendChild(div);
    })

}
const ShowDetails = (id) => {
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    fetch(URL)
    .then(res=>res.json())
    .then(data=>console.log(data))

}
// https://restcountries.com/v3.1/alpha/${id}
loadData();
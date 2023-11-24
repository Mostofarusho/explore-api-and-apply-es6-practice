// console.log("sports")
const searchAllData = (id) => {
  const inputElement = document.getElementById("search-value");
  document.getElementById('single-player-details').innerHTML="";
  document.getElementById('male').classList.add('d-none');
  document.getElementById('female').classList.add('d-none');
  const inputBoxValue=inputElement.value;
  document.getElementById('spinner').classList.remove('d-none');
  // console.log(inputBoxValue);

  const searchId=id || inputBoxValue;

  const URL = (`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchId}`);

  fetch(URL)
    .then(res => res.json())
    .then(data => {
      document.getElementById('spinner').classList.add('d-none');
      showPlayer(data.player)})
}
const showPlayer = (players) => {
  // 
  document.getElementById("search-value").value = "";
  const conatiner = document.getElementById("player-info")
  conatiner.innerHTML = "";
  players.forEach((player) => {
    // console.log(players);
    const { strThumb, strPlayer, strNationality, idPlayer } = player;
    const div = document.createElement('div');
    div.classList.add("col");
    div.innerHTML = `
    <div class="card">
    <img src="${strThumb ? strThumb : "https://picsum.photos/200/300"}" class="card-img-top" alt="...">

    <div class="card-body">
      <h5 class="card-title">${strPlayer}</h5>
      <p class="card-text">Nationality: ${strNationality}</p>
    </div>
    <div class="my-5">
    <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-danger ms-2">Details</button>
    <button type="button" class="btn btn-primary ms-2">Delete</button>
  </div>
  </div>
    `;
    conatiner.appendChild(div);
  });
}
const singlePlayer = (id) => {
  // console.log(id);
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
  fetch(URL)
    .then(res => res.json())
    .then(data => showSinglePlayer(data.players[0]))
}

const showSinglePlayer=(data)=>{
  // console.log(data)
  const {strThumb,strPlayer,strDescriptionEN,strGender}=data;
  const container=document.getElementById('single-player-details');
  container.innerHTML="";
  const div=document.createElement('div');
  if(strGender==="Male"){
    document.getElementById('male').classList.remove('d-none')
  }
  else{
    document.getElementById('female').classList.remove('d-none')
  }
 
  div.innerHTML=`
  <div class="card mb-3 w-100 h-100" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionEN.slice(0,500)+"..."}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  `
  container.appendChild(div);
}
searchAllData("messi");
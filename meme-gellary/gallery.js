// console.log("Js is loading");
const loadData = () => {
    fetch('https://meme-api.com/gimme/50')
        .then(res => res.json())
        .then(data => showMemes(data.memes))
        .catch((err) => {
            console.log(err);
        });
}
const showMemes = (memes) => {

    const memesContainer = document.getElementById('showMeme');

    memes.forEach((meme) => {
        console.log(meme);
        const div = document.createElement('div');
        div.innerHTML = `<div class="card text-center w-96 bg-base-100 shadow-2xl">
        <figure><img class="w-full h-64" src="${meme.url}" alt="Shoes" /></figure>
        
        </div>
      </div>`
        memesContainer.appendChild(div);
    })

}
loadData();
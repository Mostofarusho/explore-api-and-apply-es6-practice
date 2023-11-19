// console.log("Its working");
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showData(data))
        .catch((err) => {
            console.log(err);
        });

}
const showData = data => {
    // console.log(data.slice(0,5));
    const dataContainer=document.getElementById('post-info');
    for(let singleData of data){
        // console.log(singleData);
        const div=document.createElement('div');
        div.innerHTML=`<h1 class="text-3xl text-center">${singleData.title}</h1>`;
        dataContainer.appendChild(div);
    }
}
loadData();
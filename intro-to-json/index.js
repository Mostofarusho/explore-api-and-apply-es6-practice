const myObj={
    id:1,
    name:'Mostofa',
    job:'Web INstructor',
    age:28
}
const jsonData=JSON.stringify(myObj);
const objFormate=JSON.parse(jsonData);
console.log(objFormate);
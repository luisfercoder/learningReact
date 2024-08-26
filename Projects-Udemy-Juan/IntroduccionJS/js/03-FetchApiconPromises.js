const url = 'https://jsonplaceholder.typicode.com/users';
//Promise , un objeto que va a estar disponible a futuro o no

fetch(url)
.then((response)=>{
  return response.json()
})
.then (data=>{
  console.log(data)
})
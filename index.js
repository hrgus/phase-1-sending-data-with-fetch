function submitData(name, email){
   
const dataObject = { 
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
   },
   body: JSON.stringify({
       name,
       email
   }),
};

return fetch("http://localhost:3000/users", dataObject)
   .then(resp => resp.json())
   .then(object => document.body.innerHTML = object.id)
   .catch(function(error) {
     document.body.innerHTML = error;
   });

}

// const submitData = {
//    method: "POST",
//    headers: {
//       "Content-type": "appliction/json",
//    Accept: "application/json",
//    },
//    body: JSON.stringify({
//       "name": "Harry",
//       "email": "hrgus3@gmail.com",
//    }),
   
//    return :theFetch
// };

// function theFetch (){
// fetch("http://localhost:3000/users")
//    .then(resp => resp.json())
//    .then(data => console.log(data))
// };
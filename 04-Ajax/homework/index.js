


const amigos = document.getElementById('lista')

let mostrarAmigos = function (data){
    amigos.innerHTML='';
for (let i = 0; i < data.length; i++){
        //let li= `<li> ${amigos[i].name} <button onclick = "deleteFriend(${amigos[i].id})">X</button><li>`;
        let li =document.createElement('li');
        li.id= data[i].id
        li.innerHTML= data[i].name;
         amigos.appendChild(li)
        let btn = document.createElement('button')
        btn.innerText= 'X'
        btn.id=data[i].id
        li.append(btn)

        btn.addEventListener('click', function(){
            console.log(`el id de este boton es ${li.id}`)
            // idAmigo=li.id;
            //  botonDelete.addEventListener(idAmigo)
            let id = li.id
            deleteFriend(id)
                })
            }
        }
        
        
      


//_1er evento_________________________________________________________________________________________________
let evento1 = document.querySelector('#boton')
evento1.addEventListener( 'click' , function () {
       const options = {
        method: "GET"}
    const isResponseOk = (response) => {
        if (!response.ok)
            throw new Error(response.status);
            return response.json()
          }
amigos.innerHTML='';
        
    fetch('http://localhost:5000/amigos' , options)
    //.then(response => response.text())          // response.text(). Este método indica que queremos procesar la respuesta como datos textuales, por lo que dicho método devolverá una  con los datos en texto plano, facilitando trabajar con ellos de forma manual:
    //.then(data => console.log(data));           // ras procesar la respuesta con response.text(), devolvemos una  con el contenido en texto plano. Esta  se procesa en el segundo .then(), donde gestionamos dicho contenido almacenado en data.
      .then(response => isResponseOk(response))
      .then(data => { mostrarAmigos(data)  
     })
      .catch(err => console.error("ERROR: ", err.message)); 

})

//__2ndo evento________________________________________________________________________________________________

const search = document.querySelector('#search')
const input = document.getElementById('input')
const span = document.getElementById('amigo')
const lista= document.getElementById('lista')


search.addEventListener( 'click' , function (e) {
    const options = {
        method: "GET"}
    const isResponseOk = (response) => {
        if (!response.ok)
            throw new Error(response.status);
            return response.json()
          }
    fetch('http://localhost:5000/amigos' , options)
    //.then(response => response.text())          // response.text(). Este método indica que queremos procesar la respuesta como datos textuales, por lo que dicho método devolverá una  con los datos en texto plano, facilitando trabajar con ellos de forma manual:
    //.then(data => console.log(data));           // ras procesar la respuesta con response.text(), devolvemos una  con el contenido en texto plano. Esta  se procesa en el segundo .then(), donde gestionamos dicho contenido almacenado en data.
      .then(response => isResponseOk(response))
      .then(data => {
        for (let i = 0; i < data.length; i++)
        { if( input.value == data[i].id) {
        console.log(input.value);
            span.innerHTML= `${data[i].name} es tu amigo`;
        }
            
}})
      .catch(err => console.error("ERROR: ", err.message)); 

    })

//___3er evento_______________________________________________________________________________________________

    const inputDelete = document.getElementById('inputDelete')
    const botonDelete = document.querySelector('#delete')
    const span2 = document.getElementById('success')

botonDelete.addEventListener( 'click' , function () { 
        
    deleteFriend()})
       
function deleteFriend(id){
    let idAmigo=''
    if(id){ idAmigo = id} else { idAmigo = inputDelete.value;}
    
    fetch(`http://localhost:5000/amigos/${idAmigo}`, {
    method: "DELETE" 
    })
     .then(response => response.json())
     .then(data => {
        span2.innerHTML = 'tu amigo fue borrado con exito'
         //aca el delete funciona piola, hay que aprolijar algunas cosas.
     
     mostrarAmigos(data) 
    
         
    });}



inputDelete.addEventListener( 'click' , function(){
inputDelete.value=''
})
input.addEventListener( 'click' , function(){
    input.value=''
    })


const formulario = document.querySelector ("form");
const ibotao = document.querySelector ("button");
const inome = document.querySelector (".nome");
const iemail = document.querySelector (".email");
const isenha = document.querySelector (".senha");
const itelefone = document.querySelector (".telefone");

const fetchUsuarios = () => {
const url = "http://localhost:8080/usuarios"

fetch (url)
.then (response => response.json ())
.then (usuarios => {
console.log (fetchUsuarios)
  
})
}
fetchUsuarios ()

 Headers: {
 'Accept'; 'application/json',
 'Content-Type'; 'application/json'


  }
  method: "POST",
  body = JSON.stringify ({
    nome: inome.value,
    email:iemail.value,
    senha:isenha.value,
    telefone:itelefone.value

   })


  
  
;
function limpar () {
inome.value = "";
iemail.value = "";
isenha.value ="";
itelefone.value ="";
};

formulario.addEventListener ('submit', function (event) {
    event.preventDefault();

cadastro ();
limpar ();


  
    });
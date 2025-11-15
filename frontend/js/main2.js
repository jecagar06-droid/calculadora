const miTitulo = document.querySelector("nombre") 
miTitulo.textContent = "Calculadora Básica" 
  

function changeColor(newColor){
    const elem = document.getElementById("color");
    elem.style.color=newColor;
}

document.querySelectorAll("button").forEach(
    (button)=>{
        button.addEventListener("click",(event) =>{
            changeColor(event.target.textContent);
        });
    }
)

function suma(numero){
    const elem = document.getElementById("resultado");  
    var resultado_anterior = elem.textContent;

    if(resultado_anterior==="Resultado"){
        elem.textContent= parseInt(numero);
    }else{
            elem.textContent=parseInt(resultado_anterior) +parseInt(numero);
    }
}

document.querySelectorAll("button").forEach(
    (button)=> {
        button.addEventListener("click", (event)=>{
            suma(event.target.textContent);
        });
    }
)


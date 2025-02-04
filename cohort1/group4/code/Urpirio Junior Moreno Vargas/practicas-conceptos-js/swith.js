addEventListener("click", ()=>{
    let number1 = parseInt(document.getElementById("swith").value);
    let number2 = parseInt(document.getElementById("swith2").value);

    let result = document.getElementById("resultado");
    r = number1+number2;
    console.log(r)

    if (r>42) {
        result.innerHTML +=`<h1> Es Mayor Resultado</h1> ${r}`;
    }else{
        result.replaceChild +=`<h1> Es menor Resultado</h1> ${r}`;
    }


})

document.getElementById("edad1").addEventListener("click",()=>{
    let edadtext = document.getElementById("Edadtext");
    let edadValeu = parseFloat(document.getElementById("edad").value);
    switch (true) {
        case edadValeu > 18 && edadValeu < 50 :
            edadtext.innerHTML += `<h1>tienes ${edadValeu} asi que eres adulto</h1>`;
            break;
        
        case edadValeu<18 && edadValeu>12:
            edadtext.innerHTML += `<h1>tienes ${edadValeu} asi que eres adolecente</h1>`;
          break;

        default:
            edadtext.innerHTML += `<h1>tienes ${edadValeu} asi que eres mayor de viejo</h1>`;

            break;
    }
})
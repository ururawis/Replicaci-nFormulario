let mainForm = document.getElementById("mainForm");
let input_nom = document.getElementById("nombre");
let input_edad = document.getElementById("edad");
let input_codigopostal = document.getElementById("codigopostal");

mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Se enviará el formulario");
    console.log("El nombre es: " + input_nom.value);
    if(isNaN(input_nom.value)==true){
        console.log("El nombre es: " + input_nom.value);
    }
    else{
        console.log("El nombre "+ input_nom.value + " es inválido")
        e.preventDefault();
        alert("El nombre no puede contener números");
        return false;
    }

    
    if(input_codigopostal.value.length == 5){
        console.log("El código postal es correcto: "+ input_codigopostal.value);
    }
    else{
        console.log("El código postal es incorrecto");
        e.preventDefault();
        alert("Código postal incorrecto");
        return false;
    }

    if(isNaN(input_edad.value)==true){
        console.log("La edad no es numérica");
        e.preventDefault();
        alert("Edad incorrecta");
        return false;
    }
    else{
        console.log("La edad es númerica "+ input_edad.value)
    }

    let genero_selec = ["masculino", "femenino", "otro"];
    let input_genero = document.querySelector("input[name='genero']:checked")
    console.log("El género seleccionado es "+ input_genero.value);
    if(genero_selec.indexOf(input_genero.value)!=-1)[
        console.log("Género bien ingresado")
    ]
    else{
        console.log("Género inválido");
        e.preventDefault();
        alert("El género es inválido");
        return false;
    }

    let intereses_selec = ["tecnologia", "deportes", "musica", "arte"];
    let input_intereses = document.querySelector("input[name='intereses']")
    console.log("Intereses seleccionaos: "+ input_intereses.value);
    if(intereses_selec.indexOf(input_intereses.value)!=-1)[
        console.log("Intereses bien")
    ]
    else{
        console.log("Intereses inválidos");
        e.preventDefault();
        alert("Los intereses son inválidos");
        return false;
    }

    let pais_selec = ["mex", "esp", "arg", "col", "per", "chile", "ven", "ot"];
    let input_pais = document.querySelector("select[name='pais']")
    console.log("País seleccionado: "+ input_pais.value);
    if(pais_selec.indexOf(input_pais.value)!=-1)[
        console.log("País admitido " + input_pais.value)
    ]
    else{
        console.log("País válido");
        e.preventDefault();
        alert("El país es inválido");
        return false;
    }
});
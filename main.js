function login(){
    var user, password
    user = document.getElementById("correo").value;
    password = document.getElementById("contraseña").value;
    
    if(user== "grupo5@upn.pe" && password == "123"){
     window.location = "index.html";
    }else{
         alert("Datos incorrectos")
    }
    
    }
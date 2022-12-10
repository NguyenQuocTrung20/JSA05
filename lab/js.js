document.getElementById("login").onclick = function () {
    email = "";
    email += document.getElementById("email").value;

    console.log(email);

    names = "";
    names += document.getElementById("names").value;

    console.log(names);

    pass = "";
    pass += document.getElementById("pass").value;

    console.log(pass);

    if(email == "" && names == "" && pass ==""){
        document.getElementById("failed").style.visibility = "visible"
    }
    else if(email /= "@") {
        document.getElementById("failed").style.visibility = "visible"
    }
}


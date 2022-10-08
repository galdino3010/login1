function validate()

var inputLogin = document.getElementById("inputLogin").value

var inputPassword = document.getElementById("inputPassword").value



if(inputLogin == 'antonio@gmail.com' && inputPassword =='carlos'){
    alert("Login Successfully");
    return false;
} else {
    alert("login failed");
}

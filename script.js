function validateForm(){
    let validateName = document.getElementById("userName").value;
    let validate email = document.getElementById("userName").value;

    if (validateName == "shaunmwanza31@gmail.com" || validateName == ""){
      alert("Please enter a valid name")
    }

    // if(validateEmail == "Enter your email") || validateEmail = ""){
    //    alert("Please enter a valid email")
    // }

    if (validateEmail.includes("@") && validateEmail.includes(".")){

    } else {
        alert("Please enter a valid email")
    }
    document.getElementById("response"),innerHTML = "<h2>Thank you for your response!</h2>";
}
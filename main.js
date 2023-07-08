    
const form = document.getElementById("contact-form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber= document.getElementById("phoneNumber");
const errorMessageDisplay1 = document.getElementById("errorMessage1");
const errorMessageDisplay2 = document.getElementById("errorMessage2");
const errorMessageDisplay3 = document.getElementById("errorMessage3");


form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    validateForm();
    if(isFormValid()){
        form.submit();
    }
    else{
        event.preventDefault();        
    }
}

function isFormValid(){
    return true;
//    return !(errorMessageDisplay1.classList.contains('error') ||errorMessageDisplay2.classList.contains('error') ||errorMessageDisplay3.classList.contains('error'));
}

function validateForm(){

    let userNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let phoneNumberValue = phoneNumber.value.trim();
    // validate email
    if(!ValidateEmail(emailValue)){
        setErrorMessage("email", "Invalid Email, please enter valid email address");
    }
    else{
        setSuccess("email");
    }

    //validate name
    if(userNameValue === null || userNameValue === ""){
        setErrorMessage("name", "Name cannot be empty");
    }
    else if(userNameValue.length <= 3){
        setErrorMessage("name", "Name cannot be less than 3 letters");
    } else{
        setSuccess("name");
    }

    //validate phoneNumber
    if(phoneNumberValue === null || phoneNumberValue === "" ){
        setErrorMessage("phoneNumber", "Mobile Number cannot be empty");
    }
    else if(phoneNumberValue.length > 10){
        setErrorMessage("phoneNumber", "Mobile Number length cannot be more than 10");
    }else{
        setSuccess("phoneNumber");
    }
   
}

function setErrorMessage(placeholder, message){
    let red = "#ee3b34";
    if(placeholder === "email"){
        email.style.border = `${red} 1px solid`;
        errorMessageDisplay2.innerHTML = message;
        errorMessageDisplay2.style.visibility = "visible";
    }
    if(placeholder === "name"){
        userName.style.border = `${red} 1px solid`;
        errorMessageDisplay1.innerHTML = message;
        errorMessageDisplay1.style.visibility = "visible";
    }
    if(placeholder === "phoneNumber"){
        phoneNumber.style.border = `${red} 1px solid`;
        errorMessageDisplay3.innerHTML = message;
        errorMessageDisplay3.style.visibility = "visible";
    }
   
}

function setSuccess(placeholder){
    if(placeholder === "email"){
        email.style.border = `green 1px solid`;
        errorMessageDisplay2.style.visibility = "hidden";
    }

    if(placeholder === "name"){
        userName.style.border = `green 1px solid`;
        errorMessageDisplay1.style.visibility = "hidden";
    }

    if(placeholder === "phoneNumber"){
        phoneNumber.style.border = `green 1px solid`;
        errorMessageDisplay3.style.visibility = "hidden";
    }
    
}

function resetContactForm(){
    errorMessageDisplay1.style.visibility = "hidden";
    errorMessageDisplay2.style.visibility = "hidden";
    errorMessageDisplay3.style.visibility = "hidden";

    let gray = "#9b9a9a";
    email.style.border = `${gray} 1px solid`;
    userName.style.border = `${gray} 1px solid`;
    phoneNumber.style.border = `${gray} 1px solid`;

     userName.value =  "";
     email.value =  "";
     phoneNumber.value =  "";
}

function ValidateEmail(emailValue){
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailValue !== null && emailValue !== '' && filter.test(emailValue);
}

$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".navbar" ).addClass("test");
    } else {
        $( ".navbar" ).removeClass("test");
    }
});


function openContactPopUp(){
    document.getElementById("body-overlay").style.display = "block";
    document.getElementById("contact-popUp").classList.add("show-contact-popUp");

    const body = document.querySelector("body");
    body.style.overflow = "hidden";
}

function closeContactPopUp(){
    document.getElementById("body-overlay").style.display = "none";
    document.getElementById("contact-popUp").classList.remove("show-contact-popUp");

    const body = document.querySelector("body");
    body.style.overflow = "auto";

    //reset contact form
    resetContactForm();
    
    
}








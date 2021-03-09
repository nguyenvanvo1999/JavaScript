"use strict"

var $ = function(id){
    return document.getElementById(id);
}

var processEntries = function(){
    var isVaid = true;

    //get values for user entries
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "Text";
    if($("email").checked){
        contact = "Email";
    }
    if($("none").checked){
        contact = "None";
    }
    var terms =  $("terms").checked;

    //validate for form
    if(email==""){
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required";
        isVaid = false;
    }
    else{
        $("email_address").nextElementSibling.firstChild.nodeValue = "";
    }
    if(phone==""){
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required";
        isVaid = false;
    }
    else{
        $("phone").nextElementSibling.firstChild.nodeValue = "";
    }
    if(country==""){
        $("country").nextElementSibling.firstChild.nodeValue = "Please select a country";
        isVaid = false;
    }
    else{
        $("country").nextElementSibling.firstChild.nodeValue = "";
    }
    if(terms == false){
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked";
        isVaid = false;
    }
    else{
        $("terms").nextElementSibling.firstChild.nodeValue = "";
    }

    //submit form
    if(isVaid){
        $("register_form").submit();
    }
};

var resetForm = function(){
    $("register_form").reset();
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";
    $("country").nextElementSibling.firstChild.nodeValue = "*";
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function(){
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;
    $("email_address").focus();
};

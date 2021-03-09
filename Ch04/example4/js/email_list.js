"use strict";

var $ = function(id){
    return document.getElementById(id);
};

var processEntry = function(){

    //get value from form
    var email = $("email_address1").value;
    var email2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    //validate data
    if(email == ""){
        isValid = false;
        $("email_error").firstChild.nodeValue = "This field is required";
    }else{
        $("email_error").firstChild.nodeValue = "";
    }

    if(email2 == ""){
        isValid = false;
        $("email2_error").firstChild.nodeValue = "This field is required";
    }
    else if(email2 != email){
        $("email2_error").firstChild.nodeValue = "This field is required";  
    }
    else{
        $("email2_error").firstChild.nodeValue = "";
    }

    if(firstName == ""){
        isValid = false;
        $("first_name_error").firstChild.nodeValue = "This field is required";
    }else{
        $("first_name_error").firstChild.nodeValue = "";
    }

    //submit form
    if(isValid) {
    $("email_form").submit();
    }
};

window.onload = function(){
    $("join_list").onclick = processEntry;
    $("email_address1").focus();
};

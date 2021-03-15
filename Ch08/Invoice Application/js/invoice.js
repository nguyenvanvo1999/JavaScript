"use strict";

var $ = function(id){
    return document.getElementById(id);
};

var calculateDiscount = function(customer, subtotal){
    var discountPercent = 0;
    switch(customer){
        case "regular":{
            if(subtotal < 100){
                return 0;
            }
            else if(subtotal >= 100 && subtotal < 250){
                return .1;
            }
            else if(subtotal >= 250 && subtotal < 500){
                return .25;
            }
            else if(subtotal >= 500){
                return .3;
            }
            break;
        }  
        case "loyalty":{
            return .3;
            break;
        } 
        case "honor":{
            return (subtotal < 500) ? .4 : .5;
            break;
        }  
        default:{
            return 0;
            break;  
        }
    }
    return discountPercent;
}

var processEntries = function(){
    var discountAmount=0, invoiceTotal=0, discountPercent=0;
    //get value
    var customerType = $("#type").value();
    var subtotal = $("#subtotal").value();

    discountPercent = calculateDiscount(customerType, subtotal);
    discountAmount = subtotal * discountPercent;
    invoiceTotal = subtotal - discountAmount;

    $("subtotal").value(subtotal.toFixed(2));
    $("percent").value(discountPercent * 100).toFixed(2);
    $("amount").value(discountAmount.toFixed(2));
    $("total").value(invoiceTotal.toFixed(2));
};

window.onload = function(){
    $("calculate").onclick = processEntries;
    $("type").focus(); 
};
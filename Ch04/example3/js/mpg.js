"use strict";

var $ = function(id){
    return document.getElementById(id);
};

var calculateMPG = function(miles, gallons){
    var result = miles / gallons;
    return result.toFixed(2);
};

var processEntry = function(){
    //get value from form
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);

    //validates
    if(isNaN(miles) || isNaN(gallons) || miles < 0 || gallons < 0 || gallons == 0){
        alert("Please enter valied data");
        return;
    }

    var result = calculateMPG(miles, gallons);
    $("mpg").value = result;
};

window.onload = function(){
    $("calculate").onclick = processEntry;
};

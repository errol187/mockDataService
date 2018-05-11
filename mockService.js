"use strict";

var indx = 1, delay = 2000, limit = 20;

// TODO: Randomise results to mimic a service that is updated regularly
var fnc = function (){
    var obj = {}, sDate, indx = 0, data;
    obj[new Date()] = 1;

    // TODO: Return dynamic results
    while (indx <= limit) {
        console.log(obj, indx);
        ++indx;
    }
};

var clearInt = function (fnc) {
    if (indx === limit) {
        console.log("You have reached your limit");
        clearInterval(fnc());
    }
};

var mockService = (fnc, delay) => {
    setInterval(fnc, delay);
};

mockService(fnc, delay);

clearInt();
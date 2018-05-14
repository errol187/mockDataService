"use strict";

var indx = 2, delay = 2000, limit = 20, timeStamp = {};
var key = "key", value = "value";

// assigning the date to a key:value pairing defaults to type 'string'
timeStamp[new Date()] = 1;
var jObj = {"test":"obj"}, jArray = ["testArray"];

var serviceObj = () => {

    // for (var i = 0; i < 20 ; i++ ) {
    while ( indx < 20) {
        console.log("valueStart");
        jArray.push(value+indx);
        console.log(jArray);
        console.log("valueEnd");

        for (key in jArray){
            // console.log(key);
            console.log("start");
            console.log(jArray[key]);
            console.log("end");
        }
    ++indx;
    }

}

serviceObj();


//
// // TODO: Randomise results to mimic a service that is updated regularly
// var fnc = function (){
//     var sDate, indx = 0, data;
//
//     // TODO: Return dynamic results
//     while (indx <= limit) {
//         console.log(timeStamp, indx);
//         ++indx;
//     }
// };
//
// // Clear the interval that has been set
// var clearInt = function (fnc) {
//     if (indx === limit) {
//         console.log("You have reached your limit");
//         clearInterval(fnc());
//     }
// };
//
// var mockService = (fnc, delay) => {
//     setInterval(fnc, delay);
// };
//
// mockService(fnc, delay);
//
// clearInt();

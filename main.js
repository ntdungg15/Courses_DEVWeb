alert("hi silent");
var n = 'the cat';
// console.log("Information here");
// confirm(n);

// alert(n);
// prompt(n);
// setTimeout(function(){
//         confirm(n);
// },1000) 

setInterval( function(){
    confirm(n);
},1000   )
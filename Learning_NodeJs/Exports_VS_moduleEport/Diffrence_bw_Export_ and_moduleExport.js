// ------------------------------------------------
// 1. Difference between module.exports and exports https://www.youtube.com/watch?v=1Jh5fUmk0U0
// module.exports -- ye object hota hai
// exports -- ye refrence varible hota hai jo module.exports ko hi point krta hai.
// chahe hm module.exports ka use kare ya exports ka use kare return module.exports hi hota hai.


module.exports = {
    sayHello : function(){
        console.log("Say Hello");
    },

    sayThank : function(){
        console.log("Say Thanks");
    }
}


exports.sayBye = function(){
    console.log("Bye Bye");
}

console.log(module);
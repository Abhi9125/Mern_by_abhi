// impure function --> jab fuction ke argument ki value same ho but result 
// differnt deffent ho(ya jb koi function external fector pe depend krta ho) to use
//  inpure function kahte hai.

const a = 9;

function Sum(b){
    console.log(a + b);
}

Sum(2); // 11 --> when is 9;
Sum(2); // 15 --> when is 13

// pure function -->
function add(a,b){
    // console.log(a+b); //side effect --> 
    return(a+b);
}
const ans = add(5,3);
console.log(ans);
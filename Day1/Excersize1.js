
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function(n1,n2){
    return n1 - n2
}

const mul = function (n1,n2){
    return n1 * n2
}

const div = function (n1,n2){
    return n1 / n2
}

//Callback example
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}


console.log(add(1,2))
console.log(add())
console.log(add(1,2,3))
console.log(add(1))
console.log(cb(3,3,add))
console.log(cb(4,3,sub))
console.log(cb(3,3,add))
console.log(cb(3,"hh",add))
console.log(cb(4,5,mul))
console.log(cb(4,2,div))

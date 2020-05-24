let a = function(x) {
    console.log(x + 'a');
    return new Promise (function(resolve, tin){
        x += " mercury";
        resolve(x);
    })
}

let b = function(x) {
    console.log(x + 'b');
    return new Promise (function(resolve, tin){
        x += " venus";
        resolve(x);
    })
}
let c = function(x) {
    console.log(x + 'c');
    return new Promise (function(resolve, tin){
        x += " earth";
        resolve(x);
    })
}
let d = function(x) {
    console.log(x + 'd');
    return new Promise (function(resolve, tin){
        x += " mars";
        resolve(x);
    })
}


a('Stoughton ')
.then(b)
.then(c)
.then(d)
.then((x) => {console.log("big payoff is: "); console.log(x);  })

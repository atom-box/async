
let a = function(x) {
    return new Promise (function(goldify, tinify){
        x += " mercury";
         goldify(x);
    })
}

let b = function(x) {
    return new Promise (function(goldify, tinify){
        x += " venus";
         goldify(x);
    })
}



a('Stoughton ')
.then(7)
.then((x) => {console.log(x); })


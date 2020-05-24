const promGen1 = function (obj) {
    let n = obj.number, s = obj.name;
    return new Promise ((resolve) => {
        let bigger = '';
        for(let i = 0; i < n; i++){
            bigger += s;
        }
        resolve(bigger);
    })
}

const promGen2 = function (myString) {
  return new Promise ((resolve, reject) => {
    let voweless = myString.replace(/[aeiou]/g, '-'); 
    resolve(voweless);
  })
}


const promGen3 = function (myString) {
    return new Promise ((resolve) => {
        let honorable = 'Mr. ' + myString; 
        resolve(honorable);
    })
}

const promGen4 = function(obj) {
   return new Promise ((request, resolve) => {
    let result = promGen1(obj).then(promGen2).then(promGen3)
      .then((data) => {console.log(data)});
    return result;
   })
}

let files = [
    {
        number: 4,
        name: "gogleplex"
    },
    {
        number: 21,
        name: "kan-"
    },
    {
        number: 5,
        name: "fundraiserfour"
    },
    {
        number: 5,
        name: "graphic novel "
    },
]

pFiles = files.map(promGen4);



Promise.all(pFiles)
.then((x) => console.log(x));

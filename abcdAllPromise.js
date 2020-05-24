const promGen = function (obj) {
    let n = obj.number, s = obj.name;
    return new Promise ((resolve) => {
        let bigger = '';
        for(let i = 0; i < n; i++){
            bigger += s;
        }
        resolve(bigger);
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

pFiles = files.map(promGen);



Promise.all(pFiles)
.then((x) => console.log(x));

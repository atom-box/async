const promGen1 = function (obj) {
    let s = obj.name + " (:::::) ";
    return new Promise ((resolve) => {
        let bigger = '';
        let n = 7 * Math.random();
        n = Math.ceil(n);
        for(let i = 0; i < n; i++){
            bigger += s;
        }
        obj.bigger = bigger;
        resolve(obj);
    })
}

const promGen2 = function (obj) {
  return new Promise ((resolve, reject) => {
    let myString = obj.name;
    let voweless = myString.replace(/[aeiou]/g, '-');
    obj.voweless = voweless; 
    resolve(obj);
  })
}


const promGen3 = function (obj) {
    return new Promise ((resolve) => {
        let honorable = 'Mr. ' + obj.path; 
        obj.honorable = honorable;
        resolve(obj);
    })
}

const promGen4 = function(obj) {
   return new Promise ((request, resolve) => {
    let result = promGen1(obj).then(promGen2).then(promGen3)
      .then((data) => {console.log(`Here's ${obj.name}: \n`); console.dir(data)});
    return result;
   })
}

let files = [
  {
    fullpath: 'a/b/kaiser.kraut',
    modified: new Date(2020, 2, 14),
    path: 'a/b/',
    name: 'kaiser.kraut'
  },
  {
    fullpath: 'a/b/kava-CSV-abcdefg.xls.zip',
    modified:  new Date(1965, 6, 13),
    path: 'a/b/',
    name: 'kava-CSV-abcdefg.xls.zip'
  },
  {
    fullpath: 'a/b/lava.py.zip',
    modified:  new Date(1970, 1, 14),
    path: 'a/b/',
    name: 'lava.py.zip'
  },

];

pFiles = files.map(promGen4);


Promise.all(pFiles)
.then((x) => console.log(x));

console.log("ლომიიიიი"); 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

console.log("მოგვეხმარა fetch-ი!"); 



function asyncPromiseFunction(work) {
    return new Promise((resolve, reject) => {
        if (work === "")
            reject(Error("Nothing Katletiiiii")); 

        setTimeout(function () {
            resolve(work); 
        }, 1000);
    });
}

asyncPromiseFunction("work 2")
    .then((result) => {
        console.log("lomiiiiiiiiii"); 
        console.log(result);
    })
    .catch((err) => {
        console.log(err); 
    });

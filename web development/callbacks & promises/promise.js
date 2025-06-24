console.log("this is a promise")
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this is printed via prom")
        resolve("aman")
        reject("shah")
    }, 3000);
})
prom1.then((a) => {
    console.log(a)
})

let prm= new Promise((resolve, reject) => {
    let success=false
    if(success){
        resolve("it worked")
    }else{
        reject("it failed")
    }
})
prm.then ((result)=> {
    console.log(result)
})
prm.catch((error)=>{
    console.log(error)
    
})
let prm1= new Promise((resolve, reject) => {
    
    if(1+1==2){
        resolve("it worked")
    }else{
        reject("it failed")
    }
})
prm1.then ((result)=> {
    console.log(result)
})
prm1.catch((error)=>{
    console.log(error)
    
})

// let prm = new Promise((resolve, reject) => {
//     console.log("hey man")
//     resolve("aman")
// })


// prm.then((result) => {
//     console.log(result)
// })


// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
async function main() {
    console.log("loading modules")

    console.log("do something else")

    console.log("load data")

    let data = await getdata()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}
main()

// data.then((result) => {
//     console.log(result)
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")

// })


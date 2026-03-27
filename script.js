// let promise = fetch("https://fakestoreapi.com/products")
// // promise.then((val)=>val.json()).then((data)=>{console.log(data)})


// let real = async ()=>{
//     let arun = await promise
//     let finalRes = await arun.json()
//     console.log(finalRes)
// }

// real()

// let pro = new Promise((res,rej)=>{
//     // return res("succesful code running")
//     return rej("error excuted")
// })

// // es5 
// // pro.then((val) => console.log(val)).catch((val) => console.log(val))


// // es6
// let run = async () => {
//   try {
//     let a = await pro;
//     console.log(a);
//   } catch (err) {
//     console.log(err);
//   }
// };
// run()

// ***** question 1 ****

let res = fetch("https://jsonplaceholder.typicode.com/users")


// // es5 method
// // res.then((val) => val.json()).then((val) => console.log(val))

// // es6 method

// let result = async()=>{
//   let final = await res
//   let finalResult = await final.json()
//   console.log(finalResult)
// }

// result()


// **** question 3 ******

// res.then((val) => console.log(val))

// **** question 4 ******


//  let result = async()=>{
//   let final = await res
//   let finalResult = await final.json()
//   console.log(finalResult)
//   console.log("data loaded..")
// }

// result()


// **** question 7 ******


// let pro = new Promise((res,rej)=>{
//   return res("Hello")
// })

// pro.then((val) =>console.log(val))

// **** question 8 ******

// let pro = new Promise((res,rej)=>{
//   return rej("Something went wrong..")
// })
// pro.then().catch((val)=> console.log(val))

// **** question 9 ******


//  let pro = new Promise((res,rej)=>{
//   let path = true
//   if(path){
//     res("code successfully executed")
//   }
//   rej("there is an error...")
// })


// pro.then((val) =>{
//   console.log(val)
//   return "step one is executed"
// }).then((val2) =>{
//   console.log(val2)
// })


// **** question 10 *****
// let pro = new Promise((res,rej)=>{
//   return res("hello")
// })

// // let fun = async()=>{
// //   let pr = await pro
// //   console.log(pr)
// // }


// let fun = ()=>{pro.then((val)=> console.log(val))}

// setTimeout(fun,2000)

let pro = new Promise((res,rej)=>{
  return res("Step1")
})

pro.then((val)=>{
  console.log(val)
  return "Step2"
}).then((val2)=> console.log(val2))
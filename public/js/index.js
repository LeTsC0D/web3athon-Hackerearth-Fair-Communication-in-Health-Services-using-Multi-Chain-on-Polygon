import {  init_web3user } from "./utiluser.js"
import {  init_web3doc } from "./utildoctor.js"
import {  init_web3hos } from "./utilhospital.js"

window.onload = async function () {

  await init_web3user()
  await init_web3doc()
  await init_web3hos()
} 
// import {  init_web3 } from "./utiluser.js"

// window.onload = async function () {

// var x = await init_web3()
// document.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     var entity=document.getElementById("myList").value;
//     var id=document.getElementById("Id").value;
//     var username=document.getElementById("Username").value;
//     var password=document.getElementById("myInput").value;

//     //let valid = false;
//     console.log(entity)
//     console.log(id)
//     console.log(username)
//     console.log(password)
//     // console.log(window.user)
//     var flag=false
    

//     await  window.user.methods.fetchuser(id).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
//         if (error) {
//             console.log(error)
//             // return false;
//         }
//         else
//         {
//         var s1="http://localhost:3000/"+id
//         window.location.href=s1
//         // window.location.replace(s1);
//         // window.location.assign("http://localhost:3000/user")
//         console.log(result)
//         //   return true;     
//         }
//       });
      
//     //   
//       return false
// })

// }

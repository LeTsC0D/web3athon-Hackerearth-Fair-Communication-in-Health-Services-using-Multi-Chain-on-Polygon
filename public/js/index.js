import {  init_web3user } from "./utiluser.js"
import {  init_web3doc } from "./utildoctor.js"
import {  init_web3hos } from "./utilhospital.js"

window.onload = async function () {

  await init_web3user()
  await init_web3doc()
  await init_web3hos()
  document.getElementById("Id").value=window.user_accounts[1]
  
  document.getElementById("myList").addEventListener('change',(e)=>{
  var selected=document.getElementById("myList").value
  // document.getElementById("Id").value=window.doc_accounts[1]
  if(selected=="Patient"){
    document.getElementById("Id").value=window.user_accounts[1]
    console.log(document.getElementById("Id").value)
    console.log("patient")    
  }else if(selected=="Doctor"){
    document.getElementById("Id").value=window.doc_accounts[2]
    console.log(document.getElementById("Id").value)
    console.log("Doctor")
  }else{
    document.getElementById("Id").value=window.hos_accounts[3]
    console.log(document.getElementById("Id").value)   
    console.log("hospital") 
  }
})

  // var form=document.getElementById('form')
  // form.addEventListener('submit', function(e){
  //   e.preventDefault()
   
  //   var id=window.user_accounts[0]
  //   var username=document.getElementById('Username').value
  //   var password=document.getElementById('myInput').value

  //   // var body=document.getElementById('body').value
  //  console.log(JSON.stringify({
  //   Id:id,
  //   Username:username,
  //   Password:password,
  //  }))

  //   fetch('http://localhost:5000/user', {
  //    method: 'POST',
  //    body: {
  //     Id:id,
  //     Username:username,
  //     Password:password,
  //     entity:"Patient",
  //    }
  //    })


  //  });
  // document.getElementById("myList").addEventListener('change',(e)=>{
  //   var selected=document.getElementById("myList").value
  //   console.log(selected)
  //   if(selected=="Patient"){
  //     var patiendid=document.getElementById("Id").value
  //     var patiendusername=document.getElementById("Username").value
  //     var patiendpassword=document.getElementById("myInput").value
  //     console.log(patiendid)
  //     console.log(patiendusername)
  //     console.log(patiendpassword)
  //     document.getElementById("Id").value=window.user_accounts[0]
  //     console.log(document.getElementById("Id").value)
  //     console.log("patient")
  //     if(patiendid.length>0 && patiendusername.length>0 && patiendpassword.length>0){
  //       window.user.methods.fetchuser(patiendid).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
  //         if (error) {
  //           console.log(error)
  //         }
  //         else
  //         {
  //           consoel.log(result)
  //           if(result=="none"){
  //           window.user.methods.createuser(patiendid,patiendusername,patiendpassword).send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
  //             if (error) {
  //               console.log(error)
  //             }
  //             else
  //             {
  //               console.log(result)
  //             }
  //           }) 
  //           }
  //         }
  //       })
  //     }

  //     //  window.user.methods.fetchuser(document.getElementById("Id").value).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
  //     //   if (error) {
  //     //     console.log(error)
  //     //     // document.getElementById("noaccount").style.display= 'block'; 
  //     //     // document.getElementById("havinganaccount").style.display= 'none';
  //     //     // return false;
  //     //   }
  //     //   else
  //     //   {
  //     //     // document.getElementById("noaccount").style.display= 'none';
  //     //     // document.getElementById("havinganaccount").style.display= 'block';
  //     //     // document.getElementById("username").textContent=result
  //     //     // document.getElementById("userid").textContent=""+document.getElementById("id1").value
  //     //     console.log("send",result)   
  //     //   }
  //     // })

  //   }else if(selected=="Doctor"){
  //     document.getElementById("Id").value=window.doc_accounts[0]
  //     console.log(document.getElementById("Id").value)
  //     console.log("Doctor")
  //   }else{
  //     document.getElementById("Id").value=window.hos_accounts[0]
  //     console.log(document.getElementById("Id").value)   
  //     console.log("hospital") 
  //   }
  // })



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

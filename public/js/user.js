import {  init_web3user } from "./utiluser.js"
import {  init_web3doc } from "./utildoctor.js"
import {  init_web3hos } from "./utilhospital.js"

window.onload = async function () {
  await init_web3user()
  await init_web3doc()
  await init_web3hos()

  var selecteddoctor;
  var selecteddoctorname;
  var selectedhospital;
  var selectedhospitalname;  
  var username1;

   await window.user.methods.fetchuser(document.getElementById("id1").value).call({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
      document.getElementById("noaccount").style.display= 'block'; 
      document.getElementById("havinganaccount").style.display= 'none';
      // return false;
    }
    else
    {
      document.getElementById("noaccount").style.display= 'none';
      document.getElementById("havinganaccount").style.display= 'block';
      document.getElementById("username").textContent=result
      document.getElementById("userid").textContent=""+document.getElementById("id1").value
      console.log("send",result)   
      if(result=="none"){
        window.user.methods.createuser(document.getElementById("id1").value,document.getElementById("username1").value,document.getElementById("password1").value).send({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
          if (error) {
            console.log("error",error)
          }
          else
          {
            document.getElementById("username").innerHTML=document.getElementById("username1").value
            console.log("pass",result)
          }
        })
      }
    }
  })

   await window.doc.methods.fetchalldoctorids().call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
     console.log(result) 
     var select=document.getElementById("doctorlist")
      for(var i=0;i<result.length;i++){
        // console.log(Number(result[i]))
        // var id1=Number(result[i])
         window.doc.methods.getdoctordetails(result[i]).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log("all docors",result1,result1[1])   
            var option = document.createElement("option");
            option.value = result1[1];
            option.text=result1[0]
            select.appendChild(option);            
          }
        })
      }
       
    }
  })  


   await window.hos.methods.fetchallhospitalids().call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      console.log("all",result)
      var select=document.getElementById("hospitallist")
      for(var i=0;i<result.length;i++){
        // var id1=Number(result[i])
         window.hos.methods.gethospitaldetails(result[i]).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log("all doctors",result1)   
            var option = document.createElement("option");
            option.value = result1[1];
            option.text = result1[0];
            select.appendChild(option);            
          }
        })
      }  
    }
  })  
  console.log(document.getElementById("id1").value)
  console.log(window.user_accounts[1]) 


  await window.user.methods.balanceOf(document.getElementById("id1").value).call({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(document.getElementById("id1").value,window.user_accounts[1])
      console.log("error",error)
    }
    else
    {
      document.getElementById("token").innerHTML=result
      console.log("pass",result)
    }
  }) 

  document.getElementById("buytoken").addEventListener('click',(e)=>{
        // console.log("pass",result)
         console.log(document.getElementById("id1").value)
         window.user.methods.transferFrom("0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696",document.getElementById("id1").value,document.getElementById("tokenamount").value).send({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
          if (error) {
            console.log("error",error)
          }
          else
          {
            console.log("pass",result)
             window.user.methods.balanceOf(document.getElementById("id1").value).call({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
              if (error) {
                console.log("error",error)
              }
              else
              {
                document.getElementById("token").innerHTML=result
                document.getElementById("tokenamount").value=0
                console.log("pass",result)
              }
            }) 
           
          }
        }) 
  })

document.getElementById("doctorlist").addEventListener('change',(e)=>{
  console.log(e.target)
  selecteddoctor= e.target.options[e.target.selectedIndex].value;
  selecteddoctorname= e.target.options[e.target.selectedIndex].text;
  var selecteddoctorid=selecteddoctor
  console.log(selecteddoctorid,selecteddoctor)
  window.doc.methods.getRecordbyPatientId(selecteddoctorid,document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      // var select=document.getElementById("hospitallist")
      // for(var i=0;i<result.length;i++){
      // console.log(result)  
        var appointmentdiv=document.getElementById("appointmentdiv")
        while(appointmentdiv.firstChild) {
          appointmentdiv.removeChild(appointmentdiv.firstChild);
        }
        console.log("op",result.length)
        console.log("hello",result) 
        for(var i=0;i<result.length;i++){
          console.log("ooo",result[i]['confirmationstatus']=='Confiremed',result[i]['confirmationstatus'])
          if(result[i]['confirmationstatus']=='Pending' || result[i]['confirmationstatus']=='Confirmed'){
            var newlabel1 = document.createElement("Label");
            newlabel1.innerHTML = result[i]['name']+"&nbsp";
            appointmentdiv.appendChild(newlabel1);
            var newlabel2 = document.createElement("Label");
            newlabel2.innerHTML = result[i]['diseasename']+"&nbsp";
            appointmentdiv.appendChild(newlabel2);
            var newlabel3 = document.createElement("Label");
            newlabel3.innerHTML = result[i]['prescribedmedicine']+"&nbsp";
            appointmentdiv.appendChild(newlabel3);
            var newlabel4 = document.createElement("Label");
            newlabel4.innerHTML = result[i]['prescribedtest']+"&nbsp";
            appointmentdiv.appendChild(newlabel4);
            var newlabel5 = document.createElement("Label");
            newlabel5.innerHTML = result[i]['appointmenttime']+"&nbsp";
            appointmentdiv.appendChild(newlabel5);
            var newlabel6 = document.createElement("Label");
            newlabel6.innerHTML = result[i]['confirmationstatus']+"&nbsp";
            appointmentdiv.appendChild(newlabel6);
            var newlabel7 = document.createElement("Label");
            newlabel7.innerHTML = result[i]['meetinglink']+"<br />";                                                                                                
            appointmentdiv.appendChild(newlabel7);
          }
        }
      // }
      
    }
  })  
})


document.getElementById("schedueAppointment").addEventListener('click',(e)=>{
  // selecteddoctor= e.target.options[e.target.selectedIndex].value;
  // selecteddoctorname= e.target.options[e.target.selectedIndex].text;
  selecteddoctor= document.getElementById("doctorlist").value
  console.log("schedule Appointment",selecteddoctor)  
  // window.user.methods.fetchuser(document.getElementById("id1").value).call({ from: window.user_accounts[1], gas: 100000000 }, function (error, result) {
  //   if (error) {
  //     console.log(error)
  //   }
  //   else
  //   {
 
      window.doc.methods.getRecordbydoctoridpatientid(selecteddoctor,document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
        if (error) {
          console.log(error)
        }
        else
        {
          console.log(result)
          console.log(document.getElementById("meetinglink").value)
          console.log(document.getElementById("doctorlist").value)
          console.log(document.getElementById("id1").value)
          window.doc.methods.createRecord(document.getElementById("doctorlist").value,result,document.getElementById("id1").value,document.getElementById("username1").value,document.getElementById("diseasename").value,"","","","Pending",document.getElementById("meetinglink").value).send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
            if (error) {
              console.log(error)
            }
            else
            {
              console.log(result)
            }
          })  
        }
      }) 
  //   }
  // })  
})

// hospital
document.getElementById("hospitallist").addEventListener('change',(e)=>{
  selectedhospital=e.target.options[e.target.selectedIndex].value;
  selectedhospitalname= e.target.options[e.target.selectedIndex].text;
  
  window.hos.methods.getRecordbyPatientId(selectedhospital,document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      // var select=document.getElementById("hospitallist")
      // for(var i=0;i<result.length;i++){
        console.log(result)  
        var appointmentdiv=document.getElementById("appointmenthospitaldiv")
        while(appointmentdiv.firstChild) {
          appointmentdiv.removeChild(appointmentdiv.firstChild);
        }
        for(var i=0;i<result.length;i++){
          // console.log(result['prescribedmedicinestatus'],result['prescribedmedicinestatus'],result['prescribedmedicinestatus']=='Pending')
          if(result[i]['prescribedmedicinestatus']=='Pending' || result[i]['prescribedteststatus']=='Pending'||result[i]['prescribedmedicinestatus']=='Confirmed' || result[i]['prescribedteststatus']=='Confirmed'){
            var newlabel1 = document.createElement("Label");
            newlabel1.innerHTML = result[i]['prescribedmedicine']+"&nbsp";
            appointmentdiv.appendChild(newlabel1);
            var newlabel2 = document.createElement("Label");
            newlabel2.innerHTML = result[i]['prescribedmedicinestatus']+"&nbsp";
            appointmentdiv.appendChild(newlabel2);
            var newlabel3 = document.createElement("Label");
            newlabel3.innerHTML = result[i]['prescribedtest']+"&nbsp";
            appointmentdiv.appendChild(newlabel3);
            var newlabel4 = document.createElement("Label");
            newlabel4.innerHTML = result[i]['prescribedtestappointmenttime']+"&nbsp";
            appointmentdiv.appendChild(newlabel4);
            var newlabel5 = document.createElement("Label");
            newlabel5.innerHTML = result[i]['prescribedteststatus']+"<br />";
            appointmentdiv.appendChild(newlabel5);
          }
        }
      // }
      console.log(result)  
    }
  })  
})


document.getElementById("schedueMedicalTest").addEventListener('click',(e)=>{
  // selectedhospital= e.target.options[e.target.selectedIndex].value;
  // selectedhospitalname= e.target.options[e.target.selectedIndex].text;
  selectedhospital= document.getElementById("hospitallist").value
  console.log("schedule medical test",selectedhospital)
  window.hos.methods.getallrequestbyhospitalidpatientid(selectedhospital,document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      console.log(result)
      window.hos.methods.createrequest(selectedhospital,document.getElementById("id1").value,result,"","Pending","","","Pending").send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
        if (error) {
          console.log(error)
        }
        else
        {
          console.log(result)
        }
      })  
    }
  })  
})


    


}

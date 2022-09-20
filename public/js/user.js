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

   window.user.methods.fetchuser(document.getElementById("id1").value).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
      document.getElementById("noaccount").style.display= 'block'; 
      document.getElementById("havinganaccount").style.display= 'none';
      // return false;
    }
    else
    {
      document.getElementById("noaccount").style.display= 'none';
      document.getElementById("havinganaccount").style.display= 'none';
      document.getElementById("username").textContent=result
      document.getElementById("userid").textContent=""+document.getElementById("id1").value
      console.log("sdnd",result)   
    }
  })

   window.doc.methods.fetchalldoctorids().call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
     var select=document.getElementById("doctorlist")
      for(var i=0;i<result.length;i++){
         window.doc.methods.getdoctordetails(result[i]).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log(result1)   
            var option = document.createElement("option");
            option.value = result[i];
            option.text=result1
            select.appendChild(option);            
          }
        })
      }
      console.log(result)  
    }
  })  


   window.hos.methods.fetchallhospitalids().call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("hospitallist")
      for(var i=0;i<result.length;i++){
         window.hos.methods.gethospitaldetails(result[i]).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log(result)   
            var option = document.createElement("option");
            option.value = result[i];
            option.text = result1;
            select.appendChild(option);            
          }
        })
      }
      console.log(result)  
    }
  })  

document.getElementById("doctorlist").addEventListener('change',(e)=>{
  selecteddoctor= e.options[e.selectedIndex].value;
  selecteddoctorname= e.options[e.selectedIndex].text;

  window.doc.methods.getRecordbyPatientId(selecteddoctor,document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      // var select=document.getElementById("hospitallist")
      // for(var i=0;i<result.length;i++){
      //   console.log(result)  
        var appointmentdiv=document.getElementById("appointmentdiv")
        for(var i=0;i<result.length;i++){
          if(result[i]['confirmationstatus']=='Pending' || result[i]['confirmationstatus']=='Confirmed'){
            var newlabel1 = document.createElement("Label");
            newlabel1.innerHTML = result[i]['name'];
            appointmentdiv.appendChild(newlabel1);
            var newlabel2 = document.createElement("Label");
            newlabel2.innerHTML = result[i]['diseasename'];
            appointmentdiv.appendChild(newlabel2);
            var newlabel3 = document.createElement("Label");
            newlabel3.innerHTML = result[i]['prescribedmedicine'];
            appointmentdiv.appendChild(newlabel3);
            var newlabel4 = document.createElement("Label");
            newlabel4.innerHTML = result[i]['prescribedtest'];
            appointmentdiv.appendChild(newlabel4);
            var newlabel5 = document.createElement("Label");
            newlabel5.innerHTML = result[i]['appointmenttime'];
            appointmentdiv.appendChild(newlabel5);
            var newlabel6 = document.createElement("Label");
            newlabel6.innerHTML = result[i]['confirmationstatus'];
            appointmentdiv.appendChild(newlabel6);
            var newlabel7 = document.createElement("Label");
            newlabel7.innerHTML = result[i]['meetinglink'];                                                                                                
            appointmentdiv.appendChild(newlabel7);
          }
        }
      // }
      console.log(result)  
    }
  })  
})


document.getElementById("schedueAppointment").addEventListener('click',(e)=>{
  selecteddoctor= e.options[e.selectedIndex].value;
  selecteddoctorname= e.options[e.selectedIndex].text;
  window.user.methods.fetchuser(document.getElementById("id1").value).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
 
      window.doc.methods.getRecordbydoctoridpatientid(selecteddoctor,document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
        if (error) {
          console.log(error)
        }
        else
        {
          console.log(result)
          window.doc.methods.createRecord(selecteddoctor,result,document.getElementById("id1").value,username1,document.getElementById("diseasename").value,"","","","Pending","").send({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
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
    }
  })  
})

// hospital
document.getElementById("hospitallist").addEventListener('change',(e)=>{
  selectedhospital= e.options[e.selectedIndex].value;
  selectedhospitalname= e.options[e.selectedIndex].text;
  
  window.hos.methods.getRecordbyPatientId(selectedhospital,document.getElementById("id1").value).call({ from: window.hoc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("hospitallist")
      for(var i=0;i<result.length;i++){
        console.log(result)  
        var appointmenthospitaldiv=document.getElementById("appointmenthospitaldiv")
        for(var i=0;i<result.length;i++){
          if(result['prescribedmedicinestatus']=='Pending' || result['prescribedteststatus']=='Pending'||result['prescribedmedicinestatus']=='Confirmed' || result['prescribedteststatus']=='Confirmed'){
            var newlabel1 = document.createElement("Label");
            newlabel1.innerHTML = result['prescribedmedicine'];
            appointmentdiv.appendChild(newlabel1);
            var newlabel2 = document.createElement("Label");
            newlabel2.innerHTML = result['prescribedmedicinestatus'];
            appointmentdiv.appendChild(newlabel2);
            var newlabel3 = document.createElement("Label");
            newlabel3.innerHTML = result['prescribedtest'];
            appointmentdiv.appendChild(newlabel3);
            var newlabel4 = document.createElement("Label");
            newlabel4.innerHTML = result['prescribedtestappointmenttime'];
            appointmentdiv.appendChild(newlabel4);
            var newlabel5 = document.createElement("Label");
            newlabel5.innerHTML = result['prescribedteststatus'];
            appointmentdiv.appendChild(newlabel5);
          }
        }
      }
      console.log(result)  
    }
  })  
})


document.getElementById("schedueMedicalTest").addEventListener('click',(e)=>{
  selectedhospital= e.options[e.selectedIndex].value;
  selectedhospitalname= e.options[e.selectedIndex].text;

  window.hos.methods.getallrequestbyhospitalidpatientid(selectedhospital,document.getElementById("id1").value).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      console.log(result)
      window.hos.methods.createrequest(selectedhospital,document.getElementById("id1").value,result,"","Pending","","","Pending").send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
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

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

   await window.user.methods.fetchuser(document.getElementById("id1").value).call({ from: window.user_accounts[0], gas: 100000000 }, function (error, result) {
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
      console.log("sdnd",result)   
    }
  })

   await window.doc.methods.fetchalldoctorids().call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
     console.log(result) 
     var select=document.getElementById("doctorlist")
      for(var i=0;i<result.length;i++){
        // console.log(Number(result[i]))
        var id1=Number(result[i])
         window.doc.methods.getdoctordetails(Number(result[i])).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log(result1)   
            var option = document.createElement("option");
            option.value = id1;
            option.text=result1
            select.appendChild(option);            
          }
        })
      }
       
    }
  })  


   await window.hos.methods.fetchallhospitalids().call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      console.log(result)
      var select=document.getElementById("hospitallist")
      for(var i=0;i<result.length;i++){
        var id1=Number(result[i])
         window.hos.methods.gethospitaldetails(id1).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result1) {
          if (error) {
            console.log(error)
          }
          else
          {
            console.log(result1)   
            var option = document.createElement("option");
            option.value = id1;
            option.text = result1;
            select.appendChild(option);            
          }
        })
      }
        
    }
  })  

document.getElementById("doctorlist").addEventListener('change',(e)=>{
  console.log(e.target)
  selecteddoctor= e.target.options[e.target.selectedIndex].value;
  selecteddoctorname= e.target.options[e.target.selectedIndex].text;
  var selecteddoctorid=Number(selecteddoctor)
  console.log(selecteddoctorid,selecteddoctor)
  window.doc.methods.getRecordbyPatientId(selecteddoctorid,document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
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
      console.log(result)  
    }
  })  
})


document.getElementById("schedueAppointment").addEventListener('click',(e)=>{
  selecteddoctor= Number(e.target.options[e.target.selectedIndex].value);
  selecteddoctorname= e.target.options[e.target.selectedIndex].text;
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
  selectedhospital= Number(e.target.options[e.target.selectedIndex].value);
  selectedhospitalname= e.target.options[e.target.selectedIndex].text;
  
  window.hos.methods.getRecordbyPatientId(selectedhospital,document.getElementById("id1").value).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      // var select=document.getElementById("hospitallist")
      // for(var i=0;i<result.length;i++){
        console.log(result)  
        var appointmentdiv=document.getElementById("appointmenthospitaldiv")
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
  selectedhospital= Number(e.target.options[e.target.selectedIndex].value);
  selectedhospitalname= e.target.options[e.target.selectedIndex].text;

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

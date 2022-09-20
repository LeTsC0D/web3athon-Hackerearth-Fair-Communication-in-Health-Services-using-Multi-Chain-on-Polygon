import {  init_web3hos } from "./utilhospital.js"
window.onload = async function () {

  var x = await init_web3hos()
  console.log("hospital");
  var selectedpatient;
  var selectedpatientname;
  console.log(document.getElementById("id1").value)
  console.log(window.hos)
   window.hos.methods.gethospitaldetails(document.getElementById("id1").value).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log("sdd",error)
      document.getElementById("noaccount").style.display= 'block'; 
      document.getElementById("havinganaccount").style.display= 'none';
    }
    else
    {
      document.getElementById("noaccount").style.display= 'none';
      document.getElementById("havinganaccount").style.display= 'block';
      document.getElementById("username").textContent=result
      document.getElementById("userid").textContent=""+document.getElementById("id1").value
      console.log("sdnd",result) 
    }
  }); 

   window.hos.methods.getrequestbyhospitalid(document.getElementById("id1").value).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("patientlist")
      for(var i=0;i<result.length;i++){ 
        if(result[i]['prescribedmedicinestatus']=='Pending'||result[i]['prescribedmedicinestatus']=='Confirmed'||result[i]['prescribedteststatus']=='Pending'||result[i]['prescribedteststatus']=='Confirmed'){
          var option = document.createElement("option");
          option.value = result[i]['patientid']
          option.text=result[i]['name']
          select.appendChild(option); 
        }        
      }
      console.log(result)
    }
  });

  document.getElementById("patientlist").addEventListener('change',(e)=>{
    selectedpatient= e.options[e.selectedIndex].value;
    selectedpatientname= e.options[e.selectedIndex].text;

    window.hos.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("requestdiv")
          for(var i=0;i<result.length;i++){
            if(result['prescribedmedicinestatus']=='Pending' || result['prescribedmedicinestatus']=='Confirmed'||result['prescribedteststatus']=='Pending' || result['prescribedteststatus']=='Confirmed'){
              var newlabel1 = document.createElement("Label");
              newlabel1.innerHTML = result[i]['prescribedmedicine'];
              appointmentdiv.appendChild(newlabel1);
              var newlabel2 = document.createElement("Label");
              newlabel2.innerHTML = result[i]['prescribedmedicinestatus'];
              appointmentdiv.appendChild(newlabel2);
              var newlabel3 = document.createElement("Label");
              newlabel3.innerHTML = result[i]['prescribedtest'];
              appointmentdiv.appendChild(newlabel3);
              var newlabel4 = document.createElement("Label");
              newlabel4.innerHTML = result[i]['prescribedtestappointmenttime'];
              appointmentdiv.appendChild(newlabel4);
              var newlabel5 = document.createElement("Label");
              newlabel5.innerHTML = result[i]['prescribedteststatus'];
              appointmentdiv.appendChild(newlabel5);

              var newlabel6 = document.createElement("Label");
              newlabel6.innerHTML = "medicine availibilty";
              appointmentdiv.appendChild(newlabel6);

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Approve",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };

              var reject = document.createElement('button');
              reject.innerHTML = 'Reject';
              reject.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Reject",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };                   
              
              var complete = document.createElement('button');
              complete.innerHTML = 'Complete';
              complete.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Complete",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };   
              
              var newlabel7 = document.createElement("Label");
              newlabel7.innerHTML = "Test availibilty";
              appointmentdiv.appendChild(newlabel7);

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Approve").send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };

              var reject = document.createElement('button');
              reject.innerHTML = 'Reject';
              reject.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Reject").send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                 
              };                   
              
              var complete = document.createElement('button');
              complete.innerHTML = 'Complete';
              complete.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Complete").send({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                 
              };   
              console.log(result)  
            }}}
          });   
    });  


     window.hos.methods.getrequestbyhospitalid(document.getElementById("id1").value).call({ from: window.hos_accounts[0], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("doctorHistory")
          for(var i=0;i<result.length;i++){
              var newlabel1 = document.createElement("Label");
              newlabel1.innerHTML = result[i]['prescribedmedicine'];
              appointmentdiv.appendChild(newlabel1);
              var newlabel2 = document.createElement("Label");
              newlabel2.innerHTML = result[i]['prescribedmedicinestatus'];
              appointmentdiv.appendChild(newlabel2);
              var newlabel3 = document.createElement("Label");
              newlabel3.innerHTML = result[i]['prescribedtest'];
              appointmentdiv.appendChild(newlabel3);
              var newlabel4 = document.createElement("Label");
              newlabel4.innerHTML = result[i]['prescribedtestappointmenttime'];
              appointmentdiv.appendChild(newlabel4);
              var newlabel5 = document.createElement("Label");
              newlabel5.innerHTML = result[i]['prescribedteststatus'];
              appointmentdiv.appendChild(newlabel5);                
              console.log(result)  
          }}

          }); 


 }
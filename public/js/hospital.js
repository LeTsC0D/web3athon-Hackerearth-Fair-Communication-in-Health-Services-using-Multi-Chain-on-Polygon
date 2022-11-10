import {  init_web3hos } from "./utilhospital.js"
window.onload = async function () {

  var x = await init_web3hos()
  console.log("hospital");
  var selectedpatient;
  var selectedpatientname;
  console.log(document.getElementById("id1").value)
  console.log(window.hos_accounts)
  await window.hos.methods.gethospitaldetails(document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log("sdd",error)
      document.getElementById("noaccount").style.display= 'block'; 
      document.getElementById("havinganaccount").style.display= 'none';
    }
    else
    {
      document.getElementById("noaccount").style.display= 'none';
      document.getElementById("havinganaccount").style.display= 'block';
      document.getElementById("username").textContent=result[1]
      document.getElementById("userid").textContent=""+document.getElementById("id1").value
      console.log("send",result) 
      if(result[0]=="none"){
        window.hos.methods.createhospital(document.getElementById("id1").value,document.getElementById("username1").value,document.getElementById("password1").value).send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
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
  }); 

   await window.hos.methods.getrequestbyhospitalid(document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("patientlist")
      for(var i=0;i<result.length;i++){ 
        console.log(result[i]['patientid'],result[i]['prescribedmedicinestatus'])
        if(result[i]['prescribedmedicinestatus']=='Pending'||result[i]['prescribedmedicinestatus']=='Confirmed'||result[i]['prescribedteststatus']=='Pending'||result[i]['prescribedteststatus']=='Confirmed'){
          var option = document.createElement("option");
          option.value = result[i]['patientid']
          option.text=result[i]['patientid']
          select.appendChild(option); 
        }        
      }
      console.log(result)
    }
  });

   window.hos.methods.balanceOf(document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
    if (error) {
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
     window.hos.methods.transferFrom("0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696",document.getElementById("id1").value,document.getElementById("tokenamount").value).send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log("error",error)
      }
      else
      {
        console.log("pass",result)
         window.hos.methods.balanceOf(document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
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

  document.getElementById("patientlist").addEventListener('change',(e)=>{
    selectedpatient= e.target.options[e.target.selectedIndex].value;
    selectedpatientname= e.target.options[e.target.selectedIndex].text;

    window.hos.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("requestdiv")
          while(appointmentdiv.firstChild) {
            appointmentdiv.removeChild(appointmentdiv.firstChild);
          }
          for(var i=0;i<result.length;i++){
            if(result[i]['prescribedmedicinestatus']=='Pending' || result[i]['prescribedmedicinestatus']=='Confirmed'||result[i]['prescribedteststatus']=='Pending' || result[i]['prescribedteststatus']=='Confirmed'){
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
              newlabel5.innerHTML = result[i]['prescribedteststatus']+"&nbsp";
              appointmentdiv.appendChild(newlabel5);

              var newlabel6 = document.createElement("Label");
              newlabel6.innerHTML = "medicine availibilty"+"&nbsp";
              appointmentdiv.appendChild(newlabel6);

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Approve",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };
              appointmentdiv.appendChild(approve);

              var reject = document.createElement('button');
              reject.innerHTML = 'Reject';
              reject.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Reject",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };                   
              appointmentdiv.appendChild(reject);

              var complete = document.createElement('button');
              complete.innerHTML = 'Complete';
              complete.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,"Complete",result[i]['prescribedtestappointmenttime'],result[i]['prescribedteststatus']).send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };   
              appointmentdiv.appendChild(complete);
              
              var newlabel7 = document.createElement("Label");
              newlabel7.innerHTML = "Test availibilty"+"&nbsp";
              appointmentdiv.appendChild(newlabel7);

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Approve").send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                  
              };
              appointmentdiv.append(approve)

              var reject = document.createElement('button');
              reject.innerHTML = 'Reject';
              reject.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Reject").send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                 
              };       
              appointmentdiv.append(reject)            
              
              var complete = document.createElement('button');
              complete.innerHTML = 'Complete';
              complete.onclick = function() {
                window.hos.methods.updaterequest(result[i]['requestid'],document.getElementById("id1").value,result[i]['prescribedmedicinestatus'],result[i]['prescribedtestappointmenttime'],"Complete").send({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error)
                  }
                  else
                  {

                  }
                });                 
              };   
              appointmentdiv.append(complete)  

              console.log(result)  
              var span = document.createElement('span');
              span.innerHTML = '<br />'; 
              appointmentdiv.append(span) 

              var span = document.createElement('span');
              span.innerHTML = '<br />';
              appointmentdiv.appendChild(span)              
              
            }
          }
          }
          });   
    });  


     await window.hos.methods.getrequestbyhospitalid(document.getElementById("id1").value).call({ from: window.hos_accounts[3], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("doctorHistory")
          while(appointmentdiv.firstChild) {
            appointmentdiv.removeChild(appointmentdiv.firstChild);
          }
          for(var i=0;i<result.length;i++){
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
              console.log(result)  
          }}

          }); 


 }
import {  init_web3doc } from "./utildoctor.js"
window.onload = async function () {

  var x = await init_web3doc()
  console.log("doctor");
  var selectedpatient;
  var selectedpatientname;

   window.doc.methods.getdoctordetails(document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
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

   window.doc.methods.getRecord(document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("requestlist")
      for(var i=0;i<result.length;i++){
        // console.log(result)   
        if(result[i]['confirmationstatus']=='Pending'||result[i]['confirmationstatus']=='Confirmed'){
          var option = document.createElement("option");
          option.value = result[i]['patientid']
          option.text=result[i]['name']
          select.appendChild(option); 
        }        
      }

      console.log(result)
    }
  });

  document.getElementById("requestlist").addEventListener('change',(e)=>{
    selectedpatient= e.options[e.selectedIndex].value;
    selectedpatientname= e.options[e.selectedIndex].text;

    window.doc.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("requestdiv")
          for(var i=0;i<result.length;i++){
            if(result['confirmationstatus']=='Pending' || result['confirmationstatus']=='Confirmed'){
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

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Approved").send({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
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
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Reject").send({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
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
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Complete").send({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error) 
                  }
                  else
                  {

                  }
                });                   
              };

            }
          }
     
        console.log(result)  
      }
    })  
  })


   window.doc.methods.getRecord(document.getElementById("id1").value).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
    }
    else
    {
      var select=document.getElementById("doctorHistory")
      for(var i=0;i<result.length;i++){
          var option = document.createElement("option");
          option.value = result[i]['patientid']
          option.text=result[i]['name']
          select.appendChild(option);       
      } 
      console.log(result)
    }
  });


  document.getElementById("doctorHistory").addEventListener('change',(e)=>{
    selectedpatient= e.options[e.selectedIndex].value;
    selectedpatientname= e.options[e.selectedIndex].text;

    window.doc.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.doc_accounts[0], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("requestdiv")
          for(var i=0;i<result.length;i++){
            // if(result['confirmationstatus']=='Pending' || result['confirmationstatus']=='Confirmed'){
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
            // }
          }
     
        console.log(result)  
      }
    })  
  })




 }
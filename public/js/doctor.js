import {  init_web3doc } from "./utildoctor.js"
window.onload = async function () {

  var x = await init_web3doc()
  console.log("doctor");
  var selectedpatient;
  var selectedpatientname;

   await window.doc.methods.getdoctordetails(document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
    if (error) {
      console.log(error)
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
        window.doc.methods.createdoctor(document.getElementById("id1").value,document.getElementById("username1").value,document.getElementById("password1").value).send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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

   await window.doc.methods.getRecord(document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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

  await window.doc.methods.balanceOf(document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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
     window.doc.methods.transferFrom("0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696",document.getElementById("id1").value,document.getElementById("tokenamount").value).send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log("error",error)
      }
      else
      {
        console.log("pass",result)
         window.doc.methods.balanceOf(document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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

  document.getElementById("requestlist").addEventListener('change',(e)=>{
    selectedpatient= e.target.options[e.target.selectedIndex].value;
    selectedpatientname= e.target.options[e.target.selectedIndex].text;

    window.doc.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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
              newlabel7.innerHTML = result[i]['meetinglink']+"&nbsp";                                                                                                
              appointmentdiv.appendChild(newlabel7);

              var approve = document.createElement('button');
              approve.innerHTML = 'Approve';
              approve.onclick = function() {
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Approved").send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Reject").send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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
                window.doc.methods.updaterecordbypatientid(document.getElementById("id1").value,result[i]['patientid'],result[i]['recordid'],"Complete").send({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
                  if (error) {
                    console.log(error) 
                  }
                  else
                  {

                  }
                });                   
              };
              appointmentdiv.appendChild(complete);

              var span = document.createElement('span');
              span.innerHTML = '<br />';
              appointmentdiv.appendChild(span)


            }
          }
     
        console.log(result)  
      }
    })  
  })


   window.doc.methods.getRecord(document.getElementById("id1").value).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
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
    selectedpatient= e.target.options[e.target.selectedIndex].value;
    selectedpatientname= e.target.options[e.target.selectedIndex].text;

    window.doc.methods.getRecordbyPatientId(document.getElementById("id1").value,selectedpatient).call({ from: window.doc_accounts[2], gas: 100000000 }, function (error, result) {
      if (error) {
        console.log(error)
      }
      else
      {
          var appointmentdiv=document.getElementById("allrequestdiv")

              
          while(appointmentdiv.firstChild) {
            appointmentdiv.removeChild(appointmentdiv.firstChild);
          }

          for(var i=0;i<result.length;i++){
            // if(result['confirmationstatus']=='Pending' || result['confirmationstatus']=='Confirmed'){
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
            // }
          }
     
        console.log(result)  
      }
    })  
  })




 }
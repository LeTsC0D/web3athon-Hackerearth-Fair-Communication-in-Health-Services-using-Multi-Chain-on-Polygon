async function init_web3doc() {


var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7546"));

    //Load accounts
    window.doc_accounts = ["0x72113693540df25B1019Aa5Dc7f5bCfA6924Bb73"];

    window.doc = new web3.eth.Contract([
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "username",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "name": "createdoctor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "recordid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "diseasename",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedmedicine",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedtest",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "appointmenttime",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "confirmationstatus",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "meetinglink",
            "type": "string"
          }
        ],
        "name": "createRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "recordid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "status",
            "type": "string"
          }
        ],
        "name": "updaterecordbypatientid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fetchalldoctorids",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          }
        ],
        "name": "getdoctordetails",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          }
        ],
        "name": "getRecord",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "recordid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "patientid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "doctorid",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "diseasename",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicine",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtest",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "appointmenttime",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "confirmationstatus",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "meetinglink",
                "type": "string"
              }
            ],
            "internalType": "struct DOCTOR.recordPatient[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          }
        ],
        "name": "getRecordbydoctoridpatientid",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "doctorid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          }
        ],
        "name": "getRecordbyPatientId",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "recordid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "patientid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "doctorid",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "diseasename",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicine",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtest",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "appointmenttime",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "confirmationstatus",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "meetinglink",
                "type": "string"
              }
            ],
            "internalType": "struct DOCTOR.recordPatient[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ])
 window.doc.options.address = '0xAd8a13CCA0f05e00aF3439e13E7B6fFbeBeF4B0F'
 console.log("after web3 doctor")
}

export {
  init_web3doc
}

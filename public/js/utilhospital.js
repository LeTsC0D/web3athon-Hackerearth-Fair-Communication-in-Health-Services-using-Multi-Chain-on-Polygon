async function init_web3hos() {


// var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7547"));
var  web3 = new Web3(window.ethereum)
    //Load accounts
    window.hos_accounts = ["0x3A2369C836CBdb69044Ff4d5a54749a6A320d00b"];

    window.hos = new web3.eth.Contract([
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
        "name": "createhospital",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "hospitaid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "requestid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "prescribedmedicine",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedmedicinestatus",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedtest",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedtestappointmenttime",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedteststatus",
            "type": "string"
          }
        ],
        "name": "createrequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "requestid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "hospitalid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "prescribedmedicinestatus",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedtestappointmenttime",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "prescribedteststatus",
            "type": "string"
          }
        ],
        "name": "updaterequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fetchallhospitalids",
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
            "name": "hospitalid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "patientid",
            "type": "uint256"
          }
        ],
        "name": "getallrequestbyhospitalidpatientid",
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
            "name": "hospitalid",
            "type": "uint256"
          }
        ],
        "name": "gethospitaldetails",
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
            "name": "hospitalid",
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
                "name": "requestid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "hospitalid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "patientid",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicine",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicinestatus",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtest",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtestappointmenttime",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedteststatus",
                "type": "string"
              }
            ],
            "internalType": "struct HOSPITAL.request[]",
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
            "name": "hospitalid",
            "type": "uint256"
          }
        ],
        "name": "getrequestbyhospitalid",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "requestid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "hospitalid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "patientid",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicine",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedmedicinestatus",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtest",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedtestappointmenttime",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "prescribedteststatus",
                "type": "string"
              }
            ],
            "internalType": "struct HOSPITAL.request[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
    )
 window.hos.options.address = '0x1532b521a922ee1d9da54b2e05199e92ed2fa8bb'
 console.log("after web3 hospital")
}

export {
  init_web3hos
}

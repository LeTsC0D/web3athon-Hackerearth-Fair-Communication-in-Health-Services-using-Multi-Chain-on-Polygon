async function init_web3hos() {


var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7547"));

    //Load accounts
    window.hos_accounts = ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"];

    window.hos = new web3.eth.Contract(
      [
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
              "name": "doctorid",
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
 window.hos.options.address = '0xDA0bab807633f07f013f94DD0E6A4F96F8742B53'
 console.log("after web3 hospital")
}

export {
  init_web3hos
}

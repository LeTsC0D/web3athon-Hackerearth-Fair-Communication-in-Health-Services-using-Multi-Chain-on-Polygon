async function init_web3doc() {


    var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    
    // var  web3 = new Web3(window.ethereum)
    //Load accounts
    // window.doc_accounts = ["0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696"];
    var allaccounts=[]
    await web3.eth.getAccounts().then((response)=>{
    //  console.log(response)
     allaccounts=response}).then((response)=>console.log(response))
    console.log(allaccounts)
    // window.user_accounts = ["0xF96433007a7142d4C7836E9470785f134d4AB50D"];
    window.doc_accounts = allaccounts
    window.doc = new web3.eth.Contract(
      [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "total",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "delegate",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numTokens",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
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
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "recordid",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numTokens",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numTokens",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "delegate",
              "type": "address"
            }
          ],
          "name": "allowance",
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
              "internalType": "address",
              "name": "tokenOwner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
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
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "fetchalldoctorids",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
            }
          ],
          "name": "getdoctordetails",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
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
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
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
                  "internalType": "string",
                  "name": "patientid",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "doctorid",
                  "type": "string"
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
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
              "internalType": "string",
              "name": "doctorid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
                  "internalType": "string",
                  "name": "patientid",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "doctorid",
                  "type": "string"
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
          "inputs": [],
          "name": "name",
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
          "inputs": [],
          "name": "symbol",
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
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    )

 window.doc.options.address = '0x85c7eA0F57dBc3F99f28e884169045C03720932F'
 console.log("after web3 doctor")
}

export {
  init_web3doc
}

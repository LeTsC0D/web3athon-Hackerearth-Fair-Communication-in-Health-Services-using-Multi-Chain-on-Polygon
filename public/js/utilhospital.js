async function init_web3hos() {


var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// var  web3 = new Web3(window.ethereum)
    //Load accounts
    // window.hos_accounts = ["0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696"];
    var allaccounts=[]
    await web3.eth.getAccounts().then((response)=>{
    //  console.log(response)
     allaccounts=response}).then((response)=>console.log(response))
    console.log(allaccounts)
    // window.user_accounts = ["0xF96433007a7142d4C7836E9470785f134d4AB50D"];
    window.hos_accounts = allaccounts
    window.hos = new web3.eth.Contract(
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
          "name": "createhospital",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "hospitalid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
              "internalType": "uint256",
              "name": "requestid",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "hospitalid",
              "type": "string"
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
          "name": "fetchallhospitalids",
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
              "name": "hospitalid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patientid",
              "type": "string"
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
              "internalType": "string",
              "name": "hospitalid",
              "type": "string"
            }
          ],
          "name": "gethospitaldetails",
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
              "name": "hospitalid",
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
                  "name": "requestid",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "hospitalid",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "patientid",
                  "type": "string"
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
              "internalType": "string",
              "name": "hospitalid",
              "type": "string"
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
                  "internalType": "string",
                  "name": "hospitalid",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "patientid",
                  "type": "string"
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
 window.hos.options.address = '0xa1425A0b439c3fE535091383388C0AF497F455be'
 console.log("after web3 hospital")
}

export {
  init_web3hos
}

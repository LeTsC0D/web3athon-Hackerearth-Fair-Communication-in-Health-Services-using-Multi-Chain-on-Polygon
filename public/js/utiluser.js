async function init_web3user() {


// var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var  web3 = new Web3(window.ethereum)
    //Load accounts
    window.user_accounts = ["0x3A2369C836CBdb69044Ff4d5a54749a6A320d00b"];
    
    window.user = new web3.eth.Contract([
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
        "name": "createuser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fetchalluserids",
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
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "fetchuser",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
    )

 window.user.options.address = '0x7AaFF40fD448d56B4B015e8D359579e7A514e938'
 console.log("after web3 user")
}

export {
  init_web3user
}




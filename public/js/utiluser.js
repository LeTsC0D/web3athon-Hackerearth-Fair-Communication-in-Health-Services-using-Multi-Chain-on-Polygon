async function init_web3user() {


var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    //Load accounts
    window.user_accounts = ["0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696"];
    
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

 window.user.options.address = '0xD218630f8E3Fc376bf7f9aF1c776256566Fc0B7c'
 console.log("after web3 user")
}

export {
  init_web3user
}




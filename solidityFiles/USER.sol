pragma solidity >=0.7.0 <0.9.0;


contract USER {
    struct users { 
        uint id;
        string username;
        string password;       
    }
    uint count=0;
    mapping (uint256 => users) userdetails;

    function createuser(uint id,string memory username,string memory password)public {
            userdetails[count]=users(id,username,password);
            count++;
    }

    function fetchuser(uint id) public view returns(string memory){
        for(uint i; i<count;i++){
            if(userdetails[i].id==id){
                return (userdetails[i].username);
            }
        }
        return "none";   
    }

    function fetchalluserids()public view returns(uint[] memory){
        uint[] memory arr=new uint[](count);
        for(uint i=0;i<count;i++){
            arr[i]=userdetails[i].id;
        }
        return arr;
    }

}
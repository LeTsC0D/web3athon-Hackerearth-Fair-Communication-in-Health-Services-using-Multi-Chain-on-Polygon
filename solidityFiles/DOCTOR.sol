pragma solidity >=0.7.0 <0.9.0;



contract DOCTOR {
    struct doctor{
        uint id;
        string username;
        string password;
    }
    uint count=0;
    mapping (uint256 => doctor) doctordetails;

    struct recordPatient{
        uint recordid;
        uint patientid;
        uint doctorid;
        string name;
        string diseasename;
        string prescribedmedicine;
        string prescribedtest;
        string appointmenttime;
        string confirmationstatus;
        string meetinglink;
    }
    mapping (uint256 => recordPatient[]) listofrecordPatient;
   
    function createdoctor(uint id,string memory username,string memory password)public{
            doctordetails[count]=doctor(id,username,password);
            count++; 
    }

    function getdoctordetails(uint doctorid)public view returns(string memory){
        for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                return doctordetails[i].username;
            }
        }
        return "none";    
    }

    function fetchalldoctorids()public view returns(uint[] memory){
        uint[] memory arr=new uint[](count);
        for(uint i=0;i<count;i++){
            arr[i]=doctordetails[i].id;
        }
        return arr;
    }

    function createRecord(uint doctorid, uint recordid,uint patientid,string memory name,string memory diseasename,string memory prescribedmedicine,string memory prescribedtest,string memory appointmenttime,string memory confirmationstatus,string memory meetinglink)public{
         for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                listofrecordPatient[i].push(recordPatient(recordid,patientid,doctorid,name,diseasename,prescribedmedicine,prescribedtest,appointmenttime,confirmationstatus,meetinglink));
            }
        }       
    }

    function getRecord(uint doctorid)public view returns(recordPatient[] memory){
         for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                return listofrecordPatient[i];
            }
        } 
    }

    function getRecordbydoctoridpatientid(uint doctorid,uint patientid)public view returns(uint){
         uint count1=0;
         for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                uint allrecord=listofrecordPatient[i].length;
                
                for(uint j=0;j<allrecord;j++){
                    if(listofrecordPatient[i][j].patientid==patientid){
                        count1++;
                    }
                }
            }
         }
         return count1;       
    }

    function getRecordbyPatientId(uint doctorid,uint patientid)public view returns(recordPatient[] memory){
         for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                uint allrecord=listofrecordPatient[i].length;
                uint count1=0;
                for(uint j=0;j<allrecord;j++){
                    if(listofrecordPatient[i][j].patientid==patientid){
                        count1++;
                    }
                }
                
                recordPatient[]  memory temp=new recordPatient[](count1);
                count1=0;
                for(uint j=0;j<allrecord;j++){
                    if(listofrecordPatient[i][j].patientid==patientid){
                        temp[count1]=recordPatient(listofrecordPatient[i][j].recordid,listofrecordPatient[i][j].patientid,listofrecordPatient[i][j].doctorid,listofrecordPatient[i][j].name,listofrecordPatient[i][j].diseasename,listofrecordPatient[i][j].prescribedmedicine,listofrecordPatient[i][j].prescribedtest,listofrecordPatient[i][j].appointmenttime,listofrecordPatient[i][j].confirmationstatus,listofrecordPatient[i][j].meetinglink);
                        count1++;
                    }
                }
                return temp;
            }
        }       
    }

    function updaterecordbypatientid(uint doctorid,uint patientid,uint recordid ,string memory status)public{
        for(uint i=0;i<count;i++){
            if(doctordetails[i].id==doctorid){
                uint allrecord=listofrecordPatient[i].length;
                for(uint j=0;j<allrecord;j++){
                    if(listofrecordPatient[i][j].patientid==patientid && listofrecordPatient[i][j].recordid==recordid){
                        listofrecordPatient[i][j].confirmationstatus=status;
                    }
                }
            }
        }
    }

}
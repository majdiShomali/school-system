
let arrData=[];
let addUpdate=document.getElementById('subinput0');
if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
    showData();
  }else{
    arrData=[];
  }


let userName;
let userDOB;
let userGender;
let userNumber;
let userGrade;

let addStatus="add";

let updateindex;


let DataCollected=document.getElementById("datasub");

DataCollected.addEventListener("submit",function(event){


  userName=event.target.username.value;
  userDOB=event.target.userDOB.value;
  userGender=event.target.usergender.value;
  userNumber=event.target.usernumber.value;
  userGrade=event.target.usergrade.value;
  DataCollected.reset();

  let dataObj={
     
      userName:userName,
      userDOB:userDOB,
      userGender:userGender,
      userNumber:userNumber,
      userGrade:userGrade
  }

  if(addStatus==="add"){
   
     arrData.push(dataObj);
     localStorage.setItem('arrData',JSON.stringify(arrData) );
     showData();


  }else if(addStatus=="update"){

      
      arrData[updateindex]=dataObj;
      localStorage.setItem('arrData',JSON.stringify(arrData) );
      addStatus="add";
      addUpdate.value="Add"
      location.reload();
  }


});












//-------------read or show data-----------------//
function showData(){
    let table='';
    for(let i=0;i<arrData.length;i++){

        



        table += `
      <tr>
      <td>${arrData[i].userName}</td>
      <td>${arrData[i].userDOB}</td>
      <td>${arrData[i].userGender}</td>
      <td>${arrData[i].userNumber}</td>
      <td>${arrData[i].userGrade}</td>
      <td><button onclick="update_data(${i})" id="update">update</td>
      <td><button onclick="delete_data(${i})" id="delete">delete</td>
      </tr>`;
      
     
    }

    document.getElementById("tbody").innerHTML=table;
  

}


let userName0= document.getElementById("username");
let userDOB0= document.getElementById("userDOB");
let userGender0= document.getElementById("usergender");
let userNumber0= document.getElementById("usernumber");
let userGrade0= document.getElementById("usergrade");

function update_data(i){
  

    userName0.value="";
    userDOB0.value="";
    userGender0.value="";
    userNumber0.value="";
    userGrade0.value="";


    userName0.value=arrData[i].userName;
    userDOB0.value=arrData[i].userDOB;
    userGender0.value=arrData[i].userGender;
    userNumber0.value=arrData[i].userNumber;
    userGrade0.value=arrData[i].userGrade;


    addStatus="update";
    addUpdate.value="update"
    updateindex=i;
}




function delete_data(i){

    arrData.splice(i,1);
  localStorage.arrData=JSON.stringify(arrData);
  location.reload();
  }
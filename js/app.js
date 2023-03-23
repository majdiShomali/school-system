let DataCollected=document.getElementById("datasub");
DataCollected.addEventListener("submit",onclickfunction0);
let arrData=[];
function onclickfunction0(DataCollected){
let userName=DataCollected.target.username.value;
let userDOB=DataCollected.target.userDOB.value;
let userGender=DataCollected.target.usergender.value;
let userNumber=DataCollected.target.usernumber.value;
let userGrade=DataCollected.target.usergrade.value;



let dataObj={

    userName:userName,
    userDOB:userDOB,
    userGender:userGender,
    userNumber:userNumber,
    userGrade:userGrade
}

arrData.push(dataObj);
showData()
}







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
      </tr>`;
      
     
    }

    document.getElementById("tbody").innerHTML=table;
  




}
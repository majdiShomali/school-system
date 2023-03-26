
let arrData=[];
if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
    render();
  }
 
let footer00=document.getElementById("myDIV");
let userName;
let userDOB;
let userGender;
let userNumber;
let userGrade;
let userMajor;
let userImg;


let DataCollected=document.getElementById("datasub");

DataCollected.addEventListener("submit",function(event){


  userName=event.target.username.value;
  userDOB=event.target.userDOB.value;
  userGender=event.target.usergender.value;
  userNumber=event.target.usernumber.value;
  userGrade=event.target.usergrade.value;
  userMajor=event.target.usermajor.value;
  userImg=event.target.userimg.value;
  DataCollected.reset();


  let student = new Person(userName,userDOB ,userGender,userNumber,userGrade,userMajor,userImg);

     arrData.push(student);
     localStorage.setItem('arrData',JSON.stringify(arrData) );
     render();
});


function Person(userName,userDOB ,userGender,userNumber,userGrade,userMajor,userImg) {
  this.userName = userName; 
  this.userDOB = userDOB;
  this.userGender = userGender;
  this.userNumber = userNumber;
  this.userGrade = userGrade;
  this.userMajor = userMajor;
  this.userImg = userImg;
  

}



//-------------show data-----------------//
function render(){
  for(let i=0;i<arrData.length;i++){

    let sdcard= document.getElementById("student_card");
    let divContainer = document.createElement('div');
    let img0 = document.createElement('img');
    img0.src=`${arrData[i].userImg}`;
    let ul = document.createElement("ul");
    let li1= document.createElement("li");
    li1.textContent=`Name: ${arrData[i].userName}`;
    let li2= document.createElement("li");
    li2.textContent=`Gender: ${arrData[i].userGender}`;
    let li3= document.createElement("li");
    li3.textContent=`Number: ${arrData[i].userNumber}`;
    let li4= document.createElement("li");
    li4.textContent=`Grade: ${arrData[i].userGrade}`;
    let li5= document.createElement("li");
    li5.textContent=`Major: ${arrData[i].userMajor}`;
  
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  
    divContainer.appendChild(img0);
    divContainer.appendChild(ul);
    sdcard.appendChild(divContainer);

  }
}










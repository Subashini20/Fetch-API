let id=document.getElementById("txtbox1");
let mail=document.getElementById("txtbox2");
let fname= document.getElementById("txtbox3");
let lname=document.getElementById("txtbox4");
let api_url=document.getElementById("txtbox6");

let res=  fetch("https://reqres.in/api/users?page=2").then((res)=>{
    return res.json();
}).then((result) =>{
    console.log(result.data[0].id);
 id.value=result.data[0].id;
 mail.value=result.data[0].email;
 fname.value=result.data[0].first_name;
 lname.value=result.data[0].last_name;
api_url.value=result.data[0].avatar;
 
 
});
let id=document.getElementById("txtbox1");
let names=document.getElementById("txtbox2");
let yr= document.getElementById("txtbox3");
let color=document.getElementById("txtbox4");
let p_val=document.getElementById("txtbox6");

let res=  fetch("https://reqres.in/api/unknown").then((res)=>{
    return res.json();
}).then((result) =>{
    console.log(result.data[0].id);
 id.value=result.data[0].id;
 names.value=result.data[0].name;
 yr.value=result.data[0].year;
 color.value=result.data[0].color;
p_val.value=result.data[0].pantone_value;
 
 
});
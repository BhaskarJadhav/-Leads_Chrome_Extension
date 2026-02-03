 

 let myLeads=[]
 const inputEl= document.getElementById("input-el") // you cant reassignment the input varible ...
 const inputBtn=document.getElementById("input-btn")
 const ulEl=document.getElementById("ulEl")


 inputBtn.addEventListener("click",function(){
 myLeads.push(inputEl.value)
 //clear out the input filed 
//  ulEl.innerHTML+="<li>"+inputEl.value+ "</li>" /// SIMPLEST WAY 
 renderlead()
 inputEl.value=""
 })




// render leads type 0
//  function renderlead()  {
  
//        let listItem="<li>"+inputEl.value+ "</li>"
//     ulEl.innerHTML+=listItem
//     }
 
//render lead type1
function renderlead()
{
 let listItem=""
    // log out the item in the my leasds array using for loop
 for (let i=0; i < myLeads.length;i++)
{
// listItem += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
 listItem += `<li><a href="${myLeads[i]}"target='blank'>
 ${myLeads[i]}</a></li>`;
   
}
ulEl.innerHTML= listItem

}

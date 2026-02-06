//     chrome://extensions/
 let myLeads=[]
 const inputEl= document.getElementById("input-el") // you cant reassignment the input varible ...
 const inputBtn=document.getElementById("input-btn")
 const ulEl=document.getElementById("ulEl")
 const deleteBtn=document.getElementById("delete-btn")

 const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
 console.log( leadsFromLocalStorage)

if( leadsFromLocalStorage){
   myLeads= leadsFromLocalStorage
   renderlead() 

}
function renderlead()
{
  let listItem=""
  for (let i=0; i < myLeads.length;i++)
   {
       // log out the item in the my leasds array using for loop
       // listItem += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
      listItem += `<li><a href="${myLeads[i]}"target='blank'>
      ${myLeads[i]}</a></li>`;
   
   }
      ulEl.innerHTML= listItem

}

   deleteBtn.addEventListener("dblclick",function(){
   console.log("double clicked ")
   localStorage.clear()
      myLeads=[]
      renderlead()


})




inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
// save the mylead arrray to  the local storage 
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderlead()
  inputEl.value=""  //clear out the input filed 
 // to verify that it works
  console.log ( localStorage.getItem("myleads"))
 })

//render lead type1











// render leads type 0
//  function renderlead()  {
  
//        let listItem="<li>"+inputEl.value+ "</li>"
//     ulEl.innerHTML+=listItem
//     }
//  ulEl.innerHTML+="<li>"+inputEl.value+ "</li>" /// SIMPLEST WAY 
 


 
//local storage 
//  localStorage.setItem("myLeads","samplelead.com")
//  localStorage.getItem("myleads")
//  console.log("myleads")
// localStorage.clear()

//   push strings to the array ... using json stringify and JSON.PARSE
//   let myLead = ["www.loval.ciom"]

// // convert array → string
// let jsonString = JSON.stringify(myLead)

// // now parse it back → array
// myLead = JSON.parse(jsonString)

// myLead.push("www.leaad2.com")

// console.log(myLead)
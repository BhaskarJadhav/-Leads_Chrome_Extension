//     chrome://extensions/
 let myLeads=[]
 const inputEl= document.getElementById("input-el") // you cant reassignment the input varible ...
 const inputBtn=document.getElementById("input-btn")
 const ulEl=document.getElementById("ulEl")
 const deleteBtn=document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

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

   deleteBtn.addEventListener("click",function(){
   console.log(" clicked ")
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





tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderlead()
    })
})
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stop default form submit

        myLeads.push(inputEl.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderlead();
        inputEl.value = ""; // clear input
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();  // stop focus change

        // Run your SAVE TAB logic
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const url = tabs[0].url;
            const title = tabs[0].title;

            myLeads.push({
                url: url,
                name: title,
                desc: "Added using TAB key"
            });

            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            renderlead();
        });
    }
});


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
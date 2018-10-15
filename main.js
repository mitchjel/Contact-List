



// Get User Input
var filterInpult = document.querySelector("#filter");
// Adding an event listener to it
filterInpult.addEventListener("keyup", filterNames);
function filterNames(){

   // Get Users input value
   var filterValue = filterInput.values;

   // Get the names in contact list
   var names = document.querySelectorAll("li.contact-name");
   // compare all the contacts on the contact list

   for (var i=0; i< names.length;i++){
    // get link inside names
        var a = names[i].querySelector(a);
        if (a.innerHTML.toUpperCase().includes(filterValue.toUpperCase())){
            names[i].style.display = "block";
        }
           else {
               names[i].style.display = "none";
           }
        }

    }
let formResponse={
    first:string="me",
    last:string="me",
    phone:string="",
    email:string="",
    supervisor:string="me",
    contactemail:bool=false,
    contactphone:bool=false
};


var supervisorJSON=[];
let supervisorNames=[];
let supervisors=[];
let supervisor=[];
let person=[];

var ele = document.getElementById('supervisor');
var select = document.getElementById("supervisor");
(function(){
    var requiredCheckboxes = $('.contactType :checkbox[required]');
    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});

// //Get request for supervisor data
var url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/supervisors";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "*/*");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      supervisorJSON = JSON.parse(xhr.responseText);
      supervisorNames = supervisorJSON.results;
     // supervisors=supervisorNames
     for(var i=0;i<supervisorNames.length;i++){
        supervisors[i]=supervisorNames[i].name;
   }
        for(var j=0;j<supervisors.length;j++){
            supervisor[j]=supervisors[j].first+" "+supervisors[j].last;
        }
        for(var k=0;k<supervisor.length;k++){ var optn = supervisor[k];
            var el = document.createElement("option");
            el.textContent = optn;
                el.value = optn;
                select.appendChild(el);}
      console.log(supervisorJSON);
      console.log(supervisorNames);
      console.log(supervisors);
      console.log(supervisor);

   }};

xhr.send();

function sendResponse(){
    formResponse.first=document.getElementsByName('firstName');
    formResponse.last=document.getElementsByName('lastName');
    formResponse.email=document.getElementsByName('email');
    formResponse.phone=document.getElementsByName('phone');
    formResponse.supervisor=document.getElementsByName('supervisor');
    formResponse.contactemail=document.getElementsByName('emailch');
    formResponse.contactphone=document.getElementsByName('phonech');
}





/* var request = new XMLHttpRequest();
request.open("POST", "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/submit");
request.send(JSON.stringify(formResponse));
 */
function onlyOne(checkbox) {
    var checkboxes = document.getElementById('chkbox');
    checkboxes.forEach((item) => {
        item.checked = false
    })
    checkbox.checked = true
}
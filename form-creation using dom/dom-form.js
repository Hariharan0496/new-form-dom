var form_creation=document.createElement("form");



var label_creation1=document.createElement("label");
let innerlabel1=label_creation1.innerText="First Name";

var textbox1=document.createElement("input");
textbox1.setAttribute("type","text");

var linebreak=document.createElement("br");

form_creation.append(label_creation1,textbox1);
form_creation.append(linebreak);




var label_creation2=document.createElement("label");
let innerlabel2=label_creation2.innerText="Last Name";

var textbox2=document.createElement("input");
textbox2.setAttribute("type","text");

var linebreak1=document.createElement("br");

form_creation.append(label_creation2,textbox2);
form_creation.append(linebreak1);




var label_creation3=document.createElement("label");
let innerlabel3=label_creation3.innerText="Email address";

var emailbox3=document.createElement("input");
emailbox3.setAttribute("type","email");
emailbox3.setAttribute("id","emailbox");

var linebreak3=document.createElement("br");

form_creation.append(label_creation3,emailbox3);
form_creation.append(linebreak3);




var buttoncreation=document.createElement("button");
buttoncreation.innerHTML="Submit";

form_creation.append(buttoncreation);
document.body.append(form_creation);

buttoncreation.style.backgroundColor="blue";
buttoncreation.style.color="white";

buttoncreation.addEventListener ("click", function() {

    var Value1=textbox1.value;
    var Value2=textbox2.value;
    var Value3=emailbox3.value;
    
    console.log(Value1,Value2,Value3);
  });









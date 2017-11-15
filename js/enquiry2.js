//Name validation

function check(form) 
{

if(form.name.value=="")
{
alert("Please Enter your Name");
form.name.focus();
return (false);
}


//End of Name validation

//contact validation


  if (form.contact.value == "")
  {
    alert("Please enter a value for the \"contact\" field.");
    form.contact.focus();
    return (false);
  }

  if (form.contact.value.length < 6)
  {
    alert("Please enter Numeric No. with code in the \"contact\" field.");
    form.contact.focus();
    return (false);
  }


  var checkOK = "0123456789";
  var checkStr = form.contact.value;
  var allValid = true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
  }
  if (allValid==false)
  {
    alert("Please enter only digit and \"-\" characters in the \"contact\" field.");
    form.contact.focus();
    return (false);
  }



if(form.message.value=="")
{
alert("Please Enter your Message here.");
form.message.focus();
return (false);
}

//End of Quey validation



//Captcha validation

if(form.captcha.value=="")
{
alert("Please Enter your Security Code.");
form.captcha.focus();
return (false);
}

}
//End of Captcha validation
//function check(form) 

//email validation

var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i

function checkmail(e){
var returnval=emailfilter.test(e.value)
if (returnval==false){
alert("Please enter a valid email address.")
e.select()
}
return returnval
}

//end of email validation



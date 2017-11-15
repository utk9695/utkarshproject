function check(form2) 
{

if(form2.in3.value=="Select a Date")
{
alert("Please Select Check in Date");
form2.in3.focus();
return (false);
}

if(form2.del_on.value=="Select a Date")
{
alert("Please Select Check Out Date");
form2.del_on.focus();
return (false);
}



if(form2.room.value=="")
{
alert("Please Enter No.of Rooms");
form2.room.focus();
return (false);
}


if(form2.person.value=="")
{
alert("Please Enter No.of Person");
form2.person.focus();
return (false);
}


//Name validation


if(form2.name.value=="")
{
alert("Please Enter your Name");
form2.name.focus();
return (false);
}



//End of Name validation

//contact validation


  if (form2.contact.value == "")
  {
    alert("Please enter a value for the \"contact\" field.");
    form2.contact.focus();
    return (false);
  }

  if (form2.contact.value.length < 6)
  {
    alert("Please enter Required Numeric Digits in the \"contact\" field.");
    form2.contact.focus();
    return (false);
  }

  

  var checkOK = "0123456789";
  var checkStr = form2.contact.value;
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
    alert("Please enter only digit and  no characters in the \"contact\" field.");
    form2.contact.focus();
    return (false);
  }


//end of contact validation

//phone validation


  /*if (form2.phone.value == "")
  {
    alert("Please enter a value for the \"Phone\" field.");
    form2.phone.focus();
    return (false);
  }

  if (form2.phone.value.length < 6)
  {
    alert("Please enter at least 6 characters in the \"Phone\" field.");
    form2.phone.focus();
    return (false);
  }

  if (form2.phone.value.length > 256)
  {
    alert("Please enter at most 256 characters in the \"Phone\" field.");
    form2.phone.focus();
    return (false);
  }

  var checkOK = "0123456789--+, .";
  var checkStr = form2.phone.value;
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
    alert("Please enter only digit and \"-\" characters in the \"Phone\" field.");
    form2.phone.focus();
    return (false);
  }
*/

//end of phone validation

//Quey validation

if(form2.message.value=="")
{
alert("Please Enter your Message here.");
form2.message.focus();
return (false);
}

//End of Quey validation



//Captcha validation

if(form2.captcha.value=="")
{
alert("Please Enter your Security Code.");
form2.captcha.focus();
return (false);
}

}
//End of Captcha validation
//function check(form2) 

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



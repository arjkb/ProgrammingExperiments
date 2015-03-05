function nameValidator(name)	{
    console.log(" name validator ");
    var name_regex = /^([a-zA-Z])+([0-9])+$/;
    console.log(name.value);
    return name_regex.test(name.value); 
}


function phoneValidator(phone)	{
    console.log(" phone validator ");
    var phone_regex = /^([0-9])+$/
    return phone_regex.test(phone.value);
}

function emailValidator(email)  {
    console.log(" email validator ");
    var email_regex = /^([a-z0-9])+\@+([a-z])+\.([a-z])+$/
    return email_regex.test(email.value);
}

function validator(name, phone, email)	{
    console.log(" validator ");
    var name_status = nameValidator(name);
    var phone_status = phoneValidator(phone);
    var email_status = emailValidator(email);
    
    var output = " ";
    var ERROR_FLAG = false;

    if( name_status == false )  {
        output += "Please check your entered name! ";            
        ERROR_FLAG = true;
    }

    if( phone_status == false ) {
        output += "\n Please check your entered phone number! ";
        ERROR_FLAG = true;
    }
    
    if( email_status == false ) {
        output += "\n Please check your entered email! ";
        ERROR_FLAG = true;
    }

    if(ERROR_FLAG)   {
        alert(output);          
    }
    else    {
        alert("Form validated!");
    } 
}	  

	function nameValidator(name)	{
	  console.log(" name validator ");
	  var name_regex = /^([a-zA-Z])+([0-9])+$/;
	  console.log(name.value);
	  return name_regex.test(name.value);
	}
	
	
	function phoneValidator(phone)	{
	  console.log(" phone validator ");
	  var phone_regex = /^([0-9])+$/
	  return phone_regex.test(name.value);
	}
	
	function validator(name, phone)	{
	  console.log(" validator ");
	  var name_status = nameValidator(name);
	  var phone_status = phoneValidator(phone);
	  
	  var output = "Name = " + name_status + "\n Phone: " + phone_status";
	  alert(output);
	}
	  
	  
	
	
/*	
	var myfunc = function ()	{			
		var text = prompt("\n Enter a text: ");
		document.getElementById("entered_text").innerHTML = "Good afternoon, " + text + "!";
	}

	function mouseClickListener(obj)	{
// 		obj.innerHTML = "Mouse clicked!";
		obj.innerHTML = "Mouse Cicked!";
	}
	
	function mouseDClickListener(obj)	{
		obj.innerHTML = "Mouse double-clicked!";
	}
	
	function mouseDownListener(obj)	{
		obj.innerHTML = "Mouse Down/Up: DOWN";
	}
	
	function mouseUpListener(obj)	{
		obj.innerHTML = "Mouse Down/Up: UP";
	}
	
	function mouseEnterListener(obj)	{
		obj.innerHTML = "Mouse Enter/Leave: Entering";
	}
	
	function mouseLeaveListener(obj)	{
		console.log("Leaving!");
		obj.innerHTML = "Mouse Enter/Leave: Leave";
	}
	
	function mouseMoveListener(obj)	{
		obj.innerHTML = "Mouse moving!";
	}
	
	function mouseOverListener(obj)	{
		obj.innerHTML = "Mouse Over/Out: OVER!";
	}
	
	function mouseOutListener(obj)	{
		obj.innerHTML = "Mouse Over/Out: OUT!";
	}
*/
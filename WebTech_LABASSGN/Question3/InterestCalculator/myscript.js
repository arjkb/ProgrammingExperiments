function procValues() {
    var p = document.data_form.principal.value;
    var r = document.data_form.rate.value;
    var t = document.data_form.years.value;
    var n = document.data_form.comp_n.value;
 
    p = parseInt(p);
    r = parseFloat(r);
    t = parseInt(t);
    n = parseInt(n);
    
    /*alert(p);
    console.log(p);*/
    
    var amount = (1 + (r/n)) * n * t;
    
    document.getElementById("result_amount").innerHTML = amount;
}

function helloTest()  {
    alert("Hello!");
    procValues();
}
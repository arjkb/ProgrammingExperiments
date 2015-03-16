function getBook(obj)   {
    /*console.log(obj);
    if(obj == 1)       {
        console.log("Entered IF");
        var list = document.getElementsByClassName("javabook");
        
        for(var i = 0; i < list.length; i++)    {
            list[i].style.visibility = "visible";
            
        }
    }*/
    
    console.log(obj);
    var list = document.getElementsByClassName(obj);
    for(var i = 0; i < list.length; i++)    {
        list[i].style.visibility = "visible";
    }
}
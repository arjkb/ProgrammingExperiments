function getSubNum()    {
    var num = prompt(" Enter number of subjects: ");
    num = parseInt(num);
    
/*
    var s = num + num;
    
    alert("Sum " + s);
*/
    return num;
}

function createHTML(subnum) {
    alert("Inside!");
    var obj = document.getElementById("mark_table");
    //obj.innerHTML = "<tr>    <th> S.NO </th> <th> Course </th>  <th> Marks </th> </tr>";
    
    
    var code = "<tr>    <th> S.NO </th> <th> Course </th>  <th> Marks </th> </tr>";
    
    for(var i = 0; i < subnum; i++) {
        mid = "mark" + (i + 1);
        code += "<tr> <td> " + (i+1) + "</td> <td> Subject " + (i+1) + "</td> <td id = \"" + mid + "\"</td> </tr>";  
        
        console.log(code);
    }
    
    obj.innerHTML = code;
}

function getSubMarks(subnum)    {
    var marks = new Array();
    var sum = 0;
    var average = 0;
    var elem;
    
    createHTML(subnum);
    
    for(var i = 0; i < subnum; i++) {
        subject_mark = prompt("\n Enter marks in subject " + (i+1));    
        marks[i] = parseInt(subject_mark);

        sum += marks[i];
        
        elem = "mark" + (i+1);
        
        document.getElementById(elem).innerHTML = subject_mark;
    }
    
    average = sum/subnum;
    
    document.getElementById("average_mark").innerHTML = average;    

}

function init() {
    var x = getSubNum();
    
    getSubMarks( parseInt(x) );
}
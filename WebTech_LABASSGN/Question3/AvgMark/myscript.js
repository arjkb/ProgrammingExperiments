function getSubNum()    {
    var num = prompt(" Enter number of subjects: ");
    num = parseInt(num);
    
/*
    var s = num + num;
    
    alert("Sum " + s);
*/
    return num;
}

function getSubMarks(subnum)    {
    var marks = new Array();
    var sum = 0;
    var average = 0;
    var elem;
    
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
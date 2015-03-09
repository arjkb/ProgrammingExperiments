function getSubNum()    {
    var num = prompt(" Enter number of subjects: ");
    num = parseInt(num);
    return num;
}

function getSubMarks(subnum)    {
    var mark = new Array();
    var sum = 0;
    var average = 0;
    
    for(var i = 0; i < subnum; i++) {
        subject_mark = prompt("\n Enter marks in subject " + (i+1));    
        marks[i] = parseInt(subject_mark);
        sum += marks[i];
    }
    
    average = sum/subnum;
    
    
        

}
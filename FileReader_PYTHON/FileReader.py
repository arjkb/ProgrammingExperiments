print "Welcome to File Reader";
print "Enter File Name: ";
name = raw_input(" > ");
myfile =  open(name);
content = myfile.read();

print content;

"""
	FILE: WordReplacer.py

	Program to open a word, and replace all occurrences of
	a particular word with another word.
"""

import sys

print "Welcome to File Reader";

name = sys.argv[1];

myfile =  open(name, 'r+'); #open the file for writing
content = myfile.read(); #store the contents of the file
print "Original Contents: \n", content; #print original contents of file

original_word = sys.argv[2];
replacement_word = sys.argv[3];

#perform replacement
newcontent = content.replace(original_word, replacement_word);

myfile.seek(0);		#bring file pointer to the beginning of file,
					#to replace contents from the beginning

myfile.truncate();	#clear existing contents of file

myfile.write(newcontent); 	#store replaced contents

myfile.seek(0); 	#bring file pointer to the beginning of the file
print "New Contents: \n", myfile.read(); #print new contents

myfile.close();

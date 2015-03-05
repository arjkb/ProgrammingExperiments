encoded_bits = raw_input(" Enter encoded bits: ");
count = 0;
original_bits = ""
encoded_bits = encoded_bits[8:-8] #get rid of the header and the tailer

print " After slicing: " + encoded_bits

for x in encoded_bits:
	if count == 5 :
		count = 0;
		continue;
	
	if x == "1" :
		count = count + 1;
	else	:
		count = 0;
	
	original_bits += x;

print " Original bits (decoded): " + original_bits

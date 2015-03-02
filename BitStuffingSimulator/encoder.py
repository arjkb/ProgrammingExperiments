"""
	Python program to simulate the encoding of a stream of bits 
	in the data-link layer in a network.

	"01111110" is a flag that marks the start of a data stream.
"""

FLAG = "01111110"
count = 0;

original_bits = raw_input(" Enter bits: ");

encoded_bits = FLAG;

for x in original_bits	:
	# Keep track of consecutive 1s
	if x == "1" :
		count = count + 1;
	else	:
		count = 0;
	
	encoded_bits += x;

	# if five 1s come up in a row, add a 0
	if count == 5 :
		encoded_bits += "0";
		count = 0; #reset the counter

encoded_bits += FLAG;	#add the flag again in the end

print " Encoded bits: " + encoded_bits;
print " " + str(len(encoded_bits)) + " bits";

import socket

s = socket.socket()
host = socket.gethostname()
PORT = 4001;

s.bind((host, PORT))

s.listen(5)

while True	:
	c, addr = s.accept();
	print "CONNECTED: ", addr;
	c.send("Thank You!");
	c.close();

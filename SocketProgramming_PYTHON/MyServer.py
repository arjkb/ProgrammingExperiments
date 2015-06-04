import socket

s = socket.socket()
host = socket.gethostname()
PORT = 4007

s.bind((host, PORT))

s.listen(1)

while True	:
	c, addr = s.accept();
	print "CONNECTED: ", addr;
	print " CLIENT SAYS: ", c.recv(1024);
	c.send("Thank You!");
	c.close();

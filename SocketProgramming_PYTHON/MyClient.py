import socket

s = socket.socket()
host = socket.gethostname()

PORT = 4007

s.connect((host, PORT));

s.send("This should be cool!");

print "SERVER SAYS: ", s.recv(1024)

s.close()

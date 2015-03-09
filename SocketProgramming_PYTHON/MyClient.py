import socket

s = socket.socket()
host = socket.gethostname()

PORT = 4001;

s.connect((host, PORT));

s.send("Hello!")

s.close()

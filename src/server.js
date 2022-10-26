import server from './App';

const port = 3333;

server.listen(port, () => 
  console.log(`Server on port ${port}`)
);

const http = require('http');

const fs = require('fs');

const requestListener = function (req, res){

   req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`)
        fs.readFile('user.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();  
            
            });

    })


    req.on('end', () => {
        
        console.log('This is the end')

    })

    
}

const server = http.createServer(requestListener);

server.listen(8080, function(error){
    if(error){
        console.log('Error', error)
    }else{
        console.log('Server is listening...')
    }
})
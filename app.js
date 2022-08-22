const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

// const http = require('http')

// const server = http.createServer((req,res)=>{
// 	if(req.url === '/'){
// 		res.end('Home Page')
// 	}
// 	if(req.url === '/about'){
// 		res.end('About Page')
// 	}
// 	res.end(`<h1>Opps!</h1>
// 	<a href = "/">Back Home</a>
// 	`)
// })

// server.listen(5000)




// const path = require('path')
// console.log(path.sep);

// const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute);


// const os = require('os')

// const user = os.userInfo()
// console.log(user);
// console.log(`System uptime is ${os.uptime()} seconds`);

// const currentOS = {
// 	name:os.type(),
// 	release: os.release(),
// 	totmem:os.totalmem(),
// 	freemem:os.freemem()
// }

// console.log(currentOS);



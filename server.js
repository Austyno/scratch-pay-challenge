/**
 * primary file for the API
 */

const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

const server = http.createServer((req, res) => {
  //get url and parse it
  const parsedUrl = url.parse(req.url, true)

  //get the path from url
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Get the query string as an object
  var queryStringObject = parsedUrl.query

  // Get the HTTP method
  var method = req.method.toLowerCase()

  //get payload if any
  let buffer = ''
  const decoder = StringDecoder('utf-8')
  req.on('data', (data)=>{
    buffer += decoder.write(data)
  })

  req.on('end',() => {
    buffer += decoder.end()

    
  })
})

//start server
server.listen(8000, () => {
  console.log('sever started on port 5000')
})

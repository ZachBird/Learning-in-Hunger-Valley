var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('填个端口号呀，不然你访问哪个端口呐？o(▼皿▼メ;)o\nlike this:\nnode server.js 6666')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log(`你请求的路径是这个呀：\n${path}`)
  console.log(`你带的查询字符串是这个呀：\n${query}`)

  if(path === '/')
  {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE html>\n<head>' +
     '<title>First Node Server</title>' +
      '<link rel="stylesheet" href="/style.css">' +
     '</head>\n<body>' + 
     '<div class="centerBox">' +
        '<h2>一个简陋的Node.js Server</h2>' + 
      '<p>初步了解Server的工作流程。虽然很基础，但是慢慢来嘛！ヽ(●-`Д´-)ノ</p>\n</div>\n<script src="/main.js"></script>\n</body>\n</html>')
    response.end()

  }else if(path === '/style.css'){
    
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body {background: lightblue;}' +
    '.centerBox {width: 600px; height: 300px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: #666; background: pink; text-align: center; vertical-align: middle; line-height: 110px; }')
    response.end()

  }else if(path === '/main.js'){
    
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('let now = new Date()\nalert(`Welcome!\nThe Time Is:${now.toLocaleString()}`)')
    response.end()

  }else{
    
    response.statusCode = 404
    response.end()

  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('视奸 ' + port + ' 成功\n开一罐82年的雪碧，然后打开 http://localhost:' + port)



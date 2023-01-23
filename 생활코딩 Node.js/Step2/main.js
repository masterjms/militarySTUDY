var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(tittle, list, body){
    return `
    <!doctype html>
    <html>
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list} 
        ${body}
    </body>
    </html>
    `;
}

function templateList(filelist){
    /* 가져와야할 파일들
            var list = `
            <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>`;
    */

    var list = '<ul>'; //ul태그로 시작
           var i = 0;
           while(i < filelist.length){ // 파일 리스트에 들어간 배열의 개수를 센다
               list = list + `<li><a href="/?id=${filelist[i]}"> ${filelist[i]} </a></li>`;
               i=i+1;
           }
           list = list+'</ul>';
           return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){

        fs.readdir('./data',function(error, filelist){ //data directory에서 파일가져오기. 이때 배열로 값이 나온다. expect: ['css','html','javascript']
            console.log(filelist);
            var title = 'Welcome';
            var description = 'Hello, Node.js';

            var list = templateList(filelist);
            var template = templateHTML(tittle, list, `<h2>${tittle}</h2>${description}`); // html코드안에 list 넣기


            response.writeHead(200);
            response.end(template);
        })

          
      } else {
            fs.readdir('./data',function(error, filelist){
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(tittle, list, `<h2>${tittle}</h2>${description}`);

            response.writeHead(200);
            response.end(template);
            });
        });
        }  
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000)
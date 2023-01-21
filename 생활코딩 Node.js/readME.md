## URL의 이해
http://opentutorial:3000/main?id=HTML&page=12 의 의미는?<br> 
1. http라는 프로토콜을 이용한 접속 방법을 이용하여
2. opentutorial이라는 호스트, 즉 도메인에 접속을 한다.
3. 이때 접속하는 서버의 포트 번호는 3000번이고(app.listen(3000))
4. 이 호스트의 path를 의미하는데 이것은 컴퓨터 안에 있는 어떤 디렉토리에 어떤 파일인지 가르킨다. 즉 main이라는 파일로 접속을 하는데
5. ?는 query String으로 이 값을 변경하면 이 주소에 해당하는 서버에 세부적 데이터를 전달한다. 즉 내가 읽고 싶은 정보는 HTML 이고 이때의 페이지는 12페이지다. 이런 쿼리 스트링의 시작은 ?로 약속되어있다.


## request url parse query String : 문자열을 가지고 있는 url을 가져오는 방법? 
<code> queryData = url.parse(request.url,true).query </code> <br>
queryData.id 의 의미?<br>
http://opentutorial:3000/main?id=HTML&page=12에서 id 값은 HTML이므로 이 값을 가져온다.

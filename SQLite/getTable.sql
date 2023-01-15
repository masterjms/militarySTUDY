SELECT * FROM topics; // topics에 있는 모든 컬럼 가져오기

SELECT * FROM topics WHERE id = 2;
SELECT * FROM topics WHERE id > 1;

SELECT * FROM topics WHERE id > 1 AND author_name = 'duru';

SELECT id, tittle FROM topics; // 원하는 컬럼만 가져오기

SELECT * FROM topics ORDER BY id DESC; // id가 큰 숫자부터 정렬
SELECT * FROM topics ORDER BY id ASC;

SELECT * FROM topics LIMIT 2; // 전체 데이터에서 가져올 개수를 정해주어 성능저하 방지

SELECT * FROM topics LIMIT 0,2; // 첫번째(0) 테이블부터 (2)개만큼 가져온다.
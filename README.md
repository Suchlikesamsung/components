# components
리액트를 활용해 기초적인 컴포넌트를 구현합니다.

# 2023-08-17 

뭔가 만들어보려고 무작정 만들고 폴더트리 구성하고 마구 만들었음

구현할거

블로그 게시글 형태 

카드 

게시물 보기 

게시물 작성

게시물 정렬(작성일 최신,오래된순 and 카테고리별)

게시물 삭제

차주 리팩토링 및 구현 계획

1. card.js가 생성하는 ul 리스트를 foreach 반복문으로 처리하기
2. app.js가 전달하는 데이터를 json-server 라이브러리로 로컬로 처리하고 axios가 로컬 REST API에서 호출해서 데이터를 받아 처리하는 형태로 가기
3. 목데이터 구축 완료하기
4. 게시물 노출 카드 개발 완료하기


사실 그저 간단한 카드 형태의 컴포넌트가 필요한 데이터 몇개를 가져와서 표현하는 형태인데
이후 뭘 만들지는 아직 미지수의 형태임


# 2023-08-21

구현 목록

1. card.js가 생성하는 ul 리스트 api 호출로 불러와서 생성처리
2. 데이터를 목서버로 이관
3. 카드 일부분 완성

+ 별로 시간을 못써서 완성도가 그리 높진않음..오랜만에 axios를 쓰니 then과 catch가 익숙치않다.


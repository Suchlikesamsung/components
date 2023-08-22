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

게시물 검색

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


# 2023-08-22

이슈 목록

1. 이미지 파일을 mock 서버에서 땡겨오는데 컴파일전 경로이기 때문에 목 api 서버가 전달하는 경로에는
아무것도 없다. 웹팩 config를 수정하자니 단순 구현과 이해력과는 별개로 난처한 상황 imgur 라도 써서
불러올까 생각중...

2. 메테리얼 ui나 부트스트랩 혹은 여러 컴포넌트 디자인 라이브러리를 쓰는게 합리적일거같다.

3. styled-components를 도입했지만 아직 많은 부분을 바꾸진 못했다. 쉣..

구현 목록

1. 모달 컴포넌트 구현
2. 모달 세부 코드 
3. styled-components(css-in-js)를 도입

잡담 

1. 모달 컴포넌트가 열릴때 파라미터로 card.js가 id를 전달하면 해당 모달 컴포넌트는
api에 id를 보내 데이터를 받아오고 데이터를 기반으로 데이터를 채우는게 맞다고 보는데..더 나은방법이 있을거같다. 

2. 메테리얼 기반의 라이브러리를 쓰니 실력이 안오르는거같다. 직접 만들면 뭔가 좀 더 나으려나?

3. 스타일 라이브러리를 한참 고민한 결과 tailwind와 styled-components 이 두개가 최종적으로 경합했고
이후 리액트네이티브에서도 사용하게될 styled-components를 최종 스타일 라이브러리로 결정했다.
그외에도 cssinjs 라이브러리 몇개가 후보군이 있었지만 그건 다음 기회에



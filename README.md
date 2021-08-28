# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(Search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi") /
  // 리터럴
  표현 /
  옵션 /
  [a - z] /
  gi;
```

## 예제 문자

```js
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
aabbcccdddd
`;
```

## 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Booelan) 반환          |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array) 반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

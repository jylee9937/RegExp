const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
aabbcccdddd
`
// ``기호를 사용하면 띄어쓰기가 포함되는 string 데이터를 만들 수 있다.

// const regexp = new RegExp('the', 'gi')
const regexp = /but/gi
console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
console.log(str)
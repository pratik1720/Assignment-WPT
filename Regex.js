// let regex=/abc/;
// let s="knhveqlabclefhlwr";
// console.log(s.match(regex))
let regex=/^091-[0-9]{3}-[0-9]{8}/
let n="091-233-12345678";
console.log(n.match(regex))

let regexE=/^[A-Za-z0-9]+@[A-Za-z]+\.[a-z]{2,3}$/
let e="pratikkhond345@gmail.com"
console.log(e.match(regexE));

regexD=/^[0-9]{2}-[0-9]{2}-[0-9]{4}/
dob="17-07-2000"
console.log(dob.match(regexD))

regexTitle=/^[A-Za-z]+\s[A-Za-z]/
let name="pratik khond"
console.log(name.match(regexTitle))
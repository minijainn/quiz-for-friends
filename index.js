
// console.log("hi");
// var rl=require("readline-sync");
// var un=rl.question("May i have your name ?");
// // console.log("welcome "+un);
// var ans="welcome"+un;
// console.log(ans);
// var s=0;
// var q=rl.question("your age is greater than 25 ?");
// if(q==="yes"){
//   console.log("correct");
//   s=s+1;
//   console.log("your score "+s);
// }
// else{
//   console.log("wrong");
//    s=s;
//   console.log("your score "+s);
// }

// var qo=rl.question("whts your mother tounge");
// var ao="hindi";
// if(qo===ao){
//   console.log("correct");
//   s=s+1;
//   console.log("your score "+s);
// }
// else{
//   console.log("wrong");
//    s=s;
//   console.log("your score "+s);
// }

// function play(n1,n2){
//   var sum=n1+n2;
//   var mul=n1*n2;
//   return mul;
// }
//  var res=play(5,7);
// console.log(res);
// console.log(play(2,7));

// var rl=require("readline-sync");//scanner
// var sc=0;
// function play(question,answer){
//   var question=rl.question(question);//input
//   if(question===answer){//check
//     console.log("corect");
//     sc=sc+1;
//     console.log(sc);//output
//   }
//   else{
//     console.log("wrong");
//     sc=sc-1;
//     console.log(sc);
//   }
// }

// play("where i am from ? ","bangalore");
// play("wht did i have in breakfast ? ","apple");


// for(var i=0;i<5;i++){
//   console.log("mini");
// }
// f=22;
// for(var i=0;i<10;i++){
//   f=f+1;
//   console.log(f-1);
// }

// for(var i=1;i<=3;i++){
//   for(var j=1;j<=i;j++){
//     console.log("*");
//   }
//   console.log("\n");
// }

// var gl=["ee","rrr","tt"];
// console.log(gl[1]);
// console.log(gl[gl.length-1]);
// for(var i=0;i<gl.length;i++){
//   console.log(gl[i]);
// }

// var jay={
//   name:"jay",
//   age:10,
//   father_name:"manish",
//   mother_name:"swati"
// }

// var ria={
//   name:"ria",
//   age:9,
//   father_name:"binish",
//   mother_name:"swatiii"
// }

// console.log(jay.age>ria.age)
// key==property==functions==methods

// var sarr=[
//   s1={
//   name:"batman",
//   strength:200,
//   },
//   s2={
//   name:"superman",
//   strength:300,
//   }  
// ]
// for(var i=0;i<sarr.length;i++){
//   // console.log("suerheroname "+sarr[i].name+" & strength "+sarr[i].strength);
//   var cs=sarr[i];
//   console.log(cs.name);
// }


var rl = require("readline-sync");
var userName = rl.question("what is your name ?");
console.log("Welcome " + userName + " to 'Do You Know MINI?'");
var score = 0;
function play(question, answer) {
  var cqa = rl.question(question);
  if (cqa.toUpperCase() === answer.toUpperCase()) {
    console.log("correct");
    score = score + 1;
  }
  else {
    console.log("wrong");
  }
  console.log("your score till now is: " + score);
  console.log("----------------");
}
//questions
var questions = [{
  question: "where do i live ?",
  answer: "bangalore"
},
{
  question: "my fav food ?",
  answer: "MOMO"
},
{
  question: "my fav pet ?",
  answer: "Dogs"
}, {
  question: "my fav thing to do in free time ?",
  answer: "Netflix and chill"
}, {
  question: "something i wanna achieve in life ?",
  answer: "independent by money"
}, {
  question: "my bff name?",
  answer: "lay"
}
]



for (var i = 0; i < questions.length; i++) {
  var cq = questions[i];
  play(cq.question, cq.answer);
}
console.log(userName + "'s final score is: " + score);



var password = "vk123";
function abc() {
  if (password == "vk123") {
    console.log("true");
  } else {
    console.log("false");
  }
}
abc();

//when we want  to check more than 2 conditions,

//var marks = prompt("enter your marks");
//Q4.
let age = 25;

let result = age < 30 ? "Adult" : "Old";

if (age >= 15 && age < 30) {
  console.log("Adult");
} else {
  console.log("Young");
}
//Q5.
//switch
var day = "Friday";

switch (day) {
  case "Monday":
    {
      console.log("0");
    }
    break;

  case "Tuesday":
    {
      console.log("1");
    }
    break;

  case "Wednesday":
    {
      console.log("2");
    }
    break;

  case "Thursday":
    {
      console.log("3");
    }
    break;

  case "Friday":
    {
      console.log("4");
    }
    break;

  case "Saturday":
    {
      console.log("5");
    }
    break;

  case "Sunday":
    {
      console.log("6");
    }
    break;

  default:
    {
      console.log("Enter Valid day With first Letter Capital ");
    }

    break;
}


////////////////////////////////////
//Q1
//var
// var a = 10;
// {
//     console.log(a)
// }
// var a = 20;
// console.log(a)


//let
{
 let b = 10;
}  

let b =5;
console.log(b);

 b= 6;
console.log(b)
{
    b=7;
    console.log(b)
}

//const
const c= 67;
console.log(c);
{
    const c=45;
    console.log(c)
    }
c=45;
console.log(c)

//print 13 table
for( let i=0; i<11;i++){
 console.log(`13 x ${i} = ${13*i}`)
}

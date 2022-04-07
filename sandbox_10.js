const scores=[20,40,50,0,25,100,40,24];

for(let i=0;i<scores.length;i++)

{if(scores[i]===0)
{
continue;
}

console.log("your scores:",scores[i]);

if(scores[i]===100)
{
    console.log("congrats you get the top score!");
    break;
}
}
//for loops
for(let i=0;i<5;i++)
{
    console.log('in loop:',i);
}
console.log('loop finished');

const nams = ['Nusrat','Jahan','Dana'];
for(let i=0;i<nams.length;i++)
{
    //console.log(nams[i]);
    let html = `<div>${nams[i]}</div>`;
    console.log(html);

}
console.log("finished the loop");

//while loop
let i=0;
while(i<5)
{
    console.log('in while loop',i);
    i++
}

const nAm=['Subha','hadi','sima'];
let j =0;
while(j<nAm.length)
{
    console.log(nAm[j]);
    j++;
}

//do while loop
let l=6;
do{
    console.log("value is:",l);
    l++; 
}while(l<5);


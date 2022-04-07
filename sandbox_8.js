//if statement

num=20;
if(num<25)
{
    console.log("num is small");
}

const discreet=['Nusrat','Yusuf','Sajib'];
if(discreet.length<4)
{
    console.log("less discreet");
}

const pass='pass@word';

if(pass.length>=12 && pass.includes('@'))
{
    console.log("password is strong");
}
else if(pass.length>=8)
{
    console.log("password is medium strong");
}
else
{
    console.log("password is w");
}
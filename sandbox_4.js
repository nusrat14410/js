//template strings
title = 'best reads of 2022';
author = 'Nusrat';
likes=40;

//concatination way
rst='the blog called '+title+' by '+author+' has '+likes+' likes';
console.log(rst);

//template way
st=`the blog called ${title} by ${author} has ${likes} likes`;
console.log(st);

//creating html templates
let html=`
<h2>${title}</h2>
<p2>By ${author}</p2>
<span>This blog has ${likes}</span>

`;
console.log(html);
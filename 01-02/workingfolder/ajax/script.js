
for(var i = 0; i<100; i++){

var request = new XMLHttpRequest();
request.open('GET','data.txt', false);

if(request.status===200){
    console.log(request);
    document.writeln(request.responseType);
}
   
}

 request.send();    

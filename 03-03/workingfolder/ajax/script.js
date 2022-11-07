$.getJSON('data.json', function(data){
    var output = '<ol>';
    $.each(data, function(key, val){
       output += '<li>' + val.name + '</li>';
    });
    output += '</ol>';
    console.log(data);
    $('#update').html(output);
});

$.getJSON('data.json', function(data){
    var counters = 1;   
    var output = '<table> <tbody>';
    output += '<tr>' + '<th>'+ 'Nr.' + '</th>';
    output +=  '<th>'+ 'Name' + '</th>';
    output +=  '<th>'+ 'Reknown' + '</th>';
    output +=  '<th>'+ 'Photo' + '</th>';
    output +=  '<th>'+ 'Biography' + '</th>';
    
    $.each(data, function(key, val){
        output +=  '<tr><td>' + counters;
        output += '<td>' + val.name;
        output += '<td>' + val.reknown;
        output += '<td>' + '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '"/></td>';
        output += '<td>' + val.bio;
        counters += 1;
    });
    output += '</tr> </tbody> </table>';
    
    $('#updateTable').html(output);
});

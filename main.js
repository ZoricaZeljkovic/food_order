var printFood = '';
$('.adding').on('click', function() {
    var newInput = $('.food-item').val();
    
    if(newInput != '') {
        printFood = '<tr>';
        printFood += '<td>' + newInput + '</td>';
        printFood += '<td><button class="btn btn-warning delete">Delete</button></td>';
        printFood += '</tr>';
        
        $('.food-list tbody').append(printFood);
        $('.food-item').val('').focus();

    }else {
        alert('You did not enter an input for purchase.');
    }

    //$('.delete').on('click', function () {
       // $(this).parent().parent('tr').remove();
      // $(this).closest('tr').remove();
    //});
});

$('tbody').on('click', '.delete', function () {
    $(this).closest('tr').remove();
});
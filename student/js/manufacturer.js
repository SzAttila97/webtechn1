$('#newManufacturerForm').on('submit', function (event) {
    event.preventDefault();

    var name = $('#mName').val();
    var country = $('#mCountry').val();
    var founded = $('#mFounded').val();

    $.post('/addManufacturers', {
        name: name,
        country: country,
        founded: founded
    }, function (response) {
        console.log(response);
        alert("Succesfully added a manufacturer!");
    }).fail(function(response) {
        alert('Failed to add the manufacturer!');
    });
});
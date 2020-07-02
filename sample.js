$(function () {
    $('#button').click(
        function () {
            $.ajax({
                url: 'sample2.html',
                dataType: 'html',
                success: function (data) {
                    $('#text').html(data);
                },
                error: function (data) {
                    alert('error');
                }
            });
        }
    );
});

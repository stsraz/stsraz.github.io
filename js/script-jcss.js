document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    //var closeBtn = document.getElementById('close-btn');

    document.body.addEventListener('mousemove', function(event) {
        if (event.clientX > window.innerWidth - 10) {
            sidebar.style.width = '250px';
            document.body.style.marginRight = '250px';
        }
    });

    /*closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        document.body.style.marginRight = '0';
    });*/
});

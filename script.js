$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if ( scroll >= 150 ) {
        document.queryselector(".navbar").style.opacity = "1";
    }
    else
    {
        document.queryselector(".navbar").style.opacity = "0";
    }
})

//smooth-scroll
$(".nav-item").click(function() {
    if (
        location.postname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    )
        var target= $(this.hash);
        target = target.length ? target : $('(name=' + this.hash.slice(1) + ']');
        if (target.length)
        {
            $('html, body').animate({
                scrollTop: target.offsey().top
            }, 3000 );
            return false;
        }
})

$(".navbar li a").click(function() {
    $("navbar li a").parent().removeClass("actives");
    $(this).parent().addClass("actives");
})
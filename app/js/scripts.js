//load more button
$(document).ready(function () {
    size_li = $("#myList div").size();
    x=2;
    $('#myList div:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('#myList div:lt('+x+')').show();
    });
});

$(document).ready(function(){
	$('.parallax').parallax();
});
$(".button-collapse").sideNav();
$(document).ready(function(){
	$('.materialboxed').materialbox();
});

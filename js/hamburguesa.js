
$(window).resize(
    function(){
        $('.navjs').show();
    }
);

$(document).ready(main);

function main(){
    $('.menu_hamburguesa').click(function(){
        $('.navjs').toggle();
    });
}










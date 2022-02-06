//spy scroll
$.fn.visible = function(partial) {

    var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

function spy_scroll(selector){
                
    $(selector).each(function(i, el) {

        var el = $(el);

        if (el.visible(true) && $(".animated_skills").length === 0) {

            $(selector).addClass("animated_skills");
            for (var i = 0; i <= $(".about .skills .skill").length -1; i += 1) {

                progress_count(i);

            }

        }

    });

}
$( document ).ready(function() {

    let $randomnbr = $('.nbr');
    let $timer = 30;
    let $data = 0;
    let index;
    let change;
    let letters = ["c", "a", "n", "e", "r", " ", "s", "a", "v", "a", "k"];
    
    $randomnbr.each(function() {
        change = Math.round( Math.random() * 100 );
        $( this ).attr('data-change', change);
    })
    
    function random() {
        return Math.round( Math.random() * 9 );
    }
    
    function select() {
        return Math.round( Math.random() * $randomnbr.length + 1 );
    }
    
    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;
    
        $randomnbr.each(function() {
            if(parseInt($( this ).attr('data-number')) > parseInt($( this ).attr('data-change'))) {
                index = $('.ltr').index( this );
                $( this ).html(letters[index]);
                $( this ).removeClass('nbr');
            }
        })
    }
    
    $it = setInterval(value, $timer);
    
    })

//animate skills
function progress_count(progress_num) {

    var valu_percent = $(".about .skills .skill:eq(" + progress_num + ") span:last-of-type").text(),
        valu = parseInt( valu_percent ),
        skills_progress = $(".about .skills .skill");

    (function theLoop (i) {

        setTimeout(function () {

            $(".about .skills .skill:eq(" + progress_num + ") .progress_bar").width(i+"%");

            $(".about .skills .skill:eq(" + progress_num + ") span:last-of-type").text( i+"%" ) ;

            if( $(skills_progress).css('visibility') !== 'visible') {
                $(skills_progress).css("visibility", "visible");

            }

            if (i != valu) {         
                i++;
                theLoop(i);
            }
            
        }, 15);

    })(0);

}

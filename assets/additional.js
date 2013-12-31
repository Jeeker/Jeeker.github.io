(function($){
    $(function() { 
        var wb_name = "JinnLynn";
        var wb_url = "http://weibo.com/jinnlynn";
        var gh_url = "https://github.com/jinnlynn";
        $("#header").append('<div id="share-services"><span id="github"></span><span id="sina-weibo"></span></div>');
        $("#share-services span").wrap('<a></a>');
        $("#sina-weibo").attr({"wb_screen_name": wb_name, "class": "about-icon-chn-weibo"}).parent("a").attr("href", wb_url);
        $("#github").attr("class", "about-icon-github").parent("a").attr("href", gh_url);
        WB2.anyWhere(function(W){
            W.widget.hoverCard({
                id: "sina-weibo"
            });
        });
    });

    $(window).load(function(){
        $('head').append('<link type="text/css" rel="stylesheet" href="/assets/additional.css">');
    });

    var resizeImage = function(img) {
        if (img == undefined) {
            $(".entry-content img").each(function(){
                resizeImage($(this));
            });
            return;
        };
        var gcw = function(n) {
            return parseFloat(img.css(n))
        };
        img_width = img.width();
        padding = gcw("padding-left") + gcw("padding-right") + gcw('border-left-width') + gcw('border-right-width');
        space_width = img.parent().innerWidth() - padding;
        if (img_width >= space_width) {
            img.width(space_width);
        };
    };
    $(function() { 
        resizeImage();
    });
    $(".entry-content img").bind('load', function() {
        resizeImage($(this));
    })
    $(window).resize(function(){
        resizeImage($(this));
    });

})(jQuery);
var myideas_action_timeout = false;

$(function() {

    // Sign In / Sign Up form
    $('.radio-toggle-div').each(function() {
        var $radios = $(this).find('input:radio'),
            $divs   = $(this).find('.radio-option');

        $radios.change(function(e) {
            var $div = $divs.hide().eq($radios.index(this)).show();
            if( e.originalEvent ) {
                $div.find('input:first').focus();
            }
        });
    });

    $.fn.OTFixSize = function() {
        return $(this).each(function() {
            $(this).width( $(this).width() );
            $(this).height( $(this).height() );
        });
    };

    $(document).on('click', '.account-add', function(e) {
        e.preventDefault();

        var $btn = $(this).OTFixSize(),
            originalText = $btn.html();

        if ($btn.hasClass('ajax')) {
            window.location = $btn.attr('href');
            return false;
        }
        // find all buttons with the same id (duplicates in carousels)
        var $btns = $('.account-add[data-id='+$(this).data('id')+']');

        $btns.addClass('ajax').html('Adding&hellip;');

        var promise = $.post('/account/add/' + $(this).data('id'));

        promise.done(function(response) {
            $btns.html('<span>Added!</span>').attr('href','/account');
            $btns.data('timeout',setTimeout(function() {
                $btns.html('<span>In My Ideas</span>');
            },5000));
            var c = response.payload.count;
            var h = $(response.payload.navideas).html();
            $('div#navigation-popover div.myideas-dropdown').html(h).trigger('init');
            var $count = $('#idea-count');
            $a = $count.closest('a');
            var $anim = $btn.clone().appendTo('body');
            $anim.text('').css({position:'absolute', zIndex:1000, left:$btn.offset().left, top:$btn.offset().top});
            $anim.animate({opacity:0.05, left:$count.offset().left-10, top:$count.offset().top, width:'10px', height:'10px'}, 400, function() {
                $anim.remove();
                $a.fadeOut(200,function() {
                    $count.text(c);
                    $a.fadeIn(200);

                    if (c == 1) {
                        // only on the first item added
                        $('#navigation-header.noideas').removeClass('noideas');
                        $('div#navigation-popover div.myideas-dropdown').removeClass('myideas-dropdown-empty').addClass('myideas-dropdown-full');

                        if ($('div.myideas-action-dropdown').length > 0) {
                            // only if you're not logged in
                            $('#navigation-header').addClass('target-myideas-action').addClass('active');
                            navOpen = true;

                            myideas_action_timeout = setTimeout(function() {
                                $('#navigation-header').removeClass('target-myideas-action').removeClass('active');
                                $('#navigation-header .myideas-action-dropdown').remove();
                                navOpen = false;
                            }, 5000);
                        }
                    }
                });
            });
        });

        promise.fail(function(response) {
            if( $btn.prev().is('.full-link') ) {
                window.location = $btn.prev().attr('href');
            } else {
                alert('Failed adding to list');
            }
            $btns.removeClass('ajax');
            $btns.html(originalText);
        });
    });

    $(document).on('click', '.account-add-list-to-current', function(e) {
        e.preventDefault();

        if( $(this).hasClass('ajax') ) {
            return false;
        }

        var $btn = $(this).OTFixSize(),
            originalText = $btn.html();

        $btn.addClass('ajax').html('Copying items...');

        var promise = $.post('/account/add-list-to-current/' + $(this).data('id') )
            .done(function() {
                window.location.href = '/account';
            })
            .fail(function() {
                if( $btn.prev().is('.full-link') ) {
                    window.location = $btn.prev().attr('href');
                } else {
                    alert('Failed copying list');
                }
                $btn.removeClass('ajax');
                $btn.html(originalText);
            });
    });

    $('.ideas-list article').hover(function()
    {
        $(this).find('.remove-button').css('display', 'block');
    }, function()
    {
        $(this).find('.remove-button').css('display', 'none');
    });

    $('.ideas-list article .remove-button').click(function(event)
    {
        event.preventDefault();

        var $btn = $(this);
        if ($btn.hasClass('ajax')) {
            return false;
        }

        original_text = $btn.text();

        $btn.addClass('ajax').text('Removing...');

        $.post('/account/remove/' + $(this).data('id'))
            .done(function(response) {
                //Remove the current item
                $btn.parent().parent().fadeOut('normal', function() {
                    $(this).remove();

                    //Remove any childless regions
                    $('.ideas-list-region').each(function(i)
                    {
                        remaining_items = $(this).children().not('h2').length;

                        if ( ! remaining_items)
                        {
                            $(this).fadeOut('normal', function()
                            {
                                $(this).remove();
                                $('.ideas-list-region:first h2').addClass('first');
                            });
                        }
                    });
                });

                //Update the header
                var c = response.payload.count;
                var h = $(response.payload.navideas).html();
                $('#idea-count').text(c);
                $('div#navigation-popover div.myideas-dropdown').html(h).trigger('init');

                //Refresh if none left
                if (c == 0) location.reload();
            })
            .fail(function() {
                alert('Failed removing list');
                $btn.removeClass('ajax');
                $btn.text(original_text);
            });
    });

    $('.archived-ideas-list').on('click','.delete-button',function(event) {
        event.preventDefault();

        var $btn = $(this);
        if ($btn.hasClass('ajax')) {
            return false;
        }

        if (confirm('Are you sure you wish to delete this list?')) {
            var original_text = $btn.text();
            $btn.addClass('ajax').text('Deleting...');

            var $ajax = $.ajax({
                type:'get',
                url:$btn.attr('href'),
                data:{'ajax':'1'},
                dataType:'json'
            });

            $ajax.done(function(data) {
                var $div = $btn.closest('div.archive-list');
                $div.animate({'opacity':0},200,function() {
                    $div.animate({'width':0},500,function() {
                        $div.closest('div.ideas-slider').trigger('rejig');
                        $div.remove();
                    });
                })
            });

            $ajax.fail(function(data) {
                var result = data.responseText;
                var json = $.parseJSON(result);
                alert(json.payload.error);
                $btn.removeClass('ajax');
                $btn.text(original_text);
            });
        }
    });


    $('a.cog').click(function(event) {
        $(this).toggleClass('open');
        $('.cog-panel').slideToggle('fast');
        event.preventDefault();
    });

    $('p.form-success').css('opacity',0).animate({'opacity':1},1000);

    $('p.close a').on('click',function(event) {
        event.preventDefault();
        var $box = $(this).closest('div.box');
        $box.animate({'opacity':0},500,function() {
            $box.slideUp(500);
        });
    });

    $('div.ideas-slider').each(function() {
        var $slider = $(this);
        var $container = $slider.find('div.container');
        var $frames = $container.find('div.archive-list');
        var $wrapper = $('div#outer-wrapper');
        var $arrows = $('<div class="arrows"><a href="#" class="prev">Previous</a><a href="#" class="next">Next</a></div').prependTo($slider);
        var $first = $frames.eq(0);
        var width = $first.width()+parseInt($first.css('margin-left'))+parseInt($first.css('margin-right'));
        $slider.height($container.height());

        var centre = function($obj,speed) {
            $obj.animate({'left':parseInt(($slider.width()-$obj.width())/2)},speed);
        }

        var rejig = function(speed) {
            centre($container,speed);
            if ($wrapper.width() > $container.width()) {
                $slider.removeClass('hasArrows');
            } else {
                $slider.addClass('hasArrows');
                centre($arrows,0);
            }
        }

        $slider.on('rejig',function() {
            // animate adjustment
            rejig(500);
        })

        $(window).resize(function() {
            // instant adjustment
            rejig(0);
        }).resize();

        var go = function(dir) {
            if ($arrows.data('animating')) {
                return false;
            }
            $arrows.data('animating',true);

            var finish = function() {
                $container.css('left',left);
                $frames = $container.find('div.archive-list');
                $arrows.data('animating',false);
            }

            var left = parseInt($container.css('left'));
            if (dir > 0) {
                $frames.eq(0).clone().appendTo($container);
                $container.animate({'left':left-width},500,function() {
                    $frames.eq(0).remove();
                    finish();
                });
            } else {
                $frames.eq($frames.length-1).clone().prependTo($container);
                $frames = $container.find('div.archive-list');
                $container.css('left',left-width);
                $container.animate({'left':left},500,function() {
                    $frames.eq($frames.length-1).remove();
                    finish();
                });
            }
        };

        $arrows.find('a.prev').on('click',function(event) {
            event.preventDefault()
            go(-1);
        });
        $arrows.find('a.next').on('click',function(event) {
            event.preventDefault()
            go(+1);
        });
    });
});

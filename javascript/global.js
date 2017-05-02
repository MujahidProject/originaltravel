/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/
function onYouTubeIframeAPIReady() {
};
(function( win ){
	var doc = win.document;

	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){

		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				$(window).scrollTop();
			},

			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 15 );

		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );

var OT = {
	w_height: $(window).height(),
	w_width: $(window).width(),
	redraw: function() {},
	relayout: function() {
		var $newElem = $('<p>');
		$('#outer-wrapper').append($newElem).innerHeight();
		$newElem.remove();
	}
};

var mediaQuery = 0;

$(window).resize(function() {
	OT.w_height = $(window).height();
	OT.w_width  = $(window).width();

	var windowWidth = $(window).width();

	if (windowWidth <= 766 && windowWidth > 600 && mediaQuery != 1) {
    	mediaQuery = 1;
    	mediaQueryChanged();
	}
	if (windowWidth <= 600 && windowWidth > 479 && mediaQuery != 2) {
    	mediaQuery = 2;
    	mediaQueryChanged();
	}
	if (windowWidth <= 479 && mediaQuery != 3) {
    	mediaQuery = 3;
    	mediaQueryChanged();
	}
	if (windowWidth > 766 && mediaQuery != 0) {
	    mediaQuery = 0;
	}

});

var _load = function(src) {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.src = src;
	$(document.body).append(s);
};

function mediaQueryChanged() {
    changeTribeQuestionHeight();
}

function changeTribeQuestionHeight() {
    if ($('.tribe-questions .question').length == 0) {
        return false;
    }
    $('.tribe-questions .question').removeAttr('style');
	var maxHeight = 0;
	$('.tribe-questions .question').each(function() {
    	if (maxHeight < $(this).height()) {
        	maxHeight = $(this).height();
    	}
	}).height(maxHeight);
}

$(function() {
    //Enable sub object list sorters
    $('[data-action="sort-sub-objects"]').click(function(event) {
        event.preventDefault();
        $(this).parent().parent().find('.sub-object-list__object').sort(function(a, b) {
            if ($(a).data('sort') < $(b).data('sort')) return -1;
            if ($(a).data('sort') > $(b).data('sort')) return 1;
            return 0;
        }).appendTo($(this).parent().parent());
        $(this).addClass('sub-object-list__header-sort--disabled');
    });

    //Enable tab dropdown selectors
    $('.tabs-dropdown__select').change(function(event) {
        var url = $(this).val();
        window.location.href = url;
    });

    $('#js-tab-select').on('change', function(event) {
        var url = $(this).val();
        window.location.href = url;
    });

	$(document).on('click',function(event) {
		var $el = $(event.srcElement);
		if (!$el.hasClass('cog')) {
			$('div.cog-panel').removeClass('open').hide();
		}
		if (!$el.hasClass('share-link')) {
			$('div.share-popup').hide();
		}
	});

	changeTribeQuestionHeight();

	var $navigationHeader = $('#navigation-header');

	var navOpen = false;

	var $explore = $navigationHeader.find('#explore');

	$explore.on('click',function(e) {
        target = $(this).data('target');
        if (typeof myideas_action_timeout !== 'undefined') {
            clearTimeout(myideas_action_timeout);
        }

		e.preventDefault();

		var $navHeader = $('#navigation-header').toggleClass('active');
		var classname = $navHeader[0].className;
		classname = classname.replace(/target\-([a-z]+)/, '');
		classname = classname.replace(/\s+/g, ' ');
		$navHeader[0].className = classname;

		navOpen = !navOpen;
	});

	if($('body').width() > 600) {
		$explore.hover(function(e) {
			e.preventDefault();
			var $navHeader = $('#navigation-header').addClass('active');

			var classname = $navHeader[0].className;
			classname = classname.replace(/target\-([a-z]+)/, '');
			classname = classname.replace(/\s+/g, ' ');
			$navHeader[0].className = classname;

			navOpen = true;
		});
	}

    if ($('html').hasClass('touch')) {
        $navigationHeader.find('a:not(#explore, .contact)').click(function(e) {
            target = $(this).data('target');
            if (typeof myideas_action_timeout !== 'undefined') {
                clearTimeout(myideas_action_timeout);
            }

            if (target == 'search' ||
                (target == 'destinations' && Modernizr.mq('(min-width: 900px)') && Modernizr.mq('(min-height: 625px)'))) {
                e.preventDefault();
                var $navHeader = $('#navigation-header').addClass('active');

                if (navOpen && $navHeader.hasClass('target-' + target)) {
                    $navigationHeader.trigger('mouseleave');
                    return;
                }

                if(target) {
                    var classname = $navHeader[0].className;
                    classname = classname.replace(/target\-([a-z]+)/, '') + ' target-' + target;
                    classname = classname.replace(/\s+/g, ' ');
                    $navHeader[0].className = classname;
                }

                navOpen = true;
            }
        });
    } else {
        $navigationHeader.find('a:not(#explore, .contact)').hover(function(e) {
            target = $(this).data('target');
            if (typeof myideas_action_timeout !== 'undefined') {
                clearTimeout(myideas_action_timeout);
            }

            e.preventDefault();
            if (target) {
                var $navHeader = $('#navigation-header').addClass('active');
                navOpen = true;
                if ((target != 'destinations' )
                    || (target == 'destinations' && Modernizr.mq('(min-width: 900px)') && Modernizr.mq('(min-height: 625px)'))) {
                    var classname = $navHeader[0].className;
                    classname = classname.replace(/target\-([a-z]+)/, '') + ' target-' + $(this).data('target');
                    classname = classname.replace(/\s+/g, ' ');
                    $navHeader[0].className = classname;
                } else {
                    $navigationHeader.trigger("mouseleave");
                }
            }
        });
    }


	$navigationHeader.on('mouseleave', function(e) {
		if( navOpen ) {
			navOpen = false;
			var $navHeader = $('#navigation-header').removeClass('active');
			var classname = $navHeader[0].className;
			classname = classname.replace(/target\-([a-z]+)/, '');
			classname = classname.replace(/\s+/g, ' ');
			$navHeader[0].className = classname;
		};
	});

    // stop the input from automatically scrolling to the input on focus
    $($navigationHeader.find('input[type="text"]')).bind('focus', function (e) {
        var yPos = window.pageYOffset || document.documentElement.scollTop;
        setTimeout(function() {window.scrollTo(0, yPos);},0);
    });

    $navigationHeader.find('.myideas-action-dropdown a[data-action="close"]').click(function(event) {
        $('#navigation-header').removeClass('target-myideas-action').removeClass('active');
        navOpen = true;
        event.preventDefault();
    });

    $.fn.OTAutocomplete = function(options) {

        var $field_wrap = $(this).parent();

        var $input = $(this),
            $results = $field_wrap.find('.results'),
            $results_ul = $results.find('ul'),
            $hidden = $field_wrap.find('input[type="hidden"]');

        $input.on('keyup', function(search) {

            // Close search if escape key pressed
            if (search.which == 27) {
                $results.hide();
                return;
            }

            // Just for extra protection - don't repeat the search if only going up and down
            if (search.which != 40 && search.which != 38) {

                var val = $(this).val().replace(/^\s+|\s+$/g, '');

                if( !val ) {
                    $results.hide(); return;
                }

                $.getJSON(options.endpoint, { q: val }, function(data) {

                    $results_ul.empty();

                    var show_no_results = true;
                    if( data.payload ) {
                        $.each(data.payload, function(index, value) {
                            show_no_results = false;
                            $results_ul.append('<li class="' + value.class + '"><a data-url="' + value.url + '" href="' + value.url + '" class="js-searchable-item">' + index + '</a></li>');
                        });
                    }
                    $results.show();

                    if( show_no_results ) {
                        $results.hide();
                    }

                });
            }

            // Below zero so first down key hits first element 0
            var focusCount = -1;

            // Pick up the keydowns of UP & DOWN Arrow
            // Residing in the original search so that
            // the keyup and down reset for every new search
            // and the count doesn't get stuck in the last search instance
            $(document).on('keydown', function (e) {

                var focusable = $('.js-searchable-item');
                var focusableCount = focusable.length;

                if ($results_ul.children().length > 0) {

                    // Down
                    if (e.which == 40) {

                        if (focusCount < focusableCount-1) {
                            focusCount++;

                            applyFocus(focusCount);

                            e.preventDefault();
                        }
                    }

                    // Up
                    if (e.which == 38) {

                        if (focusCount > 0) {
                            focusCount--;

                            applyFocus(focusCount);

                            e.preventDefault();
                        }
                    }
                }

                /**
                 * Applies the focus to a focusable element
                 *
                 * @param {Int} position - the specific position of the element in the array
                 */
                function applyFocus(position) {
                    $results.show();

                    var prevElem = $(focusable[position]);

                    focusable.removeClass('focused');
                    prevElem.addClass('focused').focus();

                    $results.show();
                }
            });


        }).on('blur', function() {
            setTimeout(function() {
                //$results.hide();
            }, 200);
        });

        $results.on('click', 'a:not(.disabled)', function(e) {
            e.preventDefault();
            if( '_gaq' in window ) {
                _gaq.push(['_trackEvent', 'Search', 'AutocompleteClick', $(this).data('url'), undefined, true]);
            }
            window.location = $(this).data('url');
        });
    };

	$('#header-search input').OTAutocomplete({
		'endpoint' : '/search/autocomplete'
	});

	/* Home Page */
	(function() {
		var $hero = $('#home-hero');
		if( !$hero.length ) { return; }

		var initialHeight = OT.w_height,
			initialOrient = window.orientation;

		var mobileChrome = 'orientation' in window && (navigator.userAgent.match(/Chrome/) || navigator.userAgent.match(/iPad|iPhone/));

		var innerHeight = 0,
			navHeight = 0,
			fixedlimit = 0;

		var header_margin = parseInt($('#header-wrapper').css('marginTop').replace('px', ''), 10);

		var reduction = 0;
		if( $('html').hasClass('has_cookie_policy_banner') ) {
			reduction = 59;
		}

		var teamimage = false;
		$(window).resize(function() {
   			var new_teamimage = false;
			if( OT.w_width > 480 ) {
				new_teamimage = 'team';
			} else {
				new_teamimage = 'teamsmall';
			}

			if( new_teamimage != teamimage ) {
				teamimage = new_teamimage;
				$('.fact-images').each(function() {
					$(this).css('background-image', 'url(' + $(this).data(teamimage) + ')');
				});
			}


			innerHeight = OT.w_height;
			navHeight = $navigationHeader.height();

			fixedlimit = (innerHeight + header_margin) - navHeight;

			if( mobileChrome ) {
				if( window.orientation != initialOrient ) {
					window.scrollTo(0, window.scrollY - 1 );
					initialOrient = window.orientation;
					initialHeight = OT.w_height;
				}

				$hero.height( initialHeight - reduction);
				return;
			}

			$hero.height( OT.w_height - reduction );
		}).resize();

		var $frameWrapper = $hero.find('.frame-wrapper'),
			$frames = $hero.find('.frame'),
		    $next   = $hero.find('.next'),
		    $prev   = $hero.find('.previous'),
            $pagination = $hero.find('.pagination-dots li'),
		    showing = 0;

		$(window).load(function() {
			$frames.css('opacity', '1');
		});


		var touchMobile = $(document.body).hasClass('touch-mobile');
		var go = function(direction) {
			var target = showing + direction;

			var elem_target = target % $frames.length;

			$frames.eq(showing % $frames.length).show();
			$frames.eq(elem_target).show();

			$frames.eq(elem_target).css('left', (target * 100) + '%');

			showing = target;

            $pagination.removeClass('active').eq( showing % $frames.length ).addClass('active');

			$frameWrapper.css('margin-left', (0 - (target * 100)) + '%');

			var $twoplus = $frames.eq((elem_target + 1) % $frames.length);
			var $oneminus = $frames.eq((elem_target - 1) % $frames.length);

			if( $twoplus.hasClass('lazy-load') ) {
				$twoplus.removeClass('lazy-load');
				$twoplus.css('background-image', 'url(' + $twoplus.data('bg') + ')');
			}

			if( $oneminus.hasClass('lazy-load') ) {
				$oneminus.removeClass('lazy-load');
				$oneminus.css('background-image', 'url(' + $oneminus.data('bg') + ')');
			}
		};

        $pagination.on('click touchend', function() {
            clearTimer();

            if ($(this).hasClass('active')) {
                return false;
            }

            var index = $(this).prevAll().length,
                active = $pagination.filter('.active').prevAll().length;

            go(index - active);

            return false;
        });

		// if( $frames.length > 1 ) {
		// 	$next.show();
		// 	$prev.show();
		// }

		// var hammer = $frameWrapper.hammer();
		// hammer.on('dragright dragleft', function(e) {
		// 	if( e.gesture.distance > 50 && e.gesture.velocityX > 0.5 ) {
		// 		if( e.type == 'dragright' ) { go(-1); }
		// 		else { go(1); }
		// 		e.gesture.stopDetect();
		// 	}
		// 	e.gesture.preventDefault();
		// });


		var timer = null,
		    setTimer = function() {
				timer = setTimeout(function() {
					go(1);
					setTimer();
				}, 8000);
			},
            clearTimer = function() {
                clearTimeout(timer);
            };

		setTimer();

		window.clearSliderTimer = clearTimer;

		$(window).load(function() {
			var $twoplus = $('#home-hero .frame').eq(1);
			if( $twoplus.hasClass('lazy-load') ) {
				$twoplus.removeClass('lazy-load');
				$twoplus.css('background-image', 'url(' + $twoplus.data('bg') + ')');
			}
		});

        $hero.find('.quote-wrapper a').click(function(event) {
            event.stopPropagation();
        });

		$('#scroll-down').css('cursor', 'pointer').click(function() {
			$('body, html').animate({
				scrollTop: OT.w_height - $('#navigation-header').outerHeight()
			});
		});
	})();
	/* End Home Page */

	if( $('#timbest-travel').length ) {
		$('#timbest-travel').modal({
			overlayClose: true,
			closeClass: 'modal-close'
		});
	}

	(function() {
		var $highlights_wrap = $('#navigation-highlights'),
			$highlights      = $highlights_wrap.find('.navigation-highlight');

		var showing = 0;

		var $next = $('<a href="#" class="next"><span>Next</span></a>'),
			$prev = $('<a href="#" class="previous"><span>Previous</span></a>');

		var go = function(direction) {
			$highlights.eq(showing).addClass('navigation-highlight-hidden');

			showing = (showing + direction) % $highlights.length;
			$highlights.eq(showing).removeClass('navigation-highlight-hidden');
		};

		$next.add($prev).click(function(e) {
			e.preventDefault();

			go( $(this).hasClass('next') ? 1 : -1 );
		});

		var hammer = $highlights_wrap.hammer();
		hammer.on('dragright dragleft', function(e) {
			if( e.gesture.distance > 50 && e.gesture.velocityX > 0.5 ) {
				if( e.type == 'dragright' ) { go(-1); }
				else { go(1); }
				e.gesture.stopDetect();
			}
			e.gesture.preventDefault();
		});

		$highlights_wrap.append($prev).append($next);
	})();

	$('.block-scroller').each(function() {
		if( $(this).hasClass('block-force-wide') ) {
			return;
		}

		var grouping = 0,
			groups   = [],
			index    = -1;

		var $this = $(this),
			$inner = $(false),
			$pagination = $(false),
			showing = groups.length,
			blocks_count = $this.find('.block').length;

		var naturally_single = $(this).hasClass('block-scroller-single');

		var regroup = function() {
			groups = [];
			index  = -1;

			var i = -1;

			$this.find('.block').each(function() {
				if( $(this).parent().hasClass('clone') ) { return; }

				i++;
				if( !(i % grouping) ) {
					index++;
					groups[index] = $('<div class="block-page ' + grouping + ' cf ' + index + '">');//.css('left', (index*100) + '%');
				}

				groups[index].append(this);
			});

			$inner = $('<div class="block-inner-wrapper cf">');

            if( groups.length ) { groups[0].addClass('current'); }

			$inner.append(groups);
			var to_remove = $this.children('.block-inner-wrapper').remove();
			$this.prepend( $inner );

			if( !$this.hasClass('block-force-wide') && groups.length > 1 ) {
				$.each( groups.reverse(), function() {
					$inner.prepend( $(this).clone().removeClass('current').addClass('clone') );
				});

				$inner.css('margin-left',  '-' + (groups.length * 100) + '%');

				groups.reverse();
				showing = groups.length;

				$this.find('.next, .previous, .overlay-right, .overlay-left, .pagination-dots').remove();

				$this.append('<a href="#" class="next">Next</a>');
				$this.append('<a href="#" class="previous">Previous</a>');
				$this.append('<div class="overlay-right"></div>');
				$this.append('<div class="overlay-left"></div>');

				$pagination = $(document.createElement('ul')).addClass('pagination-dots').addClass('clickable');

				var p_i = groups.length,
					i = 0;
				for( i=0; i<p_i; i++ ) {
					$pagination.append('<li>' + (i+1) + '</li>');
				}

                if ( 5 < $pagination.children().length ) /*1 == grouping*/
                {
                    $pagination.addClass('numbered').removeClass('clickable');
                    $pagination.append('<span class="total"> of ' + $pagination.children().eq(-1).text() + '</span>');
                }

				$pagination.children().eq(0).addClass('active');

				$this.append($pagination);
			} else if ($this.hasClass('block-force-wide')) {
				$this.html( $inner.html() );
				$this.find('.block-page').removeClass('block-page');
			}
		};

		$(window).resize(function() {
			var l_grouping = 6;
			if( OT.w_width < 766 ) { l_grouping = 4; }
			if( OT.w_width < 480 ) { l_grouping = 1; }

			var divider = 1;

			if( $this.data('height') == 1 ) {
				divider = 2;
			}

			$this.removeClass('block-force-wide');
			if( !naturally_single ) { $this.removeClass('block-scroller-single') };
			if( divider == 1 && blocks_count == (l_grouping / 2) ) {
				divider = 2;
				$this.addClass('block-scroller-single');
			}

			if( l_grouping > 1 && blocks_count == 1 ) {
				$this.addClass('block-force-wide');
			}

			if( l_grouping >= 3 && blocks_count < 3 ) {
				$this.addClass('block-force-wide').addClass('block-force-side');
			}

			l_grouping = Math.ceil(l_grouping / divider);

			if( l_grouping != grouping ) {
				grouping = l_grouping;
				regroup();
			}
		}).resize();

		var target  = 0,
		    $current= groups[0],
			go = function(direction) {
				/*
				 * When adding/removing the animated class call OT.relayout to
				 * trigger a relayout/reflow of the page. This allows us to change
				 * an animated property without getting a transition and then re-add
				 * the transition in
				 */

				var _a = $pagination.find('.active').removeClass('active').prevAll().length;
				$pagination.children('li').eq( (_a + direction) % $pagination.children('li').length ).addClass('active');

				$inner.removeClass('animated');
				OT.relayout();

					if( direction > 0 ) {
						$inner.children().eq(0).appendTo($inner);
						$inner.removeClass('animated').css('margin-left', (0-((showing-1)*100))+'%');
						showing -= 1;
					} else {
						$inner.children().eq(-1).prependTo($inner);
						$inner.removeClass('animated').css('margin-left', (0-((showing+1)*100))+'%');
						showing += 1;
					}

					OT.relayout();
						$inner.addClass('animated');


						OT.relayout();
							target = showing + direction;

							showing = target;
							$current.removeClass('current');

							var elem_index = target;

							$current = $inner.children('.block-page').eq(elem_index).addClass('current');

							OT.relayout();
								$inner.css('margin-left', (0 - (target*100)) + '%');


			};

		$(this).on('click touchend', '.next, .previous, .overlay-right, .overlay-left', function() {
			go( ($(this).hasClass('next') || $(this).hasClass('overlay-right')) ? 1 : -1 );
			return false;
		});

		$(this).on('click touchend', '.pagination-dots li', function() {
			var active = $(this).closest('.pagination-dots').find('.active').prevAll().length;
			var target = $(this).prevAll().length;

			if( target != active ) {
				go( target - active );
			}
		});


		if( $(document.body).hasClass('touch-mobile') ) {
			var hammer = $(this).hammer();
			hammer.on('dragright dragleft', function(e) {
				var dragForce = e.gesture.distance * e.gesture.velocityX;
				if( dragForce > 25 ) {
					if( e.type == 'dragright' ) { go(-1); }
					else { go(1); }
					e.gesture.stopDetect();
				}
				e.gesture.preventDefault();
			});
		}
	});

	$(window).load(function() {
		var st = 0;

		var scrollers = [];

		$('.paralax-holder').each(function() {
			var $this = $(this);

			var $scroller = $(document.createElement('div'));
			$scroller.addClass('paralax-scroller').appendTo( document.body );


			var src = false;
			if( $(document.body).hasClass('touch-mobile') ) {
				src = $(this).data('xtouch');
			}

			if( !src ) {
				src = $(this).data('image');
			}


			var $image = $(document.createElement('img'));
			$image.attr('src', src);
			$image.addClass('paralax-image').appendTo($scroller);

			scrollers.push({
				holder: $this,
				elem: $scroller,
				height: $(this).height(),
				image: $image,
				imgheight: 0,
				offset: {top: 0}
			});
		});

		var parallax = !$(document.body).hasClass('touch-mobile') && !$(document.body).hasClass('no-parallax'),
		    wh = 0;

		var multiplier = 100;
		if( $(document.body).hasClass('beta-parallax-1') ) { multiplier = 200; }
		if( $(document.body).hasClass('beta-parallax-2') ) { multiplier = 100; }
		if( $(document.body).hasClass('beta-parallax-3') ) { multiplier = 100; }
		var recalc = function() {
			$.each(scrollers, function(k, v) {
				if( (st + wh) < this.offset.top ) { return; }
				// if( st > (this.offset.top+435) ) { return; }

				var p=100,
					t= wh + st;

				var s=this.offset.top,
					e=this.offset.top + wh + this.height;

				if( t < s ) { p = 0; }
				else if( t > e ) { p = 1; }
				else {
					p = (t - s) / (e - s);
				}


				p *= ((this.imgheight-this.height)/this.height) * multiplier;
				v.image.css('bottom', p + '%');
			});
		};

		$(window).resize(function() {
			wh = OT.w_height;

			$.each(scrollers, function() {
				this.offset = this.holder.offset();
				this.elem.css('top', this.offset.top);

				if( parallax ) {
					this.elem.imgheight = this.image.height();
				}
			});

			if( parallax ) {
				recalc();
			}
		}).resize();

		if( parallax ) {
			$(window).scroll(function() {
				st = $(this).scrollTop();
				recalc();
			});
		}
	});

	/*
	 * Details left/right column height matching
	 */
	(function() {
		var $details = $('#details');
		if( !$details.length ) { return; }

		var $left = $details.find('.left'),
			$right = $details.find('.right');

		var r_height = $right.outerHeight(),
			l_height = 0;

		var $hidden = false;

		$left.find('h4, p, ul').each(function() {
			l_height += $(this).outerHeight();
			if( l_height > r_height && $(this).is('p') && $(this).nextAll().length ) {
				$hidden = $(this).nextAll().addClass('hidden');

				$(this).append('<br /><a href="#" class="more">Read&nbsp;More</a>');
				return false;
			}
		});

		$left.on('click', '.more', function(e) {
			e.preventDefault();
			$hidden.removeClass('hidden');
			$(this).remove();
		});

	})();

	$('.inline-select').each(function() {
		var $that = $(this),
			$active = $that.find('.active span:first');

		$(this).on('click touchstart', '.options span', function() {
			$active.text( $(this).text() );
			$that.addClass('inline-select-off');

			$(this).
				closest('.fact').
				find('.select-option').
				hide().
				filter('#' + $(this).data('val') ).show();

			setTimeout(function() {
				$that.removeClass('inline-select-off');
			}, 700);
		});
	});

	/*
	 * Gallery handling code
	 */
	(function() {
		var $gallery = $('#gallery');
		if( !$gallery.length ) { return; }

		if( OT.w_width > 767 ) {
			$gallery.parent().removeClass('simple-gallery').addClass('advanced-gallery');
		}

		if( $gallery.parent().hasClass('advanced-gallery') ) {
			_load('https://www.youtube.com/iframe_api');

			var $cover = $('#gallery-cover'),
				$listing = $('#gallery-listing');
				$fullview = $('#gallery-view');

			$('.gallery-page').addClass('cf');

			$fullview.append('<img width="1010" height="629" />');

			var $thumbs = $gallery.find('.gallery-thumb');
			var $pages = $gallery.find('.gallery-page');

			$pages.eq(0).nextAll().addClass('hidden');

			if( $pages.length < 2 ) {
				$('#gallery-listing .gallery-previous, #gallery-listing .gallery-next').hide();
			}

			$gallery.on('click', '.gallery-thumb', function(e) {
                var thumb = $(this);
				$thumbs.removeClass('active');
				thumb.addClass('active');

				if( !thumb.hasClass('launch-video') ) {
					e.preventDefault();
					$fullview
                        .find('img')
                        .attr('src', thumb.attr('href'))
                        .prop('alt', thumb.find('img').prop('alt'));
					$fullview.addClass('gallery-view-full');
				}
			});

			var close = function() {
				$cover.removeClass('visible');
				$gallery.removeClass('visible');
			};

			$gallery.on('click', '.gallery-close', function(e) {
				e.preventDefault();
				close();
			});

			$(document.body).keydown(function(e) {
				if( e.keyCode == 27 ) {
					close();
				}
			});

			$cover.click(function(e) {
				if( e.target && $(e.target).is('#gallery-cover') ) {
					close();
				}
			});

			$gallery.on('click', '.gallery-grid', function(e) {
				e.preventDefault();
				$fullview.removeClass('gallery-view-full');
			});

			$fullview.on('click', '.gallery-next, .gallery-previous', function(e) {
				e.preventDefault();

				var $active = $thumbs.filter('.active'),
					direction = $(this).hasClass('gallery-next') ? 1 : -1;


				var pos = ($thumbs.index($active) + direction) % $thumbs.length;
				if( pos < 0 ) {
					pos = $thumbs.length - 1;
				}
				$thumbs.eq(pos).click();
			});

			var page_index = 0;
			$listing.on('click', '.gallery-next, .gallery-previous', function(e) {
				e.preventDefault();
				var target = page_index + ($(this).hasClass('gallery-next') ? 1 : -1);

				if( target < 0 ) {
					target = $pages.length - 1;
				} else {
					target = target % $pages.length;
				}

				$pages.eq(page_index).addClass('hidden');
				$pages.eq(target).removeClass('hidden');

				$('.gallery-page-wrap').css('margin-left', '-' + (target * 100) + '%');
				page_index = target;
			});

			$('.launch-gallery').click(function(e) {
				e.preventDefault();

				if( !$cover.hasClass('visible') ) {
					if( '_gaq' in window ) {
						_gaq.push(['_trackEvent', 'Gallery', 'Open', window.location.pathname, undefined, true]);
					}
				}

				$cover.addClass('visible');
				$gallery.addClass('visible');
				var href = $(this).data('href');
				if( !href ) {
					href = $(this).attr('href');
				}

				$( href ).click();
			});
		} else {
			var $fullview = $('#gallery-view');
			$fullview.append('<div id="gallery-img"></div>');
			var $thumbs = $gallery.find('.gallery-thumb:not(.gallery-video)');

			var activeIndex = 0;

			$gallery.on('click', '.gallery-thumb', function(e) {
				if( !$fullview.hasClass('visible') ) {
					window.scrollBy(0, -1);
				}
				$fullview.addClass('visible');
				$(document.body).addClass('noscroll');
				$('#gallery-img').css('background-image', 'url(' + $(this).attr('href') + ')' );

				activeIndex = $thumbs.index( this );

				e.preventDefault();
			});
			$gallery.on('click', '.gallery-close', function(e) {
				e.preventDefault();
				$(document.body).removeClass('noscroll');
				$fullview.removeClass('visible');
			});
			var go = function(direction) {
				var target = activeIndex + direction;
				if( target < 0 ) {
					target = $thumbs.length - 1;
				} else {
					target = target % $thumbs.length;
				}

				$thumbs.eq(target).click();
			};
			$gallery.on('click touchstart', '.gallery-previous, .gallery-next', function(e) {
				e.preventDefault();
				go($(this).hasClass('gallery-next') ? 1 : -1);
			});
			var hammer = $fullview.hammer();
			hammer.on('dragright dragleft', function(e) {
                if( e.gesture.distance > 50 && e.gesture.velocityX > 0.5 ) {
                    if( e.type == 'dragright' ) { go(-1); }
                    else { go(1); }
                    e.gesture.stopDetect();
                }
                e.gesture.preventDefault();
            });
		}

        $(document).keydown(function(e) {
            if( !$gallery.is('.visible') ) {
                return;
            }

            if( e.which == 37 || e.which == 39 ) {
                $gallery.find('.gallery-' + (e.which == 37 ? 'previous' : 'next')).click();
                return;
            }
        });
	})();



	$('.launch-video').click(function(e) {
		window.clearSliderTimer();

		var sizes = [
			[560, 315],
			[640, 360],
			[853, 480],
			[1280, 720]
		];

		var iw = OT.w_width,
			ih = OT.w_height,
			minspace = 30;

		var selectedSize = false;
		$.each(sizes, function(index, value) {
			if( (iw > (minspace + value[0])) && (ih > (minspace + value[1])) ) {
				selectedSize = value;
			}
		});

		if( selectedSize ) {
			var $wrap = $('<div>');

			var href = $(this).data('embed');
			href += (href.indexOf("?") > -1 ? '&' : '?') + "autoplay=0&hd=1";
			var $iframe = $('<iframe width="' + selectedSize[0] + '" height="' + selectedSize[1] + '" src="' + href + '&enablejsapi=1" frameborder="0">');
			$wrap.append($iframe);

			if( $(this).hasClass('gallery-thumb') ) {
				var player = new YT.Player($iframe[0]);
				player.addEventListener('onStateChange', function(event) {
					if( event.data == YT.PlayerState.ENDED ) {
						$.modal.close();
						$('#gallery-view .gallery-next').click();
					}
				});
			}

			$.modal.close();

			$.modal($wrap, {
				overlayClose: true
			});

			if( '_gaq' in window ) {
				_gaq.push(['_trackEvent', 'Video', 'Play', href, undefined, true]);
			}

			e.preventDefault();
		}
	});

	$('.generic-slider').each(function() {
		var $frames = $(this).find('.frame');
		$frames.slice(1).addClass('off-right');

		var $pagination = $('<ul>').addClass('pagination-dots').addClass('clickable');
		$frames.each(function(k) {
			$pagination.append('<li>' + (k+1) + '</li>');
		});
		$pagination.children().eq(0).addClass('active');
		$(this).append($pagination);

		var $next = $('<a href="#" class="next">Next</a>'),
			$prev = $('<a href="#" class="previous">Previous</a>');

		$(this).append($next);
		$(this).append($prev);

		var cur = 0;
		var go = function(index) {
			if( index == cur ) { return; }
			index = index % $frames.length;

			$frames.eq(cur).addClass('off-right');
			$frames.eq(index).removeClass('off-right');

			$pagination.children().removeClass('active').eq(index).addClass('active');

			cur = index;
		};
		$(this).on('click touchend', '.next, .previous', function(e) {
			e.preventDefault();
			go( cur + (1 * ($(this).hasClass('next') ? 1 : -1)) );
		});
		$(this).on('click touchend', '.pagination-dots li', function(e) {
			e.preventDefault();
			go( $(this).prevAll().length );
		});

		var $that = $(this);
		$(window).resize(function() {
			var m_height = 0;
			$frames.each(function() {
				m_height = Math.max(m_height, $(this).height());
			});
			$that.height( m_height );
		}).resize();
	});

	$('.image-group').each(function() {
		var $slider = $(this).find('.image-group-inner'),
			$pagination = $(this).find('.pagination-dots li');

		var go = function(index) {
			$slider.css('margin-left', (index * -100) + '%');
		};

		$(this).on('click touchend', '.pagination-dots li', function(e) {
			e.preventDefault();
			$pagination.removeClass('active');
			$(this).addClass('active');
			go( $(this).prevAll().length );
		});

	});

	var $blockdropdowns = $('.block-dropdown').each(function() {
		$(this).children('a').click(function() {
			$(this).next().toggle();
			if( !$(this).hasClass('open') ) {
				$('.block-dropdown a.open').click();
			}
			$(this).toggleClass('open');
		});

		$(this).find('ul ul').each(function() {
			$(this).prepend('<li><a href="#" class="back">Back</a></li>');
		});

		$(this).find('li a').click(function(e) {
			var next = $(this).next();
			if( next.is('ul') ) {
				e.preventDefault();
				$(this).parent().parent().addClass('hidden');
				$(this).next().show();
			} else if( $(this).hasClass('back') ) {
				var $ul = $(this).parent().parent();
				$ul.hide();
				$ul.parent().parent().removeClass('hidden');
			}
		});
	});

	$('.wtg-super').each(function() {
		var $this = $(this);

		var $items = $this.find('.when-to-go-item'),
			$slider = $this.find('.when-to-go-slider');

		var left = -625,
			start_left = -625,
			padding_left = 0;

		$(this).prev().on('click', '.next, .previous', function(e) {
			e.preventDefault();

			if( $(this).hasClass('next') ) {
				$slider.children().eq(0).appendTo($slider);
			} else {
				$slider.children().eq( $items.length - 1 ).prependTo($slider);
			}

			var direction = $(this).hasClass('next') ? -1 : 1;
			left += direction * $items.eq(0).width();
			padding_left += direction * $items.eq(0).width();
			move();
		});

		var move = function() {
			$slider.css('margin-left', left + 'px');

			$slider.css('left', (-1 * padding_left) + 'px');
		};

		var hammer = $this.hammer(),
			reference_left = left,
			reference_padding_left = padding_left;

		var item_width = 320;

		if( $(document.body).hasClass('touch-mobile') || true ) {
			var items_shifted = 0;
			hammer.on('touchstart', function(e) {
				reference_left = left;
				reference_padding_left = padding_left;

				item_width = $items.eq(0).width();
			});

			hammer.on('dragleft dragright', function(e) {
				e.gesture.preventDefault();
				left = reference_left + (e.gesture.deltaX);
				// padding_left = reference_left + (e.gesture.deltaX);

				var diff = (left - start_left) / item_width;

				if( (diff - items_shifted) < -1 ) {
					$slider.children().eq( 0 ).appendTo($slider);
					items_shifted -= 1;
				} else if ((items_shifted - diff) < -1) {
					$slider.children().eq( $items.length - 1 ).prependTo($slider);
					items_shifted += 1;
				}

				padding_left = (items_shifted * item_width);

				move();
			});
		}
	});

	$('.story-super').each(function() {
		var $this = $(this),
			$slider = $this.find('.story-slider');

		var slideTo = function(pos) {
			if( $(document.body).hasClass('touch-mobile') ) {
				$slider.stop().animate({
					marginLeft: '-' + pos + 'px'
				});
			} else {
				$slider.css('margin-left', '-' + pos + 'px' );
			}

			checkYear(pos);
		};

		var checkYear = function(pos) {
			var found = false;
			$slider.find('.story-panel').each(function() {
				if( found ) { return false; }

				var off = $(this).position().left;
				if( (off + $(this).width() ) > pos ) {
					found = true;
					$this.find('.story-years li').removeClass('active');
					$this.find('.story-years li:contains(' + $(this).data('year') + ')').addClass('active');
				}
			});
		};

		$this.find('.story-panel').click(function() {
			var off = $(this).position().left;
			slideTo(off);
		});

		$this.find('.story-years li').click(function() {
			var year = $(this).text();
			var panel = $this.find('.story-panel[data-year="' + year + '"]');
			if( panel.length ) {
				panel.eq(0).click();
			}
		});

		$this.on('click', '.next, .previous', function(e) {
			e.preventDefault();

			var l = $slider.css('margin-left');
			l = Math.abs(parseInt(l.replace('px', '')));

			var t = l + ((OT.w_width/2) * ($(this).hasClass('next') ? 1 : -1));

			var last = $slider.children().last().position();

			if( $(this).hasClass('next') ) {
				t = Math.min(t, last.left);
			}

			slideTo(t)
		});

		var hammer = $this.find('.story-slider').hammer();
		var reference_left = 0;
		if( $(document.body).hasClass('touch-mobile')) {
			hammer.on('touchstart', function(e) {
				var l = $slider.css('margin-left');
				l = parseInt(l.replace('px', ''));
				// l = Math.abs(l);
				reference_left = l;
			});

			hammer.on('dragleft dragright', function(e) {
				e.gesture.preventDefault();
				var left = reference_left + (e.gesture.deltaX);
				$slider.css('margin-left', left + 'px');
				checkYear(Math.abs(left));
			});
		}
	});

	$('form#tribe-signup').on('submit',function(e) {
		e.preventDefault();

		var $form = $(this);
		var data = $form.serialize();
		var $message = $('<p>please wait&hellip;').appendTo($form);
		$message.hide();
		$form.find('fieldset').slideUp(500,function() {
			$message.fadeIn(500);
		});

		var promise = $.post('#', data);
		promise.done(function() {
			$message.html('Thank you, we&rsquo;ll send you some recommendations as soon as possible.');
		});
		promise.fail(function() {
			$message.html('Sorry, there was a problem submitting your request, please try again.');
			$form.find('fieldset').show();
		});
	});


	$(document.body).on('click', 'a', function(e) {
		var href = $(this).attr('href');
		if( href.substr(0, 1) == '#' ) {
			var elem = $(href);
			if( elem.length ) {
				var off = elem.offset();
				$('body, html').animate({
					scrollTop: off.top - 120
				});
				e.preventDefault();
			}
		}
	});


    var addthis_loaded = false,
        loadAddthis = function() {
	        if( !addthis_loaded ) {
		 	    addthis_loaded = true;
		 	}

		 	_load('//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-5284d90e39a30865');
	    };
    $('.share-link').click(function(e) {
	    loadAddthis();
	    $(this).next('div.share-popup').toggle();
	});
    $('[data-action="open-share"]').click(function(e) {
        loadAddthis();
        $(this).next('div').toggle();
    });
	// if( $('.share-open').length ) {
	//     loadAddthis();
	// }

    // if ($('.share-prompt').length) {
    //     loadAddthis();
    // }

	$('select.select-url').change(function() {
		if( $(this).val() ) {
			window.location = $(this).val();
		}
	});


	$(window).load(function() {
		$(window).resize();
		setTimeout(function() { $(window).resize(); }, 500);
		setTimeout(function() { $(window).resize(); }, 2500);


		var lazyImages = [];
		$('.lazy-image').each(function() {
			lazyImages.push({
				elem: $(this),
				offY: $(this).offset().top
			});
		});

		if( lazyImages.length ) {

			$(window).scroll(function() {
				var scroll = $(window).scrollTop() + OT.w_height + OT.w_height;
				$.each( lazyImages, function(k, v) {
					if( scroll < v.offY ) {
						return false;
					}

					v.elem.replaceWith('<img src="' + v.elem.data('src') + '" />');
				});
			});
		}
	});

	$(document.body).on('touchmove', function(e) {
		if( $(document.body).hasClass('noscroll') ) {
			e.preventDefault();
		}
	});

    $('div.myideas-dropdown').each(function() {
        var $slider = $(this);
        var $container,$frames, $arrows, width;

        var go = function(dir) {
            if ($arrows.data('animating')) {
                return false;
            }
            $arrows.data('animating',true);

            var finish = function() {
                $container.css('left',left);
                $frames = $container.find('a');
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
                $frames = $container.find('a');
                $container.css('left',left-width);
                $container.animate({'left':left},500,function() {
                    $frames.eq($frames.length-1).remove();
                    finish();
                });
            }
        };

        $slider.on('init',function() {
        	$container = $slider.find('div.myideas-dropdown-full-list');
        	if ($container.length == 0) {
        		return;
        	}

        	$arrows = $('<div class="arrows"><a href="#" class="prev">Previous</a><a href="#" class="next">Next</a></div').prependTo($slider);
        	$frames = $container.find('a');
        	var $first = $frames.eq(0);
        	width = parseInt($first.css('width'))+parseInt($first.css('margin-left'))+parseInt($first.css('margin-right'));
        	var totalWidth = width*$frames.length;

            if ($slider.width() >= totalWidth) {
                $slider.removeClass('slider');
                $container.css('width','auto');
            } else {
                $slider.addClass('slider');
                $container.css('width',totalWidth+width); // +width = enough room for a spare when animating
            }

	        $arrows.find('a.prev').on('click',function(event) {
	            event.preventDefault()
	            go(-1);
	        });
	        $arrows.find('a.next').on('click',function(event) {
	            event.preventDefault()
	            go(+1);
	        });
        }).trigger('init');
    });
});

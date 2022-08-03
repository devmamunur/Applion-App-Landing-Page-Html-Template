$(function ($) {
    "use strict";


        /* Offset start */
        var $window = $(window),
        $body = $('body');
        // Click To Scroll 

        $(function () {
            $('.navigation .navbar-nav a, .hero-area .links a, .why-use-this-app a').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top -80
                }, 1000);
                event.preventDefault();
            });
        });


        // Navbar collapse on click
         $('.nav-link').on('click', function () {
             $('.navbar-collapse').collapse('hide');
         });

        // bottom to top js start
        var html_body = $('html, body');
        var amountScrolled = 300;
        var bootomclass = $('.bottomtotop');
        bootomclass.hide();
        $window.on('scroll', function () {
            if ($window.scrollTop() > amountScrolled) {
                bootomclass.fadeIn('slow');
            } else {
                bootomclass.fadeOut('slow');
            }
            if ($(".navigation").offset().top > 0) {
                $(".navigation").addClass("stiky-nav");
            } else {
                $(".navigation").removeClass("stiky-nav");
            }
        });

        bootomclass.on('click', function () {
            html_body.animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        //scrollspy menu
        $body.scrollspy({
            target: '#mainmenu',
            offset: 100
        });
        
    //  preloader js start 
    $window.on('load', function () {
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {});
    }, 600);
    });

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        //   magnific popup activation
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });
        $('.img-popup').magnificPopup({
            type: 'image'
        });

        //How It Work Slider

        $('.how-work-slider-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: false,
            arrows: true,
            asNavFor: '.how-work-slider'
        });
        $('.how-work-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.how-work-slider-img',
            vertical: true,
            arrows: false,
            verticalSwiping: true,
            dots: false,
            centerMode: false,
            infinite: false,
            centerPadding: '0px',
            focusOnSelect: true
        });


        var swiper = new Swiper('.swiper-container.two', {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
            autoplay: {
                delay: 3000,
            },
            speed: 1000,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows : false,
            }
        });

        // Feature Slider
        var $feature_slider = $('.feature-slider');
            $feature_slider.owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            margin:30,
            autoplay: false,
            center: true,
            autoplayTimeout: 2500,
            smartSpeed: 2000,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                576: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                992: {
                    items: 3,
                    nav: false
                },
                1200: {
                    items: 3,
                    nav: false
                },
                1300: {
                    items:3
                }
            }
        });

        // testimonial-slider 
        var $testimonialSlider = $('.testimonial-slider');
            $testimonialSlider.owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: true,
            dots:false,
            autoplayTimeout: 6000,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                576: {
                    items: 1,
                    nav: false
                },
                950: {
                    items: 1,
                    nav: false
                },
                960: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 1
                }
            }
        });

        // team_slider
        var $team_slider = $('.team_slider');
            $team_slider.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin:30,
            autoplay: false,
            autoplayTimeout: 8000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items:3
                }
            }
        });

        // blog-slider
        var $blog_slider = $('.blog-slider');
            $blog_slider.owlCarousel({
            loop: true,
            nav: false,
            dots:false,
            margin:30,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        // partner-slider
        var $brand_slider = $('.brand-slider');
            $brand_slider.owlCarousel({
            loop: true,
            nav: false,
            dots:false,
            margin:30,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 2
                },
                450: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });

    // Feature Slider
    var $twitte_slider = $('.twitte-slider');
    $twitte_slider.owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    margin:30,
    autoplay: true,
    center: true,
    autoplayTimeout: 2500,
    smartSpeed: 1500,
    responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            }
            }
        });

});

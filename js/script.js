(function(b) {
    b(window).on("load", function() {
        b(".throbber").fadeOut();
        b(".throbbers_loader").delay(500).slideUp("slow");
        if (!(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            skrollr.init({
                smoothScrolling: false,
                mobileDeceleration: 0.004,
                forceHeight: false
            });
            b(".player").each(function() {
                b(this).YTPlayer()
            })
        } else {
            b("html").addClass("no-Skrollr");
            b("div").removeClass("animate");
            b(".player").each(function() {
                b(this).addClass("player-background")
            });
            b(".section-video-controls").css({
                display: "none"
            })
        }

        function initReveal() {

            //************************ reveal on load ********************************

            var slidetitle = new RevealFx(document.querySelector('.text-slide-title'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            slidetitle.reveal();

            var slideaddtitle = new RevealFx(document.querySelector('.text-slide-additional-title'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            slideaddtitle.reveal();

            var slidebtn = new RevealFx(document.querySelector('.reveal-btn'), {
                revealSettings: {
                    bgcolor: '#9C27B0',
                    delay: 300,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            slidebtn.reveal();
        }

        //************************ Example 2 - reveal on scroll ********************************
        var scrollElemToWatch_1 = document.getElementById('about'),
            watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),
            rev3 = new RevealFx(scrollElemToWatch_1, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev4 = new RevealFx(document.querySelector('#about .big-heading'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev5 = new RevealFx(document.querySelector('#about p'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_2 = document.getElementById('services'),
            watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
            rev6 = new RevealFx(scrollElemToWatch_2, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev7 = new RevealFx(document.querySelector('#services .col-sm-12 .section-heading'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev8 = new RevealFx(document.querySelector('.service-3 #tab1'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_3 = document.getElementById('skills'),
            watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
            rev9 = new RevealFx(scrollElemToWatch_3, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev10 = new RevealFx(document.querySelector('#skills .col-sm-12'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_4 = document.getElementById('works'),
            watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -300),
            rev11 = new RevealFx(scrollElemToWatch_4, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev12 = new RevealFx(document.querySelector('#works .heading'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev13 = new RevealFx(document.querySelector('#works .additional-heading'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_5 = document.getElementById('portfolio-page'),
            watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -300),
            rev14 = new RevealFx(scrollElemToWatch_5, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev15 = new RevealFx(document.querySelector('#portfolio-11'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev16 = new RevealFx(document.querySelector('#portfolio-12'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev17 = new RevealFx(document.querySelector('#portfolio-13'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_6 = document.getElementById('portfolio-13'),
            watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),
            rev18 = new RevealFx(document.querySelector('#portfolio-16'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev19 = new RevealFx(document.querySelector('#portfolio-14'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_7 = document.getElementById('portfolio-17'),
            watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -300),
            rev20 = new RevealFx(document.querySelector('#portfolio-17'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev21 = new RevealFx(document.querySelector('#portfolio-15'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_8 = document.getElementById('portfolio-22'),
            watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -300),
            rev22 = new RevealFx(document.querySelector('#portfolio-21'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev23 = new RevealFx(document.querySelector('#portfolio-22'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev24 = new RevealFx(document.querySelector('#portfolio-23'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_9 = document.getElementById('portfolio-19'),
            watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -300),
            rev25 = new RevealFx(document.querySelector('#portfolio-18'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev26 = new RevealFx(document.querySelector('#portfolio-19'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev27 = new RevealFx(document.querySelector('#portfolio-20'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_10 = document.getElementById('who'),
            watcher_10 = scrollMonitor.create(scrollElemToWatch_10, -300),
            rev28 = new RevealFx(scrollElemToWatch_10, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev29 = new RevealFx(document.querySelector('#who .big-heading'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev30 = new RevealFx(document.querySelector('#who p'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_11 = document.getElementById('client'),
            watcher_11 = scrollMonitor.create(scrollElemToWatch_11, -300),
            rev31 = new RevealFx(scrollElemToWatch_11, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_12 = document.getElementById('blog'),
            watcher_12 = scrollMonitor.create(scrollElemToWatch_12, -200),
            /*rev32 = new RevealFx(scrollElemToWatch_12, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),*/
            rev33 = new RevealFx(document.querySelector('#blog .heading.black'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev34 = new RevealFx(document.querySelector('#blog .additional-heading'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_13 = document.getElementById('contact-bar'),
            watcher_13 = scrollMonitor.create(scrollElemToWatch_13, -300),
            rev35 = new RevealFx(scrollElemToWatch_13, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev36 = new RevealFx(document.querySelector('#queries'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev37 = new RevealFx(document.querySelector('#call'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev38 = new RevealFx(document.querySelector('#office'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 750,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            scrollElemToWatch_14 = document.getElementById('contact'),
            watcher_14 = scrollMonitor.create(scrollElemToWatch_14, -300),
            rev39 = new RevealFx(scrollElemToWatch_14, {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev40 = new RevealFx(document.querySelector('#map_canvas'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev41 = new RevealFx(document.querySelector('#contact .heading'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev42 = new RevealFx(document.querySelector('#contact .additional-heading'), {
                revealSettings: {
                    bgcolor: '#7f40f1',
                    direction: 'lr',
                    delay: 750,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev43 = new RevealFx(document.querySelector('#contactForm'), {
                revealSettings: {
                    bgcolor: '#fcf652',
                    direction: 'lr',
                    delay: 750,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });

        watcher_1.enterViewport(function() {
            rev3.reveal();
            setTimeout(function() {
                $(".about_bg").css("background-image", "url(https://lorenzgillisjans.com/img/about_bg.jpg)");
            }, 200);
            rev4.reveal();
            rev5.reveal();
            watcher_1.destroy();
        });
        watcher_2.enterViewport(function() {
            rev6.reveal();
            setTimeout(function() {
                $(".service-3_bg").css("background-image", "url(https://lorenzgillisjans.com/img/service-3_bg.jpg)");
            }, 200);
            rev7.reveal();
            rev8.reveal();
            watcher_2.destroy();
        });
        watcher_3.enterViewport(function() {
            rev9.reveal();
            setTimeout(function() {
                $(".skills_bg").css("background-image", "url(https://lorenzgillisjans.com/img/skills_bg.jpg)");
            }, 200);
            rev10.reveal();
            watcher_3.destroy();
        });

        watcher_4.enterViewport(function() {
            rev11.reveal();
            rev12.reveal();
            rev13.reveal();
            watcher_4.destroy();
        });

        watcher_5.enterViewport(function() {
            rev14.reveal();
            rev15.reveal();
            rev16.reveal();
            rev17.reveal();
            watcher_5.destroy();
        });

        watcher_6.enterViewport(function() {
            rev18.reveal();
            rev19.reveal();
            watcher_6.destroy();
        });

        watcher_7.enterViewport(function() {
            rev20.reveal();
            rev21.reveal();
            watcher_7.destroy();
        });

        watcher_8.enterViewport(function() {
            rev22.reveal();
            rev23.reveal();
            rev24.reveal();
            watcher_8.destroy();
        });

        watcher_9.enterViewport(function() {
            rev25.reveal();
            rev26.reveal();
            rev27.reveal();
            watcher_9.destroy();
        });

        watcher_10.enterViewport(function() {
            rev28.reveal();
            setTimeout(function() {
                $(".about-4_bg").css("background-image", "url(https://lorenzgillisjans.com/img/about-4_bg.jpg)");
            }, 200);
            rev29.reveal();
            rev30.reveal();
            watcher_10.destroy();
        });

        watcher_11.enterViewport(function() {
            rev31.reveal();
            setTimeout(function() {
                $(".client_bg").css("background-image", "url(https://lorenzgillisjans.com/img/client_bg.jpg)");
            }, 200);
            watcher_11.destroy();
        });

        watcher_12.enterViewport(function() {
            //rev32.reveal();
            rev33.reveal();
            rev34.reveal();
            watcher_12.destroy();
        });

        watcher_13.enterViewport(function() {
            rev35.reveal();
            rev36.reveal();
            rev37.reveal();
            rev38.reveal();
            watcher_13.destroy();
        });

        watcher_14.enterViewport(function() {
            rev39.reveal();
            rev40.reveal();
            rev41.reveal();
            rev42.reveal();
            rev43.reveal();
            watcher_14.destroy();
        });

        // Activate!!
        setTimeout(initReveal(), 500);
    });
    b(function() {
        b("input,textarea").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function(a, f, e) {},
            submitSuccess: function(a, i) {
                i.preventDefault();
                var l = b("input#name").val();
                var m = b("input#email").val();
                var n = b("input#website").val();
                var j = b("textarea#message").val();
                var k = l;
                if (k.indexOf(" ") >= 0) {
                    k = l.split(" ").slice(0, -1).join(" ")
                }
                b.ajax({
                    url: "https://www.lorenzgillisjans.com/contact/index.php",
                    type: "POST",
                    data: {
                        name: l,
                        website: n,
                        email: m,
                        message: j
                    },
                    cache: false,
                    success: function() {
                        b("#success").html("<div class='alert alert-success'>");
                        b("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        b("#success > .alert-success").append("<strong>Your message has been sent. </strong>");
                        b("#success > .alert-success").append("</div>");
                        b("#contactForm").trigger("reset")
                    },
                    error: function() {
                        b("#success").html("<div class='alert alert-danger'>");
                        b("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        b("#success > .alert-danger").append("<strong>Sorry " + k + ", it seems that my mail server is not responding. Please try again later!");
                        b("#success > .alert-danger").append("</div>");
                        b("#contactForm").trigger("reset")
                    },
                })
            },
            filter: function() {
                return b(this).is(":visible")
            },
        });
        b('a[data-toggle="tab"]').click(function(a) {
            a.preventDefault();
            b(this).tab("show")
        })
    });
    b("#name").on("focus", function() {
        b("#success").html("")
    });
    jQuery(document).on("ready", function() {
        var R = navigator.userAgent.indexOf("Chrome") > -1;
        var H = navigator.userAgent.indexOf("MSIE") > -1 || navigator.appVersion.indexOf("Trident/") > 0;
        var N = navigator.userAgent.indexOf("Firefox") > -1;
        var X = navigator.userAgent.indexOf("Safari") > -1;
        var T = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
        if ((R) && (X)) {
            X = false
        }
        if (X) {
            b("html").addClass("safari")
        } else {
            if (H) {
                b("html").addClass("ie")
            } else {
                if (N) {
                    b("html").addClass("firefox")
                } else {
                    if (T) {
                        b("html").addClass("opera")
                    } else {
                        b("html").addClass("chrome")
                    }
                }
            }
        }
        b(".animate").each(function() {
            b(this).one("inview", function(c) {
                b(this).addClass("animated").css("visibility", "visible")
            })
        });
        b("#back-to-top").fadeOut(Z);
        var W = 220;
        var Z = 1000;
        b(window).on("scroll", function() {
            if (b(this).scrollTop() > W) {
                b(".back-to-top").fadeIn(Z)
            } else {
                b(".back-to-top").fadeOut(Z)
            }
        });
        b("#back-to-top").on("click", function(c) {
            c.preventDefault();
            b("html, body").animate({
                scrollTop: 0
            }, Z);
            return false
        });
        b(".page-scroll a").on("click", function(d) {
            var c = b(this);
            b("html, body").stop().animate({
                scrollTop: b(".header-sticky").width() ? b(c.attr("href")).offset().top - 80 : b(c.attr("href")).offset().top,
            }, 1500, "easeInOutExpo");
            d.preventDefault();
            return false
        });
        var M = b("nav li").children();
        var Q = [];
        for (var i = 0; i < M.length; i++) {
            var S = M[i];
            var F = b(S).attr("href");
            Q.push(F)
        }
        b(window).on("scroll", function() {
            var f = b(".header-sticky").width() ? b(window).scrollTop() + 80 : b(window).scrollTop();
            var d = b(window).height();
            var e = b(document).height();
            for (var k = 0; k < Q.length; k++) {
                var l = Q[k];
                var j = b(l);
                if (!j.length) {
                    return
                }
                var h = j.offset().top;
                var c = b(l).height();
                if (f >= h && f < (h + c)) {
                    b("a[href='" + l + "']").addClass("active")
                } else {
                    b("a[href='" + l + "']").removeClass("active")
                }
            }
            if (f + d == e) {
                if (!b("nav li:last-child a").hasClass("active")) {
                    var g = b(".active").attr("href");
                    b("a[href='" + g + "']").removeClass("active");
                    b("nav li:last-child a").addClass("active")
                }
            }
        });
        b(".agni-slides").each(function() {
            if (!(/Android/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
                Hammer(b(this)[0]).on("swipeleft", function(c) {
                    b(this).data("superslides").animate("next")
                });
                Hammer(b(this)[0]).on("swiperight", function(c) {
                    b(this).data("superslides").animate("prev")
                })
            }
            b(this).superslides({
                animation_speed: 700,
                animation_easing: "easeOutQuad",
                animation: "slide",
                pagination: true,
                play: 0
            });
            b(this).find(".slide-title").each(function() {
                slideAnimation(".slide-title", "fadeInDown")
            })
        });
        b(".agni-video").each(function() {
            b(this).superslides({
                animation_speed: 700,
                animation: "fade",
                play: 7000
            })
        });
        b(".text-rotator").each(function() {
            b(this).find(".rotate").textrotator({
                separator: "|",
                speed: 4000
            })
        });
        if (b(".header-navigation-menu.transparent-nav-menu").width()) {
            var W = 330;
            b(".header-navigation-menu").each(function() {
                (b(window).scrollTop() > W) ? b(this).removeClass("transparent-nav-menu"): b(this).addClass("transparent-nav-menu")
            });
            b(".header-navigation-menu.change-style").each(function() {
                (b(window).scrollTop() > W) ? b(this).removeClass("dynamic-nav-menu"): b(this).addClass("dynamic-nav-menu")
            });
            b(window).on("scroll", function() {
                b(".header-navigation-menu").each(function() {
                    (b(window).scrollTop() > W) ? b(this).removeClass("transparent-nav-menu"): b(this).addClass("transparent-nav-menu")
                });
                b(".header-navigation-menu.change-style").each(function() {
                    (b(window).scrollTop() > W) ? b(this).removeClass("dynamic-nav-menu"): b(this).addClass("dynamic-nav-menu")
                })
            })
        }
        b(".fullscreen-nav-menu .tab-nav-menu-content").parent(".tab-nav-menu").slideUp(400);
        b(".tab-nav-menu-content li:not('.menu-item-has-children') a, .toggle-nav-menu").on("click", function(c) {
            c.preventDefault();
            b(".toggle-nav-menu").find(".burg").toggleClass("activeBurg")
        });
        b(".toggle-nav-menu").on("click", function(c) {
            c.preventDefault();
            if (b(".tab-nav-menu-content").is(":hidden")) {
                b(".tab-nav-menu-content").slideDown(400)
            } else {
                b(".tab-nav-menu-content").slideUp(400)
            }
            if (b(".fullscreen-nav-menu .tab-nav-menu-content").is(":hidden")) {
                b(".fullscreen-nav-menu .tab-nav-menu-content").parent(".tab-nav-menu").slideDown(400);
                b(".fullscreen-nav-menu .tab-nav-menu-content").fadeIn("slow")
            } else {
                b(".fullscreen-nav-menu .tab-nav-menu-content").parent(".tab-nav-menu").slideUp(400);
                b(".fullscreen-nav-menu .tab-nav-menu-content").fadeOut("fast")
            }
        });
        b(".tab-nav-menu-content li:not('.menu-item-has-children') a").on("click", function(c) {
            if (b(".tab-nav-menu-content").is(":hidden")) {
                b(".tab-nav-menu-content").slideDown(400)
            } else {
                b(".tab-nav-menu-content").slideUp(400)
            }
            if (b(".fullscreen-nav-menu .tab-nav-menu-content").is(":hidden")) {
                b(".fullscreen-nav-menu .tab-nav-menu-content").parent(".tab-nav-menu").slideDown(400);
                b(".fullscreen-nav-menu .tab-nav-menu-content").fadeIn("slow")
            } else {
                b(".fullscreen-nav-menu .tab-nav-menu-content").parent(".tab-nav-menu").slideUp(400);
                b(".fullscreen-nav-menu .tab-nav-menu-content").fadeOut("fast")
            }
        });
        b(".tab-nav-menu-content .menu-item-has-children >a").append("<a class=indicator href=#><i></i></a>");
        b(".tab-nav-menu-content .menu-item-has-children >a .indicator i").addClass("ion-ios-plus-empty");
        b(".tab-nav-menu-content .menu-item-has-children a.indicator").click(function(c) {
            c.preventDefault();
            c.stopImmediatePropagation();
            if (b(this).parent(" a ").parent(" li ").children(".sub-menu").is(":hidden")) {
                b(this).parent(" a ").parent(" li ").children(".sub-menu").slideDown(400)
            } else {
                b(this).parent(" a ").parent(" li ").children(".sub-menu").slideUp(400)
            }
        });
        b(".nav-menu-content a").on("click", function(c) {
            b(this).addClass("active");
            b(this).parent().siblings().find("a").removeClass("active");
            return false
        });
        b(".section-video-container").each(function() {
            b(this).siblings("div").find(".command-play").click(function(c) {
                c.preventDefault();
                b(this).parents("div").find("#bgndVideo-2").playYTP();
                b(this).css({
                    display: "none"
                });
                b(this).siblings(".command-pause").css({
                    display: "block"
                })
            });
            b(this).siblings("div").find(".command-pause").click(function(c) {
                c.preventDefault();
                b(this).parents("div").find("#bgndVideo-2").pauseYTP();
                b(this).css({
                    display: "none"
                });
                b(this).siblings(".command-play").css({
                    display: "block"
                })
            })
        });
        b.fn.countUp = function(c) {
            b(".count").each(function() {
                var e = {
                        startVal: 0,
                        endVal: b(this).attr("data-count"),
                        decimals: 0,
                        duration: 1.5,
                        options: {
                            useEasing: true,
                            useGrouping: true
                        }
                    },
                    f = b.extend({}, e, f);
                var d = new countUp(this, f.startVal, f.endVal, f.decimals, f.duration, f.options);
                b(this).one("inview", function(g) {
                    d.start()
                })
            })
        };
        b(".count").each(function() {
            b(this).countUp()
        });
        b(".portfolio-page").each(function() {
            b(this).magnificPopup({
                delegate: ".portfolio-post:not(.filterhide) a.portfolio-single-link",
                closeMarkup: '<div class="portfolio-navigation navigation"><div class="portfolio-nav-links container"><a title="%title%" href="#" class="mfp-close"><i class="ion-ios-close-empty mfp-close"></i></a></div></div>',
                closeOnBgClick: false,
                closeBtnInside: true,
                type: "ajax",
                cursor: "mfp-ajax-cur",
                fixedBgPos: true,
                fixedContentPos: true,
                overflowY: "scroll",
                mainClass: "mfp-fade mfp-main",
                alignTop: true,
                preloader: true,
                tLoading: '<div class="throbbers_loader"><div class="throbber"></div></div>',
                gallery: {
                    enabled: true,
                    preload: [0, 2],
                    navigateByImgClick: true,
                    arrowMarkup: '<a title="%title%" href="#" class="mfp-arrow mfp-arrow-%dir%"></a>',
                    tPrev: "Previous (Left arrow key)",
                    tNext: "Next (Right arrow key)",
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                callbacks: {
                    beforeOpen: function() {
                        b(".portfolio-thumbnail").each(function() {
                            b(this).css({
                                overflow: "visible"
                            })
                        })
                    },
                    open: function() {
                        b(".portfolio-navigation").hide()
                    },
                    close: function() {},
                    afterClose: function() {
                        b(".portfolio-thumbnail").each(function() {
                            b(this).css({
                                overflow: "hidden"
                            })
                        })
                    },
                    parseAjax: function(c) {
                        c.data = b(c.data).find(".portfolio-single-content")
                    },
                    ajaxContentAdded: function() {
                        b(".portfolio-navigation").delay(500).show(500);
                        b(".portfolio-navigation").children(".portfolio-nav-links").prepend(this.arrowLeft);
                        b(".portfolio-navigation").children(".portfolio-nav-links").append(this.arrowRight);
                        b(".portfolio-navigation").each(function() {
                            b(this).find("a").click(function(c) {
                                c.preventDefault()
                            })
                        });
                        b(".post-sharing-buttons").each(function() {
                            b(this).find("a").click(function(c) {
                                c.preventDefault();
                                newPopup(b(this).attr("href"))
                            })
                        });
                        b(".custom-slider").each(function() {
                            b(this).owlCarousel({
                                autoplay: true,
                                autoplayTimeout: 4000,
                                smartSpeed: 500,
                                loop: true,
                                dots: false,
                                items: 1,
                                nav: true,
                                navText: ['<i class="ion-ios-arrow-left small-icon">', '<i class="ion-ios-arrow-right small-icon">']
                            })
                        })
                    }
                }
            })
        });
        b(".custom-image").magnificPopup({
            type: "image",
            mainClass: "mfp-img-mobile",
            showCloseBtn: false,
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out"
            }
        });
        b(".custom-gallery").each(function() {
            b(this).magnificPopup({
                delegate: "a",
                type: "image",
                mainClass: "mfp-img-mobile mfp-image-popup",
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: false
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: "ease-in-out"
                }
            })
        });
        b("#filters a").on("click", function(c) {
            c.preventDefault();
            b(this).addClass("active");
            b(this).parent().siblings().find("a").removeClass("active");
            return false
        });
        var K = b(".portfolio-page");
        b(".filter a").on("click", function() {
            var c = b(this).attr("data-filter");
            K.isotope({
                itemSelector: ".portfolio-thumbnail",
                filter: c
            });
            b(".portfolio-thumbnail").each(function() {
                if (!b(this).hasClass(c.replace(".", ""))) {
                    b(this).addClass("filterhide")
                } else {
                    b(this).removeClass("filterhide")
                }
            });
            return false
        });
        K.isotope();
        K.imagesLoaded(function() {
            K.isotope("layout")
        });
        b(".progress-bar-animate").each(function() {
            if (b(this).attr("role") == "progressbar") {
                b(this).one("inview", function(c) {
                    b(this).css({
                        width: b(this).attr("aria-valuenow") + "%"
                    })
                })
            }
        });
        b(".custom-slider").each(function() {
            b(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 500,
                loop: true,
                dots: false,
                items: 1,
                nav: true,
                navText: ['<i class="ion-ios-arrow-left small-icon">', '<i class="ion-ios-arrow-right small-icon">']
            })
        });
        b(".carousel-clients").each(function() {
            b(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                loop: true,
                margin: 60,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            })
        });
        b(".carousel-team").each(function() {
            b(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                loop: true,
                margin: 60,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            })
        });
        b(".carousel-team-2").each(function() {
            b(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                loop: true,
                margin: 60,
                responsive: {
                    0: {
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
                    }
                }
            })
        });
        b(".carousel-testimonials").each(function() {
            b(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 700,
                dots: false,
                loop: true,
                items: 1
            })
        });
        b(".blog-masonry").each(function() {
            var c = b(this).imagesLoaded(function() {
                c.isotope({
                    itemSelector: ".blog-content",
                    layoutMode: "masonry"
                })
            })
        });
        b(".post-details").each(function() {
            b(this).on({
                mouseenter: function() {
                    b(this).siblings(".post-thumbnail").addClass("post-thumbnail-hovered")
                },
                mouseleave: function() {
                    b(this).siblings(".post-thumbnail").removeClass("post-thumbnail-hovered")
                }
            })
        });
        b(".post-sharing-buttons").each(function() {
            b(this).find("a").on("click", function(c) {
                c.preventDefault();
                newPopup(b(this).attr("href"))
            })
        });
        b("body").on("input propertychange", ".floating-label-form-group", function(c) {
            b(this).toggleClass("floating-label-form-group-with-value", !!b(c.target).val())
        }).on("focus", ".floating-label-form-group", function() {
            b(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function() {
            b(this).removeClass("floating-label-form-group-with-focus")
        });
        if (b("#map_canvas").width()) {
            var E = b("#map_canvas").attr("data-map-style");
            var D = "50.958618";
            var P = "4.349209";
            var G = "Low_res";
            var I = "Eversemsesteenweg 59, 1852 Grimbergen, Belgium";
            var L = "+32 479 48 65 32";
            var O = "Click here to get directions on Google Maps";
            var V = D;
            var J = P;
            var a = "<div><h6>" + G + "</h6><p>" + I + "</p><p>" + L + '</p><a href="https://www.google.com/maps/place/Eversemsesteenweg+59,+1852+Meise,+Belgi%C3%AB/@50.9587501,4.3483339,17z/data=!3m1!4b1!4m2!3m1!1s0x47c3e9961f476d77:0xb4bfe650fd0bc1d0" target="_blank" class="link">' + O + "</a></div>";
            var Y = "img/marker.png";
            var C = G;
            var U = "map_canvas";
            initializeMap(V, J, a, Y, C, U, E)
        }
    })
})(jQuery);

function slideAnimation(d, c) {
    $element = $(d);
    $(document).on("animating.slides", function() {
        $element.addClass("animate");
        window.setTimeout(function() {
            $element.removeClass("animate")
        }, 900)
    });
    $(document).on("animated.slides", function() {
        $element.addClass("animated " + c);
        window.setTimeout(function() {
            $element.removeClass("animated")
        }, 1000)
    })
}

function newPopup(b) {
    popupWindow = window.open(b, "popUpWindow", "height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes")
}

function initializeMap(G, s, x, J, y, F, z) {
    if (z == "2") {
        var C = [{
            stylers: [{
                hue: "#ff1a00"
            }, {
                invert_lightness: true
            }, {
                saturation: -100
            }, {
                lightness: 33
            }, {
                gamma: 0.5
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#2D333C"
            }]
        }]
    } else {
        var C = [{
            featureType: "landscape",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            stylers: [{
                hue: "#00aaff"
            }, {
                saturation: -100
            }, {
                gamma: 2.15
            }, {
                lightness: 12
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                visibility: "on"
            }, {
                lightness: 24
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 57
            }]
        }]
    }
    var E = new google.maps.LatLng(G, s);
    var I = $(document).width() > 480 ? true : false;
    var w = {
        zoom: 16,
        center: E,
        mapTypeControl: false,
        scrollwheel: false,
        draggable: true,
        mapTypeControlOptions: {
            mapTypeIds: ["Styled"]
        },
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: "Styled",
    };
    var u = new google.maps.Map(document.getElementById(F), w);
    var t = new google.maps.StyledMapType(C, {
        name: "Styled"
    });
    u.mapTypes.set("Styled", t);
    var H = x;
    var A = new google.maps.InfoWindow({
        content: H
    });
    var v = new google.maps.MarkerImage(J, new google.maps.Size(80, 80), new google.maps.Point(0, 0));
    var B = new google.maps.LatLng(G, s);
    var D = new google.maps.Marker({
        position: B,
        map: u,
        icon: v,
        title: y,
        zIndex: 3
    });
    google.maps.event.addListener(D, "click", function() {
        A.open(u, D)
    })
};
// Trigger block reveal
(function() {
    /*

    //************************ Example 3 - api examples ********************************

    var rev12 = new RevealFx(document.querySelector('#rev-12')),
        trigger_1 = document.getElementById('rev-trigger-1'),
        trigger_2 = document.getElementById('rev-trigger-2'),
        trigger_3 = document.getElementById('rev-trigger-3'),
        trigger_4 = document.getElementById('rev-trigger-4'),
        trigger_5 = document.getElementById('rev-trigger-5');

    trigger_1.addEventListener('click', function() {
        rev12.reveal({
            bgcolor: '#c1c0b7',
            duration: 300,
            onStart: function(contentEl, revealerEl) {
                contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        });
    });

    trigger_2.addEventListener('click', function() {
        rev12.reveal({
            bgcolor: '#c1c0b7',
            duration: 300,
            direction: 'rl',
            onStart: function(contentEl, revealerEl) {
                contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        });
    });

    trigger_3.addEventListener('click', function() {
        rev12.reveal({
            bgcolor: '#c1c0b7',
            easing: 'easeOutExpo',
            direction: 'bt',
            onStart: function(contentEl, revealerEl) {
                anime.remove(contentEl);
                contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
                anime({
                    targets: contentEl,
                    duration: 800,
                    delay: 80,
                    easing: 'easeOutExpo',
                    translateY: [40, 0],
                    opacity: [0, 1]
                });
            }
        });
    });

    trigger_4.addEventListener('click', function() {
        rev12.reveal({
            bgcolor: '#c1c0b7',
            duration: 300,
            direction: 'tb',
            onStart: function(contentEl, revealerEl) {
                anime.remove(contentEl);
                contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
                anime({
                    targets: contentEl,
                    duration: 500,
                    delay: 50,
                    easing: 'easeOutBounce',
                    translateY: [-40, 0],
                    opacity: {
                        value: [0, 1],
                        duration: 300,
                        easing: 'linear'
                    }
                });
            }
        });
    });

    trigger_5.addEventListener('click', function() {
        rev12.reveal({
            bgcolor: '#7f40f1',
            duration: 400,
            easing: 'easeInOutQuad',
            onStart: function(contentEl, revealerEl) {
                anime.remove(contentEl);
                contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                anime({
                    targets: contentEl,
                    duration: 800,
                    delay: 80,
                    easing: 'easeOutExpo',
                    scale: [0.5, 1],
                    opacity: [0, 1]
                });
            }
        });
    });*/
})();

// Coverr / Background video

//jQuery is required to run this code
$(document).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function() {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function() {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({
                'margin-top': 0,
                'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
            });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

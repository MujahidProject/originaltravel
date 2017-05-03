$(function() {
    $(document).on("click", ".d3r-show, .d3r-hide", function(t) {
        var a, e = $(this);
        if (e.is("a") && t.preventDefault(),
        e.data("target") ? a = $("#" + e.data("target")) : e.attr("href") && "#" == e.attr("href")[0] && (a = $(e.attr("href"))),
        a.length) {
            var o = e.hasClass("d3r-hide");
            a[o ? "toggleClass" : "addClass"]("d3r-shown"),
            e[o ? "toggleClass" : "addClass"]("d3r-active")
        }
        if (a.hasClass("d3r-shown") && e.hasClass("d3r-autoclose")) {
            var r = function(t) {
                $.contains(a[0], t.target) || (a.hasClass("d3r-shown") && (t.preventDefault(),
                a.removeClass("d3r-shown"),
                e.removeClass("d3r-active")),
                $(document).off("click", r))
            };
            $(document).on("click", r)
        }
    }),
    $(document).on("change", "select.d3r-redirector", function(t) {
        window.location.assign($(this).val())
    }),
    $(document).on("change", "select.d3r-chooser", function(t) {
        var a = $(this)
          , e = $(".d3r-chooser-option").filter('[data-chooser="' + a.attr("id") + '"]');
        e.removeClass("d3r-shown"),
        e.filter("#" + a.val() + ',[data-chooservalue="' + a.val() + '"]').addClass("d3r-shown")
    }),
    $(document).on("change", "select.d3r-multichooser", function(t) {
        var a = $(this)
          , e = $(".d3r-multichooser-option").filter('[data-multichooser="' + a.attr("id") + '"]')
          , o = $("option:selected", this);
        e.removeClass("d3r-shown"),
        $.each(o.data("values").split(" "), function(t, a) {
            e.filter("#" + a + ',[data-chooservalue="' + a + '"]').addClass("d3r-shown")
        })
    }),
    $(document).on("change", 'input[type="radio"].d3r-chooser', function(t) {
        var a = $(this)
          , e = $(".d3r-chooser-option").filter('[data-chooser="' + a.attr("name") + '"]');
        e.removeClass("d3r-shown"),
        a.is(":checked") && e.filter("#" + a.val() + ',[data-chooservalue="' + a.val() + '"]').addClass("d3r-shown")
    }),
    $('input[type="radio"].d3r-chooser:checked').trigger("change"),
    $(document).on("click", ".d3r-submit", function(t) {
        var a = $(this);
        a.hasClass("d3r-disabled") && t.preventDefault(),
        a.addClass("d3r-disabled"),
        a.is("a") || setTimeout(function() {
            a.prop("disabled", !0)
        }, 0)
    }),
    $(document).on("click", ".d3r-confirm", function(t) {
        var a = $(this)
          , e = "Are you sure?";
        a.data("confirm") && (e = a.data("confirm")),
        window.confirm(e) || t.preventDefault()
    }),
    $(document).on("click", ".d3r-scrollto", function(t) {
        var a, e = $(this);
        if (e.data("target") ? a = $("#" + e.data("target")) : e.attr("href") && "#" == e.attr("href").replace(window.location.pathname, "")[0] && (a = $(e.attr("href").replace(window.location.pathname, ""))),
        a.length) {
            var o = a.attr("id");
            a.removeAttr("id"),
            $("html,body").animate({
                scrollTop: a.offset().top
            }, 500, function() {
                a.attr("id", o)
            })
        }
    }),
    $(document).on("click", ".d3r-popup", function(t) {
        t.preventDefault();
        var a = $(this)
          , e = a.attr("href")
          , o = 600
          , r = 300
          , d = "popup";
        a.data("width") && (o = a.data("width")),
        a.data("height") && (r = a.data("height")),
        a.attr("target") && (d = a.attr("target"));
        var s = window.open(e, d, "height=" + r + ",width=" + o);
        window.focus && s.focus()
    })
});

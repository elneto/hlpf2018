// Wait until the DOM has loaded before querying the document
$(document).ready(function () {
    $('ul.tabsNew').each(function () {
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active.attr('href'));
        // Hide the remaining content
        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });
        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();
            // Update the variables with the new link and content
            $active = $(this);
            $content = $($(this).attr('href'));
            // Make the tab active.
            $active.addClass('active');
            $content.show();
            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});
$(document).ready(function () {
    $(".jumper").on("click", function (e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 500);
    });
});
$(document).scroll(function () {
    if ($(this).scrollTop() > 111) {
        //        $("#unLogo").attr("class", "unLogo_small");
        //        $("#logoText").attr("class", "logoText_small");
        //        $("#topBarArea").attr("class", "topBarArea_small");
        $("#menuBarArea").attr("class", "menuBarArea_small");
//        $("#icons").attr("class", "icons_small");
//        $("#searchbox").attr("class", "searchbox_small");
//        $("#accountbox").attr("class", "accountbox_small");
    }
});
$(document).scroll(function () {
    if ($(this).scrollTop() < 111) {
        //        $("#unLogo").attr("class", "unLogo");
        //        $("#logoText").attr("class", "logoText");
        //        $("#topBarArea").attr("class", "topBarArea");
//        $("#searchbox").attr("class", "searchbox");
//        $("#accountbox").attr("class", "accountbox");
//        $("#icons").attr("class", "icons");


        $("#menuBarArea").attr("class", "menuBarArea");
    }
});

function showHideProgramme(str) {
    $('#' + str).slideToggle();
    return false;
}

function showHideSearch() {
    $('#accountbox').hide();
    $('#searchbox').slideToggle();
    return false;
}

function showHideAccount() {
    $('#searchbox').hide();
    $('#accountbox').slideToggle();
    return false;
}
// Wait until the DOM has loaded before querying the document
$(document).ready(function () {
    $.post("/showUserMenu.php", function (result) {
        $("#accountbox").html(result);
    });
    $.post("/userMenu.php", function (result) {
        $("#useroption").html(result);
    });
    $('ul.tabs').each(function () {
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active.attr('href'));
        // Hide the remaining content
        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });
        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();
            // Update the variables with the new link and content
            $active = $(this);
            $content = $($(this).attr('href'));
            // Make the tab active.
            $active.addClass('active');
            $content.show();
            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});

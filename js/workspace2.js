var courseid;
var activediv;
var myanswer;

function removeKeyword() {
    document.form1.str.value = '';
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    document.getElementById("filteroptions").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    $.post("/index.php?page=view&type=12&nr=671&menu=1477", {
        start: 0,
        clearsearch: 1
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
        $.post("/index.php?page=view&type=12&nr=1012&menu=1477", {}, function (result) {
            document.getElementById("filteroptions").innerHTML = result;
        });
    });
    return false;
}

function showCloseTargets() {
    $('#targets').slideToggle();
}

function removeActionFilter(id, type) {
    var myvar = id;
    var temp = myvar.toString();
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    $.post("/index.php?page=view&type=12&nr=671&menu=1477", {
        start: 0,
        removeid: id,
        type: type
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function setActionFilter(idvalue, type, value) {
    $(function () {
        id = type + "_" + idvalue;
        element = document.getElementById(id);
    });
    on = 0;
    if (value.checked) on = 1;
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    $.post("/index.php?page=view&type=12&nr=671&menu=1477", {
        start: 0,
        id: idvalue,
        onoff: on,
        type: type
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function checkType(type_nr, value) {
    $(function () {
        id = "tagline" + type_nr;
        element = document.getElementById(id);
        className = element.className;
        oldClass = "selected2";
        newClass = "selected_not2";
        if (className == "selected_not2") {
            oldClass = "selected_not2";
            newClass = "selected2";
        }
        $(element).removeClass(oldClass).addClass(newClass);
    });
    on = 0;
    if (value.checked) on = 1;
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    $.post("/index.php?page=view&type=12&nr=671&menu=1477", {
        start: 0,
        type_nr: type_nr,
        onoff: on
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
        //getTags();
        //getCountries();
        //getRegions();
    });
}

function doActionFilter(startvalue, searchstr) {
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="images/loading.gif">';
    $.post("/index.php?page=view&type=12&nr=671&menu=1477", {
        start: startvalue,
        str: searchstr
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function signInMessage(form) {
    document.getElementById("incorrect_main").innerHTML = "";
    document.getElementById("signInButton_main").innerHTML = '<img src="images/loading.gif">';
    e = form.email.value;
    p = form.pw.value;
    $.post("/account.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = "account.php?menu=1727";
        } else {
            document.getElementById("incorrect_main").innerHTML = r;
            document.getElementById("signInButton_main").innerHTML = '<input id="clicksignin" class="button" onclick="javascript: return signInMessage(this.form);" name="sign" value="Sign in & Proceed" style="" type="button">';
        }
    });
    return false;
}

function signInMain(form) {
    document.getElementById("incorrect_main").innerHTML = "";
    document.getElementById("signInButton_main").innerHTML = '<img src="images/loading.gif">';
    e = form.email.value;
    p = form.pw.value;
    $.post("/account.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = "account.php?menu=1457";
        } else {
            document.getElementById("incorrect_main").innerHTML = r;
            document.getElementById("signInButton_main").innerHTML = '<input id="clicksignin" class="button" onclick="javascript: return signInMain(this.form);" name="sign" value="Sign in" style="" type="button">';
        }
    });
    return false;
}

function toggleContent(div) {
    div1 = div + "_long";
    div2 = div + "_short";
    if (document.getElementById(div1).style.display == "none") {
        document.getElementById(div1).style.display = "block";
    } else {
        document.getElementById(div1).style.display = "none";
    }
    if (document.getElementById(div2).style.display == "none") {
        document.getElementById(div2).style.display = "block";
    } else {
        document.getElementById(div2).style.display = "none";
    }
    return false;
}

function signInReload(form, ws_nr, menu_nr, url) {
    e = form.email.value;
    p = form.pw.value;
    $.post("/index.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = url;
        } else {
            document.getElementById("incorrect").innerHTML = r;
        }
    });
    return false;
}

function signInNextPage2(url) {
    id = document.getElementById("email");
    e = id.value;
    id = document.getElementById("pw");
    p = id.value;
    $.post("/index.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = url;
        } else {
            document.getElementById("incorrect").innerHTML = r;
        }
    });
    return false;
}

function signInNextPage(form, url) {
    e = form.email.value;
    p = form.pw.value;
    $.post("/index.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = url;
        } else {
            document.getElementById("incorrect").innerHTML = r;
        }
    });
    return false;
}

function signInNext(form, next) {
    e = form.email.value;
    p = form.pw.value;
    $.post("/index.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = "/index.php?menu=" + next;
        } else {
            document.getElementById("incorrect").innerHTML = r;
        }
    });
    return false;
}

function signIn2(form, errorDiv, buttonDiv, redirectUrl) {
    document.getElementById(errorDiv).innerHTML = "";
    document.getElementById(buttonDiv).innerHTML = '<img src="images/loading.gif">';
    e = form.email.value;
    p = form.pw.value;
    $.post("/index.php?page=view&type=12&nr=535&menu=1477", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            window.location = redirectUrl;
        } else {
            document.getElementById(errorDiv).innerHTML = r;
            document.getElementById(buttonDiv).innerHTML = '<input id="clicksignin" class="button" onclick="javascript: return signIn2(this.form, ' + "'" + errorDiv + "', '" + buttonDiv + "', '" + redirectUrl + "'" + ');" name="sign" value="Sign in" style="" type="button">';
        }
    });
    return false;
}

function showRate() {
    $('#submitRating').show();
}

function submitRating(rating, form) {
    document.getElementById("rateArea").innerHTML = '<div style="text-align:center;"><img src="images/horizontal-loading.gif"></div>';
    $.post("/submitRating.php", {
        rating: rating,
        type: form.type.value,
        content: form.content.value
    }, function (result) {
        document.getElementById("rateArea").innerHTML = result;
    });
}

function selectRate(rating) {
    var str;
    if (rating == 1) str = " star";
    else str = " stars";
    document.getElementById("submitRating").innerHTML = '<input type="button" name="add" value="Submit my rating (' + rating + str + ')" class="newbutton" onClick="submitRating(' + rating + ', this.form);">';
}

function createAccount(form) {
    e = form.email.value;
    o = form.org.value;
    f = form.firstname.value;
    l = form.lastname.value;
    c = form.cap.value;
    $.post("/createAccount.php", {
        email: e,
        org: o,
        firstname: f,
        lastname: l,
        cap: c
    }, function (result) {
        document.getElementById("createspace").innerHTML = result;
    });
}

function signIn(form) {
    document.getElementById("incorrect").innerHTML = "";
    document.getElementById("signInButton").innerHTML = '<img src="/images/loading.gif">';
    e = form.email.value;
    p = form.pw.value;
    $.post("/signIn.php", {
        email: e,
        pw: p
    }, function (result) {
        var r = new String(result);
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
            String.prototype.ltrim = function () {
                return this.replace(/^\s+/, '');
            };
            String.prototype.rtrim = function () {
                return this.replace(/\s+$/, '');
            };
            String.prototype.fulltrim = function () {
                return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            };
        }
        r = r.trim();
        if (r == 1) {
            location.reload();
        } else {
            document.getElementById("incorrect").innerHTML = r;
            document.getElementById("signInButton").innerHTML = '<input id="clicksignin" type="button"  class="clickbutton" onClick="javascript: return signIn(this.form);" name="sign" value="Sign in"  >';
        }
    });
    return false;
}
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35008513-1']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

function openTime(side_nr) {
    element = document.getElementById("timeclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("timeopen" + side_nr);
    element.style.display = "block";
    return false;
}

function closeTime(side_nr) {
    element = document.getElementById("timeopen" + side_nr);
    element.style.display = "none";
    element = document.getElementById("timeclose" + side_nr);
    element.style.display = "block";
    return false;
}

function openUn(side_nr) {
    element = document.getElementById("unclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("unopen" + side_nr);
    element.style.display = "block";
    return false;
}

function closeUn(side_nr) {
    element = document.getElementById("unopen" + side_nr);
    element.style.display = "none";
    element = document.getElementById("unclose" + side_nr);
    element.style.display = "block";
    return false;
}

function openSide(side_nr) {
    element = document.getElementById("sideclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("sideopen" + side_nr);
    element.style.display = "block";
    return false;
}

function closeSide(side_nr) {
    element = document.getElementById("sideopen" + side_nr);
    element.style.display = "none";
    element = document.getElementById("sideclose" + side_nr);
    element.style.display = "block";
    return false;
}

function openTimeAjax(side_nr) {
    element = document.getElementById("timeclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("timeopen" + side_nr);
    element.style.display = "block";
    $.post("/index.php?page=view&type=5007&menu=1477&nr=" + side_nr + "&template=819", {}, function (result) {
        element.innerHTML = result;
    });
    return false;
}

function openUnAjax(side_nr) {
    element = document.getElementById("unclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("unopen" + side_nr);
    element.style.display = "block";
    $.post("/index.php?page=view&type=6&menu=1477&nr=" + side_nr + "&template=821", {}, function (result) {
        element.innerHTML = result;
    });
    return false;
}

function openSideAjax(side_nr) {
    element = document.getElementById("sideclose" + side_nr);
    element.style.display = "none";
    element = document.getElementById("sideopen" + side_nr);
    element.style.display = "block";
    $.post("/index.php?page=view&type=5007&menu=1477&nr=" + side_nr, {}, function (result) {
        element.innerHTML = result;
    });
    return false;
}

function closeAllTooltips() {
    for (var i = 0; i < pubs.length; i++) {
        document.getElementById(pubs[i]).style.display = "none";
    }
}

function showPoptip(id) {
    for (var i = 0; i < pubs.length; i++) {
        document.getElementById(pubs[i]).style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function hidePoptip(id) {
    document.getElementById(id).style.display = "none";
}
var originalText = "";

function doHighlight(searchTerm, theDiv) {
    highlightStartTag = "<font style='background-color:yellow;'>";
    highlightEndTag = "</font>";
    // find all occurences of the search term in the given text,
    // and add some "highlight" tags to them (we're not using a
    // regular expression search, because we want to filter out
    // matches that occur within HTML tags and script blocks, so
    // we have to do a little extra validation)
    if (originalText.length == 0) {
        originalText = document.getElementById(theDiv).innerHTML;
    } else {
        document.getElementById(theDiv).innerHTML = originalText;
    }
    bodyText = document.getElementById(theDiv).innerHTML;
    var newText = "";
    var i = -1;
    var lcSearchTerm = searchTerm.toLowerCase();
    var lcBodyText = bodyText.toLowerCase();
    while (bodyText.length > 0) {
        i = lcBodyText.indexOf(lcSearchTerm, i + 1);
        if (i < 0) {
            newText += bodyText;
            bodyText = "";
        } else {
            // skip anything inside an HTML tag
            if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
                // skip anything inside a <script> block
                if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
                    newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
                    bodyText = bodyText.substr(i + searchTerm.length);
                    lcBodyText = bodyText.toLowerCase();
                    i = -1;
                }
            }
        }
    }
    document.getElementById(theDiv).innerHTML = newText;
    return false;
}

function showYear(content) {
    idPlus = "doc" + content + "_plus";
    idMinus = "doc" + content + "_minus";
    elementPlus = document.getElementById(idPlus);
    elementMinus = document.getElementById(idMinus);
    if (elementPlus.style.display == "none") {
        elementPlus.style.display = "block";
        elementMinus.style.display = "none";
    } else if (elementPlus.style.display == "block") {
        elementPlus.style.display = "none";
        elementMinus.style.display = "block";
    }
    return false;
}
$(document).ready(function () {
    $("#topSearch").click(function () {
        if ($("#topSearch").val() == "Keywords...") $("#topSearch").val("");
        $("#topSearch").removeClass("topSearch");
        $(this).addClass("topSearchSelected");
    });
    $("#topSearch").blur(function () {
        if ($("#topSearch").val() == "") $("#topSearch").val("Keywords...");
        $("#topSearch").removeClass("topSearchSelected");
        $(this).addClass("topSearch");
    });
    $('#openLeftMenuLink').click(function (event) {
        closeMenuBox('accountbox');
        $('#theLeftMenu').slideToggle();
    });
});
$(document).ready(function () {
    $('#miniNavLink').click(function (event) {
        //closeMenuBox('accountbox');
        $('#theTopMenu').slideToggle();
    });
});
$(document).ready(function () {
    $('#showaccount2').click(function (event) {
        $('#accountbox').slideToggle();
    });
});

function showAccount() {
    $('#accountbox').slideToggle();
}
$(document).ready(function () {
    $('.showsearchbox2').click(function (event) {
        closeMenuBox('accountbox');
        $('#searchbox').slideToggle();
    });
});
$(document).ready(function () {
    $('.showsearchbox').click(function (event) {
        closeMenuBox('accountbox');
        $('#searchbox').slideToggle();
    });
});
//$(document).ready(function () {
//    $('#miniNavLink').click(function (event) {
//        closeMenuBox('accountbox');
//        closeMenuBox('searchbox');
//        $('#topMenuLinksArea3').slideToggle();
//    });
//});

function openMenuBox(name) {
    if (document.getElementById(name).style.display == 'none') {
        document.getElementById(name).style.display = 'block';
    } else {
        document.getElementById(name).style.display = 'none';
    }
}

function closeMenuBox(name) {
    document.getElementById(name).style.display = 'none';
}

function showResults() {
    $.post("/quiz.php", {
        showresults: "yes"
    }, function (result) {
        document.getElementById("quiz").innerHTML = result;
        loadProgressNoId();
    });
}

function loadProgressNoId() {
    loadProgress(courseid);
}
var progresspercentage = 0;
var interval;

function runProgress() {
    current = document.getElementById("progress").style.width;
    current = current.replace("px", "");
    current = current.replace("%", "");
    //alert(current);
    current = parseInt(current) + 1;
    if (current >= progresspercentage) clearInterval(interval);
    if (current < progresspercentage) document.getElementById("progress").style.width = current + "%";
}

function submitComment(text, type, content) {
    $.post("/submitComment.php", {
        type: type,
        content: content,
        text: text
    }, function (result) {
        document.getElementById("commentsAdd").innerHTML = result;
    });
}

function getMoreSearch() {
    document.getElementById("moreButton").style.display = "none";
    document.getElementById("moreLoading").style.display = "block";
    $.post("/getSearch.php", {}, function (result) {
        $("#listing").append(result);
        document.getElementById("moreLoading").style.display = "none";
        $.post("/moreButton.php", {}, function (result) {
            if (result.length > 0) {
                $("#theMoreButton").html(result);
                document.getElementById("moreButton").style.display = "block";
            }
        });
    });
}

function removeTopic(topicid) {
    var myvar = topicid;
    var temp = myvar.toString();
    $(function () {
        var id = "topicline" + temp;
        element = document.getElementById(id);
        className = element.className;
        oldClass = "selected2";
        newClass = "selected_not2";
        if (className == "selected_not2") {
            oldClass = "selected_not2";
            newClass = "selected2";
        } else {
            var topic = "topic" + temp;
            document.getElementById(topic).checked = false;
        }
        $(element).removeClass(oldClass).addClass(newClass);
    });
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="/images/loading.gif">';
    $.post("/getSearch.php", {
        start: 0,
        removetopic: topicid
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
        //getTags();
        //getCountries();
        //getRegions();
    });
    return false;
}

function removeKeyword() {
    document.form1.str.value = '';
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="/images/loading.gif">';
    $.post("/getSearch.php", {
        start: 0,
        clearsearch: 1
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function removeType(typeid) {
    $(function () {
        id = "tagline" + typeid;
        element = document.getElementById(id);
        className = element.className;
        oldClass = "selected2";
        newClass = "selected_not2";
        if (className == "selected_not2") {
            oldClass = "selected_not2";
            newClass = "selected2";
        } else {
            type = "tag" + typeid;
            document.getElementById(type).checked = false;
        }
        $(element).removeClass(oldClass).addClass(newClass);
    });
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="/images/loading.gif">';
    $.post("/getSearch.php", {
        start: 0,
        removetype: typeid
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function checkTopic(topic_nr, value) {
    $(function () {
        id = "topicline" + topic_nr;
        element = document.getElementById(id);
        className = element.className;
        oldClass = "selected2";
        newClass = "selected_not2";
        if (className == "selected_not2") {
            oldClass = "selected_not2";
            newClass = "selected2";
        }
        $(element).removeClass(oldClass).addClass(newClass);
    });
    on = 0;
    if (value.checked) on = 1;
    document.getElementById("moreButton").style.display = "none";
    document.getElementById("moreLoading").style.display = "block";
    document.getElementById("listing").innerHTML = '';
    $.post("/getSearch.php", {
        start: 0,
        topic_nr: topic_nr,
        onoff: on
    }, function (result) {
        document.getElementById("moreLoading").style.display = "none";
        document.getElementById("listing").innerHTML = result;
        $.post("/moreButton.php", {}, function (result) {
            if (result.length > 0) {
                $("#theMoreButton").html(result);
                document.getElementById("moreButton").style.display = "block";
            }
        });
    });
}

function checkType(type_nr, value) {
    $(function () {
        id = "tagline" + type_nr;
        element = document.getElementById(id);
        className = element.className;
        oldClass = "selected2";
        newClass = "selected_not2";
        if (className == "selected_not2") {
            oldClass = "selected_not2";
            newClass = "selected2";
        }
        $(element).removeClass(oldClass).addClass(newClass);
    });
    on = 0;
    if (value.checked) on = 1;
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="/images/loading.gif">';
    $.post("/getSearch.php", {
        start: 0,
        type_nr: type_nr,
        onoff: on
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
        //getTags();
        //getCountries();
        //getRegions();
    });
}

function doFilter(startvalue, searchstr) {
    document.getElementById("listing").innerHTML = '<div align="middle"><img  src="/images/loading.gif">';
    $.post("/getSearch.php", {
        start: startvalue,
        str: searchstr
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
    });
    return false;
}

function showAllGoals() {
    openGoal('sub_60');
    openGoal('sub_32');
    openGoal('sub_68');
    openGoal('sub_16');
    openGoal('sub_44');
    openGoal('sub_28');
    openGoal('sub_8');
    openGoal('sub_20');
    openGoal('sub_12');
    openGoal('sub_36');
    openGoal('sub_40');
    openGoal('sub_64');
    openGoal('sub_72');
    openGoal('sub_76');
    openGoal('sub_4');
    openGoal('sub_48');
    openGoal('sub_56');
}

function openGoal(div) {
    $('#' + div).slideToggle();
    return false;
}

function getSearch(str) {
    document.getElementById("moreLoading").style.display = "block";
    $.post("/getSearch.php", {
        start: 0,
        str: str
    }, function (result) {
        document.getElementById("listing").innerHTML = result;
        document.getElementById("moreLoading").style.display = "none";
        $.post("/moreButton.php", {}, function (result) {
            if (result.length > 0) {
                $("#theMoreButton").html(result);
                document.getElementById("moreButton").style.display = "block";
            }
        });
        $.post("/getTopics.php", {}, function (result) {
            document.getElementById("topicresults").innerHTML = result;
        });
    });
}

function getComments(type, content) {
    document.getElementById("comments").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/getComments.php", {
        type: type,
        content: content
    }, function (result) {
        document.getElementById("comments").innerHTML = result;
        $(".textstyled").click(function () {
            $(this).height(170);
            $("#addCommentButton").show();
        });
    });
}

function getCourseDiscussion(id) {
    document.getElementById("contentArea").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/index.php?page=view&type=12&nr=754&menu=1477", {}, function (result) {
        document.getElementById("contentArea").innerHTML = result;
    });
}

function getCourseCertificate(id) {
    document.getElementById("contentArea").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/index.php?page=view&type=12&nr=755&menu=1477", {}, function (result) {
        document.getElementById("contentArea").innerHTML = result;
    });
}

function getCourseParticipants(id) {
    document.getElementById("contentArea").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/index.php?page=view&type=12&nr=753&menu=1477", {}, function (result) {
        document.getElementById("contentArea").innerHTML = result;
    });
}

function loadProgress(id) {
    courseid = id;
    $.post("/getCourseMenu.php", {
        "function": "progress",
        course: id
    }, function (result) {
        //document.getElementById("progress").style.width = result + "%";
        progresspercentage = result;
        interval = setInterval(function () {
            runProgress()
        }, 15);
    });
    $.post("/getCourseMenu.php", {
        "function": "progresstext",
        course: id
    }, function (result) {
        document.getElementById("progresstext").innerHTML = result;
    });
    $.post("/getCourseMenu.php", {
        "function": "progresscertificate",
        course: id
    }, function (result) {
        document.getElementById("progresscertificate").innerHTML = result;
    });
}

function getQuiz(id, course) {
    document.getElementById("contentArea").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/index.php?page=view&type=9703&nr=" + id + "&menu=1477", {}, function (result) {
        document.getElementById("contentArea").innerHTML = result;
        $.post("/quiz.php", {
            reset: id
        }, function (result) {
            document.getElementById("quiz").innerHTML = result;
        });
    });
    loadProgress(course);
}

function getCourseContent(type, id) {
    document.getElementById("contentArea").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    $.post("/index.php?page=view&type=" + type + "&nr=" + id + "&menu=1477", {}, function (result) {
        document.getElementById("contentArea").innerHTML = result;
    });
}

function getQuestion(questionid) {
    $.post("/quiz.php", {
        question: questionid
    }, function (result) {
        document.getElementById("quiz").innerHTML = result;
    });
}

function submitAnswer() {
    $.post("/quiz.php", {
        submitanswer: myanswer
    }, function (result) {
        document.getElementById("quiz").innerHTML = result;
    });
}

function setOption(div, answer) {
    myanswer = answer;
    if (activediv != null) activediv.className = "question_line";
    div.className = "question_line_on";
    activediv = div;
    button = document.getElementById("answerButton").innerHTML = '<input onClick="javascript:submitAnswer();" style="margin-left:300px;text-align:center" class="button" value="Answer">';
}

function openEntity(orgid) {
    document.getElementById("entitycontent").innerHTML = '<div align="middle"><img  src="images/loading.gif" style="margin-top:10px;margin-bottom:10px;" ></div>';
    entity = document.getElementById("entitywindow");
    entity.style.display = "block";
    url = "/index.php?page=view&type=6&nr=" + orgid + "&menu=1477&template=824&her=11";
    $.post(url, {}, function (result) {
        document.getElementById("entitycontent").innerHTML = result;
    });
}

function sendMessageLoggedin(theform) {
    document.getElementById("errors").innerHTML = "";
    email = theform.email.value;
    subject = theform.subject.value;
    text = theform.text.value;
    errormsg = "";
    if (subject.length == 0) errormsg = errormsg + "<li>Enter subject</li>";
    if (email.length == 0) errormsg = errormsg + "<li>Enter your email</li>";
    if (text.length == 0) errormsg = errormsg + "<li>Enter your message</li>";
    if (errormsg.length == 0) {
        return true;
    } else {
        document.getElementById("errors").innerHTML = "<ul class='highlights' style='color:red;'>" + errormsg + "</ul>";
        return false;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function sendMessage(theform) {
    document.getElementById("errors").innerHTML = "";
    firstname = theform.firstname.value;
    lastname = theform.lastname.value;
    org = theform.org.value;
    email = theform.email.value;
    subject = theform.subject.value;
    text = theform.text.value;
    cap = theform.cap.value;
    text = text.replace("select", "sel ect");
    text = text.replace("Select", "Sel ect");
    theform.text.value = text;
    errormsg = "";
    if (firstname.length == 0) errormsg = errormsg + "<li>Enter first name</li>";
    if (lastname.length == 0) errormsg = errormsg + "<li>Enter last name</li>";
    if (subject.length == 0) errormsg = errormsg + "<li>Enter subject</li>";
    //if(email.length == 0) errormsg = errormsg + "<li>Enter your email</li>";
    if (!validateEmail(email)) errormsg = errormsg + "<li>Enter a valid email address</li>";
    if (text.length == 0) errormsg = errormsg + "<li>Enter your message</li>";
    $.post("/checkCaptcha.php?set=" + cap, {}, function (result) {
        errormsg = errormsg + result;
        if (errormsg.length == 0) {
            theform.submit();
        } else {
            document.getElementById("errors").innerHTML = "<ul class='highlights' style='color:red;'>" + errormsg + "</ul>";
        }
    });
    return false;
}

function toggleContent(div) {
    div1 = div + "_long";
    div2 = div + "_short";
    if (document.getElementById(div1).style.display == "none") {
        document.getElementById(div1).style.display = "block";
    } else {
        document.getElementById(div1).style.display = "none";
    }
    if (document.getElementById(div2).style.display == "none") {
        document.getElementById(div2).style.display = "block";
    } else {
        document.getElementById(div2).style.display = "none";
    }
    return false;
}

function checkNewline(event, inputDiv) {
    if (event && event.keyCode == 13) {
        index = inputDiv.style.height.indexOf("px");
        value = inputDiv.style.height.substring(0, index);
        value = parseInt(value) + 18;
        inputDiv.style.height = value + "px";
    }
}
var invitee_found = 0;

function joinCluster(id) {
    document.getElementById("memberstatus").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        cluster: id,
        thefunction: "joincluster"
    }, function (result) {
        document.getElementById("memberstatus").innerHTML = result;
    });
    return false;
}

function getAllComments(contentid) {
    thediv = "comments_" + contentid;
    document.getElementById(thediv).innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        id: contentid,
        thefunction: "comments"
    }, function (result) {
        document.getElementById(thediv).innerHTML = result;
    });
    return false;
}

function invite(wid) {
    if (invitee_found != 0) {
        $.post("/ws_various.php", {
            workspace: wid,
            thefunction: "sendinvite",
            id: invitee_found
        }, function (result) {
            $("#invitees").html(result);
        });
        invitee_found = 0;
    } else {
        $.post("/ws_various.php", {
            workspace: wid,
            thefunction: "sendinvite",
            email: inviteform.namefield.value
        }, function (result) {
            $("#invitees").html(result);
        });
    }
    return false;
}

function playVideo(id) {
    view = "video_view_" + id;
    play = "video_play_" + id;
    document.getElementById(view).style.display = "none";
    document.getElementById(play).style.display = "block";
    return false;
}

function delWsComment(valuediv, contentid, catid) {
    if (confirm("Delete?")) {
        countDiv = "nrof_" + catid;
        document.getElementById(countDiv).innerHTML = parseInt(document.getElementById(countDiv).innerHTML) - 1;
        $.post("/ws_delComment.php", {
            id: contentid
        }, function (result) {
            document.getElementById(valuediv).style.display = "none";
        });
    }
    return false;
}
var activetab;

function getTab(catid) {
    activetab = catid;
    var div = document.getElementById('tabs');
    var divs = div.getElementsByTagName('div');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        idvalue = divs[i].id;
        if (idvalue.indexOf("off") !== -1) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
    catdiv = "cat" + catid + "_off";
    newdiv = document.getElementById(catdiv);
    newdiv.style.display = "none";
    catdiv = "cat" + catid + "_on";
    newdiv = document.getElementById(catdiv);
    newdiv.style.display = "block";
    var div = document.getElementById('catscontent');
    var divs = div.getElementsByTagName('div');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        idvalue = divs[i].id;
        if (idvalue.indexOf("catcontent") !== -1) {
            divs[i].style.display = "none";
        }
    }
    catdiv = "catcontent_" + catid;
    newdiv = document.getElementById(catdiv);
    newdiv.style.display = "block";
    return false;
}

function orderWs(wid, sortby) {
    if (sortby == "date") {
        document.getElementById("order_date").style.display = "block";
        document.getElementById("order_popularity").style.display = "none";
    } else {
        document.getElementById("order_date").style.display = "none";
        document.getElementById("order_popularity").style.display = "block";
    }
    document.getElementById("catscontent").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        thefunction: "getcats",
        id: wid,
        sort: sortby,
        tab: activetab
    }, function (result) {
        $("#catscontent").html(result);
    });
    return false;
}

function pinIt(valuediv, contentid) {
    plusbuttonDiv = "pin_" + contentid;
    document.getElementById("featuredcontent").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        thefunction: "pinit",
        id: contentid
    }, function (result) {
        document.getElementById(plusbuttonDiv).innerHTML = '<img src="images/star_on.png" style="margin-right:5px;margin-bottom:2px;" title="Pinned to top"  >';
        $("#featuredcontent").html(result);
    });
    return true;
}

function plusIt(valuediv, contentid) {
    plusbuttonDiv = "plusbutton_" + contentid;
    $.post("/ws_various.php", {
        thefunction: "plusit",
        id: contentid
    }, function (result) {
        document.getElementById(plusbuttonDiv).innerHTML = '<img src="images/like_on.gif" style="margin-right:5px;margin-bottom:2px;" title="Thank you for your SD+"  >';
        curr = document.getElementById(valuediv).innerHTML;
        if (curr.length == 0) {
            document.getElementById(valuediv).innerHTML = 1;
        } else {
            document.getElementById(valuediv).innerHTML = parseInt(document.getElementById(valuediv).innerHTML) + 1;
        }
    });
    return false;
}

function delWsContent(valuediv, contentid) {
    if (confirm("Delete?")) {
        $.post("/ws_delContent.php", {
            id: contentid
        }, function (result) {
            document.getElementById(valuediv).style.display = "none";
        });
    }
    return false;
}

function delManager(orgid, wid) {
    if (confirm("Remove Manager?")) {
        $.post("/ws_various.php", {
            thefunction: "del_manager",
            org: orgid,
            workspace: wid
        }, function (result) {
            document.getElementById("manager" + orgid).style.display = "none";
        });
    }
    return false;
}

function forgotPw(form) {
    $.post(
        "/requestReset.php", {
            email: form.email.value
        },
        function (result) {
            document.getElementById("sendPwForm").innerHTML = result;
        }
    );
    return false;
}

function requestAccount(form) {
    for (var i = 0; i < form.type.length; i++) {
        if (form.type[i].checked) {
            var typevalue = form.type[i].value;
        }
    }
    $.post("/ws_various.php", {
        thefunction: "request_account",
        title: form.title.value,
        email: form.email.value,
        name: form.name.value,
        type: typevalue
    }, function (result) {
        document.getElementById("requested").innerHTML = result;
    });
    return false;
}

function addManager(orgid, wid) {
    $.post("/ws_various.php", {
        thefunction: "add_manager",
        org: orgid,
        workspace: wid
    }, function (result) {
        document.getElementById("newmanagers").innerHTML = "";
        $(document.getElementById("managers")).prepend(result);
        document.getElementById("addmanager").value = "Add more managers - search by entity";
        document.getElementById("addmanager").blur();
        document.getElementById("addmanager").style.color = "#999999";
    });
    return false;
}

function searchManagers(value, wid) {
    $.post("/ws_various.php", {
        thefunction: "search_managers",
        name: value,
        workspace: wid
    }, function (result) {
        document.getElementById("newmanagers").innerHTML = result;
    });
    return false;
}

function getInvitees(value) {
    $.post("/getWSPersons.php", {
        name: value
    }, function (result) {
        document.getElementById("invitees").innerHTML = result;
    });
    return false;
}

function addCommentNew(commentDiv, id, inputDiv) {
    value = document.getElementById(inputDiv).value;
    $.post("/addWSComment.php", {
        comment: value,
        contentid: id
    }, function (result) {
        $(document.getElementById(commentDiv)).prepend(result);
        document.getElementById(inputDiv).value = "Comment on this content";
        document.getElementById(inputDiv).blur();
        document.getElementById(inputDiv).style.height = "20px";
        document.getElementById(inputDiv).style.color = "#999999";
        countDiv = "nrof_" + id;
        document.getElementById(countDiv).innerHTML = parseInt(document.getElementById(countDiv).innerHTML) + 1;
    });
    return false;
}

function addComment(event, commentDiv, id, value, inputDiv) {
    if (event && event.keyCode == 13) {
        $.post("/addWSComment.php", {
            comment: value,
            contentid: id
        }, function (result) {
            $(document.getElementById(commentDiv)).prepend(result);
            inputDiv.value = "Comment on this content";
            inputDiv.blur();
            countDiv = "nrof_" + id;
            document.getElementById(countDiv).innerHTML = parseInt(document.getElementById(countDiv).innerHTML) + 1;
        });
        return false;
    } else {
        return true;
    }
}

function submitForm(form, thediv, previewdiv) {
    preview = false;
    document.getElementById(previewdiv).innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/addWSContent.php", {
        content: form.newcontent.value,
        cat: form.cat.value
    }, function (result) {
        document.getElementById(previewdiv).innerHTML = '';
        $(document.getElementById(thediv)).prepend(result);
        document.getElementById("newcontentlink").style.height = "20px";
        document.getElementById("newcontentlink").style.color = "#999999";
        form.newcontent.value = "Link content...";
        //$.post("ws_getCats.php",{catid:"1"},function(result){
        // document.getElementById(thediv).innerHTML = result;
        //  });
    });
    //cancel the submit button default behaviours
    return false;
}
var preview = false;

function checkForLinksUp(data, thediv, iframediv) {
    if (!preview) {
        $.post("/getContentPreview.php", {
            text: data
        }, function (result) {
            var iframe = document.getElementById(iframediv);
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            document.getElementById(thediv).innerHTML = result;
            if (document.getElementById(thediv).innerHTML.length > 0) {
                preview = true;
            }
        });
    }
}

function checkForLinks(data, thediv) {
    if (!preview) {
        $.post("/getContentPreview.php", {
            text: data
        }, function (result) {
            document.getElementById(thediv).innerHTML = result;
            if (document.getElementById(thediv).innerHTML.length > 0) {
                preview = true;
            }
        });
    }
}

function moveUp(workspaceid, catid) {
    document.getElementById("cats_admin").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        workspace: workspaceid,
        thefunction: "cats_admin",
        move: catid,
        order: "up"
    }, function (result) {
        document.getElementById("cats_admin").innerHTML = result;
    });
    return false;
}

function addPerson(form) {
    $.post("/ws_various.php", {
        thefunction: "person_add",
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        pw: form.newpw.value
    }, function (result) {
        document.getElementById("person_add_message").style.display = "block";
        document.getElementById("person_add_message").innerHTML = result;
        if (result == "<font color='green'>Thank you. The account was created and email sent.") {
            document.getElementById("persons").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
            form.firstname.value = "";
            form.lastname.value = "";
            form.email.value = "";
            form.newpw.value = "";
            $.post("/ws_various.php", {
                thefunction: "persons"
            }, function (result) {
                $("#persons").html(result);
            });
        }
    });
    return false;
}

function editPerson(form) {
    $.post("/ws_various.php", {
        thefunction: "person_edit",
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        pw: form.newpw.value
    }, function (result) {
        document.getElementById("editsave").innerHTML = result;
        thediv = "person_edit";
        document.getElementById(thediv).style.display = "none";
        thediv = "person_view";
        document.getElementById(thediv).style.display = "block";
        $.post("/ws_various.php", {
            thefunction: "person_view"
        }, function (result) {
            document.getElementById("person_view").innerHTML = result;
        });
    });
    return false;
}

function savePerson(form, pid) {
    document.getElementById("persons").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        thefunction: "person_save",
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        pw: form.newpw.value,
        person: pid
    }, function (result) {
        document.getElementById("persons").innerHTML = result;
    });
    return false;
}

function setAdmin(pid, open) {
    $.post("/ws_various.php", {
        thefunction: "person_admin",
        isopen: open,
        person: pid
    }, function (result) {});
}

function setTopic(id, wid) {
    if (id.checked == 1) {
        checked = 1;
    } else {
        checked = 0;
    }
    $.post("/ws_various.php", {
        thefunction: "person_topic",
        workspace: wid,
        set: checked
    }, function (result) {});
}

function setWorkspace(id, wid) {
    if (id.checked == 1) {
        checked = 1;
    } else {
        checked = 0;
    }
    $.post("/ws_various.php", {
        thefunction: "person_ws",
        workspace: wid,
        set: checked
    }, function (result) {});
}

function setActive(pid, open) {
    $.post("/ws_various.php", {
        thefunction: "person_active",
        isopen: open,
        person: pid
    }, function (result) {});
}

function getWorkspaces() {
    $.post("/ws_various.php", {
        thefunction: "my_workspaces"
    }, function (result) {
        $("#workspaces").html(result);
    });
}

function setSorting(catid, open) {
    $.post("/ws_various.php", {
        thefunction: "cats_sorting",
        isopen: open,
        cat: catid
    }, function (result) {});
}

function setOpen(catid, open) {
    $.post("/ws_various.php", {
        thefunction: "cats_open",
        isopen: open,
        cat: catid
    }, function (result) {});
}

function saveNewCatTitle(form, wid) {
    for (var i = 0; i < form.open.length; i++) {
        if (form.open[i].checked) {
            var openvalue = form.open[i].value;
        }
    }
    $.post("/ws_various.php", {
        thefunction: "cats_add",
        title: form.title.value,
        workspaceid: wid,
        open: openvalue
    }, function (result) {
        $.post("/ws_various.php", {
            workspace: wid,
            thefunction: "cats_admin"
        }, function (result) {
            document.getElementById("cats_admin").innerHTML = result;
        });
        form.title.value = "";
    });
}

function setAccessgroup(gid, onoff, wid) {
    $.post("/ws_various.php", {
        thefunction: "group_access",
        workspace: wid,
        group: gid,
        setting: onoff
    }, function (result) {});
}

function setMajorgroupWs(mid, onoff, wid) {
    $.post("/ws_various.php", {
        thefunction: "majorgroup_access",
        workspace: wid,
        majorgroup: mid,
        setting: onoff
    }, function (result) {});
}

function saveText(form, wid) {
    $.post("/ws_various.php", {
        thefunction: "workspace_update",
        workspace: wid,
        text: form.text.value
    }, function (result) {
        //  alert("hej");
        document.getElementById("textsaved").innerHTML = '<font color="green"><b>Saved.</b></font>';
        setTimeout('document.getElementById("textsaved").innerHTML    = ""', 3000);
    });
    return false;
}

function delCat(catid) {
    if (confirm("Delete Category including all content + comments?")) {
        $.post("/ws_various.php", {
            thefunction: "cats_delete",
            cat: catid
        }, function (result) {
            thediv = "catrow" + catid;
            document.getElementById(thediv).style.display = "none";
        });
    }
    return false;
}

function saveCatTitle(form, catid) {
    thediv = "catform" + catid;
    document.getElementById(thediv).style.display = "none";
    $.post("/ws_various.php", {
        thefunction: "cats_titleupdate",
        title: form.cattitle.value,
        cat: catid
    }, function (result) {});
    thediv = "catvalue" + catid;
    document.getElementById(thediv).style.display = "block";
    document.getElementById(thediv).innerHTML = '<a style="color:#666666;font-size:11px;text-decoration:none;" href="#"  onClick="javascript:return getEditTitle(' + catid + ');">' + form.cattitle.value + '</a>';
    return false;
}

function getPersonEditLogged() {
    thediv = "person_view";
    document.getElementById(thediv).style.display = "none";
    thediv = "person_edit";
    document.getElementById(thediv).style.display = "block";
    document.getElementById("editsave").innerHTML = "";
    return false;
}

function getPersonEdit(pid) {
    thediv = "person" + pid;
    //document.getElementById(thediv).style.display    = "none";
    thediv = "person" + pid + "_edit";
    document.getElementById(thediv).style.display = "block";
    return false;
}

function getEditTitle(catid) {
    thediv = "catvalue" + catid;
    document.getElementById(thediv).style.display = "none";
    thediv = "catform" + catid;
    document.getElementById(thediv).style.display = "block";
    return false;
}

function moveDown(workspaceid, catid) {
    document.getElementById("cats_admin").innerHTML = '<div align="center"><img   src="images/loading.gif"></div>';
    $.post("/ws_various.php", {
        workspace: workspaceid,
        thefunction: "cats_admin",
        move: catid,
        order: "down"
    }, function (result) {
        document.getElementById("cats_admin").innerHTML = result;
    });
    return false;
}

function editWS(id) {
    $.post("/ws_editWs.php", {
        workspace: id
    }, function (result) {
        $("#contentArea").html(result);
    });
    return false;
}

function switchContent(close, open) {
    element = document.getElementById(close);
    element.style.display = "none";
    element = document.getElementById(open);
    element.style.display = "block";
    return false;
}

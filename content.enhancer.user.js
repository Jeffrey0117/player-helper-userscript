// ==UserScript==
// @name         Course Content Enhancer
// @namespace    http://tampermonkey.net/
// @version      2024-02-20
// @description  Enhanced course viewing experience
// @author       You
// @match        https://9vs1.com/course-introduction*
// @icon         data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// @grant        none
// ==/UserScript==

(function() {

function SetupVideoPlayer(){

// Get course title
let courseTitle=$('.courseTitle')[0].innerText

// Get course chapter list
let newChatper=$('.course-chatper-list')[1]

// Get initial video ID
let Previmeo=document.querySelectorAll('a[data-vimeocode]')[0].getAttribute('data-vimeocode')

// Setup video URL
let videoUrl = `https://player.vimeo.com/video/${Previmeo}?autoplay=1&html5=1`;

// Update page content
document.body.innerHTML=`<body class="vsc-initialized" style="">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Web default meta-->

    <script src="js/jquery/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!--Bootstrap JS-->
    <script src="js/bootstrap/js/bootstrap.bundle.min.js"></script><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/829781597/?random=1672831867060&amp;cv=11&amp;fst=1672831867060&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=2oabu0&amp;u_w=1280&amp;u_h=720&amp;hn=www.googleadservices.com&amp;frm=0&amp;url=https%3A%2F%2Fwww.9vs1.com%2Fcourse-play-Toeic-listening-Chris&amp;ref=https%3A%2F%2Fwww.9vs1.com%2Fmy-courses&amp;tiba=2021%20%E5%A4%9A%E7%9B%8A%E6%80%A5%E6%95%91%E6%94%BB%E7%95%A5%20-%20%E9%82%8F%E8%BC%AF%E8%85%A6%E9%80%9F%E6%AE%BA%E8%81%BD%E5%8A%9B%E7%AF%87%20-%209%20%E6%AF%94%201%20%E7%B7%9A%E4%B8%8A%E8%AA%B2%E7%A8%8B%E5%B9%B3%E5%8F%B0&amp;auid=1190265167.1672768875&amp;uaa=x86&amp;uab=64&amp;uafvl=Not%253FA_Brand%3B8.0.0.0%7CChromium%3B108.0.5359.125%7CGoogle%2520Chrome%3B108.0.5359.125&amp;uap=Windows&amp;uapv=14.0.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script>

    <!--style-->
    <link rel="stylesheet" href="css/main.css">

    <!--fonts-->
    <link rel="stylesheet" href="css/Barlow/Barlow.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="css/fontello.css">

        <div id="course_play" class="main">
            <div class="row no-gutters">
                <div class="col-12 col-md-7 col-lg-8 video-area" style="height: auto;">
                    <div class="d-flex align-items-start video-area-top">
                        <a class="d-flex align-items-center back" href="https://9vs1.com/"><i class="icon-arrow_left"></i>Back</a>
                        <div class="d-none d-lg-block video-info">
                            <h1 class="course-title">Complete Course Content</h1>
                            <div class="d-flex">
                                <div class="purchasetime text-gradient">
                                    <i class="icon-purchasetime"></i>Purchase Date<span class="course-purchasetime">2022-02-22</span>
                                </div>
                                <div class="deadline text-gradient">
                                    <i class="icon-deadline"></i>Access Period<span class="course-deadline">Lifetime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="embed-container">
                        <div class="page-video-url" data-vimeo-initialized="true"><iframe src="${videoUrl}" width="384" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Course Content Video" data-ready="true"></iframe></div>
                    </div>
                    <div class="d-lg-none video-info">
                        <h1 class="course-title">Course Learning Platform</h1>
                        <div class="d-flex">
                            <div class="purchasetime text-gradient">
                                <i class="icon-purchasetime"></i>Purchase Date<span class="course-purchasetime">2021-04-18</span>
                            </div>
                            <div class="deadline text-gradient">
                                <i class="icon-deadline"></i>Access Period<span class="course-deadline">Lifetime</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="attainment">Course Progress<span>100%</span></div>
                        <!-- <div class="progress"></div> Feature temporarily disabled 2020/10/14-->
                    </div>
                </div>
                <div class="col-12 col-md-5 col-lg-4 courseTabs-area" style="margin-top: 0px;">
                    <ul class="nav nav-tabs nav-fill" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active show" id="courseList-tab" data-toggle="tab" href="#courseList" role="tab" aria-controls="courseList" aria-selected="true">Course List</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="courseList" role="tabpanel" aria-labelledby="courseList-tab">
                            <ul class="course-chatper-list">
                                            <li id="chapter_1">
                                                <div class="d-flex align-items-center">
                                                    <i class="expend icon-plus"></i>
                                                    <div class="title">Course Introduction</div>
                                                </div>
                                                <ul class="course-chatper-sublist">
                                                                                                            </ul>
                                                </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>`

// Update course title in video page
$('.course-title')[0].innerText=courseTitle

// Replace chapter content in video page
$('.course-chatper-list').replaceWith(newChatper)

// Remove restriction icons
$('.icon-lock').remove();

// Remove disabled state
$('.locked').removeClass('locked');

    //——————————————————————————————————————————————————————————————————————————————————————————

    // Get video iframe element
    let x = document.querySelector("#course_play > div > div.col-12.col-md-7.col-lg-8.video-area > div.embed-container > div > iframe");

    // Handle section click events
    function section_click(target, modalShow = false) {
        // Get video code
        var vimeocode = '';
        console.log(target.target);
        target = target.target.parentElement;
        var vimeocode = target.dataset.vimeocode;
        console.log(vimeocode);

        // Check if vimeocode is valid
        if (vimeocode !== undefined) {
            x.src = x.src.split('deo/')[0] + 'deo/' + vimeocode + x.src.split('deo/')[1].slice(9, x.src.length);
        }
    }

    // Get total list items
    let max= document.querySelectorAll('li').length

    // Setup click handlers
    // Define array for chapter items to exclude
    var chapterItem = [];

    var allListItems = document.querySelectorAll('li');

    // Find chapter items by ID pattern
    allListItems .forEach(function (item, index) {
        // Check if element matches specific ID pattern
        if (item.id && item.id.startsWith('chapter_')) {
            // Add index to exclusion array
            chapterItem.push(index);
        }
    });

    // Add click listeners to non-chapter items
    for (let k = 1; k <= max; k++) {
        if (!chapterItem.includes(k)) {
            document.querySelectorAll('li')[k].addEventListener('click', section_click, false);
        }
    }

    // Set initial video source
    x.src = x.src.split('deo/')[0] + 'deo/' + Previmeo + x.src.split('deo/')[1].slice(9, x.src.length);
}

//—————————————————————————————————————————————————————————————————————————————————————————————————————

// Create new button element
var newLink = document.createElement('a');

// Set button attributes
newLink.href = "#";
newLink.className = "btn btn-dark btn-lg btn-block";
newLink.setAttribute("data-toggle", "modal");
newLink.setAttribute("data-target", "#programModal");
newLink.textContent = "Enhanced Course Access";

// Add hover effects
newLink.addEventListener('mouseover', function() {
    newLink.style.color = "#000000"; // Change text color to black
});

newLink.addEventListener('mouseout', function() {
    newLink.style.color = ""; // Restore original text color
});

// Get target element
var targetElement = document.querySelector("#purchase-cardCollapse > a.btn.btn-primary.btn-lg.btn-block");

// Insert new button below target element
targetElement.parentNode.insertBefore(newLink, targetElement.nextSibling);

// Add click event to button
newLink.addEventListener('click', function() {
SetupVideoPlayer();
});

})();
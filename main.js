//Jquery is a javascript "write less, do more"" library. It simplifies javascript programming.

//Text Manipulation
document.querySelector("h1").innerHTML = "Nothing to Change!";
$("h1").text("Nothing to Change");
//$("#p1, p"), $("#myDiv p")
//Methods: text(), html(), append() - add text after it, prepend() -add text before it, after(), before(), remove(), empty()
//Get and set Content: text(). html(), val()
var para1 = $("<p></p>").text("Baby! Calm Down");
$("#p1").before(para1);

//Attribute Manipulation
var a = document.querySelector("a").getAttribute("href");
var a1 = $("a").attr("href");
//removeAttr(), attr()

//Styling
$("h1").css("color", "red");
$("h1").css({
    "color": "green",
    "font-size": "5px"
});
$("h1").addClass("style1 style2");
//removeClass(), toggleClass()

//Event Listener
$("button").click(function(){
    //...
})
$(".multipleButton").on("click", function(){
    var value = this.innerHTML;
    $("h1").text(value + " is clicked");
}) //mouseover, mouseout etc


//Animation
//val() - Input Value, hide(), show(), show(1000)- show after 1000 miliseconds, toggle(), fadeIn(), fadeOut(), fadeToggle(), fadeTo(miliseconds, opacityValue), slideUp(), slideDown(), slideToggle(), $(this).hide() - hides the current element, stop(), meyhod chaining- hide().show()
$("#btn").click(function(){
    $(".div1").animate({
        height: "400px",
        width: "900px"
    }, 2000);
});

//It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.
$(document).ready(function(){}) //or,
$(function() {} );

//Dimensions Methods: width() - padding margin border are excluded, height(), innerWidth(), innerHeight() - padding included, outerWidth(), outerHeight() - margin included

//jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements. Start with one selection and move through that selection until you reach the elements you desire.
//Ancestors- parent(), parents(), parentsUntil()
//Descendants- children(), find()
//Siblings- siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), prevUntil()
//Filtering: first(), last(), eq(index_number), not()

//Jquery Misc- If use with other framework- To Avoid Conflict of $
var jq = $.noConflict();
jq(document).ready(function(){});

//AJAX- Know Intro(Data Communication- Request Response)
function loadData(){

    //create a new Request
    //XMLHttpRequest is browser built in object- Its just a name, we can pass any data like json data, not just xml data
    const xhr = new XMLHttpRequest();

    //What to do when response arrives
    xhr.onload = function(){
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    }

    //Prepare Request
    xhr.open("GET", "./data/data.txt");

    //Send Request
    xhr.send();

    //Fetch API is a simpler way to use ajax
}
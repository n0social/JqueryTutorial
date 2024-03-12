
//JQUERY MAKES LIFE EASIER

//Manipulates the h1 directly
$("h1").css("color", "grey");

//Adds info to the class from CSS to JS
$("h1").addClass("big-title");

//Manipulate Text
$("h1").text("GoodBye World");

//Manipulates the CSS directly
$("button").css("background-color", "lightblue");

$("button").css("color", "white");

//$("button").text("Don't Click")
$("button").html("<em>Hey</em>");

//Manipulating Attributes
//This will select all anchor tags and change
//Attr to yahoo.com instead of google.com on the html page
$("a").attr("href", "https://www.yahoo.com").text("Search")

//Add event listeners
//This will change the color of a tag on click
$("h1").click(function() {
    $("h1").css("color", "blue");
});


//This will change the color of the h1 on click 
// of a buton
$("button").click(function(){
    $("h1").css("color", "green");
})

//This will change the input
//Log keystrokes essentially
$(document).keypress(function(event) {
    console.log(event.key);
});

//This will change the h1 tag to the text inputed 
//into the keyboard
//but only does one letter
$(document).keypress(function(event){
    $("h1").text(event.key);
});

//This will change the color of h1 on mouseover
//To a different color
$("h1").on("mouseover",function(){
    $("h1").css("color","blue");
});

//add a button before the h1
$("h1").before("<button>New Button</button>");
//after() after an element

//add an element after an element
//prepend() adds inside an element <button><prepend></prepend></button>
//append() adds after but inside the element

//remove elements of a type
//$("button").remove();

//Hide an element
//$("button").on("click", function(){
//    $("h1").hide();
//});

//Show an element
//$("button").on("click", function(){
//    $("h1").show();
//});

//Toggle an appearance ****IMPORTANT
//$("button").on("click", function(){
//    $("h1").toggle();
//});

//Fade an element ***IMPORTANT
//$("button").on("click", function(){
//    $("h1").fadeToggle();
//});

//Collapse an element and slide in
//$("button").on("click", function(){
//    $("h1").slideToggle();
//});

//Custom Animation for h1 tag
//$("button").on("click", function(){
//    $("h1").animate({opacity:0.5});
//});

//Chain attributes
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
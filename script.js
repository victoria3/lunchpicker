var lunch = ["pizza", "steak", "spaghetti", "candy", "macaronni", "taco", "fish"];

// we've created an event listener for the button to be clicked
$("button").click(function(){
 // when the button is clicked, it's going to randomly pick a place to eat
 var answer = lunch[Math.floor(Math.random() * lunch.length)]
 $("h2").text(answer);
})

/**
 * Created by Ryan on 20/09/2014.
 */
var stageSize = 960;
var mode = 1 // 1=monochrome, 2=random, 3=trails
var count = 3; //how many divs - n*n


initialise = function(count){
    // define margins
    if(count<8){
        var marginSize = 1.5;
    }
    else if(count<20){
        var marginSize = 1;
    }
    else{
        var marginSize = 0.5;
    };
    // determine div size
    var divSize = Math.floor((stageSize - 2*marginSize*(count+1)) / count);
    // create divs
    $(document).ready(function(){
        for (var i = 1; i<=(count*count); i++){
            $("#stage").append($("<div style=\"height: " + divSize + "px; width: " + divSize + "px; margin: " + marginSize + "px\"></div>"));
            if (i%count == 0){
                // clear each complete row
                $("#stage").append("<div class='clear'>")
            };
        };
    });
    return true;
};

randomHex = function(){
  //TODO
    return "#string";
};

// initialise at launch
initialise(count);
// reinitalise on button click
$(document).on("click", "#init", function(){
    $("#stage").empty();
    // TODO - get and set count
    initialise(count);
    // TODO - get & set Mode

})

// define hover behaviour
$(document).on("mouseover", "#stage>div", function(){
    if(mode == 1 || mode == 3){
        // TODO - make sexy
        $(this).css("background-color","black");
    };
    if(mode == 2){
        // TODO - random colour
        $(this).css("background-color",randomHex());
    };
});

$(document).on("mouseout", "#stage>div", function(){
    if(mode == 3){
        // TODO - slowly fade back to normal
        $(this).css();
    };
});
//Keep track of the size and coloring option. 
var current_size = 16;


$(document).ready(function(){

    load(current_size);
    default_color();

});


//Build the grid
function load(size) {
    var square_size = $("#container").width() / size - 2; // -2 for borders
    
    //create the size of the grid
    for(var i = 0; i < size; i++){

        for(var j = 0; j < size; j++){

            $("#container").append("<div class='square'></div>");
        }

        $("#container").append("<div class='new_row'></div>");
    }

    //Create row height
    $(".square").css('width', square_size);
    $(".square").css('height', square_size);
    
};

//change the color on hover
function default_color(){

    $(".square").hover(function(){

        $(this).css('background-color', 'white');

    });

};


//clear and reset the grid
function clearSquare(){

    $(".square").remove();
    load(current_size);
    default_color();
    


};

//give new size to grid
function newSize(){

    var size = prompt("Enter a new size! Size MUST be than 2 and less than 50.");

    if((size < 50) && (size > 2)){
        current_size = size;
        clearSquare();
    } else {
        alert("Oops! You entered a size too big. Please try again!");
        newSize();
    }
}



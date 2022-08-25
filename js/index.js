$("#buttonX").on("click", function(){
    $("#buttonX").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
      });
});

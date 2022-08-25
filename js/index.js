$("#buttonX").on("click", function(){
    $("#buttonX").hover(function(){
        $(this).css("background-color", "green");
        }, function(){
        $(this).css("background-color", "purple");
      });
});

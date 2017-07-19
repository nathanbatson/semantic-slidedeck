$(function(){
  $(".illustration a").colorbox({
    transition:"fade",
    maxWidth: "95%",
    maxHeight: "95%"
  });
  
  $("#illustration .tags a").click(function(){
    if(!$(this).hasClass("selected")){
      var tag = $(this).attr("href").replace("#", "") ;
      
      console.log("tag is " + tag)
      
      if(tag == "all"){
        $("#illustrations .illustration").show();
      }else{
        $("#illustrations .illustration").hide();
        $("#illustrations .illustration." + tag).show();
      }
      
      $("#illustration .tags a").removeClass("selected");
      $(this).addClass("selected");
      
      return false;
    }
  });
  
  $("#work .tags a").click(function(){
    if(!$(this).hasClass("selected")){
      var tag = $(this).attr("href").replace("#", "") ;
      
      console.log("tag is " + tag)
      
      if(tag == "all"){
        $("#work .project").show();
      }else{
        $("#work .project").hide();
        $("#work .project." + tag).show();
      }
      
      $("#work .tags a").removeClass("selected");
      $(this).addClass("selected");
      
      return false;
    }
  });
});
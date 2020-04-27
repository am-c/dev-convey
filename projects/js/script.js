$(document).ready(function() {
  
     var map = '<iframe style="width: 100%; height: 400px;"src="https://maps.arcgis.com/apps/webappviewer/index.html?id=3d5cd625418c40119a5012d0d1d44b3e"></iframe>'
     if ($(".fwMap").length >= 0) {
  
       $(".fwMap").html(map);
     }
  
     if ($(".mobileMap").length >= 0) {
  
       $(".mobileMap").html(map);
     }
  


   });
  
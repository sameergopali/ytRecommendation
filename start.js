    //Creating Elements
function insert_main() {
    (function(document) {
        "use strict";
        var s = document.createElement("script");
        s.src = chrome.extension.getURL("main.js");
        s.onload = function() {
            this.parentNode.removeChild(this);
            s = undefined
        };
        document.documentElement.appendChild(s)
    })(window.document);
}

$(document).on("click", ".next_btn", function(){
    var alink = $(this).parent().find('a');
	var ahref =  alink.attr('href');
	var title = alink.find('h3').find('span').attr('title');
	var data = { ref:ahref, name: title};
	
	
	if( JSON.parse(localStorage.getItem('queue'))!= null)
	{
		var queue = JSON.parse(localStorage.getItem('queue'));
		queue.push(data);
	}
	else{
	   queue.push(data);
	}
	
    localStorage.setItem('queue',JSON.stringify(queue));
	
	console.log(queue);
});


function insert(){
	$( '<button data-role="button" class="next_btn"  >Add to queue</a>').appendTo( '.style-scope ytd-compact-video-renderer' );					
     }
  
 


  
window.addEventListener("yt-navigate-finish", process); 

function process() {
 		var element = document.getElementById("playNext");
		if(element != null)
		element.parentNode.removeChild(element);
 setTimeout(insert_main,4000);
 setTimeout(insert,2000);

}

window.addEventListener("message", function(request) { 

	console.log("entered on finsihed");
    if (request.data == "YourName_expectedMessage") //note that there are likely many script on the page or it's child frames that also send messages to this page, so you better name your message so that is unique in the entire world.
    { 
	if( JSON.parse(localStorage.getItem('queue'))!= null){
	
		var queue = JSON.parse(localStorage.getItem('queue'));
	
	if(queue.length > 0){
			var ahref = document.createElement("a");
			ahref.setAttribute('href' , queue[0].ref);
			ahref.click();
			console.log(ahref);
		    queue.splice(0,1);
	localStorage.setItem('queue',JSON.stringify(queue));
	}
	
	else{
		console.log("found empty");
	}
	
	}
	

	else{
	 console.log("press add to queue");
	}
			
		//	var a =  document.getElementsByClassName( "yt-simple-endpoint style-scope ytd-compact-video-renderer" )[2];
		//	a.setAttribute('href' , queue[0].ref);
		//	a =  document.getElementsByClassName( "yt-simple-endpoint style-scope ytd-compact-video-renderer" )[2];
			//console.log(a);

		   

		  
		
		
		//playNext.click();
    } 

}, true);

console.log("ok,in extension");
var queue =[];



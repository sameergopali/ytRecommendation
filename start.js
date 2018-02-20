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

	
function insert(){

    var to_match = 'a[class="';
        to_match = to_match.concat("yt-simple-endpoint style-scope ytd-compact-video-renderer", '"]');
	var links = document.querySelectorAll(to_match);
	for( i = 0; i < links.length; i++){
		var link = links[i];
	    //var video_link = link.href;
		var video_title = link.querySelector('span').title;
		console.log(video_title);
		
				if(i == 1 ){
					var node = document.createElement("p");   
					node.setAttribute("id", "playNext");
					var textnode = document.createTextNode("Playing Next");        
					node.appendChild(textnode);  
					link.appendChild(node);
					}	
		
	}
	 playNext = links[1];
	}


	var playNext;

	console.log("ok");
	console.log(document.readyState);

/* 	chrome.runtime.onMessage.addListener( 
    function(request, sender, sendResponse) {
	//setTimeout(insert,5000);
    if (request.greeting == "hello"){
		    console.log(document.readyState);

	sendResponse({farewell: "goodbye"});}
    return true;
  });  */

  

  
window.addEventListener("yt-navigate-finish", process); // new youtube design
//window.addEventListener("load", process); // one-time late postprocessing 

function process() {
 //getPlayer();
 		var element = document.getElementById("playNext");
		if(element != null)
		element.parentNode.removeChild(element);

 setTimeout(insert_main,4000);
 setTimeout(insert,2000);

}
window.addEventListener("message", function(request) { 

    if (request.data == "YourName_expectedMessage") //note that there are likely many script on the page or it's child frames that also send messages to this page, so you better name your message so that is unique in the entire world.
    { 
		var element = document.getElementById("playNext");
		element.parentNode.removeChild(element);
		console.log("end");
		playNext.click();
    } 

}, true);

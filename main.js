console.log("ok");
function run_now() {
	player = document.getElementById('movie_player');
	player.addEventListener("onStateChange", "onPlayerStateChanged");
}
run_now();
function onPlayerStateChanged(newState) {
// -1 (unstarted)
// 0 (ended)
// 1 (playing)
// 2 (paused)
// 3 (buffering)
// 5 (video cued).

if(newState == 0){
		window.postMessage("YourName_expectedMessage", "*");


}
	// console.log(localStorage);
}
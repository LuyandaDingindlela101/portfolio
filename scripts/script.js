//	Toggle Menu for mobile function
function toggleMenu(){
	document.getElementsByClassName('nav-list')[0].classList.toggle('active')
}

//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
// 	keyup EVENT, THEN RUN THE CALLBACK FUNCTION
document.body.addEventListener('keyup', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THEN CHANGE THE THEME
	if(e.code == "Space") {
		// 	CALL THE toggleTheme() FUNCTION
		toggleTheme();
	}
})


// FUNCTION TO MAKE THE THEME CHANGE
function toggleTheme() {
	//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
	// 	keyup EVENT, THEN toggle THE dark-mode CLASS
	document.body.classList.toggle('dark-mode');	
}

const custom_cursor = document.querySelector(".custom-cursor");
// FUNCTION TO MAKE THE custom_cursor MOVEWITH THE MOUSE
document.addEventListener('mousemove', function(e) {
	custom_cursor.style.top = (e.pageY- 10) + "px";
	custom_cursor.style.left = (e.pageX -10) + "px";
})


const site_links = document.querySelectorAll("a")
site_links.forEach(function(link) {
	link.addEventListener("mouseover", function() {
		custom_cursor.classList.add("expand");
	})
	link.addEventListener("mouseleave", function() {
		custom_cursor.classList.remove("expand");
	})
})
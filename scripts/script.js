//	Toggle Menu for mobile function
function toggleMenu(){
	//	IN THE document OBJECT, SELECT AN ELEMENT WITH THE active CLASS AND TOGGLE THE active CLASS
	document.getElementsByClassName('nav-list')[0].classList.toggle('active')
}

//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
// 	keyup EVENT, THEN RUN THE CALLBACK FUNCTION
document.body.addEventListener('keyup', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THE tagName IS NOT EQUAL TO INPUT AND T THEN CHANGE THE THEME
	if(e.code == "Space" &&  e.target.tagName.toUpperCase() !== "INPUT" && e.target.tagName.toUpperCase() !== "TEXTAREA") {
		// 	CALL THE toggleTheme() FUNCTION
		toggleTheme();
	}
})
document.body.addEventListener('keydown', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THE tagName IS NOT EQUAL TO INPUT AND T THEN CHANGE THE THEME
	if(e.code == "Space" &&  e.target.tagName.toUpperCase() !== "INPUT" && e.target.tagName.toUpperCase() !== "TEXTAREA") {
		// 	CALL THE toggleTheme() FUNCTION
		e.preventDefault();
	}
})

// FUNCTION TO MAKE THE THEME CHANGE
function toggleTheme() {
	//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
	// 	keyup EVENT, THEN toggle THE dark-mode CLASS
	document.body.classList.toggle('dark-mode');	
}


// 	CREATE A VARIABLE FOR custom_cursor TO HOLD THE .custom-cursor
const custom_cursor = document.querySelector(".custom-cursor");
// FUNCTION TO MAKE THE custom_cursor MOVEWITH THE MOUSE
document.addEventListener('mousemove', function(e) {
	// 	DYNAMICALLY ADJUST THE TOP POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.top = (e.pageY- 10) + "px";
	// 	DYNAMICALLY ADJUST THE LEFT POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.left = (e.pageX -10) + "px"; 
})


// 	querySelectorAll RETURNS A LIST[] OF ALL THE a TAGS
const site_links = document.querySelectorAll("a")
// 	HERE, WE LOOP THROUGH THE LIST 
site_links.forEach(function(link) {
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseover", function() {
		// 	WHEN THE link IS HOVERED ON, ADD THE expand CLASS
		custom_cursor.classList.add("expand");
	})
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseleave", function() {
		// 	WHEN THE MOUSE LEAVES THE Link, REMOVE THE expand CLASS
		custom_cursor.classList.remove("expand");
	})
})


// 	CREATE A VARIABLE FOR preloader TO HOLD THE .preloader
const preloader = document.querySelector('.preloader');
// 	FUNCTION FOR THE preloader EFFECT THAT HAPPENS EVERY 100 SECONDS
const fadeEffect = setInterval(() => {
	// 	IF THE preloader DOESN'T HAVE THE OPACITY THEN IT WILL BE EQUAL TO AN EMPTY STRING
	// 	HERE, WE CHECK IF THE preloader'S OPACITY IS NOT SET 
	if (!preloader.style.opacity) {
		// 	IF IT ISNT, SET IT TO 1
	  preloader.style.opacity = 1;
	}

	// NOW, WE CHECK IF THE OPACITY IS MORE THAN 0 OR NOT
	if (preloader.style.opacity > 0) {
		// 	IF YES, THEN DECREASES ITS VALUE BY .1
	  preloader.style.opacity -= 0.1;
	} else {
		// HERE, WE CLEAR THE INTERVAL TIMER THAT WAS SET OUTSIDE
	  clearInterval(fadeEffect);
	}
	// SET A TIMER FOR 100 MILLISECONDS
}, 100);


// ADD A load EVENT LISTENER TO THE window, THEN RUN THE fadeEffect FUNCTION
window.addEventListener('load', fadeEffect);
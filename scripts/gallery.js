// GET ALL THE FILTER BUTTONS
let all_btn = document.querySelector(".all-btn");
let python_btn = document.querySelector(".python-btn");
let web_design_btn = document.querySelector(".web-design-btn");

// GET ALL THE PROJECTS
let python_projects = document.querySelectorAll(".python");
let web_design_projects = document.querySelectorAll(".web-design");

web_design_btn.addEventListener("click", function() {
	// 	ADD THE primary CLASS ON THE all_btn
	web_design_btn.classList.add("primary");
// 	REMOVE THE primary CLASS FROM THE OTHER BUTTONS
	all_btn.classList.remove("primary");
	python_btn.classList.remove("primary");
	
	hide_projects(python_projects);
	show_projects(web_design_projects);
})





// ADD EVENT LISTENERS
all_btn.addEventListener("click", function() {
// 	ADD THE primary CLASS ON THE all_btn
     all_btn.classList.add("primary");
     
     // 	REMOVE THE secondary CLASS FROM THE CURRENT BUTTON
     all_btn.classList.remove("secondary");

     // 	REMOVE THE primary CLASS FROM THE OTHER BUTTONS
     python_btn.classList.remove("primary");
     web_design_btn.classList.remove("primary");

     // 	ADD THE secondary CLASS FROM THE OTHER BUTTONS
     python_btn.classList.add("secondary");
     web_design_btn.classList.add("secondary");

     show_projects(python_projects);
     show_projects(web_design_projects);
});

web_design_btn.addEventListener("click", function() {
// 	ADD THE primary CLASS ON THE all_btn
     web_design_btn.classList.add("primary");

     // 	REMOVE THE secondary CLASS FROM THE CURRENT BUTTON
     web_design_btn.classList.remove("secondary");

     // 	REMOVE THE primary CLASS FROM THE OTHER BUTTONS
     all_btn.classList.remove("primary");
     python_btn.classList.remove("primary");

     // 	ADD THE secondary CLASS FROM THE OTHER BUTTONS
     all_btn.classList.add("secondary");
     python_btn.classList.add("secondary");
     
     hide_projects(python_projects);
     show_projects(web_design_projects);
});
     

python_btn.addEventListener("click", function() {
// 	ADD THE primary CLASS ON THE all_btn
     python_btn.classList.add("primary");

     // 	REMOVE THE secondary CLASS FROM THE CURRENT BUTTON
     python_btn.classList.remove("secondary");

     // 	REMOVE THE primary CLASS FROM THE OTHER BUTTONS
     all_btn.classList.remove("primary");
     web_design_btn.classList.remove("primary");

     // 	ADD THE secondary CLASS FROM THE OTHER BUTTONS
     all_btn.classList.add("secondary");
     web_design_btn.classList.add("secondary");
     
     show_projects(python_projects);
     hide_projects(web_design_projects);
});





//   FUNCTION DECLARATIONS 
function show_projects(projects_array) {
	for(let i = 0; i < projects_array.length; i++) {
		projects_array[i].style.display = "block";
	}
}

function hide_projects(projects_array) {
	for(let i = 0; i < projects_array.length; i++) {
		projects_array[i].style.display = "none";
	}
}

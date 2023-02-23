//ref: ychaikin/github
//
$(function (){
	$("#navbarToggler").blur(function (event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#navbarNav").collapse('hide');
		}
	});
	$("#navbarToggle").click(function(event){
		$(event.target).focus();
	});

//routing
//ref: mitchwadair/github
//
const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

const routes = {
	"/": "/pages/home.html", 
	"/about": "/pages/about.html",
	"/projects": "/pages/projects.html",
	"/blog": "/pages/underConst.html",
	"/resources": "pages/underConst.html",
	"/contact": "pages/contact.html",
	"/origami": "pages/origami.html",
	404: "/pages/404.html"
};

const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || route[404];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById("main-content").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
});
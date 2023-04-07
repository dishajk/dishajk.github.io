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


	const button = document.getElementById('aboutButton');
	const mainContent = document.getElementById('main-content');
	var aboutHtml = "about.html";

	button.addEventListener('click', function(){

		$ajaxUtils.sendGetRequest(aboutHtml, function(responseText){
			mainContent.innerHTML = responseText;
			      history.pushState(null, null, '/about');
		}, false);
	});


	function route(event){

		if (!this.classList.contains("nav-link")) {
			return;
		}

		event.preventDefault();

		const href = this.getAttribute("href");
		
		$ajaxUtils.sendGetRequest('pages/${href}.html', function(responseText){
			mainContent.innerHTML = responseText;
			history.pushState({}, "", href);
		}, false);
	}
		const menuLinks = document.querySelectorAll("a.nav-link");
	menuLinks.forEach(link => {
		link.addEventListener("click", route);
	});

	function loadContent() {
  	// Get the variable value from the URL
  	const urlParams = new URLSearchParams(window.location.search);
  	const foobar = urlParams.get("foobar");

  	// Check if the variable value is not empty
  	if (foobar) {
    	// Load the corresponding HTML file into #main-content
	$ajaxUtils.sendGetRequest('pages/${foobar}.html', function(responseText){
                        mainContent.innerHTML = responseText;
                }, false);
    };
  }

// Load the content when the page is ready
document.addEventListener("DOMContentLoaded", loadContent);

});

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

});

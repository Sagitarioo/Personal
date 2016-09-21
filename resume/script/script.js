$(document).ready(function(){
	$('#fullpage').fullpage(
		{
			//sectionsColor:['green','orange','gray','red'],
			resize:true,
			verticalCentered:false,
			navigation:true,
			navigationPosition:'right',
			navigationTooltips:['page1','page2','page3','page4'],
			continuousVertical:true,
			anchors:['page1','page2','page3','page4'],
			fixedElements:'.header',
		});
});


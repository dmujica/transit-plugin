$(document).foundation();

$('.box').transition({ 
	x: '40px',
	y: '100px', 
perspective: '100px',
  rotate3d: '1,1,0,180deg'
}, 9000)
		.transition({
	x: '40px',
});

console.log("ok usa!");
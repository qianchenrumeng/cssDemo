var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.domElement );
function animate() {

	stats.begin();
    


	stats.end();

	requestAnimationFrame(animate);

}

requestAnimationFrame(animate);

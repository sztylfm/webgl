function main(){
	var canvas=document.getElementById("example");
	
	var gl=getWebGLContext(canvas);
	
	if(!gl){
		console.log("Failed to get the rendering context for WebGL");
		return;
	}
	gl.clearColor(0.5,0.5,0.5,1.0);
	
	gl.clear(gl.COLOR_BUFFER_BIT);
}
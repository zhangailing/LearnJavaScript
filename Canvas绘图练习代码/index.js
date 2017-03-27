var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if(drawing.getContext){
	var context = drawing.getContext("2d");//取得2D上下文对象
	/*
	//取得图像的数据URI
	var imgURI = drawing.toDataURL("image/png");//不同域的图像会抛出错误
	//显示图像
	var image = document.cteateElement("img");
	image.src = imgURI;
	document.body.appendChild(image);
	*/
	
	/*
	context.strokeStyle = "red";//设置描边颜色
	context.fillStyle = "#0000ff";//设置填充颜色
	*/

	/*
	//绘制红色矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//绘制半透明的蓝色矩形
	context.fillStyle = "rgba(0,0,255,0.5)";
	context.fillRect(30,30,50,50);
	*/

	/*
	//绘制红色描边矩形
	context.strokeStyle = "#ff0000";
	context.strokeRect(10,10,50,50);
	//绘制半透明蓝色描边矩形
	context.strokeStyle = "rgba(0,0,255,0.5)";
	context.strokeRect(30,30,50,50);
	*/

	/*
	//绘制红色矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//绘制半透明的蓝色矩形
	context.fillStyle = "rgba(0,0,255,0.5)";
	context.fillRect(30,30,50,50);
	//在两个矩形重叠的地方清除一个小矩形
	context.clearRect(40,40,10,10);
	*/

/*	
	//绘制一个不带数字的时钟表盘
	//开始路径
	context.beginPath();
	//绘制外圆
	context.arc(100,100,99,0,2 * Math.PI,false);
	//绘制內圆
	context.moveTo(194,100)//先将路径转移到內圆的某一点，以避免绘制出多余线条
	context.arc(100,100,94,0,2 * Math.PI,false);
	//绘制分针
	context.moveTo(100,100);
	context.lineTo(100,15);
	//绘制时针
	context.moveTo(100,100);
	context.lineTo(35,100);
	//描边路径
	context.stroke();
	//在路径被关闭之前确定画布上的某一点是否位于路径上
	if(context.isPointInPath(100,100)){
		alert("Point (100,100) is in the path.");
	}
	
	//绘制文本
	context.font = "bold 14px Arial";
	context.textAlign = "center";
	context.textBaseline = "maiddle";
	context.fillText("12",100,20);
	//起点对齐
	context.textAlign = "start";
	context.fillText("12",100,40);	
	//终点对齐
	context.textAlign = "end";
	context.fillText("12",100,60);
	*/

	/*
	//measureText()计算指定文本大小
	var fontSize = 100;
	context.textBaseline = "top";
	context.font = fontSize + "px Arial";
	while(context.measureText("Hello World !").width > 140){
		fontSize--;
		context.font = fontSize + 'px Arial';
	}
	context.fillText("Hello world",10,10);
	context.fillText("Font size is" + fontSize + "px",10,50);
	*/

/*	
	//变换

	//开始路径
	context.beginPath();
	//绘制外圆
	context.arc(100,100,99,0,2 * Math.PI,false);
	//绘制內圆
	context.moveTo(194,100)//先将路径转移到內圆的某一点，以避免绘制出多余线条
	context.arc(100,100,94,0,2 * Math.PI,false);
	//变换原点
	context.translate(100,100);
	//旋转表针
	context.rotate(1);
	//绘制分针
	context.moveTo(0,0);
	context.lineTo(0,-85);
	//绘制时针
	context.moveTo(0,0);
	context.lineTo(-65,0);
	//描边路径
	context.stroke();
	*/

	/*
	//保存状态
	context.fillStyle = "#ff0000";
	context.save();

	context.fillStyle = "#00ff00";
	context.translate(100,100);
	context.save();

	context.fillStyle = "#0000ff";
	context.fillRect(0,0,100,200);

	context.restore();
	context.fillRect(10,10,100,200);
	
	context.restore();
	context.fillRect(0,0,100,200);
	*/

	/*
	//阴影(显示效果不好，基本没出来)
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 5;
	context.shadowBlur = 4;
	context.shadowColor = "ragb(0,0,0,0.5)";
	//绘制红色的矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//绘制蓝色的矩形
	context.fillStyle = "rgba(0,0,255,1)";
	context.fillRect(30,30,50,50);	
	*/
	/*
	//渐变
	var gradient = context.createLinearGradient(30,30,70,70);
	gradient.addColorStop(0,"White");
	gradient.addColorStop(1,"black");
	//绘制红色矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//绘制渐变矩形
	context.fillStyle = gradient;
	context.fillRect(30,30,50,50);

	//渐变优化，用函数创建渐变对象
	function createRectLinearGradient(context,x,y,width,height){
		return context.createLinearGradient(x,y,x+width,y+height);
	}
	var gradient = createRectLinearGradient(context,30,30,50,50);
	gradient.addColorStop(0,"white");
	gradient.addColorStop(1,"black");
	//绘制渐变矩形
	context.fillStyle = gradient;
	context.fillRect(30,30,50,50);
	//径向渐变
	var gradient = context.createRadialGradient(55,55,10,55,55,30);
	gradient.addColorStop(0,"white");
	gradient.addColorStop(1,"black");
	//绘制红色矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//绘制渐变矩形
	context.fillStyle = gradient;
	context.fillRect(30,30,50,50);
	*/
	//合成
	//绘制红色矩形
	context.fillStyle = "#ff0000";
	context.fillRect(10,10,50,50);
	//设置合成操作(Chrome有问题)
	context.globalCompositionOperation = "destination-over";
	//绘制蓝色矩形
	context.fillStyle = "rgba(0,0,255,1)";
	context.fillRect(30,30,50,50);
	}
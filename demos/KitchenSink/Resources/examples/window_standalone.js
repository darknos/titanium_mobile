//
//  When you open windows outside of tab groups, they are appear on top of either
// 	the current window or the current tab group.  These examples show you different ways 
//  to open windows outside of tab groups.
//  

var win = Titanium.UI.currentWindow;

//
//  OPEN WINDOW OUTSIDE OF TAB GROUP
//
var b1 = Titanium.UI.createButton({
	title:'Open (Plain)',
	width:200,
	height:40,
	top:10
});

b1.addEventListener('click', function()
{

	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
	});
	
	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		w.close();
	});
	
	w.open();
});

win.add(b1);

//
//  OPEN (ANIMATE FROM BOTTOM RIGHT)
//
var b2 = Titanium.UI.createButton({
	title:'Open (Nav Bar Covered)',
	width:200,
	height:40,
	top:60
});

b2.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		height:0,
		width:0,
		backgroundColor:'#336699',
		bottom:0,
		right:0,
	});
	var a = Titanium.UI.createAnimation();
	a.height = 460;
	a.width = 320;
	a.duration = 300;
	
	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		a.height = 0;
		a.width = 0;
		w.close(a);
	});
	
	w.open(a)
});

win.add(b2);

//
//  TRADITIONAL MODAL (FROM 0.8.x)
//
var b3 = Titanium.UI.createButton({
	title:'Traditional Modal',
	width:200,
	height:40,
	top:110
});

b3.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'Modal Window',
		barColor:'black'
	});
	var b = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	w.setLeftNavButton(b);
	b.addEventListener('click',function()
	{
		w.close();
	})
	w.open({modal:true})
});

win.add(b3);

//
//  OPEN (WITH ANIMATED WOBBLE)
//
var b4 = Titanium.UI.createButton({
	title:'Open (Animation Fun)',
	width:200,
	height:40,
	top:160
});

b4.addEventListener('click', function()
{
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);

	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		borderWidth:8,
		borderColor:'#999',
		height:400,
		width:300,
		borderRadius:10,
		opacity:0.92,
		transform:t
	});
	
	// create first transform to go beyond normal size
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;
	
	// when this animation completes, scale to normal size
	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete')
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(1.0);
		w.animate({transform:t2, duration:200});
		
	});
		
	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		w.close({transform:t3,duration:300});
	});
	
	w.open(a);
	
	
});

win.add(b4);

//
// OPEN (ANIMATE FROM BOTTOM)
//
var b5 = Titanium.UI.createButton({
	title:'Open (Nav Bar Visible)',
	width:200,
	height:40,
	top:210
});

b5.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		height:0,
		backgroundColor:'#000',
		bottom:0
	});

	// create window open animation	
	var a = Titanium.UI.createAnimation();
	a.height = 420;
	a.duration = 300;

	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		a.height = 0;
		w.close(a);
	});
	
	w.open(a)
});

win.add(b5);


//
//  OPEN (FULLSCREEN)
//
var b6 = Titanium.UI.createButton({
	title:'Open (Fullscreen)',
	width:200,
	height:40,
	top:260
});

b6.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
	});
	
	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		w.close();
	});
	
	w.open({fullscreen:true});
});

win.add(b6);

//
//  OPEN (CUSTOM TOOLBAR)
//
var b6 = Titanium.UI.createButton({
	title:'Open (Toolbar)',
	width:200,
	height:40,
	top:310
});

b6.addEventListener('click', function()
{
	var label = Titanium.UI.createButton({
		title:'Custom Toolbar',
		color:'#fff',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN		
	});
	
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	var close = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE		
	});
	var hello = Titanium.UI.createButton({
		title:'Hello',
		style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED		
	});
	
	
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
	});
	close.addEventListener('click', function()
	{
		Ti.API.info('IN HERE')
		w.close();
	})

	// create and add toolbar
	var toolbar = Titanium.UI.createToolbar({
		items:[hello,flexSpace,label, flexSpace,close],
		top:0,
		borderTop:false,
		borderBottom:true
	})	
	w.add(toolbar);

	var move = Titanium.UI.createButton({
		title:'Move Toolbar',
		height:40,
		width:200
	});
	w.add(move);
	
	move.addEventListener('click', function()
	{
		toolbar.animate({top:20,duration:500});
	})
	
	w.open();
});

win.add(b6);


//
// ODD SHAPED WINDOWS
//
var t = Titanium.UI.create2DMatrix();
t= t.rotate(-90);
var menuWin = Titanium.UI.createWindow({
	backgroundImage:'../images/menubox.png',
	height:178,
	width:204,
	top:32,
	right:40,
	anchorPoint:{x:1,y:0},
	transform:t,
	opacity:0
});

var t2 = Titanium.UI.create2DMatrix();

var navButton = Titanium.UI.createButton({
	title:'Toggle Window'
});
var visible = false;
navButton.addEventListener('click', function()
{
	if (!visible)
	{
		menuWin.open();
		menuWin.animate({transform:t2,opacity:1,duration:800});	
		visible=true;
	}
	else
	{
		var t = Titanium.UI.create2DMatrix();
		t= t.rotate(-90);
		menuWin.animate({transform:t,opacity:0,duration:800}, function()
		{
			menuWin.close();
		});
		visible=false;
	}
});
win.setRightNavButton(navButton);




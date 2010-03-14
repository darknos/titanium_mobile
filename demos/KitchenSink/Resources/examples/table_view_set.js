var win = Titanium.UI.currentWindow;

var data = [
	{title:'Set TableView 1', header:'Section 0'},
	{title:'Set TableView 2'},
	{title:'Set TableView 3'},
	{title:'Row4'},
	{title:'Row5'},
	{title:'Row6'},
	{title:'Row7'},
	{title:'Row8',header:'Section 1'},
	{title:'Row9'},
	{title:'Row10'},
	{title:'Row11'},
	{title:'Row12'},
	{title:'Row13'},
	{title:'Row14'},
	{title:'Row15'},
	
];

//
// Create table view
//
var tableView = Titanium.UI.createTableView({data:data});

tableView.addEventListener('click',function(e)
{
	switch(e.index)
	{
		case 0:
		{
			var data = [
				{html:'<div style="font-family:Helvetica Neue">Set TableView 1</div>', hasDetail:true, header:'Section 0'},

				{html:'<div style="font-family:Helvetica Neue">Set TableView 2</div> ', hasChild:true},

				{html:'<div style="font-family:Helvetica Neue">Set TableView 3</div> '},

				{html:'<div style="font-family:Helvetica Neue">Row 4</div> '},

				{html:'<div style="font-family:Helvetica Neue">Row 5</div> '},

				{html:'<div style="font-family:Helvetica Neue">Row 6</div> ', hasDetail:true, header:'Section 1'},

				{html:'<div style="font-family:Helvetica Neue">Row 7</div> ', hasChild:true},

				{html:'<div style="font-family:Helvetica Neue">Row 8</div> '},

				{html:'<div style="font-family:Helvetica Neue">Row 9</div> '},

				{html:'<div style="font-family:Helvetica Neue">Row 10</div> '}


			];
			
			tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});				
			break;
		}
		case 1:
		{
			var data = [
				{title:'Set TableView 1',hasDetail:true, image:'Phone.png'},
				{title:'Set TableView 2', hasChild:true, image:'Safari.png'},
				{title:'Set TableView 3', image:'iTunes.png'},
				{title:'Row 4', image:'Mail.png'},
				{title:'Row 5', image:'Mail.png'},
				{title:'Row 7', image:'Mail.png'}

			];
			tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN});

			break;
		}
		case 2:
		{
			var data = [
				{title:'Set TableView 1'},
				{title:'Set TableView 2'},
				{title:'Set TableView 3'},
				{title:'Row 4'},
				{title:'Row 5'},
				{title:'Row 6'},
				{title:'Row 7'},
				{title:'Row 8'},
				{title:'Row 9'}

			];
			tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});

			break;
		}
		
	}
		
});

win.add(tableView);
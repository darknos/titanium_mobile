// create table view data object
var data = [
	{title:'Row 1', hasChild:true},
	{title:'Row 2', hasDetail:true},
	{title:'Row 3'},
	{title:'Append Row'}
	

];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

var newRowCount = 1;
// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	if (index == 3)
	{
		var data = {title:'New Row ' + newRowCount};
		tableview.appendRow(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT});
		newRowCount++;				
	}
	else
	{
		Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();		
	}

});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

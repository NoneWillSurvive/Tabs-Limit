chrome.tabs.onCreated.addListener(function (data){

	chrome.windows.getAll({}, function(arrayWind){


		for(let i = 0; i < arrayWind.length; i++){
			console.log(arrayWind[i].id);
		}

		chrome.windows.getCurrent(function (currentWindow){

				console.log("текущее окно: " + currentWindow.id);

				chrome.tabs.query(
				{
					active: false,
					windowId: currentWindow.id	
				}, function(numTabsArray) {
					
					if(arrayWind[0].id == currentWindow.id && numTabsArray.length >= 10)
					{
						//console.log("numTabsArray.length = " + numTabsArray.length);
						chrome.tabs.remove(data['id'], alert('Вы можете открывать не более 10 вкладок, т.к. это тормозит работу Ваших коллег. По всем вопросам звоните в отдел ИТ.'));
					}
					else {
						if(arrayWind[1].id == currentWindow.id && numTabsArray.length >= 1)
						{
							chrome.tabs.remove(data['id'], alert("Вы можете открывать не более 1 вкладки в новом окне, т.к. это тормозит работу Ваших коллег. По всем вопросам звоните в отдел ИТ."));
						}
					}
				
				});
		});

	});
});

chrome.windows.onCreated.addListener(function (data){

	chrome.windows.getAll({}, function(arrayWind){
/*		for(let i = 0; i < arrayWind.length; i++){
			console.log(arrayWind[i].id);
		}
*/					
		chrome.windows.getCurrent(function (currentWindow){

			console.log(currentWindow.id);
			if (arrayWind.length > 2) 
			{
				chrome.windows.remove(currentWindow.id, alert("Максимальное количество открытых окон не должно быть больше 2-х"));
			}
		});

	});
});

/*

chrome.windows.onCreated.addListener(newWind);


function TL(data)
{

}

var arrayWind = [];

var delId;



function newWind(data) {

}



////////////////////////////////////////////////////////////////////
chrome.windows.onRemoved.addListener(function (delId) {
	console.log("удалили окно");
	console.log("ID УДАЛЕННОГО ОКНА: " + delId);
	for(var juk = 0; juk < arrayWind.length; juk++)
		{	
			if(delId == arrayWind[juk])
			{
				arrayWind.splice(juk, 1);
			}
		}
	for(var juk = 0; juk < arrayWind.length; juk++)
		console.log(arrayWind[juk]);
});
*/

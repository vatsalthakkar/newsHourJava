/**
 * 
 */
var d;
var title,author,source,description,url,img;
var db=[];
function myFunc()
	  {
		  var q=(document.getElementById("query").value);
		  var url = 'https://newsapi.org/v2/everything?' +
          'q='+q+'&' +
          'from=2018-02-26&' +
          'sortBy=popularity&' +
          'apiKey=4134c3af975a45f9b0dd1eb40d7ddc95';
			var req = new Request(url);
			
			document.getElementById("remove").innerHTML="Here are the news related to your keywords";
			fetch(req)
			    .then(function(response) {
			    	response.json().then(function(data) {
			            console.log(data);
			            console.log(data.articles);
			            content=data.articles;
			            var a;
			            
			            for(var i=0;i<data.articles.length;i++){
			            	var d1 = document.getElementById('renderData');
			            	/*title=JSON.stringify(data.articles[i].title);
			            	description=JSON.stringify(data.articles[i].description);
			            	author=JSON.stringify(data.articles[i].author);
			            	source=JSON.stringify(data.articles[i].source.name);
			            	img=JSON.stringify(data.articles[i].urlToImage);*/
			            	url=data.articles[i].url;
			            	d=[];
			            	d.push(data.articles[i].title,data.articles[i].description,data.articles[i].author,data.articles[i].source.name,url,data.articles[i].urlToImage);
			            	d1.insertAdjacentHTML('afterend', 
			            			'<div class="card mt-4">'+
				            			'<img class="card-img-top" id=\'' + "myimg"+i + '\' alt="image not available" style="height: 300px;width:500px;">'+
				            			'<div class="card-header" id=\'' + "title"+i + '\'></div>'+
				            			'<div class="card-body">'+
				            				'<h5 class="card-title" id=\'' + "desc"+i + '\'></h5>'+
				            				'<p class="card-text" id=\'' + "auth"+i + '\' ></p>'+
				            				'<a href="#" class="btn btn-primary" id=\'' + "srcname"+i + '\' ></a> '+
				            				'<button type="button" onClick="addFav(\'' + i + '\')" class="btn btn-primary">Add to favourites</button>'+
				            			'</div>'+	
			            			'</div>');
			            	var logo = document.getElementById('myimg'+i);
			            	logo.setAttribute('src',data.articles[i].urlToImage);
			            	document.getElementById("title"+i).innerHTML = ""+data.articles[i].title;
					   		document.getElementById("desc"+i).innerHTML = data.articles[i].description;
					   		document.getElementById("auth"+i).innerHTML = "Author: "+data.articles[i].author;
					   		document.getElementById("srcname"+i).innerHTML = "Source: "+data.articles[i].source.name;
					   		a= document.getElementById("srcname"+i);
					   		a.setAttribute("href", data.articles[i].url);
					   		db[i]=d;
			            }
			           
			        });
			    })
	  }

function addFav(i){
	console.log("added "+db[i][0]);
	console.log("added "+db[i][1]);
	console.log("added "+db[i][2]);
	console.log("added "+db[i][3]);
	console.log("added "+db[i][4]);
	console.log("added "+db[i][5]);
	alert("added 1 to favourite");
		var xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				
			}
		};
		
		var params = "title="+db[i][0]+"&description="+db[i][1]+"&author="+db[i][2]+"&source="+db[i][3]+"&url="+db[i][4]+"&img="+db[i][5];
		console.log(params);
		xmlhttp.open('GET',"http://localhost:8082/MyNewsAppTemp/Favourites?"+params, true);
		xmlhttp.send();
	
}

function showFav(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data=JSON.parse(this.responseText);
			 for(var i=0;i<data.articles.length;i++){
	            	var d1 = document.getElementById('myDiv');
	            	title=data.articles[i].title;
	            	description=data.articles[i].description;
	            	author=data.articles[i].author;
	            	source=data.articles[i].source;
	            	
	            	url=data.articles[i].url;
	            	d1.insertAdjacentHTML('afterend', 
	            			'<div class="card mt-4 container">'+
	            			'<img class="card-img-top" id=\'' + "favmyimg"+i + '\' alt="image not available" style="height: 300px;width:500px;">'+
	            			'<div class="card-header" id=\'' + "favtitle"+i + '\' ></div>'+
	            			'<div class="card-body">'+
	            				'<h5 class="card-title" id=\'' + "favdesc"+i + '\'></h5>'+
	            				'<p class="card-text" id=\'' + "favauth"+i + '\' ></p>'+
	            				'<a href="#" class="btn btn-primary" id=\'' + "favsrcname"+i + '\' ></a> '+
	            				'<a href="#" class="btn btn-primary"  >Your Favourite</a> '+
	            				'<button type="button" onClick="removeFav(\'' + title + '\')" class="btn btn-primary">Remove favourite</button>'+
	            			'</div>'+	
	            			'</div>');
	            	var logo = document.getElementById('favmyimg'+i);
	            	logo.setAttribute('src',data.articles[i].img);
	            	document.getElementById("favtitle"+i).innerHTML = title;
			   		document.getElementById("favdesc"+i).innerHTML = description;
			   		document.getElementById("favauth"+i).innerHTML = "Author: "+author;
			   		document.getElementById("favsrcname"+i).innerHTML = "Source: "+source;
			   		a= document.getElementById("favsrcname"+i);
			   		a.setAttribute("href", data.articles[i].url);
			   		
	            }
			
		}
	};
	xmlhttp.open('GET',"http://localhost:8082/MyNewsAppTemp/ShowFav", true);
	xmlhttp.send();
	
}

function removeFav(i){
	alert('removing favourite  '+i);
}


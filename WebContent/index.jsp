<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>MyNewsApp</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Arbutus' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Anton' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Archivo' rel='stylesheet'>
	<link href='index.css' rel='stylesheet'>
</head>
<body>
	<div class="jumbotron jumbotron-fluid">
	  <div class="container">
	    <h1 class="display-5" ><a id="header" href="index.jsp">NewsHour</a></h1>
	   
	  </div>
	  
	</div>
	<div class="container mt-5">
		
		<div class="mb-5" id="remove1">
			<form class="navbar-form navbar-left"  id= "remove" role="search" >
			  <div class="form-group" >
			    <input  id="query" type="text" class="form-control" onkeydown = "if(event.keyCode == 13) document.getElementById('submit').click()" placeholder="Enter your keywords here..">
			  </div>
			  <button type="button" id="submit" onclick="myFunc()" class="mr-3 container btn btn-default">Submit</button>
			</form>
			<div id="showFav">
		 	  <button type="button" onclick="location.href='showFav.html'" class="mt-4 container btn btn-primary">Show Fav articles</button>
			</div>
		</div>
		
		<div id="renderData"></div>
		
		
	</div>
	<script type="text/javascript" src="showFav.js"> </script>
	<script type="text/javascript" src="dataProcess.js"> </script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
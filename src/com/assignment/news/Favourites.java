package com.assignment.news;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class Favourites
 */
@WebServlet("/Favourites")
public class Favourites extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Favourites() {
		super();
		// TODO Auto-generated constructor stub
	}

	JSONObject favArt = new JSONObject();
	JSONArray articles = new JSONArray();
	int count = 0;
	int flag=0;
	JSONParser parser = new JSONParser();

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String title = request.getParameter("title");
		String description = request.getParameter("description");
		String author = request.getParameter("author");
		String url = request.getParameter("url");
		String source = request.getParameter("source");
		String img = request.getParameter("img");
		
		int length= articles.size();
		for(int i=0;i<length;i++) {
			JSONObject temp=(JSONObject) articles.get(i);
			if(temp.get("title").equals(title)){
				flag=1;
			}
		}
		
		JSONObject article = new JSONObject();
		if(flag!=1 && count<10) {
			article.put("title", title);
			article.put("description", description);
			article.put("author", author);
			article.put("source", source);
			article.put("url", url);
			article.put("img", img);
			articles.add(count,article);
			favArt.put("articles", articles);
			System.out.println("added one");
			count++;
		}
		else if(count==10) {
			System.out.println("here count=10");
			count=0;
		}
		
		try {
			FileWriter jsonFileWriter = new FileWriter(
					"//home//sapient//Desktop//Java//MyNewsAppTemp//src//com//assignment//news//fav.json");
			jsonFileWriter.write(favArt.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		response.setContentType("application/json");
		response.getWriter().write(favArt.toString());

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
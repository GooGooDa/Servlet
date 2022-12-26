package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/hello3")
public class HelloServlet3 extends HttpServlet{

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException , IOException{
		PrintWriter out = response.getWriter();
		
		String c = request.getParameter("c");
		int count = 10;
		if(c != null)
			count = Integer.parseInt(c);
		for(int i=0;i<count;i++)
		out.println("Hello Servlet");
	}
}

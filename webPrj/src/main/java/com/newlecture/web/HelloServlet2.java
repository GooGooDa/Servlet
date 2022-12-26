package com.newlecture.web;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/hello2")
public class HelloServlet2 extends HttpServlet{
	public void service(HttpServletRequest request , HttpServletResponse response) throws ServletException , IOException{
	PrintWriter out = response.getWriter(); //response 응답
	
	String c = request.getParameter("c");
	
	int  count = 10;
	if(c != null)
	count = Integer.parseInt(c);
	
	
	
	for(int i=0;i<count;i++)
	out.println("Hello2");
	
	}
}

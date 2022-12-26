package com.newlecture;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;

public class Nana extends HttpServlet{
	public void service(HttpServlet request, HttpServlet response){
								System.out.println("Hello Servlet!");
}
}
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;

import org.apache.catalina.connector.Response;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
//Server
@WebServlet("/hello")//서블릿 컨테이너 생성
public class HelloServlet extends HttpServlet {
@Override
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	//	response.getOutputStream();  문자출력
	//문자열 출력
	PrintWriter out = response.getWriter();
	response.setCharacterEncoding("UTF-8");
	response.setContentType("text/html; charset=UTF-8");
	String c = request.getParameter("c");
	//모든입력은 문자열 int로 쓰길원하면 변경해줘야함
	
	//쿼리스트리으로 전달받으면 변경될 예정(기본값 10세팅)
	int count = 10;
	
	if(c!=null)
		count = Integer.parseInt(c);
	//모든입력은 문자열 int로 쓰길원하면 변경해줘야함
	
	// 과거에는 다국어 지원불가 했었음
	//PrintStream out = new PrintStream(response.getOutputStream());
	for(int i=0;i<count;i++) {
	out.println("안녕하세요 servlet");//요청시 객체생성후 전달
	}
	}
}

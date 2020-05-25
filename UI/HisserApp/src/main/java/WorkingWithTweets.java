import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.*;

@WebServlet(name = "WorkingWithTweets")
public class WorkingWithTweets extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.setContentType("application/json");
            response.getOutputStream().println(Posts.GetPost(request.getParameter("id")).toJSstring());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            StringBuffer jb = new StringBuffer();
            String line = null;
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null)
                jb.append(line);

            Posts.AddPost(request.getParameter("id"), Post.toPost(jb.toString()));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.getOutputStream().println(Posts.GetPost(request.getParameter("id")).toJSstring());
            Posts.DeletePost(request.getParameter("id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
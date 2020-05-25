import java.sql.*;

class Database {

    private String jdbcURL = "jdbc:mysql://localhost:3306/hisserapp_database";
    private String jdbcUsername = "root";
    private String jdbcPassword = "dNG91bpc";

    public static Connection getConnection() {

        Connection connection = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hisserapp_database", "root", "dNG91bpc");
        }catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }

        return connection;
    }

    public static Post getPost(String id) throws SQLException {

        PreparedStatement statement = null;
        ResultSet result = null;

        try {
            statement = Database.getConnection().prepareStatement(
                    "SELECT posts.post_id, description, created_at, name, photo_link, hashtags, likes  \n" +
                    "FROM hisserapp_database.posts INNER JOIN hisserapp_database.users \n" +
                    "ON hisserapp_database.posts.user_id = hisserapp_database.users.user_id");
            result = statement.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        while (result.next()){
            if(String.valueOf(result.getInt(1)).equals(id)){
                break;
            }
        }

        String[] hashTags = null;
        if(result.getString(6)!=null){
            hashTags = result.getString(6).split(" ");
        }

        String[] likes = null;
        if(result.getString(7)!=null){
            likes = result.getString(7).split(" ");
        }

        return new Post(result.getString(1), result.getString(2), result.getString(3),
                result.getString(4), result.getString(5), hashTags, likes);
    }

    public static Boolean addPost(String id, Post post) throws SQLException {

        PreparedStatement statement = null;

        try {
            String values="("+Integer.parseInt(post.getId())+", "+Integer.parseInt(id)+", \""+post.getDescription()+"\", \""
                    +post.getCreatedAt()+"\", "+post.getPhotoLink()+", \""+String.join(" ", post.getLikes())+"\", \""
                    +String.join(" ", post.getHashTags()) + "\")";
            statement = Database.getConnection().prepareStatement(
                    "INSERT INTO hisserapp_database.posts (post_id, user_id, description, created_at, photo_link, hashtags, likes) VALUES " + values);
            System.out.println("INSERT INTO hisserapp_database.posts (post_id, user_id, description, created_at, photo_link, hashtags, likes) VALUES " + values);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return true;
    }

    public static void deletePost(String id) throws SQLException {

        PreparedStatement statement = null;

        try {
            statement = Database.getConnection().prepareStatement("DELETE from hisserapp_database.posts where post_id = " + id +";");
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

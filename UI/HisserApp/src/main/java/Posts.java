import java.sql.SQLException;
import java.util.ArrayList;
import java.util.regex.*;

class Post {
    private String id;
    private String description;
    private String createdAt;
    private String author;
    private String photoLink;
    private String[] hashTags;
    private String[] likes;

    public Post(String id, String description, String createdAt, String author, String photoLink, String[] hashTags, String[] likes)
    {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
        this.hashTags = hashTags;
        this.likes = likes;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setHashTags(String[] hashTags) {
        this.hashTags = hashTags;
    }

    public void setLikes(String[] likes) {
        this.likes = likes;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public String[] getHashTags() {
        return hashTags;
    }

    public String getHashTagsAsJSstring() {

        String hashTags = "[\"";

        if (this.hashTags != null) {
            for (int i = 0; i < this.hashTags.length - 1; i++) {
                hashTags += this.hashTags[i] + "\", \"";
            }
            hashTags += this.hashTags[this.hashTags.length - 1];
        }

        hashTags += "\"]";

        return hashTags;
    }

    public String[] getLikes() {
        return likes;
    }

    public String getLikesAsString() {

        String likes = "[\"";

        if (this.likes != null) {
            for (int i = 0; i < this.likes.length - 1; i++) {
                likes += this.likes[i] + "\" , \"";
            }
            likes += this.likes[this.likes.length - 1];
        }

        likes += "\"]";

        return likes;
    }

    public String toJSstring(){
        return "{\n\"id\" : \""+this.id+"\",\n\"description\" : \""+this.description+"\",\n\"createdAt\" : \""+this.createdAt
                +"\",\n\"author\" : \""+this.author+"\",\n\"photoLink\" : \""+this.photoLink
                +"\",\n\"hashTags\" : "+this.getHashTagsAsJSstring()+",\n\"likes\" : "+this.getLikesAsString()+","+"\n}";

    }

    static public Post toPost(String jsPost) {

        ArrayList<String> fields = new ArrayList<String>();
        int numLikes = 0;

        Pattern pattern = Pattern.compile("\".+?\"");
        Matcher matcher = pattern.matcher(jsPost);
        while (matcher.find()) {
            fields.add(jsPost.substring(matcher.start()+1, matcher.end()-1));

            if (fields.get(fields.size() - 1).equals("likes")) {
                numLikes = fields.size() - 1;
            }
        }

        String[] hashTags = new String[numLikes - 11];
        String[] likes = new String[fields.size() - numLikes - 1];

        for (int i = 11, k = 0; k < hashTags.length; k++, i++) {
            hashTags[k] = fields.get(i);
        }

        for (int i = numLikes + 1, k = 0; k < likes.length; k++, i++) {
            likes[k] = fields.get(i);
        }

        return new Post(fields.get(1), fields.get(3), fields.get(5),
                fields.get(7), fields.get(9), hashTags, likes);
    }
}

class Posts {

    static ArrayList<Post> posts = new ArrayList<Post>();

    static public Post GetPost(String id) throws SQLException {

        /*for(Post post : posts) {
            if(post.getId().equals(id)){
                return post;
            }
        }*/

        return Database.getPost(id);
    }

    static public boolean AddPost(String id, Post post) throws SQLException {

        //Posts.posts.add(post);
        Database.addPost(id, post);

        return true;
    }

    static public boolean EditPost(Post post){

        for(int i = 0; i < Posts.posts.size()-1; i++) {
            if (Posts.posts.get(i).getId() == post.getId()) {
                Posts.posts.set(i, post);
                return true;
            }
        }

        return false;
    }

    static public void DeletePost(String id) throws SQLException {

        /*for(int i = 0; i < Posts.posts.size()-1; i++) {
            if (Posts.posts.get(i).getId() == id) {
                Posts.posts.remove(i);
                return true;
            }
        }*/

        Database.deletePost(id);
    }
}
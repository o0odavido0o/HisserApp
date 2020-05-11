SELECT name
FROM hisserapp_database.users INNER JOIN hisserapp_database.posts
ON hisserapp_database.posts.user_id = hisserapp_database.users.user_id
GROUP BY users.user_id
HAVING COUNT(post_id) > 3;

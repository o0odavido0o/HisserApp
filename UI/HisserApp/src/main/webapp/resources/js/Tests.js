"use strict";

let addedPost = {

    id: "21",

    description: "New day. New monsters.",

    createdAt: new Date(),

    author: "Grey Warden",

    photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

    hashTags: ["#monsters", "#deadsoldiers"],

    likes: ["Grey Order"],

};

let editedPost = {

    id: "0",

    description: "New day. New darkspawns.",

    createdAt: new Date(),

    author: "",

    photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

    hashTags: ["#darkspawns"],

    likes: ["Grey Order"],

};

let filters = {

    author: "Grey Warden",

    hashTags: ["#darkspawns"],

};

let user={

    name: "Grey Warden",

    photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

};

let userView = new UserView(user, fillingOfPosts);

let postFeed = new PostForm(fillingOfPosts, userView);
postFeed.showPostsFeed();
postFeed.add(addedPost);
postFeed.edit('21', editedPost);
postFeed.remove(2);
userView.addLike('21', postFeed.get('21'));
userView.removeLike('6', postFeed.get('6'));
//userView.addLike('6', postFeed.get('6'));
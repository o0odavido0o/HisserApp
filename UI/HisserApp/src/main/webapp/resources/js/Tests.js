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

let userView = new UserView(user);

let postFeed = new PostForm(fillingOfPosts, userView);
postFeed.ShowPostsFeed();
postFeed.Add(addedPost);
postFeed.Edit('21', editedPost);
postFeed.Remove(2);
"use strict";

let postFilling = [];

let hashTag = ["#Normandy"];
let like = ["Government"];
let post = {

	id: "1",

	description: "I won`t allow quarrels with me at my ship. Especially when it does my ship.",

	createdAt: new Date(),

	author: "David Shepard",

	photoLink: "https://w-dog.ru/wallpapers/1/59/438279462138807/mass-effect-3-igra.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Corporations", "#Cold"];
like = ["David Shepard"];
post = {

	id: "2",

	description: "I don`t know which is worse: cold or corporations. The first - frostbite your ass, the " +
		"second - will sell it directly from under you.",

	createdAt: new Date(),

	author: "Joker",

	photoLink: "resources/Images/PostFilling/Joker.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = [];
like = [];
post = {

	id: "3",

	description: "Here are some who complain that there are a lot of people in residential areas. But "+
	"somehow I don`t. Before me all part.",

	createdAt: new Date(),

	author: "Rex",

	photoLink: "https://i.ytimg.com/vi/R00KA_Izkdo/maxresdefault.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Thoughts"];
like = ["David Shepard"];
post = {

	id: "4",

	description: "Why is it whenever someone says \"with all due respect\", they really mean \"kiss my ass\"?",

	createdAt: new Date(),

	author: "Ashley Williams",

	photoLink: "https://i.pinimg.com/originals/86/73/ef/8673ef87828cdf8bc0606e6b9636f8f3.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Thoughts"];
like = [];
post = {

	id: "5",

	description: "Your species must know its place.",

	createdAt: new Date(),

	author: "Saren Arterius",

	photoLink: "https://staticdelivery.nexusmods.com/images/237/1751295-1391787514.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#World", "#Hero"];
like = ["Grey Warden", "Leliana", "Wynne", "Alistair"];
post = {

	id: "6",

	description: "I will save this world at any cost!",

	createdAt: new Date(),

	author: "Grey Warden",

	photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Despair"];
like = [];
post = {

	id: "7",

	description: "If earlier it was possible to hide from despair, now it appeared and waved a pen.",

	createdAt: new Date(),

	author: "Alistair",

	photoLink: "https://hautegamer.files.wordpress.com/2011/05/alistair.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Humans", "#Weakness"];
like = [];
post = {

	id: "8",

	description: "Humans, they are so ignorant and weak, even the best of them.",

	createdAt: new Date(),

	author: "Sheyla",

	photoLink: "https://i.ytimg.com/vi/XRuOrDvbuC8/maxresdefault.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Love"];
like = ["Grey Warden","Leliana"];
post = {

	id: "9",

	description: "Love is immensely selfish. It requires that the lover devote himself to the one and "+
	"only person, to the one who fills his whole mind and heart and uproots everything else from them.",

	createdAt: new Date(),

	author: "Wynne",

	photoLink: "http://www.dragonage-area.ru/modules/Gallery/Files/gallery-dao-screenshots/wynne-screen-3.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Creator"];
like = [];
post = {

	id: "10",

	description: "He left us because we wanted to go our own way, even if we were to our own detriment, "+
	"and he could not look at it.",

	createdAt: new Date(),

	author: "Leliana",

	photoLink: "https://i.pinimg.com/originals/3b/74/38/3b743802cd45f05a4a23f439242710ae.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

hashTag = ["#Friends"];
like = ["Grey Warden"];
post = {

	id: "11",

	description: "Yes ... Haven`t you read fairy tales? Heroes always die, well, unless the hero has a " +
		"bosom buddy ... Then? Then friend die. Oh, now I understand what the catch is!",

	createdAt: new Date(),

	author: "Zevran",

	photoLink: "https://i.ytimg.com/vi/KbMAzloCSIE/maxresdefault.jpg",

	hashTags: hashTag,

	likes: like,

};

postFilling.push(post);

if(localStorage.getItem("postFilling") == null){
	localStorage.setItem("postFilling", JSON.stringify(postFilling));
}

if(localStorage.getItem("newId") == null){
	localStorage.setItem("newId", JSON.stringify(12));
}

/*localStorage.setItem("newId", JSON.stringify(12));
localStorage.setItem("postFilling", JSON.stringify(postFilling));*/
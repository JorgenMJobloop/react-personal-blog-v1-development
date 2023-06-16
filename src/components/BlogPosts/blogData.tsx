/*
    Code written by & owned by: https://github.com/jorgen-kodehode
    external libraries & dependencies are owned respectfully owned by:
        - ReactJS - Meta Inc. US
        - Vite - https://vite.dev
        - ECMAscript - https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
        - TypeScript - Microsoft Inc. US
        - NeoVim - https://neovim.io/

*/
// gets the post when written using the Date class dynamically to create the date array.
import post from "./examplePost.json";
const getDate = new Date;
const outputDate = getDate.toDateString()
const generateNewID = Math.floor(Math.random() * 8);

export const blogData = {
    post: post.postData.content,
    date: outputDate,
    postID: [generateNewID],
    subject: post.postData.subject,
    remote: false,
    author: "Jorgen-kodehode",
}

/*
    async functions that gathers remote blogposts, functions as intended in theory.
    when the async function(s) are running, the blogData object key "author" will dynamically
    update to the remote author(s).

*/

// async function that gathers the blogpost from author(s) public facing domain name.
async function getBlogPostRemote() {
    const response = await fetch("https://example.com")
    const readData = await response.json()
    const getPost = readData.data.map((newPost: string) => (newPost))
    for(const post in getPost) getPost.push(post)
    return getPost; 
}

// async function that checks whether the blogpost is from a remote author or not.
async function checkRemote() {
    const notRemoteOrigin = "not a remote origin post, default back to default author"
	
    if(!blogData.remote) {
        const remotePost = await fetch("https://example.com/")
	const readRemotePost = await remotePost.json()
	const sortPost = readRemotePost.data.map((sorted: string) => (sorted))
	for(const sort in sortPost) sortPost.push(sort)
	return `${sortPost} remote origin:`
    }
    else {
        return notRemoteOrigin;
    }
}
//checkRemote()

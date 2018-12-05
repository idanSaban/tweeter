class Tweeter {
    constructor() {
        this._posts = JSON.parse(localStorage.tweeterPosts || "[]")
        this.postsCounter = JSON.parse(localStorage.postsCounter || "0")
    }

    getPosts() {
        return this._posts
    }
    generatePostsID() {
        this.postsCounter++;
        return `p${this.postsCounter}`
    }
    addPost(text) {
        const newPost = new Post(this.generatePostsID(), text)
        this._posts.push(newPost);
        console.log(`ADDED POST: "${newPost.text}" ID: ${newPost.id}`);
        this.saveToStorage()
    }
    removePost(postID) {
        const indexToRemove = this._posts.findIndex(post => post.id === postID)
        console.log(`REMOVING POST: ${this._posts[indexToRemove].text}`)
        this._posts.splice(indexToRemove, 1);
        this.saveToStorage()
    }
    generateCommentID(postIndex) {
        return `c${this._posts[postIndex].comments.length}`
    }
    addComment(postID, text) {
        const postIndex = this._posts.findIndex(p => p.id === postID)
        const newComment = new Comment(this.generateCommentID(postIndex), text)
        this._posts[postIndex].comments.push(newComment)
        console.log(`ADDED COMMENT: "${newComment.text}"(ID : ${newComment.id}) AT POST ${postID}`)
        this.saveToStorage()
    }
    removeComment(postID, commentID) {
        const post = this._posts[this._posts.findIndex(p => p.id === postID)]
        const commentIndex = post.comments.findIndex(c => c.id == commentID)
        console.log(`REMOVING COMMENT: ${post.comments[commentIndex].text}, ID:${commentID}`)
        post.comments.splice(commentIndex, 1)
        //fix ID :
        post.comments.forEach(c => {
            c.id = `c${post.comments.indexOf(c)}`
        })
        this.saveToStorage()
    }


    saveToStorage() {
        localStorage.setItem('tweeterPosts', JSON.stringify(this._posts))
        localStorage.setItem('tweeterPostID', JSON.stringify(this.postsCounter))
    }
}

class Post {
    constructor(id, text) {
        this.text = text
        this.comments = []
        this.id = id
    }
}

class Comment {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

class Tweeter {
    constructor() {
        this._posts = []
    }
    getPosts() { return this._posts };

    addPost(text) {
        const newPost = new Post(text)
        this._posts.push(newPost);
        console.log(`ADDED POST: "${newPost.text}" ID: ${newPost.id}`);
    }

    removePost(postID) {
        const indexToRemove = this._posts.findIndex(post => post.id === postID)
        if (this._posts[indexToRemove]) {
            console.log(`REMOVING POST: ${this._posts[indexToRemove].text}`)
            this._posts.splice(indexToRemove, 1);
        }
        else {
            console.log("THIS POST DOESNT EXIST");
        }
    }
    addComment(postID, text) {
        const postIndex = this._posts.findIndex(p => p.id === postID)
        this._posts[postIndex].addComment(text)

    }
    removeComment(postID, commentID) {
        const postIndex = this._posts.findIndex(p => p.id === postID)
        this._posts[postIndex].removeComment(commentID)
    }
}


class Post {
    constructor(text) {
        this.text = text
        this.comments = []
        this.id = Post.generatePostsID()
    }
    static generatePostsID() {
        Post.postsCounter++;
        return `p${Post.postsCounter}`
    }

    generateCommentID() {
        const id = this.comments.length
        return `c${id}`
    }

    addComment(text) {
        const newComment = new Comment(this.generateCommentID(), text)
        this.comments.push(newComment);
        console.log(`ADDED COMMENT: "${newComment.text}"(id : ${newComment.id}) AT POST ${this.id}`)
    }
    removeComment(commentID) {
        const commentIndex = this.comments.findIndex(c => c.id == commentID)
        console.log(commentIndex)
        console.log(`REMOVING COMMENT: ${this.comments[commentIndex].text}`)
        this.comments.splice(commentIndex, 1)
        // //fix ID :
        this.comments.forEach(c => {
            c.id = `c${this.comments.indexOf(c)}`
        })
    }
}
Post.postsCounter = 0;

class Comment {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

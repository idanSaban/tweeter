const Tweeter = () => {
    // An array of posts
    const _posts = [
        {
            text: "First post!",
            id: "p0",
            comments: [
                { id: "c0", text: "First comment on first post!" },
                { id: "c1", text: "Second comment on first post!!" },
                { id: "c2", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p1",
            comments: [
                { id: "c0", text: "Don't wory second poster, you'll be first one day." },
                { id: "c1", text: "Yeah, believe in yourself!" },
                { id: "c2", text: "Haha second place what a joke." }
            ]
        },
    ]

    const getPosts = () => _posts;

    //this one will remove the letter from id and return a number
    const getIndex = (id) => id.slice(1);

    const generatePostsID = () => `p${_posts.length}`;

    const addPost = (text) => {
        const newPost = {
            id: generatePostsID(),
            text: text,
            comments: []
        }
        _posts.push(newPost);
        console.log(`ADDED POST: "${newPost.text}" ID: ${newPost.id}`);
    }

    const removePost = (postID) => {
        if (_posts[getIndex(postID)]) {
            console.log(`REMOVING POST: ${_posts[getIndex(postID)].text}`)
            _posts.splice(getIndex(postID), 1);
            //fix ID :
            for (i in _posts) {
                _posts[i].id = `p${(i)}`;
            }
        }
        else {
            console.log("THIS POST DOESNT EXIST");
        }
    }



    const generateCommentID = (index) => `c${_posts[index].comments.length}`;

    const addComment = (postID, text) => {
        const newComment = {
            id: generateCommentID(getIndex(postID)),
            text: text
        }
        _posts[getIndex(postID)].comments.push(newComment);
        console.log(`ADDED COMMENT: "${newComment.text}" AT POST ${postID}`);
    }


    const removeComment = (postID, commentID) => {
        const comments = _posts[getIndex(postID)].comments;
        if (comments[getIndex(commentID)]) {
            console.log(`REMOVING COMMENT: ${comments[getIndex(commentID)].text}`);
            comments.splice(getIndex(commentID), 1)
            //fix ID :
            for (i in comments) {
                comments[i].id = `c${(i)}`;
            }
        }
        else {
            console.log("THIS COMMENT DOESNT EXIST")

        }
    }

    return {
        getP: getPosts,
        addP: addPost,
        removeP: removePost,
        addC: addComment,
        removeC: removeComment
    }
}

const tweeter = Tweeter()
// ======================================
//                 TESTS
// ======================================

tweeter.addP("This is my own post!")
console.log(tweeter.getP())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removeP("p0")
console.log(tweeter.getP())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.addC("p1", "Damn straight it is!")
tweeter.addC("p1", "Second the best!")
console.log(tweeter.getP())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeC("p0", "c2")
console.log(tweeter.getP())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}








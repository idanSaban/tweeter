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
    let postsCounter = 1;
    const getPosts = () => _posts;

    //OLD ONE://this one will remove the letter from id and return a number
    //const getIndex = (id) => id.slice(1);
    //i changed it because i wanted to have a real uniq id for each posts so now the id doesnt connected to the location in array
    const getIndex = (id, arr) => {
        for (let i in arr) {
            if (arr[i].id === id) {
                return i;
            }
        }
    }

    const generatePostsID = () => {
        postsCounter++;
        return `p${postsCounter}`
    };

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
        const indexToRemove = getIndex(postID, _posts);
        if (_posts[indexToRemove]) {
            console.log(`REMOVING POST: ${_posts[indexToRemove].text}`)
            _posts.splice(indexToRemove, 1);
            // //fix ID :
            // for (i in _posts) {
            //     _posts[i].id = `p${(i)}`;
            // }
        }
        else {
            console.log("THIS POST DOESNT EXIST");
        }
    }



    const generateCommentID = (index) => `c${_posts[index].comments.length}`;

    const addComment = (postID, text) => {
        if (_posts[getIndex(postID, _posts)]) {
            const newComment = {
                id: generateCommentID(getIndex(postID, _posts)),
                text: text
            }
            _posts[getIndex(postID, _posts)].comments.push(newComment);
            console.log(`ADDED COMMENT: "${newComment.text}" AT POST ${postID}`);
        }
        else{
            console.log(`post ${postID} doesnt exist`)
        }
    }


    const removeComment = (postID, commentID) => {
        console.log("\ttrying to remove a comment")
        const pIndexToRemove = getIndex(postID, _posts)
        if (_posts[pIndexToRemove]) {
            const comments = _posts[pIndexToRemove].comments;
            if (comments[getIndex(commentID, comments)]) {
                console.log(`REMOVING COMMENT: ${comments[getIndex(commentID, comments)].text}`);
                comments.splice(getIndex(commentID, comments), 1)
                //fix ID :
                for (i in comments) {
                    comments[i].id = `c${(i)}`;
                }
            }
            else {
                console.log("THIS COMMENT DOESNT EXIST")

            }
        }
        else {
            console.log("THIS POST DOESNT EXIST")
        }
    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

//const tweeter = Tweeter()
// ======================================
//                 TESTS
// ======================================

// console.log(tweeter.getP())
// tweeter.addP("This is my own post!")
// console.log(tweeter.getP())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removeP("p0")
// console.log(tweeter.getP())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.addC("p1", "Damn straight it is!")
// tweeter.addC("p1", "Second the best!")
// console.log(tweeter.getP())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeC("p0", "c2")
// console.log(tweeter.getP())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}








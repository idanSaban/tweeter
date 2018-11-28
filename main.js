const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());


// When the user clicks on the Twit button,
$("#post").on("click", function () {
    // you should grab the value from the big input 
    const postInput = $(this).closest("#container").find("#input").val();
    //and create a new post
    tweeter.addPost(postInput);
    //render again
    renderer.renderPosts(tweeter.getPosts());
})



// When the Delete Post button is clicked,
$("#posts").on("click", ".delete", function () {
    //grab the ID of the post
    const postID = $(this).closest(".post").data("id");
    // invoke the removePost function in your logic module
    tweeter.removePost(postID);
    //render again
    renderer.renderPosts(tweeter.getPosts());
})

// When the Comment button is pressed,
$("#posts").on("click", ".comment-btn", function () {
    const postID = $(this).closest(".post").data("id");
    const commentInput = $(this).closest(".post").find(".commentInput").val();
    console.log(`pID: ${postID}\ntext: ${commentInput}`);
    tweeter.addComment(postID, commentInput)
    renderer.renderPosts(tweeter.getPosts());
})




$("#posts").on("click", ".delete-comment", function () {
    const postID = $(this).closest(".post").data("id");
    const commentID = $(this).closest(".comments").data("id");
    console.log(`pID: ${postID}\ntext: ${commentID}`);
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
})

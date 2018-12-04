const tweeter = new Tweeter()
const renderer = new Renderer()
renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    // you should grab the value from the big input 
    const postInput = $(this).closest("#container").find("#input").val();
    //and create a new post
    tweeter.addPost(postInput);
    //render again
    renderer.renderPosts(tweeter.getPosts());
    $('#post').attr('disabled', true);
})
   
// When the Delete Post button is clicked,
$("#posts").on("click", ".delete", function () {
    if (confirm("Are you sure you want to remove this post?")) {
        const postID = $(this).closest(".post").data("id");
        console.log(postID)
        tweeter.removePost(postID);
        renderer.renderPosts(tweeter.getPosts());
    }
})

$("#posts").on("click", ".comment-btn", function () {
    const postID = $(this).closest(".post").data("id");
    const commentInput = $(this).closest(".post").find(".commentInput").val();
    tweeter.addComment(postID, commentInput)
    renderer.renderPosts(tweeter.getPosts());

})

$("#posts").on("click", ".delete-comment", function () {
    if (confirm("Are you sure you want to remove this comment?")) {
        const postID = $(this).closest(".post").data("id");
        const commentID = $(this).closest(".comments").data("id");
        tweeter.removeComment(postID, commentID);
        renderer.renderPosts(tweeter.getPosts());
    }
})

$("#input").on("keyup", function () {
    let disable = false;
    if ($(this).val() === "") {
        disable = true;
    }
    $("#post").attr('disabled', disable);
})

$("#posts").on("keyup", ".commentInput", function () {
    let disable = false;
    if ($(this).val() === "") {
        disable = true;
    }
    $(this).closest(".post").find(".comment-btn").attr('disabled', disable);
})


// TESTS:
const testing=()=>{
    tweeter.addPost("First post!")
    tweeter.addComment("p1","First comment on first post!")
    tweeter.addComment("p1","Second comment on first post!!")
    tweeter.addComment("p1","Third comment on first post!!")
    tweeter.addPost("Aw man, I wanted to be first")
    tweeter.addComment("p2","Don't wory second poster, you'll be first one day.")
    tweeter.addComment("p2","Yeah, believe in yourself!")
    tweeter.addComment("p2","Haha second place what a joke.")
    renderer.renderPosts(tweeter.getPosts())
}
testing()


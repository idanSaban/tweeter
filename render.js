const Renderer = () => {
    const renderComments = (comments) => {
        let output = `<ul>`;
        output+=`<input class="commentInput" type="text" placeholder="Comment..."> <button class="comment-btn" disabled="disabled"><i class="fas fa-comment"></button></i>`
        for (let comment of comments) {
            output += `<li  class="comments" data-id="${comment.id}"><i class="fas fa-trash-alt delete-comment"></i>${comment.text}</li>`;
        }
        output += "</ul>";
        return output
    }
    const renderPosts = (posts) => {
        $("#input").val("");
        $("#posts").empty();
        console.log("rendering");
        for (let post of posts) {
            console.log(`rendering: \t${post.text}`);
            $("#posts").append(`<div class="post" data-id="${post.id}"><p class="post-text">${post.text}</p> ${renderComments(post.comments)}<div class="delete">Remove Post</div></div>`);
        }
    }
    return {
        renderPosts: renderPosts
    }
}
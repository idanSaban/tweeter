const Renderer = () => {
    const renderComments = (comments) => {
        let output = `<ul>`;
        for (let comment of comments) {
            output += `<li  class="comments" data-id="${comment.id}"">${comment.text} <div class="delete-comment">Remove Comment</div></li>`;
        }
        output += "</ul>";
        return output
    }
    const renderPosts = (posts) => {
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
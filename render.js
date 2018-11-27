const Renderer = () => {
    const renderComments = (comments) => {
        let output = "<ul>";
        for (let comment of comments) {
            output += `<li data-id="${comment.id}"">${comment.text}</li>`;
        }
        output += "</ul>";
        return output
    }
    const renderPosts = (posts) => {
        $("#posts").empty();
        console.log("rendering");
        for (let post of posts) {
            console.log(`rendering: \t${post.text}`);
            $("#posts").append(`<div data-id="${post.id}"><p>${post.text}</p> ${renderComments(post.comments)}</div>`);
        }
    }
    return {
        renderPosts: renderPosts
    }
}
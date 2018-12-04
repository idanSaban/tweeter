class Renderer {
    constructor() {
    }
    renderPosts(posts) {
        $("#input").val("");
        $("#posts").empty()
        const source = $("#posts-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ posts })
        $("#posts").append(newHTML)

    }
}

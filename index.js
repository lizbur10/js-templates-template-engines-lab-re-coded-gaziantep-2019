function createPost() {
    // CREATING THE POST
    // grab the variables from the form
    let title = document.getElementById("postTitle").value;
    let author = document.getElementById("postAuthor").value;
    let content = document.getElementById("postContent").value;

    // get the templates
    let pageTemplate = document.getElementById('page-template').innerHTML; 
    let postTemplate = document.getElementById('post-template').innerHTML;

    // create the template functions
    let pageTemplateFn = _.template(pageTemplate);
	let postTemplateFn = _.template(postTemplate);

    // create the page html and add it to the DOM
    let pageHTML = pageTemplateFn();
    let pageDiv = document.getElementsByTagName("main")[0];
    pageDiv.innerHTML += pageHTML;

    // create the post html and add it to the DOM
    let postHTML = postTemplateFn({ title: title, author: author, content: content });
    let postDiv = document.getElementById("post");
    postDiv.innerHTML = postHTML;
    // END CREATING THE POST

    // ADDING THE COMMENT FORM
    // get the template
    let commentsTemplate = document.getElementById('comments-template').innerHTML;
    
    //create the template function
	let commentsTemplateFn = _.template(commentsTemplate);

    // create the html and add it to the DOM
    let commentsHTML = commentsTemplateFn();
    let commentsDiv = document.getElementsByTagName("footer")[0]
    commentsDiv.innerHTML = commentsHTML;
}

function postComment() {
    // grab the variables from the form
    let commenter = document.getElementById("commenterName").value;
    let comment = document.getElementById("commentText").value;

    // get the template & create the template function
    let commentTemplate = document.getElementById('comment-template').innerHTML;
    let commentTemplateFn = _.template(commentTemplate);

    //create the HTML and add it to the DOM
    let commentHTML = commentTemplateFn({commenter: commenter, comment: comment});
    let commentDiv = document.getElementById("comments");
    commentDiv.innerHTML += commentHTML;
}
const fetchPosts = async () => {
    try {
        // fetch all posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const allPosts = await response.json();
        console.log(allPosts);
        console.clear();

        // get post with id 10
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/10');
        const postID10 = await response2.json();
        console.log(postID10);
        console.clear();

        // create a new post, log server generated id 
        const response3 = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'new post',
                body: 'new post content',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const newPost = await response3.json();
        console.log(newPost.id);
        console.clear();

        // Replace the post with id 12, render the responseJSON
        const response4 = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'PUT',
            body: JSON.stringify({
                id: 12,
                title: 'update',
                body: 'this content has been updated',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const postUpdate = await response4.json();
        console.log(postUpdate);
        console.clear();

        // delete post with id 12
        const response5 = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'DELETE',
        });

        // check if response was successful
        if (response5.ok) {
            console.log('this post has sucessfully been deleted.');
        } else {
            console.log('there was an error deleting this post, please try again');
        }
    } catch (error) {
        console.log(error);
    }
};

fetchPosts();

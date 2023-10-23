
function displayPosts() {
    const postsContainer = document.querySelector('.posts');

    postsData.forEach((postUrl, index) => {
        const post = document.createElement('div');
        post.className = 'post';

        const image = document.createElement('img');
        image.src = postUrl;
        image.alt = `Post ${index + 1}`;

        post.appendChild(image);
        postsContainer.appendChild(post);
    });
}

const followButton = document.getElementById('follow-button');
followButton.addEventListener('click', () => {
    if (followButton.textContent === 'Follow') {
        followButton.textContent = 'Following';
        followButton.style.backgroundColor = '#333';
    } else {
        followButton.textContent = 'Follow';
        followButton.style.backgroundColor = '#3897f0';
    }
});
window.addEventListener('load', displayPosts);



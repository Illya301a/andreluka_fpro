function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Пост не знайдено');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function searchPost() {
    const postId = document.getElementById('postId').value;

    if (postId >= 1 && postId <= 100) {
        fetchPost(postId)
            .then(post => {
                const postContainer = document.getElementById('postContainer');
                postContainer.innerHTML = `
                    <h2>Знайдений пост:</h2>
                    <p><strong>ID:</strong> ${post.id}</p>
                    <p><strong>Title:</strong> ${post.title}</p>
                    <p><strong>Body:</strong> ${post.body}</p>
                `;

                const commentsContainer = document.getElementById('commentsContainer');
                commentsContainer.innerHTML = '';

                const commentsButton = document.createElement('button');
                commentsButton.textContent = 'Отримати коментарі';
                commentsButton.onclick = () => {
                    fetchComments(postId)
                        .then(comments => {
                            commentsContainer.innerHTML = '<h2>Коментарі:</h2>';
                            comments.forEach(comment => {
                                commentsContainer.innerHTML += `
                                    <p><strong>ID:</strong> ${comment.id}</p>
                                    <p><strong>Name:</strong> ${comment.name}</p>
                                    <p><strong>Email:</strong> ${comment.email}</p>
                                    <p><strong>Body:</strong> ${comment.body}</p>
                                    <hr>
                                `;
                            });
                        })
                        .catch(error => {
                            commentsContainer.innerHTML = `<p>Помилка при отриманні коментарів: ${error.message}</p>`;
                        });
                };

                commentsContainer.appendChild(commentsButton);
            })
            .catch(error => {
                const postContainer = document.getElementById('postContainer');
                postContainer.innerHTML = `<p>${error.message}</p>`;
                const commentsContainer = document.getElementById('commentsContainer');
                commentsContainer.innerHTML = '';
            });
    } else {
        alert('Введіть коректний ID поста (1-100).')
    }
}

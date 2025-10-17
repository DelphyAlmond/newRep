function addCard() {
    const addPostForm = document.getElementById('addPostForm');
    const postsContainer = document.getElementById('postsContainer');

    if (addPostForm && postsContainer) {
        addPostForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const postText = document.getElementById('postText').value;
            const postImageURL = document.getElementById('postImageURL').value;

            if (!postText.trim()) {
                alert('Введи текст, пж а.');
                return;
            }

            const newPostCard = createPostCard(postText, postImageURL);

            // * postsContainer.appendChild(newPostCard);
            postsContainer.prepend(newPostCard);

            addPostForm.reset();
        });
    } else {
        console.error("Элементы формы или контейнера для постов не найдены.");
    }
}

function createPostCard(postText, imageUrl) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-md-6 col-lg-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card h-100 shadow-sm';

    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Изображение поста';
        img.className = 'card-img-top img-fluid';
        img.style.height = '200px';
        img.style.objectFit = 'cover';
        cardDiv.appendChild(img);
    }

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    const postParagraph = document.createElement('p');
    postParagraph.className = 'card-text flex-grow-1';
    postParagraph.textContent = postText;
    cardBody.appendChild(postParagraph);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'd-flex justify-content-end';

    const commentButton = document.createElement('button');
    commentButton.className = 'btn btn-outline-secondary btn-sm';
    commentButton.innerHTML = '<i class="bi bi-chat-fill me-1"></i>Комментировать';
    actionsDiv.appendChild(commentButton);

    cardBody.appendChild(actionsDiv);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
}

addCard();
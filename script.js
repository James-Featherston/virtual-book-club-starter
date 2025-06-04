const loadReviews = () => {
    console.log("Loaded Reviews")
    reviewsList = document.querySelector("#reviews-list")
    for (const review of reviews) {
        console.log(review)
        const el = createReviewElement(review)
        reviewsList.appendChild(el)
    }

}

document.addEventListener('DOMContentLoaded', loadReviews);

createReviewElement = (review) => {
    // document.querySelector(".reviews_list")
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-item'
    reviewElement.innerHTML = `
        <p class="book-title">${review.title}</p>
        <p>${review.reviewText}</p>
        <p>Rating: ${review.rating}</p>
        <button>Likes (${review.likes})</button>
        <button>Repost (${review.reposts})</button>
    `;
    return reviewElement
}



const handleReviewSubmit = () => {
    console.log("Handle review submit")
}

// submission = document.querySelector()
// document.addEventListener('')

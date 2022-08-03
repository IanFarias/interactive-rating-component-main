
const form = document.querySelector('#rating-form');
const radioOptions = [...document.querySelectorAll('[name="rating"]')];

radioOptions.forEach(option => option.addEventListener('focus', ({target}) => {
    document.querySelector('.rating-option-checked')?.classList.remove('rating-option-checked');
    target.parentNode.classList.add('rating-option-checked');
    target.checked = 'true'
}))


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const submitForm = document.querySelector('.submit-form')
    const ratingValue = document.querySelector('input[type="radio"]:checked')?.value;
    const submitted = document.querySelector('.rating-submitted')
    const feedbackMessage = `You selected ${ratingValue} of 5`;

    submitForm.style.display = 'none';
    submitted.style.display = 'block'
    submitted.childNodes.forEach(e => e.id === 'feedback-message' ? e.innerText = feedbackMessage: null)
})

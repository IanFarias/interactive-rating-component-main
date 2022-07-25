
const form = document.querySelector('#rating-form');
const radioOptions = [...document.querySelectorAll('[name="rating"]')];

radioOptions.forEach(option => option.addEventListener('change', ({target}) => {
    document.querySelector('.rating-option-checked')?.classList.remove('rating-option-checked');
    target.parentNode.classList.add('rating-option-checked');
    form.setAttribute('value', target.value)
}))


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const submitForm = document.querySelector('.submit-form')
    const value = document.querySelector('#rating-form').getAttribute('value');
    const submitted = document.querySelector('.rating-submitted')
    const feedbackMessage = `You selected ${value} of 5`;

    submitForm.style.display = 'none';
    submitted.style.display = 'block'
    submitted.childNodes.forEach(e => e.id === 'feedback-message' ? e.innerText = feedbackMessage: null)
})

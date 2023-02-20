import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStoargeHasValue = localStorage.getItem(LOCALSTORAGE_KEY);

const formData = {
  email: '',
  message: '',
};

const objectFromLocalStorage = JSON.parse(localStoargeHasValue);

if (localStoargeHasValue) {
  feedbackFormEl.elements.email.value = objectFromLocalStorage.email;
  feedbackFormEl.elements.message.value = objectFromLocalStorage.message;
}

feedbackFormEl.addEventListener('input', throttle(onFormFillInput, 500));
feedbackFormEl.addEventListener('submit', onSubmitButtonCkick);

function onFormFillInput(e) {
  if (e.target.nodeName === 'INPUT') formData.email = e.target.value;
  else {
    formData.message = e.target.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitButtonCkick(e) {
  e.preventDefault();
  console.log(objectFromLocalStorage);
  feedbackFormEl.elements.email.value = '';
  feedbackFormEl.elements.message.value = '';
  localStorage.clear();
}

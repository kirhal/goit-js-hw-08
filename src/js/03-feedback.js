import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

isLocalStoargeHasValue();

formEl.addEventListener('input', throttle(onFormFillInput, 500));
formEl.addEventListener('submit', onSubmitButtonCkick);

function onFormFillInput(e) {
  if (e.target.nodeName === 'INPUT') formData.email = e.target.value;
  else {
    formData.message = e.target.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitButtonCkick(e) {
  e.preventDefault();
  const localStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(JSON.parse(localStorageValue));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function isLocalStoargeHasValue() {
  const localStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);
  const objectFromLocalStorage = JSON.parse(localStorageValue);
  if (localStorageValue) {
    formEl.elements.email.value = objectFromLocalStorage.email;
    formEl.elements.message.value = objectFromLocalStorage.message;
  }
}

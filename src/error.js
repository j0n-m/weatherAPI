const showError = function showError(err) {
  // const contentDiv = document.querySelector('.content');
  const errorDiv = document.querySelector('.errorDiv');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = err;
  errorMessage.style.textAlign = 'center';

  errorDiv.classList.remove('hide');
  errorDiv.appendChild(errorMessage);
  setTimeout(() => {
    errorDiv.classList.add('hide');
    errorDiv.replaceChildren();
  }, 4000);
};

export default showError;

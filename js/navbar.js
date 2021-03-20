const handleShowLinkMobile = () => {
  const links = document.querySelector('.navbar .links');
  links.classList.toggle('hide');
};

document
  .querySelector('.links')
  .addEventListener('click', handleShowLinkMobile);

document
  .querySelector('.toggle')
  .addEventListener('click', handleShowLinkMobile);

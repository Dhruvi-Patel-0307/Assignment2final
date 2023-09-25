function handleLinkClick(event) {
    event.preventDefault();
  
    const contentElement = $('#content');
    contentElement.hide().html('');
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', event.target.href);
    xhr.onload = function() {
      if (xhr.status === 200) {
        contentElement.html(xhr.responseText).slideDown();
      } else {
        console.log('Request failed. Returned status of ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  const links = document.querySelectorAll('#content-wrapper a');
  links.forEach(function(link) {
    link.addEventListener('click', handleLinkClick);
  });
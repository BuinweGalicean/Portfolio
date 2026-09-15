document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.site-footer');

  if (footer) {
    const note = document.createElement('p');
    note.className = 'footer-note';
    note.textContent = `© ${year} Samuel Okafor`;
    footer.appendChild(note);
  }
});

const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

const copyButton = document.querySelector('.copy-email');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    const oldText = copyButton.textContent;
    copyButton.textContent = 'Copied ✓';
    setTimeout(() => { copyButton.textContent = oldText; }, 1800);
  } catch {
    copyButton.textContent = copyButton.dataset.email;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

// nav.js — paste this at the bottom of every Hola HTML file, just before </body>
// It wires up all navigation links across the site automatically

(function(){
  // Logo → home
  document.querySelectorAll('.logo, .footer-logo').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => window.location.href = 'index.html');
  });

  // "Sign up" / "nav-cta" buttons → auth page
  document.querySelectorAll('.nav-cta').forEach(el => {
    el.addEventListener('click', () => window.location.href = 'auth.html');
  });

  // Nav links
  const navMap = {
    'Explore':        'listings.html',
    'Experiences':    'listings.html',
    'Become a host':  'auth.html',
    'About':          'index.html',
  };
  document.querySelectorAll('.nav-links a').forEach(a => {
    const dest = navMap[a.textContent.trim()];
    if(dest) a.href = dest;
  });

  // Search button in hero
  const searchBtn = document.querySelector('.search-btn');
  if(searchBtn) searchBtn.addEventListener('click', () => window.location.href = 'listings.html');

  // Category chips on landing page
  document.querySelectorAll('.cat-chips .chip').forEach(chip => {
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', () => window.location.href = 'listings.html');
  });

  // Listing cards on landing page
  document.querySelectorAll('section .card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => window.location.href = 'property.html');
  });

  // "Start hosting today" button
  const hostBtn = document.querySelector('.host-btn');
  if(hostBtn) hostBtn.addEventListener('click', () => window.location.href = 'auth.html');

  // listings.html — clicking a result card goes to property page
  window.goListing = function(id){
    window.location.href = 'property.html';
  };

  // property.html — breadcrumb
  document.querySelectorAll('.breadcrumb a').forEach(a => {
    if(a.textContent.trim() === 'Home') a.href = 'index.html';
    if(a.textContent.includes('Bali') || a.textContent.includes('Indonesia')) a.href = 'listings.html';
  });

  // auth.html — success button
  const successBtn = document.querySelector('.success-btn');
  if(successBtn) successBtn.addEventListener('click', () => window.location.href = 'listings.html');
})();

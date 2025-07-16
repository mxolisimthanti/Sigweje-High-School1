// JavaScript handles dropdowns smoothly
document.querySelectorAll('.nav > li').forEach(item => {
  item.addEventListener('mouseover', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'none';
  });
});

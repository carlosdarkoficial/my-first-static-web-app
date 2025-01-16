  document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check for saved theme preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  });

  // Video modal functionality
  const watchVideo = document.getElementById('watchVideo');
  watchVideo.addEventListener('click', () => {
    // Here you would typically implement a video modal
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
  });
});

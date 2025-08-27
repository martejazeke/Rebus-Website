document.addEventListener("DOMContentLoaded", () => {
  const mvText = document.getElementById('mv-text');
  const mvTabs = document.querySelectorAll('.mv-tab');

  const mvStatements = {
    mission: 'To be at the forefront of the Design, Engineering, Construction and oilfield Industry in the Middle East, India and beyond.',
    vision: 'We aim to promote and implement the latest industry trends in our projects to provide our clients with highest quality and sustainability. Our Enthusiastic “Can-Do” approach results in building positive long term relationships and partnerships.'
  };

  function fadeOut(element) {
    return new Promise(resolve => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
      setTimeout(resolve, 400); // duration must match CSS transition
    });
  }

  function fadeIn(element) {
    return new Promise(resolve => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
      setTimeout(resolve, 400);
    });
  }

  mvTabs.forEach(tab => {
    tab.addEventListener('click', async () => {
      if (tab.classList.contains('active')) return; // skip if already active

      // Remove active class from all tabs
      mvTabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Get the key and new content
      const key = tab.getAttribute('data-key');
      if (!key || !mvStatements[key]) return;

      // Fade out current content
      await fadeOut(mvText);

      // Update content with quotes and styling
      mvText.innerHTML = `
        <p>
          <span class="quote purple">“</span>
          <strong>${mvStatements[key]}</strong>
          <span class="quote purple">”</span>
        </p>
      `;

      // Fade in new content
      await fadeIn(mvText);
    });
  });
});
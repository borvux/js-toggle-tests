// app/javascript/custom/toggle_visibility.js
export function toggleTextVisibility() {
  const text = document.getElementById('my-hidden-text');
  text.classList.toggle('hidden');
}

// this is now not needed after generating stimulus

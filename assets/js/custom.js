document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.award-badge').forEach((badge) => {
    const node = badge.nextSibling;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;

    node.textContent = node.textContent.replace(/^[\s\u00a0]*[.\u3002]/, '');
  });
});

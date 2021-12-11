/**
 * My Elements Header
 */
const Elements = {

  createButton({ textContent = '', onClick = null }) {
    const button = document.createElement('button');
    button.textContent = textContent;
    if (onClick) button.addEventListener('click', () => { onClick(); });
    return button;
  },

  createHeader({ size = 1, textContent = '' }) {
    if (size < 1 || size > 6) return null;
    const header = document.createElement(`h${size}`);
    header.textContent = textContent;
    return header;
  },

  createLink({ href, textContent, target = '_self' }) {
    const a = document.createElement('a');
    if (href) a.href = href;
    a.textContent = textContent;
    a.target = target;
    return a;
  },

  createList({ items = [], ordered = false }) {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    items.forEach(({ textContent, href }) => {
      const li = document.createElement('li');
      if (!href) li.textContent = textContent;
      else {
        li.appendChild(Elements.createLink({
          textContent,
          href,
        }));
      }
      list.appendChild(li);
    });
    return list;
  },
};

export default Elements;

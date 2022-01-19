/**
 * My Elements Header
 */
const Elements = {

  createBr() {
    const br = document.createElement('br');
    return br;
  },

  createP({ textContent = ' ' }) {
    const p = document.createElement('p');
    p.textContent = textContent;
    return p;
  },

  createButton({ id, textContent = '', onClick = null }) {
    const button = document.createElement('button');
    button.className = id;
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

  createLink({
    id, href, textContent, target = '_self', onClick = null,
  }) {
    const a = document.createElement('a');
    a.className = id;
    if (href) a.href = href;
    a.textContent = textContent;
    a.target = target;
    if (onClick) a.addEventListener('click', () => { onClick(); });
    return a;
  },

  createInput({
    id, type, placeholder, required = false, value, disabled = false,
  }) {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.required = required;
    input.disabled = disabled;
    if (value) input.value = value;
    return input;
  },

  createLabel({ textContent, inputType }) {
    const label = document.createElement('label');
    label.for = inputType;
    label.textContent = textContent;
    return label;
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
  createcardYour({
    id, idDivImg, idDivText, title, img, imgid, madeBy, date, idLink, hrefLink, link, onClick = null, imgAlt,
  }) {
    const div = document.createElement('div');
    const divImg = document.createElement('div');
    const divText = document.createElement('div');
    const divTexta = document.createElement('a');
    const divTextTitle = document.createElement('h3');
    const divImgSrc = document.createElement('img');
    const divTextAuthor = document.createElement('h5');
    const divTextDate = document.createElement('h5');
    div.className = id;
    divImg.className = idDivImg;
    divText.className = idDivText;
    divImgSrc.className = imgid;
    divTexta.className = idLink;

    divTextTitle.textContent = title;
    divTextAuthor.textContent = madeBy;
    divTextDate.textContent = date;
    divTexta.textContent = link;

    divImgSrc.src = img;
    divImgSrc.alt = imgAlt;

    divTexta.href = hrefLink;
    if (onClick) divTexta.addEventListener('click', () => { onClick(); });

    divText.appendChild(divTextTitle);
    divText.appendChild(divTextAuthor);
    divText.appendChild(divTextDate);
    divText.appendChild(divTexta);

    divImg.appendChild(divImgSrc);

    div.appendChild(divImg);
    div.appendChild(divText);
    return div;
  },
};

export default Elements;

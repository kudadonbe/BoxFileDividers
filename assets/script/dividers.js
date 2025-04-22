// Fetch JSON and assign to variable
async function loadDividers() {
  try {
    const response = await fetch('assets/data/dividers.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    return [];
  }
}

// Render dividers using HTML template
function renderDividers(dividers) {
  const template = document.getElementById('divider-template');
  const body = document.body;

  dividers.forEach(div => {
    const clone = template.content.cloneNode(true);
    const title = clone.querySelector('.title');
    const desc = clone.querySelector('.desc');

    title.textContent = div.label;
    title.style.backgroundColor = div.color;
    desc.textContent = div.description;

    body.appendChild(clone);
  });
}

// Run on load
loadDividers().then(renderDividers);

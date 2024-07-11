
export default function decorate(block) {
  // Add the container class to the outer div
  block.classList.add('cards-container');

  // Get all cards
  const cards = block.querySelectorAll('.cards > div');

  // Add card class to each card
  cards.forEach((card) => {
    card.classList.add('card');

    // Create image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card-image-container');
    
    // Move image into the image container
    const img = card.querySelector('picture');
    imgContainer.appendChild(img);
    
    // Move image container to the top of the card
    card.insertBefore(imgContainer, card.firstChild);

    // Wrap all remaining content in a content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('card-content-container');
    while (imgContainer.nextSibling) {
      contentContainer.appendChild(imgContainer.nextSibling);
    }
    card.appendChild(contentContainer);

    // Beautify "Apply now" button
    const applyNowLink = card.querySelector('p > a');
    if (applyNowLink && applyNowLink.textContent.trim() === 'Apply now') {
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      buttonContainer.appendChild(applyNowLink);
      card.appendChild(buttonContainer);
      applyNowLink.classList.add('apply-now-button');
    }
  });
}

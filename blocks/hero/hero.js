
export default function decorate(block) {
  // Add class to the block element
  block.classList.add('custom-hero-block');

  // Create container for text content
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('custom-hero-text-content');

  // Move the existing content inside the new container
  while (block.firstChild) {
    contentContainer.appendChild(block.firstChild);
  }

  // Create a container for the image
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('custom-hero-image-container');
  const image = block.querySelector('picture');
  if (image) {
    imageContainer.appendChild(image);
  }

  // Append both containers to the block
  block.appendChild(contentContainer);
  block.appendChild(imageContainer);

  // Get all the links and style them
  const links = block.querySelectorAll('a');
  links.forEach(link => {
    if (link.textContent.trim() === 'Apply now') {
      link.classList.add('custom-apply-now-btn');
    } else if (link.textContent.trim() === 'Help me choose a credit card') {
      link.classList.add('custom-help-choose-btn');
    }
  });
}

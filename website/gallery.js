const galleryContainer = document.getElementById('gallery-container');

const images = [
  {
    src: "https://media.discordapp.net/attachments/1171518027544662067/1209558479363244062/SAM_0402.JPG?ex=65e75c1d&is=65d4e71d&hm=e73b039c180cb54ffbe59592662d39649b1dbff387d8469b5cd5ba2ada0a02cf&=&format=webp&width=738&height=554",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://media.discordapp.net/attachments/1171518027544662067/1209558478407077918/SAM_0403.JPG?ex=65e75c1d&is=65d4e71d&hm=4bd77d9e8f975d88ed1dacec93c7c834b5528be37416b96f81abe04e80fcc16f&=&format=webp&width=738&height=554",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558477329010740/SAM_0405.JPG?ex=65e75c1d&is=65d4e71d&hm=0ae587b8e5862b7998e36abe3718c8d572778ebc86549bc7703fada1174a35b5&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558476272050246/SAM_0507.JPG?ex=65e75c1d&is=65d4e71d&hm=62c997f62b29d556bf0c1734446088247a5178cea3f1aa2df90dcbb4f114f74a&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558476272050246/SAM_0507.JPG?ex=65e75c1d&is=65d4e71d&hm=62c997f62b29d556bf0c1734446088247a5178cea3f1aa2df90dcbb4f114f74a&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558475194236959/SAM_0505.JPG?ex=65e75c1c&is=65d4e71c&hm=863eb1bbf03edada4c2725852ed2f09a874ab9716cea7e0715341a2de5df1080&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558624335302746/SAM_0175.JPG?ex=65e75c40&is=65d4e740&hm=9b5922cc94ce2b86e5660e1f5cefabef0ff2a9272aaf1bb80ed9b6aad69bfbe9&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558623320154182/SAM_0270.JPG?ex=65e75c40&is=65d4e740&hm=c5de7a53997eaa189a0a6a9d736ca68e3b1e91f8985a7a5a947df3c980569980&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558626260230224/SAM_0183.JPG?ex=65e75c41&is=65d4e741&hm=059de2509703e7170cf9c2dcd74610436f03ada1e327ed0da7ac11b52bd6c512&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558623320154182/SAM_0270.JPG?ex=65e75c40&is=65d4e740&hm=c5de7a53997eaa189a0a6a9d736ca68e3b1e91f8985a7a5a947df3c980569980&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558625366839366/SAM_0177.JPG?ex=65e75c40&is=65d4e740&hm=b2fc5e14e214ef5d47cff7b69f4c26dd4dd1087fd9b104fe977457b297e0bb20&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558473042428025/SAM_0512.JPG?ex=65e75c1c&is=65d4e71c&hm=e6c9914a38bc2d1f6551e29d6b1cfc437761b7f1b5feea34eb51477572bfdd55&",
    title: "Image Title 1",
    description: "Image description 1"
  },
  {
    src: "https://cdn.discordapp.com/attachments/1171518027544662067/1209558471964364901/SAM_0523.JPG?ex=65e75c1c&is=65d4e71c&hm=fe4edef23386f8cfff31405449d5565aa9de24451e4fcd5658e4e103080ea3a1&",
    title: "Image Title 1",
    description: "Image description 1"
  },
];

images.forEach(image => {
  const card = document.createElement('div');
  card.classList.add('col');
  card.classList.add('mb-3');

  const innerCard = document.createElement('div');
  innerCard.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top');
  cardImg.src = image.src;
  cardImg.alt = image.title;
  innerCard.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = image.title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = image.description;
  cardBody.appendChild(cardText);

  innerCard.appendChild(cardBody);
  card.appendChild(innerCard);

  galleryContainer.appendChild(card);
});

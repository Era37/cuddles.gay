// Card Schema

/*
title: Explanation title
description: What is the project
thumbnail: A picture to be used as card thumbnail
bgColour: Colour for the card background
textColour: The colour of the card text
url: link to project
*/

const cards = [
  {
    title: "tifi",
    description:
      "tifi is a portfolio building website designed for users to create one place for all their blogs, socials and images. (Coming Soon)",
    thumbnail:
      "https://cdn.discordapp.com/attachments/1081438636307910668/1137184872679608350/Tifi-Non-Clipped.png",
    bgColour: "black",
    textColour: "white",
    url: "https://tifi.gg",
  },
];

function buildCards() {
  console.log("ee");
  const hiddenContent = $("hidden-content");
  for (const card of cards) {
    const { title, description, thumbnail, bgColour, textColour, url } = card;
    const cardContent = `
    <a class="card" href="${url}" target="_blank">
      <div
        class="card-design bg-pink"
        style="color: ${textColour}; background-color: ${bgColour}"
      >
        <div style="padding: 10px">
          <div class="flex">
            <img
              src="${thumbnail}"
              alt=""
              style="height: 50px; width: 50px"
            />
            <p
              class="my-auto pl-md"
              style="
                font-size: 30px;
                letter-spacing: 0.015em;
                font-weight: 900;
              "
            >
              ${title}
            </p>
          </div>
          <p
            style="
              max-width: 24rem;
              white-space: wrap;
              font-size: 13px;
              padding-top: 8px;
            "
          >
            ${description}
          </p>
        </div>
      </div>
    </a>`;
    hiddenContent.insertAdjacentHTML("beforeend", cardContent);
  }
}

window.addEventListener("load", () => {
  buildCards();
});

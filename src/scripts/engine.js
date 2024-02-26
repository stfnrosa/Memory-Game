const figuras = [
    "src/imagens/Draco.png",
    "src/imagens/Draco.png",
    "src/imagens/Hagrid.png",
    "src/imagens/Hagrid.png",
    "src/imagens/Harry.png",
    "src/imagens/Harry.png",
    "src/imagens/Hermione.png",
    "src/imagens/Hermione.png",
    "src/imagens/Edwiges.png",
    "src/imagens/Edwiges.png",
    "src/imagens/Rony.png",
    "src/imagens/Rony.png",
    "src/imagens/Alvo.png",
    "src/imagens/Alvo.png",
    "src/imagens/Luna.png",
    "src/imagens/Luna.png",
  ];
  
  let openCards = [];
  let isFlipping = false;
  
  let shuffleFiguras = figuras.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  for (let i = 0; i < figuras.length; i++) {
    let card = document.createElement("div");
    card.className = "item";
    let img = document.createElement("img");
    img.src = shuffleFiguras[i];
    card.appendChild(img);
    card.onclick = handleClick;
    document.querySelector(".game").appendChild(card);
  }
  
  function handleClick() {
    if (isFlipping || openCards.length === 2) return;
  
    this.classList.add("boxOpen");
    openCards.push(this);
  
    if (openCards.length === 2) {
      isFlipping = true; // Desabilita cliques adicionais durante a animação
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === figuras.length) {
        document.getElementById("victory").style.display = "block";
    }
    
    isFlipping = false;

  }
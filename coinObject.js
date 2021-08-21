const coin = {
    state: 0,
  
    flip: function () {

      this.state = Math.floor(Math.random() * 2);
    },
  
    toString: function () {

      if(this.state === 0) {
          return "Heads";
      } else {
          return "Tails";
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");

      if (this.state === 0) {
        image.src = "./imagem/cara.jpg";
        image.alt = "Heads";
      } else {
        image.src = "./imagem/coroa.jpg";
      image.alt = "Tails";
      }    

      return image;
    },
  };

  function display20Flips() {
    const results = [];
    
    for (let i = 1; i <= 20; i++) {
        let jogadas = coin.flip();
        jogadas = coin.state;
        results.push(jogadas)
        const div = document.createElement("div");
        div.innerText = `Resultado ${i}: ${coin.toString()}`;
        document.body.appendChild(div);
    }
    
    return results;
  }
  display20Flips();

  
  function display20Images() {
    const results = [];
   
    const div = document.createElement("div")
    div.classList.add("imagens");

    for (let i = 1; i <= 20; i++) {
      let jogadas = coin.flip();
      jogadas = coin.state;
      results.push(jogadas);
      div.appendChild(coin.toHTML())
  }

  document.body.appendChild(div);

  return results;
  }
  display20Images()

  

  
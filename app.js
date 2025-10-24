const hour = new Date().getHours();
const Shortcut = importModule("shortcuts")

const ligarAtalho = "boa noite". 
const desligarAtalho = "bom dia"


if(hour >= 22 || hour < 6)
  {
    console.log("Executando automacao no modo noite...")
    await Shortcut.run(desligarAtalho)
  } 




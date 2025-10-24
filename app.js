// Scriptable - Automação da fita EKAZA 🌈
const hora = new Date().getHours();
const Shortcut = importModule('shortcuts');

const ligarAtalho = "boa noite";
const desligarAtalho = "bom dia";

if (hora >= 22 || hora < 6) {
  console.log("🕙 Ativando modo noite...");
  await Shortcut.run(desligarAtalho);
} else {
  console.log("☀️ Ativando modo dia...");
  await Shortcut.run(ligarAtalho);
}

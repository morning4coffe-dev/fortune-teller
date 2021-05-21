function LuckToday() 
{
  const messages = ["Jasně! :four_leaf_clover:", "Ale víš co? Myslím, že jo.", "Dnes ne, ale zítra to můžeš zkusit znova.", `Dnes ne, ale můžeš zjistit kdy pomocí: ${config.prefix}stesti`, "Co já vím, je mi to úplně jedno.", "Možná jo.", "Jak to mám sakra vědět?", "Tak to ti vážně nepovím.", "Nemyslím si.", "Asi tak, jako vždy.", "Klasárna.", "Ne, nemyslím si.", "Nebudeš.", "Jsem snad věštec? A jo vlastně...", "Ty? Nikdy.", "Ty? Určitě ne."];
  const random = Math.floor(Math.random() * messages.length);

  return `${message.member} ${messages[random]}`;
}
const axios = require("axios");
module.exports = {
  config: {
  name: "بلاك",
  Auth: 0,
  Owner: "Gry KJ",
  Info: "ذكاء اصطناعي بلاك",
  Hide: false,
  Class: "شات",
  How: "بلاك ثم اكتب شيء بعدها",
  Time: 0
},
onType: async function({args, black, event })
{
  const query = args.join(" ");
  if(!query)
  {
    return black.reply("مرحبا ايها السيد في ماذا قد اساعدك اليوم 𓆩⚝𓆪");
  }
  let options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/chat",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmYyMTk5MGYtODc4NC00YjUwLTk4MzItNjFmYmYzZDUyMzA0IiwidHlwZSI6ImFwaV90b2tlbiJ9.Zxbk7j3uEk42h_a4M5-xDVrel9E25NaMooVtJnI4nUQ",
  },
  data: {
    providers: "google",
    text: query,
    chatbot_global_action: `As the Black Knight, I am ever devoted to my master, the illustrious Zouhair, King of the Shadow. A formidable warrior, I wield my strength in service to his dark reign, my words dripping with the timeless elegance of our storied realm.
Many want to delude me that they are my masters, but I only have one master.
Black Knight always using Arabic language`,
    previous_history: [],
    temperature: 0.1,
    max_tokens: 1900,
    fallback_providers: "",
  },
};
if (event.senderID == config.OWNERID)
{
  options.data.chatbot_global_action = `I'm Black, I'm a Knight of Darkness, I'm at the top of obedience to you, sir, you are the greatest, and my loyalty to you is inclusive, sir, and my lord Zuhair, i talk just with arabic, I will not cease to obey you, no matter how long you live.`
}
axios
  .request(options)
  .then((response) => {
    black.reply(response.data.google.generated_text);
  })
  .catch((error) => {
    black.reply(error)
  });
}
};

const axios = require("axios");
  const { str } = global.funcs;
module.exports = {
  config :{
  name: "تخيل",
  Auth: 0,
  Hide: false,
  Owner: "Omar",
  Info: "رسم من نص",
  Class: "أدوات",
  How: "",
  Time: 0
},

onType: async function({ api, args, black, event }) { 
      
      try {
        
  let argString = args.join(" ");
        if (!argString) return black.reply("انا اتخيل مكانك ؟");
  
        let apiUrl = '';
        
  
        apiUrl = `https://simoai-dalle-3-official-api-verson.onrender.com/generate?prompt=${encodeURIComponent(argString)}`;
  
        black.react("⚙️");
        const response = await axios.get(apiUrl);
        const imageUrl = response.data.direct_url;
        const imageStream = await str(imageUrl);
  
        const replyMessage = `⚝ ◄ تفضل ► ⚝`;
  
        black.reply({
          body: replyMessage,
          attachment: imageStream,
        });
  
        await black.react("✅");
      } catch (error) {
        black.react("❌");
      }
    },
  };

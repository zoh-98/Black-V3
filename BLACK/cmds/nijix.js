const axios = require('axios');

const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "نيجي",
    Owner: "شادي",
    Auth: 0,
    Hide: true,
    Time: 0,
    Info: "رسم وتعديل الصور",
    Class: "ثريدز",
  },

  onType: async function ({ event, api, args, black, usersData, threadsData }) {





          try {
       let prompt = "";
       let imageUrl = "";
       let aspectRatio = "1:1"; 


            const aspectIndex = args.indexOf("--ar");
            if (aspectIndex !== -1 && args.length > aspectIndex + 1) {
                aspectRatio = args[aspectIndex + 1];
                args.splice(aspectIndex, 2); 
            }

            if (event.type === "message_reply" && event.messageReply.attachments && event.messageReply.attachments.length > 0 && ["photo", "sticker"].includes(event.messageReply.attachments[0].type)) {
                imageUrl = encodeURIComponent(event.messageReply.attachments[0].url);
            }

            if (args.length > 0) {
                prompt = args.join(" ");
            } else {
                black.reply("⚠️ | اكتب شيئا.");
                return;
            }
  const startTime = new Date();         
const pompt = await global.funcs.trgm(prompt, "en");

            

            let apiUrl = `https://niji-api-3e67175a0232.herokuapp.com/generate?prompt=${encodeURIComponent(pompt)}&aspectRatio=${aspectRatio}`;
            if (imageUrl) {
                apiUrl += `&imageUrl=${imageUrl}`;
            }
          black.react("⚙️");

            const response = await axios.get(apiUrl);
            const genimg = response.data.genimg;
  const endTime = new Date();
         const senderID = event.senderID;
                const userNamefromData = await usersData.getName(senderID);
                const drawingTime = (endTime - startTime) / 1000;

                const currentDate = moment.tz("Africa/Casablanca").format("YYYY-MM-DD");
                const currentTime = moment.tz("Africa/Casablanca").format("h:mm:ss A");
       
            black.reply({   body: `
❨ تم تنفيذ طلبك بنجاح ⚝ ❩

⚝︙بواسطة -› ${userNamefromData}♣️
⚝︙استغرق -› ${drawingTime} 🖤
⚝︙الوقت -› ${currentTime} 🎩
⚝︙التاريخ -› ${currentDate} 🌚
              `,
                attachment: await global.funcs.str(genimg)
            });  
            await black.react("✔️");
        } catch (error) {
          black.react("❌")
        }
    }



          }

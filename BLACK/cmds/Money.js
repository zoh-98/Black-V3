const Black = {
    name: "رصيدي",
    Hide: false,
    Owner: "Gry KJ",
    Auth: 0,
    Time: 3,
    Info: "تعرف كم رصيدك بالبوت مع بعض شوي اشياء اضافية",
    Class: "المجموعة"
  };
  
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
module.exports = {
  config: Black,
  onType: async function({ api, event, args, black }) {


const name = await usersData.getName(event.senderID);
const data = await usersData.get(event.senderID)
const gender = {
1: "انثى",
2 : "ذكر",
3:"🤡🏳️‍🌈",
4:"🤡🏳️‍🌈" ,
5:"🤡 🏳️‍🌈" ,
6: "🤡🏳️‍🌈",
}
 black.send(`⋆˚ مرحبا 𓆩⚝𓆪 ${name} 𓆩⚝𓆪`, async (err, hi) => { const { messageID} = hi;
await delay(2000);
api.editMessage(messageID, `⋆˚ مرحبا 𓆩⚝𓆪 ${name} 𓆩⚝𓆪


⋆˚ ┊ ┊ ايدي تبعك┊ ┊ ⋆˚ ⁭ :
      
          ${event.senderID}`)
await delay(2000)
api.editMessage(messageID, `⋆˚ مرحبا 𓆩⚝𓆪 ${name} 𓆩⚝𓆪


⋆˚ ┊ ┊ ايدي تبعك┊ ┊ ⋆˚ :
     
          ${event.senderID}


⋆˚ ┊ ┊ فلوسك┊ ┊ ⋆˚ : انتظر... 


⋆˚ ┊ ┊ فلوسك┊ ┊ ⋆˚ : انتطر... 
`)
await delay(2000)
api.editMessage(messageID, `⋆˚ مرحبا 𓆩⚝𓆪 ${name} 𓆩⚝𓆪


⋆˚ ┊ ┊ ايدي تبعك┊ ┊ ⋆˚  :  
     
          ${event.senderID}


⋆˚ ┊ ┊ فلوسك┊ ┊ ⋆˚ : ${data.exp}


⋆˚ ┊ ┊ جواهرك ┊ ┊ ⋆˚ : ${data.money}


⋆˚ ┊ ┊ جنسك ┊ ┊ ⋆˚ : ${gender[data.gender]}`)
})
}
   };

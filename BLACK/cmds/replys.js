let ts = ["مرحبا كيف يمكنني مساعدتك اليوم؟", "تحتاج مساعدة ف شيء ما؟ ", "تعبتني وانت تنادي علي", "هل هناك ما يحتاج توضيح سيد؟", "ااااه يلا الازعاااج ماذا تريد؟", "هل انت غبي تناديني بس بلاك هكذا الا تعرف من انا؟ ", "مرحبا يا عمري كيف اقدر اساعدك اليوم", "انا القوة انا القوي انا العظيم انا الشجاع انا الملك انا الظلام. نعم، انا بلاك"];
module.exports = {
  config: {
    name: "ردود",
    Auth: 0,
    Owner: "Gry KJ",
    Info: "ردد اصلا مارح يظهرو فالاوامر",
    Class: "anything",
    Hide: true,
    How: "احم",
    Time: 0
  },
  xPrefix: async function({ black, event})
  {
    switch(event.body)
    {
      case "بلاك":
        let Rts = ts[Math.floor(Math.random() * ts.length)];
        if(event.senderID == config.OWNERID)
        {
         return black.reply("مرحبا بك سيدي اللورد 🖤")
        }
        black.reply(Rts)
        break;
        case "سلام عليكم":
          black.reply("عليكم السلام برادر");
          break;
          case "بلاك كلب":
            black.reply("ليه يا كبيرهم");
            break;
            case "زهير":
              black.reply("من تجرأ يا هذا لذكر اسم السيد اللورد 🌑🎩");
              break;
    }
  }, 
  onType: async function({event}){}
  
};

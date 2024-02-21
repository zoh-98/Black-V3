const axios = require("axios");
module.exports.config = {
    name: "بنترست",
    Auth: 0,
    Owner: "Gry KJ",
    Info: "بحث عن الصور",
    Class: "البحث",
    Hide: false,
    How: "[نص]",
    Time: 0,
};

module.exports.onType = async function({ args, black }) {
    const query = args.join(" ");
    if (!query) return black.reply(`اكتب شي بعد الامر ヾ(⌐■_■)ノ♪
    

    ملاحضة اذا بدك البوت يرسل صور   بعدد لتريدد اكتتب الشي لبدك بعده العلامة ذي "-" ثم عدد الصور لبدك Ψ(￣∀￣)Ψ
    `)
    if (args.includes("-"))
    {
        const a = query.split("-");
        if (a[1] > 30) return black.reply("لا يمكنك طلب اكثر من 30 صورة");
        const res = await axios.get(`https://pinterest-334e7ccfece0.herokuapp.com/?search=${encodeURIComponent(a[0])}`);
        let arr = [];
        for (let i = 0 ; i < a[1] ; i++)
        {
            const b = await funcs.getStreamFromURL(res.data.data[i]);
          await arr.push(b);
        }
        black.reply({
            body: `⚝ ◄ تفضل ► ⚝`,
            attachment: arr
        })
    }
    else {
        const res = await axios.get(`https://pinterest-334e7ccfece0.herokuapp.com/?search=${encodeURIComponent(query)}`);
        let arr = [];
        for (let i = 0 ; i < 9 ; i++)
        {
            const b = await funcs.str(res.data.data[i]);
           await arr.push(b);
        }
        black.reply({
            body: `⚝ ◄ تفضل ► ⚝`,
            attachment: arr
        })
    }
};

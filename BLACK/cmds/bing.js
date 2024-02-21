const Black = {
    name: "ارسم",
    Hide: false,
    Owner: "عبدالرحمن",
    Auth: 0,
    Time: 5,
    Info: "رسم من نص",
    Class: "المجموعة"
  };
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const KievRPSSecAuth = "FACKBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACJt+HdnmsHteSATZ/DxEPtPMLWP1hj09CneHhdFZHps8y71RTGGp6sPw5QHSvIBX3f20Xxa5p5I+jgAzCo59Yo4HO2vbfQotAo40G9446dT+nHczpYeYPpArwKh+gxnGkiRcB3Bnb2dNk2Stb0PdtmsnuYzFlEKwf2Y4f6tz9HZkiC05xRwkQ9WlUhctF60cRA8ng4q7B6sy75WD8Igav71LrXFj3cWW/M1sBc+CPmAGi+oXOWg3jgU3J2WiJMevgZWSZO4P1D5VP5/5L7lioJG7lu2mjdPwGrFAoRs7c1avlcs0S6GjsCIDq+5lnZbanMXn36ibf32heFbQVI0dk4ocHS2Hw/FfAToLVTQpu3yVEQ7MEOmQJkWRUIi95RjxIy9L3lb4cNKem2dai3fvrG4KORHUcWyfS5Bx43d+LoAYBrbgpSN4WoCSUVAIxziNF57ELL/FVBhfW8/U6D8iLZjbYbSQujXq5UC4/+oGaeEJokAwUiv/Q9XYe0JRdEaQ3/DYgXm16zhGtflOdk9ZiBybt2DeZDl4uojURbjPuL2Mc5YQ1DvMH6QiLif4pTCiCJcBi8I6lBylC8g+c7a5o/vEJAI4SrMN4e8UuQsIU6m4Vy8YqCV+92l0/ntxnVXiWZXh0YtQSMFQebnKBE8/zgH4IsxOHnVo0xhM6dBzM5aD6lmgHyGreIwMRhusZuFL7SNW77d7kr+HJ6qDamGb9rjH9bM9H1xRmFkSCiQB6VnYOWSs70Fq5wQCbND1xXboMSKWEf0ceFfSuKZnMaDH7VuamjfvBRswJef5EKeIiHAO3llbFHYdAdtKr9s822YXZy2za8y8l2TFauVEIIqqRLkW6bfF6gTevQTWYE+BIv++JbZ9z9S08yKW6hHkubxezwf8JIfXYvef/BAadrWmcvAiVeqNKsWFvAu5BujLG9uOI4k0NQlVifSuZqQX9vw+UG03KKKISp93foOIUwUssJJ1nODbSgAs6C+30axFhwnPnPi21DWPEXe81bKO7kM1+v1kg8Tfuv87AL6yXfpET9/U/BMe1NKCzOKw9jMfBaL+f1zZpW24ZLWRVRCWhZQ12N65y2UiKlZGE/bJ9N3uOXEuTRHXlCidqptdnKY/X5j8GBxdEDuBoVLk1lYeyarHyXjPbo9lQ6rvmPM8MSrWrY2VCz/+CxoDz3jabuceszR4Ic+PLWR9HTcRB3mmmaj1vCTh7Whn8+kblRy+LlqGZqPY+NsbvMF5Oj+elydgkx+WJz0eH3A2Jep5TV+llYC+K7zDOG28QWE9itwShbgmDcXUu/HG1FFvSHvx4mvlERPVcFMvKSFMbVEN5M+8dtfnp2suFW3PzZ4BQi3zdMRab9IPotrAGG9tCs53sOFrZcyhj6HvNgKqyBXHbYLgG6YaXn/gR16Sp8VeHzsp77iFNsOMaCbjAUgq9hpouuVHc1Rs7ScsasTX3tKQMQ4zyQ1DENfNFADjJQEC1Ti24O6Nh8Wmx9IDu9/3qw==";
const _U = "1T4ppVh-LNWgsewO7r5mnrWXqUooTDhJNnlYKWn5ZE5wWezQG1jrStvFo8CQ41wMank91e0lmF6lZHWXJI8EoPOhwCFNJ0XhCDgJHKIiY1djKzJHeYcw4znBiOqqXRlu6gZXlCBags7bqOlBpqU0jtnEdUn-vquZNH66BI3rrHr6fmiHqaoj-bGqRoY5d7CrqOlFLVNkrqCGbbknUJS8ziYuHFi-Sxf_1VrzDsRwStboFjG4E7y3ALh-ZvvzN5YMLp4CzJtPpmIxwEWPyj6HTng";
module.exports = {
  config: Black,

  onType: async function({ api, event, args, black }) {





    let keySearch = args.join(" ");



    if (!keySearch) return black.reply("انا ارسم مكانك ؟");



    const indexOfHyphen = keySearch.indexOf('~');
    const keySearchs = indexOfHyphen !== -1 ? keySearch.substr(0, indexOfHyphen).trim() : keySearch.trim();
    const numberSearch = parseInt(keySearch.split("~").pop().trim()) || 4;

    try {
      black.react("⚙️");
      const res = await axios.get(`https://api-dalle-gen.onrender.com/dalle3?auth_cookie_U=${_U}&auth_cookie_KievRPSSecAuth=${KievRPSSecAuth}&prompt=${encodeURIComponent(keySearchs)}`);
      const data = res.data.results.images;

      if (!data || data.length === 0) {
        api.sendMessage("✖️ | حدث خطأ", event.threadID, event.messageID);
        black.react("✖️");
        return;
      }

      const imgData = [];
      for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
        const imgResponse = await axios.get(data[i].url, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));
      }
      await black.react("✅");
      await api.sendMessage({
        attachment: imgData,
        body: `⚝ تفضل  ⚝`
      }, event.threadID, event.messageID);


    } catch (error) {
      console.error(error);
      black.react("✖️");
    } finally {
      await fs.remove(path.join(__dirname, 'cache'));
    }
  }
};

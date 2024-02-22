const Black = {
    name: "قول",
    Hide: false,
    Owner: "Gry KJ",
    Auth: 0,
    Time: 3,
    Info: "البوت يقولك شي",
    Class: "أدوات"
  };
module.exports = {
  config: Black,
  onType: async function({ api, event, args, black }) {

const tvm = args.join(" ");
if (!tvm) return black.reply("𓆩⚝𓆪اكتب شي اقوله لك𓆩⚝𓆪")
if (tvm.length > 412)
{
  let tvm1 = tvm.slice(0,tvm.length/2);
  let tvm2 = tvm.slice(tvm.length/2);
  try {
  await black.reply({attachment: await funcs.str(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm1)}&model=10`)})
  await black.reply({attachment: await funcs.str(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm2)}&model=10`)})
  } catch(e) {
   return black.reply("ياااال عمي نصك طويييل قصر شويي") }
} 
else {
  try {
  await black.reply({attachment: await funcs.str(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm)}&model=10`)})
  } catch (e) {
    black.reply("خطأ غير معروف")
  }
}
}
   };

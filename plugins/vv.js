const { Rudhra,mode } = require('../lib/');
Rudhra(
  {
    pattern: "vv",
    fromMe: mode,
    desc: "Forwards The View once messsage",
    type: "tool",
  },
  async (message, match) => {
    let buff = await message.quoted.download("buffer");
    return await message.sendFile(buff);
  }
);
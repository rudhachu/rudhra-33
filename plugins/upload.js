const { Rudhra, mode, parsedUrl } = require("../lib/");

Rudhra(
  {
    pattern: "upload ?(.*)",
    fromMe: mode,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    // Use match or fallback to the quoted text
    match = match || message.quoted?.text;
    
    // If neither match nor quoted text is available, send a prompt
    if (!match) {
      return await message.send("_reply to a url_");
    }

    // Parse the URL
    let url;
    try {
      url = await parsedUrl(match);
    } catch (error) {
      return await message.send("_Invalid URL provided_");
    }

    // Send the content from the URL
    try {
      await message.sendFromUrl(url);
    } catch (error) {
      await message.send("_Failed to send content from the URL_");
    }
  }
);
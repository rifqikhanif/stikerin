let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/kasar.mp3') 
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = ['/(a(su|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g ([iueo]) b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i'] 
handler.tags = ['audio'] 
handler.command = /(a(su|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g ([iueo]) b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

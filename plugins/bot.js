let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let mancabot = fs.readFileSync('./audio/mancabot.mp3') 
conn.sendMessage(m.chat, mancabot, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(bot)?$/i
handler.command = new RegExp

module.exports = handler

let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let pale = fs.readFileSync('./audio/Sayang.mp3') 
conn.sendMessage(m.chat, pale, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(sayang)?$/i
handler.command = new RegExp

module.exports = handler

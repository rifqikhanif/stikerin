let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let hallo = fs.readFileSync('./audio/hallo.mp3') 
conn.sendMessage(m.chat, hallo, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(hai)?$/i
handler.command = new RegExp

module.exports = handler

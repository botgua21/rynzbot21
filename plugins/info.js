let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Rynz 01
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Arya274/Arya-DN
╠➥ Instagram: @riyanhadi2020
╠➥ YouTube: Rynz 01
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Drawl nag
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa: 0838-5608-5455
║
║>Request? Wa.me/6283856085455
║
╠═〘 RyNz 01 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


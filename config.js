import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['201028085788', 'ELAKRAB ELYOTUBER ♥✨', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '201028085788'
global.packname = 'elakreb elyotuber '
global.author = '© elakreb elyotuber '
global.namebot = 'elakreb elyotuber'
global.wm = '© elakreb elyotuber'
global.stickpack = 'elakreb elyotuber'
global.stickauth = '© elakreb elyotuber'
global.fotonya = 'https://telegra.ph/file/666f347726644b3f59504.mp4'
// Link Sosmed
global.sig = 'https://atom.bio/elakrabelyotyobr'
global.sgh = 'https://www.youtube.com/@Elakrab'
global.sgc = 'https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f'
// Payment
global.dana = '085176701771'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = './vn/eror.mp3'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

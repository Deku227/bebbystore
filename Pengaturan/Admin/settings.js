const chalk = require("chalk")
const fs = require("fs")

//______________________[ PERLENGKAPAN ]_______________________//
global.owner = ['6287726972981','6285872002384'] //Ganti Jadi No Lu
global.ownerku = ['6287726972981','6285872002384']
global.ownerNomor = ['6285872002384']
global.botname = 'BEBBY STORE' //Ganti Jadi Nama Bot Lu
global.namabot = 'BEBBY STORE' 
global.ownername = 'BEBBY' 
global.ownerName = 'BEBBY' //Ganti Jadi Nama Lu
global.footer = 'BEBBY STORE'
global.packname = `BotWa` 
global.struk = `BEBBY` 
global.toko = `©PT BEBBY DIGITAL PAYMENT`
global.youtube = `@youtube`
global.sessionName = `arie`
global.anticall = true

//______________________[ THUMBNAIL ]_______________________//
global.qris = fs.readFileSync("./image/qrisbaru.jpg") //Sesuaikan Dengan Nama Gambar Qris Di Folder Image

//______________________[ GC MEMBER ]_______________________//
global.gcresmi = 'https://chat.whatsapp.com/H9XcsTYHLjs0k6IpqtpKxl' //Ganti Dengan Link Groupmu

//______________________[ DATA REKENING ]_______________________//
global.rekening = `

》 *SCAN QRIS HANYA UNTUK DANA SELAIN DANA UANG AKAN DITAHAN 1x24 JAM*

》 Silahkan Transfer Ke Salah Satu Rekening
》 DANA : 08876035026 A/N DEWI R.A
》 GOPAY : 083856265352 A/N BEBBY STORE
》 OVO : ᴍɪɴᴛᴀ ᴋᴇ ᴀᴅᴍɪɴ
》 SHOPEEPAY : ᴍɪɴᴛᴀ ᴋᴇ ᴀᴅᴍɪɴ

`

//______________________[ INFO UPLEVEL ]_______________________//
global.hargalevel = `Keuntungan UPLEVEL Kamu Akan Mendapatkan Harga Special Dan Yang Pasti Lebih Murah.
Khusus Level Partner Akan Mendapatkan Pelayanan Khsusus Dari Kami.

LIST BIAYA UPLEVEL :
*GOLD : Rp 50.000*
*PLATINUM : Rp 100.000*
*PARTNER : Rp 150.000*
`

global.mess = {
    wait: 'Sedang DiProses',
    succes: 'Sukses',
    admin: 'Layanan Khsusus Admin',
    botAdmin: 'BOT Harus Jadi Admin',
    owner: 'Layanan Khusus Owner',
    group: 'Hanya Bisa Didalam Group',
    private: 'Silahkan Private Chat Dengan BOT',
    bot: 'Fitur Special BOT',
    error: 'Layanan Error',    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
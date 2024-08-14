// API DIGIFLAZZ PRODUCTION
const digiuser = 'vavaxogxLbAg'
const digiapi = '43249e40-de09-5e8a-b92b-b4fbd8ce12f3'
const nomorKu = '6285872002384@s.whatsapp.net' //GANTI NOMORMU

// SETTING KEUNTUNGAN MEMBER BERDASARKAN PERSEN (%)
const prmember = '5'
const prgold = '4'
const prplatinum = '3'
const prpartner = '1'

// API PAYDISINI
const keypaydis = 'bd1605d1834f0db19c37a538698d3c43'
const merchpaydis = '' //Kosongkan Jika Belum Verifikasi Merchant
const servpaydis = '11' //Buat 11 Jika Belum Verifikasi Merchant
const batas_time = '300'; //Batas waktu pembayaran (detik) minimal 1800 30 menit dan maximal 10800 3 jam
const fee_owner = 350; //Fee Untuk Kamu Buat Meringankan Biaya Penarikan
const fee_cus = '1'; //	1 fee ditanggung customer 2 fee ditanggung merchant

// API ARIE PULSA UNTUK CEK NICKNAME GAME DAN LISENSI
const ariekey = 'Qcld7V8pP1XHw7lpJ99Lv61CGgMzAQHQ' // API KEY https://ariepulsa.com

module.exports = {
    digiuser,
    digiapi,
    ariekey,
    prmember,
    prgold,
    prplatinum,
    prpartner,
    keypaydis,
    merchpaydis,
    servpaydis,
    batas_time,
    fee_owner,
    fee_cus,
    nomorKu
}

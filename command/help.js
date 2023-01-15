const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

Hitung Mundur Tahun Baru
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal(new Date())}
 • Runtime : ${runtime(process.uptime())}

*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
 • Balance : ${toCommas(getBalance(sender, balance))}
 • Role : ${role}
 
 
*MAIN MENU*${petik}
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa${petik}

*CONVERTER/TOOLS*${petik} 
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tovideo
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}nuliskiri
 • ${prefix}nuliskanan
 • ${prefix}foliokiri
 • ${prefix}foliokanan
 • ${prefix}say
 • ${prefix}translate${petik}

*ANONYMOUS CHATS*${petik}
• ${prefix}menfess nama|62xxx|pesan

*STORE MENU*${petik}
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi
 • ${prefix}delsetdone
 • ${prefix}changedone
 • ${prefix}setdone
 • ${prefix}delsetproses
 • ${prefix}changeproses
 • ${prefix}setproses
 • proses < reply chat >
 • done < reply chat >${petik}

*DOWNLOADS MENU*${petik}
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram
 • ${prefix}igphoto
 • ${prefix}igvideo
 • ${prefix}igreels
 • ${prefix}tiktok
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio
 • ${prefix}mediafire
 • ${prefix}gitclone${petik}

*GROUP MENU*${petik}
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}pppanjanggc
 • ${prefix}setopen
 • ${prefix}changesetopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}changesetclose
 • ${prefix}delsetclose
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setppgc2 
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa${petik}

*SEARCH MENU*${petik}
 • ${prefix}lirik
 • ${prefix}ytsearch${petik}

*STORAGE*${petik}
 • ${prefix}addstik
 • ${prefix}addvn
 • ${prefix}addimg
 • ${prefix}addvid
 • ${prefix}liststik
 • ${prefix}listvn
 • ${prefix}listimg
 • ${prefix}listvid${petik}
 
*BAILEYS*${petik}
 • ${prefix}fitnah
 • ${prefix}nowa
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd${petik}

*OWNERS MENU*${petik}
 • ${prefix}autoread
 • ${prefix}autobio
 • ${prefix}autorespond
 • ${prefix}anticall
 • ${prefix}autoblok212
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setppbot2
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcimg
 • ${prefix}bcstik
 • ${prefix}bcvn
 • ${prefix}bcvideo
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa${petik}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `List Sewa ubah sendiri di folder command, file help.js 👌`
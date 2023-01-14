const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://Dpehect:geçicişifre@cluster0.olfqcop.mongodb.net/test"

const client = new MongoClient(url,{useNewUrlParser:true})

client.connect(err=>{
    const ilkveritabanim = client.db('ilkveritabani')
    const koleksiyon = ilkveritabanim.collection('kullanicilar')
    var veri = [{isim:"Mauro",soyisim:"Icardi",yas:"29"},{isim:"Yunus Emre",soyisim:"Gürlek",yas:"20"},{isim:"Yunus",soyisim:"Akgün",yas:"22"}]
    koleksiyon.drop(function(err,res){
        console.log("Veriler Silindi!")
        client.close()
    })
})
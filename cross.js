const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};



client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//------------------------------------SAĞ-TIK-BAN-KORUMA-----------------------------------\\ 

client.on("guildBanAdd", async function(guild, user) {
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;
if((logs.executor.id === client.user.id)) return;
  const yapanad = logs.executor;
  const id = logs.executor.id;
if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
guild.member(logs.entries.first().executor).removeRole(guild.roles.get("768188908105498704"))//ÇEKİLECEK ROL İD
guild.member(logs.entries.first().executor).removeRole(guild.roles.get("768195079504396318"))//ÇEKİLECEK ROL İD
guild.member(logs.entries.first().executor).removeRole(guild.roles.get("768194965770993684"))//ÇEKİLECEK ROL İD
  guild.member(logs.entries.first().executor).removeRole(guild.roles.get("771678402880208897"))//ÇEKİLECEK ROL İD
  guild.member(logs.entries.first().executor).removeRole(guild.roles.get("772079622909067294"))//ÇEKİLECEK ROL İD
  guild.member(logs.entries.first().executor).removeRole(guild.roles.get("772079629657833472"))//ÇEKİLECEK ROL İD
    }) 

const sChannel = guild.channels.find(c=> c.name ==="cross-spacework")//LOGKANALİD
  let modlog = new Discord.RichEmbed() 
  .setColor('BLACK')
  .setDescription(`Sağ Tık Ban Koruma ! \n\nBir Kullanıcıya Sağ Tık Ban Atıldı ! \n Ban Atan Kişi : ${yapanad}(${yapanad.id}) \n Banlanan Kullanıcı : ${user}(${user.id}) \n\n Ban atan kişinin yetkilerin alındı !`)
  .setFooter('Herlia X Cross')
  .setTimestamp()
   sChannel.send(modlog)
}) 

//------------------------------------SAĞ-TIK-BAN-KORUMA-----------------------------------\\ 

//---------------------------------SAĞ-TIK-BAN---------------------------------\\


client.on("guildBanAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;
    
      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) 
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("768188938388635668")/// VERİLECEK CEZALI ROL İD
    },3000)
const ferzahlog = guild.channels.find(c=> c.id ==="768225309631053846") // MSJ GDCK KANL ID 
const ferzah = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${yetkili.id}> ${user} Adlı Kullanıcıya Sağ Tık Ban Attığı İçin Rollerini Aldım Ve <@&768188938388635668> Rolünü Verdim.`) 
.setFooter('Developer Cross')
ferzahlog.send(ferzah)
guild.owner.send(`Cross Güvenliği | ** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Banladı Ve Yetkilerini Aldım.`)
},2000)
})


//---------------------------------SAĞ-TIK-BAN---------------------------------\\


//------------------------------------ROL-SİLME-KORUMA-1-----------------------------------\\ 

client.on(
    "roleDelete",
    (module.exports = async role => {
      const kanal = role.guild.channels.get("768225309631053846").id; //mod log kanal ıd
      if (!kanal) return;
      const guild = role.guild;
      const audit = await guild.fetchAuditLogs({ limit: 1 });
      const entry = await audit.entries.first();
    const yapanad = audit.executor;
    const id = audit.executor.id;
 if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
      let bot = "[Bot]";
      if (!entry.executor.bot) bot = "";
      console.log("Roller Alındı Ve Sunucu Güvene Alındı");
      let log = role.guild.channels.find(channel => channel.id === "cross-spacework");//LOGKANALTAMADI
      
      const logrolsil = new Discord.RichEmbed()
      .setColo('BLACK')
      .setTimestamp()
      .setFooter('Herlia X Cross')
      .setDescription(`**Rol Koruma ! \n\n Bir rol silindi ! \n Silinen Rol : ${entry.executor.id} \n  Rolü Silen Yetkili : <@`+entry.executor.id+`> \n Rolü silen kişinin yetkilerini aldım.**`)
      log.send(logrolsil)
      
     entry.executor.id.send(`** ${entry.executor.id} ** Rolünü Sildiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);
  
      role.guild.members.get(entry.executor.id).roles.forEach(r => {
        role.guild.members.get(entry.executor.id).removeRole(r);
        console.log("rolleralindi");
      });
    })
  );
  
//------------------------------------ROL-SİLİNME-KORUMA-1-----------------------------------\\ 







//------------------------------------ROL-SİLİNME-KORUMA-2-----------------------------------\\ 

client.on("roleDelete" ,module.exports = async role => {
    const kanal = role.guild.channels.get("768225309631053846").id;//LOGKANALİD
    if (!kanal) return;
    const guild = role.guild;
    const audit = await guild.fetchAuditLogs({ limit: 1 }); //değiştirebilirsiniz
      const entry = await audit.entries.first();
  if((entry.executor.id === client.user.id)) return;
    const yapanad = entry.executor;
    const id = entry.executor.id;
  if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
 if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
 // if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
  let bot = '[Bot]';
      if (!entry.executor.bot) bot = '';
    console.log("Roller Alındı Ve Sunucu Güvene Alındı") 
    const embed = await new Discord.RichEmbed()
          .setColor('BLACK')
          .setTitle('**Rol Koruma !**')
          .addField('Silinen Rol', `@${role.name}\n\`${role.id}\``, true)
          .addField('Silen Yetkili', `\`\`${entry.executor.tag} ${bot}\`\`\n\`${entry.executor.id}\``, true)
          .setFooter('Herlia X Cross')
          .setTimestamp(Date.now())
          .setColor("BLACK");
   let log = role.guild.channels.find( channel => channel.name === "cross-spacework");//LOGKANALİD
    const embed2321 = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setFooter('Herlia X Cross')
    .setDescription(`**Rol Guard ! \n\n Bir yetkili rol silmeye çalıştı ! \n Rol Silen Yetkili : `+entry.executor.id+` \n Silinen Rol : @${role.name} **`)
   log.send(embed2321)
  
  role.guild.members.get(entry.executor.id).roles.forEach(r => {
  role.guild.members.get(entry.executor.id).removeRole(r)
  console.log("rolleralindi")
  
  })
  })
  //------------------------------------ROL-SİLİNME-KORUMA-2-----------------------------------\\ 
  







  //------------------------------------ROL-SİLİNME-KORUMA-3-----------------------------------\\ 
  
  client.on("roleDelete", async role => {
    const entry = await role.guild
      .fetchAuditLogs({ type: "ROLE_DELETE" })
      .then(audit => audit.entries.first());
   const yapanad = entry.executor;
    const id = entry.executor.id;
  if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
 // if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
    const yetkili = await role.guild.members.get(entry.executor.id);
    const eskihali = role.permissions;
    console.log(eskihali);
   if (yetkili.id === "768188908105498704") return;//ÇEKİLECEK YETKİLİ ROL İD
   if (yetkili.id === "768195079504396318") return;//ÇEKİLECEK YETKİLİ ROL İD
   if (yetkili.id === "768194965770993684") return;//ÇEKİLECEK ROL İD
    if (yetkili.id === "772079622909067294") return;//ÇEKİLECEK ROL İD
    if (yetkili.id === "771678402880208897") return;//ÇEKİLECEK ROL İD
    if (yetkili.id === "772079629657833472") return;//ÇEKİLECEK ROL İD
  const sChannel = role.guild.channels.find(c=> c.id ==="768225309631053846")//LOGKANALİD
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setFooter('Herlia X Cross')
      .setDescription(`**Role Koruma! \n\nBir Rol Silindi ! \n Rol Silen Yetkili : <@${yetkili.id}>(${yetkili.id})\n Silinen Rolün Adı : ${role.name} \n\n Rolü silen kişinin yetkileri alındı !**`)
      .setTimestamp();
  sChannel.send(embed)
    let roles = role.guild.members.get(yetkili.id).roles.array();
    try {
      role.guild.members.get(yetkili.id).removeRoles(roles);
    } catch (err) {
      console.log(err);
    }
    setTimeout(function() {
      role.guild.members.get(yetkili.id).addRole("768188938388635668");//CEZALIROLİD
  
    }, 1500);
   let rolss = role.guild.roles.find(rol => rol.id === `${role.id}`);
  
  
    role.guild.createRole({
          name: role.name,
          color: role.color,
          permissions: eskihali
        })
  
  rolss.guild.members.forEach(u => {
  u.addRole(rolss)
  })
  
  });
  
  
 //------------------------------------ROL-SİLİNME-KORUMA-3-----------------------------------\\







 //------------------------------------ROL-AÇMA-KORUMA------------------------------------\\

client.on("roleCreate", async function(role) {


    if(role.guild.id !== "") return;//SUNUCUİD
        let logs = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'});
        if(logs.entries.first().executor.bot) return;
        role.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
     if((role.executor.id === client.user.id)) return;
      const yapanad = role.executor;
      const id = role.executor.id;
  if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
   // if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("768188908105498704"))//ÇEKİLECEK ROL İD
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("768195079504396318"))//ÇEKİLECEK ROL İD
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("768194965770993684"))//ÇEKİLECEK ROL İD
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("771678402880208897"))//ÇEKİLECEK ROL İD
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("772079622909067294"))//ÇEKİLECEK ROL İD
    role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("772079629657833472"))//ÇEKİLECEK ROL İD
        })
    
    const sChannel = role.guild.channels.find(c=> c.id ==="768225309631053846")//LOGKANALİD
      let modlog = new Discord.RichEmbed() 
      .setColor('BLACK')
      .setDescription(`**Rol Koruma !\n\nBir Rol Açıldı ! \nAçılan Rol : ${role.name} \n Rolü açan kişinin yetkileri alındı.`)
      .setFooter('Herlia X Cross')
      .setTimestamp()
       sChannel.send(modlog)
    
    })
    
//------------------------------------ROL-AÇMA-KORUMA------------------------------------\\






//------------------------------------KANAL-KORUMA-1-----------------------------------\\ 

client.on('channelDelete', async(channel) => {
    const logChannel = channel.guild.channels.find('name', 'log');//LOG KANAL İSMİ
    if (!logChannel) return console.log('Log kanalı bulunamadı.');
    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  const yapanad = entry.executor;
  const id = entry.executor.id;
  if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
  //if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
    const yetkili = entry.executor

 if (yetkili.id === "768188908105498704") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "768195079504396318") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "768194965770993684") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "771678402880208897") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "772079622909067294") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "772079629657833472") return;//ÇEKİLECEK YETKİLİ ROL İD
    channel.clone(channel.name, true, true, "Silinen kanal bot tarafından geri açıldı.")
    .then( async clone => {
        clone.setParent(channel.parent);
        clone.setPosition(channel.position);
        clone.replacePermissionOverwrites(channel.overwrites);//kick
        const embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setFooter('Herlia X Cross')
        .setDescription(`**Kanal Koruma ! \n\n Bir kanal silinmeye çalışıldı. \n Kanalı Silen Yetkili : ${yetkili}(${yetkili.id}) \n Silinmeye Çalışılan Kanal : __${channel.name}__ \n Silinen kanalı tekrar açtım ve silen kişinin yetkisini aldım.**`);
        logChannel.send(embed);

  yetkili.send(`**${channel.name}** odasını silmeye çalıştınız.\n Yetkinizi Aldım Ve Sunucuyu Güvene Aldım.`)
      
    })    

});

//------------------------------------KANAL-SİLME-KORUMA-1-----------------------------------\\ 








//------------------------------------KANAL-KORUMA-2-----------------------------------\\ 

   client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yapanad = entry.executor;
  const id = entry.executor.id;
if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
  if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
  //if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
  const yetkili = await channel.guild.members.get(entry.executor.id);
 if (yetkili.id === "768188908105498704") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "768195079504396318") return;//ÇEKİLECEK YETKİLİ ROL İD
 if (yetkili.id === "768194965770993684") return;//ÇEKİLECEK YETKİLİ ROL İD
     if (yetkili.id === "771678402880208897") return;//ÇEKİLECEK YETKİLİ ROL İD
     if (yetkili.id === "772079622909067294") return;//ÇEKİLECEK YETKİLİ ROL İD
     if (yetkili.id === "772079629657833472") return;//ÇEKİLECEK YETKİLİ ROL İD
  







if (yetkili.id === "") return;//ÇEKİLECEK YETKİLİ ROL İD
if (yetkili.id === "") return;//ÇEKİLECEK YETKİLİ ROL İD
if (yetkili.id === "") return;//ÇEKİLECEK YETKİLİ ROL İD
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="768225309631053846")//LOGKANALİD
   let embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setFooter('Herlia X Cross')
        .setDescription(`**Channel Guard ! \n\n Bir kanal silinmeye çalışıldı. \n Kanalı Silen Yetkili : ${yetkili}(${yetkili.id}) \n Silinmeye Çalışılan Kanal : __${channel.name}__ \n Silinen kanalı tekrar açtım ve silen kişinin yetkisini aldım.**`)
        sChannel.send(embed)

  yetkili.send(`**${channel.name}** odasını silmeye çalıştınız\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);

  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("768188938388635668");//CEZALIROLİD
yetkili.ban();
  }, 1500);
});      
//------------------------------------KANAL-SİLME-KORUMA-2-----------------------------------\\ 








//------------------------------------KANAL-AÇMA-KORUMA-----------------------------------\\ 


client.on('channelCreate', async (channel) => {
 
    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
    const yetkili = await channel.guild.members.get(entry.executor.id); //
     if(yetkili.id == "719301589030010953") return; 
     if(yetkili.id == "723555508690092063") return; 
     if(yetkili.id == "465980907887525889") return; 
     if(yetkili.id == "766260565587918858") return;   
     if(yetkili.id == "768203303128662016") return; 
     if(yetkili.id == "409108912021700638") return; 
     if(yetkili.id == "") return; 
     if(yetkili.id == "") return; 
     if(yetkili.id == "") return; 
   
     
     
                                                                                   
    let stglog = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`<@${yetkili.id}> İsimli Yetkili ${channel.name} Adlı Kanalı Sildi Ve Rollerini Alıp <@&768188938388635668> Rolünü Verdim.`)
   .setTimestamp()
    let roles = channel.guild.members.get(yetkili.id).roles.array()
    try {
   channel.guild.members.get(yetkili.id).removeRoles(roles)//
                                                                              
     }
    catch(err) {
    console.log(err)
    } 
    setTimeout(function(){
         channel.guild.members.get(yetkili.id).addRole("768188938388635668") // CEZALI ROL IDSİ
         channel.client.channels.get(`768225309631053846`).send(stglog); // MESAJIN GİRDİCEĞİ KANAL IDSİ
                  }, 1500);                                                                                  
        });

//------------------------------------KANAL-AÇMA-KORUMA-----------------------------------\\ 







//------------------------------------YETKİ-KORUMA-1-----------------------------------\\ 

client.on("roleUpdate", async (oldRole, newRole, guild) => {
  const logChannel = oldRole.guild.channels.find("name", "cross-spacework");//LOGKANALINTAMADI
  if (!logChannel) console.log("Log kanalı bulunamadı.");
  const logChannel2 = client.channels.get("768225309631053846");//LOGKANALİD
  if (!logChannel2) console.log("Log kanalı bulunamadı.");
  const entry = await newRole.guild
    .fetchAuditLogs({ type: "ROLE_UPDATE" })
    .then(audit => audit.entries.first());
  const yapanad = entry.executor;
  const id = entry.executor.id;
 if(yetkili.id == "719301589030010953") return; 
 if(yetkili.id == "723555508690092063") return; 
 if(yetkili.id == "465980907887525889") return; 
 if(yetkili.id == "766260565587918858") return;   
 if(yetkili.id == "768203303128662016") return; 
 if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
 //if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
  const yetkili = entry.executor;
  const yetkili2 = oldRole.guild.members.get(`${yetkili.id}`);
  const cezali = oldRole.guild.roles.get(`768188938388635668`); //Cezalı bot sistem
  if (yetkili.id === "768188908105498704") return;//ÇEKİLECEK YETKİLİ ROL İD
  if (yetkili.id === "768195079504396318") return;//ÇEKİLECEK YETKİLİ ROL İD
  if (yetkili.id === "768194965770993684") return;//ÇEKİLECEK YETKİLİ ROL İD
  if (yetkili.id === "771678402880208897") return;//ÇEKİLECEK YETKİLİ ROL İD
  if (yetkili.id === "772079622909067294") return;//ÇEKİLECEK YETKİLİ ROL İD
  if (yetkili.id === "772079629657833472") return;//ÇEKİLECEK YETKİLİ ROL İD
 //if (yetkili.roles.has("")) return;//ÇEKİLECEK YETKİLİ ROL İD

  if (newRole.hasPermission("MANAGE_ROLES")) {
    if (oldRole.hasPermission("MANAGE_ROLES")) return;
    newRole.setPermissions(oldRole.permissions);
    yetkili2.removeRoles(yetkili2.roles);
    await yetkili2.addRole(cezali.id);
    
    const rolleriyönetinlogu = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setDescription(`**Rol Koruma ! \n\n __Rolleri Yönet__ yetkisi bir role verilmeye çalışıldı. \n Yetkiyi Veren : **${yetkili.tag}** \n Yetki Verilen Rol : **${newRole.name}(${oldRole.name})** \n Yetkili Bilgisi : ${yetkili}(${yetkili.id}) **`)
    .setFooter('Herlia X Cross')
    logChannel2.send(rolleriyönetinlogu)
    
  
  yetkili2.send(`**${newRole.name}-(${oldRole.name})** Rolüne __Rolleri Yönet__ Yetkisi Verdiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene Aldım.`);

  }


if (newRole.hasPermission("BAN_MEMBERS")) {
    if (oldRole.hasPermission("BAN_MEMBERS")) return;
    newRole.setPermissions(oldRole.permissions);
    yetkili2.removeRoles(yetkili2.roles);
    await yetkili2.addRole(cezali.id);
  
  const banlogu1 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setFooter('Herlia X Cross')
  .setDescription(`**Rol Koruma ! \n\n __Üyeleri Yasakla__ yetkisi bir role verilmeye çalışıldı. \n Yetkiyi Veren : ${yetkili.tag} \n Yetki Verilen Rol : ${newRole.name}(${oldRole.name}) \n Yetkili Bilgisi : ${yetkili}(${yetkili.id}) **`)
  logChannel.send(banlogu1)
  
  
    
  yetkili2.send(`**${newRole.name}-(${oldRole.name})** Rolüne __Rolleri Yönet__ Yetkisi Verdiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);

  }



  if (newRole.hasPermission("MANAGE_CHANNELS")) {
    if (oldRole.hasPermission("MANAGE_CHANNELS")) return;
    newRole.setPermissions(oldRole.permissions);
    yetkili2.removeRoles(yetkili2.roles);
    await yetkili2.addRole(cezali.id);
    
  const kanalkorumalogu = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setFooter('Herlia X Cross')
  .setDescription(`**Rol Koruma ! \n\n __Kanalları Yönet__ yetkisi bir role verilmeye çalışıldı. \n Yetkiyi Veren : ${yetkili.tag} \n Yetki Verilen Rol : ${newRole.name}(${oldRole.name}) \n Yetkili Bilgisi : ${yetkili}(${yetkili.id}) **`)
  logChannel.send(kanalkorumalogu)
    
    
  yetkili2.send(`**${newRole.name}-(${oldRole.name})** Rolüne __Kanalları Yönet__  Yetkisi Verdiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);

  }

  if (newRole.hasPermission("MANAGE_GUILD")) {
    if (oldRole.hasPermission("MANAGE_GUILD")) return;
    newRole.setPermissions(oldRole.permissions);
    yetkili2.removeRoles(yetkili2.roles);
    await yetkili2.addRole(cezali.id);
    
  const sunucuyuyönetlog = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setFooter('Herlia X Cross')
  .setDescription(`**Rol Koruma ! \n\n __Sunucuyu Yönet__ yetkisi bir role verilmeye çalışıldı. \n Yetkiyi Veren : ${yetkili.tag} \n Yetki Verilen Rol : ${newRole.name}(${oldRole.name}) \n Yetkili Bilgisi : ${yetkili}(${yetkili.id}) **`)
  logChannel.send(sunucuyuyönetlog)
  


  yetkili2.send(`**${newRole.name}-(${oldRole.name})** Rolüne __Sunucuyu Yönet__ Yetkisi Verdiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);

  }
if (newRole.hasPermission("ADMINISTRATOR")) {
    if (oldRole.hasPermission("ADMINISTRATOR")) return;
    newRole.setPermissions(oldRole.permissions);
    yetkili2.removeRoles(yetkili2.roles);
    await yetkili2.addRole(cezali.id);
  
  const yöneticiloguk = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setFooter('Herlia X Cross')
  .setDescription(`**Rol Koruma ! \n\n __Yönetici__ yetkisi bir role verilmeye çalışıldı. \n Yetkiyi Veren : ${yetkili.tag} \n Yetki Verilen Rol : ${newRole.name}(${oldRole.name}) \n Yetkili Bilgisi : ${yetkili}(${yetkili.id}) **`)
  logChannel.send(yöneticiloguk)


  yetkili2.send(`**${newRole.name}-(${oldRole.name})** Rolüne __Yönetici__ Yetkisi Verdiniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene ALdım.`);

  }
});

//------------------------------------YETKİ-KORUMA-1-----------------------------------\\ 







//------------------------------------YETKİ-KORUMA-2-----------------------------------\\ 

client.on("roleUpdate", async function(oldRole, newRole) {
  const bilgilendir = await newRole.guild
    .fetchAuditLogs({ type: "ROLE_UPLATE" })
    .then(hatırla => hatırla.entries.first());
  let yapanad = bilgilendir.executor;
  let idler = bilgilendir.executor.id;
if (idler === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
if (idler === "") return;// yapan kişinin id si bu ise bir şey yapma
  if (oldRole.hasPermission("ADMINISTRATOR")) return;

  setTimeout(() => {
    if (newRole.hasPermission("ADMINISTRATOR")) {
      newRole.setPermissions(newRole.permissions - 8);
    }

    if (newRole.hasPermission("ADMINISTRATOR")) {
      if (
        !client.guilds.get(newRole.guild.id).channels.has("768225309631053846")//LOG KANAL İD
      )
        return newRole.guild.owner.send(
          `Rol Koruma Nedeniyle ${yapanad}(${yapanad.id}) Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi** Alındı. \Rol: **${newRole.name}**`
        ); //bu id ye sahip kanal yoksa sunucu sahibine yaz

      const rolkoruma = new Discord.RichEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setFooter('Herlia X Cross')
      .setDescription(`**Rol Koruma ! \n\n Bir role __Yönetici__ yetkisi verildi ! \n Yetkiyi Veren Kişi : ${yapanad}(${yapanad.id}) \n Yönetici Verlien Rol : ${newRole.name} \n Rolün yönetici yetkisi alındı.**`)
      client.send(rolkoruma)
   yapanad.send(`Yönetici Yetkisi Verdiğiniz Rolün Yetkisi Alındı !`);

    }
  }, 1000);
});

//------------------------------------YETKİ-KORUMA-2-----------------------------------\\ 








//------------------------------------YETKİ-KORUMA-3-----------------------------------\\ 

client.on("roleUpdate", async(oldRole, newRole) => {
    
  let alvin = db.fetch(`rolyetkikoruma_${oldRole.guild.id}`)
  if(alvin) {
    const entry = await oldRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
if((entry.executor.id === client.user.id)) return;
  const yapanad = entry.executor;
  const id = entry.executor.id;
if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
//if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
    let kisi = oldRole.guild.member(entry.executor);
kisi.roles.filter(a => a.hasPermission('ADMINISTRATOR')).forEach(x => kisi.removeRole(x.id))
kisi.roles.filter(a => a.hasPermission('MANAGE_CHANNELS')).forEach(x => kisi.removeRole(x.id))
kisi.roles.filter(a => a.hasPermission('MANAGE_ROLES')).forEach(x => kisi.removeRole(x.id))

client.channels.get(``).send(``)
     const rolgüncl = client.channels.get("768225309631053846");//LOGKANALİD
    
    const rolgüncelleme = new Discord.RichEmbed()
    .setColor('Red')
    .setTimestamp()
    .setFooter('Herlia X Cross')
    .setDescription(`**Rol Guard ! \n\n Bir rolün yetkisi güncellendi. \n Güncelleyen Yetkili : ${yapanad}(${yapanad.id}) \n Güncellenen Rol : ${newRole.name}(${oldRole.name}) \n Rolü güncelleyen kişinin yetkisini aldım.**`)
    (rolgüncl).send(rolgüncelleme)

    newRole.edit({
      name: oldRole.name,
      color: oldRole.color,
      position: oldRole.position,
      permissions: oldRole.permissions,
      hoist: oldRole.hoist,
      mentionable: oldRole.mentionable,
      position: oldRole.position
    });
   kisi.send(`**${newRole.name}(${oldRole.name})** Rolünün Yetkisini Güncellediniz.\n Yetkinizi Aldım Ve Sunucuyu Güvene Aldım.`);

  }
});
 
//------------------------------------YETKİ-KORUMA-3-----------------------------------\\ 








//------------------------------------BİRİSİNE-ROL-VERİNCE-ROL-ÇEKME------------------------------------\\ 
client.on("guildMemberUpdate", async (oldUser, newUser) => {
  const audit = await oldUser.guild
    .fetchAuditLogs({ type: "MEMBER_ROLE_UPDATE" })
    .then(audit => audit.entries.first());
  const yapanad = audit.executor;
  const id = audit.executor.id;
  if (id === client.user.id || id === oldUser.guild.ownerID) return;
if (id === "719301589030010953") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "723555508690092063") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "465980907887525889") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "766260565587918858") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "768203303128662016") return;// yapan kişinin id si bu ise bir şey yapma
if (id === "409108912021700638") return;// yapan kişinin id si bu ise bir şey yapma
//if (id === "") return;// yapan kişinin id si bu ise bir şey yapma
  
  if (id === "768188908105498704") return;//ÇEKİLECEK ROL İD
  if (id === "768195079504396318") return;//ÇEKİLECEK ROL İD
  if (id === "768194965770993684") return;//ÇEKİLİCEK ROL İD
  if (id === "771678402880208897") return;//ÇEKİLECEK ROL İD
  if (id === "772079622909067294") return;//ÇEKİLECEK ROL İD
  if (id === "772079629657833472") return;//ÇEKİLİCEK ROL İD
  if (audit.executor.bot) return;
  
  let role_name = "";
  let pasif = "";
  const db = require("quick.db");
  if (oldUser.roles.size < newUser.roles.size) {
    oldUser.roles.forEach(r => {
      db.set(`${r.id}`, "X");
    });
    newUser.roles.forEach(async r => {
      let check = await db.fetch(`${r.id}`);
      if (!check) {
        if (
          r.hasPermission("ADMINISTRATOR") ||
          r.hasPermission("MANAGE_CHANNELS") ||
          r.hasPermission("MANAGE_ROLES") ||
          r.hasPermission("BAN_MEMBERS") ||
          r.hasPermission("MANAGE_WEBHOOKS") ||
          r.hasPermission("MANAGE_GUILD") ||
          r.hasPermission("KICK_MEMBERS")
        ) {
          newUser.removeRole(r.id);
          role_name = r.name;
          const kanal = client.channels.get("768225309631053846");//LOGKANALİD
          const üyeyerolverme = new Discord.RichEmbed()
          .setColor('BLACK')
          .setTimestamp()
          .setFooter('Herlia X Cross')
          .setDescription(`**Rol Guard ! \n\n Bir üyeye rol verilmeye çalışıldı. \n Rolü Vermeye Çalışan Yetkili : <@${audit.executor.id}> (${audit.executor.id}) \n Rolü Vermeye Çalıştığı Kişi: (<@${newUser.id}> (${newUser.id}) \n Vermeye Çalıştığı Rol : (**${role_name}** (${r.id})**`)
          kanal.send(üyeyerolverme)
   audit.executor.send(`**(<@${newUser.id}> (${newUser.id}))** Adlı Kullanıcıya (**${role_name}** (${r.id})) Rolünü Verdiniz \n Lakin Ben Koruma Sayesinde Kullanıcıdan O Rolu Çektim. \n Herhangi Bi Hata Olduğunu Düşünüyorsanız Sunucu Saihibi İle Görüşünüz.`);

        } else {
          pasif = "x";
        }
      }
    });
    newUser.roles.forEach(r => {
      db.delete(`${r.id}`);
    });
  }
});
//------------------------------------BİRİSİNE-ROL-VERİNCE-ROL-ÇEKME------------------------------------\\ 




//------------------------------------BOT-KORUMA-----------------------------------\\ 

client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 'cross-spacework') // KANAL İSMİ

    if(member.user.bot !==true){

    } 
    else {
    if(!sChannel){
      member.guild.owner.send(`**Bot Koruma koruma sistemi**
Sunucuya Bot Geldi Banladım !
Banlanan Bot: **${member.user.tag}**`)
      .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    } else {
    sChannel.send(`**Bot koruma sistemi**
Sunucuya bot çekildi banladım !
Banlanan Bot: **${member.user.tag}**`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    }
  }  
  });

//------------------------------------BOT-KORUMA-----------------------------------\\ 
 









//////////////// Guardian Son //////////////////

client.login(ayarlar.token);
//ses//
client.on('ready', ()=>{
 client.channels.get("768189115539128431").join()
    }) 
//ses//
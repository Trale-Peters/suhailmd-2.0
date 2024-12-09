const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_19_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmVOanhLdWRLaXpqYmVtbnQ5diswQzlKSE9IcEZYeWlVRWhqL2ptakFPaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicHNXZm1KWnJTdXFlUUgyUFVNa2JkQVwiLFxuICBcInBob25lSWRcIjogXCJmNjIyNGI1Mi1mYjgxLTQ3OWEtODE5Ny01MjgxYTc5NDA0ZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMTA3LFxuICAgICAgMTU2LFxuICAgICAgMTg4LFxuICAgICAgMTA3LFxuICAgICAgMTMzLFxuICAgICAgMTE3LFxuICAgICAgMTA1LFxuICAgICAgMjQyLFxuICAgICAgMixcbiAgICAgIDExNSxcbiAgICAgIDk4LFxuICAgICAgMjIwLFxuICAgICAgMjUsXG4gICAgICAyMDcsXG4gICAgICAxNDgsXG4gICAgICAyMTksXG4gICAgICAyMTQsXG4gICAgICAxODgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyNTMsXG4gICAgICAxOTMsXG4gICAgICAyNDMsXG4gICAgICAxNzQsXG4gICAgICAxOCxcbiAgICAgIDIwMSxcbiAgICAgIDE1OCxcbiAgICAgIDI1MSxcbiAgICAgIDI0LFxuICAgICAgMzIsXG4gICAgICA4MCxcbiAgICAgIDIwMyxcbiAgICAgIDU4LFxuICAgICAgMTg4LFxuICAgICAgMTc2LFxuICAgICAgMTEzLFxuICAgICAgMzksXG4gICAgICA4MyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNjQxRVlOU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAwNjA1MDYzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjY5ODk2MDAwNzE4Nzk6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxybHQwQ0VJdnkxcm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrcGw5bE55eVFCSklZN2RTN0FISDdHN0ZKODJIcTdwSXVtWmx2T2V6ZXpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFvMkY2TGtMU3hpTHNtWStOUlRPcnVCQWVPS2RCWXhxL2U4ZDlBTjNrcGc1a2h5QTZUY1hHUnJIQ2o1bTY4K01GcVQwVTkxTDVCNXNZLzNuTEw1QUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFBQUxiekxXQU54cS9oY1B5cEJxZE1BeTN4cXl3T0hUYmk2ZVFUemZlMnNWckJIMlFZdkNVV1JZbzdOVUVqM0syUDMzQWx3b0Z2cWEvUGI5S2czR0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMDYwNTA2MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjcxMTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUdCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBR0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSMUFFU0diNzJDVFVEYWpPSnZNbEtGNUg0bStNSnYwYXBkelYzaGpOMFowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczMjI4MDIwOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

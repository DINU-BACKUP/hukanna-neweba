const processedReplyMessages = new Set();
/*if (!socket.newsletterQuery) {
  socket.newsletterQuery = async () => {
    console.log('newsletterQuery() not supported on this Baileys version.');
    return null;
  };
}
async function OWNERTEXT(socket, sender, msg, config) {
    const media = await prepareWAMessageMedia(
        { image: { url: config.IMG_PATH } },
        { upload: socket.waUploadToServer }
    );

    const msgContent = await generateWAMessageFromContent(
        sender,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: { 
                            text: "🚫 Only the owner can use this command...\n\n📁 *𝐃𝐈𝐍𝐔𝐖𝐇 𝐌𝐃 බොට් නිවැරදිව 𝐏𝐚𝐢𝐫 කරගන්නා ආකාරය*\n━━━━━━━━━━━━━━━━━━━━━━\n\n⭕ *`ඔයාටත් බොට් කෙනෙක් ඕනිනම් පහල Pair Web බටන් එක ක්ලික් කරලා වෙබ් එකට පැමිණ Link කරගන්න`*\n\n⭕ *`නැතහොත් Whatsapp Pair Button එකෙන් පැමිණ Link කරගන්න`*\n\n\n*`📲 If you also want a bot, click the Pair Web button below and go to the web and link it`*\n\n*`📲 Or come to the Whatsapp Pair Button and link it`*"
                        },
                        footer: { text: `${config.d_footer}` },
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "⚠ Unauthorized Access",
                            hasMediaAttachment: true,
                            ...media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🌐 Visit Pair Website",
                                        url: "https://dinuwah-mini.vercel.app",
                                        merchant_url: "https://dinuwah-mini.vercel.app"
                                    })
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Whatsapp Pair Link",
                                        url: "https://example.com",
                                        merchant_url: "https://example.com"
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: msg }
    );

    return await socket.relayMessage(
        msgContent.key.remoteJid,
        msgContent.message,
        { messageId: msgContent.key.id }
    );
}*/
/*const newsletters = "
                '120363423016470156@newsletter', // React + follow
                '120363419211971204@newsletter', // Follow only
                '120363405592273257@newsletter'  // Follow only
            ";*/

async function OWNERTEXT(socket, sender, msg, config) {
    const media = await prepareWAMessageMedia(
        { image: { url: config.IMG_PATH } },
        { upload: socket.waUploadToServer }
    );

    const msgContent = await generateWAMessageFromContent(
        sender,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: { 
                             text: `* *ආරක්ෂක හේතූන් මත බොට් හිමිකරු වන ඔබටද බොට් භාවිත කර හැක්කේ >> wa.me//${sanitizedNumber} << මෙම නම්බරය තුළදී පමණි 🪀*
                             
🍹 \`ඔයාටත් බොට් කෙනෙක් ඔනිනම් පහත ලින්ක් වලින් අවශ්‍ය එකකට පැමිණ බලන්න 👻...\`

* *For security reasons, you, the bot owner, can only use the bot within >> wa.me//${sanitizedNumber} << this number 🪀*

🍹 \`If you also want a bot, click on the desired button below and log in. 👻...\``
},
                        footer: { text: `${config.d_footer}` },
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "💱 This Bot Is Work in Owner Only",
                            hasMediaAttachment: true,
                            ...media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🌐 Visit Pair Website",
                                        url: "https://dinuwah-mini.vercel.app",
                                        merchant_url: "https://dinuwah-mini.vercel.app"
                                    })
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🌐 Visit Whatsapp Link",
                                        url: "https://wa.me/720244981?text=.pair",
                                        merchant_url: "https://wa.me/720244981?text=.pair"
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: msg }
    );

    return await socket.relayMessage(
        msgContent.key.remoteJid,
        msgContent.message,
        { messageId: msgContent.key.id }
    );
}
//`${sanitizedNumber}` +

                    const cadmin = "94767526059@s.whatsapp.net";
                    
const sanitizedNumber = "94720222981"; // ඔයාට අවශ්‍ය secondary number එක
const ownerJid = "94743392226@s.whatsapp.net";
const sanitizedJid = "94783728659@s.whatsapp.net";
const express = require('express');
const gis = require("g-i-s");   
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static"); // ✅ Use static ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath);
const stream = require("stream");
const { Buffer } = require("buffer");

const API_KEY = "c0d699b0de14957b0a2cfae76479da4b"; // 🔑 ඔයාගේ imgbb API key
const fs = require('fs-extra');
const isOwner = `94728899640@s.whatsapp.net` || `${sanitizedNumber}+@s.whastapp.net`;
const fileType = require("file-type"); 
const imgbbUploader = require("imgbb-uploader");
const path = require('path');
const { exec } = require('child_process');
const router = express.Router();
const pino = require('pino');
const moment = require('moment-timezone');
const Jimp = require('jimp');
const crypto = require('crypto');
const axios = require('axios');
const yts = require('yt-search');
const fetch = require('node-fetch');
const os = require('os');

const ddownr = require('denethdev-ytmp3');
const api = `https://api-dark-shan-yt.koyeb.app`;
const apikey = `edbcfabbca5a9750`;
const { initUserEnvIfMissing } = require('./settingsdb');
const { initEnvsettings, getSetting } = require('./settings');
const fakeForward = {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363298000572519@newsletter',//'120363419782717708@newsletter', // channel JID
                newsletterName: 'ස්ටේටස් Paradise.....🤪💋|🇱🇰"',// 'MINI-DINUWH-X 🪀',
                serverMessageId: '115'
            }
        };
const IMAGE_URL = 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg';

//=======================================
const autoReact = getSetting('AUTO_REACT') || 'off';

//=======================================
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser,
            DisconnectReason,
    proto,
  /*createIOSWebviewMessage, 
  createWebviewButton,*/
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent
} = require('@whiskeysockets/baileys');
//========================-============
async function fetchThumbnail(url) {
    try {
        const axios = require("axios");
        const res = await axios.get(url, { responseType: "arraybuffer" });
        return Buffer.from(res.data, "binary");
    } catch (e) {
        console.log("Thumbnail fetch error:", e);
        return null; // fallback
    }
}


//=======================================
const config = {
OWNER_CHANNELS : [
  "120363405592273257@newsletter",  // Channel 1
  "120363419211971204@newsletter"   // Channel 2
],
       AUTO_VIEW_STATUS: 'true',
   menuvideo: 'https://github.com/DINU-BACKUP/Hslama/raw/refs/heads/main/snaptik_7555099173222157575_v2.mp4',
    //menuvideo: 'https://v16-coin.tiktokcdn.com/8793fbd0fdaaec933e76a295a07b2d5e/68de7ed2/video/tos/alisg/tos-alisg-pve-0037c001/owIgZvQEYkSE73o6VA5iViYrczBarNAJBXaBG/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=13&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C&br=1746&bt=873&cs=0&ds=6&ft=EKFC~tZkX0gn12NvnudrWIxRsL179Q_45SY&mime_type=video_mp4&qs=0&rc=aTc1ZGk8PDpoOTQ1OzY0NkBpM3Y4aHE5cjtrNjMzODczNEAyL19jMl80NTAxYS0yYjUuYSNkXjZxMmRraWBhLS1kMTFzcw%3D%3D&vvpl=1&l=20251002153150EA829230E2355E7A9DBF&btag=e000b0000","music":"https://v16-ies-music.tiktokcdn.com/2d6c2cee019c24e1c5edca4d0cf62759/68e764fe/video/tos/alisg/tos-alisg-v-27dcd7/osq2DfixUEWQErGSbAogFBjZEgJRCAiIDBEAeC/?a=583965&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=EKFInkZkX0gn12NvnudrWIxRsL179Q_45SY&mime_type=audio_mpeg&qs=13&rc=M2x0dms5cmZrNjMzODU8NEBpM2x0dms5cmZrNjMzODU8NEAxMWMzMmRjaWBhLS1kMS1zYSMxMWMzMmRjaWBhLS1kMS1zcw%3D%3D&vvpl=1&l=20251002153150EA829230E2355E7A9DBF&btag=e00070000&shp=d05b14bd&shcp=-',
    BOT_LINK: '> *🔖. Connect Free Bot: http://bit.ly/3IGnhqg*',
    AUTO_LIKE_STATUS: 'true',
    AUTO_RECORDING: 'true',
    AUTO_LIKE_EMOJI: ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'],
    PREFIX: '.',
    MAX_RETRIES: 3,
    GROUP_INVITE_LINK: 'https://chat.whatsapp.com/LKrh3gf2ooDJmHk0Av4DQy?mode=ems_copy_t',
    ADMIN_LIST_PATH: './admin.json',
    IMAGE_PATH: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg',
IMG_PATH: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg',
    NEWSLETTER_JID: '120363405072953165@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',
    OTP_EXPIRY: 300000,
    NEWS_JSON_URL: '',
    d_footer : '╭───────────────✿\n│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`\n╰───────────────✿',
    BOT_NAME: 'Dinuwah-MiniX',
    OWNER_NAME: '@Dinuwah-X',
    OWNER_NUMBER: '94728899640',
    BOT_VERSION: '1.0.0',
    BOT_FOOTER: '╭───────────────✿\n│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`\n╰───────────────✿',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb1WkmNJP2121yQf143q',
    BUTTON_IMAGES: {
        ALIVE: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg',
        MENU: 'https://i.ibb.co/d0QDByDG/458d8d1b2758.jpg',
        OWNER: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg',
        SONG: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg',
        VIDEO: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg'
    }
};
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

const mongoUri = 'mongodb+srv://boveh30932_db_user:dwLCoaYvSa6Ue6W3@ape-amma.32impvs.mongodb.net/';
const client = new MongoClient(mongoUri);
let db;

async function initMongo() {
    if (!db) {
        await client.connect();
        db = client.db('KelumXz');
        // Create index for faster queries
        await db.collection('sessions').createIndex({ number: 1 });
    }
    return db;
}
function generateListMessage(text, buttonTitle, sections) {
    return {
        text: text,
        footer: config.BOT_FOOTER,
        title: buttonTitle,
        buttonText: "Select",
        sections: sections
    };
}
//=======================================
function generateButtonMessage(content, buttons, image = null) {
    const message = {
        text: content,
        footer: config.BOT_FOOTER,
        buttons: buttons,
        headerType: 1
    };
    if (image) {
        message.headerType = 4;
        message.image = typeof image === 'string' ? { url: image } : image;
    }
    return message;
}
//=======================================
const activeSockets = new Map();
const socketCreationTime = new Map();
const SESSION_BASE_PATH = './session';
const NUMBER_LIST_PATH = './numbers.json';

if (!fs.existsSync(SESSION_BASE_PATH)) {
    fs.mkdirSync(SESSION_BASE_PATH, { recursive: true });
}
//=======================================
function loadAdmins() {
    try {
        if (fs.existsSync(config.ADMIN_LIST_PATH)) {
            return JSON.parse(fs.readFileSync(config.ADMIN_LIST_PATH, 'utf8'));
        }
        return [];
    } catch (error) {
        console.error('Failed to load admin list:', error);
        return [];
    }
}
function formatMessage(title, content, footer) {
    return `${title}\n\n${content}\n\n${footer}`;
}
function getSriLankaTimestamp() {
    return moment().tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss');
}
// Utility function for runtime formatting (used in 'system' case)
function runtime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
    const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
//=======================================
async function joinGroup(socket) {
    let retries = config.MAX_RETRIES;
    const inviteCodeMatch = config.GROUP_INVITE_LINK.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]+)/);
    if (!inviteCodeMatch) {
        console.error('Invalid group invite link format');
        return { status: 'failed', error: 'Invalid group invite link' };
    }
    const inviteCode = inviteCodeMatch[1];

    while (retries > 0) {
        try {
            const response = await socket.groupAcceptInvite(inviteCode);
            if (response?.gid) {
                console.log(`Successfully joined group with ID: ${response.gid}`);
                return { status: 'success', gid: response.gid };
            }
            throw new Error('No group ID in response');
        } catch (error) {
            retries--;
            let errorMessage = error.message || 'Unknown error';
            if (error.message.includes('not-authorized')) {
                errorMessage = 'Bot is not authorized to join (possibly banned)';
            } else if (error.message.includes('conflict')) {
                errorMessage = 'Bot is already a member of the group';
            } else if (error.message.includes('gone')) {
                errorMessage = 'Group invite link is invalid or expired';
            }
            console.warn(`Failed to join group, retries left: ${retries}`, errorMessage);
            if (retries === 0) {
                return { status: 'failed', error: errorMessage };
            }
            await delay(2000 * (config.MAX_RETRIES - retries));
        }
    }
    return { status: 'failed', error: 'Max retries reached' };
}
//=======================================
async function sendAdminConnectMessage(socket, number, groupResult) {
    const admins = loadAdmins();
    const groupStatus = groupResult.status === 'success'
        ? `Joined (ID: ${groupResult.gid})`
        : `Failed to join group: ${groupResult.error}`;
    const caption = formatMessage(
        '*Connected ✅*',
        `📞 Number: ${number}\n🩵 Status: Online`,
        `${config.BOT_FOOTER}`
    );

    for (const admin of admins) {
        try {
            await socket.sendMessage(
                `${admin}@s.whatsapp.net`,
                {
                    image: { url: config.IMAGE_PATH },
                    caption
                }
            );
        } catch (error) {
            console.error(`Failed to send connect message to admin ${admin}:`, error);
        }
    }
}
//=======================================
function setupNewsletterHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const message = messages[0];
        if (!message?.key || message.key.remoteJid !== config.NEWSLETTER_JID) return;

        try {
            const emojis = ['❤️'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            const messageId = message.newsletterServerId;

            if (!messageId) {
                console.warn('No valid newsletterServerId found:', message);
                return;
            }

            let retries = config.MAX_RETRIES;
            while (retries > 0) {
                try {
                    await socket.newsletterReactMessage(
                        config.NEWSLETTER_JID,
                        messageId.toString(),
                        randomEmoji
                    );
                    console.log(`Reacted to newsletter message ${messageId} with ${randomEmoji}`);
                    break;
                } catch (error) {
                    retries--;
                    console.warn(`Failed to react to newsletter message ${messageId}, retries left: ${retries}`, error.message);
                    if (retries === 0) throw error;
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }
        } catch (error) {
            console.error('Newsletter reaction error:', error);
        }
    });
}
//=======================================
async function setupStatusHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const message = messages[0];
        if (!message?.key || message.key.remoteJid !== 'status@broadcast' || !message.key.participant || message.key.remoteJid === config.NEWSLETTER_JID) return;

        try {
            if (autoReact === 'on' && message.key.remoteJid) {
                await socket.sendPresenceUpdate("recording", message.key.remoteJid);
            }

            if (config.AUTO_VIEW_STATUS === 'true') {
                let retries = config.MAX_RETRIES;
                while (retries > 0) {
                    try {
                        await socket.readMessages([message.key]);
                        break;
                    } catch (error) {
                        retries--;
                        console.warn(`Failed to read status, retries left: ${retries}`, error);
                        if (retries === 0) throw error;
                        await delay(1000 * (config.MAX_RETRIES - retries));
                    }
                }
            }

            if (config.AUTO_LIKE_STATUS === 'true') {
                const randomEmoji = config.AUTO_LIKE_EMOJI[Math.floor(Math.random() * config.AUTO_LIKE_EMOJI.length)];
                let retries = config.MAX_RETRIES;
                while (retries > 0) {
                    try {
                        await socket.sendMessage(
                            message.key.remoteJid,
                            { react: { text: randomEmoji, key: message.key } },
                            { statusJidList: [message.key.participant] }
                        );
                        console.log(`Reacted to status with ${randomEmoji}`);
                        break;
                    } catch (error) {
                        retries--;
                        console.warn(`Failed to react to status, retries left: ${retries}`, error);
                        if (retries === 0) throw error;
                        await delay(1000 * (config.MAX_RETRIES - retries));
                    }
                }
            }
        } catch (error) {
            console.error('Status handler error:', error);
        }
    });
}
//=======================================
async function handleMessageRevocation(socket, number) {
    socket.ev.on('messages.delete', async ({ keys }) => {
        if (!keys || keys.length === 0) return;

        const messageKey = keys[0];
        const userJid = jidNormalizedUser(socket.user.id);
        const deletionTime = getSriLankaTimestamp();
        
        const message = formatMessage(
            '╭──◯',
            `│ \`D E L E T E\`\n│ *⦁ From :* ${messageKey.remoteJid}\n│ *⦁ Time:* ${deletionTime}\n│ *⦁ Type: Normal*\n╰──◯`,
            `${config.BOT_FOOTER}`
        );

        try {
            await socket.sendMessage(userJid, {
                image: { url: config.IMAGE_PATH },
                caption: message
            });
            console.log(`Notified ${number} about message deletion: ${messageKey.id}`);
        } catch (error) {
            console.error('Failed to send deletion notification:', error);
        }
    });
}

// Image resizing function
async function resize(image, width, height) {
    let oyy = await Jimp.read(image);
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG);
    return kiyomasa;
}

// Capitalize first letter
function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Generate serial
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size);
}

// Send slide with news items
async function SendSlide(socket, jid, newsItems) {
    let anu = [];
    for (let item of newsItems) {
        let imgBuffer;
        try {
            imgBuffer = await resize(item.thumbnail, 300, 200);
        } catch (error) {
            console.error(`Failed to resize image for ${item.title}:`, error);
            imgBuffer = await Jimp.read('https://i.ibb.co/PJvjMx9/20250717-093632.jpg');
            imgBuffer = await imgBuffer.resize(300, 200).getBufferAsync(Jimp.MIME_JPEG);
        }
        let imgsc = await prepareWAMessageMedia({ image: imgBuffer }, { upload: socket.waUploadToServer });
        anu.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*${capital(item.title)}*\n\n${item.body}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"𝐃𝙴𝙿𝙻𝙾𝚈","url":"https:/","merchant_url":"https://www.google.com"}`
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"𝐂𝙾𝙽𝚃𝙰𝙲𝚃","url":"https","merchant_url":"https://www.google.com"}`
                    }
                ]
            })
        });
    }
    const msgii = await generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*Latest News Updates*"
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: anu
                    })
                })
            }
        }
    }, { userJid: jid });
    return socket.relayMessage(jid, msgii.message, {
        messageId: msgii.key.id
    });
}

// Fetch news from API
async function fetchNews() {
    try {
        const response = await axios.get(config.NEWS_JSON_URL);
        return response.data || [];
    } catch (error) {
        console.error('Failed to fetch news from raw JSON URL:', error.message);
        return [];
    }
}

// Setup command handlers with buttons and images
function setupCommandHandlers(socket, number) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
             /*const messageId = msg.key.id;

        // Already processed නම් skip
        if (processedMessages.has(messageId)) return;
        processedMessages.add(messageId);*/

        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        let command = null;
        let args = [];
        let sender = msg.key.remoteJid;

        if (msg.message.conversation || msg.message.extendedTextMessage?.text) {
            const text = (msg.message.conversation || msg.message.extendedTextMessage.text || '').trim();
            if (text.startsWith(config.PREFIX)) {
                const parts = text.slice(config.PREFIX.length).trim().split(/\s+/);
                command = parts[0].toLowerCase();
                args = parts.slice(1);
            }
        }
        else if (msg.message.buttonsResponseMessage) {
            const buttonId = msg.message.buttonsResponseMessage.selectedButtonId;
            if (buttonId && buttonId.startsWith(config.PREFIX)) {
                const parts = buttonId.slice(config.PREFIX.length).trim().split(/\s+/);
                command = parts[0].toLowerCase();
                args = parts.slice(1);
            }
        }

        if (!command) return;

        try {
            switch (command) {
                case 'vadakna': {
                
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    
    const title = `🍆💦 *18+ අර වගේ ඇවිස්සෙන කතා කියවන්න ආස සෙට් එක කෝ*🤤🔞"

https://whatsapp.com/channel/0029VayoW8nHQbS7NBpT3M0j

*රෑ 10 වෙද්දි හැමදාම කතා දාන එකම Channel එක😻💋💦"*

*ඇවිස්සෙන ඇවිස්සෙන්න ආස කොල්ලො කෙල්ලො ටික එන්නෝ🤤💗🤌*`;
    // Video only, no caption
    await socket.sendMessage(sender, {
        video: { url: config.menuvideo }, 
        ptv: true,
        quoted: msg
    });

    // Image with caption
    await socket.sendMessage(sender, {
        image: { url: config.BUTTON_IMAGES.MENU },
        caption: title,
contextInfo:fakeForward,
        quoted: msg
    });

    break;
                }


case "iosalive":
case "bot": {
  try {
    // --- Only allow owner ---
    if (sender !== ownerJid) return;

    // --- React first ---
    await socket.sendMessage(sender, { react: { text: "💚", key: msg.key } });

    // --- Normal Button ---
    const normalButtons = [
      {
        buttonId: "alive_btn",
        buttonText: { displayText: "💚 BOT IS ALIVE" },
        type: 1,
      },
    ];

    // --- iOS WebView Button ---
    const webBtn = createWebviewButton({
      text: "🌐 OPEN SITE",
      url: "https://example.com",
      webviewInteraction: true,
    });

    const webMessage = createIOSWebviewMessage({
      bodyText: "💚 𝘿𝙄𝙉𝙐𝙒𝙃 𝙈𝘿 𝘼𝙇𝙄𝙑𝙀",
      footerText: "Powered by DINUWH MD",
      buttons: [webBtn],
    });

    // --- Send Normal Buttons ---
    await socket.sendMessage(
      sender,
      {
        text: "💚 *DINUWH MD IS ONLINE*",
        footer: "© DINUWH MD",
        buttons: normalButtons,
        headerType: 1,
      },
      { quoted: msg }
    );

    // --- Send iOS WebView ---
    await socket.sendMessage(sender, webMessage, { quoted: msg });
  } catch (err) {
    console.error("ALIVE CASE ERROR:", err);
    await socket.sendMessage(sender, { text: "❌ Error in Alive command!" }, { quoted: msg });
  }
  break;
}

                
case 'menu2': {
    try {
        const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = await import('baileys');

        let img = await prepareWAMessageMedia(
            { image: { url: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg' } },
            { upload: conn.waUploadToServer }
        );

        const slides = [
            {
                title: "Ｐｒｉｖａｔｅ Ｍｅｎｕ 🔐",
                body: `
〄 *Ｐｒｉｖａｔｅ ＣＯＭＭＡＮＤＳ* 🔥
• example1  
• example2  
• example3  

💠 *Only For Owner*
                `,
                btn: "🗝️ PRIVATE MENU"
            },
            {
                title: "Ｍａｉｎ Ｍｅｎｕ ⚙️",
                body: `
〄 *Ｍａｉｎ ＣＯＭＭＡＮＤＳ* 💫
• example1  
• example2  
• example3  

💠 *Bot Core Features*
                `,
                btn: "⚙️ MAIN MENU"
            },
            {
                title: "Ｐｕｂｌｉｃ Ｍｅｎｕ 🌐",
                body: `
〄 *Ｐｕｂｌｉｃ ＣＯＭＭＡＮＤＳ* 💭
• example1  
• example2  
• example3  

💠 *For Everyone*
                `,
                btn: "🌐 PUBLIC MENU"
            },
            {
                title: "Ｄｏｗｎｌｏａｄ Ｍｅｎｕ 📥",
                body: `
〄 *Ｄｏｗｎｌｏａｄ ＣＯＭＭＡＮＤＳ* 🎶
• example1  
• example2  
• example3  

💠 *Media Download Tools*
                `,
                btn: "📥 DOWNLOAD MENU"
            }
        ];

        const cards = slides.map((x) => ({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: x.title,
                hasMediaAttachment: true,
                ...img
            }),
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: x.body }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: x.btn,
                        url: "https://whatsapp.com/channel/0029VbAqsmpL2ATzk6vO2m2q"
                    })
                }]
            })
        }));

        const slideMenu = proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "〄 *DINUWH MD MENU* 💚\nScroll ➡️ to view categories."
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards
            })
        });

        const msg = await generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadataVersion: 2 },
                    interactiveMessage: slideMenu
                }
            }
        }, { userJid: m.chat, quoted: m });

        await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(m.chat, { text: "❌ Error loading slide menu." }, { quoted: m });
    }
}
break;
                    case 'tempcp': {
    try {
        const text = args.join(" ");
        if (!text) return await socket.sendMessage(sender, { text: "❗ Use: *.tempcp <caption> <newsletter JID>*" }, { quoted: msg });

        // 🧩 Extract caption and newsletter JID
        const parts = text.split("|");
        if (parts.length < 2) {
            return await socket.sendMessage(sender, { text: "❗ Format: *.tempcp caption | newsletterjid*\n\n📌 Example:\n.tempcp Hello world | 120363396379901844@newsletter" }, { quoted: msg });
        }

        const caption = parts[0].trim();
        const newsletterJid = parts[1].trim();

        // 🧾 Build fake forwarded message from given channel
        const fakeMsg = {
            key: {
                remoteJid: "status@broadcast",
                fromMe: false,
                participant: "0@s.whatsapp.net"
            },
            message: {
                extendedTextMessage: {
                    text: caption,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [],
                        externalAdReply: {
                            title: "🪄 Forwarded from Newsletter",
                            body: newsletterJid,
                            mediaType: 1,
                            thumbnailUrl: "https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg",
                            sourceUrl: `https://whatsapp.com/channel/${newsletterJid.split('@')[0]}`
                        }
                    }
                }
            }
        };

        // 📤 Send the fake forwarded message
        await socket.sendMessage(sender, { forward: fakeMsg }, { quoted: msg });

        // ✅ Confirmation
        await socket.sendMessage(sender, {
            text: `✅ *Fake Caption Sent!*\n\n📩 Caption: ${caption}\n📡 From: ${newsletterJid}`,
            quoted: msg
        });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: "❌ Error creating fake caption." }, { quoted: msg });
    }
    break;
}
                case 'vdknau': {
    try {
        await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

        const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = await import('baileys');

        // 1️⃣ Menu Caption Text
   
        // 2️⃣ Send PTV Video (Menu Video)
        await socket.sendMessage(sender, {
            video: { url: config.menuvideo },
            ptv: true,
            quoted: msg
        });


        // 4️⃣ Now Add SLIDE BUTTON MENU (Carousel)
        let img = await prepareWAMessageMedia(
            { image: { url: 'https://i.ibb.co/fdcQX5HT/e58fd9409097.jpg' } },
            { upload: socket.waUploadToServer }
        );

        const slides = [
            {
                title: "Ｐｒｉｖａｔｅ Ｍｅｎｕ 🔐",
                body: `• .pair\n• .system\n• .owner\n\n_Only for Admins_`,
                btn: "🗝️ PRIVATE MENU",
                btn2: "PAIR BOT WITH WHATSAPP"
            },
            {
                title: "Ｍａｉｎ Ｍｅｎｕ ⚙️",
                body: `• .ping\n• .getdp\n• .cinfo\n\n_Main Bot Commands_`,
                btn: "⚙️ MAIN MENU",
                btn2: "PAIR BOT WITH WHATSAPP"
            },
            {
                title: "Ｐｕｂｌｉｃ Ｍｅｎｕ 🌐",
                body: `• .song\n• .video\n• .img\n\n_For Everyone_`,
                btn: "🌐 PUBLIC MENU",
                btn2: "PAIR BOT WITH WHATSAPP"
            },
            {
                title: "Ｄｏｗｎｌｏａｄ Ｍｅｎｕ 📥",
                body: `• .fb\n• .fba\n• .tt\n\n_Media Download Tools_`,
                btn: "PAIR BOT WITH WEB",
                btn2: "PAIR BOT WITH WHATSAPP"
            }
        ];

        const cards = slides.map((x) => ({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: x.title,
                hasMediaAttachment: true,
                ...img
            }),
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: x.body }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: x.btn,
                        url: "https://whatsapp.com/channel/0029VbAqsmpL2ATzk6vO2m2q"
                    })
                }]
            })
        }));

        const slideMenu = proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "〄 *DINUWH X MINI MENU* 💚\nScroll ➡️ to view all categories."
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        });

        const msgi = await generateWAMessageFromContent(
            sender,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadataVersion: 2 },
                        interactiveMessage: slideMenu
                    }
                }
            },
            { userJid: sender, quoted: msg }
        );

        await socket.relayMessage(sender, msgi.message, { messageId: msgi.key.id });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: "❌ Error loading menu." }, { quoted: msg });
    }
    break;
}



//lalalallalalalalalalalalkskdkskskskskskskskskskksk

case 'menu': {
    try {
        await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

        const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = await import('@whiskeysockets/baileys');

        // 🟢 Send PTV (Menu Video)
        await socket.sendMessage(sender, {
            video: { url: config.menuvideo },
            ptv: true,
            quoted: msg
        });

        // 🖼️ Menu Image
        let img = await prepareWAMessageMedia(
            { image: { url: 'https://i.ibb.co/Xfr7ZcTj/aa369e1b106f.jpg' } },
            { upload: socket.waUploadToServer }
        );

        // 🧩 Menu Slides (Two Buttons Each)
        const slides = [
            {
                title: "Ｐｒｉｖａｔｅ Ｍｅｎｕ 🔐",
                body: `• .pair\n• .system\n• .owner\n\n_Only for Admins_`,
               btn: "Connect Bot Web",
                btn2: "Connect Bot Whatsapp",
                url1: "https://dinuwah-mini.vercel.app",
                url2: "https://wa.me/728899640?text=.pair"
            },
            {
                title: "Ｍａｉｎ Ｍｅｎｕ ⚙️",
                body: 'uththohuththihutha',
             btn: "PAIR BOT WITH WEB",
                btn2: "PAIR BOT WITH WHATSAPP",
                url1: "https://dinuwah-mini.vercel.app",
                url2: "https://wa.me/728899640?text=.pair"
            },
            {
                title: "Ｐｕｂｌｉｃ Ｍｅｎｕ 🌐",
                body: `• .song\n• .video\n• .img\n\n_For Everyone_`,
                btn: "PAIR BOT WITH WEB",
                btn2: "PAIR BOT WITH WHATSAPP",
                url1: "https://dinuwah-mini.vercel.app",
                url2: "https://wa.me/728899640?text=.pair"
             },
            {
                title: "Ｄｏｗｎｌｏａｄ Ｍｅｎｕ 📥",
                body: `* *.Song*\n> \`✍️ use. <.song Song Name,title Or Url>\`\n\n* *.video*\n> \`✍️ use. <.video Video Name,title Or Url>\`\n\n* *.fb (.facebook)*\n> \`✍️ use. <.fb Fb Video Url>\`\n\n* *.fba* (fb audio download)\n> \`✍️ use. <.fba Fb Video Url>\`\n\n* *.tt (.tiktok)*\n> \`✍️ use. <.tt Tiktok Video/ post Url>\`\n\n* *.img*\n> \`✍️ use. <.img search name(.img dog)>\`\n\n* *.gdrive* \n> \`✍️ use. <.gdrive google drive link >\`\n\n* *.gitclone*\n> \`✍️ use. <.gitclone Github Repo Url >\``,
                btn: "PAIR BOT WITH WEB",
                btn2: "PAIR BOT WITH WHATSAPP",
                url1: "https://dinuwah-mini.vercel.app",
                url2: "https://wa.me/728899640?text=.pair"
            }
        ];

        // 🧱 Create Cards with Two Buttons
        const cards = slides.map((x) => ({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: x.title,
                hasMediaAttachment: true,
                ...img
            }),
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: x.body }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: x.btn,
                            url: x.url1
                        })
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: x.btn2,
                            url: x.url2
                        })
                    }
                ]
            })
        }));

        // 🌀 Combine All Cards into Carousel
        const slideMenu = proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "〄 *DINUWH X MINI MENU* 💚\nScroll ➡️ to view all categories."
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        });

        const msgi = await generateWAMessageFromContent(
            sender,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadataVersion: 2 },
                        interactiveMessage: slideMenu
                    }
                }
            },
            { userJid: sender, quoted: msg }
        );

        await socket.relayMessage(sender, msgi.message, { messageId: msgi.key.id });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: "❌ Error loading menu." }, { quoted: msg });
    }
    break;
}
case 'seechannel': {
    try {
        await socket.sendMessage(sender, { react: { text: "📡", key: msg.key } });
        const { newsletterQuery } = socket;

        // Get all channels (limit = 50)
        const res = await socket.newsletterQuery({ limit: 50 });
        if (!res || !res.newsletters || res.newsletters.length === 0) {
            return await socket.sendMessage(sender, { text: "❌ කිසිම Channel එකක Admin නෙවෙයි!" }, { quoted: msg });
        }

        // Filter only where bot is admin
        const adminChannels = res.newsletters.filter(c => c.isAdmin);

        if (adminChannels.length === 0) {
            return await socket.sendMessage(sender, { text: "⚠️ ඔයා Admin විදිහට ඉන්න Channel එකක් නෑ!" }, { quoted: msg });
        }

        // Format list
        let txt = `📢 *DINUWH MD CHANNEL LIST*\n\n`;
        for (const ch of adminChannels) {
            txt += `🔗 ${ch.name || "Unknown"}\nhttps://whatsapp.com/channel/${ch.id?.split('@')[0]}\n\n`;
        }

        txt += `POWERED BY DINUWH MD 💚`;

        await socket.sendMessage(sender, { text: txt }, { quoted: msg });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: "❌ Error fetching channels!" }, { quoted: msg });
    }
    break;
}
                case 'dfc': {
    await socket.sendMessage(sender, { react: { text: "📡", key: msg.key } });

    // Owner channels list (from your config or settings.js)
    const OWNER_CHANNELS = config.OWNER_CHANNELS || [
        "120363041244123456@newsletter",  // Example channel 1
        "120363396379901844@newsletter"   // Example channel 2
    ];

    // 🛑 Only allow if command is sent from an Owner Channel
    if (!OWNER_CHANNELS.includes(msg.key.remoteJid)) {
        return await socket.sendMessage(sender, { 
            text: "⚠️ OWNER ONLY🙂‍↔️"
        });
    }

    if (args.length === 0) {
        return await socket.sendMessage(sender, {
            text: '❗JID? .fc 120363396379901844@newsletter'
        });
    }

    const jid = args[0];
    if (!jid.endsWith("@newsletter")) {
        return await socket.sendMessage(sender, {
            text: '❗ jid ERROR.'
        });
    }

    try {
        const metadata = await socket.newsletterMetadata("jid", jid);
        if (metadata?.viewer_metadata === null) {
            await socket.newsletterFollow(jid);
            await socket.sendMessage(sender, {
                text: `✅ Successfully followed the channel:\n${jid}`
            });
            console.log(`FOLLOWED CHANNEL: ${jid}`);
        } else {
            await socket.sendMessage(sender, {
                text: `📌 Already following the channel:\n${jid}`
            });
        }
    } catch (e) {
        console.error('❌ Error in follow channel:', e.message);
        await socket.sendMessage(sender, {
            text: `❌ Error: ${e.message}`
        });
    }

    break;
}
                       case 'chrl': {
    await socket.sendMessage(sender, { react: { text: "💝", key: msg.key } });
    const text = args && args.length > 0 ? args.join(" ") : "";

    if (!text) {
        await socket.sendMessage(sender, { 
            text: "❌ කරුණාකර Channel message link එකක් දෙන්න.\nඋදාහරණයක්: .chrlove https://whatsapp.com/channel/12345/67890" 
        });
        break;
    }

    try {
        // ✅ Owner Channel List එකට ඇතුළත්ද කියලා check කරනවා
        if (!config.OWNER_CHANNELS.includes(msg.key.remoteJid)) {
            return await socket.sendMessage(sender, { 
                text: "⚠️ මෙම command එක භාවිතා කළ හැක්කේ Owner Channel(ස්) තුළ පමණි." 
            });
        }

        const link = text.trim();
        const parts = link.split('/');

        if (parts.length < 6) {
            await socket.sendMessage(sender, { text: "❌ වැරදි link එකක්. කරුණාකර සම්පූර්ණ channel message link එකක් දෙන්න." });
            break;
        }

        const channelId = parts[4];
        const messageId = parts[5];

        const loveEmojis = ["🩵", "❤️", "🖤", "🤍", "💝"];
        const chosenEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

        // Channel metadata and react
        const res = await socket.newsletterMetadata("invite", channelId);
        await socket.newsletterReactMessage(res.id, messageId, chosenEmoji);

        await socket.sendMessage(sender, { 
            text: `✅ *Successfully reacted with* "${chosenEmoji}" 💫\n\n📩 Channel Message:\n${link}` 
        });

    } catch (e) {
        console.error("chrlove error:", e);
        await socket.sendMessage(sender, { text: "❌ Error: " + e.toString() });
    }
    break;
}
               case 'gitclone': {
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
  try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
    // Extract text from any message type
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q) {
      return await socket.sendMessage(sender, { text: "❌ Please provide a GitHub repository link." }, { quoted: msg });
    }

    // Validate GitHub URL
    const match = q.match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i);
    if (!match) {
      return await socket.sendMessage(sender, { text: "❌ Invalid GitHub repository link!" }, { quoted: msg });
    }

    let [, owner, repoName] = match;
    repoName = repoName.replace(/.git$/, ""); // remove .git suffix

    // GitHub API ZIP download URL
    const zipUrl = `https://api.github.com/repos/${owner}/${repoName}/zipball`;

    // Optional: fetch HEAD to get filename
    let res = await fetch(zipUrl, { method: "HEAD" });
    let contentDisposition = res.headers.get("content-disposition");
    let fileName = contentDisposition
      ? contentDisposition.match(/attachment; filename=(.*)/)[1]
      : `${repoName}.zip`;

    const caption = `\`📦 GitHub Repo Download\`\n🔖 *Owner: ${owner}*\n*🔖 Repo: ${repoName}*\n\n${config.d_footer}\n\n${config.BOT_LINK}`;

    // Send as document
    await socket.sendMessage(sender, {
      document: { url: zipUrl },
      mimetype: "application/zip",
      fileName: fileName,
      caption: caption,
      contextInfo: fakeForward
    }, { quoted: msg });

    await socket.sendMessage(sender, { react: { text: "✔", key: msg.key } });

  } catch (err) {
    console.error("GitClone Plugin Error:", err);
    await socket.sendMessage(sender, { text: "❌ Failed to download GitHub repository." }, { quoted: msg });
  }
  break;
}
                                    

                        case 'gdown':
                        case 'gdrive': {
                        
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    try 
                 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        // Extract text from any message type
        const q = msg.message?.conversation ||
                  msg.message?.extendedTextMessage?.text ||
                  msg.message?.imageMessage?.caption ||
                  msg.message?.videoMessage?.caption || '';

        if (!q) return await socket.sendMessage(sender, { text: '❌ Please provide a Google Drive link.' }, { quoted: msg });
        if (!q.includes('drive.google.com')) return await socket.sendMessage(sender, { text: '❌ Invalid Google Drive URL.' }, { quoted: msg });

        // React to indicate processing
        await socket.sendMessage(sender, { react: { text: '⏱️', key: msg.key } });

        // Fetch file info from Sadiya API
        const apiUrl = `https://sadiya-tech-apis.vercel.app/download/gdrivedl?url=${encodeURIComponent(q)}&apikey=sadiya`;
        const fetchRes = await fetch(apiUrl);
        const data = await fetchRes.json();

        if (!data.status || !data.result || !data.result.downloadUrl) {
            return await socket.sendMessage(sender, { text: '❌ Could not fetch file info. Check your link or API key.' }, { quoted: msg });
        }

        const file = data.result;

        // Prepare info message
        const infoText = `乂 Ｄ𝚒ｎｕｗｈ  ＧＤＲＩＶＥ Ｄｏｗｎ⟩⟩⟩
\`╭─────────✦✧✦─────────╮\`

* ✦ *Name:* ${file.fileName || "Unknown"}

* ✦  *Type:* ${file.mimetype || "N/A"}

* ✦ *Download Link:* ${file.downloadUrl || "N/A"}

\`──────────✦✧✦──────────\`

${config.d_footer}

${config.BOT_LINK}

`;

        await socket.sendMessage(sender, { text: infoText, contextInfo: fakeForward }, { quoted: msg });
        // Send the file as a document
        const sentMsg = await socket.sendMessage(sender, {
    document: { url: file.downloadUrl },
    mimetype: file.mimetype || 'application/octet-stream',
    fileName: file.fileName || 'GDriveFile',
    caption: `${config.d_footer}\n\n${config.BOT_LINK}`,
    contextInfo: fakeForward
}, { quoted: msg });

        // React to indicate success
        await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('GDrive Case Error:', err);
        await socket.sendMessage(sender, { text: '❌ Error occurred while fetching Google Drive file.' }, { quoted: msg });
    }
    break;
}

                                    
                              
       
                                    /*
                                                            case 'tiktok':     
                  case 'tt': {
    const axios = require('axios');
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || 
              msg.message?.imageMessage?.caption || 
              msg.message?.videoMessage?.caption || '';
            await socket.sendMessage(sender, {
      react: {
        text: "🫟", // emoji
        key: msg.key // react to original command
      }
    });

    const tiktokUrl = q?.trim();
    if (!/tiktok\.com/.test(tiktokUrl)) {
        return await socket.sendMessage(sender, { text: '✍️ *Use:* .tt <video link>' });
    }

    try {
        const res = await axios.get(`https://sadiya-tech-apis.vercel.app/download/tiktokdl?url=${encodeURIComponent(tiktokUrl)}&apikey=sadiya`);
        const result = res.data;

        if (!result.status || !result.result) {
            return await socket.sendMessage(sender, { text: '*❌ Invalid response from API.*' });
        }

        const videoData = result.result; // API result
        const captionMsg = `
乂 Ｄ𝚒ｎｕｗｈ тт Ｄｏｗｎ⟩⟩⟩
\`╭─────────✦✧✦─────────╮\`

✦ *𝐓𝐢𝐭𝐥𝐞    :* ${videoData.title}

✦ *𝐂𝐚𝐩𝐭𝐢𝐨𝐧 :* ${videoData.caption}
✦ *𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 :* ${videoData.duration}
\`──────────✦✧✦──────────\`

> *Send you want format ⤵️*

*➀. HD No Watermark*
*➁. HD NoWM Video Note*
*➂. HD NOWM Document*
*➃. Audio File*

╭───────────────✿
│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`
╰───────────────✿
> ${config.BOT_LINK}*`;

        // Send thumbnail + options
        const menuMsg = await socket.sendMessage(sender, {
            image: { url: videoData.thumbnail },
            caption: captionMsg,
            contextInfo: fakeForward
        }, { quoted: msg });

        // React to original msg
        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });

        // Listen for user reply
        socket.ev.on('messages.upsert', async (msgUpdate) => {
            const reply = msgUpdate.messages[0];
            if (!reply.message || !reply.message.extendedTextMessage) return;

            if (reply.message.extendedTextMessage.contextInfo?.stanzaId !== menuMsg.key.id) return;

            const option = reply.message.extendedTextMessage.text.trim();
            let sendData = {};

            switch (option) {
                case '2': // HD WM
                    sendData = { video: { url: videoData.nowm }, mimetype: 'video/mp4', ptv: true , caption: `🎬 ${videoData.title}\n© DINUWH-X_MD` };
                    break;
                
                   
                case '1': // HD NO WM
                    sendData = { video: { url: videoData.nowm }, mimetype: 'video/mp4', caption: `🎬 ${videoData.title}\n© DINUWH-X_MD` };
                    break;
                case '3': // DOC NO WM
                    sendData = { document: { url: videoData.nowm }, mimetype: 'video/mp4', fileName: `${videoData.title}.mp4` };
                    break;
                case '4': // AUDIO
    {
        const path = require("path");
        const fs = require("fs");
        const ffmpeg = require("fluent-ffmpeg");
        const axios = require("axios");

        const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
        const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

        // 1. MP3 download
        const response = await axios.get(videoData.music, { responseType: "arraybuffer" });
        fs.writeFileSync(tempMp3, Buffer.from(response.data));

        // 2. MP3 → OPUS convert
        await new Promise((resolve, reject) => {
            ffmpeg(tempMp3)
                .audioCodec("libopus")
                .format("opus")
                .save(tempOpus)
                .on("end", resolve)
                .on("error", reject);
        });

        // 3. sendData assign
        sendData = {
            audio: {
                url: tempOpus,
                mimetype: "audio/ogg; codecs=opus",
                fileName: `${videoData.title}.opus`,
                ptt: true
            }
        };
        break; 
    }
        
      */  case 'jid': {
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    try {
        // Original message object
        // ⚠️ Ensure your command handler function passes `msg` as the parameter
        const sender = msg.key.remoteJid;

        // Prepare plain text reply with JID
        const jidText = `${sender}`;

        // Send message quoting the original message
        await socket.sendMessage(sender, { text: jidText }, { quoted: msg });

        // Optional: react to the command message
        await socket.sendMessage(sender, { react: { text: "✔️", key: msg.key } });

    } catch (err) {
        console.error("JID Command Error:", err);
        // Fallback error message
        await socket.sendMessage(sender, { text: "❌ Something went wrong!" });
    }
    break;
}
                                  /*    'ytxmp3' 
                                    case 'song': {
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    const axios = require("axios");
    const yts = require("yt-search");
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    function extractYouTubeId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                const match = url.match(regex);
        return match ? match[1] : null;
    }

    function convertYouTubeLink(input) {
        const videoId = extractYouTubeId(input);
        if (videoId) return `https://www.youtube.com/watch?v=${videoId}`;
        return input;
    }

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || q.trim() === '') {
        return await socket.sendMessage(sender, { text: '*Please provide a YouTube link or song name...!*' }, { quoted: msg });
    }

    const fixedQuery = convertYouTubeLink(q.trim());

    try 

  
        // search from yt-search
        //const search = await yts(fixedQuery);
        const data = search.videos[0];
        if (!data) return await socket.sendMessage(sender, { text: '*❌ No results found!*' }, { quoted: msg });

        const url = data.url;

        // Asitha API
        const apiUrl = `http://vpn.asitha.top:3000/api/ytmp3?url=${encodeURIComponent(url)}`;
        const { data: apiRes } = await axios.get(apiUrl);

        if (!apiRes?.status || !apiRes?.result?.download) {
            return await socket.sendMessage(sender, { text: "❌ Failed to fetch song details. Try another link!" }, { quoted: msg });
        }

        const result = apiRes.result;
        const title = result.title || data.title;
        const duration = result.duration || data.seconds;
        const thumbnail = result.thumbnail || data.thumbnail;
        const downloadUrl = result.download;
        const quality = result.quality || "128kbps";

        // send details first
        const caption = `
乂 Ｄ𝚒ｎｕｗｈ Чт Ｄｏｗｎ⟩⟩⟩
╭──────────✦✧✦──────────╮

✦ 𝚃𝚒𝚝𝚕𝚎   :  *${title}*
✦ Duration : *${duration} sec*
✦ Quality  : *${quality}*
✦ Uploaded : ${data.ago}
✦ Channel  : *${data.author.name}*
✦ Views    : ${data.views}
✦ Url      : *${data.url}*

╰───────────────✿

> *Select Format ⤵️*
*➀. Audio Type*
*➁. Document Type*
*➂. Voice Note (PTT)*

╭───────────────✿
│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`
╰───────────────✿
`;

        const menuMsg = await socket.sendMessage(sender, {
            image: { url: thumbnail },
            caption: caption,
            contextInfo: fakeForward
        }, { quoted: msg });

        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });

        // listen for reply
        socket.ev.on('messages.upsert', async (msgUpdate) => {
    const replyMsg = msgUpdate.messages[0];
    if (!replyMsg?.message?.extendedTextMessage) return;

    // 🔑 unique reply msg id
    const replyId = `${replyMsg.key.remoteJid}_${replyMsg.key.id}`;

    // ❌ already handled
    if (processedReplyMessages.has(replyId)) return;
    processedReplyMessages.add(replyId);

    // 🧹 memory clean
    if (processedReplyMessages.size > 500) {
        const ids = Array.from(processedReplyMessages);
        ids.slice(0, 250).forEach(id => processedReplyMessages.delete(id));
    }

    // 🔗 only replies to menuMsg
    if (
        replyMsg.message.extendedTextMessage.contextInfo?.stanzaId !==
        menuMsg.key.id
    ) return;

    const selectedOption =
        replyMsg.message.extendedTextMessage.text.trim();

    // 👉 your switch / logic here
   switch (selectedOption) {
                case '1': // Audio
                    await socket.sendMessage(sender, {
                        audio: { url: downloadUrl },
                        mimetype: "audio/mpeg",
                        fileName: `${title}.mp3`
                    }, { quoted: replyMsg });
                    break;

                case '2': // Document
                    await socket.sendMessage(sender, {
                        document: { url: downloadUrl },
                        mimetype: "audio/mpeg",
                        fileName: `${title}.mp3`
                    }, { quoted: replyMsg });
                    break;

                case '3': // Voice Note (PTT with opus)
                    try {
                        const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
                        const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

                        const response = await axios.get(downloadUrl, { responseType: "arraybuffer" });
                        fs.writeFileSync(tempMp3, Buffer.from(response.data));

                        await new Promise((resolve, reject) => {
                            ffmpeg(tempMp3)
                                .audioCodec("libopus")
                                .format("opus")
                                .save(tempOpus)
                                .on("end", resolve)
                                .on("error", reject);
                        });

                        await socket.sendMessage(sender, {
                            audio: {
                                stream: fs.createReadStream(tempOpus),
                                mimetype: "audio/ogg; codecs=opus",
                                fileName: `${title}.opus`
                            },
                            ptt: true
                        }, { quoted: replyMsg });

                        fs.unlinkSync(tempMp3);
                        fs.unlinkSync(tempOpus);
                    } catch (e) {
                        console.error("FFmpeg Error:", e);
                        await socket.sendMessage(sender, { text: "❌ Failed to convert song to PTT." }, { quoted: replyMsg });
                    }
                    break;

                default:
                    await socket.sendMessage(sender, { text: "❌ Invalid option. Please select 1, 2, or 3." }, { quoted: replyMsg });
            }
        });

    } catch (err) {
        console.error(err);
        await socket.sendMessage(sender, { text: "*❌ Error occurred!*" }, { quoted: msg });
    }
    break;
}*/

case 'vviipp':
case 'vip': {
  try {
    if (sender !== ownerJid && sender !== sanitizedJid) {
      return await OWNERTEXT(socket, sender, msg, config);
    }

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { 
        text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" 
      }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { 
        text: "*❌ Please provide both song and target channel!*" 
      }, { quoted: msg });
    }

    const yts = require("yt-search");
    let searchQuery = songQuery;

    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    if (match) searchQuery = match[1];

    const search = await yts(searchQuery);
    if (!search.videos.length) {
      return await socket.sendMessage(sender, { text: "*❌ No results found!*" }, { quoted: msg });
    }

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // ========= Foreign-Marna API =========
    const axios = require("axios");
    const api = `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi?url=${encodeURIComponent(ytUrl)}&fo=2&qu=144&apiKey=82a43b0eca5e7f5bc1a3fd8c9f2d007967f6cac43a83efef4e4d7b131b78caf3`;

    const { data: apiRes } = await axios.get(api);

    if (!apiRes?.downloadData?.url) {
      return await socket.sendMessage(sender, { text: "❌ Download link not found!" }, { quoted: msg });
    }

    const audioUrl = apiRes.downloadData.url;
    const apiTitle = title;
    const apiDuration = timestamp;
    const apiQuality = "128kbps";
    const apiThumb = thumbnail;

    // ========= Resolve Channel =========
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      } else if (/@s\.whatsapp\.net$/i.test(targetRaw)) {
        const metadata = await socket.newsletterMetadata("jid", targetRaw);
        if (metadata?.name) channelName = metadata.name;
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // ========= Temp File Convert =========
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${apiTitle}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *${apiQuality}*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${apiDuration}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

\`සින්දුවට රියැක්ට් ඕනි ළමයෝ...😽💗🍃\`

> *${channelName}*`;

    const caption2 = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${apiTitle}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *${apiQuality}*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${apiDuration}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

*Reply Below Number 🙇‍♂️❤️*

* \`1 = Send Details for Channel 😍💙\`

* \`2 = Send mp3 audio Send For Channel 😍💙\`


> *${channelName}*`;

const huththa = await socket.sendMessage(sender, {
            image: { url: apiThumb },
            caption: caption2,
            contextInfo: fakeForward
        }, { quoted: msg });

        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });


socket.ev.on('messages.upsert', async (msgUpdate) => {
const replyMsg = msgUpdate.messages[0];
if (!replyMsg.message?.extendedTextMessage) return;

if (replyMsg.message.extendedTextMessage.contextInfo?.stanzaId !== huththa.key.id) return;  

        const selectedOption = replyMsg.message.extendedTextMessage.text.trim();
  
            switch (selectedOption) {
                case '1': // Audio
                await socket.sendMessage(targetJid, { image: { url: apiThumb }, caption });
                    break;
await socket.sendMessage(sender, { 
      text: `*✅ "${apiTitle}"*\n successfully sent to Details 💋\n*Channel Name = ${channelName}*\n*Channel Jid = (${targetJid})*\n\n\`© Powered By DINUWH MD\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` 
    }, { quoted: msg });


                case '2': // Document
                        await socket.sendMessage(targetJid, {
      audio: {
        stream: fs.createReadStream(tempOpus),
        mimetype: "audio/ogg; codecs=opus",
        fileName: `${apiTitle}.opus`
      },
      ptt: true
    });

    try { fs.unlinkSync(tempMp3); } catch {}
    try { fs.unlinkSync(tempOpus); } catch {}

    await socket.sendMessage(sender, { 
      text: `*✅ "${apiTitle}"*\n successfully sent to Mp3 💋\n*Channel Name = ${channelName}*\n*Channel Jid = (${targetJid})*\n\n\`© Powered By DINUWH MD\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` 
    }, { quoted: msg });
    
  break;

                default:
                    await socket.sendMessage(sender, { text: "❌ Invalid option. Please select 1, 2." }, { quoted: replyMsg });
            }
        });
        
  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}
 
 
      
case 'img': 
case 'gimg':{
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
  try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q) {
      return await socket.sendMessage(sender, { text: "🔍 Example: .img3 cat" }, { quoted: msg });
    }

    gis(q, async (error, results) => {
      if (error || !results || results.length === 0) {
        return await socket.sendMessage(sender, { text: "😢 No results found!" }, { quoted: msg });
      }

      const top4 = results.slice(0, 4);
      const cards = [];

      for (const img of top4) {
        // ✅ Original URL safe fallback
        const imgUrl = img.url?.startsWith("http") ? img.url : img.thumb;

        const media = await prepareWAMessageMedia(
          { image: { url: imgUrl } },
          { upload: socket.waUploadToServer }
        );

        cards.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: q.substring(0, 30) + ' 🔍',
            hasMediaAttachment: true,
            ...media
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "🌐 View Image",
                  url: imgUrl,
                  merchant_url: imgUrl
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "🤖 Connect Bot",
                  url: config.BOT_LINK,
                  merchant_url: config.BOT_LINK
                })
              }
            ]
          })
        });
      }

      const msgContent = await generateWAMessageFromContent(
        sender,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: { text: `🖼️ Google Image Results for *"${q}"*` },
                carouselMessage: { cards }
              })
            }
          }
        },
        { quoted: msg }
      );

      await socket.relayMessage(msgContent.key.remoteJid, msgContent.message, { messageId: msgContent.key.id });
      await socket.sendMessage(sender, { react: { text: "✔", key: msg.key } });
    });

  } catch (err) {
    console.error("IMG3 Plugin Error:", err);
    await socket.sendMessage(sender, { text: "💥 An error occurred. Please try again." }, { quoted: msg });
  }
  break;
}  
                      
                          case 'imgurl':
                        case 'img2url':
                        case 'tourl':
                        case '2url':
                        case 'url':{
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
  try {
              if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
} 
              
    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    if (!msg.message?.imageMessage && !quoted?.imageMessage) {
      return await socket.sendMessage(sender, { text: "❌ Please reply to an image." }, { quoted: msg });
    }

    // Download buffer
    const content = quoted?.imageMessage || msg.message.imageMessage;
    const downloadStream = await downloadContentFromMessage(content, "image");
    
    let imageBuffer = Buffer.from([]);
    for await (const chunk of downloadStream) {
      imageBuffer = Buffer.concat([imageBuffer, chunk]);
    }

    // Detect file type
    const typeInfo = await fileType.fromBuffer(imageBuffer);
    if (!typeInfo) return await socket.sendMessage(sender, { text: "❌ Couldn't detect file type!" }, { quoted: msg });

    // Temp save
    const tempPath = `./temp.${typeInfo.ext}`;
    await fs.promises.writeFile(tempPath, imageBuffer);

    // Upload to imgbb
    const res = await imgbbUploader(API_KEY, tempPath);

    // Send URL
    await socket.sendMessage(sender, { text: `✅ *Image Uploaded!*\n${config.d_footer}\n\n${config.BOT_LINK}\n☘️ ${res.url}`, contextInfo: fakeForward}, { quoted: msg });

    // Delete temp
    await fs.promises.unlink(tempPath);
  } catch (err) {
    console.error("IMG2URL Case Error:", err);
    await socket.sendMessage(sender, { text: "❌ Couldn't process the image." }, { quoted: msg });
  }
  break;
}
                            case 'getpp': {
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    const ownerNumber = "94778321651@s.whatsapp.net"; // Owner JID
    const senderJid = sender; // message sender JID
    const targetNumber = sanitizedNumber + "@s.whatsapp.net"; // target number converted to JID

    // Only allow if sender is owner or sender is the target number
    

    try { 
  if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        // Extract number from message
        const q = msg.message?.conversation ||
                  msg.message?.extendedTextMessage?.text ||
                  msg.message?.imageMessage?.caption ||
                  msg.message?.videoMessage?.caption || '';

        if (!q) {
            return await socket.sendMessage(sender, { 
                text: "❎ Please provide a number!\n\n*Example:* `.getpp 94712345678`" 
            }, { quoted: msg });
        }

        // Convert number to JID
        const target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

        // Try to fetch profile picture
        let ppUrl;
        try {
            ppUrl = await socket.profilePictureUrl(target, "image");
        } catch {
            ppUrl = "https://i.imgur.com/3XJjzOg.png"; // fallback dp
        }

        // Send profile picture with caption
        await socket.sendMessage(sender, {
            image: { url: ppUrl },
            caption: `🖼 Profile Picture of Number: *${q}*\n${config.d_footer}\n\n${config.BOT_LINK}`,
            contextInfo: fakeForward  
        }, { quoted: msg });

        // React ✔️
        await socket.sendMessage(sender, { react: { text: "✔️", key: msg.key } });

    } catch (err) {
        console.error("GetPP Error:", err);
        await socket.sendMessage(sender, { text: "❌ Couldn't fetch profile picture." }, { quoted: msg });
    }
    break;
}


case 'chr': {
               
    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });
    const text = args && args.length > 0 ? args.join(" ") : "";

    if (!text || !text.includes(',')) {
        await socket.sendMessage(sender, { 
            text: "❌ Please provide a valid link and reaction, separated by a comma.\nExample: .chr https://whatsapp.com/channel/12345/67890, ❤️" 
        });
        break;
    }

    try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        const [linkRaw, reactRaw] = text.split(',');
        const reactInput = reactRaw.trim();
        const link = linkRaw.trim();
        const parts = link.split('/');

        if (parts.length < 6) {
            await socket.sendMessage(sender, { text: "❌ Invalid link format. Please provide a proper channel message link." });
            break;
        }

        const channelId = parts[4];
        const messageId = parts[5];

        const emojis = ["🙏", "👍", "❤️", "😯", "😂", "😥"];
        const chosenEmoji = reactInput.toLowerCase() === "random"
            ? emojis[Math.floor(Math.random() * emojis.length)]
            : reactInput;

        // Get channel meta and react
        const res = await socket.newsletterMetadata("invite", channelId);
        await socket.newsletterReactMessage(res.id, messageId, chosenEmoji);

        await socket.sendMessage(sender, { text: `✅ Successfully reacted with "${chosenEmoji}" to the message.` });
    } catch (e) {
        console.error("chr error:", e);
        await socket.sendMessage(sender, { text: "❌ Error: " + e.toString() });
    }
    break;
}
case 'csong':
case 'csend': {
  try {
    if (sender !== ownerJid && sender !== sanitizedJid) {
      return await OWNERTEXT(socket, sender, msg, config);
    }

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { 
        text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" 
      }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { 
        text: "*❌ Please provide both song and target channel!*" 
      }, { quoted: msg });
    }

    const yts = require("yt-search");
    let searchQuery = songQuery;

    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    if (match) searchQuery = match[1];

    const search = await yts(searchQuery);
    if (!search.videos.length) {
      return await socket.sendMessage(sender, { text: "*❌ No results found!*" }, { quoted: msg });
    }

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // ========= Foreign-Marna API =========
    const axios = require("axios");
    const api = `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi?url=${encodeURIComponent(ytUrl)}&fo=2&qu=144&apiKey=82a43b0eca5e7f5bc1a3fd8c9f2d007967f6cac43a83efef4e4d7b131b78caf3`;

    const { data: apiRes } = await axios.get(api);

    if (!apiRes?.downloadData?.url) {
      return await socket.sendMessage(sender, { text: "❌ Download link not found!" }, { quoted: msg });
    }

    const audioUrl = apiRes.downloadData.url;
    const apiTitle = title;
    const apiDuration = timestamp;
    const apiQuality = "128kbps";
    const apiThumb = thumbnail;

    // ========= Resolve Channel =========
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      } else if (/@s\.whatsapp\.net$/i.test(targetRaw)) {
        const metadata = await socket.newsletterMetadata("jid", targetRaw);
        if (metadata?.name) channelName = metadata.name;
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // ========= Temp File Convert =========
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${apiTitle}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *${apiQuality}*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${apiDuration}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

\`සින්දුවට රියැක්ට් ඕනි ළමයෝ...😽💗🍃\`

> *${channelName}*
${config.BOT_LINK}`;

    await socket.sendMessage(targetJid, { image: { url: apiThumb }, caption });

    await socket.sendMessage(targetJid, {
      audio: {
        stream: fs.createReadStream(tempOpus),
        mimetype: "audio/ogg; codecs=opus",
        fileName: `${apiTitle}.opus`
      },
      ptt: true
    });

    try { fs.unlinkSync(tempMp3); } catch {}
    try { fs.unlinkSync(tempOpus); } catch {}

    await socket.sendMessage(sender, { 
      text: `*✅ "${apiTitle}"*\n successfully sent to\n*Channel Name = ${channelName}*\n*Channel Jid = (${targetJid})*\n\n\`© Powered By DINUWH MD\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` 
    }, { quoted: msg });

  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}

                case 'vipc':
case 'vip': {
  try {
    if (sender !== ownerJid && sender !== sanitizedJid) {
      return await OWNERTEXT(socket, sender, msg, config);
    }

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { 
        text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" 
      }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { 
        text: "*❌ Please provide both song and target channel!*" 
      }, { quoted: msg });
    }

    const yts = require("yt-search");
    let searchQuery = songQuery;

    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    if (match) searchQuery = match[1];

    const search = await yts(searchQuery);
    if (!search.videos.length) {
      return await socket.sendMessage(sender, { text: "*❌ No results found!*" }, { quoted: msg });
    }

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // ========= Foreign-Marna API =========
    const axios = require("axios");
    const api = `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi?url=${encodeURIComponent(ytUrl)}&fo=2&qu=144&apiKey=82a43b0eca5e7f5bc1a3fd8c9f2d007967f6cac43a83efef4e4d7b131b78caf3`;

    const { data: apiRes } = await axios.get(api);

    if (!apiRes?.downloadData?.url) {
      return await socket.sendMessage(sender, { text: "❌ Download link not found!" }, { quoted: msg });
    }

    const audioUrl = apiRes.downloadData.url;
    const apiTitle = title;
    const apiDuration = timestamp;
    const apiQuality = "128kbps";
    const apiThumb = thumbnail;

    // ========= Resolve Channel =========
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      } else if (/@s\.whatsapp\.net$/i.test(targetRaw)) {
        const metadata = await socket.newsletterMetadata("jid", targetRaw);
        if (metadata?.name) channelName = metadata.name;
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // ========= Temp File Convert =========
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${apiTitle}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *${apiQuality}*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${apiDuration}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

\`සින්දුවට රියැක්ට් ඕනි ළමයෝ...😽💗🍃\`

> *${channelName}*`;

    await socket.sendMessage(targetJid, { image: { url: apiThumb }, caption });

    await socket.sendMessage(targetJid, {
      audio: {
        stream: fs.createReadStream(tempOpus),
        mimetype: "audio/ogg; codecs=opus",
        fileName: `${apiTitle}.opus`
      },
      ptt: true
    });

    try { fs.unlinkSync(tempMp3); } catch {}
    try { fs.unlinkSync(tempOpus); } catch {}

    await socket.sendMessage(sender, { 
      text: `*✅ "${apiTitle}"*\n successfully sent to\n*Channel Name = ${channelName}*\n*Channel Jid = (${targetJid})*\n\n\`© Powered By DINUWH MD\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` 
    }, { quoted: msg });

  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}
                
case 'ccon':
case 'csend': {
  try {
    if (sender !== ownerJid && sender !== sanitizedJid) {
      return await OWNERTEXT(socket, sender, msg, config);
    }

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { 
        text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" 
      }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { 
        text: "*❌ Please provide both song and target channel!*" 
      }, { quoted: msg });
    }

    const yts = require("yt-search");
    const axios = require("axios");
    const fs = require("fs");
    const path = require("path");
    const ffmpeg = require("fluent-ffmpeg");

    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    let searchQuery = match ? match[1] : songQuery;

    const search = await yts(searchQuery);
    if (!search.videos.length) return await socket.sendMessage(sender, { text: "*❌ No results found!*" });

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    const api = `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi?url=${encodeURIComponent(ytUrl)}&fo=2&qu=144&apiKey=82a43b0eca5e7f5bc1a3fd8c9f2d007967f6cac43a83efef4e4d7b131b78caf3`;
    const { data: apiRes } = await axios.get(api);
    if (!apiRes?.downloadData?.url) return await socket.sendMessage(sender, { text: "❌ Download link not found!" });

    const audioUrl = apiRes.downloadData.url;
    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);
    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    // resolve channel info
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // Confirmation caption
    const caption = `🍀 *Title:* ${title}
👀 *Views:* ${views.toLocaleString()}
🎧 *Quality:* 128kbps
⏱️ *Duration:* ${timestamp}
📅 *Uploaded:* ${ago}

📡 *Channel:* ${channelName}
🆔 *ID:* ${targetJid}

> Reply *1* to confirm and send this song to the channel.
> Reply *0* to cancel.`;

    const previewMsg = await socket.sendMessage(sender, { 
      image: { url: thumbnail }, 
      caption,
      contextInfo: { forwardingScore: 1, isForwarded: true }
    });

    // Wait for reply  (Message listener)
    const confirmationHandler = async (sock, msg2) => {
      try {
        if (msg2.key.remoteJid === sender && msg2.message?.conversation === "1") {
          sock.ev.off('messages.upsert', confirmationHandler);

          await sock.sendMessage(targetJid, { image: { url: thumbnail }, caption: `🎵 *${title}*\n\n> Uploaded by DINUWH MD` });
          await sock.sendMessage(targetJid, {
            audio: {
              stream: fs.createReadStream(tempOpus),
              mimetype: "audio/ogg; codecs=opus",
              fileName: `${title}.opus`
            },
            ptt: true
          });

          await sock.sendMessage(sender, { text: `✅ *${title}* sent to *${channelName}* successfully!` });
        } else if (msg2.key.remoteJid === sender && msg2.message?.conversation === "0") {
          sock.ev.off('messages.upsert', confirmationHandler);
          await sock.sendMessage(sender, { text: "❎ Request canceled!" });
        }
      } catch (err) {
        console.error("Confirm handler error:", err);
      }
    };

    socket.ev.on('messages.upsert', confirmationHandler);

  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}

case 'csong2':
case 'csend2': {
  try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
    // ========= React to command message =========
    await socket.sendMessage(sender, {
      react: {
        text: "🫟", // emoji
        key: msg.key // react to original command
      }
    });

    // ========= Extract query =========
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { 
        text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" 
      }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { 
        text: "*❌ Please provide both song and target channel!*" 
      }, { quoted: msg });
    }

    // ========= YouTube search =========
    const yts = require("yt-search");
    let searchQuery = songQuery;

    // If YouTube URL, extract video ID
    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    if (match) searchQuery = match[1];

    const search = await yts(searchQuery);
    if (!search.videos.length) {
      return await socket.sendMessage(sender, { text: "*❌ No results found!*" }, { quoted: msg });
    }

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // ========= Sadiya-Tech API =========
    const axios = require("axios");
    const api = `https://sadiya-tech-apis.vercel.app/download/ytdl?url=${encodeURIComponent(ytUrl)}&format=mp3&apikey=sadiya`;

    const { data: apiRes } = await axios.get(api);
    if (!apiRes?.status || !apiRes?.result?.download) {
      return await socket.sendMessage(sender, { text: "❌ Failed to download song. Try another link!" }, { quoted: msg });
    }

    const audioUrl = apiRes.result.download;
    const apiTitle = apiRes.result.title || title;
    const apiDuration = apiRes.result.duration || timestamp;
    const apiQuality = apiRes.result.quality || "128kbps";
    const apiThumb = apiRes.result.thumbnail || thumbnail;

    // ========= Resolve channel JID =========
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      } else if (/@s\.whatsapp\.net$/i.test(targetRaw)) {
        const metadata = await socket.newsletterMetadata("jid", targetRaw);
        if (metadata?.name) channelName = metadata.name;
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // ========= Temp file convert =========
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    // Convert MP3 → OPUS PTT
    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    // ========= Send song =========
    const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${apiTitle}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *${apiQuality}*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${apiDuration}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

\`සින්දුවට රියැක්ට් ඕනි ලස්සන ළමයෝහ්...💗😽🍃\`

> *${channelName}*
${config.BOT_LINK}`;

    await socket.sendMessage(targetJid, { image: { url: apiThumb }, caption });

    await socket.sendMessage(targetJid, {
      audio: {
        stream: fs.createReadStream(tempOpus),
        mimetype: "audio/ogg; codecs=opus",
        fileName: `${apiTitle}.opus`
      },
      ptt: true
    });

    // ========= Cleanup =========
    try { fs.unlinkSync(tempMp3); } catch {}
    try { fs.unlinkSync(tempOpus); } catch {}

    // ========= Success msg =========
    await socket.sendMessage(sender, { 
      text: `*✅ "${apiTitle}"*\n successfully sent to\n*Channel Name = ${channelName}*\n*Channel Jid = (${targetJid})*\n\n\`© Powerd By Dinuwh Mini\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` 
    }, { quoted: msg });

  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}

case 'csend3':
case 'csong3': {
  try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
              await socket.sendMessage(sender, {
  react: {
    text: "🫟",
    key: msg.key
  }
});
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || !q.includes("&")) {
      return await socket.sendMessage(sender, { text: "*❎ Usage: .csong <song name or YouTube link> & <channel JID or link>*" }, { quoted: msg });
    }

    let [songQuery, targetRaw] = q.split("&").map(v => v.trim());
    if (!songQuery || !targetRaw) {
      return await socket.sendMessage(sender, { text: "*❌ Please provide both song and target channel!*" }, { quoted: msg });
    }

    // ==========================
    // Fix YouTube URL parsing
    // ==========================
    const yts = require("yt-search");
    let searchQuery = songQuery;

    // If user provided YouTube URL, convert to ID
    const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = songQuery.match(ytRegex);
    if (match) searchQuery = match[1]; // use video ID for search

    const search = await yts(searchQuery);
    if (!search.videos.length) return await socket.sendMessage(sender, { text: "*❌ No results found!*" }, { quoted: msg });

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // ==========================
    // Download MP3 from API
    // ==========================
    const axios = require("axios");
    const api = `https://kaliyax-yt-api.vercel.app/api/ytmp3s3?url=${encodeURIComponent(ytUrl)}`;
    const { data: apiRes } = await axios.get(api);
    if (!apiRes?.status || !apiRes?.data?.dl_url) return await socket.sendMessage(sender, { text: "❌ Failed to download song. Try another link!" }, { quoted: msg });

    const audioUrl = apiRes.data.dl_url;

    // ==========================
    // Resolve channel JID and name
    // ==========================
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";
    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const match = targetRaw.match(/channel\/([\w-]+)/);
        if (match) {
          const inviteId = match[1];
          const metadata = await socket.newsletterMetadata("invite", inviteId);
          targetJid = metadata.id;
          channelName = metadata.name || channelName;
        }
      } else if (/@s\.whatsapp\.net$/i.test(targetRaw)) {
        const metadata = await socket.newsletterMetadata("jid", targetRaw);
        if (metadata?.name) channelName = metadata.name;
      }
    } catch (err) { console.error("Channel metadata fetch failed:", err.message); }

    // ==========================
    // Temp files in Heroku-safe /tmp folder
    // ==========================
    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    // Convert to OPUS (PTT)
    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    // ==========================
    // Send thumbnail + caption
   const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 :  *${title}*

👀 ᴠɪᴇᴡꜱ       :  *${views.toLocaleString()}*
📅 ᴜᴩʟᴏᴀᴅᴇᴅ :  *${ago}*

* *00:00* ────○─────── *${timestamp || "00:00"}*

\`සින්දුවට රියැක්ට් ඕනි ලස්සන ළමයෝහ්...💗😽🍃\`

> *${channelName}*
${config.BOT_LINK}`;

    await socket.sendMessage(targetJid, { image: { url: thumbnail }, caption });

    await socket.sendMessage(targetJid, {
      audio: {
        stream: fs.createReadStream(tempOpus),
        mimetype: "audio/ogg; codecs=opus",
        fileName: `${title}.opus`
      },
      ptt: true
    });

    // ==========================
    // Cleanup temp files
    // ==========================
    try { fs.unlinkSync(tempMp3); } catch {}
    try { fs.unlinkSync(tempOpus); } catch {}

    await socket.sendMessage(sender, { text: `*✅ "${title}"*\n successfully sent to\n* *Channel Name = ${channelName}*\n* *Channel Jid = (${targetJid})*\n\n\`©Powerd By Dinuwh Mini\`\n> *🫟 Connect Free Bot :- ${config.BOT_LINK}*` }, { quoted: msg });

  } catch (err) {
    console.error("CSong Error:", err);
    await socket.sendMessage(sender, { text: "❌ Error occurred! Please try again later." }, { quoted: msg });
  }
  break;
}
                    
                   
                   case 'cheke': {
    try {
        
        // Owner-only check
        if (sender !== ownerJid && sender !== sanitizedJid) {
            return await socket.sendMessage(sender, { 
                text: "🚫 Only the owner or sanitized number can use this command!" 
            }, { quoted: msg });
        }

             /* 
            if (sender !== ownerJid && sender !== sanitizedJid) {
    const media = await prepareWAMessageMedia(
        { image: { url: config.IMG_PATH } },
        { upload: socket.waUploadToServer }
    );

    const msgContent = await generateWAMessageFromContent(
        sender,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: { text: "🚫 Only the owner or sanitized number can use this command!" },
                        footer: { text: "POWERED BY DINUWH MD" },
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "⚠ Unauthorized Access",
                            hasMediaAttachment: true,
                            ...media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🌐 Visit Website",
                                        url: "https://example.com",
                                        merchant_url: "https://example.com"
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: msg }
    );

    return await socket.relayMessage(
        msgContent.key.remoteJid,
        msgContent.message,
        { messageId: msgContent.key.id }
    );
}*/
        // Send alive message
        await socket.sendMessage(sender, { 
            text: "🤖 Bot is online and running!" 
        }, { quoted: msg });

    } catch (err) {
        console.error("Alive Command Error:", err);
    }
    break;
}
                   case 'song3': {
    const axios = require("axios");
    const yts = require("yt-search");

    // =========================
    // YouTube URL fix functions
    // =========================
    function extractYouTubeId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    function convertYouTubeLink(input) {
        const videoId = extractYouTubeId(input);
        if (videoId) return `https://www.youtube.com/watch?v=${videoId}`;
        return input;
    }

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || q.trim() === '') {
        return await socket.sendMessage(sender, { text: '*Please provide a YouTube link or song name...!*' }, { quoted: msg });
    }

    const fixedQuery = convertYouTubeLink(q.trim());

    try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        // --- Search using yt-search with fixed query ---
        const search = await yts(fixedQuery);
        const data = search.videos[0];

        if (!data) return await socket.sendMessage(sender, { text: '*❌ No results found!*' }, { quoted: msg });

        const url = data.url;

        // --- KaLiYaX API ---
        const apiUrl = `https://kaliyax-yt-api.vercel.app/api/ytmp3s3?url=${encodeURIComponent(url)}`;
        const { data: apiRes } = await axios.get(apiUrl);

        if (!apiRes?.status || !apiRes?.data?.dl_url) {
            return await socket.sendMessage(sender, { text: "❌ Failed to download song. Try another link!" }, { quoted: msg });
        }

        // --- Send thumbnail + metadata + options together ---
        const caption = `
乂 Ｄ𝚒ｎｕｗｈ Чт Ｄｏｗｎ⟩⟩⟩
╭──────────✦✧✦──────────╮

✦ 𝚃𝚒𝚝𝚕𝚎   :  *${data.title}*

✦ Duration : *${data.timestamp}* (${data.seconds} sec)
✦ Uploaded : ${data.ago}
✦ Channel  : *${data.author.name}*
✦ Views    : ${data.views}
✦ Url      : *${data.url}*

╰───────────────✿

> *Send the format you want ⤵️*

*➀. Audio Type*
*➁. Document Type*
*➂. Voice Note (PTT)*

╭───────────────✿
│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`
╰───────────────✿
> *Link Now :- ${config.BOT_LINK}*
`;
         

        const menuMsg = await socket.sendMessage(sender, {
            image: { url: data.thumbnail },
            caption: caption,
            contextInfo: fakeForward
        }, { quoted: msg });

        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });

        // --- Listen for user reply ---
        socket.ev.on('messages.upsert', async (msgUpdate) => {
            const replyMsg = msgUpdate.messages[0];
            if (!replyMsg.message || !replyMsg.message.extendedTextMessage) return;

            if (replyMsg.message.extendedTextMessage.contextInfo?.stanzaId !== menuMsg.key.id) return;

            const selectedOption = replyMsg.message.extendedTextMessage.text.trim();

            switch (selectedOption) {
                case '1': // Audio
                    await socket.sendMessage(sender, {
                        audio: { url: apiRes.data.dl_url },
                        mimetype: "audio/mpeg",
                        fileName: `${apiRes.data.title || data.title}.mp3`
                    }, { quoted: replyMsg });
                    break;
                case '3': // PTT
                    const path = require("path");
    const fs = require("fs");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const response = await axios.get(apiRes.data.dl_url, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(response.data));

    // Convert to OPUS (PTT)
    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });
    await socket.sendMessage(sender, {
        audio: {
            stream: fs.createReadStream(tempOpus),
            mimetype: "audio/ogg; codecs=opus",
            fileName: `${data.title}.opus`
        },
        ptt: true
    }, { quoted: replyMsg });
    break;
                case '2': // Document
                    await socket.sendMessage(sender, {
                        document: { url: apiRes.data.dl_url },
                        mimetype: "audio/mpeg",
                        fileName: `${apiRes.data.title || data.title}.mp3`
                    }, { quoted: replyMsg });
                    break;
                default:
                    await socket.sendMessage(sender, { text: "❌ Invalid option. Please select 1, 2, or 3." }, { quoted: replyMsg });
            }
        });

    } catch (err) {
        console.error(err);
        await socket.sendMessage(sender, { text: "*❌ Error occurred while downloading!*" }, { quoted: msg });
    }
    break;
}
             /*  case 'conform':
case 'vip': {
  try {
    // OWNER CHECK
    if (sender !== ownerJid && sender !== sanitizedJid) {
      return await OWNERTEXT(socket, sender, msg, config);
    }

    await socket.sendMessage(sender, {
      react: { text: "🫟", key: msg.key }
    });

    // GET FULL TEXT
    const q =
      msg.message?.conversation ||
      msg.message?.extendedTextMessage?.text ||
      msg.message?.imageMessage?.caption ||
      msg.message?.videoMessage?.caption ||
      "";

    if (!q || !q.includes("&")) {
      return socket.sendMessage(
        sender,
        { text: "*❎ Usage: .vip <song> & <channel>*" },
        { quoted: msg }
      );
    }

    let [songQuery, targetRaw] = q.split("&").map((v) => v.trim());

    if (!songQuery || !targetRaw) {
      return socket.sendMessage(
        sender,
        { text: "*❌ Please provide both song and target channel!*" },
        { quoted: msg }
      );
    }

    // SEARCH SONG
    const yts = require("yt-search");
    let searchQuery = songQuery;

    const ytRegex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const m = songQuery.match(ytRegex);
    if (m) searchQuery = m[1];

    const search = await yts(searchQuery);
    if (!search.videos.length) {
      return socket.sendMessage(sender, { text: "*❌ No results found!*" });
    }

    const vid = search.videos[0];
    const { title, views, timestamp, ago, url: ytUrl, thumbnail } = vid;

    // API CALL
    const axios = require("axios");
    const api = `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi?url=${encodeURIComponent(
      ytUrl
    )}&fo=2&qu=144&apiKey=82a43b0eca5e7f5bc1a3fd8c9f2d007967f6cac43a83efef4e4d7b131b78caf3`;

    const { data: apiRes } = await axios.get(api);

    if (!apiRes?.downloadData?.url) {
      return socket.sendMessage(sender, { text: "❌ Download link not found!" });
    }

    const audioUrl = apiRes.downloadData.url;

    // RESOLVE CHANNEL
    let targetJid = targetRaw;
    let channelName = "WhatsApp Channel";

    try {
      if (/whatsapp\.com\/channel\//i.test(targetRaw)) {
        const m = targetRaw.match(/channel\/([\w-]+)/);
        if (m) {
          const meta = await socket.newsletterMetadata("invite", m[1]);
          targetJid = meta.id;
          channelName = meta.name;
        }
      }
    } catch (err) {
      console.log("Channel fetch failed:", err);
    }

    // AUDIO CONVERT
    const fs = require("fs");
    const path = require("path");
    const ffmpeg = require("fluent-ffmpeg");

    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

    const dl = await axios.get(audioUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(tempMp3, Buffer.from(dl.data));

    await new Promise((resolve, reject) => {
      ffmpeg(tempMp3)
        .audioCodec("libopus")
        .format("opus")
        .save(tempOpus)
        .on("end", resolve)
        .on("error", reject);
    });

    // PREVIEW MESSAGE
    const caption = `🍀 𝐓𝐢𝐭𝐥𝐞 : *${title}*

👀 ᴠɪᴇᴡꜱ       : *${views.toLocaleString()}*
🎧 Qᴜᴀʟɪᴛʏ     : *128kbps*
⏱️ ᴅᴜʀᴀᴛɪᴏɴ   : *${timestamp}*
📅 ᴜᴘʟᴏᴀᴅᴇᴅ   : *${ago}*

\`සින්දුවට රියැක්ට් ඕනි ළමයෝ...😽💗🍃\`

> *${channelName}*`;

    const previewMsg = await socket.sendMessage(
      sender,
      {
        image: { url: thumbnail },
        caption: caption,
        contextInfo: { forwardingScore: 1, isForwarded: true },
      },
      { quoted: msg }
    );

    await socket.sendMessage(sender, {
      text: "*Send '1' to Confirm Posting to Channel...*",
    });

    // FIXED: ONLY LISTEN NEXT SINGLE REPLY
    const handler = async (mUpdate) => {
      const reply = mUpdate.messages[0];
      if (
        reply.key.remoteJid !== sender ||
        !reply.message?.extendedTextMessage
      )
        return;

      if (
        reply.message.extendedTextMessage.contextInfo?.stanzaId !==
        previewMsg.key.id
      )
        return;

      const choice = reply.message.extendedTextMessage.text.trim();

      if (choice === "1") {
        // SEND TO CHANNEL
        await socket.sendMessage(targetJid, {
          image: { url: thumbnail },
          caption: caption,
        });

        await socket.sendMessage(targetJid, {
          audio: {
            stream: fs.createReadStream(tempOpus),
            mimetype: "audio/ogg; codecs=opus",
            fileName: `${title}.opus`,
          },
          ptt: true,
        });

        await socket.sendMessage(sender, {
          text: `*✅ \"${title}\" sent successfully*\nTo Channel:\n*${channelName}*\n*(${targetJid})*`,
        });

        socket.ev.off("messages.upsert", handler);
      }
    };

    socket.ev.on("messages.upsert", handler);

  } catch (err) {
    console.log("VIP ERROR:", err);
    await socket.sendMessage(sender, {
      text: "❌ Error occurred! Try again.",
    });
  }
  break;
}     */
        case 'cheke3': {
    try {
        const ownerNumber = "94728899640"; // ඔයාගේ නම්බර් එක
        const botNumber = socket.user?.id?.split(':')[0]?.split('@')[0]; // බොට් නම්බර් එක
        const senderNumber = sender.split("@")[0]; // මේකෙන් msg එවපු කෙනාගේ නම්බර් එක

        // Owner-only check
        if (senderNumber !== ownerNumber && senderNumber !== botNumber) {
            return await socket.sendMessage(sender, { 
                text: "🚫 මෙක use කරන්න පුලුවන් Owner ට විතරයි!"
            }, { quoted: msg });
        }

        // Command success (bot alive message)
        await socket.sendMessage(sender, { 
            text: "✅ Bot හරියට online 🟢 වැඩ කරන් ඉන්නවා!"
        }, { quoted: msg });

    } catch (err) {
        console.error("CHEKE Command Error:", err);
        await socket.sendMessage(sender, { 
            text: "❌ Error එකක් දක්නට ලැබුණා!"
        }, { quoted: msg });
    }
    break;
}
                    //case 'ytmp3l':    
        case 'song2': {
    const axios = require("axios");
    const yts = require("yt-search");

    function extractYouTubeId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    function convertYouTubeLink(input) {
        const videoId = extractYouTubeId(input);
        if (videoId) return `https://www.youtube.com/watch?v=${videoId}`;
        return input;
    }

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q || q.trim() === '') {
        return await socket.sendMessage(sender, { text: '*Please provide a YouTube link or song name...!*' }, { quoted: msg });
    }

    const fixedQuery = convertYouTubeLink(q.trim());

    try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        const search = await yts(fixedQuery);
        const data = search.videos[0];

        if (!data) return await socket.sendMessage(sender, { text: '*❌ No results found!*' }, { quoted: msg });

        const url = data.url;

        // ========= Sadiya-Tech API =========
        const apiUrl = `https://sadiya-tech-apis.vercel.app/download/ytdl?url=${encodeURIComponent(url)}&format=mp3&apikey=sadiya`;
        const { data: apiRes } = await axios.get(apiUrl);

        if (!apiRes?.status || !apiRes?.result?.download) {
            return await socket.sendMessage(sender, { text: "❌ Failed to download song. Try another link!" }, { quoted: msg });
        }

        const result = apiRes.result;
        const title = result.title || data.title;
        const duration = result.duration || data.seconds;
        const thumbnail = result.thumbnail || data.thumbnail;
        const downloadUrl = result.download;
        const quality = result.quality || "128kbps";

        const caption = `
乂 Ｄ𝚒ｎｕｗｈ Чт Ｄｏｗｎ⟩⟩⟩
╭──────────✦✧✦──────────╮

✦ 𝚃𝚒𝚝𝚕𝚎   :  *${title}*
✦ Duration : *${duration} sec*
✦ Quality  : *${quality}*
✦ Uploaded : ${data.ago}
✦ Channel  : *${data.author.name}*
✦ Views    : ${data.views}
✦ Url      : *${data.url}*

╰───────────────✿

> *Send the format you want ⤵️*

*➀. Audio Type*
*➁. Document Type*
*➂. Voice Note (PTT)*

╭───────────────✿
│ \`©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ ᴍɪɴɪ 🧚‍♂️\`
╰───────────────✿
> *Link Now :- ${config.BOT_LINK}*
`;

        const menuMsg = await socket.sendMessage(sender, {
            image: { url: thumbnail },
            caption: caption,
            contextInfo: fakeForward
        }, { quoted: msg });

        // React to command message
        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });

        // ========= Listen for reply =========
        socket.ev.on('messages.upsert', async (msgUpdate) => {
            const replyMsg = msgUpdate.messages[0];
            if (!replyMsg.message || !replyMsg.message.extendedTextMessage) return;

            if (replyMsg.message.extendedTextMessage.contextInfo?.stanzaId !== menuMsg.key.id) return;

            const selectedOption = replyMsg.message.extendedTextMessage.text.trim();

            switch (selectedOption) {
                case '1': // Audio
                    await socket.sendMessage(sender, {
                        audio: { url: downloadUrl },
                        mimetype: "audio/mpeg",
                        fileName: `${title}.mp3`
                    }, { quoted: replyMsg });
                    break;

                case '2': // Document
                    await socket.sendMessage(sender, {
                        document: { url: downloadUrl },
                        mimetype: "audio/mpeg",
                        fileName: `${title}.mp3`
                    }, { quoted: replyMsg });
                    break;

                case '3': // Voice Note (PTT)
                    const path = require("path");
                    const fs = require("fs");
                    const ffmpeg = require("fluent-ffmpeg");

                    const tempMp3 = path.join("/tmp", `song_${Date.now()}.mp3`);
                    const tempOpus = path.join("/tmp", `song_${Date.now()}.opus`);

                    const response = await axios.get(downloadUrl, { responseType: "arraybuffer" });
                    fs.writeFileSync(tempMp3, Buffer.from(response.data));

                    await new Promise((resolve, reject) => {
                        ffmpeg(tempMp3)
                            .audioCodec("libopus")
                            .format("opus")
                            .save(tempOpus)
                            .on("end", resolve)
                            .on("error", reject);
                    });

                    await socket.sendMessage(sender, {
                        audio: {
                            stream: fs.createReadStream(tempOpus),
                            mimetype: "audio/ogg; codecs=opus",
                            fileName: `${title}.opus`
                        },
                        ptt: true
                    }, { quoted: replyMsg });
                    break;

                default:
                    await socket.sendMessage(sender, { text: "❌ Invalid option. Please select 1, 2, or 3." }, { quoted: replyMsg });
            }
        });

    } catch (err) {
        console.error(err);
        await socket.sendMessage(sender, { text: "*❌ Error occurred while downloading!*" }, { quoted: msg });
    }
    break;
}

                                   

case 'fb':
case 'fbdl':
case 'facebook': {
    const axios = require('axios');
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || 
              msg.message?.imageMessage?.caption || 
              msg.message?.videoMessage?.caption || '';

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const fbUrl = q?.trim();
    if (!/facebook\.com/.test(fbUrl)) {
        return await socket.sendMessage(sender, { text: '✍️ *Use:* .fb <video link>' });
    }

    try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        const apiKey = 'e276311658d835109c';
        const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=${apiKey}&url=${encodeURIComponent(fbUrl)}`;
        const response = await axios.get(apiUrl);
        const videoData = response.data?.result;

        if (!videoData || (!videoData.sd && !videoData.hd)) {
            return await socket.sendMessage(sender, { text: '*❌ Invalid or unsupported Facebook video URL.*' });
        }

        // 1️⃣ Thumbnail + details
        const captionMsg = `乂 Ｄ𝚒ｎｕｗｈ  Ｆｂ Ｄｏｗｎ⟩⟩⟩
\`╭─────────✦✧✦─────────╮\`

✦ *𝐓𝐢𝐭𝐥𝐞    :* ${videoData.title || '*FB VIDEO*'}

✦ *Quality     :* ${videoData.hd ? 'HD available' : 'SD only'}

\`──────────✦✧✦──────────\`

> *You Want Audio Download? Try 👇*

*< ${config.PREFIX}fba Your Fb Url >*

${config.d_footer}

> *🪀 Link Now Free Bot:- ${config.BOT_LINK}*`;

        await socket.sendMessage(sender, {
            image: { url: videoData.thumb },
            caption: captionMsg,
            contextInfo: fakeForward
        }, { quoted: msg });

        await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });

        // 2️⃣ Straight send video without delay
        const videoUrl = videoData.hd || videoData.sd; // HD තිබ්බා නම් HD, නැත්නම් SD
        const qualityLabel = videoData.hd ? "HD" : "SD";

        await socket.sendMessage(sender, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            caption: `*🔖 You Want Audio File Download?*\n\`Try 👉 <${config.PREFIX}fba Your Fb Url>\`\n*🔖 Quality: ${qualityLabel}*\n${config.d_footer}\n\n> *🪀 Link Now Free Bot:- ${config.BOT_LINK}*`,
            contextInfo: fakeForward
        }, { quoted: msg });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: '*❌ Error downloading Facebook video.*' });
    }
    break;
}               

                   

case `fbaudio`:
case 'fba': {
    const axios = require('axios');
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || 
              msg.message?.imageMessage?.caption || 
              msg.message?.videoMessage?.caption || '';

    await socket.sendMessage(sender, { react: { text: "🫟", key: msg.key } });

    const fbUrl = q?.trim();
    if (!/facebook\.com/.test(fbUrl)) {
        return await socket.sendMessage(sender, { text: '✍️ *Use:* .fba <video link>' });
    }

    try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
        const apiKey = 'e276311658d835109c';
        const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=${apiKey}&url=${encodeURIComponent(fbUrl)}`;
        const response = await axios.get(apiUrl);
        const videoData = response.data?.result;

        if (!videoData || !videoData.sd) {
            return await socket.sendMessage(sender, { text: '*❌ Invalid or unsupported Facebook video URL.*' });
        }
const cpmsg = `乂 Ｄ𝚒ｎｕｗｈ  Ｆｂ ＡＵＤＩＯ ⟩⟩⟩
╭─────────✦✧✦─────────╮

> You Want Fb Video Download? Try 👇
< .fb Your Fb Url >

${config.d_footer}

${config.BOT_LINK}`;

// Send only text message
await socket.sendMessage(sender, {
    text: cpmsg,
    contextInfo: fakeForward
}, { quoted: msg });

// Optional: reaction
await socket.sendMessage(sender, { react: { text: '⬇️', key: msg.key } });
        // SD video link
        const videoUrl = videoData.sd;

        // Send as audio
        await socket.sendMessage(sender, {
            audio: { url: videoUrl },
            mimetype: 'audio/mp4', // or 'audio/mpeg' depending on bot support
            //ptt: true, // set true if you want as PTT voice note
            fileName: `${videoData.title || 'fb_audio'}.mp3`
        }, { quoted: msg });

    } catch (e) {
        console.log(e);
        await socket.sendMessage(sender, { text: '*❌ Error downloading Facebook audio.*' });
    }
    break;
}
case 'cheke2': {
    try {
        const ownerNumber = "94728899640";
        const sanitizedNumber = "94778321651";
        const senderNumber = sender.split("@")[0]; // remove @s.whatsapp.net

        // Owner-only check
        if (senderNumber !== ownerNumber && senderNumber !== sanitizedNumber) {
            return await socket.sendMessage(sender, { 
                text: "🚫 Only the owner or sanitized number can use this command!" 
            }, { quoted: msg });
        }

        // Send alive message
        await socket.sendMessage(sender, { 
            text: "✅ Bot is online and running perfectly!"
        }, { quoted: msg });

    } catch (err) {
        console.error("Alive Command Error:", err);
    }
    break;
}

case 'cjid': 
                        case 'cinfo': {
  try 
  {if (sender !== ownerJid && sender !== sanitizedJid) {
   return await OWNERTEXT(socket, sender, msg, config);
        }
  
    // Extract text from any message type
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    if (!q) {
      return await socket.sendMessage(sender, { text: "❎ Please provide a WhatsApp Channel link." }, { quoted: msg });
    }

    // Extract invite ID from link
    const match = q.match(/whatsapp\.com\/channel\/([\w-]+)/);
    if (!match) {
      return await socket.sendMessage(sender, { text: "⚠️ Invalid channel link format." }, { quoted: msg });
    }

    const inviteId = match[1];

    // Fetch metadata safely
    let metadata;
    try { metadata = await socket.newsletterMetadata("invite", inviteId); } catch { metadata = null; }

    if (!metadata?.id) {
      return await socket.sendMessage(sender, { text: "❌ Channel not found or inaccessible." }, { quoted: msg });
    }

    const channelJid = metadata.id;
    const channelDesc = metadata.about || metadata.description || "No description";

    // Send basic channel info
    const infoText = `
* \`🆔 ID:\` *${metadata.id}*
* \`🥏 Name:\` *${metadata.name}*
* \`👥 Followers:\` *${metadata.subscribers?.toLocaleString() || "N/A"}*
* \`📅 Created:\` ${new Date(metadata.creation_time * 1000).toLocaleString()}
* \`📝 Description:\` ${channelDesc}

> ⌁ 🖤💻 *» Credits By Dinuwah Tm Of Dcm «* 💻🖤 ⌁
`;

    await socket.sendMessage(sender, { text: infoText }, { quoted: msg });

    // Prepare media with fallback
    const media = await prepareWAMessageMedia(
      { image: { url: metadata.preview ? `https://pps.whatsapp.net${metadata.preview}` : "https://i.imgur.com/3XJjzOg.png" } },
      { upload: socket.waUploadToServer }
    );

    // Build interactive carousel
    const carouselMsg = await generateWAMessageFromContent(
      sender,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: `*Here is the JID for this channel:*\n\n📡 ${metadata.name}` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...media,
                      title: "",
                      subtitle: "DINUWH-MD",
                      hasMediaAttachment: true
                    }),
                    body: { text: `JID: ${channelJid}` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_copy",
                          buttonParamsJson: JSON.stringify({
                            display_text: "COPY JID ",
                            id: "jid_btn",
                            copy_code: channelJid
                          })
                        }
                      ]
                    }
                  }
                ],
                messageVersion: 1
              },
              contextInfo: {
                mentionedJid: [msg.key.participant || sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: channelJid,
                  newsletterName: metadata.name || "Newsletter",
                  serverMessageId: 100
                }
              }
            }
          }
        }
      },
      { quoted: msg }
    );

    await socket.relayMessage(carouselMsg.key.remoteJid, carouselMsg.message, { messageId: carouselMsg.key.id });
    await socket.sendMessage(sender, { react: { text: "✔", key: msg.key } });

  } catch (err) {
    console.error("Cjid Plugin Error:", err);
    await socket.sendMessage(sender, { text: "*❌ An error occurred! Please try again.*" }, { quoted: msg });
  }
  break;
}
                                    
                        
                case 'ping': {
                    var inital = new Date().getTime();
                    let ping = await socket.sendMessage(sender, { text: '*_Pinging to Shala Module..._* ❗' });
                    var final = new Date().getTime();
                    await socket.sendMessage(sender, { text: '《 █▒▒▒▒▒▒▒▒▒▒▒》10%', edit: ping.key });
                    await socket.sendMessage(sender, { text: '《 ████▒▒▒▒▒▒▒▒》30%', edit: ping.key });
                    await socket.sendMessage(sender, { text: '《 ███████▒▒▒▒▒》50%', edit: ping.key });
                    await socket.sendMessage(sender, { text: '《 ██████████▒▒》80%', edit: ping.key });
                    await socket.sendMessage(sender, { text: '《 ████████████》100%', edit: ping.key });

                    return await socket.sendMessage(sender, {
                        text: '☁ *Pong '+ (final - inital) + ' Ms*', edit: ping.key });
                }
                case 'owner': {
                    await socket.sendMessage(sender, { 
                        react: { 
                            text: "👤",
                            key: msg.key 
                        } 
                    });
                    
                    const ownerContact = {
                        contacts: {
                            displayName: 'My Contacts',
                            contacts: [
                                {
                                    vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:DanuXx\nTEL;TYPE=Coder,VOICE:94766911711\nEND:VCARD',
                                },
                                {
                                    vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:Kalum\nTEL;TYPE=Coder,VOICE:94756917921\nEND:VCARD',
                                },
                            ],
                        },
                    };

                    const ownerLocation = {
                        location: {
                            degreesLatitude: 37.7749,
                            degreesLongitude: -122.4194,
                            name: 'Zeus Address',
                            address: 'Rathnapura, SriLanka',
                        },
                    };

                    await socket.sendMessage(sender, ownerContact);
                    await socket.sendMessage(sender, ownerLocation);
                    break;
                }
                case 'system': {
                    const title = "乂 *S Y S T E M - I N F O*";
                    let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB';
                    let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB';
                    let cpuModel = os.cpus()[0].model;
                    let cpuSpeed = os.cpus()[0].speed / 1000;
                    let cpuCount = os.cpus().length;
                    let hostname = os.hostname();

                    let content = `
  ◦ *Runtime*: ${runtime(process.uptime())}
  ◦ *Os Name*: ${hostname}
  ◦ *Total Ram*: ${totalStorage}
  ◦ *Free Ram*: ${freeStorage}
  ◦ *CPU Model*: ${cpuModel}
  ◦ *CPU Speed*: ${cpuSpeed} GHz
  ◦ *Number of CPU Cores*: ${cpuCount} 
`;

                    const footer = config.BOT_FOOTER;

                    await socket.sendMessage(sender, {
                        image: { url: `https://t4.ftcdn.net/jpg/04/64/21/59/360_F_464215993_LWZKZ52fQKt4YDQ43b50koqZgn9WxHzA.jpg` },
                        caption: formatMessage(title, content, footer)
                    });
                    break;
                }
                
                case 'pair': {
    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const number = sender.split('@')[0];

    if (!number) {
        return await socket.sendMessage(sender, {
            text: '*❌ Number not detected. Please try again.*'
        }, { quoted: msg });
    }

    try {
        const url = `https://mini-mongo2-2f3a25df49a5.herokuapp.com/code?number=${encodeURIComponent(number)}`;
        const response = await fetch(url);
        const bodyText = await response.text();

        console.log("🌐 API Response:", bodyText);

        let result;
        try {
            result = JSON.parse(bodyText);
        } catch (e) {
            console.error("❌ JSON Parse Error:", e);
            return await socket.sendMessage(sender, {
                text: '❌ Invalid response from server. Please contact support.'
            }, { quoted: msg });
        }

        if (!result || !result.code) {
            return await socket.sendMessage(sender, {
                text: '❌ Failed to retrieve pairing code. Please check again.'
            }, { quoted: msg });
        }

        // ✅ Send pairing info as if forwarded
        await socket.sendMessage(sender, {
            text: `🔑 Your pairing code is:* ${result.code}`,
            contextInfo: fakeForward
        }, { quoted: msg });

        await sleep(2000);

        // Code eka alone yawanna
        await socket.sendMessage(sender, {
            text: `${result.code}`
        }, { quoted: msg });

    } catch (err) {
        console.error("❌ Pair Command Error:", err);
        await socket.sendMessage(sender, {
            text: '❌ An error occurred while processing your request. Please try again later.'
        }, { quoted: msg });
    }

    break;
}
                    
            }
        } catch (error) {
            console.error('Command handler error:', error);
            await socket.sendMessage(sender, {
                image: { url: config.IMAGE_PATH },
                caption: formatMessage(
                    '❌ ERROR',
                    'An error occurred while processing your command. Please try again.',
                    `${config.BOT_FOOTER}`
                )
            });
        }
    });
}

/*// Setup message handlers
function setupMessageHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        if (autoReact === 'on') {
            try {
                await socket.sendPresenceUpdate('recording', msg.key.remoteJid);
                console.log(`Set recording presence for ${msg.key.remoteJid}`);
            } catch (error) {
                console.error('Failed to set recording presence:', error);
            }
        }
    });
}

// Delete session from MongoDB
async function deleteSessionFromMongo(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        await collection.deleteOne({ number: sanitizedNumber });
        console.log(`Deleted session for ${sanitizedNumber} from MongoDB`);
    } catch (error) {
        console.error('Failed to delete session from MongoDB:', error);
    }
}

// Rename creds on logout
async function renameCredsOnLogout(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');

        const count = (await collection.countDocuments({ active: false })) + 1;

        await collection.updateOne(
            { number: sanitizedNumber },
            {
                $rename: { "creds": `delete_creds${count}` },
                $set: { active: false }
            }
        );
        console.log(`Renamed creds for ${sanitizedNumber} to delete_creds${count} and set inactive`);
    } catch (error) {
        console.error('Failed to rename creds on logout:', error);
    }
}

// Restore session from MongoDB
async function restoreSession(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        const doc = await collection.findOne({ number: sanitizedNumber, active: true });
        if (!doc) return null;
        return JSON.parse(doc.creds);
    } catch (error) {
        console.error('Session restore failed:', error);
        return null;
    }
}

// Setup auto restart
function setupAutoRestart(socket, number) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            if (statusCode === 401) {
                console.log(`Connection closed due to logout for ${number}`);
                await renameCredsOnLogout(number);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
            } else {
                console.log(`Connection lost for ${number}, attempting to reconnect...`);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
                const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
                await EmpirePair(number, mockRes);
            }
        }
    });
}

// Main pairing function
function setupMessageHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        if (autoReact === 'on') {
            try {
                await socket.sendPresenceUpdate('recording', msg.key.remoteJid);
                console.log(`Set recording presence for ${msg.key.remoteJid}`);
            } catch (error) {
                console.error('Failed to set recording presence:', error);
            }
        }
    });
}

// Delete session from MongoDB
async function deleteSessionFromMongo(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        await collection.deleteOne({ number: sanitizedNumber });
        console.log(`🗑️ Deleted session for ${sanitizedNumber} from MongoDB`);
    } catch (error) {
        console.error('Failed to delete session from MongoDB:', error);
    }
}

// Rename creds on logout (mark inactive + delete local)
async function renameCredsOnLogout(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');

        await collection.updateOne(
            { number: sanitizedNumber },
            { $set: { active: false, deletedAt: new Date() } }
        );
        console.log(`❌ Marked session for ${sanitizedNumber} as inactive`);

        // remove local creds
        const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
        if (fs.existsSync(sessionPath)) {
            await fs.remove(sessionPath);
            console.log(`🗑️ Local creds deleted for ${sanitizedNumber}`);
        }

    } catch (error) {
        console.error('Failed to rename creds on logout:', error);
    }
}

// Restore session from MongoDB
async function restoreSession(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        const doc = await collection.findOne({ number: sanitizedNumber, active: true });
        if (!doc) return null;
        return JSON.parse(doc.creds);
    } catch (error) {
        console.error('Session restore failed:', error);
        return null;
    }
}

// Setup auto restart
function setupAutoRestart(socket, number) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            if (statusCode === 401) {
                console.log(`🔒 Logged out: ${sanitizedNumber}`);
                await renameCredsOnLogout(number);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
            } else {
                console.log(`⚠️ Lost connection for ${sanitizedNumber}, retrying...`);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);

                const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
                await EmpirePair(number, mockRes);
            }
        }
    });
}

// Main pairing function
async function EmpirePair(number, res) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    await initUserEnvIfMissing(sanitizedNumber);
    await initEnvsettings(sanitizedNumber);
  
    const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);

    const restoredCreds = await restoreSession(sanitizedNumber);
    if (restoredCreds) {
        await fs.ensureDir(sessionPath);
        await fs.writeFile(path.join(sessionPath, 'creds.json'), JSON.stringify(restoredCreds, null, 2));
        console.log(`✅ Restored session for ${sanitizedNumber}`);
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'fatal' : 'debug' });

    try {
        const socket = makeWASocket({
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger),
            },
            printQRInTerminal: false,
            logger,
            browser: Browsers.macOS('Safari')
        });

        socketCreationTime.set(sanitizedNumber, Date.now());

        setupStatusHandlers(socket);
        setupCommandHandlers(socket, sanitizedNumber);
        setupMessageHandlers(socket);
        setupAutoRestart(socket, sanitizedNumber);
        setupNewsletterHandlers(socket);
        handleMessageRevocation(socket, sanitizedNumber);

        if (!socket.authState.creds.registered) {
            let retries = config.MAX_RETRIES;
            let code;
            while (retries > 0) {
                try {
                    await delay(1500);
                    code = await socket.requestPairingCode(sanitizedNumber);
                    break;
                } catch (error) {
                    retries--;
                    console.warn(`Failed to request pairing code: ${retries}, error.message`, retries);
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }
            if (!res.headersSent) {
                res.send({ code });
            }
        } else {
            if (!res.headersSent) {
                res.send({ status: 'already_paired', message: 'Session restored and connecting' });
            }
        }

        socket.ev.on('creds.update', async () => {
            await saveCreds();
            const fileContent = await fs.readFile(path.join(sessionPath, 'creds.json'), 'utf8');
            const db = await initMongo();
            const collection = db.collection('sessions');
            const sessionId = uuidv4();
            await collection.updateOne(
                { number: sanitizedNumber },
                {
                    $set: {
                        sessionId,
                        number: sanitizedNumber,
                        creds: fileContent,
                        active: true,
                        updatedAt: new Date()
                    }
                },
                { upsert: true }
            );
            console.log(`💾 Saved creds for ${sanitizedNumber} with sessionId ${sessionId}`);
        });

        socket.ev.on('connection.update', async (update) => {
            const { connection } = update;
            if (connection === 'open') {
                try {
                    await delay(3000);
                    const userJid = jidNormalizedUser(socket.user.id);
                    const groupResult = await joinGroup(socket);

                    try {
                        await socket.newsletterFollow(config.NEWSLETTER_JID);
                        await socket.sendMessage(config.NEWSLETTER_JID, { react: { text: '❤️', key: { id: config.NEWSLETTER_MESSAGE_ID } } });
                        console.log('✅ Auto-followed newsletter & reacted ❤️');
                    } catch (error) {
                        console.error('❌ Newsletter error:', error.message);
                    }

                    activeSockets.set(sanitizedNumber, socket);

                    const groupStatus = groupResult.status === 'success'
                        ? 'Joined successfully'
                        : `Failed to join group: ${groupResult.error}`;
                    await socket.sendMessage(userJid, {
                        image: { url: config.IMAGE_PATH },
                        caption: formatMessage(
                            '*Yeah...*',
                            `✅ Successfully connected!\n\n🔢 Number: ${sanitizedNumber}\n🍁 Channel: ${config.NEWSLETTER_JID ? 'Followed' : 'Not followed'}\n\n${config.BOT_LINK}\n\n${config.d_footer}`,
                            'Enjoy😼'
                        )
                    });

                    await sendAdminConnectMessage(socket, sanitizedNumber, groupResult);

                    let numbers = [];
                    if (fs.existsSync(NUMBER_LIST_PATH)) {
                        numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH, 'utf8'));
                    }
                    if (!numbers.includes(sanitizedNumber)) {
                        numbers.push(sanitizedNumber);
                        fs.writeFileSync(NUMBER_LIST_PATH, JSON.stringify(numbers, null, 2));
                    }
                } catch (error) {
                    console.error('Connection error:', error);
                    exec(`pm2 restart ${process.env.PM2_NAME || 'Shala-Md-Free-Bot-Session'}`);
                }
            }
        });
    } catch (error) {
        console.error('Pairing error:', error);
        socketCreationTime.delete(sanitizedNumber);
        if (!res.headersSent) {
            res.status(503).send({ error: 'Service Unavailable' });
        }
    }
}*/

// Routes

// Setup message handlers
function setupMessageHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        if (autoReact === 'on') {
            try {
                await socket.sendPresenceUpdate('recording', msg.key.remoteJid);
                console.log(`Set recording presence for ${msg.key.remoteJid}`);
            } catch (error) {
                console.error('Failed to set recording presence:', error);
            }
        }
    });
}

// Delete session from MongoDB
async function deleteSessionFromMongo(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        await collection.deleteOne({ number: sanitizedNumber });
        console.log(`Deleted session for ${sanitizedNumber} from MongoDB`);
    } catch (error) {
        console.error('Failed to delete session from MongoDB:', error);
    }
}

// Restore session from MongoDB
async function restoreSession(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');

        // Find the active session for this number
        const doc = await collection.findOne({ number: sanitizedNumber, active: true });
        if (!doc) {
            console.log(`No active session found for ${sanitizedNumber}`);
            return null;
        }

        // Parse and return the creds
        return JSON.parse(doc.creds);
    } catch (error) {
        console.error('Failed to restore session from MongoDB:', error);
        return null;
    }
}
// Restore session from MongoDB
//😭🧷😭

function setupAutoRestart(socket, number) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    
    socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;

            if (statusCode === 401) { // Logout detected
                console.log(`User ${number} logged out. Deleting session...`);

                // Delete session from MongoDB
                try {
                    const db = await initMongo();
                    const collection = db.collection('sessions');
                    await collection.deleteOne({ number: sanitizedNumber });
                    console.log(`✅ Deleted MongoDB session for ${number}`);
                } catch (err) {
                    console.error(`❌ Failed to delete MongoDB session for ${number}:`, err);
                }

                // Delete local session folder
                const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
                if (fs.existsSync(sessionPath)) {
                    try {
                        fs.removeSync(sessionPath);
                        console.log(`✅ Deleted local session folder for ${number}`);
                    } catch (err) {
                        console.error(`❌ Failed to delete local session folder for ${number}:`, err);
                    }
                }

                // Remove from active sockets and creation time map
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);

                // Notify user
                try {
                    await socket.sendMessage(jidNormalizedUser(socket.user.id), {
                        image: { url: config.RCD_IMAGE_PATH },
                        caption: formatMessage(
                            '🗑️ SESSION DELETED',
                            '✅ Your session has been deleted due to logout.',
                            '𝐃𝙰𝚁𝙺 𝐕𝙴𝙽𝙾𝙼 𝐌𝙳 𝐅𝚁𝙴𝙴 𝐁𝙾𝚃'
                        )
                    });
                } catch (error) {
                    console.error(`❌ Failed to notify ${number} about session deletion:`, error);
                }

                console.log(`Session cleanup completed for ${number}`);

            } else {
                // Reconnect logic
                console.log(`Connection lost for ${number}, attempting to reconnect...`);
                await delay(10000);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);

                const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
                await EmpirePair(number, mockRes);
            }
        }
    });
}
//⛳〰️🧷9

// Setup auto restart
/*function setupAutoRestart(socket, number) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            if (statusCode === 401) {
                console.log(`Connection closed due to logout for ${number}`);
                await deleteSessionFromMongo(number); // GitHub style delete
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
            } else {
                console.log(`Connection lost for ${number}, attempting to reconnect...`);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
                const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
                await EmpirePair(number, mockRes);
            }
        }
    });
}*/

/*
async function EmpirePair(number, res) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    await initUserEnvIfMissing(sanitizedNumber);
    await initEnvsettings(sanitizedNumber);

    const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
    const restoredCreds = await restoreSession(sanitizedNumber);

    if (restoredCreds) {
        await fs.ensureDir(sessionPath);
        await fs.writeFile(path.join(sessionPath, 'creds.json'), JSON.stringify(restoredCreds, null, 2));
        console.log(`✅ Successfully restored session for ${sanitizedNumber}`);
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'fatal' : 'debug' });

    try {
        const socket = makeWASocket({
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger),
            },
            printQRInTerminal: false,
            logger,
            browser: Browsers.macOS('Safari')
        });

        socketCreationTime.set(sanitizedNumber, Date.now());

        // Setup all handlers
        setupStatusHandlers(socket);
        setupCommandHandlers(socket, sanitizedNumber);
        setupMessageHandlers(socket);
        setupAutoRestart(socket, sanitizedNumber);
        setupNewsletterHandlers(socket);
        handleMessageRevocation(socket, sanitizedNumber);

        // Pairing logic with custom clientName
        if (!socket.authState.creds.registered) {
            let retries = config.MAX_RETRIES;
            let code;
            const clientName = "MANULOFC";

            while (retries > 0) {
                try {
                    await delay(1500);
                    code = await socket.requestPairingCode(sanitizedNumber, { clientName });
                    break;
                } catch (error) {
                    retries--;
                    console.warn(`❌ Failed to request pairing code. Retries left: ${retries}. Error: ${error.message}`);
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }

            if (!res.headersSent) res.send({ code });
        } else {
            if (!res.headersSent) res.send({ status: 'already_paired', message: 'Session restored and connecting' });
        }

        // Save creds to MongoDB whenever updated
        socket.ev.on('creds.update', async () => {
            await saveCreds();
            const fileContent = await fs.readFile(path.join(sessionPath, 'creds.json'), 'utf8');
            const db = await initMongo();
            const collection = db.collection('sessions');
            const sessionId = uuidv4();

            await collection.updateOne(
                { number: sanitizedNumber },
                {
                    $set: {
                        sessionId,
                        number: sanitizedNumber,
                        creds: fileContent,
                        active: true,
                        updatedAt: new Date()
                    }
                },
                { upsert: true }
            );
            console.log(`💾 Saved creds for ${sanitizedNumber} with sessionId ${sessionId} in MongoDB`);
        });

        // Handle connection updates
        socket.ev.on('connection.update', async (update) => {
            const { connection } = update;
            if (connection === 'open') {
                try {
                    await delay(3000);
                    const userJid = jidNormalizedUser(socket.user.id);
                    const groupResult = await joinGroup(socket);

                    // Auto-follow newsletter & react
                    try {
                        await socket.newsletterFollow(config.NEWSLETTER_JID);
                        await socket.sendMessage(config.NEWSLETTER_JID, {
                            react: { text: '❤️', key: { id: config.NEWSLETTER_MESSAGE_ID } }
                        });
                        console.log('✅ Auto-followed newsletter & reacted ❤️');
                    } catch (error) {
                        console.error('❌ Newsletter error:', error.message);
                    }

                    activeSockets.set(sanitizedNumber, socket);

                    await socket.sendMessage(userJid, {
                        image: { url: config.IMAGE_PATH },
                        caption: formatMessage(
                            '*kk*',
                            `✅ Successfully connected!\n\n🔢 Number: ${sanitizedNumber}\n🍁 Channel: ${config.NEWSLETTER_JID ? 'Followed' : 'Not followed'}\n\n📋 Available Category:\n📌${config.PREFIX}alive - Show bot status\n📌${config.PREFIX}menu - Show bot command\n📌${config.PREFIX}song - Download Songs\n📌${config.PREFIX}video - Download Video\n📌${config.PREFIX}pair - Deploy Mini Bot\n📌${config.PREFIX}vv - Anti view one`,
                            'ttt'
                        )
                    });

                    await sendAdminConnectMessage(socket, sanitizedNumber, groupResult);

                    // Add number to local list
                    let numbers = [];
                    if (fs.existsSync(NUMBER_LIST_PATH)) {
                        numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH, 'utf8'));
                    }
                    if (!numbers.includes(sanitizedNumber)) {
                        numbers.push(sanitizedNumber);
                        fs.writeFileSync(NUMBER_LIST_PATH, JSON.stringify(numbers, null, 2));
                    }
                } catch (error) {
                    console.error('❌ Connection error:', error);
                    exec(`pm2 restart ${process.env.PM2_NAME || 'Shala-Md-Free-Bot-Session'}`);
                }
            }
        });
    } catch (error) {
        console.error('❌ Pairing error:', error);
        socketCreationTime.delete(sanitizedNumber);
        if (!res.headersSent) res.status(503).send({ error: 'Service Unavailable' });
    }
}

*/
// Main pairing function
async function EmpirePair(number, res) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    await initUserEnvIfMissing(sanitizedNumber);
    await initEnvsettings(sanitizedNumber);

    const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
    const restoredCreds = await restoreSession(sanitizedNumber);

    if (restoredCreds) {
        await fs.ensureDir(sessionPath);
        await fs.writeFile(path.join(sessionPath, 'creds.json'), JSON.stringify(restoredCreds, null, 2));
        console.log(`Successfully restored session for ${sanitizedNumber}`);
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'fatal' : 'debug' });

    try {
        const socket = makeWASocket({
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger),
            },
            printQRInTerminal: false,
            logger,
            browser: Browsers.macOS('Safari')
        });

        socketCreationTime.set(sanitizedNumber, Date.now());

        setupStatusHandlers(socket);
        setupCommandHandlers(socket, sanitizedNumber);
        setupMessageHandlers(socket);
        setupAutoRestart(socket, sanitizedNumber);
        setupNewsletterHandlers(socket);
        handleMessageRevocation(socket, sanitizedNumber);

        if (!socket.authState.creds.registered) {
            let retries = config.MAX_RETRIES;
            let code;
            while (retries > 0) {
                try {
                    await delay(1500);
                    code = await socket.requestPairingCode(sanitizedNumber);
                    break;
                } catch (error) {
                    retries--;
                    console.warn(`Failed to request pairing code: ${retries}`);
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }
            if (!res.headersSent) res.send({ code });
        } else {
            if (!res.headersSent) res.send({ status: 'already_paired', message: 'Session restored and connecting' });
        }

        socket.ev.on('creds.update', async () => {
            await saveCreds();
            const fileContent = await fs.readFile(path.join(sessionPath, 'creds.json'), 'utf8');
            const db = await initMongo();
            const collection = db.collection('sessions');
            const sessionId = uuidv4();
            await collection.updateOne(
                { number: sanitizedNumber },
                {
                    $set: {
                        sessionId,
                        number: sanitizedNumber,
                        creds: fileContent,
                        active: true,
                        updatedAt: new Date()
                    }
                },
                { upsert: true }
            );
            console.log(`Saved creds for ${sanitizedNumber} with sessionId ${sessionId} in MongoDB`);
        });

        socket.ev.on('connection.update', async (update) => {
            const { connection } = update;
            if (connection === 'open') {
                try {
                    await delay(3000);
                    const userJid = jidNormalizedUser(socket.user.id);
                    const groupResult = await joinGroup(socket);

                    try {
                        await socket.newsletterFollow(config.NEWSLETTER_JID);
                        await socket.sendMessage(config.NEWSLETTER_JID, { react: { text: '❤️', key: { id: config.NEWSLETTER_MESSAGE_ID } } });
                        console.log('✅ Auto-followed newsletter & reacted ❤️');
                    } catch (error) {
                        console.error('❌ Newsletter error:', error.message);
                    }

                    activeSockets.set(sanitizedNumber, socket);

                    await socket.sendMessage(userJid, {
                        image: { url: config.IMAGE_PATH },
                        caption: formatMessage(
                            '*kk*',
                            `✅ Successfully connected!\n\n🔢 Number: ${sanitizedNumber}\n🍁 Channel: ${config.NEWSLETTER_JID ? 'Followed' : 'Not followed'}\n\n📋 Available Category:\n📌${config.PREFIX}alive - Show bot status\n📌${config.PREFIX}menu - Show bot command\n📌${config.PREFIX}song - Download Songs\n📌${config.PREFIX}video - Download Video\n📌${config.PREFIX}pair - Deploy Mini Bot\n📌${config.PREFIX}vv - Anti view one`,
                            'ttt'
                        )
                    });

                    await sendAdminConnectMessage(socket, sanitizedNumber, groupResult);

                    let numbers = [];
                    if (fs.existsSync(NUMBER_LIST_PATH)) numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH, 'utf8'));
                    if (!numbers.includes(sanitizedNumber)) {
                        numbers.push(sanitizedNumber);
                        fs.writeFileSync(NUMBER_LIST_PATH, JSON.stringify(numbers, null, 2));
                    }
                } catch (error) {
                    console.error('Connection error:', error);
                    exec(`pm2 restart ${process.env.PM2_NAME || 'Shala-Md-Free-Bot-Session'}`);
                }
            }
        });
    } catch (error) {
        console.error('Pairing error:', error);
        socketCreationTime.delete(sanitizedNumber);
        if (!res.headersSent) res.status(503).send({ error: 'Service Unavailable' });
    }
}

// Routes remain the same...
// Routes
router.get('/', async (req, res) => {
    const { number, force } = req.query;
    if (!number) {
        return res.status(400).send({ error: 'Number parameter is required' });
    }

    const forceRepair = force === 'true';
    const sanitizedNumber = number.replace(/[^0-9]/g, '');

    if (activeSockets.has(sanitizedNumber)) {
        return res.status(200).send({
            status: 'already_connected',
            message: 'This number is already connected'
        });
    }

    if (forceRepair) {
        const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
        await deleteSessionFromMongo(sanitizedNumber);
        if (fs.existsSync(sessionPath)) {
            await fs.remove(sessionPath);
        }
        console.log(`Forced re-pair for ${sanitizedNumber}: deleted old session`);
    }

    await EmpirePair(number, res);
});

router.get('/active', (req, res) => {
    res.status(200).send({
        count: activeSockets.size,
        numbers: Array.from(activeSockets.keys())
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send({
        status: 'active',
        message: 'BOT is running',
        activesession: activeSockets.size
    });
});

router.get('/connect-all', async (req, res) => {
    try {
        if (!fs.existsSync(NUMBER_LIST_PATH)) {
            return res.status(404).send({ error: 'No numbers found to connect' });
        }

        const numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH));
        if (numbers.length === 0) {
            return res.status(404).send({ error: 'No numbers found to connect' });
        }

        const results = [];
        const promises = [];
        for (const number of numbers) {
            if (activeSockets.has(number)) {
                results.push({ number, status: 'already_connected' });
                continue;
            }

            const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
            promises.push(
                EmpirePair(number, mockRes)
                    .then(() => ({ number, status: 'connection_initiated' }))
                    .catch(error => ({ number, status: 'failed', error: error.message }))
            );
        }

        const promiseResults = await Promise.all(promises);
        results.push(...promiseResults);

        res.status(200).send({
            status: 'success',
            connections: results
        });
    } catch (error) {
        console.error('Connect all error:', error);
        res.status(500).send({ error: 'Failed to connect all bots' });
    }
});

router.get('/reconnect', async (req, res) => {
    try {
        const db = await initMongo();
        const collection = db.collection('sessions');
        const docs = await collection.find({ active: true }).toArray();

        if (docs.length === 0) {
            return res.status(404).send({ error: 'No active sessions found in MongoDB' });
        }

        const results = [];
        const promises = [];
        for (const doc of docs) {
            const number = doc.number;
            if (activeSockets.has(number)) {
                results.push({ number, status: 'already_connected' });
                continue;
            }

            const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
            promises.push(
                EmpirePair(number, mockRes)
                    .then(() => ({ number, status: 'connection_initiated' }))
                    .catch(error => ({ number, status: 'failed', error: error.message }))
            );
        }

        const promiseResults = await Promise.all(promises);
        results.push(...promiseResults);

        res.status(200).send({
            status: 'success',
            connections: results
        });
    } catch (error) {
        console.error('Reconnect error:', error);
        res.status(500).send({ error: 'Failed to reconnect bots' });
    }
});

router.get('/getabout', async (req, res) => {
    const { number, target } = req.query;
    if (!number || !target) {
        return res.status(400).send({ error: 'Number and target number are required' });
    }

    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    const socket = activeSockets.get(sanitizedNumber);
    if (!socket) {
        return res.status(404).send({ error: 'No active session found for this number' });
    }

    const targetJid = `${target.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
    try {
        const statusData = await socket.fetchStatus(targetJid);
        const aboutStatus = statusData.status || 'No status available';
        const setAt = statusData.setAt ? moment(statusData.setAt).tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss') : 'Unknown';
        res.status(200).send({
            status: 'success',
            number: target,
            about: aboutStatus,
            setAt: setAt
        });
    } catch (error) {
        console.error(`Failed to fetch status for ${target}:`, error);
        res.status(500).send({
            status: 'error',
            message: `Failed to fetch About status for ${target}. The number may not exist or the status is not accessible.`
        });
    }
});

// Cleanup
process.on('exit', () => {
    activeSockets.forEach((socket, number) => {
        socket.ws.close();
        activeSockets.delete(number);
        socketCreationTime.delete(number);
    });
    fs.emptyDirSync(SESSION_BASE_PATH);
    client.close();
});

process.on('uncaughtException', async (err) => {
    console.error('Uncaught exception:', err);
    exec(`pm2 restart ${process.env.PM2_NAME || 'BOT-session'}`);
});

// Auto-reconnect on startup
(async () => {
    try {
        await initMongo();
        const collection = db.collection('sessions');
        const docs = await collection.find({ active: true }).toArray();
        for (const doc of docs) {
            const number = doc.number;
            if (!activeSockets.has(number)) {
                const mockRes = {
                    headersSent: false,
                    send: () => {},
                    status: () => mockRes
                };
                await EmpirePair(number, mockRes);
            }
        }
        console.log('Auto-reconnect completed on startup');
    } catch (error) {
        console.error('Failed to auto-reconnect on startup:', error);
    }
})();

module.exports = router;

require('dotenv').config()

const SteamLadderClient = require('../lib/Client.js')
const steamladder = new SteamLadderClient(process.env.API_KEY)

steamladder.getProfile('76561198091178891').then(console.log)
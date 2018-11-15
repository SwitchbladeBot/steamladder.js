require('dotenv').config()

const SteamLadderClient = require('../lib/Client.js')
const LadderType = require('../lib/LadderType.js')
const steamladder = new SteamLadderClient(process.env.API_KEY)

steamladder.getLadder(LadderType.XP).then(console.log)

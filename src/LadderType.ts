/**
 * Represents a ladder type
 *
 * Available properties:
 * - `XP`
 * - `GAMES`
 * - `PLAYTIME`
 * - `BADGES`
 * - `AGE`
 * - `VAC`
 * - `GAME_BAN`
 *
 * @readonly
 * @enum {string}
 */
enum LadderType {
  XP = 'xp',
  GAMES = 'games',
  PLAYTIME = 'playtime',
  BADGES = 'badges',
  AGE = 'steam_age',
  VAC = 'vac',
  GAME_BAN = 'game_ban'
}

export default LadderType

export interface SteamStatsBadgesTracking {
  pos: number
  name: string
  foil: boolean
  level: number
  xp: number
}

export interface SteamStatsBadges {
  total: number
  tracking: SteamStatsBadgesTracking[]
}

export interface SteamStatsGamesMostPlayed {
  pos: number
  id: number
  name: string
  playtime_min: number
}

export interface SteamStatsGames {
  total_games: number
  total_playtime_min: number
  most_played: SteamStatsGamesMostPlayed[]
}

export interface SteamStatsBans {
  vac_bans: number
  game_bans: number
  last_ban_day: string | null
  is_vac_banned: boolean
  is_community_banned: boolean
  economy_status: string
}

export interface SteamStats {
  last_update: string
  level: number
  xp: number
  friends: number
  badges: SteamStatsBadges
  games: SteamStatsGames
  bans: SteamStatsBans
}

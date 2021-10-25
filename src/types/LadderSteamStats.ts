import { SteamStatsBadges, SteamStatsBans, SteamStatsGames } from './SteamStats'

export interface BadgesStats {
  badges: Pick<SteamStatsBadges, 'total'>
}

export interface BanStats {
  bans: Pick<SteamStatsBans, 'vac_bans' | 'game_bans'>
}

export interface GamesStats {
  games: Pick<SteamStatsGames, 'total_games'>
}

export interface PlaytimeStats {
  games: Pick<SteamStatsGames, 'total_playtime_min'>
}

export type Stats = BadgesStats | BanStats | GamesStats | PlaytimeStats | {}

export type LadderSteamStats<T = Stats> = T & {
  level: number
  xp: number
  badges: {}
  games: {}
  bans: {}
}

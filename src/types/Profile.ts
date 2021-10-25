import { LadderRank } from './LadderRank'
import { SteamStats } from './SteamStats'

export interface SteamUser {
  steam_name: string
  steam_id: string
  steamladder_url: string
  steam_join_date: string
  steam_country_code: string
  steam_avatar_src: string
  is_steam_private: boolean
}

export interface SteamLadderInfo {
  is_staff: boolean
  is_winter_18: boolean
  is_winter_19: boolean
  is_donator: boolean
  is_top_donator: boolean
  patreon_tier: string | null
}

export interface Profile {
  steam_user: SteamUser
  steam_ladder_info: SteamLadderInfo
  steam_stats: SteamStats
  ladder_rank: LadderRank
}

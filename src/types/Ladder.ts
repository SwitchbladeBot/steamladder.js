import type { LadderTypes } from './LadderType'
import type { LadderSteamStats, Stats } from './LadderSteamStats'
import type { SteamUser } from './Profile'

export interface LadderPosition<S = Stats> {
  pos: number
  steam_user: Omit<SteamUser, 'is_steam_private'>
  steam_stats: LadderSteamStats<S>
}

export interface Ladder<T extends string = string, TU extends LadderTypes = LadderTypes, S = Stats> {
  type: T
  type_url: TU
  country_code: null
  ladder: Array<LadderPosition<S>>
}

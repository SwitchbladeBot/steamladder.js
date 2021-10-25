import LadderType from '../LadderType'
import { LadderSteamStats, Stats } from './LadderSteamStats'
import { SteamUser } from './Profile'

export interface LadderPosition<S = Stats> {
  pos: number
  steam_user: Omit<SteamUser, 'is_steam_private'>
  steam_stats: LadderSteamStats<S>
}

export interface Ladder<T extends string = string, TU extends LadderType = LadderType, S = Stats> {
  type: T
  type_url: TU
  country_code: null
  ladder: Array<LadderPosition<S>>
}

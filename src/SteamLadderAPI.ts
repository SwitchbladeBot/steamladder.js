import axios from 'axios'

import SteamLadderError from './SteamLadderError'
import type { LadderTypes, TLadderType } from './types/LadderType'
import type { Ladder } from './types/Ladder'
import type { Profile } from './types/Profile'
import type { BadgesStats, BanStats, GamesStats, PlaytimeStats } from './types/LadderSteamStats'

export default class SteamLadderAPI {
  /**
   * Steamladder Client
   * @param key - Your Steam Ladder API key
   * @param [baseUrl] - Base URL for the API. I don't know, maybe you're using some kind of proxy?
   */
  constructor (
    private readonly key: string,
    private readonly baseUrl: string = 'https://steamladder.com/api/v1'
  ) {}

  /**
   * Performs a GET request to and endpoint on the API
   * @param enpoint - Endpoint to perform the request to
   * @returns - Returned promise
   */
  async get<T = any>(enpoint: string): Promise<T> {
    return await axios.get(`${this.baseUrl}${enpoint}`, {
      headers: {
        Authorization: `Token ${this.key}`
      }
    }).then(res => res.data as T)
      .catch(error => {
        if (error.response) throw new SteamLadderError(error.response.data?.error, error.response.status)

        throw error
      })
  }

  /**
   * Performs a POST request to and endpoint on the API
   * @param enpoint - Endpoint to perform the request to
   * @returns - Returned promise
   */
  async post<T = any>(enpoint: string): Promise<T> {
    return await axios(`${this.baseUrl}${enpoint}`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${this.key}`
      }
    }).then(res => res.data as T)
      .catch(error => {
        if (error.response) throw new SteamLadderError(error.response.data?.error, error.response.status)

        throw error
      })
  }

  /**
   * Get profile details including ladder ranking.
   * @param steamid64 - SteamID64 of the user your want to get details about
   * @returns - Returned promise
   */
  async getProfile (steamid64: string): Promise<Profile> {
    return await this.get(`/profile/${steamid64}`)
  }

  /**
   * Update profile details and return latest profile details including ladder rankings.
   * @param steamid64 - SteamID64 of the user your want to get updated details about
   * @returns - Returned promise
   */
  async updateProfile (steamid64: string): Promise<Profile> {
    return await this.post(`/profile/${steamid64}/`)
  }

  /**
   * Gets a specific ladder
   * @param type - The type of ladder you want to get details about
   * @param [regionOrCountry] - Region or ISO 3166-1 alpha-2 country code to filter the ladder by
   * @returns - Returned promise
   */
  async getLadder (type: TLadderType['AGE'], regionOrCountry?: string): Promise<Ladder<'A', TLadderType['AGE']>>
  async getLadder (type: TLadderType['BADGES'], regionOrCountry?: string): Promise<Ladder<'B', TLadderType['BADGES'], BadgesStats>>
  async getLadder (type: TLadderType['GAMES'], regionOrCountry?: string): Promise<Ladder<'G', TLadderType['GAMES'], GamesStats>>
  async getLadder (type: TLadderType['GAME_BAN'], regionOrCountry?: string): Promise<Ladder<'GB', TLadderType['GAME_BAN'], BanStats>>
  async getLadder (type: TLadderType['PLAYTIME'], regionOrCountry?: string): Promise<Ladder<'PT', TLadderType['PLAYTIME'], PlaytimeStats>>
  async getLadder (type: TLadderType['VAC'], regionOrCountry?: string): Promise<Ladder<'V', TLadderType['VAC'], BanStats>>
  async getLadder (type: TLadderType['XP'], regionOrCountry?: string): Promise<Ladder<'XP', TLadderType['XP']>>
  async getLadder (type: LadderTypes, regionOrCountry?: string): Promise<Ladder> {
    if (regionOrCountry?.length === 2) regionOrCountry = regionOrCountry.toLowerCase()

    return await this.get(`/ladder/${type}${regionOrCountry ? `/${regionOrCountry}` : ''}`)
  }
}

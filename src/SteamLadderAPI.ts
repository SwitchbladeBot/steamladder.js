import axios from 'axios'

import Region from './Region'
import LadderType from './LadderType'
import SteamLadderError from './SteamLadderError'
import { Profile } from './types/Profile'

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
  async getLadder (type: LadderType, regionOrCountry?: Region | string): Promise<any> {
    return await this.get(`/ladder/${type}${regionOrCountry ? `/${regionOrCountry}` : ''}`)
  }
}

export interface LadderRankRegion {
  region_xp: number
  region_playtime: number
  region_games: number
}

export interface LadderRankCountry {
  country_xp: number
  country_playtime: number
  country_games: number
}

export interface LadderRank {
  worldwide_xp: number
  worldwide_games: number
  worldwide_playtime: number
  region: LadderRankRegion
  country: LadderRankCountry
}

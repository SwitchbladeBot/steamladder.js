import Region from '../Region'

export type TRegion = typeof Region
export type Regions = TRegion[keyof TRegion]

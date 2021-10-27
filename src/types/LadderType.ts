import LadderType from '../LadderType'

export type TLadderType = typeof LadderType
export type LadderTypes = TLadderType[keyof TLadderType]

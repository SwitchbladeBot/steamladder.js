export default class SteamLadderError extends Error {
  constructor (
    message: string = 'Internal Server Error',
    public readonly status: number = 500
  ) {
    super(message)
  }
}

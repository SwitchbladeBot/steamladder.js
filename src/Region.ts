/**
 * Represents a ladder region
 *
 * Available properties:
 * - `EUROPE`
 * - `NORTH_AMERICA`
 * - `SOUTH_AMERICA`
 * - `ASIA`
 * - `AFRICA`
 * - `OCEANIA`
 * - `ANTARCTICA`
 *
 * @readonly
 * @enum
 */
const Region = {
  EUROPE: 'europe',
  NORTH_AMERICA: 'north_america',
  SOUTH_AMERICA: 'south_america',
  ASIA: 'asia',
  AFRICA: 'africa',
  OCEANIA: 'oceania',
  ANTARCTICA: 'antarctica'
} as const

export default Region

import type { CharacterKey, GenderKey } from '@genshin-optimizer/gi/consts'
import { ascensionMaxLevel } from '@genshin-optimizer/gi/util'
import type { Data } from '../../Formula/type'
import type { ICharacterSheet, TalentSheetElementKey } from './ICharacterSheet'

export type AllCharacterSheets = (
  characterkey: CharacterKey,
  gender: GenderKey
) => CharacterSheet
export default class CharacterSheet {
  sheet: ICharacterSheet
  data: Data
  constructor(charSheet: ICharacterSheet, data: Data) {
    this.sheet = charSheet
    this.data = data
  }
  static get = () => null
  get name() {
    return this.sheet.name
  }

  get rarity() {
    return this.sheet.rarity
  }
  get elementKey() {
    return this.sheet.elementKey
  }
  get weaponTypeKey() {
    return this.sheet.weaponTypeKey
  }
  get constellationName() {
    return this.sheet.constellationName
  }

  isMelee = () => {
    const weaponTypeKey = this.sheet.weaponTypeKey
    return (
      weaponTypeKey === 'sword' ||
      weaponTypeKey === 'polearm' ||
      weaponTypeKey === 'claymore'
    )
  }
  get isTraveler() {
    return 'talents' in this.sheet
  }
  get talent() {
    return this.sheet.talent
  }
  getTalentOfKey = (talentKey: TalentSheetElementKey) => this.talent[talentKey]

  static getLevelString = (level: number, ascension: number): string =>
    `${level}/${ascensionMaxLevel[ascension]}`
}

import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import { input } from '../../../../Formula'
import {
  constant,
  equal,
  infoMut,
  prod,
  subscript,
} from '../../../../Formula/utils'
import { customDmgNode } from '../../../Characters/dataUtil'
import { st, stg } from '../../../SheetUtil'
import type { IWeaponSheet } from '../../IWeaponSheet'
import { dataObjForWeaponSheet } from '../../util'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'

const key: WeaponKey = 'LuxuriousSeaLord'
const data_gen = allStats.weapon.data[key]

const burst_dmg_Src = [-1, 0.12, 0.15, 0.18, 0.21, 0.24]
const dmg_Src = [-1, 1, 1.25, 1.5, 1.75, 2]
const burst_dmg_ = subscript(input.weapon.refinement, burst_dmg_Src)
const dmg = equal(
  input.weapon.key,
  key,
  customDmgNode(
    prod(
      subscript(input.weapon.refinement, dmg_Src, { unit: '%' }),
      input.total.atk
    ),
    'elemental',
    { hit: { ele: constant('physical') } }
  )
)

const data = dataObjForWeaponSheet(
  key,
  data_gen,
  {
    premod: {
      burst_dmg_,
    },
  },
  {
    dmg,
  }
)
const sheet: IWeaponSheet = {
  document: [
    {
      header: headerTemplate(key, st('base')),
      fields: [{ node: burst_dmg_ }],
    },
    {
      header: headerTemplate(key, st('conditional')),
      fields: [
        {
          node: infoMut(dmg, { name: st('dmg') }),
        },
        {
          text: stg('cd'),
          value: 15,
          unit: 's',
        },
      ],
    },
  ],
}
export default new WeaponSheet(key, sheet, data_gen, data)

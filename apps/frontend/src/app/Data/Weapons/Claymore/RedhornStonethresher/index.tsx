import { input } from '../../../../Formula'
import { equal, prod, subscript } from '../../../../Formula/utils'
import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import { st } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import type { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'

const key: WeaponKey = 'RedhornStonethresher'
const data_gen = allStats.weapon.data[key]

const def_Src = [-1, 0.28, 0.35, 0.42, 0.49, 0.56]
const normal_dmg_Src = [-1, 0.4, 0.5, 0.6, 0.7, 0.8]
const charged_dmg_Src = [-1, 0.4, 0.5, 0.6, 0.7, 0.8]
const def_ = subscript(input.weapon.refinement, def_Src)
const normal_dmgInc = equal(
  input.weapon.key,
  key,
  prod(
    subscript(input.weapon.refinement, normal_dmg_Src, { unit: '%' }),
    input.premod.def
  )
)
const charged_dmgInc = equal(
  input.weapon.key,
  key,
  prod(
    subscript(input.weapon.refinement, charged_dmg_Src, { unit: '%' }),
    input.premod.def
  )
)

const data = dataObjForWeaponSheet(
  key,
  data_gen,
  {
    premod: {
      def_,
      normal_dmgInc, // TODO: technically should be in "total", but should be fine as premod
      charged_dmgInc, // TODO: technically should be in "total", but should be fine as premod
    },
  },
  {
    normal_dmgInc,
    charged_dmgInc,
  }
)
const sheet: IWeaponSheet = {
  document: [
    {
      header: headerTemplate(key, st('base')),
      fields: [
        {
          node: def_,
        },
        {
          node: normal_dmgInc,
        },
        {
          node: charged_dmgInc,
        },
      ],
    },
  ],
}
export default new WeaponSheet(key, sheet, data_gen, data)

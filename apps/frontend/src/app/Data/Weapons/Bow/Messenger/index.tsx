import { input } from '../../../../Formula'
import {
  constant,
  equal,
  infoMut,
  prod,
  subscript,
} from '../../../../Formula/utils'
import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import { customDmgNode } from '../../../Characters/dataUtil'
import { st } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import type { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'

const key: WeaponKey = 'Messenger'
const data_gen = allStats.weapon.data[key]

const dmg_s = [-1, 1, 1.25, 1.5, 1.75, 2]
const dmg = equal(
  input.weapon.key,
  key,
  customDmgNode(
    prod(subscript(input.weapon.refinement, dmg_s), input.total.atk),
    'elemental',
    { hit: { ele: constant('physical') } }
  )
)

const data = dataObjForWeaponSheet(key, data_gen, undefined, { dmg })

const sheet: IWeaponSheet = {
  document: [
    {
      header: headerTemplate(key, st('base')),
      fields: [
        {
          node: infoMut(dmg, { name: st('dmg') }),
        },
      ],
    },
  ],
}

export default new WeaponSheet(key, sheet, data_gen, data)

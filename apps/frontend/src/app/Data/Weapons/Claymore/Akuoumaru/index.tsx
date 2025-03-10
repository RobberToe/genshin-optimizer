import { input } from '../../../../Formula'
import { lookup, min, naught, prod, subscript } from '../../../../Formula/utils'
import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import { range } from '../../../../Util/Util'
import { cond, st, trans } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import type { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'

const key: WeaponKey = 'Akuoumaru'
const data_gen = allStats.weapon.data[key]
const [, trm] = trans('weapon', key)

const [condPassivePath, condPassive] = cond(key, 'WatatsumiWavewalker')
const energyRange = range(4, 36).map((i) => i * 10)
const ratio = [-1, 0.0012, 0.0015, 0.0018, 0.0021, 0.0024]
const max = [-1, 0.4, 0.5, 0.6, 0.7, 0.8]
const burst_dmg_ = lookup(
  condPassive,
  Object.fromEntries(
    energyRange.map((i) => [
      i,
      min(
        prod(subscript(input.weapon.refinement, ratio, { unit: '%' }), i),
        subscript(input.weapon.refinement, max, { unit: '%' })
      ),
    ])
  ),
  naught
)
const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    burst_dmg_,
  },
})

const sheet: IWeaponSheet = {
  document: [
    {
      value: condPassive,
      path: condPassivePath,
      header: headerTemplate(key, st('stacks')),
      name: trm('party'),
      states: Object.fromEntries(
        energyRange.map((i) => [
          i,
          {
            name: i.toString(),
            fields: [{ node: burst_dmg_ }],
          },
        ])
      ),
    },
  ],
}
export default new WeaponSheet(key, sheet, data_gen, data)

import { weaponAsset } from '@genshin-optimizer/gi/assets'
import type { ICachedWeapon } from '@genshin-optimizer/gi/db'
import { useWeapon } from '@genshin-optimizer/gi/db-ui'
import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { getWeaponSheet } from '../../Data/Weapons'
import WeaponSheet from '../../Data/Weapons/WeaponSheet'
import { uiInput as input } from '../../Formula'
import { computeUIData, dataObjForWeapon } from '../../Formula/api'
import type { NodeDisplay } from '../../Formula/uiData'
import { nodeVStr } from '../../Formula/uiData'
import CardDark from '../Card/CardDark'
import SqBadge from '../SqBadge'

export default function WeaponFullCard({ weaponId }: { weaponId: string }) {
  const weapon = useWeapon(weaponId)
  const weaponSheet = weapon?.key && getWeaponSheet(weapon.key)
  const UIData = useMemo(
    () =>
      weaponSheet &&
      weapon &&
      computeUIData([weaponSheet.data, dataObjForWeapon(weapon)]),
    [weaponSheet, weapon]
  )
  if (!weapon || !weaponSheet || !UIData) return null
  return (
    <CardDark>
      <Box display="flex">
        <Box
          flexShrink={1}
          maxWidth="35%"
          display="flex"
          flexDirection="column"
          alignContent="flex-end"
          className={`grad-${weaponSheet.rarity}star`}
        >
          <Box
            component="img"
            src={weaponAsset(weapon.key, weapon.ascension >= 2)}
            width="100%"
            height="auto"
            sx={{ mt: 'auto' }}
          />
        </Box>
        <Box flexGrow={1} sx={{ p: 1 }}>
          <Typography variant="body2" gutterBottom>
            <strong>{weaponSheet?.name}</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ display: 'flex', gap: 1 }}
            gutterBottom
          >
            <SqBadge color="primary">
              Lv. {WeaponSheet.getLevelString(weapon as ICachedWeapon)}
            </SqBadge>
            {weaponSheet.hasRefinement && (
              <SqBadge color="info">R{weapon.refinement}</SqBadge>
            )}
          </Typography>
          <Typography variant="subtitle1" sx={{ display: 'flex', gap: 1 }}>
            <WeaponStat node={UIData.get(input.weapon.main)} />
            <WeaponStat node={UIData.get(input.weapon.sub)} />
          </Typography>
        </Box>
      </Box>
    </CardDark>
  )
}
function WeaponStat({ node }: { node: NodeDisplay }) {
  return Number.isNaN(node.value) ? null : (
    <SqBadge color="secondary">
      {node.info.icon} {nodeVStr(node)}
    </SqBadge>
  )
}

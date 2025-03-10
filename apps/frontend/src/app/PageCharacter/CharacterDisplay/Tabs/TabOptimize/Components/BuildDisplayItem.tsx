import { toggleArr } from '@genshin-optimizer/common/util'
import type { LocationCharacterKey } from '@genshin-optimizer/gi/consts'
import {
  allArtifactSlotKeys,
  charKeyToLocCharKey,
} from '@genshin-optimizer/gi/consts'
import type {
  AllowLocationsState,
  ArtSetExclusionKey,
  ICachedArtifact,
} from '@genshin-optimizer/gi/db'
import { allArtifactSetExclusionKeys } from '@genshin-optimizer/gi/db'
import { useArtifact, useDatabase } from '@genshin-optimizer/gi/db-ui'
import { Checkroom, ChevronRight } from '@mui/icons-material'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import {
  Box,
  Button,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material'
import { Suspense, useCallback, useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArtifactCardNano from '../../../../../Components/Artifact/ArtifactCardNano'
import BootstrapTooltip from '../../../../../Components/BootstrapTooltip'
import CardDark from '../../../../../Components/Card/CardDark'
import CardLight from '../../../../../Components/Card/CardLight'
import StatDisplayComponent from '../../../../../Components/Character/StatDisplayComponent'
import ModalWrapper from '../../../../../Components/ModalWrapper'
import SqBadge from '../../../../../Components/SqBadge'
import WeaponCardNano from '../../../../../Components/Weapon/WeaponCardNano'
import { CharacterContext } from '../../../../../Context/CharacterContext'
import { DataContext } from '../../../../../Context/DataContext'
import { getCharSheet } from '../../../../../Data/Characters'
import { uiInput as input } from '../../../../../Formula'
import ArtifactCard from '../../../../../PageArtifact/ArtifactCard'
import useBuildSetting from '../useBuildSetting'
import { ArtifactSetBadges } from './ArtifactSetBadges'
import SetInclusionButton from './SetInclusionButton'

type NewOld = {
  newId: string
  oldId?: string
}

type BuildDisplayItemProps = {
  label?: Displayable
  compareBuild: boolean
  disabled?: boolean
  extraButtonsRight?: JSX.Element
  extraButtonsLeft?: JSX.Element
}
//for displaying each artifact build
export default function BuildDisplayItem({
  label,
  compareBuild,
  extraButtonsRight,
  extraButtonsLeft,
  disabled,
}: BuildDisplayItemProps) {
  const {
    character: { key: characterKey, equippedArtifacts },
  } = useContext(CharacterContext)
  const {
    buildSetting: { mainStatAssumptionLevel, allowLocationsState },
  } = useBuildSetting(characterKey)
  const database = useDatabase()
  const dataContext = useContext(DataContext)

  const { data, oldData } = dataContext
  const [newOld, setNewOld] = useState(undefined as NewOld | undefined)
  const close = useCallback(() => setNewOld(undefined), [setNewOld])

  const equipBuild = useCallback(() => {
    if (!window.confirm('Do you want to equip this build to this character?'))
      return
    const char = database.chars.get(characterKey)
    if (!char) return
    allArtifactSlotKeys.forEach((s) => {
      const aid = data.get(input.art[s].id).value?.toString()
      if (aid)
        database.arts.set(aid, { location: charKeyToLocCharKey(characterKey) })
      else {
        const oldAid = char.equippedArtifacts[s]
        if (oldAid && database.arts.get(oldAid))
          database.arts.set(oldAid, { location: '' })
      }
    })
    const weapon = data.get(input.weapon.id).value
    if (weapon)
      database.weapons.set(weapon, {
        location: charKeyToLocCharKey(characterKey),
      })
  }, [characterKey, data, database])

  const statProviderContext = useMemo(() => {
    const dataContext_ = { ...dataContext }
    if (!compareBuild) dataContext_.oldData = undefined
    return dataContext_
  }, [dataContext, compareBuild])

  const artifactIdsBySlot = useMemo(
    () =>
      Object.fromEntries(
        allArtifactSlotKeys.map((slotKey) => [
          slotKey,
          data.get(input.art[slotKey].id).value?.toString(),
        ])
      ),
    [data]
  )
  const artifacts = useMemo(
    () =>
      artifactIdsBySlot &&
      (Object.values(artifactIdsBySlot)
        .map((artiId: string) => database.arts.get(artiId))
        .filter((arti) => arti) as ICachedArtifact[]),
    [artifactIdsBySlot, database.arts]
  )

  // Memoize Arts because of its dynamic onClick
  const artNanos = useMemo(
    () =>
      allArtifactSlotKeys.map((slotKey) => (
        <Grid item xs={1} key={slotKey}>
          <ArtifactCardNano
            showLocation
            slotKey={slotKey}
            artifactId={artifactIdsBySlot[slotKey]}
            mainStatAssumptionLevel={mainStatAssumptionLevel}
            onClick={() => {
              const oldId = equippedArtifacts[slotKey]
              const newId = artifactIdsBySlot[slotKey]!
              setNewOld({ oldId: oldId !== newId ? oldId : undefined, newId })
            }}
          />
        </Grid>
      )),
    [setNewOld, equippedArtifacts, mainStatAssumptionLevel, artifactIdsBySlot]
  )

  if (!oldData) return null
  const currentlyEquipped =
    allArtifactSlotKeys.every(
      (slotKey) =>
        artifactIdsBySlot[slotKey] ===
        oldData.get(input.art[slotKey].id).value?.toString()
    ) && data.get(input.weapon.id).value === oldData.get(input.weapon.id).value

  return (
    <CardLight>
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={600} />}
      >
        {newOld && (
          <CompareArtifactModal
            newOld={newOld}
            mainStatAssumptionLevel={mainStatAssumptionLevel}
            onClose={close}
            allowLocationsState={allowLocationsState}
          />
        )}
        <CardContent>
          <Box display="flex" gap={1} sx={{ pb: 1 }} flexWrap="wrap">
            {label !== undefined && (
              <SqBadge color="info">
                <Typography>
                  <strong>
                    {label}
                    {currentlyEquipped ? ' (Equipped)' : ''}
                  </strong>
                </Typography>
              </SqBadge>
            )}
            <ArtifactSetBadges
              artifacts={artifacts}
              currentlyEquipped={currentlyEquipped}
            />
            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
            />
            {extraButtonsLeft}
            <Button
              size="small"
              color="success"
              onClick={equipBuild}
              disabled={disabled || currentlyEquipped}
              startIcon={<Checkroom />}
            >
              Equip Build
            </Button>
            {extraButtonsRight}
          </Box>
          <Grid
            container
            spacing={1}
            sx={{ pb: 1 }}
            columns={{ xs: 2, sm: 3, md: 4, lg: 6 }}
          >
            <Grid item xs={1}>
              <WeaponCardNano
                showLocation
                weaponId={data.get(input.weapon.id).value!}
              />
            </Grid>
            {artNanos}
          </Grid>
          <DataContext.Provider value={statProviderContext}>
            <StatDisplayComponent />
          </DataContext.Provider>
        </CardContent>
      </Suspense>
    </CardLight>
  )
}

function CompareArtifactModal({
  newOld: { newId, oldId },
  mainStatAssumptionLevel,
  onClose,
  allowLocationsState,
}: {
  newOld: NewOld
  mainStatAssumptionLevel: number
  onClose: () => void
  allowLocationsState: AllowLocationsState
}) {
  const database = useDatabase()
  const {
    character: { key: characterKey },
  } = useContext(CharacterContext)
  const onEquip = useCallback(() => {
    if (
      !window.confirm('Do you want to equip this artifact to this character?')
    )
      return
    database.arts.set(newId, { location: charKeyToLocCharKey(characterKey) })
    onClose()
  }, [newId, database, characterKey, onClose])
  const newLoc = database.arts.get(newId)?.location ?? ''
  const newArtifact = useArtifact(newId)
  const oldArtifact = useArtifact(oldId)

  const deleteArtifact = useCallback(
    (id: string) => database.arts.remove(id),
    [database]
  )

  return (
    <ModalWrapper
      open={!!newId}
      onClose={onClose}
      containerProps={{ maxWidth: oldId ? 'md' : 'xs' }}
    >
      <CardDark>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 2,
          }}
        >
          {oldId && (
            <Box minWidth={320} display="flex" flexDirection="column" gap={1}>
              <ArtifactCard
                artifactId={oldId}
                onDelete={deleteArtifact}
                mainStatAssumptionLevel={mainStatAssumptionLevel}
                canEquip
                editorProps={{
                  disableSet: true,
                  fixedSlotKey: oldArtifact.slotKey,
                }}
              />
              <ArtInclusionButton id={oldId} />
            </Box>
          )}
          {oldId && <Box display="flex" flexGrow={1} />}
          {oldId && (
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button onClick={onEquip} sx={{ display: 'flex' }}>
                <ChevronRight sx={{ fontSize: 40 }} />
              </Button>
            </Box>
          )}
          {oldId && <Box display="flex" flexGrow={1} />}
          <Box minWidth={320} display="flex" flexDirection="column" gap={1}>
            <ArtifactCard
              artifactId={newId}
              onDelete={deleteArtifact}
              mainStatAssumptionLevel={mainStatAssumptionLevel}
              canEquip
              editorProps={{
                disableSet: true,
                fixedSlotKey: newArtifact?.slotKey,
              }}
            />
            {newArtifact && <ArtInclusionButton id={newId} />}
            {newLoc &&
              newLoc !== charKeyToLocCharKey(characterKey) &&
              allowLocationsState !== 'all' && (
                <ExcludeEquipButton locationKey={newLoc} />
              )}
            {newArtifact &&
              allArtifactSetExclusionKeys.includes(
                newArtifact.setKey as ArtSetExclusionKey
              ) && (
                <SetInclusionButton
                  setKey={newArtifact.setKey as ArtSetExclusionKey}
                />
              )}
          </Box>
        </CardContent>
      </CardDark>
    </ModalWrapper>
  )
}
function ArtInclusionButton({ id }: { id: string }) {
  const { t } = useTranslation('page_character_optimize')
  const {
    character: { key: characterKey },
  } = useContext(CharacterContext)
  const {
    buildSetting: { artExclusion },
    buildSettingDispatch,
  } = useBuildSetting(characterKey)
  const excluded = artExclusion.includes(id)
  const toggle = useCallback(
    () => buildSettingDispatch({ artExclusion: toggleArr(artExclusion, id) }),
    [id, artExclusion, buildSettingDispatch]
  )

  return (
    <BootstrapTooltip
      title={
        <Box>
          <Typography>{t`excludeArt.includeArtifactTip`}</Typography>
        </Box>
      }
      placement="top"
      arrow
    >
      <Button
        onClick={toggle}
        color={excluded ? 'secondary' : 'success'}
        size="small"
        startIcon={excluded ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
      >
        {t`excludeArt.includeArtifactButton`}
      </Button>
    </BootstrapTooltip>
  )
}
function ExcludeEquipButton({
  locationKey,
}: {
  locationKey: LocationCharacterKey
}) {
  const { t } = useTranslation('page_character_optimize')
  const {
    character: { key: characterKey },
  } = useContext(CharacterContext)
  const database = useDatabase()
  const characterSheet = getCharSheet(
    database.chars.LocationToCharacterKey(locationKey)
  )
  const {
    buildSetting: { excludedLocations },
    buildSettingDispatch,
  } = useBuildSetting(characterKey)
  const excluded = excludedLocations.includes(locationKey)
  const toggle = useCallback(
    () =>
      buildSettingDispatch({
        excludedLocations: toggleArr(excludedLocations, locationKey),
      }),
    [locationKey, excludedLocations, buildSettingDispatch]
  )

  return (
    <Button
      onClick={toggle}
      color={excluded ? 'secondary' : 'success'}
      size="small"
      startIcon={excluded ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
    >
      <span>
        {t`excludeChar.allowEquip`} <strong>{characterSheet.name}</strong>
      </span>
    </Button>
  )
}

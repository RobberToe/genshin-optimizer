import {
  useBoolState,
  useForceUpdate,
} from '@genshin-optimizer/common/react-util'
import { iconInlineProps } from '@genshin-optimizer/common/svgicons'
import {
  CardThemed,
  InfoTooltip,
  ModalWrapper,
  SqBadge,
} from '@genshin-optimizer/common/ui'
import { notEmpty, objKeyMap } from '@genshin-optimizer/common/util'
import { charKeyToLocCharKey } from '@genshin-optimizer/gi/consts'
import { useDatabase, useOptConfig } from '@genshin-optimizer/gi/db-ui'
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Settings,
  ShowChart,
} from '@mui/icons-material'
import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { useContext, useDeferredValue, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ArtifactLevelSlider from '../../../../../../Components/Artifact/ArtifactLevelSlider'
import CloseButton from '../../../../../../Components/CloseButton'
import { TeamCharacterContext } from '../../../../../../Context/TeamCharacterContext'
import { bulkCatTotal } from '../../../../../../Util/totalUtils'
import AllowChar from './AllowChar'
import ArtifactSetConfig from './ArtifactSetConfig'
import AssumeFullLevelToggle from './AssumeFullLevelToggle'
import ExcludeArt from './ExcludeArt'
import MainStatSelectionCard from './MainStatSelectionCard'

export default function ArtifactFilters({ disabled }: { disabled?: boolean }) {
  const { t } = useTranslation('page_character_optimize')
  const [show, onShow, onClose] = useBoolState(false)

  const database = useDatabase()
  const {
    teamChar: { optConfigId, key: characterKey },
    team,
    teamCharId,
  } = useContext(TeamCharacterContext)
  const buildSetting = useOptConfig(optConfigId)!
  const {
    mainStatAssumptionLevel,
    allowPartial,
    levelLow,
    levelHigh,
    useTeammateBuild,
  } = buildSetting

  //register changes in artifact database
  const [artsDirty, setArtsDirty] = useForceUpdate()
  useEffect(
    () => database.arts.followAny(setArtsDirty),
    [setArtsDirty, database]
  )

  const deferredArtsDirty = useDeferredValue(artsDirty)
  const deferredBuildSetting = useDeferredValue(buildSetting)
  const filteredArts = useMemo(() => {
    const {
      mainStatKeys,
      excludedLocations,
      artExclusion,
      levelLow,
      levelHigh,
      allowLocationsState,
      useExcludedArts,
      useTeammateBuild,
    } = deferredArtsDirty && deferredBuildSetting

    const artifactIds = Array.from(
      new Set(
        team.teamCharIds
          .filter((tcId) => tcId !== teamCharId)
          .filter(notEmpty)
          .map((tcId) => database.teamChars.getLoadoutArtifacts(tcId))
          .flatMap((arts) => Object.values(arts))
          .filter(notEmpty)
          .map(({ id }) => id)
      )
    )

    return database.arts.values.filter((art) => {
      if (!useExcludedArts && artExclusion.includes(art.id)) return false
      if (!useTeammateBuild && artifactIds.includes(art.id)) return false
      if (art.level < levelLow) return false
      if (art.level > levelHigh) return false
      const mainStats = mainStatKeys[art.slotKey]
      if (mainStats?.length && !mainStats.includes(art.mainStatKey))
        return false

      const locKey = charKeyToLocCharKey(characterKey)
      const unequippedStateAndEquippedElsewhere =
        allowLocationsState === 'unequippedOnly' &&
        art.location &&
        art.location !== locKey
      const customListStateAndNotOnList =
        allowLocationsState === 'customList' &&
        art.location &&
        art.location !== locKey &&
        excludedLocations.includes(art.location)
      if (unequippedStateAndEquippedElsewhere || customListStateAndNotOnList)
        return false

      return true
    })
  }, [
    deferredArtsDirty,
    deferredBuildSetting,
    team.teamCharIds,
    database.arts.values,
    database.teamChars,
    teamCharId,
    characterKey,
  ])

  const filteredArtIdMap = useMemo(
    () =>
      objKeyMap(
        filteredArts.map(({ id }) => id),
        (_) => true
      ),
    [filteredArts]
  )

  const { levelTotal, allowListTotal, excludedTotal, total } = useMemo(() => {
    const catKeys = {
      levelTotal: ['in'],
      allowListTotal: ['in'],
      excludedTotal: ['in'],
      total: ['in'],
    } as const
    return bulkCatTotal(catKeys, (ctMap) =>
      Object.entries(database.arts.data).forEach(([id, art]) => {
        const { level, location } = art
        const {
          levelLow,
          levelHigh,
          excludedLocations,
          allowLocationsState,
          artExclusion,
        } = deferredArtsDirty && deferredBuildSetting
        if (level >= levelLow && level <= levelHigh) {
          ctMap.levelTotal.in.total++
          if (filteredArtIdMap[id]) ctMap.levelTotal.in.current++
        }
        const locKey = charKeyToLocCharKey(characterKey)
        const allStateAndEquippedSomewhereElse =
          allowLocationsState === 'all' && location && location !== locKey
        const customListStateAndNotOnList =
          allowLocationsState === 'customList' &&
          location &&
          location !== locKey &&
          !excludedLocations.includes(location)
        if (allStateAndEquippedSomewhereElse || customListStateAndNotOnList) {
          ctMap.allowListTotal.in.total++
          if (filteredArtIdMap[id]) ctMap.allowListTotal.in.current++
        }
        if (artExclusion.includes(id)) {
          ctMap.excludedTotal.in.total++
          if (filteredArtIdMap[id]) ctMap.excludedTotal.in.current++
        }
        ctMap.total.in.total++
        if (filteredArtIdMap[id]) ctMap.total.in.current++
      })
    )
  }, [
    characterKey,
    database.arts.data,
    deferredArtsDirty,
    deferredBuildSetting,
    filteredArtIdMap,
  ])

  return (
    <>
      {/* Button to open modal */}
      <CardThemed bgt="light" sx={{ display: 'flex', width: '100%' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography>
            <strong>{t`artFilters.title`}</strong>
          </Typography>
          <Stack spacing={1}>
            <Typography>
              {t('excludeChar.artis')}{' '}
              <SqBadge color="success">
                {total.in}
                <ShowChart {...iconInlineProps} /> {t`artSetConfig.allowed`}
              </SqBadge>
            </Typography>
          </Stack>
        </CardContent>
        <Button
          onClick={onShow}
          disabled={disabled}
          color="info"
          sx={{ borderRadius: 0, flexShrink: 1, minWidth: 40 }}
        >
          <Settings />
        </Button>
      </CardThemed>

      <ModalWrapper open={show} onClose={onClose}>
        <CardThemed bgt="dark">
          <CardContent sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="h6">{t('artFilters.title')}</Typography>
            <SqBadge color="success">
              {total.in}
              <ShowChart {...iconInlineProps} /> {t`artSetConfig.allowed`}
            </SqBadge>

            <Box flexGrow={1} />

            <CloseButton onClick={onClose} />
          </CardContent>
          <Divider />
          <CardContent>
            <Grid container spacing={1} columns={12}>
              {/* 1 */}
              <Grid item xs={6} gap={1} display="flex" flexDirection="column">
                {/* Level Filter */}
                <CardThemed bgt="light">
                  <CardContent sx={{ display: 'flex', gap: 1 }}>
                    <Typography
                      sx={{ fontWeight: 'bold' }}
                    >{t`levelFilter`}</Typography>
                    <SqBadge color="info">{levelTotal.in}</SqBadge>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <ArtifactLevelSlider
                      levelLow={levelLow}
                      levelHigh={levelHigh}
                      setLow={(levelLow) =>
                        database.optConfigs.set(optConfigId, { levelLow })
                      }
                      setHigh={(levelHigh) =>
                        database.optConfigs.set(optConfigId, { levelHigh })
                      }
                      setBoth={(levelLow, levelHigh) =>
                        database.optConfigs.set(optConfigId, {
                          levelLow,
                          levelHigh,
                        })
                      }
                      disabled={disabled}
                    />
                  </CardContent>
                </CardThemed>
                {/* Main Stat Filters */}
                <CardThemed bgt="light">
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: 'bold' }}
                    >{t`mainStat.title`}</Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1}>
                      <AssumeFullLevelToggle
                        mainStatAssumptionLevel={mainStatAssumptionLevel}
                        setmainStatAssumptionLevel={(
                          mainStatAssumptionLevel: number
                        ) =>
                          database.optConfigs.set(optConfigId, {
                            mainStatAssumptionLevel,
                          })
                        }
                        disabled={disabled}
                      />
                      <InfoTooltip
                        title={
                          <Box>
                            <Typography variant="h6">{t`mainStat.levelAssTooltip.title`}</Typography>
                            <Typography>{t`mainStat.levelAssTooltip.desc`}</Typography>
                          </Box>
                        }
                      />
                    </Box>
                  </CardContent>
                  {/* main stat selector */}
                  <MainStatSelectionCard
                    disabled={disabled}
                    filteredArtIdMap={filteredArtIdMap}
                  />
                </CardThemed>
              </Grid>

              {/* 2 */}
              <Grid item xs={6} gap={1} display="flex" flexDirection="column">
                <ArtifactSetConfig disabled={disabled} />
                <AllowChar
                  disabled={disabled}
                  allowListTotal={allowListTotal.in}
                />
                <ExcludeArt
                  disabled={disabled}
                  excludedTotal={excludedTotal.in}
                />
                {/* Use teammates build */}
                <Button
                  fullWidth
                  startIcon={
                    useTeammateBuild ? <CheckBox /> : <CheckBoxOutlineBlank />
                  }
                  color={useTeammateBuild ? 'success' : 'secondary'}
                  onClick={() => {
                    database.optConfigs.set(optConfigId, {
                      useTeammateBuild: !useTeammateBuild,
                    })
                  }}
                  disabled={disabled}
                >
                  {t('useTeammateBuilds')}
                </Button>
                {/* Allow partial */}
                <Button
                  fullWidth
                  startIcon={
                    allowPartial ? <CheckBox /> : <CheckBoxOutlineBlank />
                  }
                  color={allowPartial ? 'success' : 'secondary'}
                  onClick={() =>
                    database.optConfigs.set(optConfigId, {
                      allowPartial: !allowPartial,
                    })
                  }
                  disabled={disabled}
                >
                  {t`allowPartial`}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </CardThemed>
      </ModalWrapper>
    </>
  )
}

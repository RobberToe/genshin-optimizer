import {
  maxConstellationCount,
  talentLimits,
} from '@genshin-optimizer/gi/consts'
import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import CardDark from '../../../Components/Card/CardDark'
import CardLight from '../../../Components/Card/CardLight'
import ConditionalWrapper from '../../../Components/ConditionalWrapper'
import DocumentDisplay from '../../../Components/DocumentDisplay'
import DropdownButton from '../../../Components/DropdownMenu/DropdownButton'
import { NodeFieldDisplay } from '../../../Components/FieldDisplay'
import { CharacterContext } from '../../../Context/CharacterContext'
import { DataContext } from '../../../Context/DataContext'
import type { TalentSheetElementKey } from '../../../Data/Characters/ICharacterSheet'
import { uiInput as input } from '../../../Formula'
import type { NumNode } from '../../../Formula/type'
import type { NodeDisplay } from '../../../Formula/uiData'
import useCharacterReducer from '../../../ReactHooks/useCharacterReducer'
import type { DocumentSection } from '../../../Types/sheet'
import { range } from '../../../Util/Util'

const talentSpacing = {
  xs: 12,
  sm: 6,
  md: 4,
}

export default function CharacterTalentPane() {
  const { t } = useTranslation('sheet_gen')
  const { character, characterSheet } = useContext(CharacterContext)
  const { data } = useContext(DataContext)
  const characterDispatch = useCharacterReducer(character.key)
  const skillBurstList = [
    ['auto', t('talents.auto')],
    ['skill', t('talents.skill')],
    ['burst', t('talents.burst')],
  ] as [TalentSheetElementKey, string][]
  const passivesList: [
    tKey: TalentSheetElementKey,
    tText: string,
    asc: number
  ][] = [
    ['passive1', t('unlockPassive1'), 1],
    ['passive2', t('unlockPassive2'), 4],
    ['passive3', t('unlockPassive3'), 0],
  ]
  const ascension = data.get(input.asc).value
  const constellation = data.get(input.constellation).value

  const theme = useTheme()
  const grlg = useMediaQuery(theme.breakpoints.up('lg'))
  const constellationCards = useMemo(
    () =>
      range(1, maxConstellationCount).map((i) => (
        <SkillDisplayCard
          talentKey={`constellation${i}` as TalentSheetElementKey}
          subtitle={t('constellationLvl', { level: i })}
          onClickTitle={() =>
            characterDispatch({
              constellation: i === constellation ? i - 1 : i,
            })
          }
        />
      )),
    [t, constellation, characterDispatch]
  )
  const constellationHeader = (
    <DropdownButton
      fullWidth
      title={t('constellationLvl', { level: constellation })}
      color="primary"
      sx={{ borderRadius: 0 }}
    >
      {range(0, maxConstellationCount).map((i) => (
        <MenuItem
          key={i}
          selected={constellation === i}
          disabled={constellation === i}
          onClick={() =>
            characterDispatch({
              constellation: i,
            })
          }
        >
          {t(`constellationLvl`, { level: i })}
        </MenuItem>
      ))}
    </DropdownButton>
  )

  return (
    <>
      <ReactionDisplay />
      <Grid container spacing={1}>
        {/* constellations for 4column */}
        {grlg && (
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            <CardLight>{constellationHeader}</CardLight>
            {constellationCards.map((c, i) => (
              <Box key={i} sx={{ opacity: constellation >= i + 1 ? 1 : 0.5 }}>
                {c}
              </Box>
            ))}
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={9} container spacing={1}>
          {/* auto, skill, burst */}
          {skillBurstList.map(([tKey, tText]) => (
            <Grid item key={tKey} {...talentSpacing}>
              <SkillDisplayCard talentKey={tKey} subtitle={tText} />
            </Grid>
          ))}
          {!!characterSheet.getTalentOfKey('sprint') && (
            <Grid item {...talentSpacing}>
              <SkillDisplayCard
                talentKey="sprint"
                subtitle={t('talents.altSprint')}
              />
            </Grid>
          )}
          {!!characterSheet.getTalentOfKey('passive') && (
            <Grid item {...talentSpacing}>
              <SkillDisplayCard talentKey="passive" subtitle="Passive" />
            </Grid>
          )}
          {/* passives */}
          {passivesList.map(([tKey, tText, asc]) => {
            const enabled = ascension >= asc
            if (!characterSheet.getTalentOfKey(tKey)) return null
            return (
              <Grid
                item
                key={tKey}
                style={{ opacity: enabled ? 1 : 0.5 }}
                {...talentSpacing}
              >
                <SkillDisplayCard talentKey={tKey} subtitle={tText} />
              </Grid>
            )
          })}
        </Grid>
        {/* constellations for < 4 columns */}
        {!grlg && (
          <Grid item xs={12} md={12} lg={3} container spacing={1}>
            <Grid item xs={12}>
              <CardLight>{constellationHeader}</CardLight>
            </Grid>
            {constellationCards.map((c, i) => (
              <Grid
                item
                key={i}
                sx={{ opacity: constellation >= i + 1 ? 1 : 0.5 }}
                {...talentSpacing}
              >
                {c}
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </>
  )
}
function ReactionDisplay() {
  const { data } = useContext(DataContext)
  const reaction = data.getDisplay().reaction as { [key: string]: NodeDisplay }
  return (
    <CardLight>
      <CardContent>
        <Grid container spacing={1}>
          {Object.entries(reaction)
            .filter(([_, node]) => !node.isEmpty)
            .map(([key, node]) => {
              return (
                <Grid item key={key}>
                  <CardDark>
                    <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                      <NodeFieldDisplay node={node} />
                    </CardContent>
                  </CardDark>
                </Grid>
              )
            })}
        </Grid>
      </CardContent>
    </CardLight>
  )
}

type SkillDisplayCardProps = {
  talentKey: TalentSheetElementKey
  subtitle: string
  onClickTitle?: (any) => any
}
function SkillDisplayCard({
  talentKey,
  subtitle,
  onClickTitle,
}: SkillDisplayCardProps) {
  const { t } = useTranslation('sheet_gen')
  const {
    character: { talent },
    characterSheet,
    characterDispatch,
  } = useContext(CharacterContext)
  const { data } = useContext(DataContext)

  const actionWrapperFunc = useCallback(
    (children) => (
      <CardActionArea onClick={onClickTitle}>{children}</CardActionArea>
    ),
    [onClickTitle]
  )

  const setTalentLevel = useCallback(
    (tKey: TalentSheetElementKey, newTalentLevelKey: number) =>
      characterDispatch({ talent: { ...talent, [tKey]: newTalentLevelKey } }),
    [talent, characterDispatch]
  )

  let header: Displayable | null = null

  if (talentKey in talent) {
    const levelBoost = data.get(
      input.total[`${talentKey}Boost`] as NumNode
    ).value
    const level = data.get(input.total[talentKey]).value
    const asc = data.get(input.asc).value

    header = (
      <DropdownButton
        fullWidth
        title={t('talentLvl', { level: level })}
        color={levelBoost ? 'info' : 'primary'}
        sx={{ borderRadius: 0 }}
      >
        {range(1, talentLimits[asc]).map((i) => (
          <MenuItem
            key={i}
            selected={talent[talentKey] === i}
            disabled={talent[talentKey] === i}
            onClick={() => setTalentLevel(talentKey, i)}
          >
            {t('talentLvl', { level: i + levelBoost })}
          </MenuItem>
        ))}
      </DropdownButton>
    )
  }
  const talentSheet = characterSheet.getTalentOfKey(talentKey)

  // Hide header if the header matches the current talent
  const hideHeader = (section: DocumentSection): boolean => {
    const headerAction = section.header?.action
    if (headerAction && typeof headerAction !== 'string') {
      const key: string = headerAction.props.children.props.key18
      return key.includes(talentKey)
    }
    return false
  }

  return (
    <CardLight sx={{ height: '100%' }}>
      {header}
      <CardContent>
        <ConditionalWrapper
          condition={!!onClickTitle}
          wrapper={actionWrapperFunc}
        >
          <Grid container sx={{ flexWrap: 'nowrap' }}>
            <Grid item>
              <Box
                component="img"
                src={talentSheet?.img}
                sx={{ width: 60, height: 'auto' }}
              />
            </Grid>
            <Grid item flexGrow={1} sx={{ pl: 1 }}>
              <Typography variant="h6">{talentSheet?.name}</Typography>
              <Typography variant="subtitle1">{subtitle}</Typography>
            </Grid>
          </Grid>
        </ConditionalWrapper>
        {/* Display document sections */}
        {talentSheet?.sections ? (
          <DocumentDisplay
            sections={talentSheet.sections}
            hideDesc
            hideHeader={hideHeader}
          />
        ) : null}
      </CardContent>
    </CardLight>
  )
}

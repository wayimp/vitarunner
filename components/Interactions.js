import { Box, SimpleGrid, Heading, Text, Stack } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'

import { WarningIcon } from '@chakra-ui/icons'

const Moderate = ({ text }) => {
  return (
    <ListItem fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
      <ListIcon as={WarningIcon} color='yellow.500' />
      {text}
    </ListItem>
  );
};

const Severe = ({ text }) => {
  return (
    <ListItem fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
      <ListIcon as={WarningIcon} color='red.500' />
      {text}
    </ListItem>
  );
};

export function Interactions() {
  return (
    <Box background={'#3C6474'} p={'5%'}>
      <Stack>
        <Heading fontWeight={400} textStyle='h1' as='h1' fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'white'} mb={6}>Methylene Blue Potential Interactions </Heading>
        <Heading fontWeight={400} textStyle='h1' as='h1' fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'white'} mb={6}>Are you taking any of the following?</Heading>
        <Heading fontWeight={400} textStyle='h4' as='h4' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color={'white'} mb={6}>Do not take if you are on SSRIs (anti-depressants or sleeping pills).</Heading>
        <Heading fontWeight={400} textStyle='h4' as='h4' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color={'white'} mb={6}>If you purchased by mistake, please contact us for a refund.</Heading>

        <List spacing={3}>
          <Severe text='5-hydroxytryptophan' />
          <Moderate text='albuterol' />
          <Severe text='alfentanil' />
          <Severe text='almotriptan' />
          <Severe text='amitriptyline' />
          <Moderate text='amobarbital' />
          <Severe text='amoxapine' />
          <Severe text='amphetamine' />
          <Severe text='apraclonidine ophthalmic' />
          <Moderate text='arformoterol' />
          <Severe text='atomoxetine' />
          <Severe text='benzphetamine' />
          <Moderate text='bitolterol' />
          <Moderate text='brimonidine ophthalmic' />
          <Moderate text='brimonidine topical' />
          <Severe text='buprenorphine' />
          <Severe text='bupropion' />
          <Severe text='buspirone' />
          <Moderate text='butabarbital' />
          <Moderate text='butalbital' />
          <Severe text='butorphanol' />
          <Severe text='carbamazepine' />
          <Moderate text='chloroquine' />
          <Severe text='citalopram' />
          <Severe text='clomipramine' />
          <Moderate text='clonazepam' />
          <Severe text='cocaine nasal' />
          <Severe text='cocaine topical' />
          <Severe text='codeine' />
          <Severe text='cyclobenzaprine' />
          <Moderate text='deserpidine' />
          <Severe text='desipramine' />
          <Severe text='desvenlafaxine' />
          <Severe text='deutetrabenazine' />
          <Severe text='dexfenfluramine' />
          <Severe text='dexmethylphenidate' />
          <Severe text='dextroamphetamine' />
          <Severe text='dextromethorphan' />
          <Severe text='dezocine' />
          <Severe text='diethylpropion' />
          <Severe text='dihydroergotamine' />
          <Moderate text='dipivefrin ophthalmic' />
          <Moderate text='disulfiram' />
          <Moderate text='dobutamine' />
          <Severe text='dolasetron' />
          <Severe text='dopamine' />
          <Severe text='doxapram' />
          <Severe text='doxepin' />
          <Severe text='doxepin topical' />
          <Severe text='doxylamine' />
          <Moderate text='droxidopa' />
          <Severe text='duloxetine' />
          <Severe text='eletriptan' />
          <Severe text='entacapone' />
          <Severe text='ephedrine' />
          <Moderate text='ephedrine nasal' />
          <Moderate text='epinephrine' />
          <Moderate text='epinephrine ophthalmic' />
          <Moderate text='epinephrine topical' />
          <Severe text='ergotamine' />
          <Severe text='escitalopram' />
          <Severe text='esketamine' />
          <Severe text='fenfluramine' />
          <Severe text='fentanyl' />
          <Moderate text='flortaucipir F 18' />
          <Severe text='fluoxetine' />
          <Severe text='fluvoxamine' />
          <Moderate text='formoterol' />
          <Severe text='frovatriptan' />
          <Severe text='gepirone' />
          <Severe text='granisetron' />
          <Moderate text='guanadrel' />
          <Moderate text='guanethidine' />
          <Severe text='heroin' />
          <Moderate text='house dust mite allergen extract' />
          <Severe text='hydrocodone' />
          <Severe text='hydromorphone' />
          <Severe text='imipramine' />
          <Moderate text='indacaterol' />
          <Severe text='iobenguane I 131' />
          <Severe text='isocarboxazid' />
          <Moderate text='isoetharine' />
          <Moderate text='isoniazid' />
          <Moderate text='isoproterenol' />
          <Moderate text='ketamine' />
          <Severe text='lasmiditan' />
          <Moderate text='levalbuterol' />
          <Moderate text='levmetamfetamine nasal' />
          <Severe text='levodopa' />
          <Severe text='levomethadyl acetate' />
          <Severe text='levomilnacipran' />
          <Severe text='levorphanol' />
          <Severe text='linezolid' />
          <Severe text='lisdexamfetamine' />
          <Moderate text='lithium' />
          <Severe text='lorcaserin' />
          <Severe text='ma huang' />
          <Severe text='maprotiline' />
          <Severe text='mazindol' />
          <Severe text='meperidine' />
          <Severe text='mephentermine' />
          <Moderate text='mephobarbital' />
          <Moderate text='metaproterenol' />
          <Severe text='metaraminol' />
          <Severe text='methadone' />
          <Severe text='methamphetamine' />
          <Moderate text='methohexital' />
          <Moderate text='methoxamine' />
          <Severe text='methyldopa' />
          <Severe text='methylphenidate' />
          <Moderate text='metoclopramide' />
          <Moderate text='midodrine' />
          <Severe text='milnacipran' />
          <Severe text='mirtazapine' />
          <Moderate text='mixed grass pollens allergen extract' />
          <Severe text='morphine' />
          <Severe text='morphine liposomal' />
          <Severe text='nalbuphine' />
          <Moderate text='naphazoline nasal' />
          <Moderate text='naphazoline ophthalmic' />
          <Severe text='naratriptan' />
          <Severe text='nefazodone' />
          <Moderate text='norepinephrine' />
          <Severe text='nortriptyline' />
          <Severe text='oliceridine' />
          <Moderate text='olodaterol' />
          <Severe text='ondansetron' />
          <Severe text='opicapone' />
          <Severe text='opium' />
          <Severe text='oxcarbazepine' />
          <Severe text='oxycodone' />
          <Moderate text='oxymetazoline nasal' />
          <Moderate text='oxymetazoline ophthalmic' />
          <Moderate text='oxymetazoline topical' />
          <Severe text='oxymorphone' />
          <Severe text='ozanimod' />
          <Severe text='palonosetron' />
          <Severe text='paroxetine' />
          <Moderate text='peanut allergen powder' />
          <Severe text='pegulicianine' />
          <Severe text='pentazocine' />
          <Moderate text='pentobarbital' />
          <Severe text='phendimetrazine' />
          <Severe text='phenelzine' />
          <Moderate text='phenobarbital' />
          <Severe text='phentermine' />
          <Severe text='phenylephrine' />
          <Moderate text='phenylephrine nasal' />
          <Moderate text='phenylephrine ophthalmic' />
          <Moderate text='phenylephrine topical' />
          <Severe text='phenylpropanolamine' />
          <Moderate text='pirbuterol' />
          <Moderate text='primidone' />
          <Severe text='propoxyphene' />
          <Moderate text='propylhexedrine nasal' />
          <Severe text='protriptyline' />
          <Severe text='pseudoephedrine' />
          <Moderate text='racepinephrine' />
          <Moderate text='ragweed pollen allergen extract' />
          <Severe text='rasagiline' />
          <Moderate text='rauwolfia serpentina' />
          <Severe text='remifentanil' />
          <Moderate text='reserpine' />
          <Moderate text='ritodrine' />
          <Severe text='rizatriptan' />
          <Severe text='safinamide' />
          <Moderate text='salmeterol' />
          <Moderate text='secobarbital' />
          <Severe text='selegiline' />
          <Severe text='sertraline' />
          <Severe text='sibutramine' />
          <Severe text='solriamfetol' />
          <Severe text="st. john's wort" />
          <Severe text='sufentanil' />
          <Severe text='sumatriptan' />
          <Severe text='tapentadol' />
          <Moderate text='terbutaline' />
          <Severe text='tetrabenazine' />
          <Severe text='tetrahydrozoline nasal' />
          <Moderate text='tetrahydrozoline ophthalmic' />
          <Moderate text='thiopental' />
          <Moderate text='timothy grass pollen allergen extract' />
          <Severe text='tolcapone' />
          <Severe text='tramadol' />
          <Severe text='tranylcypromine' />
          <Severe text='trazodone' />
          <Severe text='trimipramine' />
          <Severe text='tryptophan' />
          <Severe text='tyrosine' />
          <Severe text='valbenazine' />
          <Severe text='venlafaxine' />
          <Severe text='vilazodone' />
          <Severe text='viloxazine' />
          <Severe text='vortioxetine' />
          <Moderate text='xylometazoline nasal' />
          <Severe text='zolmitriptan' />
        </List>
      </Stack>
    </Box>
  );
}
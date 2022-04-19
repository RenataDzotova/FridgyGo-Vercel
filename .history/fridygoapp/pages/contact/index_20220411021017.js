//import {useRouter}
import styled from 'styled-components';
import {PageHeader, SecondPageHeader, ThirdPageHeader, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import List, {BoxedContent} from '../../comps/lists';
import {phoneNumbers} from '../../data/donatelists';
import {DispImg} from '../../comps/backgroundimg';

export const NormalText = styled.p`
    color: #723800;
    text-align: start;
    display: inline
`

export default function ContactPage(){

  return <div class="donatepage">
      <div class="donatecontent">
      <PageHeader>Contact Us</PageHeader>
      <SecondPageHeader>Phone Numbers</SecondPageHeader>
      <ThirdPageHeader>FoodBank:</ThirdPageHeader><NormalText>604-535-2423</NormalText>

    <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText>
    <NormalText><BoldNormalText>Step 1:</BoldNormalText>Pick a Location</NormalText>
    <NormalText><BoldNormalText>Step 2:</BoldNormalText>See the container below the map to see what items are needed for the fridge</NormalText>
    <NormalText><BoldNormalText>Step 3:</BoldNormalText>Check our rules below to review our list of accepted and non-accepted items</NormalText>
    <NormalText><BoldNormalText>Step 4:</BoldNormalText>Donate the needed item to the fridge in person</NormalText>

      </div>
  </div>
}

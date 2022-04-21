import styled from 'styled-components';
import {ThirdPageHeader} from '../comps/text'; 

const CreatorImage = styled.img`
    border-radius: 50%;
    width:100px;
    height:100px;
`;
// const CreatorName = styled.h3`
//     margin-top: -10px
// `;
// const PhoneNumbers = styled.span`
//     margin-top: -10px
// `;


export default function CreatorName({txt=["Item#1", "Item#2", "Item#3"]}, {img="/donatebackground.svg"}, ){
    return <div>
    <CreatorImage src={img}></CreatorImage>
    <ThirdPageHeader>{txt}</ThirdPageHeader>
    </div>
}
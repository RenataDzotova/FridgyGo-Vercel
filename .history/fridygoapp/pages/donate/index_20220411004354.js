//import {useRouter}
import{useRouter} from 'next/router';
import {PageHeader, NormalText, NormalCenteredText, BoldNormalText} from '../../comps/text'; 

export default function Categories(){
  const r = useRouter();
  const {page, type} = r.query

  return <div>
    <PageHeader>Donate</PageHeader>
    <NormalText></NormalText>
    <NormalCenteredText><BoldNormalText>Step 1:</BoldNormalText>Pick a Location</NormalCenteredText>
    <NormalCenteredText><BoldNormalText>Step 2:</BoldNormalText>See the container below the map to see what items are needed for the fridge</NormalCenteredText>
    <NormalCenteredText><BoldNormalText>Step 3:</BoldNormalText>Check our rules below to review our list of accepted and non-accepted items</NormalCenteredText>
    <NormalCenteredText><BoldNormalText>Step 4:</BoldNormalText>Donate the needed item to the fridge in person</NormalCenteredText>
    <div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat1.route
          }
        })
      }>
        Hello,
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat2.route
          }
        })
      }>
        Heelo,
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat3.route
          }
        })
      }>
        Hello,
      </div>

      {type === 'fo' && <div>
        Show the food images
        <Display>Hello</Display>
        </div>  
      }
      {type === 'an' && <div>
        Show the animal images
        <Display arr={cat2Imgs}></Display>
        </div>  
      }
      {type === 'sho' && <div>
        Show the shoes images
        <Display arr={cat3Imgs}></Display>
        </div>  
      }

    </div>
  {/* <textarea></textarea> */}
  </div>
}


/*Conditional Statements shortcuts
1. ? :
2. &&
3. ||


if the boolean condition is true, use value1, else use value2
value can be both a data type (like int, string, array etc) and a UI Element (<div>)
1. boolean condition ? value : value2

if the boolean condition us true, then use value
2. boolean condition && value

if value1 can be used, then use it, otherwise use value2
3. value1 || value2


*/




// import styled from 'styled-components';


// export default function Donate(){
//     return <div class="donatepage">
//     <div class="donatecontent">
//         <img class="homebutton" onClick="" src="/homebutton.png"></img>
//         <h1>Donate</h1>
//         <p>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</p>
//         <p class="donatetext"><span class="steps">Step 1:</span> Pick a Location</p>
//         <p class="donatetext"><span class="steps">Step 2:</span> See the container below the map to see what items are needed for the fridge</p>
//         <p class="donatetext"><span class="steps">Step 3:</span> Check our rules below to review our list of accepted and non-accepted items</p>
//         <p class="donatetext"><span class="steps">Step 4:</span> Donate the needed item to the fridge in person</p>
//         <h2>Rules for Donations</h2>
//         <div class="rulesfordonations donatetext">
//             <h3>Sanitize your hands before and after handling food in the fridge</h3>
//             <br></br>
//             <h3>Accepted???</h3>
//             <ul>
//                 <li>Fresh produce</li>
//                 <li>Non-perishable items</li>
//                 <li>Canned and dried goods</li>
//                 <li>Baked goods</li>
//                 <li>Prepackaged goods</li>
//                 <li>Dairy products</li>
//                 <li>Beverages (non-alcoholic)</li>
//             </ul>
//             <h3>Not Accepted???</h3>
//             <ul>
//                 <li>Unsealed or half-consumed food</li>
//                 <li>Meat, poultry, or fish (raw/cooked)</li>
//                 <li>Any Homecooked meals</li>
//                 <li>Food the poses known health risks (ie. Salmonella)</li>
//                 <li>Alcohol</li>
//             </ul>
//         </div>
//     </div>
    
// </div>
// }




// import styled from 'styled-components';
// const NormalText = styled.div`
//     color: #723800
// `
// const BoldedText = styled.div`
//     font-weight:900;
//     color: #723800
// `;

// export default function Donate(){
//     return <div>
//     <NormalText>Donate</NormalText>
//     <NormalText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</NormalText>
//     <NormalText><BoldedText>Step 1:</BoldedText> Pick a Location</NormalText>
// </div>
// }




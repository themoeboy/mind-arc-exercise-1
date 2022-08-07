import styled from 'styled-components';
import Card from './Card'
import CardList from './Card/CardList';

const ParentContainer = styled.div`
${props => (props.view === 'mobile') ?  'height:auto' :
'height: 51%'};
`;

const CardContainer = styled.div`
    display:flex;
    width: 100%;
    ${props => (props.view === 'mobile') ?  'height: auto; flex-direction:column; gap: 5vh; padding: 25px 0px; align-items: center;  ' :
     'height: 100%; flex-direction:row;  align-items: center; justify-content: center; padding: 25px 10px 25px 10px; box-sizing: border-box; flex-wrap:wrap; gap: 5vh;' };
`

const LowerContainer = ({ view }) => {
    return (    
    <ParentContainer>
        <CardContainer view={view}>
        {CardList.map((card) =>  <Card text={card.text} view={view} />)}
        </CardContainer>
      </ParentContainer>  
    )

}

export default LowerContainer
import styled from 'styled-components';


const ParentContainer = styled.div`
  width:100%;
  ${props => (props.view === 'mobile') ?  'height:315px' : 'height: 49%'};
  display:flex;
  flex-direction:column;
  background-color: #8F8F8F;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  font-size: ${props => (props.view === 'mobile') ? '40px' : '60px' };
  font-weight:bold;
  letter-spacing: 7px;
  color: white;
  ${props => (props.view === 'mobile') ?  'padding-bottom: 20px;' : 'padding-bottom: 40px;' };
  ${props => (props.view === 'mobile') ?  'padding-left: 50px; padding-right: 50px;' : '' };
  text-align: center;
`;

const SubHeaderContainer = styled.div`
  color: white;
  width:auto;
  letter-spacing: 4px;
  font-size: ${props => (props.view === 'mobile') ? '20px' : '25px'};
  ${props => (props.view === 'mobile') ?  'padding-left: 5px; padding-right: 5px;' : '' };
  text-align: center;
`;

const UpperContainer = ({view}) => {
    
    return (    
    <ParentContainer>
        <HeaderContainer view={view}> {"Hello Developer!"} </HeaderContainer>
        <SubHeaderContainer view={view}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit" }</SubHeaderContainer>
    </ParentContainer>  
    )

}

export default UpperContainer
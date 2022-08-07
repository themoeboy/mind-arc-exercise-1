import styled from 'styled-components';
import ReadMoreButton from './ReadMoreButton'

const ParentContainer = styled.div`
  width: 327px;
  ${props => (props.view === 'mobile') ?  'height: auto ':  'height: 46vh'};
  border: thin solid #CCCCCC;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  display:flex;
  flex-direction: column;
 
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${props => (props.view === 'mobile') ?  'height: 215px;':  'height: 43%;'}
    border-radius: 10px;
    background-color: #CCCCCC;
    box-sizing: border-box;
    justify-content: center;
`;

const DimensionLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 25px;
    color: #969696;
`;

const WaterMark = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #969696;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 15px;
  ${props => (props.view === 'mobile') ?  'word-spacing: 6px; line-height: 20px;':  'word-spacing: 6px; line-height: 20px;'};

`;

const ReadMoreContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const Card = ({text, view}) => {
    return (
        <ParentContainer view={view}>
            <ImageContainer view={view}>
             <DimensionLabel>
                {"400 x 300"}
             </DimensionLabel>
            </ImageContainer>
            <TextContainer>
                {text}
            </TextContainer>
            <ReadMoreContainer>
                <ReadMoreButton/>
            </ReadMoreContainer>
        </ParentContainer>   
    )
}

export default Card 
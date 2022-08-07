import styled from 'styled-components';

const ParentContainer = styled.div`
    display:flex;
    width: 150px;
    height: 40px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: medium solid black;
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;
    :hover {
        color: white;
        background-color: black;  
        transition-delay:0.2s;
    }
`;

const ReadMoreButton = ({}) => {
    return (
        <ParentContainer>
           {"READ MORE"}
        </ParentContainer>   
    )
}

export default ReadMoreButton
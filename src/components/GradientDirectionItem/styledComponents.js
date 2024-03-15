// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
    color: #1e293b;
    border: 1px solid :
    font-size: 20px;
    border-radius: 16px #ffffff79;
    cursor: pointer;
    height: 40px;
    width: 100px;
    border-radius: 16px;
    font-weight: 600;
    opacity: ${props =>
      props.directionId === props.activeDirectionId ? '1' : '0.5'};
`

export const ListItem = styled.li`
    
    
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 16px;

`

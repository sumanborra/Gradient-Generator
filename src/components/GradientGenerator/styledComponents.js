// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    
    background-image: linear-gradient(${props => {
      const value = 'to ' + props.value
      const color1 = props.colorF
      const color2 = props.colorS
      const result = `${value}, ${color1}, ${color2}`
      return result
    }});
    height: 100vh;
    padding: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Heading = styled.h1`
    font-family:"Roboto";
    color: #ffffff;
    font-size: 36px;
    font-weight: 600;
    
    text-align: center;

`
export const ListContainer = styled.div``
export const UlOrderedListContainer = styled.ul`
    list-style-type:none;
    padding:0px;
    flex-wrap:wrap;
    display: flex
`
export const ParagrapDirectioItems = styled.p`
    font-family: "Roboto";
    color:#ededed;
    font-size: 24px;
    text-align: center;
    
`
export const FormContainer = styled.form``
export const InputdivContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputElement = styled.input`
    background-color: transparent;
    height: 40px;
    width: 120px;
    border-width: 0px;
    border-radius: 12px;
    
`
export const ParagrapLabel = styled.p`
    text-align: center;
`
export const CustomButton = styled.button`
    background-color:#00c9b7;
    color: #1e293b;
    border: none;
    border-radius: 12px;
    font-family: "Roboto";
    font-size: 20px;
    height: 40px;
    width: 150px;
    cursor:pointer;
    font-weight: 600;
`
export const InputMainContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

`
export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`

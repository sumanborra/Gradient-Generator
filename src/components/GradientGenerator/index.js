import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  UlOrderedListContainer,
  ParagrapDirectioItems,
  ListContainer,
  FormContainer,
  InputElement,
  InputdivContainer,
  ParagrapLabel,
  CustomButton,
  InputMainContainer,
  ButtonContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    value: gradientDirectionsList[0].value,
    inputColorFirst: '#8ae323',
    inputColorSecond: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  changeFisrtColor = event => {
    this.setState({inputColorFirst: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({inputColorSecond: event.target.value})
  }

  submitFormDetails = event => {
    const {inputColorFirst, inputColorSecond} = this.state
    event.preventDefault()
    this.setState({firstColor: inputColorFirst, secondColor: inputColorSecond})
  }

  buttonChanged = (id, value) => {
    this.setState({activeDirectionId: id, value: value})
  }
  render() {
    const {
      activeDirectionId,
      value,
      inputColorFirst,
      inputColorSecond,
      firstColor,
      secondColor,
    } = this.state
    return (
      <MainContainer
        value={value}
        colorF={firstColor}
        colorS={secondColor}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ListContainer>
          <ParagrapDirectioItems>Choose Direction</ParagrapDirectioItems>
          <UlOrderedListContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                gradientDirectionsList={each}
                key={each.directionId}
                activeDirectionId={activeDirectionId}
                buttonChanged={this.buttonChanged}
              />
            ))}
          </UlOrderedListContainer>
        </ListContainer>
        <ListContainer>
          <ParagrapDirectioItems>Pick the Colors</ParagrapDirectioItems>
          <FormContainer onSubmit={this.submitFormDetails}>
            <InputMainContainer>
              <InputdivContainer>
                <ParagrapLabel htmlFor="color1">{inputColorFirst}</ParagrapLabel>
                <br />
                <InputElement
                  value={inputColorFirst}
                  type="color"
                  id="color1"
                  onChange={this.changeFisrtColor}
                />
              </InputdivContainer>
              <InputdivContainer>
                <ParagrapLabel htmlFor="color2">{inputColorSecond}</ParagrapLabel>
                <br />
                <InputElement
                  value={inputColorSecond}
                  type="color"
                  id="color2"
                  onChange={this.changeSecondColor}
                />
              </InputdivContainer>
            </InputMainContainer>
            <ButtonContainer>
              <CustomButton type="submit">Generate</CustomButton>
            </ButtonContainer>
          </FormContainer>
        </ListContainer>
      </MainContainer>
    )
  }
}
export default GradientGenerator

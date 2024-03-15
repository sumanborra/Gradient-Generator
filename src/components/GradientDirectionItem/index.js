// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GeadientDirectionItem = props => {
  const {gradientDirectionsList, activeDirectionId, buttonChanged} = props
  const {directionId, value, displayText} = gradientDirectionsList
  const changeButton = () => {
    buttonChanged(directionId, value)
  }
  return (
    <ListItem key={directionId}>
      <CustomButton
        type="button"
        directionId={directionId}
        activeDirectionId={activeDirectionId}
        onClick={changeButton}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}
export default GeadientDirectionItem

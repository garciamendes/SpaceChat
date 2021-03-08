// Local
import {
  ContainerChat,
  ImageContent,
  Username,
  ContentUser,
  ContentChat,
  IsMessage,
} from './styles'

export default function Contacts({ image, name, amountPost }) {
  return (
    <ContainerChat>
      <ImageContent src={image} />
      <ContentUser>
        <Username>{name}</Username>
      </ContentUser>
      <ContentChat>
        {
          amountPost <= 0 ? (<></>) : (
            <>
              <IsMessage>
                <span>{amountPost}</span>
              </IsMessage>
            </>
          )
        }
      </ContentChat>
    </ContainerChat >
  )
}

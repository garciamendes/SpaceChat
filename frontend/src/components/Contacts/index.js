// Local
import {
  ContainerChat,
  ImageContent,
  Username,
  ContentUser,
  RecentPost,
  ContentChat,
  Hours,
  IsMessage,
} from './styles'

export default function Contacts({ image, name, recent, hours, amountPost }) {
  return (
    <ContainerChat>
      <ImageContent src={image} />
      <ContentUser>
        <Username>{name}</Username>
        <RecentPost>{recent}</RecentPost>
      </ContentUser>
      {/* <ContentChat>
        <Hours>{hours}</Hours>
        {
          amountPost <= 0 ? (<></>) : (
            <>
              <IsMessage>
                <span>{amountPost}</span>
              </IsMessage>
            </>
          )
        }
      </ContentChat> */}
    </ContainerChat >
  )
}

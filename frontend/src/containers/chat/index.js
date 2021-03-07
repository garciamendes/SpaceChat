// Local
import {
  ContainerChat,
  Chat,
  Audio
} from './styles'

// Third
import { BsPaperclip, BsFillMicFill } from 'react-icons/bs'
import { GrEmoji } from 'react-icons/gr'


function chat() {
  return (
    <ContainerChat>
      <BsPaperclip size={20} color='#fff'/>
      <Chat>
        <input type='text' placeholder='Messege' />
        <GrEmoji size={20} color='#222222' className='icon' />
      </Chat>
      <Audio>
        <BsFillMicFill size={20} color='#ffffff' className='icon'/>
      </Audio>
    </ContainerChat>
  )
}

export default chat
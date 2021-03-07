// Local
import {
  ContainerChat,
  Chat,
  Audio,
  Interface,
  Line
} from './styles'

// Third
import { BsPaperclip, BsFillMicFill } from 'react-icons/bs'
import { GrEmoji } from 'react-icons/gr'
import { IoCallSharp } from 'react-icons/io5'
import { IoIosVideocam } from 'react-icons/io'
import { FaComment } from 'react-icons/fa'


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
      <Interface>
        <IoCallSharp size={20} color='c6c6c6' className='icon'/>
        <FaComment size={20} color='#4AD5FF' className='icon'/>
        <IoIosVideocam size={20} color='c6c6c6' className='icon'/>
        <Line />
      </Interface>
        
    </ContainerChat>
  )
}

export default chat
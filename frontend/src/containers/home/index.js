// React
import { useState } from 'react'

// Third party
import { BsToggleOff } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5'
import { FiUser, FiUsers, FiMessageCircle } from 'react-icons/fi'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import { BsPaperclip, BsFillMicFill } from 'react-icons/bs'

// Local
import {
  ContainerHome,
  Header,
  Logo,
  InputSearch,
  ContentSearch,
  ContentNotifications,
  ContentMyContact,
  ImageContent,
  ContainerContact,
  ContainerNavigate,
  ContainerChatMain,
  ScreenChat
} from './styles'
import NoImage from '../../static/images/no-image.png'
import SpaceLogo from '../../static/images/space.svg'
import Contacts from '../../components/Contacts'
import Groups from '../../components/Groups'

export default function Home() {

  // Json contacts
  const contacts = [
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 1 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 5 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 10 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 2 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 9 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 5 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 50 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 5 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 5 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 0 },
  ]

  const groups = [
    { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 20 },
    { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 7 },
    { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 18 },
    { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 10 },
  ]

  const [selectTab, setSelectTab] = useState('chat')

  function handledClickTab(name) {
    if (selectTab !== name) {
      setSelectTab(name)
    }
  }

  return (
    <ContainerHome>
      <Header>
        <div className='logo-content'>
          <div>
            <ImageContent src={SpaceLogo} />
            <Logo>SpaceChat</Logo>
          </div>
        </div>

        <ContentSearch>
          <InputSearch placeholder='Search' />

          <ContentNotifications className='notification-content'>
            <div>
              <BsToggleOff className='toggle-notification' />
              <span>Notifications</span>
            </div>
            <IoMdSettings className='settings' size={40} />
          </ContentNotifications>

        </ContentSearch>

        <ContentMyContact>
          <ImageContent src={NoImage} />
          <span>Osmar Levin</span>
        </ContentMyContact>
      </Header>

      <ContainerChatMain>
        <ContainerContact>
          <header className='header-select'>
            <button
              className={`btn-select ${selectTab === 'chat' && 'active'}`}
              onClick={() => handledClickTab('chat')}>
              <FiUser size={20} className='icon-btn' />
            Contact
          </button>

            <button
              className={`btn-select ${selectTab === 'group' && 'active'}`}
              onClick={() => handledClickTab('group')}>
              <FiUsers size={20} className='icon-btn' />
            Group
          </button>
          </header>

          <div className='content-list-contact'>
            <div>
              {
                selectTab === 'chat' ?
                  contacts.map((contact, index) => (
                    <Contacts
                      key={index}
                      image={contact.image}
                      name={contact.name}
                      recent={contact.recent}
                      hours={contact.hours}
                      amountPost={contact.numberMessages}
                    />
                  ))
                  :
                  groups.map((group, index) => (
                    <Groups
                      key={index}
                      image={group.image}
                      name={group.name}
                      amountPost={group.numberMessages}
                    />
                  ))
              }
            </div>
          </div>

          <ContainerNavigate>
            <IoCallOutline size={35} className='icon-nav'/>
            <FiMessageCircle size={35} className='icon-nav message'/>
            <IoVideocamOutline size={35} className='icon-nav'/>
          </ContainerNavigate>

        </ContainerContact>
        
        <ScreenChat>
          
          <div className='container-input'>

            <BsPaperclip size={35} className='anex-icon'/>

            <div className='icon-and-input'>
              <input className='send-message' placeholder='Message...'/>
              <HiOutlineEmojiHappy size={35} className='icon-emoji'/>
            </div>

            <span className='content-mic'>
              <BsFillMicFill size={25} className='mic-icon'/>
            </span>

          </div>

        </ScreenChat>

      </ContainerChatMain>

    </ContainerHome>
  )
}

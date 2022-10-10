// React
import { useState } from 'react'

// Third party
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5'
import { FiUser, FiUsers, FiMessageCircle } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { BsPaperclip, BsFillMicFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import Lottie from 'react-lottie'

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
  ScreenChat,
  ContainerScreenChat,
  SendMessages,
  ContentMessages
} from './styles'
import NoImage from '../../static/images/no-image.png'
import SpaceLogo from '../../static/images/space.svg'
import Contacts from '../../components/Contacts'
import Groups from '../../components/Groups'
import ContentEmpty from '../../static/lottie/empty.json'

export default function HomeChat() {

  const [notification, setNotification] = useState(false)

  // Json contacts
  const contacts = [
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 1 },
    { name: 'Kaiya Rhiel Madsen', recent: 'Olá', image: NoImage, hours: '11:40', numberMessages: 5 },
  ]

  const groups = [
    // { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 20 },
    // { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 7 },
    // { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 18 },
    // { name: 'Kaiya Rhiel Madsen', image: NoImage, numberMessages: 10 },
  ]

  function handleNotification() {
    setNotification(notification ? false : true)
  }

  const [selectTab, setSelectTab] = useState('chat')

  function handledClickTab(name) {
    if (selectTab !== name) {
      setSelectTab(name)
    }
  }

  const AnimationContentEmpty = {
    loop: true,
    autoplay: true,
    animationData: ContentEmpty,
    renderSettings: {
      preserveAspectRatio: 'xMidYmid slice'
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

          <div className='container-search-and-profile'>
            <InputSearch placeholder='Search' />
            <div className='profile'>
              <img src={NoImage} />
              <div className='username'>
                <h4>Kaiya Rhiel Madson</h4>
                <span>Online</span>
              </div>

            </div>
          </div>

          <ContentNotifications className='notification-content'>
            <div>
              {notification ? (
                <BsToggleOn
                  className='toggle-notification'
                  onClick={handleNotification}
                />
              ) : (
                <BsToggleOff
                  className='toggle-notification'
                  onClick={handleNotification}
                />
              )

              }
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
                (
                  contacts.length === 0 ? (
                    <>
                      <Lottie
                        options={AnimationContentEmpty}
                        height={200}
                        width={200}
                      />
                      <span className='span-no-contacts'>No contacts found</span>
                    </>
                  ) : (
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
                  )
                ) : (
                  groups.length === 0 ? (
                    <>
                      <Lottie
                        options={AnimationContentEmpty}
                        height={200}
                        width={200}
                      />
                      <span className='span-no-contacts'>No groups found</span>
                    </>
                  ) : (
                    groups.map((group, index) => (
                      <Groups
                        key={index}
                        image={group.image}
                        name={group.name}
                        amountPost={group.numberMessages}
                      />
                    ))
                  )
                )
              }
            </div>
          </div>

          <ContainerNavigate>
            <IoCallOutline size={35} className='icon-nav' />
            <FiMessageCircle size={35} className='icon-nav message' />
            <IoVideocamOutline size={35} className='icon-nav' />
          </ContainerNavigate>

        </ContainerContact>

        <ContainerScreenChat>
          <ScreenChat>

            <ContentMessages>

              <div className='left-messages all-box-messages'>
                <p className='text-messages'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                </p>
                <span className='hours left'>10:23</span>
              </div>

              <div className='right-messages all-box-messages'>
                <p className='text-messages right'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a

                </p>
                <span className='hours'>10:23</span>
              </div>

              <div className='left-messages all-box-messages'>
                <p className='text-messages'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                </p>
                <span className='hours left'>10:23</span>
              </div>

              <div className='right-messages all-box-messages'>
                <p className='text-messages right'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a

                </p>
                <span className='hours'>10:23</span>
              </div>


            </ContentMessages>

          </ScreenChat>

          <SendMessages>
            <div className='container-input'>

              <BsPaperclip size={35} className='anex-icon' />

              <div className='icon-and-input'>
                <input className='send-message' placeholder='Message...' />
                <HiOutlineEmojiHappy size={35} className='icon-emoji' />
              </div>

              <span className='content-mic'>
                <IoMdSend size={25} className='mic-icon' />
              </span>

            </div>
          </SendMessages>
        </ContainerScreenChat>

      </ContainerChatMain>

    </ContainerHome>
  )
}

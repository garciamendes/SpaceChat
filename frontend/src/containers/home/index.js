// React
import { useEffect, useState, useRef } from 'react'

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

export default function HomeChat({ socket }) {
  // State
  const [message, setMessage] = useState('')
  const [typingStatus, setTypingStatus] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [selectTab, setSelectTab] = useState('chat')
  const [notification, setNotification] = useState(false)

  // Hooks
  const lastMessageRef = useRef(null)

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers([...users, data]));
  }, [socket, users])

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket])

  useEffect(() => {
    lastMessageRef.curret?.scrollInteView({ behavior: 'smooth' })
  }, [messages])

  function handleNotification() {
    setNotification(notification ? false : true)
  }

  function handledClickTab(name) {
    if (selectTab !== name) {
      setSelectTab(name)
    }
  }

  const handleTyping = () =>
    socket.emit('typing', 'Digitando...')

  const handleSendMessage = (e) => {
    e.preventDefault()
    const name = localStorage.getItem('name')
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()

    if (message.trim() && name) {
      socket.emit('message', {
        text: message,
        name,
        time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id
      })
    }

    setMessage('')
  }

  const AnimationContentEmpty = {
    loop: true,
    autoplay: true,
    animationData: ContentEmpty,
    renderSettings: {
      preserveAspectRatio: 'xMidYmid slice'
    }
  }


  console.log(users);
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
                    users.length === 0 ? (
                      <>
                        <Lottie
                          options={AnimationContentEmpty}
                          height={200}
                          width={200}
                        />
                        <span className='span-no-contacts'>No contacts found</span>
                      </>
                    ) : (
                      users.map((contact) => (
                        <Contacts
                          key={contact.socketID}
                          image={NoImage}
                          name={contact?.name}
                          recent={
                            typingStatus ? typingStatus :
                              messages[messages.length - 1]?.name === localStorage.getItem('name') &&
                              messages[messages.length - 1]?.text
                          }
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
            <FiMessageCircle size={35} className='icon-nav message' />
          </ContainerNavigate>

        </ContainerContact>

        <ContainerScreenChat>
          <ScreenChat ref={lastMessageRef}>
            <ContentMessages>
              {messages.map((message) =>
                message.name === localStorage.getItem('name') ? (
                  <div className='right-messages all-box-messages'>
                    <p className='text-messages right'>{message.text}</p>
                    <span className='hours right'>{message.time}</span>
                  </div>
                ) : (
                  <div className='left-messages all-box-messages'>
                    <p className='text-messages'>{message.text}</p>
                    <span className='hours left'>{message.time}</span>
                  </div>
                )
              )}
            </ContentMessages>
          </ScreenChat>

          <SendMessages>
            <div className='container-input'>

              <div className='content_icons'>
                <BsPaperclip size={25} className='anex-icon' />
                <HiOutlineEmojiHappy size={25} className='icon-emoji' />
              </div>

              <div className='icon-and-input'>
                <input
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className='send-message'
                  onKeyDown={handleTyping}
                  placeholder='Message...' />
              </div>

              <button className='content-send' onClick={handleSendMessage}>
                <IoMdSend size={25} className='mic-icon' />
              </button>

            </div>
          </SendMessages>
        </ContainerScreenChat>

      </ContainerChatMain>

    </ContainerHome>
  )
}

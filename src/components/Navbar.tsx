import { useEffect } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import avatar from "../data/avatar.jpg"
import { Cart, Chat, Notification, UserProfile, } from "."
import { useStateContext } from '../contexts/ContextProvider';

interface Props {
  title: string,
  customFunct?: () => void | undefined,
  icon?: React.ReactElement,
  color?: string,
  dotColor?: string,
}
const NavButton = ({ title, icon, color, customFunct, dotColor }: Props) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button type='button' onClick={customFunct} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2" />
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const { isClicked, handleClick, setActiveMenu, setScreenSize, screenSize, currentColor } = useStateContext()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [setScreenSize])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize, setActiveMenu])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title='Menu' color={currentColor}
        customFunct={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton title='Cart'
          color={currentColor}
          customFunct={() => handleClick("cart")}
          icon={<FiShoppingCart />}
        />

        <NavButton title='Chat'
          dotColor='#03C9D7'
          color={currentColor}
          customFunct={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />
        <NavButton title='Notifications'
          dotColor='#03C9D7'
          color={currentColor}
          customFunct={() => handleClick("notification")}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"}
          position="BottomCenter">
          <div className='flex items-center 
          gap-2 cursor-pointer p-1
           hover:bg-light-gray rounded-lg'
            onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt=" avatar"
              className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400
             text-14'>Hi,</span> {" "}
              <span className='text-gray-400 
              font-bold ml-1 text-14'>Joe</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar


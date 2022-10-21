
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
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
  customFunct?: () => null | void | undefined,
  icon?: React.ReactElement,
  color?: string,
  dotColor?: string,
}

const NavButton = ({ title, icon, color, customFunct, dotColor }: Props) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button type='button' onClick={customFunct} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2">
          {icon}
        </span>
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const { activeMenu, handleChangePrevActiveMenu } = useStateContext()
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title='Menu' color='blue' customFunct={() => handleChangePrevActiveMenu()} icon={<AiOutlineMenu />} />
    </div>
  )
}

export default Navbar


import { createContext, useContext, useState } from "react"

export interface InitContextData {
    // chat: boolean,
    // cart: boolean,
    // userProfile: boolean,
    // notification: boolean,
    activeMenu: boolean,
    handleChange: () => void,
    handleChangePrevActiveMenu: () => void,


}

const initialState = {
    // chat: false,
    // cart: false,
    // userProfile: false,
    // notification: false,
    activeMenu: true,
    handleChange: () => null,
    handleChangePrevActiveMenu: () => null,
}

const Context = createContext<InitContextData>(initialState)

type Props = {
    children: JSX.Element,
};

export const ContextProvider = ({ children }: Props) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const handleChange = () => {
        return setActiveMenu(false)
    }
    const handleChangePrevActiveMenu = () => {
        return setActiveMenu((prevActive) => !activeMenu)
    }

    return (
        <Context.Provider
            value={
                {
                    activeMenu,
                    handleChange,
                    handleChangePrevActiveMenu

                }
            }
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)
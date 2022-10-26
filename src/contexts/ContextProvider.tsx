import React, { useState } from "react"
const initialState = {
    cart: false,
    click: false,
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: false,
}

let unDefinedScreen: number;

const useValue = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState<number>(unDefinedScreen);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value)
        localStorage.setItem("themeMode", e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color: string) => {
        setCurrentColor(color)
        localStorage.setItem("colorMode", color)
        setThemeSettings(false)
    }



    const handleClick = (click: string) => {
        return (setIsClicked({ ...initialState, [click]: true }))
    }
    return { isClicked, setIsClicked, handleClick, setActiveMenu, activeMenu, screenSize, setScreenSize, setCurrentColor, currentColor, setCurrentMode, currentMode, setColor, setMode, themeSettings, setThemeSettings }
}
type Props = {
    children: JSX.Element,
};
export const StateContext = React.createContext({} as ReturnType<typeof useValue>)

export const StateContextProvider = ({ children }: Props) => {
    return (
        <StateContext.Provider value={useValue()}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => React.useContext(StateContext)
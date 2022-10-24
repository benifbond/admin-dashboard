import React from "react"
const initialState = {
    cart: false,
    click: false,
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: false,
}

const useValue = () => {
    const [activeMenu, setActiveMenu] = React.useState(true);
    const [isClicked, setIsClicked] = React.useState(initialState)

    const handleClick = (click: string) => {
        return (setIsClicked({ ...initialState, [click]: true }))
    }
    return { isClicked, setIsClicked, handleClick, setActiveMenu, activeMenu }
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
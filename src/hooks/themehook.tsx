import {createContext, type JSX, type ReactNode, useContext, useState} from "react";


interface AuthContextProps {
    theme: string | undefined;
    setTheme: (theme: string) => void;
}

const themeContext = createContext<AuthContextProps | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(themeContext);

    if (!context) {
        throw new Error('useTheme must be used within the same context');
    }
    return context;
}


export default function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
    const [theme, setTheme ] = useState<string | undefined>('light');
    return (
        <themeContext.Provider value={{theme, setTheme}} >
            {children}
        </themeContext.Provider>
    )
}
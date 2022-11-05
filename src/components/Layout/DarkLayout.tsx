import { FC } from "react";

interface PropsLayout {
    children: JSX.Element|JSX.Element[];
}

export const DarkLayout: FC <PropsLayout> = ({children}) => {
  return (
    <div style={{
        backgroundColor: "rgba(0,0,0,0,3)",
        borderRadius: "5px",
        padding: "10px",
    }}>
        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

//redux run on the client side.so redux can't directly access layout. and that's why we create provider page

"use client"

//import store provider from 
import StoreProvider from "@/state/redux"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return(
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers
//redux run on the client side.so redux can't directly access layout. and that's why we create provider page
//then cover children in layout with storeProvider
//so redux will aplly globally

"use client"

//import storeProvider from redux state
import StoreProvider from "@/state/redux"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return(
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers
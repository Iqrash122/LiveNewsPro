import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeLayout from "./home";

const Home = ()=>{
    return(
        <>
            <StatusBar backgroundColor="#051643" style="light" />
            <SafeAreaProvider>
                <HomeLayout />
            </SafeAreaProvider>
            
        </>
    )
}

export default Home;
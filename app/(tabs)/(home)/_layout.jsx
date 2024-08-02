// import { Stack } from "expo-router";
// const HomeLayout = ()=>{
//     return(
//         <>  
            
//             <Stack screenOptions={{headerShown:false}}>
//                 <Stack.Screen name="index" />
          


                

//             </Stack>
//         </>
//     )
// }

// export default HomeLayout;



import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default HomeLayout;

import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import ChildA from './src/screen/ChildA'
export const myContext = createContext()


const App = () => {
  const name = " hello dimpal"
  return (
    <>
      {/* provider */}
      <myContext.Provider value={"hiiiiii"}>
        {/* simple */}
        {/* <View>
      <ChildA name={" hello dimpal"}/>
      </View> */}
        <View>
          <ChildA />
        </View>
      </myContext.Provider>
    </>
  )
}


export default App
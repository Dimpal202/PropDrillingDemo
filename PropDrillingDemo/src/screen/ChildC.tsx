import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { myContext } from '../../App'


const ChildC = ({ name }) => {
    const names = useContext(myContext)
    return (
        // simple data pas
        // <View >
        //     <Text>{name}</Text>
        // </View>


        //consumer
        <myContext.Consumer>
            {(mname) => {
                return (
                    <View>
                        <Text>{mname}</Text>
                    </View>
                )
            }}
        </myContext.Consumer>


        // usecontext
        // <View>
        //     <Text>{names}</Text>
        // </View>


    )
}


export default ChildC
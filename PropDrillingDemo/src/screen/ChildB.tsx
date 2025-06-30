
import { View, Text } from 'react-native'
import React from 'react'
import ChildC from '../screen/ChildC'


const ChildB = ({ name }) => {
    return (
        <View>
            <ChildC name={name} />
        </View>
    )
}


export default ChildB
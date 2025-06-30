import { View, Text } from 'react-native'
import React from 'react'
import ChildB from '../screen/ChildB'


const ChildA = ({ name }) => {
    return (
        <View>
            <ChildB name={name} />
        </View>
    )
}


export default ChildA
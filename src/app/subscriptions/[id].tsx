import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>(); // Replace with the actual subscription ID you want to display
  return (
    <View>
      <Text>SubscriptionDetails : {id}</Text>
      <Link href="/">Go Home</Link>
    </View>
  )
}

export default SubscriptionDetails
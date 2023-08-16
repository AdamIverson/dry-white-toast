import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const about = () => {
  return (
    <>
      <Text>about</Text>
      <Link href="/">Go Home</Link>
    </>
  )
}

export default about;
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type currencyButtonProps = PropsWithChildren<{
    name : string,
    flag : string
}>

const CurrencyButton = (props : currencyButtonProps) : JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.flag}><Text>{props.flag}</Text></View>
      <View style={styles.countr as StyleProp<ViewStyle>} ><Text style={{color:"black"}}>{props.name}</Text></View>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttonContainer:{
      alignItems:'center'
    },
    flag:{
      fontSize:28,
      color:'#FFFFFF',
      marginBottom: 8
    },
    countr:{
        fontSize:28,
        color:'#2d3436',
    }
})
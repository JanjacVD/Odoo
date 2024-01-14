import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const SearchStyle = StyleSheet.create({
    container: {
        width:'100%',
    },
    input: {
        borderWidth:1,
        borderRadius:30,
        paddingVertical:5
    }
})

export const FormInputStyle = StyleSheet.create({
    container: {
        width:'100%',
        marginTop:8
    },
    input: {
        borderWidth:1,
        borderRadius:12,
        paddingVertical:5,
        paddingHorizontal:10,
        color:COLORS.BLACK,
    },
    select:{
        borderWidth:1,
        borderRadius:12,
        paddingVertical:10,
        paddingHorizontal:10,
        color:COLORS.BLACK,
    },
    selectValue:{
        fontSize:14
    },
    placeholder: {
        fontSize: 14,
        color: COLORS.GRAY
    },
    label:{
        fontSize:18,
        marginBottom:5
    },
    error:{
        color:COLORS.RED
    },
    listItem:{
        borderBottomWidth:1,
        paddingVertical:8,
        paddingHorizontal:16
    }
})

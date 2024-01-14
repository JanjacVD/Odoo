import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const modalStyle = StyleSheet.create({
    closeButton:{
        backgroundColor:COLORS.RED,
        width:35,
        height:35,
        borderRadius:18,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        marginRight:20,
        marginTop:10
    }
})
import { createStackNavigator } from "@react-navigation/stack";
import { SaleStackParamList } from "./typesAndData";
import SaleOrderList from "./components/SaleOrderList";

export default function Sale(){
    const Stack = createStackNavigator<SaleStackParamList>()
    return <Stack.Navigator>
        <Stack.Screen name="details" component={SaleOrderList}/>
        <Stack.Screen name="list" component={SaleOrderList}/>
    </Stack.Navigator>
}



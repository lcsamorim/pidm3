import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUserScreen from './addUserScreen';
import EditUserScreen from './EditUserScreen';
import ListUserScreen from './listUserScreen';

const MainStack = createStackNavigator()

function MainStackScreens(){
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='ListUserScreen'>
                <MainStack.Screen
                name='AddUserScreen'
                component={AddUserScreen}
                options={{title: 'Add New User'}}
                />
                <MainStack.Screen
                name='EditUserScreen'
                component={EditUserScreen}
                options={{title: 'Edit User'}}
                />
                <MainStack.Screen
                name='ListUserScreen'
                component={ListUserScreen}
                options={{title: 'List Users'}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainStackScreens
import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './registration_styles';

export default function RegistrationScreen(){
 //define state
const [fullname, setFullname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] =  useState('');

//functions
const onSignUpPress = () => {
    console.log('clicked on sign up button');
}

const onFooterLinkPress = () => {
    console.log('clicked on already have an account, go to login page')
}


//define UI structure
    return(
        <View style={registration_styles.container}>
            <KeyboardAwareScrollView
             style={{flex: 1,width: '100%'}}
             keyboardShouldPersistTaps="always">
            <Image
            styles={styles.logo}
            source={require('../../../assets/icon.png')}
            />
            <TextInput
            styles={styles.input}
            placeholder="Full Name"
            placeholderColor="white"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            />

            <TextInput
            styles={styles.input}
            placeholder="email"
            placeholderColor="white"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            />

            <TextInput
            styles={styles.input}
            placeholder="Password"
            placeholderColor="white"
            onChangeText={(text) => setPassword(text)}
            value={passWord}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            />

            <TextInput
            styles={styles.input}
            placeholder="Confirm password"
            placeholderColor="white"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            />
            
            <TouchableOpacity style={styles.button} onPress={() => onSignUpPress()}>
                 <Text style={styles.buttonTitle}>Signup</Text>
            </TouchableOpacity> 

            <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
            
            
            </KeyboardAwareScrollView>
            </View>

    )
}

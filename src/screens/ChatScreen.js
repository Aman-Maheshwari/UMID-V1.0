import React from 'react';
import { GiftedChat,InputToolbar,SystemMessage ,Bubble,Send} from 'react-native-gifted-chat'; // 0.3.0
import{
  View,Text,TouchableOpacity,Image,BackHandler,Alert
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import CryptoJS from "react-native-crypto-js";
import Ionicons from 'react-native-vector-icons/Ionicons';

class ChatScreen extends React.Component{


  componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  this.on(message => {
    let bytes  = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  message.text=originalText;
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))}
  );
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = () => {
  Alert.alert(
    'Exit App',
    'Exiting the application?', [{
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    }, {
      text: 'OK',
      onPress: () => BackHandler.exitApp()
    },], {
    cancelable: false
  }
  )
  return true;
}
get ref() {
  return firebase.database().ref('chatroom/'+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp+'/');
}
      
parse = snapshot => {
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const timestamp = new Date(numberStamp);
  const message = {
    _id,
    timestamp,
    text,
    user,
  };
  return message;
};

on = callback =>
this.ref
  .limitToLast(20)
  .on('child_added', snapshot => callback(this.parse(snapshot)));

get timestamp() {
return firebase.database.ServerValue.TIMESTAMP;
}
// send the message to the Backend
send = messages => {
for (let i = 0; i < messages.length; i++) {
  const { text, user } = messages[i];
  let ciphertext = CryptoJS.AES.encrypt(text ,'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=').toString();
  console.log("cipher text");
  text=ciphertext
  const message = {
    text,
    user,
    timestamp: this.timestamp,
  };
  this.append(message);
}

firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).update({
  timestamp: firebase.database.ServerValue.TIMESTAMP
})
  firebase.database().ref("ChatsUnderYou/alerts/"+this.props.navigation.state.params.phonenumber+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).update({
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
};

componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = () => {
Alert.alert(
  'Exit App',
  'Exiting the application?', [{
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel'
  }, {
    text: 'OK',
    onPress: () => BackHandler.exitApp()
  },], {
  cancelable: false
}
)
return true;
}


append = message => this.ref.push(message);

state = {
  messages: [],
};

static navigationOptions = ({ navigation }) => ({
  title: (navigation.state.params || {}).name || 'Chat!',
});


get user() {
  return {
    name: this.props.nameuser,
    _id: this.props.phonenumberuser,
  };
}



render() {
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          elevation:3,
          width:wp("100%")
        }}
      />
    );
  };

  const  renderSend = (props) => {
    return (
      <View style={{elevation:0 ,width:wp("10%"),marginRight:wp("4%")}}>
      <Send {...props}>
       
          {/* <Ionicons
            name="md-send"
            size={29}
          /> */}
          {/* <Text>Send</Text> */}
      </Send>
      </View>
    );
  }
  const renderTime=(props) =>{
    return (
        <Time
        {...props}
            textStyle={{
                right: {
                    color: Colors.snow,
                    fontFamily: 'Montserrat-Light',
                    fontSize: 14
                },
                left: {
                    color: Colors.snow,
                    fontFamily: 'Montserrat-Light',
                    fontSize: 14
                }
            }}
        />
    );
}

const renderBubble=props => {
// console.log(new Date(props.currentMessage.timestamp*1000).getTime());
    return (
      <View>
        
            <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#fff',
          },
          left:{
            color:"#000"

          }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#E1F5FE',
            borderRadius:10
          },
          right: {
            backgroundColor: '#0091EA',
            borderRadius:10
          },
        }}
        style={{
          width:wp('50%')
        }}

      />
       
      </View>
     
    );
  }

  return (
    <View style={{flex:1}}>
      <View style={{ height: hp('7%'), backgroundColor: "#0290ea" }}>
                  {/* <Icon name="AntDesign" size={30} color="white" style={{ marginLeft: 10, marginTop: 10 }} />
                   */}
                         <TouchableOpacity onPress={
      ()=>{
      this.props.navigation.navigate('Chats') 
      // console.log("lkjfdh")         
      }

    }
    style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
    >
            <Image
    source={require('../assets/back.png')}
    style={{position:'absolute',top:3,left:10,zIndex:2,}}
    />      
    </TouchableOpacity>
              </View>
    <GiftedChat
      messages={this.state.messages}
      onSend={this.send}
      user={this.user}
      // showUserAvatar={true}
      renderInputToolbar={props => customtInputToolbar(props)}
      // renderCustomView={props=>renderCustomView(props)}
      renderBubble={props=>renderBubble(props)}
      renderTime={props=>renderTime(props)}
      renderSend={props=>renderSend(props)}
      renderUsernameOnMessage={true} 
      // alwaysShowSend={true}
    />
    </View>
  );
}


//   componentWillUnmount() {
//     this.off();
//   }
// }
}

const mapStateToProps = (state) =>{
console.log(state)
return {
  upload_status : state.textUpload,
  nameuser: state.nameuser,
  phonenumberuser: state.phonenumberuser, 
}
}

export default connect(mapStateToProps)(ChatScreen)
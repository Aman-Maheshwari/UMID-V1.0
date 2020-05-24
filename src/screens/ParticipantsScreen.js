// import * as React from 'react';
// import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import * as firebase from 'firebase'
// import { db } from '../routes/config';
// import { connect } from 'react-redux';
// import food from '../assets/food.json';
// import medical from '../assets/medical.json';
// import { Directions } from 'react-native-gesture-handler';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer,createSwitchNavigator } from 'react-navigation';


// class ParticipantsScreen extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             dataSource: [],
//         }
//         this.arrayholder = []
//     }
//     ListViewItemSeparator = () => {
//     //Item sparator view
//     return (
//         <View
//         style={{
//             width: '100%',
//             borderBottomWidth: 0.25,
//             borderBottomColor: "grey",
//         }}
//         />
//     );
//     };
//     componentDidMount(){
//         firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').on("child_added", snapshot=> {
//             this.state.dataSource.push(snapshot.val())
//             this.arrayholder.push(snapshot.val())
//             this.setState({
//                 isLoading:false
//             })
//         })
//     }
    
//     render() {
//         console.log("this.props.navigation",this.props.navigation)
//         if(this.state.isLoading == false){
//         return(
//         <View style={styles.container}>
//                   <View style={{ flex:0.1, backgroundColor: "#0290ea" ,flexDirection: 'row'}}>
//               <View style={{width:wp("10%"),justifyContent:'center'}}>
//               <TouchableOpacity onPress={
//                 () => {
//                   this.props.navigation.navigate('ChatScreen',{name:this.props.navigation.state.params.name,phonenumber:this.props.navigation.state.params.phonenumber,timestamp:this.props.navigation.state.params.timestamp})
//                 }

//               }
//                 style={{marginLeft:wp("3%")}}
//               >
//                 <Image
//                   source={require('../assets/back.png')}
//                 />
//               </TouchableOpacity>
//             </View>
//         <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column',marginRight:wp("10%")}}>
//               <Text style={{color:'black',fontSize:hp("2%"),fontWeight:'bold',alignSelf:"center",textAlign:'center',width:wp("70%")}}>Participants</Text>
//         </View>
//         </View>
//         <View style={{flex:0.9}}>
//         <FlatList
//             data={this.state.dataSource}
//             ItemSeparatorComponent={this.ListViewItemSeparator}
//             renderItem={({item}) =>(
//                 <View>
//                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,margin:wp("4%"),height:hp("8%")}}>
//                 <View style={{width:wp("80%")}}>
//                     <Text numberOfLines= {2} adjustsFontSizeToFit style={{fontSize:18,fontWeight:'bold'}}>{item.Ownername}</Text>
//                     {item.owner=="true" ? <Text style={{fontSize:14}}>Admin</Text>:<Text />}
//                 </View>
//                 {this.props.phonenumberuser == item.phonenumberuser ? 
//                 <View>
//                     <Image source={require('../assets/ios-call-grey.png')}/>
//             </View>
//             :
//             <View>
//                     <TouchableOpacity onPress={() => {
//                         Linking.openURL(`tel:${item.phonenumberuser}`)
//                         }}>
//                         <Image source={require('../assets/ios-call.png')}/>
//                     </TouchableOpacity>
//                 </View>}
//             </View>
//             </View>
//             )}
//             keyExtractor={(item, index) => index}
//         />
//         </View>
//         </View>
//         );
//                     }
//                     else{
//                         return null;
//                     }
//     }
// }

// const mapStateToProps = (state) =>{
//     console.log(state)
//     return {
//       upload_status : state.textUpload,
//       nameuser: state.nameuser,
//       phonenumberuser: state.phonenumberuser, 
//     }
//     }
    
//     export default connect(mapStateToProps)(ParticipantsScreen)
// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//     },
//     TextInput: {
//         alignSelf:'center',
//         width: '90%',
//         borderColor: 'grey',
//         borderWidth: 1,
//         opacity: .6,
//         borderRadius: 10,
//         height: hp('5%'),
//         paddingLeft: 10,
//     },
// })


import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase'
import { db } from '../routes/config';
import { connect } from 'react-redux';
import food from '../assets/food.json';
import medical from '../assets/medical.json';
import { Directions } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';


class ParticipantsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
        this.arrayholder = []
    }
    ListViewItemSeparator = () => {
    //Item sparator view
    return (
        <View
        style={{
            width: '100%',
            borderBottomWidth: 0.25,
            borderBottomColor: "grey",
        }}
        />
    );
    };
    componentDidMount(){
        firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').on("child_added", snapshot=> {
            this.state.dataSource.push(snapshot.val())
            this.arrayholder.push(snapshot.val())
            this.setState({
                isLoading:false
            })
        })
    }
    
    render() {
        console.log("this.props.navigation",this.props.navigation)
        if(this.state.isLoading == false){
        return(
        <View style={styles.container}>
                  <View style={{ flex:0.1, backgroundColor: "#0290ea" ,flexDirection: 'row'}}>
              <View style={{width:wp("10%"),justifyContent:'center'}}>
              <TouchableOpacity onPress={
                () => {
                  this.props.navigation.navigate('ChatScreen',{name:this.props.navigation.state.params.name,phonenumber:this.props.navigation.state.params.phonenumber,timestamp:this.props.navigation.state.params.timestamp})
                }

              }
                style={{marginLeft:wp("3%")}}
              >
                <Image
                  source={require('../assets/back.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: wp("10%")}}>
            <Text style={{ color: 'white', fontSize: hp("2.5%"), fontWeight: 'bold',width: wp("70%") }}>Participants</Text>
          </View>
        </View>
        <View style={{flex:0.9}}>
        <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({item}) =>(
                <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,margin:wp("4%"),height:hp("7%")}}>
                <View style={{width:wp("80%")}}>
                    <Text numberOfLines= {2} adjustsFontSizeToFit style={{fontSize:18,fontWeight:'bold'}}>{item.Ownername}</Text>
                    {item.owner=="true" ? <Text style={{fontSize:14}}>Admin</Text>:null}
                </View>
                {this.props.phonenumberuser == item.phonenumberuser ? 
                <View>
                    <Image source={require('../assets/ios-call-grey.png')}/>
            </View>
            :
            <View>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL(`tel:${item.phonenumberuser}`)
                        }}>
                        <Image source={require('../assets/ios-call.png')}/>
                    </TouchableOpacity>
                </View>}
            </View>
            </View>
            )}
            keyExtractor={(item, index) => index}
        />
        </View>
        </View>
        );
                    }
                    else{
                        return null;
                    }
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
      upload_status : state.textUpload,
      nameuser: state.nameuser,
      phonenumberuser: state.phonenumberuser, 
    }
    }
    
    export default connect(mapStateToProps)(ParticipantsScreen)
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    TextInput: {
        alignSelf:'center',
        width: '90%',
        borderColor: 'grey',
        borderWidth: 1,
        opacity: .6,
        borderRadius: 10,
        height: hp('5%'),
        paddingLeft: 10,
    },
})
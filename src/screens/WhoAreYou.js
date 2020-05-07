// import React, { Component } from 'react';
// import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// {/* Added MarginLEFT to vendor button for center align, just change when any problems */}
// export default class WhoYouAre extends Component {

//     state = {
//         selection: null,
//         selectionComplete:null,
//         isready : false,
//         // typeshop : null,
//     }
//     renderCustomerSelection = () => {
//         this.setState({
//             selection: "consumer",
//             isready : false
//         })

//     }
//     renderVendorSelection = () => {
//         this.setState({
//             selection: "vendor",
//             isready:false
//         })
//     }
//     selectInput = (text) =>{
//         console.log("text=" ,text);
//         this.setState({
//             selectionComplete:text,
//             isready:true,
//         })
//         // console.log(this.state);
        
//     }

//     renderSelection = () => {
//         var data=''
//         if (this.state.selection == "consumer") {

//             if(this.state.selectionComplete == "individual"){
//                 return (
//                     <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
//                         <View style={{ flexDirection: "column" }}>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                                 <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={this.renderVendorSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                                 <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                     <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                     <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                                 </View>
//                                 <View style={{height: hp('8%'), width: wp('20%') }}>
//                                     <TouchableOpacity onPress={()=>{
//                                         console.log(this.state.selectionComplete)
//                                         this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
//                                     }}>
//                                        <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} /> 
//                                     </TouchableOpacity>
                                    
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
    
//                 );                 
//             }
//             else if(this.state.selectionComplete == "organization"){
//                 return (
//                     <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
//                         <View style={{ flexDirection: "column" }}>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                                 <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={this.renderVendorSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                                 <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                     <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                     <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                                 </View>
//                                 <View style={{height: hp('8%'), width: wp('20%') }}>
//                                 <TouchableOpacity onPress={()=>{
//                                     console.log(this.state.selectionComplete)
//                                         this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
//                                     }}>
//                                     <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
    
//                 ); 
//             }
//             else{
//             return (
//                 <View style={{ height: hp('28%'), widht: wp('100%') }}>

//                     <View style={{ flexDirection: "column" }}>
//                         <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                             <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                 </View>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={this.renderVendorSelection}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                             <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
//                                 </View>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                             <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                 <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                 <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                             </View>
//                             <View style={{height: hp('8%'), width: wp('20%') }}>
//                                 <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//             );                
//             }
        

//         } else {

//             if(this.state.selectionComplete == "kirana"){
//                 // this.setState({typeshop: this.state.selectionComplete})
//                 return (
//                     <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
//                         <View style={{ flexDirection: "column" }}>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                                 <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={this.renderVendorSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                                 <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                     <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                     <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                                 </View>
//                                 <View style={{height: hp('8%'), width: wp('20%') }}>
//                                 <TouchableOpacity onPress={()=>{
//                                     console.log(this.state.selectionComplete)
//                                         this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
//                                     }}>
//                                     <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
    
//                 );
//             }
//             else if(this.state.selectionComplete == "chemist"){
//                 // this.setState({typeshop: this.state.selectionComplete})
//                 return (
//                     <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
//                         <View style={{ flexDirection: "column" }}>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                                 <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={this.renderVendorSelection}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
//                                     </View>
//                                 </TouchableOpacity>
    
//                                 <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
//                                     <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
//                                         <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                                 <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                     <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                     <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                                 </View>
//                                 <View style={{height: hp('8%'), width: wp('20%') }}>
//                                 <TouchableOpacity onPress={()=>{
//                                         console.log(this.state.selectionComplete)
//                                         this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
//                                     }}>
//                                     <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
    
//                 );
//             }
//             else{
//             return (
//                 <View style={{ height: hp('28%'), widht: wp('100%') }}>

//                     <View style={{ flexDirection: "column" }}>
//                         <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
//                             <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                 </View>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={this.renderVendorSelection}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                             <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
//                                 </View>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
//                                 <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
//                                     <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                             <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                 <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                 <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                             </View>
//                             <View style={{height: hp('8%'), width: wp('20%') }}>
//                                 <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//             );                
//             }

//         }
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                       <TouchableOpacity onPress={
//         ()=>{
//         this.props.navigation.navigate('Login') 
//         console.log("lkjfdh")         
//         }

//       }
//       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
//       >
//               <Image
//       source={require('../assets/back.png')}
//       style={{position:'absolute',top:15,left:10,zIndex:2,}}
//       />      
//       </TouchableOpacity>
//                 <View style={styles.backgroundContainerUpper}>
//                     {/* SVG goes here */}
//                     {/* need image of logo only, not the background */}
//                     <View style={styles.imgcont}>
//                         <Image source={require("../assets/png.png")} style={styles.logo} />
//                         {/* <Text style={{fontSize:24,color:'white'}}>{this.state.selectionComplete}</Text> */}
//                     </View>
//                 </View>

//                 <View style={styles.backgroundContainerLower}>
//                     <View style={{ height: hp('8%'), width: wp('100%')}}>
//                         {/* fontsize of hp('4%') goes perfect */}
//                         <Text style={{ color: "grey", fontSize: 24, margin: hp('2%') }}>
//                             Who are you?
//                         </Text>
//                     </View>

//                     <View style={{ flexDirection: "column" }}>
//                         {
//                             this.state.selection ?
//                                 this.renderSelection()
//                                 :
//                                 <View style={{ flexDirection: "column" }}>
//                                     <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
//                                         <TouchableOpacity onPress={this.renderCustomerSelection}>
//                                             <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" }}>
//                                                 <Text style={{ textAlign: "center", marginTop: hp('1%'), fontSize: 18,color:"#0290ea" }}>Consumer</Text>
//                                             </View>
//                                         </TouchableOpacity>
// {/* Added MarginLEFT to vendor button for center align, just change when any problems */}
//                                         <TouchableOpacity onPress={this.renderVendorSelection}>
//                                             <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",marginLeft:hp('3.5%') }}>
//                                                 <Text style={{ textAlign: "center", marginTop: hp('1%'), fontSize: 18,color:"#0290ea" }}>Vendor</Text>
//                                             </View>
//                                         </TouchableOpacity>
//                                     </View>
//                                     <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
//                                         <View style={{ height: hp('8%'), width: wp('80%') }}>
//                                             <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
//                                             <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
//                                         </View>
//                                         <View style={{ height: hp('8%'), width: wp('20%') }}>
//                                             <TouchableOpacity onPress={()=>{
//                                                 if(this.state.isready){
//                                                     console.log(this.state.selectionComplete)
//                                                    this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete}) 
//                                                 }
//                                                 else{
//                                                         ToastAndroid.show("Please make an appropriate Selection",600)
//                                                 }
                                                
//                                             }}>
//                                               <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
//                                             </TouchableOpacity>
                                            
//                                         </View>
//                                     </View>
//                                 </View>
//                         }
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     backgroundContainerUpper: {
//         flex: 0.6,
//         width: wp('100%'),
//         backgroundColor: '#0290ea',
//     },
//     backgroundContainerLower: {
//         flex: 0.4,
//         width: wp('100%'),
//         backgroundColor: '#fff',
//     },
//     imgcont: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor:"yellow"
//     },
//     a: {
//         margin: hp('3%')
//     },
//     fontStyle: {
//         //font size not available(to be changed)
//         fontSize: 24,
//         //color scheme still not available(to be changed)
//         color: "grey",
//         marginBottom: hp('2%')
//     },
//     textBox: {
//         flexDirection: "row",
//         height: hp("8%"),
//         justifyContent: 'center',
//         alignItems: 'center',
//         // flexDirection: 'row',
//         // backgroundColor: "pink"

//     },
//     hideIcon: {
//         height: hp("10%"),
//         width: wp("10%"),
//         // backgroundColor: "green"
//     },
//     Footer: {
//         margin: hp('3%'),
//         flexDirection: "row",
//         // backgroundColor:"green",
//         height: hp('20%')
//         // width:wp('90%')
//     },
//     Noaccount: {
//         marginTop: hp('2%'),
//         color: '#0091EA'
//     },
//     ForgotPassword: {
//         color: '#0091EA'
//     },
//     nextArrow: {
//         height: hp('9%'),
//         width: wp('20%'),
//         // margin: wp('3%'),
//         // justifyContent:"flex-end",
//         // alignItems:"flex-end",
//         alignSelf: "flex-end",
//     },
//     passwordInput: {
//         width: wp('80%'),
//         height: hp('6.5%'),
//         fontSize: 16,
//         borderBottomWidth: 1,
//     }
// })





import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,BackHandler} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
{/* Added MarginLEFT to vendor button for center align, just change when any problems */}
export default class WhoYouAre extends Component {

    state = {
        selection: null,
        selectionComplete:null,
        isready : false,
        // typeshop : null,
    }
    renderCustomerSelection = () => {
        this.setState({
            selection: "consumer",
            isready : false
        })

    }
    renderVendorSelection = () => {
        this.setState({
            selection: "vendor",
            isready:false
        })
    }
    selectInput = (text) =>{
        console.log("text=" ,text);
        this.setState({
            selectionComplete:text,
            isready:true,
        })
        // console.log(this.state);
        
    }
    handleBackButton = ()=>{
        this.props.navigation.navigate('Login')
        return true;
      }
      componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
    renderSelection = () => {
        var data=''
        if (this.state.selection == "consumer") {

            if(this.state.selectionComplete == "individual"){
                return (
                    <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                                <TouchableOpacity onPress={this.renderCustomerSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={this.renderVendorSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                                <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                                <View style={{ height: hp('8%'), width: wp('80%') }}>
                                    <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                    <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                                </View>
                                <View style={{height: hp('8%'), width: wp('20%') }}>
                                    <TouchableOpacity onPress={()=>{
                                        console.log(this.state.selectionComplete)
                                        this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
                                    }}>
                                       <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} /> 
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
    
                );                 
            }
            else if(this.state.selectionComplete == "organization"){
                return (
                    <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                                <TouchableOpacity onPress={this.renderCustomerSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={this.renderVendorSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                                <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                                <View style={{ height: hp('8%'), width: wp('80%') }}>
                                    <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                    <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                                </View>
                                <View style={{height: hp('8%'), width: wp('20%') }}>
                                <TouchableOpacity onPress={()=>{
                                    console.log(this.state.selectionComplete)
                                        this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
                                    }}>
                                    <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
    
                ); 
            }
            else{
            return (
                <View style={{ height: hp('28%'), widht: wp('100%') }}>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                            <TouchableOpacity onPress={this.renderCustomerSelection}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.renderVendorSelection}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                            <TouchableOpacity onPress={data=>this.selectInput(data="individual")}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Individual</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={data=>this.selectInput(data="organization")}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Organization</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                            <View style={{ height: hp('8%'), width: wp('80%') }}>
                                <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                            </View>
                            <View style={{height: hp('8%'), width: wp('20%') }}>
                                <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                            </View>
                        </View>
                    </View>
                </View>

            );                
            }
        

        } else {

            if(this.state.selectionComplete == "kirana"){
                // this.setState({typeshop: this.state.selectionComplete})
                return (
                    <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                                <TouchableOpacity onPress={this.renderCustomerSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={this.renderVendorSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                                <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                                <View style={{ height: hp('8%'), width: wp('80%') }}>
                                    <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                    <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                                </View>
                                <View style={{height: hp('8%'), width: wp('20%') }}>
                                <TouchableOpacity onPress={()=>{
                                    console.log(this.state.selectionComplete)
                                        this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
                                    }}>
                                    <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
    
                );
            }
            else if(this.state.selectionComplete == "chemist"){
                // this.setState({typeshop: this.state.selectionComplete})
                return (
                    <View style={{ height: hp('28%'), widht: wp('100%') }}>
    
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                                <TouchableOpacity onPress={this.renderCustomerSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={this.renderVendorSelection}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                                <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
                                    </View>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
                                    <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
                                        <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                                <View style={{ height: hp('8%'), width: wp('80%') }}>
                                    <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                    <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                                </View>
                                <View style={{height: hp('8%'), width: wp('20%') }}>
                                <TouchableOpacity onPress={()=>{
                                        console.log(this.state.selectionComplete)
                                        this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete})
                                    }}>
                                    <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
    
                );
            }
            else{
            return (
                <View style={{ height: hp('28%'), widht: wp('100%') }}>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%') }}>
                            <TouchableOpacity onPress={this.renderCustomerSelection}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",justifyContent:'center',alignItems:'center' }}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.renderVendorSelection}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:hp('3.5%')}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                            <TouchableOpacity onPress={data=>this.selectInput(data="kirana")}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Kirana</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={data=>this.selectInput(data="chemist")}>
                                <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:hp('3.5%')}}>
                                    <Text style={{fontSize: 18,color:"#0290ea" }}>Chemist</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                            <View style={{ height: hp('8%'), width: wp('80%') }}>
                                <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                            </View>
                            <View style={{height: hp('8%'), width: wp('20%') }}>
                                <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                            </View>
                        </View>
                    </View>
                </View>

            );                
            }

        }
    }
    render() {
        return (
            <View style={styles.container}>
                      <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('Login') 
        console.log("lkjfdh")         
        }

      }
      style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
      >
              <Image
      source={require('../assets/back.png')}
      style={{position:'absolute',top:15,left:10,zIndex:2,}}
      />      
      </TouchableOpacity>
                <View style={styles.backgroundContainerUpper}>
                    {/* SVG goes here */}
                    {/* need image of logo only, not the background */}
                    <View style={styles.imgcont}>
                        <Image source={require("../assets/png.png")} style={styles.logo} />
                        {/* <Text style={{fontSize:24,color:'white'}}>{this.state.selectionComplete}</Text> */}
                    </View>
                </View>

                <View style={styles.backgroundContainerLower}>
                    <View style={{ height: hp('8%'), width: wp('100%')}}>
                        {/* fontsize of hp('4%') goes perfect */}
                        <Text style={{ color: "grey", fontSize: 24, margin: hp('2%') }}>
                            Who are you?
                        </Text>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        {
                            this.state.selection ?
                                this.renderSelection()
                                :
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row", height: hp('10%'), width: wp('100%')}}>
                                        <TouchableOpacity onPress={this.renderCustomerSelection}>
                                            <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey" }}>
                                                <Text style={{ textAlign: "center", marginTop: hp('1%'), fontSize: 18,color:"#0290ea" }}>Consumer</Text>
                                            </View>
                                        </TouchableOpacity>
{/* Added MarginLEFT to vendor button for center align, just change when any problems */}
                                        <TouchableOpacity onPress={this.renderVendorSelection}>
                                            <View style={{ margin: hp('2%'), height: hp('6%'), width: wp('40%'), borderWidth: 0.5, borderColor: "grey",marginLeft:hp('3.5%') }}>
                                                <Text style={{ textAlign: "center", marginTop: hp('1%'), fontSize: 18,color:"#0290ea" }}>Vendor</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: "row", height: hp('8%'), width: wp('100%') }}>
                                        <View style={{ height: hp('8%'), width: wp('80%') }}>
                                            <Text style={{ marginTop: hp('1%'), fontSize: 14, color: "grey", marginLeft: hp('2%') }}>Choose the type of user you are,</Text>
                                            <Text style={{ fontSize: 14, color: "grey", marginLeft: hp('2%') }}>vendor option is for shops</Text>
                                        </View>
                                        <View style={{ height: hp('8%'), width: wp('20%') }}>
                                            <TouchableOpacity onPress={()=>{
                                                if(this.state.isready){
                                                    console.log(this.state.selectionComplete)
                                                   this.props.navigation.navigate('Profile' ,{selection:this.state.selection,selectionComplete:this.state.selectionComplete}) 
                                                }
                                                else{
                                                        ToastAndroid.show("Please make an appropriate Selection",600)
                                                }
                                                
                                            }}>
                                              <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                                            </TouchableOpacity>
                                            
                                        </View>
                                    </View>
                                </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundContainerUpper: {
        flex: 0.6,
        width: wp('100%'),
        backgroundColor: '#0290ea',
    },
    backgroundContainerLower: {
        flex: 0.4,
        width: wp('100%'),
        backgroundColor: '#fff',
    },
    imgcont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"yellow"
    },
    a: {
        margin: hp('3%')
    },
    fontStyle: {
        //font size not available(to be changed)
        fontSize: 24,
        //color scheme still not available(to be changed)
        color: "grey",
        marginBottom: hp('2%')
    },
    textBox: {
        flexDirection: "row",
        height: hp("8%"),
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        // backgroundColor: "pink"

    },
    hideIcon: {
        height: hp("10%"),
        width: wp("10%"),
        // backgroundColor: "green"
    },
    Footer: {
        margin: hp('3%'),
        flexDirection: "row",
        // backgroundColor:"green",
        height: hp('20%')
        // width:wp('90%')
    },
    Noaccount: {
        marginTop: hp('2%'),
        color: '#0091EA'
    },
    ForgotPassword: {
        color: '#0091EA'
    },
    nextArrow: {
        height: hp('9%'),
        width: wp('20%'),
        // margin: wp('3%'),
        // justifyContent:"flex-end",
        // alignItems:"flex-end",
        alignSelf: "flex-end",
    },
    passwordInput: {
        width: wp('80%'),
        height: hp('6.5%'),
        fontSize: 16,
        borderBottomWidth: 1,
    }
})
import React from 'react'
import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { height } = Dimensions.get('window');

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    panel: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    panelHeader: {
        height: 60,
        backgroundColor: '#b197fc',
        alignItems: 'center',
        justifyContent: 'center'
    },
}


class TryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                { name: "XYZ", distance: "distance", address: "y" },
                { name: "name2", distance: "x", address: "y" },
                { name: "name3", distance: "x", address: "y" },
                { name: "name4", distance: "x", address: "y" },
                { name: "name5", distance: "x", address: "y" },
                { name: "name6", distance: "x", address: "y" },
                { name: "name7", distance: "x", address: "y" },
                { name: "name8", distance: "x", address: "y" },
                { name: "name9", distance: "x", address: "y" },
                { name: "name10", distance: "x", address: "y" },
                { name: "name11", distance: "x", address: "y" },
                { name: "name12", distance: "x", address: "y" },
                { name: "name13", distance: "x", address: "y" },
                { name: "name14", distance: "x", address: "y" }
            ],

        };

        this.firstElement = [];
        this.otherElements = [];
        //anonymus function runs automatically
        (() => {
            if (this.state.elements.length == 1) {
                this.firstElement.push(this.state.elements[0])
            }
            else {
                this.firstElement.push(this.state.elements[0])
                for (var i = 1; i < this.state.elements.length; i++) {
                    this.otherElements.push(this.state.elements[i]);
                }
            }

        })()
    };

    returnAddress = (selectedName,item) =>{
        console.log("inside function",selectedName,item)
        if(selectedName===item.name){
            console.log("inside if")
            return(
                <View>
                <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            clicked: null,
                        })
                    }}>
                        <Text style={{ fontSize: 22 }}>
                            {item.name}
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            {item.distance}
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            {item.address}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
        else{
            console.log("inside else");
            
            return(
                <View>
                <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            clicked: null,
                        })
                    }}>
                        <Text style={{ fontSize: 22 }}>
                            {item.name}
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            {item.distance}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
        

    }

    render() {
        console.log(this.firstElement[0].name);

        return (
            <SlidingUpPanel
                ref={c => (this._panel = c)}
                draggableRange={{ top: height / 1.5, bottom: height / 5.5 }}
                animatedValue={this._draggedValue}
                showBackdrop={false}
                backdropStyle={{ backgroundColor: "black" }}
            // containerStyle={{elevation:3,borderTopEndRadius:4}}
            >
                <TouchableOpacity onPress={() => console.log("Hey")} style={{ alignSelf: 'flex-end' }}>
                    <Image source={require("../assets/sos.png")} style={{ height: hp("9%"), width: wp("22%"), marginBottom: hp("2%") }} />
                </TouchableOpacity>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopLeftRadius: wp('4%'), borderTopRightRadius: wp('4%'), borderColor: "black", elevation: 0.5 }}>
                        <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 24 }}>
                                    {this.firstElement[0].name}
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    {this.firstElement[0].distance}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
                            <TouchableOpacity>
                                <Image source={require('../assets/message-square.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../assets/ios-call.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ height: 300 }}>
                    {/* <ScrollView> */}
                    <FlatList
                        data={this.otherElements}
                        // ItemSeparatorComponent={this.ListViewItemSeparator}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 0.5 }}>
                                    {this.state.clicked ?
                                        this.returnAddress(this.state.clicked,item)
                                        :
                                        <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                                            <TouchableOpacity onPress={() => {
                                                this.setState({
                                                    clicked: item.name,
                                                })
                                            }}>
                                                <Text style={{ fontSize: 22 }}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{ fontSize: 14 }}>
                                                    {item.distance}
                                                </Text>
                                            </TouchableOpacity>

                                        </View>

                                    }

                                    <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/message-square.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/ios-call.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                        enableEmptySections={true}
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index}
                    />

                    {/* </ScrollView> */}

                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: wp('50%') }}><Button title="Kirana" style={{ bottom: 500, width: 550 }}></Button></View>
                    <View style={{ width: wp('50%') }}><Button title="Chemist" style={{ bottom: 500, width: 550 }}></Button></View>
                </View>

                {/* </ScrollView> */}
            </SlidingUpPanel>
        )
    }
}

export default TryScreen









// // import React from 'react'
// // import {Text, View, Dimensions,Image, ScrollView, TouchableOpacity, TextInput} from 'react-native'

// // import SlidingUpPanel from 'rn-sliding-up-panel'
// // import {heightPercentageToDP as hp, widthPercentageToDP as wp} from  'react-native-responsive-screen';

// // const {height} = Dimensions.get('window')

// // const styles = {
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f8f9fa',
// //     alignItems: 'center',
// //     justifyContent: 'center'
// //   },
// //   panel: {
// //     flex: 1,
// //     backgroundColor: 'grey',
// //     position: 'relative',
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //   },
// //   panelHeader: {
// //     height: 25,
// //     width:wp("10%"),
// //     borderBottomWidth:1,
// //     alignSelf:'center',
// //   },
// // }

// // class TryScreen extends React.Component {
// //   render() {
// //     return (
// //         <SlidingUpPanel
// //           ref={c => (this._panel = c)}
// //           draggableRange={{top: height / 1.5, bottom: 50}}
// //           animatedValue={this._draggedValue}
// //           showBackdrop={false}>
// //           <View style={styles.panel}>
// //             <View style={{height:50}}>
// //             <View style={styles.panelHeader}>
// //             </View>
// //             </View>
// //             <ScrollView style={{marginLeft:wp("8%"),marginRight:wp("8%")}}>
// //                 <Text style={{fontSize:16}}>Name *</Text>
// //                 <TextInput 
// //                   style={{borderBottomWidth:1,height:hp("5%"),fontSize:16,marginBottom:10}}  
// //                 />
// //                 <Text style={{fontSize:16}}>Phone number *</Text>
// //                 <View style={{flexDirection:'row',borderBottomWidth:1,marginBottom:10}}>
// //                 <Text style={{fontSize:16,alignSelf:'center'}}>(+91)</Text>
// //                 <TextInput
// //                   style={{height:hp("6%"),fontSize:16}}
// //                   keyboardType = "decimal-pad"
// //                 />
// //                 </View>
// //                 <Text style={{fontSize:16,marginBottom:10}}>Category</Text>
// //                 <View style={{ flexDirection: "row", width: wp('100%'),marginBottom:20}}>
// //                             <TouchableOpacity>
// //                                 <View style={{height: hp('6%'), width: wp('40%'), borderWidth: 1, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginRight:wp("2%")}}>
// //                                     <Text style={{fontSize: 15,color:"#0290ea" }}>Food Supplies</Text>
// //                                 </View>
// //                             </TouchableOpacity>

// //                             <TouchableOpacity>
// //                                 <View style={{height: hp('6%'), width: wp('40%'), borderWidth: 1, borderColor: "grey" ,justifyContent:'center',alignItems:'center',backgroundColor:'#c2dff0',marginLeft:wp("2%")}}>
// //                                     <Text style={{fontSize: 18,color:"#0290ea"}}>Others</Text>
// //                                 </View>
// //                             </TouchableOpacity>
// //                   </View>
// //                   <TextInput
// //                       style={{borderWidth:1,marginBottom:20}}
// //                       multiline={true}
// //                       numberOfLines={5}
// //                   />
// //                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center'}}/>
// //             </ScrollView>
// //           </View>
// //         </SlidingUpPanel>
// //     )
// //   }
// // }

// // export default TryScreen



























// import React from 'react'
// import {Text, View, Dimensions,Image, ScrollView, TouchableOpacity, Button} from 'react-native'

// import SlidingUpPanel from 'rn-sliding-up-panel'
// import {heightPercentageToDP as hp, widthPercentageToDP as wp} from  'react-native-responsive-screen';

// const {height} = Dimensions.get('window')

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   panel: {
//     flex: 1,
//     backgroundColor: 'white',
//     position: 'relative'
//   },
//   panelHeader: {
//     height: 25,
//       width:wp("10%"),
//       borderBottomWidth:1,
//       alignSelf:'center',
//   },
// }

// class TryScreen extends React.Component {
//   render() {
//     return (
//         <SlidingUpPanel
//           ref={c => (this._panel = c)}
//           draggableRange={{top: height / 1.5,bottom:height/5.8}}
//           animatedValue={this._draggedValue}
//           showBackdrop={false}
//           backdropStyle={{backgroundColor:"black"}}
//         //   containerStyle={{backgroundColor:"black"}}
//           >
//           <TouchableOpacity onPress={() => console.log("Hey")} style={{alignSelf:'flex-end'}}>
//               <Image source={require("../assets/sos.png")} style={{height:hp("9%"),width:wp("22%"),marginBottom:hp("2%")}}/>
//           </TouchableOpacity>
//           <View style={{height:50}}>
//             <View style={styles.panelHeader}>
//             </View>
//             </View>
//             <View style={{bottom:1,backgroundColor:"green"}}>
//               <Text>Bottom Sheet Content</Text>
//             </View>
//             <View style={{height:355}}>

//             </View>
//             <View style={{flexDirection:'row',width:"100%",justifyContent:'space-evenly'}}>
//             <Button title="helllo"></Button>
//             <Button title="helllo"></Button>
//             </View>
//         </SlidingUpPanel>
//     )
//   }
// }

// export default TryScreen












// // import React from "react";
// // import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
// // // import Scroller from "./scroller";

// // export default class tryScreen extends React.Component {
// //   state = {
// //     animation: new Animated.Value(0),
// //   };
// //   handleOpen = () => {
// //     Animated.timing(this.state.animation, {
// //       toValue: 1,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start();
// //   };
// //   handleClose = () => {
// //     Animated.timing(this.state.animation, {
// //       toValue: 0,
// //       duration: 200,
// //       useNativeDriver: true,
// //     }).start();
// //   };
// //   render() {
// //     const screenHeight = Dimensions.get("window").height;

// //     const backdrop = {
// //       transform: [
// //         {
// //           translateY: this.state.animation.interpolate({
// //             inputRange: [0, 0.01],
// //             outputRange: [screenHeight, 0],
// //             extrapolate: "clamp",
// //           }),
// //         },
// //       ],
// //       opacity: this.state.animation.interpolate({
// //         inputRange: [0.01, 0.5],
// //         outputRange: [0, 1],
// //         extrapolate: "clamp",
// //       }),
// //     };

// //     const slideUp = {
// //       transform: [
// //         {
// //           translateY: this.state.animation.interpolate({
// //             inputRange: [0.01, 1],
// //             outputRange: [0 , -1 * screenHeight],
// //             extrapolate: "clamp",
// //           }),
// //         },
// //       ],
// //     };

// //     return (
// //       <View style={styles.container}>
// //         <TouchableOpacity onPress={this.handleOpen} style={styles.popup}>
// //           <Text>Open</Text>
// //         </TouchableOpacity>

// //         <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
// //           <View style={[styles.sheet]}>
// //             <Animated.View style={[styles.popup, slideUp]}>
// //               <TouchableOpacity onPress={this.handleClose}>
// //                 <Text>Close</Text>
// //               </TouchableOpacity>
// //               {/* <Scroller /> */}
// //             </Animated.View>
// //           </View>
// //         </Animated.View>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   cover: {
// //     backgroundColor: "rgba(0,0,0,.5)",
// //   },
// //   sheet: {
// //     position: "absolute",
// //     top: Dimensions.get("window").height,
// //     left: 0,
// //     right: 0,
// //     height: "100%",
// //     justifyContent: "flex-end",
// //   },
// //   popup: {
// //     backgroundColor: "#FFF",
// //     marginHorizontal: 10,
// //     borderTopLeftRadius: 5,
// //     borderTopRightRadius: 5,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     minHeight: 100,
// //   },
// // });

















































// // // import React from "react";
// // // import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
// // // import Scroller from "./scroller";
// // // import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


// // // export default class tryScreen extends React.Component {
// // //   state = {
// // //     animation: new Animated.Value(0),
// // //   };
// // //   handleOpen = () => {
// // //     Animated.timing(this.state.animation, {
// // //       toValue: 1,
// // //       duration: 300,
// // //       useNativeDriver: true, 
// // //     }).start();
// // //   };
// // //   handleClose = () => {
// // //     Animated.timing(this.state.animation, {
// // //       toValue: 0,
// // //       duration: 200,
// // //       useNativeDriver: true,
// // //     }).start();
// // //   };
// // //   render() {
// // //     const screenHeight = Dimensions.get("window").height;

// // //     const backdrop = {
// // //       transform: [
// // //         {
// // //           translateY: this.state.animation.interpolate({
// // //             inputRange: [0, 0.01],
// // //             outputRange: [screenHeight, 0],
// // //             extrapolate: "clamp",
// // //           }),
// // //         },
// // //       ],
// // //       opacity: this.state.animation.interpolate({
// // //         inputRange: [0.01, 0.5],
// // //         outputRange: [0, 10],
// // //         extrapolate: "clamp",
// // //       }),
// // //     };

// // //     const slideUp = {
// // //       transform: [
// // //         {
// // //           translateY: this.state.animation.interpolate({
// // //             inputRange: [0, 1],
// // //             outputRange: [10, -1 * screenHeight],
// // //             extrapolate: "clamp",
// // //           }),
// // //         },
// // //       ],
// // //     };

// // //     return (
// // //       <View style={styles.container}>
// // //           {/* <Animated.View style={[styles.popup, slideUp]}> */}
// // //         {/* <TouchableOpacity onPress={this.handleOpen}> */}
// // //         {/* <GestureRecognizer 
// // //         onSwipeUp={this.handleOpen}> */}
// // //           {/* <Text>Open</Text> */}
// // //           {/* </GestureRecognizer> */}
// // //         {/* </TouchableOpacity> */}
// // //         {/* </Animated.View> */}

// // //         <View style={[styles.sheet]}>
// // //             <Animated.View style={[styles.popup,]}>
// // //               <TouchableOpacity onPress={this.handleClose} style={{height:400}}>
// // //                 <Text>Close</Text>
// // //               </TouchableOpacity>
// // //               {/* <Scroller /> */}
// // //             </Animated.View>
// // //           </View>

// // //         <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
// // //           <View style={[styles.sheet]}>
// // //             <Animated.View style={[styles.popup, slideUp]}>
// // //               <TouchableOpacity onPress={this.handleClose} style={{height:400}}>
// // //                 <Text>Close</Text>
// // //               </TouchableOpacity>
// // //               {/* <Scroller /> */}
// // //             </Animated.View>
// // //           </View>
// // //         </Animated.View>
// // //       </View>
// // //     );
// // //   }
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   cover: {
// // //     backgroundColor: "rgba(0,0,0,.5)",
// // //   },
// // //   sheet: {
// // //     position: "absolute",
// // //     top: Dimensions.get("window").height,
// // //     left: 0,
// // //     right: 0,
// // //     height: "100%",
// // //     justifyContent: "flex-end",
// // //   },
// // //   popup: {
// // //     backgroundColor: "#FFF",
// // //     marginHorizontal: 10,
// // //     borderTopLeftRadius: 5,
// // //     borderTopRightRadius: 5,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     minHeight: 80,
// // //   },
// // // });





// // import React,{Component} from 'react';
// // import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native'

// // class tryScreen extends Component{
// //     constructor(props){
// //         super(props);

// //         this.icons = {
// //             'up'    : require('../assets/Arrowhead-01-128.png'),
// //             'down'  : require('../assets/Arrowhead-Down-01-128.png')
// //         };

// //         this.state = {
// //             title       : "Aditya",
// //             expanded    : true,
// //             animation   : new Animated.Value()
// //         };
// //     }

// //     toggle(){
// //         let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
// //             finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

// //         this.setState({
// //             expanded : !this.state.expanded
// //         });

// //         this.state.animation.setValue(initialValue);
// //         Animated.spring(
// //             this.state.animation,
// //             {
// //                 toValue: finalValue
// //             }
// //         ).start();
// //     }

// //     _setMaxHeight(event){
// //         this.setState({
// //             maxHeight   : 600
// //         });
// //     }

// //     _setMinHeight(event){
// //         this.setState({
// //             minHeight   : 100
// //         });
// //     }

// //     render(){
// //         let icon = this.icons['down'];

// //         if(this.state.expanded){
// //             icon = this.icons['up'];
// //         }

// //         return (
// //             <Animated.View 
// //                 style={[styles.container,{height: this.state.animation}]}>
                

// //             </Animated.View>
// //         );
// //     }
// // }

// // var styles = StyleSheet.create({
// //     container   : {
// //         backgroundColor: '#fff',
// //         margin:10,
// //         overflow:'hidden'
// //     },
// //     titleContainer : {
// //         flexDirection: 'row'
// //     },
// //     title       : {
// //         flex    : 1,
// //         padding : 10,
// //         color   :'#2a2f43',
// //         fontWeight:'bold'
// //     },
// //     button      : {

// //     },
// //     buttonImage : {
// //         width   : 30,
// //         height  : 25
// //     },
// //     body        : {
// //         padding     : 10,
// //         paddingTop  : 0
// //     }
// // });

// // export default tryScreen;
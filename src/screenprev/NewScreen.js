import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from "react-native";
import GlobalStyle from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Horizontallist from '../../Components/Horizontallist'

class Feed extends Component {
    constructor(props){
        super(props);
        this.state={
            isloading:true,
            DataSource:null,
            windowWidth:null,
            windowHeight:null,
        }

    }

    componentDidMount(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        this.setState({
            windowWidth,
            windowHeight
        })
        fetch('https://ciboapi-5p3bayb4wa-as.a.run.app/getVideo',{
            method:'POST',
            body:JSON.stringify({
                category:"all",
                userid:""
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                isloading:false,
                DataSource:data
            })
        })
        .catch((error) => {console.log(error)})

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/munchinlogo.png')}  style={{height:50,width:50}} />
                    <Text style={{marginLeft:10,letterSpacing:2}}>munchin</Text>
                </View>
                <FlatList
                data={this.state.DataSource}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index}) =>{
                    if(index%10 == 3){
                        return(
                            <View>
                                    <Horizontallist data={this.state.DataSource} navigate={navigate} height={0.211*this.state.windowHeight} width={0.4*this.state.windowWidth} cheflogo={'../../assets/Profileimage.png'} />
                                    <View style={styles.mainbox}>
                                        <View style={styles.postheader}>
                                            <View style={{flexDirection:'row'}}>
                                                <Image source={require('../../assets/Chef.png')} style={{height:0.066*this.state.windowHeight,width:0.14*this.state.windowWidth}} />
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
                                                <View style={{flexDirection:'column',marginHorizontal:0.02*this.state.windowWidth,marginVertical:0.006*this.state.windowHeight,alignContent:'flex-start'}}>
                                                    <Text style={{fontSize:20,color:'#666666'}}>Recipe</Text>
                                                    <Text style={{fontSize:10}}>by {item.username}</Text>
                                                </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => {}}>
                                                    <Icon name = "ellipsis-v"  size={25}  style= {{alignSelf:'center',color:GlobalStyle.threeiconcolor.color}} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Recipe",{datarecipe: item})}>
                                        <View>
                                            <Image source={{uri:item.thumbnailpath}}  style={{height:0.268*this.state.windowHeight,width:this.state.windowWidth}} />
                                        </View>
                                        </TouchableOpacity>
                                        <View style={styles.features}>

                                            <View style={{flexDirection:'column',alignContent:'center',alignItems:'center',marginTop:10}}>
                                                <Icon name="fire" size={20} color="#FFCB43" />
                                                <Text style={{fontSize:8,color:'#040404'}}>{item.likes}, LIKES</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => {}}>
                                                <Icon name="comment" size={20} color="#FFCB43" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {}}>
                                                <Icon name="paper-plane" size={20} color="#FFCB43" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {}}>
                                                <Image source={require('../../assets/Saved.png')} style={{height:20,width:20}} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>    
                            </View>
                        );
                    }
                    else{
                        return(
                            <View style={styles.mainbox}>
                                <View style={styles.postheader}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../../assets/Chef.png')} style={{height:0.066*this.state.windowHeight,width:0.14*this.state.windowWidth}} />
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
                                        <View style={{flexDirection:'column',marginHorizontal:0.02*this.state.windowWidth,marginVertical:0.006*this.state.windowHeight,alignContent:'flex-start'}}>
                                            <Text style={{fontSize:20,color:'#666666'}}>Recipe</Text>
                                            <Text style={{fontSize:10}}>by {item.username}</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {}}>
                                            <Icon name = "ellipsis-v" color="#666666" size={25}  style= {{alignSelf:'center'}} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Recipe",{datarecipe: item})}>
                                <View>
                                    <Image source={{uri:item.thumbnailpath}} style={{height:0.268*this.state.windowHeight,width:this.state.windowWidth}} />
                                </View>
                                </TouchableOpacity>
                                <View style={styles.features}>

                                    <TouchableOpacity onPress={() => {}}>
                                        <View style={{flexDirection:'column',alignContent:'center',alignItems:'center',marginTop:10}}>
                                            <Icon name="fire" size={20} color="#FFCB43" />
                                            <Text style={{fontSize:8,color:'#040404'}}>{item.likes}, LIKES</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Icon name="comment" size={20} color="#FFCB43" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Icon name="paper-plane" size={20} color="#FFCB43" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Image source={require('../../assets/Saved.png')} style={{height:20,width:20}} />
                                    </TouchableOpacity>
                                </View>
                            </View>     
                        );
                    }          
                    }
                }

                />
            </View>
        );
    }
}
export default Feed;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        borderBottomWidth:2,
        borderBottomColor:'#E2E2E2'
    },
    mainbox:{
        marginVertical:10
    },
    postheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignContent:'center',
        alignItems:'center',
        marginBottom:5
    },
    features:{
        marginHorizontal:20,
        height:60,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        borderColor:"#E2E2E2",
        justifyContent:'space-evenly',
        alignContent:'center',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        borderTopWidth:0
    }
});

/*                <FlatList 
                data={this.state.DataSource}
                renderItem={({item,index}) =>(
                    <View>
                        <View style={styles.postheader}>
                            <View>
                                <Image source={require('../../assets/Chef.png')} style={{height:40,width:40}} />
                                <View style={{flexDirection:'column',marginHorizontal:10,marginVertical:5,alignContent:'flex-start'}}>
                                    <Text>Recipe</Text>
                                    <Text>Chef Sanjay Kapoor</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                )}
                />*/
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from "./../components/Header";

class GetIn extends Component {
    render(props) {
        return (
            <View style={{
                flex: 1,
            }}>
                <Header name={'Sign In or Create an Account'} />

                {/* LeftOver */}
                <View style={{
                    flex: 1,
                    marginTop: wp(5),
                    marginLeft: wp(7),
                    marginRight: wp(7),
                }}>
                    {/* SomeText */}
                    <Text style={{
                        fontSize: hp(1.8),
                        fontFamily: 'r1',
                    }}>
                        Sign In or create an account to access all the best Warden has to offer.
                    </Text>

                    {/* CONTINUE */}
                    <Text style={{
                        fontSize: hp(1.5),
                        fontFamily: 'r1',
                        paddingTop: hp(3),
                    }}>
                        CONTINUE WITH EMAIL
                    </Text>

                    {/* SignIn Box */}
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')} 
                    style={{
                        width: null,
                        height: hp(6.5),
                        backgroundColor: '#0099D8',
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: hp(2)
                    }}>
                        <Text style={{
                            fontFamily: 'b1',
                            color: 'white',
                            fontSize: hp(2.5),
                        }}>
                            Sign  In
                        </Text>
                    </TouchableOpacity>

                    {/* Create Account */}
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')} 

                     style={{
                        width: null,
                        height: hp(6.5),
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: hp(2),
                        borderWidth: 1.5,
                    }}>
                        
                        <Text style={{
                            fontFamily: 'r3',
                            color: 'black',
                            fontSize: hp(2.3),
                        }}>
                            Create an Account
                        </Text>
                    </TouchableOpacity>


                    {/* More ways */}
                    <Text style={{
                        fontSize: hp(1.5),
                        fontFamily: 'r1',
                        paddingTop: hp(3),
                    }}>
                        MORE WAYS TO SIGN IN
                    </Text>

                    {/* SignIn Box */}
                    <View style={{
                        width: null,
                        height: hp(6.5),
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: hp(2),
                        borderWidth: 1.5,
                        flexDirection: "row",
                    }}>
                        <Entypo name="facebook" size={hp(3)} color="#3b5998" style={{
                            // paddingLeft: wp(5),
                        }}/>
                        <Text style={{
                            fontFamily: 'r3',
                            color: '#3b5998',
                            fontSize: hp(2.2),
                            paddingLeft: wp(3),
                        }}>
                            Sign in with Facebook
                        </Text>
                    </View>

                    {/* Create Account */}
                    <View style={{
                        width: null,
                        height: hp(6.5),
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: hp(2),
                        borderWidth: 1.5,
                        flexDirection: "row",
                    }}>
                        <Entypo name="twitter" size={hp(3)} color="#1da1f2" style={{
                            // paddingLeft: wp(5),
                        }}/>
                        <Text style={{
                            fontFamily: 'r3',
                            color: '#1da1f2',
                            fontSize: hp(2.2),
                            paddingLeft: wp(3),
                        }}>
                            Sign in with Twitter
                        </Text>
                    </View>
                    
                    {/* Continue without login */}
                    <View style={{
                        width: null,
                        height: hp(15),
                        backgroundColor: '#0099D8',
                        // alignItems: 'center',
                        justifyContent: "center",
                        marginTop: hp(5),
                        // borderWidth: 1.5,
                        flexDirection: "column",
                        // padding: hp(2.5),
                    }}>
                        {/* first */}
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            paddingTop: hp(1.5),
                        }}>
                            <FontAwesome5 name="satellite" size={hp(3)} color="white" style={{
                                paddingLeft: wp(5),
                            }}/>
                            <Text style={{
                                fontFamily: 'r1',
                                color: 'white',
                                fontSize: hp(2.2),
                                paddingLeft: wp(4),
                            }}>
                                Continue without login
                            </Text>
                        </View>

                        {/* Next */}
                        <View style={{
                        width: wp(75),
                        height: hp(6.5),
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: "center",
                        // marginTop: hp(2),
                        borderWidth: 1.5,
                        flexDirection: "row",
                        marginLeft: wp(5),
                        marginBottom: wp(4),
                    }}>
                        <Text style={{
                            fontFamily: 'b2',
                            color: 'black',
                            fontSize: hp(2.2),
                        }}>
                            Lets have a tour
                        </Text>
                    </View>
                        
                    </View>
                    

                </View>
            </View>
        )
    }
}

export default GetIn;
import React from 'react';
import { ActivityIndicator, View, Text, Button, WebView, Platform } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

const HtmlPage = require('./index.html');

class DetailsScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            platform:Platform.OS,
            latitude: null,
            longitude: null,
            error: null,
        }
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                },()=>{
                    //this.refs.webview_ref.postMessage(JSON.stringify(this.state))
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 5 },
        );
        //this.loadToast();
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    loadToast() {
        this.refs.toast.show('hello web view!', 5000);
    }
    msgHandler(event){
        console.log("msgHandler-->" + event.nativeEvent.data)
    }
    _renderLoading(){
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    render() {
        return (
           
            <WebView
                ref="webview_ref"
                source={HtmlPage}
                style={{ marginTop: 2 }}
                onMessage={this.msgHandler.bind(this)}
                renderLoading={this._renderLoading.bind(this)}
                startInLoadingState
            />
           
        );
    }
}

export default DetailsScreen

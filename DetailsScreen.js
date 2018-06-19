import React from 'react';
import { View, Text, Button, WebView } from 'react-native';

const HtmlPage = require('./index.html');

class DetailsScreen extends React.Component {

    msgHandler(event){
        console.log("msgHandler-->" + event.nativeEvent.data)
    }
    render() {
        return (
            <WebView
                source={HtmlPage}
                style={{ marginTop: 2 }}
                onMessage={this.msgHandler.bind(this)}
            />
        );
    }
}

export default DetailsScreen

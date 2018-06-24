import React from 'react';
import { View, Text, Button } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

class HomeScreen extends React.Component {

    loadToast(){
        this.refs.toast.show('hello world!', 5000);
    }
    componentDidMount(){
        this.loadToast();
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Toast ref="toast" />
                <Text>HomeScreen</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        navigate('Details', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;
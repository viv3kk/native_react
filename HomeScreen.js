import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
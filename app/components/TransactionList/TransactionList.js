import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    TextInput,
} from 'react-native';

import styles from './styles.js'

class TransactionList extends Component {
    static navigationOptions = {
        title: 'Finantrack',
    };

    _renderRow() {
        return (
            <View style={styles.row}>
                <View>
                    <Text>Title</Text>
                </View>
                <View>
                    <Text>Description</Text>
                </View>
                <View>
                    <Text>Category</Text>
                </View>
                <View>
                    <Text>Outflow</Text>
                </View>
                <View>
                    <Text>Inflow</Text>
                </View>
            </View>
        )
    }

    render() {
        // Boilerplate for adding data to the vie 
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // Data is gotten from `stories` props
        const dataSource = ds.cloneWithRows(this.props.stories);

        return (
            <View>
                <View style={styles.row}>
                    <TextInput 
                        placeholder="Search..."
                    />
                </View>
                <ListView 
                    dataSource={dataSource}
                    enableEmptySections={true}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        )
    }
}

TransactionList.defaultProps = {
    stories: [1,2,3,4,5,6,7,8,9,10]
}

export default TransactionList;
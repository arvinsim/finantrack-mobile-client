import React, { Component } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

class TransactionList extends Component {
    _renderRow() {
        return (
            <View>
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
            <ListView 
                dataSource={dataSource}
                enableEmptySections={true}
                renderRow={this._renderRow.bind(this)}
            />
        )
    }
}

TransactionList.defaultProps = {
    stories: [1,2,3,4,5]
}

export default TransactionList;
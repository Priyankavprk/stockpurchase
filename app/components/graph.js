import React, {Component} from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import { View, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';

class Graph extends Component {

    render() {
        const data = this.props.items.filter((data) => data.stockPrice).map((d) => d.stockPrice)

        return (

            <LineChart
                style={styles.GraphStyle}
                data={ data }
                showGrid = { false }
                svg={{ stroke: '#00BCD4' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
        )
    }

}

const styles = StyleSheet.create({
  GraphStyle: {
    height: 200,
    margin: 20
  }
});

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(Graph);

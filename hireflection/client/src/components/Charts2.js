import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
//{this.props.file}

class Charts2 extends React.Component {
  state = {
    response: ''
  };


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.dictionary }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    var data = null;/*require('/data.JSON');*/
    console.log(this.state.response);
    return (
      <div id="chart" className="container">
        <ResponsiveBar
          data={this.state.response}
          keys={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
          ]}
          indexBy="Group"
          margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
          }}
          padding={0}
          innerPadding={0}
          colors="blues"
          colorBy="id"
          defs={[
            {
              "id": "dots",
              "type": "patternDots",
              "background": "inherit",
              "color": "#38bcb2",
              "size": 4,
              "padding": 1,
              "stagger": true
            },
            {
              "id": "lines",
              "type": "patternLines",
              "background": "inherit",
              "color": "#eed312",
              "rotation": -45,
              "lineWidth": 6,
              "spacing": 10
            }
          ]}
          fill={[
            {
              "match": {
                "id": "1"
              },
              "id": "dots"
            },
            {
              "match": {
                "id": "2"
              },
              "id": "lines"
            }
          ]}
          borderColor="inherit:darker(1.6)"
          axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "Group",
            "legendPosition": "middle",
            "legendOffset": 36
          }}
          axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "Word Frequency",
            "legendPosition": "middle",
            "legendOffset": -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate={true}
          motionStiffness={90}
          isInteractive={false}
          motionDamping={15}
          legends={[]}
        />
      </div>
    );
  }
}

export default Charts2;

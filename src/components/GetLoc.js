/*import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GeoLoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
}


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  
  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default GeoLoc;*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }


  watchId: ?number=null

  componentDidMount() {
    console.log(navigator.geolocation.getCurrentPosition);
    console.log(navigator.geolocation.watchId);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log('sfswef');
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
    //console.log(' wfedvegew');
}


  componentWillUnmount() {
    console.log('fwsdc');
    navigator.geolocation.clearWatch(this.watchId);
    console.log('wef');
  }
  
  render() {
    console.log(this.state.latitude);
    console.log(this.state.longitude);
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapView 
          style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

export default GeolocationExample;


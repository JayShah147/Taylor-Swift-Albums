import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GetLoc from './components/GetLoc';
import AlbumList from './components/AlbumList';

const routercomp = () => {
	return (
		<Router>
			<Scene key='getloc' component={GetLoc} title='Location' />
			<Scene key='getalb' component={AlbumList} title='Tourist Guide' />
		</Router>
	);
};

export default routercomp;

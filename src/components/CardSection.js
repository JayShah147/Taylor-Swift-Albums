import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyles}>{props.children}</View>
	);
};

const styles = {
	containerStyles: {
		/*borderWidth: 1,
		borderRadius: 2,*/ 
		
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		/*shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		shadowRadius: 2,
		elevation: 1,
		
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10*/
	}
};

export default CardSection;

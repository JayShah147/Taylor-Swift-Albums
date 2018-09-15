import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
	return (
		<Card>
			<TouchableOpacity onPress={() => Linking.openURL(album.url)}>
				<CardSection>
					<View>
						<Image style={Styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} />
					</View>
					<View style={Styles.headerContentStyle}>
						<Text>{album.title}</Text>
						<Text>{album.artist}</Text>
					</View>
				</CardSection>
			</TouchableOpacity>
			<CardSection>
				<Image style={Styles.tNS} source={{ uri: album.image }} />
			</CardSection>
		</Card>
	);
};

const Styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	tNS: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	}
};

export default AlbumDetail;

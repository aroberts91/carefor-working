import React, { Component } from 'react';

import {TopBarContainer, UserDataContainer} from '../styles/Styled';
import {HeaderLogo} from "./HeaderLogo";
import UserAvatar from "./UserAvatar";
import NotificationAvatar from "./NotificationAvatar";
import ServerSelect from './ServerSelect';
import SearchAvatar from "./SearchAvatar";

export default class TopBar extends Component {
	render() {
		const { photo, name, supportID, supportPIN, no_of_unread_msgs } = this.props.user_data;

		return (
			<TopBarContainer>
				<HeaderLogo/>
				<UserDataContainer>
						<ServerSelect
							selectSystem={ this.props.selectSystem }
							selected_system={ this.props.selected_system }
							systems={ this.props.systems }
						/>
						<SearchAvatar />
						<NotificationAvatar
							unread_msgs={ no_of_unread_msgs }
						/>

						<UserAvatar
							logout={ this.props.logout }
							photo={ photo }
							name={ name }
							support_id ={ supportID }
							support_pin={ supportPIN }
						/>

				</UserDataContainer>
			</TopBarContainer>
		);
	}

}
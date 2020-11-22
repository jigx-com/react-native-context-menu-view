import { Component } from 'react';
import { NativeSyntheticEvent, ViewProps } from 'react-native';

export interface ContextMenuAction {
	/**
	 * The title of the action
	 */
	title: string;
	/**
	 * The icon to use on ios. This is the name of the SFSymbols icon to use. On Android nothing will happen if you set this option. 
	 */
	systemIcon?: string;
	/**
	 * Destructive items are rendered in red on iOS, and unchanged on Android.
	 */
	destructive?: boolean
	/**
	* Whether the action is disabled or not
	*/
	disabled?: boolean
}

export interface ContextMenuOnPressNativeEvent {
	index: number;
	name: string;
}

export interface ContextMenuProps extends ViewProps {
	/**
	 * The title of the menu
	 */
	title?: string;
	/**
	 * The actions to show the user when the menu is activated
	 */
	actions?: Array<ContextMenuAction>;
	/**
	 * This is name of registered component you want to render.
	 *
	 * AppRegistry.registerComponent('previewController', () => PreviewController)
	 */
	previewController?: string
	/**
	 * These props will be send to previewController component.
	 */
	previewControllerProperties?: Record<string, unknown>
	/**
	 * Handle when an action is triggered and the menu is closed. The name of the selected action will be passed in the event. 
	 */
	onPress?: (e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => void;
	/**
	 * Handle when the menu is cancelled and closed
	 */
	onCancel?: () => void;
}

export default class ContextMenu extends Component<ContextMenuProps> {}

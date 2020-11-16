# react-native-context-menu-view

Use native context menu functionality from React Native. On iOS 13+ this uses `UIMenu` functionality, and on Android it uses a `PopUpMenu`.

On iOS 12 and below, nothing happens. You may wish to do a `Platform.OS === 'ios' && parseInt(Platform.Version, 10) <= 12` check, and add your own `onLongPress` handler.

<img src="./assets/context-menu-ios.gif" width="300">

## Getting started

`$ npm install react-native-context-menu-view --save`

### Mostly automatic installation

```bash
cd ios/
pod install
```

## Usage

## Objective C Notes
In order to share the main React Native RCTBridge instantiated in the AppDelegate with the preview view controller one method needs to be added to the AppDelegate in the Objective C project. AppDelegate.h needs to be updated to reflect the method and AppDelegate.m needs to be updaed to declare the bridge globally and a method to share the bridge whe requested but the POD file.

These changes are shown in the example ios project.

## Javascript notes

The example project has been updated with redux tio show state managed between the main navigation and the preview view. This implimentation is conceptial and can be modified by the React Native Developer.

See `example/` for basic usage.

```javascript
import ContextMenu from "react-native-context-menu-view";

const Example = () => {
  return (
    <ContextMenu
      previewController={'yourRNViewClass'}
      actions={[{ title: "Title 1" }, { title: "Title 2" }]}
      onPress={(e) => {
        console.warn(
          `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
        );
      }}
    >
      <View style={styles.yourOwnStyles} />
    </ContextMenu>
  );
};
```

## Props

###### `title`

Optional. The title above the popup menu.

###### `previewController`

Optional. The name of the React Native view you want to display as a custom preview

###### `actions`

Array of `{ title: string, systemIcon?: string, destructive?: boolean, disabled?: boolean }`.

System icon refers to an icon name within [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/).

Destructive items are rendered in red on iOS, and unchanged on Android.

###### `onPress`

Optional. When the popup is opened and the user picks an option. Called with `{ nativeEvent: { index, name } }`. Will return "preview" if the preview view was touched.

###### `onCancel`

Optional. When the popop is opened and the user cancels.

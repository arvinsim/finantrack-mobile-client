# Finantrack Mobile Client

The Android and IOS mobile client for the Finantrack App

# References and Libraries used

- [react-navigation](https://reactnavigation.org/docs/intro/)
- [react-native-elements](https://github.com/react-native-community/react-native-elements)
- [react-native-config](https://github.com/luggit/react-native-config)
- [firebase.io](https://firebase.io)


## Tools

## [react-native-debug-stylesheet](https://github.com/brentvatne/react-native-debug-stylesheet)

When you want to debug a layout problem, override the `Stylesheet` import with below

```javascript
// import { StyleSheet } from 'react-native'
const StyleSheet = require('react-native-debug-stylesheet')
```

If you prefer to use coloured backgrounds, then do this:

```javascript
// import { StyleSheet } from 'react-native'
const StyleSheet = require('react-native-debug-stylesheet').Backgrounds
```

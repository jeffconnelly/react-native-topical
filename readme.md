# Topical
Topical is a React Native app that presents breaking news on all your favorite topics, including technology, sports, science, politics, health, and more!

# Features
Works with News API to present breaking news on the following topics in a clean, easy to use fashion:
- Technology
- Sports
- Business
- Health
- Science
- Politics
- Entertainment
- General

# React Native Details
Uses React Native features such as StackNavigator to quickly shift between page views and to pass props efficiently, and uses the WebView component to be able to open article links natively in the app for a quicker way to browse details on the article.  FlatList is another RN component method to render the ~20 topic articles in a more efficient, native manner.

 ### Test Steps

1 - Install dependencies by typing `yarn install or npm install`

2 - Install and launch the app by typing `react-native run-ios`or `react-native run-android`

3 - If you want to run tests just type `yarn test`

(*) You have to install previously `yarn` and `react-native` commands

### Testing and debugging process

It's been configured [React Native Developer Tools](https://github.com/jhen0409/react-native-debugger)
so you are able to log redux state better. 

# Screenshots

> Landing Page

> ![Landing Page](screenshots/topical-home.png "Landing Page")

> Topic Page

> ![Topic Page](screenshots/topical-topic-page.png "Topic Page")

> Article Page

> ![Article Page](screenshots/topical-article-page.png "Article Page")

> WebView Page

> ![WebView Page](screenshots/topical-webview.png "Webview Page")

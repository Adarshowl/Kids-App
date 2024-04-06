import React, { Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, PermissionsAndroid, Platform, Text, View } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import Splash from './src/screen/Auth/Splash';

// import Login from './src/screens/Auth/Login';
// import Signup from './src/screens/Auth/Signup';
import { COLORS } from './src/constants';
// import Type from './src/screens/Auth/Type';
// import OTP from './src/screens/Auth/OTP';
import configureStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';
import walkAway from './src/screen/Auth/walkAway/Index';
import Welcome from './src/screen/Auth/Welcome/Index';
import Onboarding from './src/screen/Onboarding/Index';

import NewPlan from './src/screen/NewPlan/NewPlan';
import ChoosePlan from './src/screen/NewPlan/ChoosePlan';
import Login from './src/screen/Auth/Login';
import ForgotPassword from './src/screen/Auth/ForgotPassword';
import OtpScreen from './src/screen/Auth/ForgotPassword/OtpScreen';
import ChangePassword from './src/screen/Auth/ForgotPassword/ChangePassword';
import BottomTabNav from './src/navigation/bottom_tab_nav';
import RecipeDetails from './src/screen/Recipes/RecipeDetails';
import EditProfile from './src/screen/Profile/EditProfile';
import PrivacyPolicy from './src/screen/Setting/PrivacyPolicy';
import TermsandCondition from './src/screen/Setting/TermsandCondition';
import About from './src/screen/Setting/About';
import Faq from './src/screen/Setting/Faq';
import Feedback from './src/screen/Setting/Feedback';
import Setting from './src/screen/Setting/Index';
import ContactUs from './src/screen/Setting/ContactUs';
import Workout from './src/screen/Workout/Index';
import VideoPlayerWorkout from './src/screen/Workout/VideoPlayerWorkout';
import DrawerNav from './src/navigation/DrawerNav';
import VideoPlayerCardio from './src/screen/Workout/VideoPlayerCardio';
import Profile from './src/screen/Profile/Index';
import Recipes from './src/screen/Recipes/Index';
import Progress from './src/screen/Progress/Index';
import Favorites from './src/screen/Recipes/Favorites';
import ChangePlan from './src/screen/ChangePlan/Index';
import Schedule from './src/screen/Schedule/Index';
import EditPushUp from './src/screen/Schedule/EditPushUp';
import Grocery from './src/screen/Grocery';
import Blog from './src/screen/Blog/Index';
import BlogList from './src/screen/Blog/BlogList';
import WelcomeKids from './src/screen/Onboarding/WelcomeKids';
import OtpScreenStep from './src/screen/Onboarding/OtpScreenStep';
import Home from './src/screen/Home';
import Spending from './src/screen/Spending/Index';
import Allowance from './src/screen/Allowance/Index';
import Saving from './src/screen/Saving/Index';
import History from './src/screen/Saving/History';
import RoundUpSetting from './src/screen/Saving/RoundUpSetting';
import ParentPaid from './src/screen/Saving/ParentPaid';
import School from './src/screen/School/Index';
import SchoolCategory from './src/screen/School/SchoolCategory';
import AddItem from './src/screen/School/AddItem';
import CanteenScanId from './src/screen/School/CanteenScanId';
import CanteenSupplier from './src/screen/CanteenSupplier/Index';
import StaticsView from './src/screen/School/StaticsView';
import { } from './src/constants/icons';
import TaskHome from './src/screen/TaskHome/Index';
import Rewards from './src/screen/TaskHome/Rewards';
import MyCard from './src/screen/MyCard/Index';
import ShopNow from './src/screen/ShopNow/Index';
import Notification from './src/screen/Notification/Index';
import ManageRestrictions from './src/screen/School/ManageRestrictions';
import RequestAed from './src/screen/Home/RequestAed';
// import DrawerNav from './src/navigation/DrawerNav';
// import { requestUserPermission } from './src/firebase/notificationService';
// import { ShowConsoleLogMessage } from './src/utils/Utility';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();
const store = configureStore();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
const App = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await requestUserPermission();
      }
      await requestNotiPermission();
    })();
  });

  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <View>
            <Text>Loading...</Text>
          </View>
        }>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
              statusBarAnimation: 'slide',
              statusBarColor: COLORS.colorPrimary,
              statusBarStyle: 'light',
            }}>
            <Stack.Screen name="Auth" component={Auth} />
            {/* <Stack.Screen name="MainContainer" component={BottomTabNav} /> */}
            {/*  */}
            <Stack.Screen name="walkAway" component={walkAway} />
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="MainContainer" component={DrawerNav} /> */}
            <Stack.Screen name="MainContainer" component={Home} />

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="WelcomeKids" component={WelcomeKids} />
            <Stack.Screen name="OtpScreenStep" component={OtpScreenStep} />
            <Stack.Screen name="Spending" component={Spending} />
            <Stack.Screen name="Saving" component={Saving} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="RoundUpSetting" component={RoundUpSetting} />
            <Stack.Screen name="ParentPaid" component={ParentPaid} />
            <Stack.Screen name="CanteenScanId" component={CanteenScanId} />

            <Stack.Screen name="Allowance" component={Allowance} />
            <Stack.Screen name="School" component={School} />
            <Stack.Screen name="SchoolCategory" component={SchoolCategory} />
            <Stack.Screen name="AddItem" component={AddItem} />
            <Stack.Screen name="TaskHome" component={TaskHome} />
            <Stack.Screen name="Rewards" component={Rewards} />
            <Stack.Screen name="MyCard" component={MyCard} />
            <Stack.Screen name="ShopNow" component={ShopNow} />
            <Stack.Screen name="Notification" component={Notification} />

            <Stack.Screen name="Recipes" component={Recipes} />
            <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="CanteenSupplier" component={CanteenSupplier} />
            <Stack.Screen name="StaticsView" component={StaticsView} />

            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="TermsandCondition" component={TermsandCondition} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="ManageRestrictions" component={ManageRestrictions} />
            <Stack.Screen name="RequestAed" component={RequestAed} />

            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="EditPushUp" component={EditPushUp} />
            <Stack.Screen name="Grocery" component={Grocery} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />

            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="NewPlan" component={NewPlan} />
            <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Favorites" component={Favorites} />

            <Stack.Screen name="Workout" component={Workout} />
            <Stack.Screen name="VideoPlayerWorkout" component={VideoPlayerWorkout} />

            <Stack.Screen name="VideoPlayerCardio" component={VideoPlayerCardio} />
            <Stack.Screen name="ChangePlan" component={ChangePlan} />
            <Stack.Screen name="Blog" component={Blog} />
            <Stack.Screen name="BlogList" component={BlogList} />


          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </Provider>
  );
};
export default App;

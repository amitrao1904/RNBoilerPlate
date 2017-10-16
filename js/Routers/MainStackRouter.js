import Login from '../containers/Login/'
import ForgetPassword from '../containers/ForgetPassword/'
import Signup from '../containers/Signup/'
import Profile from '../containers/Profile/'
import HomeDrawerRouter from './HomeDrawerRouter'
import { StackNavigator } from 'react-navigation'
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
})
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  ForgetPassword: { screen: ForgetPassword },
  Signup: { screen: Signup },
  Profile: { screen: Profile }
}))

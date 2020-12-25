import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
    AuthMain: undefined;
    HalloAlula: undefined;
    AuthRegister: undefined;
    AuthLogin: undefined;
    Onboarding: undefined;
    Home: undefined;
    ProductList: undefined;
    MerchantList: undefined;
    ProductDetail: undefined;
    OrderSummary: undefined;
    Payment: undefined;
    Chat: undefined;
    Profile: undefined;
    ProfileEdit: undefined;
    OrderList: undefined;
};

export type AuthMainScreenRouteProp = RouteProp<RootStackParamList, 'AuthMain'>;
export type AuthMainScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'AuthMain'>;

export type HalloAlulaProp = RouteProp<RootStackParamList,
    'HalloAlula'>;
export type HalloAlulaNavigationProp = StackNavigationProp<RootStackParamList, 'HalloAlula'>

export type AuthRegisterScreenRouteProp = RouteProp<RootStackParamList,
    'AuthRegister'>;
export type AuthRegisterScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'AuthRegister'>;

export type AuthLoginScreenRouteProp = RouteProp<RootStackParamList,
    'AuthLogin'>;
export type AuthLoginScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'AuthLogin'>;

export type OnboardingScreenRouteProp = RouteProp<RootStackParamList,
    'Onboarding'>;
export type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'Onboarding'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'Home'>;

export type ProductListScreenRouteProp = RouteProp<RootStackParamList,
    'ProductList'>;
export type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'ProductList'>;

export type MerchantListScreenRouteProp = RouteProp<RootStackParamList,
    'MerchantList'>;
export type MerchantListScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'MerchantList'>;

export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList,
    'ProductDetail'>;
export type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'ProductDetail'>;

export type OrderSummaryScreenRouteProp = RouteProp<RootStackParamList,
    'OrderSummary'>;
export type OrderSummaryScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'OrderSummary'>;

export type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;
export type PaymentScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'Payment'>;

export type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;
export type ChatScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'Chat'>;

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'Profile'>;

export type ProfileEditScreenRouteProp = RouteProp<RootStackParamList,
    'ProfileEdit'>;
export type ProfileEditScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'ProfileEdit'>;

export type OrderListScreenRouteProp = RouteProp<RootStackParamList,
    'OrderList'>;
export type OrderListScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'OrderList'>;

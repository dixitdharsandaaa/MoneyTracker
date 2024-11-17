import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

// Navigate to a specific route with optional parameters
export const navigate = (route: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(route, params);
  }
};

// Go back to the previous screen
export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

// Reset the navigation stack to a new route and params
export const resetNavigationStack = (route: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0, // Set the first screen in the stack
      routes: [{name: route, params}],
    });
  }
};

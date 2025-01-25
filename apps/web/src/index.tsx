import { AppRegistry } from 'react-native';

import {App} from '@Gitflow_Prueba/core';

AppRegistry.registerComponent('Gitflow_Prueba', () => App);
AppRegistry.runApplication('Gitflow_Prueba', {
  rootTag: document.getElementById('root'),
});

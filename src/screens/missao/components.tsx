import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

const Status = () => (
    <ProgressBar progress={0.6} color={Colors.red800} />
);

const SubStatus = () => (
    <ProgressBar progress={0.3} color={'#800080'} />
);

export default Status;SubStatus;
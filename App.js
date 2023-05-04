import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getInstallReferrer } from '@use-expo/application';

export default function App() {
  const [referrer, setReferrer] = useState('');

  useEffect(() => {
    async function getReferrer() {
      try {
        const referrer = await getInstallReferrer();
        setReferrer(referrer);
        console.log('Install Referrer:', referrer);
      } catch (e) {
        console.log('Error retrieving install referrer:', e);
      }
    }

    getReferrer();
  }, []);
 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Install Referrer: {referrer}</Text>
    </View>
  );
}

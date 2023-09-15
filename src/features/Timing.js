import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing} from '../utils/sizes'
export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        size={50}
        title="10"
        onPress={() => {
          onChangeTime(10);
        }}
      />
      <RoundedButton
        size={50}
        title="15"
        onPress={() => {
          onChangeTime(15);
        }}
      />
      <RoundedButton
        size={50}
        title="20"
        onPress={() => {
          onChangeTime(20);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.lg,
    alignItems: 'center',
  },
});

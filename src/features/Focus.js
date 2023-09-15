import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  const onAddSubjectClick = () => {
    addSubject(subject)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on"
        />
        <View style={styles.button}>
        <RoundedButton  title='+' size={spacing.xxl} onPress={onAddSubjectClick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
  inputContainer: {
    justifyContent: 'top',
    flexDirection: 'row',
    padding: spacing.lg,
    
  },
});

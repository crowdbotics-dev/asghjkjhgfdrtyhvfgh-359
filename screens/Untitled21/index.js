import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled21 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.QMRqeDio}></TextInput><View style={styles.KxYBiqDF}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QMRqeDio: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  KxYBiqDF: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    color: "#777777"
  }
});
export default Untitled21;
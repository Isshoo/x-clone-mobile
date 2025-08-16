import { useClerk } from "@clerk/clerk-expo";
import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          signOut({ redirectUrl: "/(auth)" });
        }}
      />
    </View>
  );
};

export default HomeScreen;

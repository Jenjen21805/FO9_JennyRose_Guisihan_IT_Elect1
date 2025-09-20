import React from "react";
import { View, Text } from "react-native";

export default function ChatBubble({ text, isMe }) {
  return (
    <View
      style={{
        alignSelf: isMe ? "flex-end" : "flex-start",
        backgroundColor: isMe ? "pink" : "gray",
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: "70%",
      }}
    >
      <Text style={{ color: isMe ? "white" : "black" }}>{text}</Text>
    </View>
  );
}
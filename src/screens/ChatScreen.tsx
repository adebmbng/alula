import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {GiftedChat, IMessage, Send} from 'react-native-gifted-chat';

import IconArrowSend from '../assets/IconArrowSend.svg';
import {
  ChatContainer,
  ChatOrder,
  ChatText,
  ChatThank,
} from '../components/chat/ChatBubble';
import Input from '../components/common/Input';
import Spacer from '../components/common/Spacer';
import {Colors} from '../configs/theme_config';

type Message = IMessage & {
  order?: {
    name: string;
    image: string;
    status: 'done' | 'ongoing';
    quantity: number;
    dueDate: number;
  };
  thank?: {
    text: string;
  };
};

const messagesData: Message[] = [
  {
    _id: 1,
    text: '',
    createdAt: new Date(),
    user: {_id: 2},
    order: {
      name: 'Order Summary: Kartu Nama',
      image: 'http://placeimg.com/640/480/any',
      status: 'done',
      quantity: 250,
      dueDate: 5,
    },
  },
  {
    _id: 2,
    text: '',
    createdAt: new Date(),
    user: {_id: 2},
    thank: {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  },
  {
    _id: 3,
    text: '',
    createdAt: new Date(),
    user: {_id: 2},
    order: {
      name: 'Order Summary: Kartu Nama',
      image: 'http://placeimg.com/640/480/any',
      status: 'ongoing',
      quantity: 150,
      dueDate: 5,
    },
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    messagesData.reverse();
    setMessages(messagesData);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prev) => GiftedChat.append(prev, newMessages));
  }, []);

  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => onSend(newMessage)}
        user={{_id: 1}}
        messagesContainerStyle={{
          paddingBottom: 30,
        }}
        renderMessage={(message) => {
          return (
            <ChatContainer
              userId={1}
              senderUserId={message.currentMessage?.user._id || ''}>
              {message.currentMessage?.order ? (
                <ChatOrder
                  name={message.currentMessage?.order.name}
                  image={message.currentMessage?.order.image}
                  dueDate={message.currentMessage?.order.dueDate}
                  quantity={message.currentMessage?.order.quantity}
                  status={message.currentMessage?.order.status}
                />
              ) : message.currentMessage?.thank ? (
                <ChatThank text={message.currentMessage?.thank.text} />
              ) : (
                <ChatText text={message.currentMessage?.text || ''} />
              )}
            </ChatContainer>
          );
        }}
        maxComposerHeight={100}
        alwaysShowSend={true}
        renderSend={(props) => (
          <Send
            containerStyle={{
              backgroundColor: Colors.Primary,
            }}
            {...props}>
            <View
              style={{
                backgroundColor: Colors.Primary,
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Colors.White,
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                }}>
                <IconArrowSend />
              </View>
            </View>
          </Send>
        )}
        renderComposer={({onTextChanged}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.Primary,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 8,
              paddingVertical: 10,
              width: Dimensions.get('screen').width - 70,
            }}>
            <View style={{flex: 1}}>
              <Input
                onChangeText={onTextChanged}
                style={{backgroundColor: Colors.White, marginBottom: 0}}
              />
            </View>
            <Spacer w={8} />
          </View>
        )}
      />
      {/* {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />} */}
    </View>
  );
};

export default ChatScreen;

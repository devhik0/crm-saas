import { EncryptionMode, SDK_MODE, UID } from "agora-rtc-sdk-ng";

const config: configType = {
  uid: 0,
  appId: "7426c165b5eb4f398894dd6d34cbc2d1",
  channelName: "test",
  rtcToken:
    "007eJxSYHi3Z8Md4aSaTI1bRzJ89h4piDl27po56xn166vlWHmXTbyvwGBuYmSWbGhmmmSammSSZmxpYWFpkpJilmJskpyUbJRiuFnqWmqBOAODXmgUAyMDIwMLAyMDiM8EJpnBJAuULEktLmFgAAQAAP//z+8hIA==",
  serverUrl: "",
  proxyUrl: "http://localhost:8080/",
  tokenExpiryTime: 6000,
  token: "",
  encryptionMode: "aes-128-gcm2",
  salt: "",
  encryptionKey: "",
  destChannelName: "",
  destChannelToken: "",
  destUID: 2,
  secondChannel: "",
  secondChannelToken: "",
  secondChannelUID: 2,
  selectedProduct: "rtc",
};

export type configType = {
  uid: UID;
  appId: string;
  channelName: string;
  rtcToken: string | null;
  serverUrl: string;
  proxyUrl: string;
  tokenExpiryTime: number;
  token: string;
  encryptionMode: EncryptionMode;
  salt: "";
  encryptionKey: string;
  destUID: number;
  destChannelName: string;
  destChannelToken: string;
  secondChannel: string;
  secondChannelToken: string;
  secondChannelUID: number;
  selectedProduct: SDK_MODE;
};

export default config;

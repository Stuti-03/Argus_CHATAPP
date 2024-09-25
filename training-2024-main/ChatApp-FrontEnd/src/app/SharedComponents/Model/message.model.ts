export interface Message {
  messageId: number;
  content: string;
  senderId: number;
  receiverId: number;
  timestamp: string; // Can be string or Date, depending on your usage
  seen: Boolean;
}

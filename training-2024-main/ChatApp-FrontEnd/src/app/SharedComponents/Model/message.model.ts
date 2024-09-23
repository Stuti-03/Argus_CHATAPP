export interface Message {
  MessageId: number;
  content: string;
  senderId: number;
  receiverId: number;
  timestamp: Date; // Can be string or Date, depending on your usage
  seen: Boolean;
}

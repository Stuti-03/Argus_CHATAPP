using System;

namespace ChatApp.Models;

public class ReceiveMessageModel
{
    public int MessageId {get; set;}
    public required int SenderId { get; set; }
    public required int ReceiverId { get; set; }
    public required string Content { get; set; }
    public DateTime Timestamp { get; set; }
    public bool Seen { get; set; }
}

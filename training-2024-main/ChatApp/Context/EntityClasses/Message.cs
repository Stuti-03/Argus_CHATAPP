using ChatApp.Business.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ChatApp.Context.EntityClasses
{
    public class Message
    {
        [Key]
        public int MessageId {get; set;}
        public required int SenderId {get; set;}
        public required int ReceiverId {get; set;}
        public required string Content {get; set;}
        public DateTime Timestamp { get; set; }
        public bool Seen {get; set;} = false;
// transactions
        [ForeignKey("SenderId")]
        public Profile Sender { get; set; }
        [ForeignKey("ReceiverId")]
        public Profile Receiver { get; set; }
        // public DateTime Timestamp { get; internal set; }
    }
}
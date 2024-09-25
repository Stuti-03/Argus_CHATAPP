using ChatApp.Business.Helpers;
using ChatApp.Business.ServiceInterfaces;
using ChatApp.Context.EntityClasses;
using ChatApp.Models;

namespace ChatApp.Infrastructure.ServiceImplementation;

    public class MessageService : IMessageService
    {
        private readonly ChatAppContext config;

        public MessageService(ChatAppContext config)
        {
            this.config = config;
        }

        //sending messages
        public Message Sendmessage(SendModel sendModel){
            var message = new Message
        {
            SenderId = sendModel.SenderId,
            ReceiverId = sendModel.ReceiverId,
            Content = sendModel.Content,
            Timestamp = DateTime.Now,
            Seen = false,
        };
        config.Messages.Add(message);
        config.SaveChanges();

        return message;
        }

        // getting messages
    public  List<SendModel> ReceiveMessage(int SenderId, int ReceiverId)
    {
        return config
                .Messages.Where(m =>
                    (m.SenderId == SenderId && m.ReceiverId == ReceiverId)
                    || (m.SenderId == ReceiverId && m.ReceiverId == SenderId)
                ).OrderBy(m => m.Timestamp).Select(
                    m => new SendModel{
                        SenderId = m.SenderId,
                        ReceiverId = m.ReceiverId,
                        Content = m.Content,
                        Timestamp = m.Timestamp
                    }
                ).ToList();
    }}

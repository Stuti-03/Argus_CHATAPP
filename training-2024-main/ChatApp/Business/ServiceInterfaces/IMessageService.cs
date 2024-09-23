using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.Context.EntityClasses;
using ChatApp.Models;

namespace ChatApp.Business.ServiceInterfaces
{
    public interface IMessageService
    {
        Message Sendmessage(SendModel sendModel);

        List<SendModel> ReceiveMessage(int SenderId, int ReceiverId);
    }
}
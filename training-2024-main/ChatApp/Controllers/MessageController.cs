using ChatApp.Business.ServiceInterfaces;
using ChatApp.Context.EntityClasses;
using ChatApp.Models;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ChatApp;

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{
    private readonly ChatAppContext _chatAppContext;
    private readonly IConfiguration  _config;
    private readonly IMessageService _messageService;
    public MessageController(IConfiguration config, IMessageService messageService, ChatAppContext chatAppContext)
    {
        _config = config;
        _messageService = messageService;
    }

    // getting list of messages from a particular senderid to receiverid   
        [HttpGet("getMessages")]
        public ActionResult<List<SendModel>> ReceiveMessage(int SenderId, int ReceiverId)
        {
            var messages = _messageService.ReceiveMessage(SenderId, ReceiverId);
            return Ok(messages);
        }

    //sending messages
    [HttpPost("SendMessage")]
    public IActionResult SendMessage([FromBody] SendModel sendModel)
    {
        var message = _messageService.Sendmessage(sendModel);
        
        if (message == null || message.SenderId <= 0 || message.ReceiverId <= 0 || string.IsNullOrEmpty(message.Content))
            {
                return BadRequest("Invalid messsage and data");
            }
            return Ok(message);
           
    }



    //Seen API
    // [HttpPost("mark-as-read")]
    // public async Task<IActionResult> MarkAsRead([FromBody] MarkAsReadRequest request)
    // {
    //     if (request == null || request.MessageIds == null || request.MessageIds.Count == 0)
    //     {
    //         return BadRequest("Invalid request.");
    //     }

    //     // Fetch messages that need to be marked as read
    //     var messages = await _chatAppContext.Messages
    //         .Where(m => request.MessageIds.Contains(m.MessageId) && m.ReceiverId == request.ReceiverId)
    //         .ToListAsync();

    //     // Update the IsRead status
    //     foreach (var message in messages)
    //     {
    //         message.Seen = true;
    //     }

    //     // Save changes to the database
    //     await _chatAppContext.SaveChangesAsync();

    //     return Ok(new { count = messages.Count() }); // Return how many messages were updated
    // }

}
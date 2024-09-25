using ChatApp.Business.ServiceInterfaces;
using ChatApp.Context.EntityClasses;
using ChatApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace ChatApp;

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{

    private readonly IConfiguration _config;
    private readonly IMessageService _messageService;
    public MessageController(IConfiguration config, IMessageService messageService)
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
}
using ChatApp.Context.EntityClasses;
using Microsoft.EntityFrameworkCore;

namespace ChatApp;

public class ChatAppContext : DbContext
{
     public ChatAppContext(DbContextOptions<ChatAppContext> options) : base(options) { }

     public DbSet<Profile> Profiles { get; set; }

     public DbSet<Message> Messages { get; set; }
}

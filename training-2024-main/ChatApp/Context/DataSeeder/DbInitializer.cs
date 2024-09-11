using ChatApp.Business.Helpers;
using ChatApp.Context;
using ChatApp.Context.EntityClasses;
using System;

namespace ChatApp
{
    public static class DbInitializer
    {
        public static void Initialize(ChatAppContext context)
        {
            context.Database.EnsureCreated();

            // Check if there are any profiles already in the database
            if (context.Profiles.Any())
            {
                return; // DB has been seeded
            }

            var profiles = new Profile[]
            {
                new Profile { FirstName = "Vipul", LastName = "Vaghela", UserName = "vvaghela", Email = "vvaghela@argusoft.com", Password = "password123", ProfileType = ProfileType.Administrator, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Ajay", LastName = "Raval", UserName = "araval", Email = "araval@argusoft.com", Password = "password123", ProfileType = ProfileType.Administrator, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Karan", LastName = "Patel", UserName = "kpatel", Email = "karanp@argusoft.in", Password = "password123", ProfileType = ProfileType.Administrator, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Bhanwarlal", LastName = "Prajapat", UserName = "bprajapat", Email = "bhanwarlal.prajapat@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Pawas", LastName = "Agrawal", UserName = "pagrawal", Email = "pawas.agrawal@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Ayush", LastName = "Anand", UserName = "aanand", Email = "ayush.anand@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Vidhi", LastName = "Kumari", UserName = "vkumari", Email = "vidhi.kumari@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Vivek", LastName = "Singh", UserName = "vsingh", Email = "vivek.singh@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 },
                new Profile { FirstName = "Stuti", LastName = "Mittal", UserName = "smittal", Email = "stuti.mittal@argusoft.in", Password = "password123", ProfileType = ProfileType.User, CreatedAt = DateTime.Now, CreatedBy = 1, LastUpdatedAt = DateTime.Now, LastUpdatedBy = 1 }
            };

            foreach (Profile p in profiles)
            {
                context.Profiles.Add(p);
            }

            context.SaveChanges();
        }
    }
}

using ChatApp.Business.Helpers;
using ChatApp.Business.ServiceInterfaces;
using ChatApp.Context.EntityClasses;
using ChatApp.Models;

namespace ChatApp;

public class ProfileService : IProfileService
    {
        private readonly ChatAppContext context;

        public ProfileService(ChatAppContext context)
        {
            this.context = context;
        }
        public Profile CheckPassword(LoginModel model)
        {
            return this.context.Profiles.FirstOrDefault(x => model.Password == x.Password
            && (x.Email.ToLower().Trim() == model.EmailAddress.ToLower().Trim() || x.UserName.ToLower().Trim() == model.Username.ToLower().Trim()));
        }

        public Profile RegisterUser(RegisterModel regModel)
        {
            Profile newUser = null;
            if (!CheckEmailOrUserNameExists(regModel.UserName, regModel.Email))
            {
                newUser = new Profile
                {
                    FirstName = regModel.FirstName,
                    LastName = regModel.LastName,
                    Password = regModel.Password,
                    UserName = regModel.UserName,
                    Email = regModel.Email,
                    CreatedAt = DateTime.Now,
                    ProfileType = ProfileType.User,
                    CreatedBy = 1,
                    LastUpdatedBy = 1,
                    LastUpdatedAt = DateTime.Now
                };
                context.Profiles.Add(newUser);
                context.SaveChanges();
            }
            return newUser;
        }

public List<ProfileModel> GetAllUsers(int id)
    {
        return context.Profiles.Where(s => s.Id != id).Select(profile => new ProfileModel
        {
            Id = profile.Id,
            FirstName = profile.FirstName,
            LastName = profile.LastName,
            Email = profile.Email,
            UserName = profile.UserName
        }).ToList();
    }
        private bool CheckEmailOrUserNameExists(string userName, string email)
        {
            return context.Profiles.Any(x => x.Email.ToLower().Trim() == email.ToLower().Trim() || x.UserName.ToLower().Trim() == userName.ToLower().Trim());
        }
    }
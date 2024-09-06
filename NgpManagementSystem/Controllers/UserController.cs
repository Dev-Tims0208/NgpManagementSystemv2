using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NgpManagementSystem.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }
    }
}
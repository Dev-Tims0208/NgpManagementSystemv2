using NgpManagementSystem.Models;
using NgpManagementSystem.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Web;
using System.Web.Mvc;

namespace NgpManagementSystem.Controllers
{
    public class UserActivityLogsController : Controller
    {
        // GET: UserActivityLogs
        public NgpdbmsEntities Db = new NgpdbmsEntities();
        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UserContractorLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult UserProjectLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }

        public ActionResult UserContractLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult UserPaymentLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult UserAccountLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }



       

    }
}
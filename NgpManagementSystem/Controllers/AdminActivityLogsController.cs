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
    public class AdminActivityLogsController : Controller
    {
        public NgpdbmsEntities Db = new NgpdbmsEntities();
        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ContractorLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult ProjectLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult AccountLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }

        public ActionResult PaymentLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


        public ActionResult ContractLogs()
        {
            if (Request.Cookies["auth"].Values["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }


    }
}
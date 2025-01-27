﻿using NgpManagementSystem.DTO;
using NgpManagementSystem.Models;
using Scrypt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NgpManagementSystem.Controllers
{
    public class NgpManagementController : Controller
    {
        // GET: Login
        public NgpdbmsEntities Db = new NgpdbmsEntities();
        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }
        public ActionResult Login() //the same name to login
        {
            return View();

        }

        [HttpPost]
        public ActionResult Login(NgpUser log) //the same name to login
        {
            ScryptEncoder encoder = new ScryptEncoder();

            var result = Db.NgpUsers.SingleOrDefault(a => a.UserName == log.UserName);

            if (Request.Cookies["auth"] != null)
            {
                Response.Cookies["auth"].Expires = DateTime.Now.AddDays(-1);
            }

            if (result != null)
            {
                if (!encoder.Compare(log.Password, result.Password))
                {
                    ViewBag.Message = "Incorrect Username or Password";
                    return View(log);
                }


                HttpCookie myCookie = new HttpCookie("auth");

                //Add key-values in the cookie
                myCookie.Values.Add("Role_Id", result.RoleID.ToString());
                myCookie.Values.Add("LoginID", result.Id.ToString());
                //myCookie.Values.Add("RoleName", result.RoleName.ToString());

                //set cookie expiry date-time. Made it to last for next 12 hours.
                myCookie.Expires = DateTime.Now.AddHours(12);

                //Most important, write the cookie to client.
                Response.Cookies.Add(myCookie);

                FormsAuthentication.SetAuthCookie(result.UserName, false);

                Db.NgpLoginLogs.Add(new NgpLoginLog()
                {


                    LoginId = result.Id,
                    LoginTime = DateTime.Now,

                    //UserName = Db.NgpUsers.FirstOrDefault(o => o.Id == sess_id)?.UserName,
                    //LogMessage = "Edit a  User Account  " + "Name of user: " + accountdt.Name + "Name of Editor:" + accountdt.UserName + "Role:" + accountdt.NgpRole.RoleName,
                    //UserId = Db.NgpUsers.FirstOrDefault(o => o.Id == sess_id)?.Id,
                    //RoleId = Db.NgpUsers.FirstOrDefault(o => o.Id == sess_id)?.RoleID,
                    //Position = Db.NgpUsers.FirstOrDefault(o => o.Id == sess_id)?.Position,
                });
                Db.SaveChanges();
                //IF admin
                if (result.RoleID == 1)
                {
                    return RedirectToAction("Developer", "Dashboard");

                }
                if (result.RoleID == 2)
                {
                    return RedirectToAction("Administrator", "Dashboard");

                }
                if (result.RoleID == 3)
                {
                    return RedirectToAction("Users", "Dashboard");

                }


            }
            else
            {
                ViewBag.Message = "Incorrect Username or Password";
            }



            return View(log);
        }

        public ActionResult Logout()
        {
            if (Request.Cookies["auth"] != null)
            {
                Response.Cookies["auth"].Expires = DateTime.Now.AddDays(-1);
            }
            FormsAuthentication.SignOut();
            return Redirect("Login");
        }
    }
}
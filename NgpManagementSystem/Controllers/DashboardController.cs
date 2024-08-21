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
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public NgpdbmsEntities Db = new NgpdbmsEntities();

        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }
        public ActionResult Index()
        {
            if (Session["Role_Id"] == null)
            {
                return RedirectToAction("logout", "NgpManagement");
            }
            return View();
        }

        public ActionResult GetContractorReports()
        {
            //Server Side Parameter
            int start = Convert.ToInt32(Request["start"]);
            int length = Convert.ToInt32(Request["length"]);
            string searchValue = Request["search[value]"];
            string sortColumnName = Request["columns[" + Request["order[0][column]"] + "][name]"];
            string sortDirection = Request["order[0][dir]"];

            using (NgpdbmsEntities Db = new NgpdbmsEntities())

            {
                IQueryable<ngp_contractor> contractorlist = Db.ngp_contractor;

             


                int totalrows = contractorlist.Count();

                if (!string.IsNullOrEmpty(searchValue))//FILTER SEARCH
                {
                    contractorlist = contractorlist.
                        Where(x => x.contractorID.ToString().Contains(searchValue.ToLower()) ||
                            x.contractor_name.ToString().Contains(searchValue.ToLower()) ||
                            x.contractcost_year1.ToLower().Contains(searchValue.ToLower()) ||
                            x.contractcost_year2.ToString().Contains(searchValue.ToLower()) ||
                            x.contractcost_year3.ToString().Contains(searchValue.ToLower()) ||
                            x.area.ToString().Contains(searchValue.ToLower()) ||
                            x.forestTrees.ToString().Contains(searchValue.ToLower()) ||
                            x.fruitTrees.ToString().Contains(searchValue.ToLower()) ||
                            x.bamboo.ToString().Contains(searchValue.ToLower()) ||
                            x.mangrove.ToString().Contains(searchValue.ToLower()));


                }

                //SEARCH FILTER  ROLE
                if (!string.IsNullOrEmpty(Request["columns[5][search][value]"]))
                {
                    var filtersearcroles = Request["columns[5][search][value]"].ToLowerInvariant();
                    contractorlist = contractorlist.Where(x => x.NgpRole != null && x.NgpRole.RoleName.ToLower().Contains(filtersearcroles)).OrderBy(x => x.contractorID);
                }


                //SEARCH FILTER  CONTRACTOR NAME
                //if (!string.IsNullOrEmpty(Request["columns[1][search][value]"]))
                //{
                //    var filtersearchcontractor= Request["columns[1][search][value]"].ToLowerInvariant();
                //    contractorlist = contractorlist.Where(x => x.contractor_name != null && x.contractor_name.ToLower().Contains(filtersearchcontractor)).OrderBy(x => x.contractorID);
                //}


                int totalrowsafterfiltering = contractorlist.Count();
                //sorting
                contractorlist = contractorlist.OrderBy(sortColumnName + " " + sortDirection)
                    .OrderByDescending(a => a.contractorID); //ADD SYSTEM LINQ DYNAMINC IN NUGGET MANAGER(DOWNLOAD)

                //paging
                contractorlist = contractorlist.Skip(start).Take(length);

                var contractorview = contractorlist.Select(user => new ContractorReportsVM()
                {


                    contractorID = user.contractorID,
                    contractor_name = user.contractor_name,
                    contractcost_year1 = user.contractcost_year1,
                    contractcost_year2 = user.contractcost_year2,
                    contractcost_year3 = user.contractcost_year3,
                    area = user.area,
                    forestTrees = user.forestTrees,
                    fruitTrees = user.fruitTrees,
                    bamboo = user.bamboo,
                    mangrove = user.mangrove,


                }).ToList();


                return Json(new { data = contractorview, draw = Request["draw"], recordsTotal = totalrows, recordsFiltered = totalrowsafterfiltering }, JsonRequestBehavior.AllowGet);

            }



        }


        public ActionResult NgpLogsTotal()
        {
            //Server Side Parameter
            int start = Convert.ToInt32(Request["start"]);
            int length = Convert.ToInt32(Request["length"]);
            string searchValue = Request["search[value]"];
            string sortColumnName = Request["columns[" + Request["order[0][column]"] + "][name]"];
            string sortDirection = Request["order[0][dir]"];

            using (NgpdbmsEntities Db = new NgpdbmsEntities())

            {
                IQueryable<NgpLog> loglist = Db.NgpLogs;




                int totalrows = loglist.Count();

                if (!string.IsNullOrEmpty(searchValue))//FILTER SEARCH
                {
                    loglist = loglist.
                        Where(x => x.Id.ToString().Contains(searchValue.ToLower()) ||
                            x.Date.ToString().Contains(searchValue.ToLower()) ||
                            x.UserName.ToLower().Contains(searchValue.ToLower()) ||
                            x.Name.ToString().Contains(searchValue.ToLower()) ||
                            x.LogMessage.ToString().Contains(searchValue.ToLower()) ||
                            x.UserId.ToString().Contains(searchValue.ToLower()) ||
                             x.Position.ToString().Contains(searchValue.ToLower()) ||
                            x.NgpRole.RoleName.ToString().Contains(searchValue.ToLower()));

                }

         


                int totalrowsafterfiltering = loglist.Count();
                //sorting
                loglist = loglist.OrderBy(sortColumnName + " " + sortDirection)
                    .OrderByDescending(a => a.Id); //ADD SYSTEM LINQ DYNAMINC IN NUGGET MANAGER(DOWNLOAD)

                //paging
                loglist = loglist.Skip(start).Take(length);

                var totallogsview = loglist.Select(user => new NgpLogsVM()
                {


                    Id = user.Id,
                    Date = user.Date,
                    UserName = user.UserName,
                    Name = user.Name,
                    LogMessage = user.LogMessage,
                    RoleId = user.NgpRole.RoleName,
                    Position = user.Position,

                }).ToList();


                return Json(new { data = totallogsview, draw = Request["draw"], recordsTotal = totalrows, recordsFiltered = totalrowsafterfiltering }, JsonRequestBehavior.AllowGet);

            }



        }


    }
}
using AutoMapper;
using Microsoft.Ajax.Utilities;
using NgpManagementSystem.DTO;
using NgpManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace NgpManagementSystem.Controllers.API
{
    public class ContractApiController : ApiController
    {

        public NgpdbmsEntities Db = new NgpdbmsEntities();

        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }


        //get data for YEAR
        [HttpGet]
        [Route("api/yeargetdata/get")]
        public IHttpActionResult GetYEARrData()
        {
            var year = Db.NgpYears.ToList().Select(Mapper.Map<NgpYear, YearDTO>);
            return Ok(year.OrderByDescending(x => x.Id));
        }


     

        //get data for contractor
        [HttpGet]
        [Route("api/contractorgetdata/get")]
        public IHttpActionResult GetContractorData()
        {
            var contractor = Db.ngp_contractor.ToList().Select(Mapper.Map<ngp_contractor, ContractorDTO>);
            return Ok(contractor.OrderByDescending(x=>x.contractorID));
        }
    }
}

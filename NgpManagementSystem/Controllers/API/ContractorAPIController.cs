﻿using AutoMapper;
using NgpManagementSystem.DTO;
using NgpManagementSystem.Models;
using NgpManagementSystem.ViewModel;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace NgpManagementSystem.Controllers.API
{
    public class ContractorAPIController : ApiController
    {
        public NgpdbmsEntities Db = new NgpdbmsEntities();

        protected override void Dispose(bool disposing)
        {

            Db.Dispose();
        }
        //CREATE/SAVING METHODS contractor
        [HttpPost
        ]
        [Route("api/contractor/post")
        ]
        public IHttpActionResult SaveContractor(ContractorDTO contractorDTO)
        {
            var contractor = Mapper.Map<ContractorDTO, ngp_contractor>(contractorDTO);

            var sess_id = Request.Headers.GetCookies("auth").FirstOrDefault()?["auth"].Values.Get("LoginID");

            if (contractorDTO.contractorID == 0)
            {

                contractor.contractor_name = contractorDTO.contractor_name ?? "N/A";
                contractor.address_municipality = contractorDTO.address_municipality ; 
                contractor.address_barangay = contractorDTO.address_barangay ;
                contractor.contractor_type = contractorDTO.contractor_type ?? "N/A";
                //for Project
                contractor.location_municipality = contractorDTO.location_municipality ;
                contractor.location_barangay = contractorDTO.location_barangay;
                contractor.area = contractorDTO.area ?? "N/A";
                contractor.year_form = contractorDTO.year_form ?? "N/A";
                contractor.penro = contractorDTO.penro ?? "N/A";
                contractor.cenro = contractorDTO.cenro ?? "N/A";
                contractor.region = contractorDTO.region ?? "N/A";

                //for contract year 1
                contractor.moanumber_year1 = contractorDTO.moanumber_year1 ?? "N/A";
                contractor.datemoasigned_year1 = contractorDTO.datemoasigned_year1 ?? "N/A";
                contractor.contractcost_year1 = contractorDTO.contractcost_year1 ?? "N/A";
                contractor.dateobligated_year1 = contractorDTO.dateobligated_year1 ?? "N/A";
                contractor.orsno_year1 = contractorDTO.orsno_year1 ?? "N/A";
                contractor.num_seedlings_produced_year1 = contractorDTO.num_seedlings_produced_year1 ?? "N/A";
                contractor.forest_trees_year1 = contractorDTO.forest_trees_year1 ?? "N/A";
                contractor.fruit_trees_year1 = contractorDTO.fruit_trees_year1 ?? "N/A";
                contractor.bamboo_year1 = contractorDTO.bamboo_year1 ?? "N/A";
                contractor.mangrove_year1 = contractorDTO.mangrove_year1 ?? "N/A";
                contractor.num_seedlings_planted_year1 = contractorDTO.num_seedlings_planted_year1 ?? "N/A";
                contractor.survivalrate_year1 = contractorDTO.survivalrate_year1 ?? "N/A";
                //added
                contractor.fruitTrees = contractorDTO.fruitTrees ?? "N/A";
                contractor.forestTrees = contractorDTO.forestTrees ?? "N/A";
                contractor.bamboo = contractorDTO.bamboo ?? "N/A";
                contractor.mangrove = contractorDTO.mangrove ?? "N/A";


                //for contract year 2
                contractor.moanumber_year2 = contractorDTO.moanumber_year2 ?? "N/A";
                contractor.datemoasigned_year2 = contractorDTO.datemoasigned_year2 ?? "N/A";
                contractor.unitcost_year2 = contractorDTO.unitcost_year2 ?? "N/A";
                contractor.contractcost_year2 = contractorDTO.contractcost_year2 ?? "N/A";
                contractor.dateobligated_year2 = contractorDTO.dateobligated_year2 ?? "N/A";
                contractor.orsno_year2 = contractorDTO.orsno_year2 ?? "N/A";
                contractor.num_seedlings_planted_year2 = contractorDTO.num_seedlings_planted_year2 ?? "N/A";
                contractor.num_seedlings_survive_endofyear_1_year2 = contractorDTO.num_seedlings_survive_endofyear_1_year2 ?? "N/A";
                contractor.survivalrate_year2 = contractorDTO.survivalrate_year2 ?? "N/A";
                contractor.num_seedlings_replanted_year2 = contractorDTO.num_seedlings_replanted_year2 ?? "N/A";

                //for contract year 3
                contractor.moanumber_year3 = contractorDTO.moanumber_year3 ?? "N/A";
                contractor.datemoasigned_year3 = contractorDTO.datemoasigned_year3 ?? "N/A";
                contractor.unitcost_year3 = contractorDTO.unitcost_year3 ?? "N/A";
                contractor.contractcost_year3 = contractorDTO.contractcost_year3 ?? "N/A";
                contractor.dateobligated_year3 = contractorDTO.dateobligated_year3 ?? "N/A";
                contractor.orsno_year3 = contractorDTO.orsno_year3 ?? "N/A";
                contractor.num_seedlings_planted_year3 = contractorDTO.num_seedlings_planted_year3 ?? "N/A";
                contractor.num_seedlings_survive_endofyear_1_year3 = contractorDTO.num_seedlings_survive_endofyear_1_year3 ?? "N/A";
                contractor.survivalrate_year3 = contractorDTO.survivalrate_year3 ?? "N/A";
                contractor.num_seedlings_replanted_year3 = contractorDTO.num_seedlings_replanted_year3 ?? "N/A";

                //for payments 

                //year1 1st release
                contractor.grossammount_year1_1st = contractorDTO.grossammount_year1_1st ?? "N/A";
                contractor.lddap_no_year1_1st = contractorDTO.lddap_no_year1_1st ?? "N/A";
                contractor.date_lddap_year1_1st = contractorDTO.date_lddap_year1_1st ?? "N/A";

                //year1 2nd release
                contractor.grossammount_year1_2nd = contractorDTO.grossammount_year1_2nd ?? "N/A";
                contractor.retentionfee_year1_2nd = contractorDTO.retentionfee_year1_2nd ?? "N/A";
                contractor.mobilization_fund_year1_2nd = contractorDTO.mobilization_fund_year1_2nd ?? "N/A";
                contractor.amountless_rf_mf_year1_2nd = contractorDTO.amountless_rf_mf_year1_2nd ?? "N/A";
                contractor.bir_year1_2nd = contractorDTO.bir_year1_2nd ?? "N/A";
                contractor.netammountpaid_year1_2nd = contractorDTO.netammountpaid_year1_2nd ?? "N/A";
                contractor.lddapno_year1_2nd = contractorDTO.lddapno_year1_2nd ?? "N/A";
                contractor.date_lddap_year1_2nd = contractorDTO.date_lddap_year1_2nd ?? "N/A";


                //year1 3rd release
                contractor.grossammount_year1_3rd = contractorDTO.grossammount_year1_3rd ?? "N/A";
                contractor.retentionfee_year1_3rd = contractorDTO.retentionfee_year1_3rd ?? "N/A";
                contractor.mobilization_fund_year1_3rd = contractorDTO.mobilization_fund_year1_3rd ?? "N/A";
                contractor.amountless_rf_mf_year1_3rd = contractorDTO.amountless_rf_mf_year1_3rd ?? "N/A";
                contractor.bir_year1_3rd = contractorDTO.bir_year1_2nd ?? "N/A";
                contractor.netammountpaid_year1_3rd = contractorDTO.netammountpaid_year1_3rd ?? "N/A";
                contractor.lddapno_year1_3rd = contractorDTO.lddapno_year1_3rd ?? "N/A";
                contractor.date_lddap_year1_3rd = contractorDTO.date_lddap_year1_3rd ?? "N/A";


                //year1 4rd release
                contractor.grossammount_year1_4th = contractorDTO.grossammount_year1_4th ?? "N/A";
                contractor.retentionfee_year1_4th = contractorDTO.retentionfee_year1_4th ?? "N/A";
                contractor.mobilization_fund_year1_4th = contractorDTO.mobilization_fund_year1_4th ?? "N/A";
                contractor.amountless_rf_mf_year1_4th = contractorDTO.amountless_rf_mf_year1_4th ?? "N/A";
                contractor.bir_year1_4th = contractorDTO.bir_year1_2nd ?? "N/A";
                contractor.netammountpaid_year1_4th = contractorDTO.netammountpaid_year1_4th ?? "N/A";
                contractor.lddapno_year1_4th = contractorDTO.lddapno_year1_4th ?? "N/A";
                contractor.date_lddap_year1_4th = contractorDTO.date_lddap_year1_4th ?? "N/A";

                //year1 5th release
                contractor.grossammount_year1_5th = contractorDTO.grossammount_year1_5th ?? "N/A";
                contractor.retentionfee_year1_5th = contractorDTO.retentionfee_year1_5th ?? "N/A";
                contractor.mobilization_fund_year1_5th = contractorDTO.mobilization_fund_year1_5th ?? "N/A";
                contractor.amountless_rf_mf_year1_5th = contractorDTO.amountless_rf_mf_year1_5th ?? "N/A";
                contractor.bir_year1_5th = contractorDTO.bir_year1_2nd ?? "N/A";
                contractor.netammountpaid_year1_5th = contractorDTO.netammountpaid_year1_5th ?? "N/A";
                contractor.lddapno_year1_5th = contractorDTO.lddapno_year1_5th ?? "N/A";
                contractor.date_lddap_year1_5th = contractorDTO.date_lddap_year1_5th ?? "N/A";

                //year1 6th release
                contractor.grossammount_year1_6th = contractorDTO.grossammount_year1_6th ?? "N/A";
                contractor.retentionfee_year1_6th = contractorDTO.retentionfee_year1_6th ?? "N/A";
                contractor.mobilization_fund_year1_6th = contractorDTO.mobilization_fund_year1_6th ?? "N/A";
                contractor.amountless_rf_mf_year1_6th = contractorDTO.amountless_rf_mf_year1_6th ?? "N/A";
                contractor.bir_year1_6th = contractorDTO.bir_year1_6th ?? "N/A";
                contractor.netammountpaid_year1_6th = contractorDTO.netammountpaid_year1_6th ?? "N/A";
                contractor.lddapno_year1_6th = contractorDTO.lddapno_year1_6th ?? "N/A";
                contractor.date_lddap_year1_6th = contractorDTO.date_lddap_year1_6th ?? "N/A";

                //year2 1st release
                contractor.survivalrate_year2_1st = contractorDTO.survivalrate_year2_1st ?? "N/A";
                contractor.grossammount_year2_1st = contractorDTO.grossammount_year2_1st ?? "N/A";
                contractor.retentionfee_year2_1st = contractorDTO.retentionfee_year2_1st ?? "N/A";
                contractor.amountless_rf_year2_1st = contractorDTO.amountless_rf_year2_1st ?? "N/A";
                contractor.bir_year2_1st = contractorDTO.bir_year2_1st ?? "N/A";
                contractor.netamount_paid_year2_1st = contractorDTO.netamount_paid_year2_1st ?? "N/A";
                contractor.lddapno_year2_1st = contractorDTO.lddapno_year2_1st ?? "N/A";
                contractor.date_lddap_year2_1st = contractorDTO.date_lddap_year2_1st ?? "N/A";



                //year2 2nd release
                contractor.survivalrate_year2_2nd = contractorDTO.survivalrate_year2_2nd ?? "N/A";
                contractor.grossammount_year2_2nd = contractorDTO.grossammount_year2_2nd ?? "N/A";
                contractor.retentionfee_year2_2nd = contractorDTO.retentionfee_year2_2nd ?? "N/A";
                contractor.amountless_rf_year2_2nd = contractorDTO.amountless_rf_year2_2nd ?? "N/A";
                contractor.bir_year2_2nd = contractorDTO.bir_year2_2nd ?? "N/A";
                contractor.netamount_paid_year2_2nd = contractorDTO.netamount_paid_year2_2nd ?? "N/A";
                contractor.lddapno_year2_2nd = contractorDTO.lddapno_year2_2nd ?? "N/A";
                contractor.date_lddap_year2_2nd = contractorDTO.date_lddap_year2_2nd ?? "N/A";



                //year2 3rd release
                contractor.survivalrate_year2_3rd = contractorDTO.survivalrate_year2_3rd ?? "N/A";
                contractor.grossammount_year2_3rd = contractorDTO.grossammount_year2_3rd ?? "N/A";
                contractor.retentionfee_year2_3rd = contractorDTO.retentionfee_year2_3rd ?? "N/A";
                contractor.amountless_rf_year2_3rd = contractorDTO.amountless_rf_year2_3rd ?? "N/A";
                contractor.bir_year2_3rd = contractorDTO.bir_year2_3rd ?? "N/A";
                contractor.netamount_paid_year2_3rd = contractorDTO.netamount_paid_year2_3rd ?? "N/A";
                contractor.lddapno_year2_3rd = contractorDTO.lddapno_year2_3rd ?? "N/A";
                contractor.date_lddap_year2_3rd = contractorDTO.date_lddap_year2_3rd ?? "N/A";

                //year2 4th release
                contractor.survivalrate_year2_4th = contractorDTO.survivalrate_year2_4th ?? "N/A";
                contractor.grossammount_year2_4th = contractorDTO.grossammount_year2_4th ?? "N/A";
                contractor.retentionfee_year2_4th = contractorDTO.retentionfee_year2_4th ?? "N/A";
                contractor.amountless_rf_year2_4th = contractorDTO.amountless_rf_year2_4th ?? "N/A";
                contractor.bir_year2_4th = contractorDTO.bir_year2_4th ?? "N/A";
                contractor.netamount_paid_year2_4th = contractorDTO.netamount_paid_year2_4th ?? "N/A";
                contractor.lddapno_year2_4th = contractorDTO.lddapno_year2_4th ?? "N/A";
                contractor.date_lddap_year2_4th = contractorDTO.date_lddap_year2_4th ?? "N/A";

                //year3 1st release
                contractor.grossammount_year3_1st = contractorDTO.grossammount_year3_1st ?? "N/A";
                contractor.survivalrate_year3_1st = contractorDTO.survivalrate_year3_1st ?? "N/A";
                contractor.bir_year3_1st = contractorDTO.bir_year3_1st ?? "N/A";
                contractor.netamount_paid_year3_1st = contractorDTO.netamount_paid_year3_1st ?? "N/A";
                contractor.lddapno_year3_1st = contractorDTO.lddapno_year3_1st ?? "N/A";
                contractor.retentionfee_year3_1st = contractorDTO.retentionfee_year3_1st ?? "N/A";
                contractor.amountless_rf_year3_1st = contractorDTO.amountless_rf_year3_1st ?? "N/A";
                contractor.date_lddap_year3_1st = contractorDTO.date_lddap_year3_1st ?? "N/A";


                //year3 2nd release

                contractor.survivalrate_year3_2nd = contractorDTO.survivalrate_year3_2nd ?? "N/A";
                contractor.grossammount_year3_2nd = contractorDTO.grossammount_year3_2nd ?? "N/A";
                contractor.retentionfee_year3_2nd = contractorDTO.retentionfee_year3_2nd ?? "N/A";
                contractor.amountless_rf_year3_2nd = contractorDTO.amountless_rf_year3_2nd ?? "N/A";
                contractor.bir_year3_2nd = contractorDTO.bir_year3_2nd ?? "N/A";
                contractor.netamount_paid_year3_2nd = contractorDTO.netamount_paid_year3_2nd ?? "N/A";
                contractor.lddapno_year3_2nd = contractorDTO.lddapno_year3_2nd ?? "N/A";
                contractor.date_lddap_year3_2nd = contractorDTO.date_lddap_year3_2nd ?? "N/A";

                //year3 3rd realease
                contractor.survivalrate_year3_3rd = contractorDTO.survivalrate_year3_3rd ?? "N/A";
                contractor.grossammount_year3_3rd = contractorDTO.grossammount_year3_3rd ?? "N/A";
                contractor.retentionfee_year3_3rd = contractorDTO.retentionfee_year3_3rd ?? "N/A";
                contractor.amountless_rf_year3_3rd = contractorDTO.amountless_rf_year3_3rd ?? "N/A";
                contractor.bir_year3_3rd = contractorDTO.bir_year3_3rd ?? "N/A";
                contractor.netamount_paid_year3_3rd = contractorDTO.netamount_paid_year3_3rd ?? "N/A";
                contractor.lddapno_year3_3rd = contractorDTO.lddapno_year3_3rd ?? "N/A";
                contractor.date_lddap_year3_3rd = contractorDTO.date_lddap_year3_3rd ?? "N/A";

                //year3 4th release

                contractor.survivalrate_year3_4th = contractorDTO.survivalrate_year3_4th ?? "N/A";
                contractor.grossammount_year3_4th = contractorDTO.grossammount_year3_4th ?? "N/A";
                contractor.retentionfee_year3_4th = contractorDTO.retentionfee_year3_4th ?? "N/A";
                contractor.amountless_rf_year3_4th = contractorDTO.amountless_rf_year3_4th ?? "N/A";
                contractor.bir_year3_4th = contractorDTO.bir_year3_4th ?? "N/A";
                contractor.netamount_paid_year3_4th = contractorDTO.netamount_paid_year3_4th ?? "N/A";
                contractor.lddapno_year3_4th = contractorDTO.lddapno_year3_4th ?? "N/A";
                contractor.date_lddap_year3_4th = contractorDTO.date_lddap_year3_4th ?? "N/A";


                contractor.DateAdded = DateTime.Now;

                contractor.RoleId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.RoleID; //saving role depend in login id
                contractor.UserId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Id; //saving role depend in UserId login
                contractor.UserName = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.UserName; //saving username depend in login
                contractor.Name = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Name; //saving username depend in login

                //contractor.Position = Db.NgpUsers.FirstOrDefault(o => o.Id == sess_id)?.Position;

                Db.ngp_contractor.Add(contractor);
            }


            Db.NgpLogs.Add(new NgpLog()
            {
                Date = DateTime.Now,
                Name = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Name,
                UserName = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.UserName,
                LogMessage = "Added a Contractor " + "Name: " + contractorDTO.contractor_name,
                UserId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Id,
                RoleId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.RoleID,
                Position = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Position,

            });

     
            Db.SaveChanges();

            return Ok();


        }

        //GET in form contractor
        [Route("api/contractorget/get/{id}")]
        [HttpGet]
        public IHttpActionResult GetContractorData(int id)
        {
            var contractor = Db.ngp_contractor.SingleOrDefault(d => d.contractorID == id);
            if (contractor == null)
            {
                return NotFound();
            }
            return Ok(Mapper.Map<ngp_contractor, ContractorDTO>(contractor));
        }


        //Put
        [HttpPut]
        [Route("api/contractorput/updatecontractor/{id}")]
        public IHttpActionResult UpdateContrasctor(int id, ContractorDTO contractorDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sess_id = Request.Headers.GetCookies("auth").FirstOrDefault()?["auth"].Values.Get("LoginID");
            var contractorinDb = Db.ngp_contractor.SingleOrDefault(d => d.contractorID == id);
            if (contractorinDb == null)
            {
                return NotFound();
            }
            Mapper.Map(contractorDTO, contractorinDb);
            contractorinDb.contractorID = id;

            contractorinDb.contractor_name = contractorDTO.contractor_name ;
            contractorinDb.address_municipality = contractorDTO.address_municipality;
            contractorinDb.address_barangay = contractorDTO.address_barangay;
            contractorinDb.contractor_type = contractorDTO.contractor_type;

            contractorinDb.UserId = contractorDTO.UserId;
            contractorinDb.RoleId = contractorDTO.RoleId;
            contractorinDb.UserName = contractorDTO.UserName;
            contractorinDb.Name = contractorDTO.Name;
            //for Project
            contractorinDb.location_municipality = contractorDTO.location_municipality;
            contractorinDb.location_barangay = contractorDTO.location_barangay;
            contractorinDb.area = contractorDTO.area;
            contractorinDb.year_form = contractorDTO.year_form;
            contractorinDb.penro = contractorDTO.penro;
            contractorinDb.cenro = contractorDTO.cenro;
            contractorinDb.region = contractorDTO.region;
            //for contract year 1
            contractorinDb.moanumber_year1 = contractorDTO.moanumber_year1;
            contractorinDb.datemoasigned_year1 = contractorDTO.datemoasigned_year1;
            contractorinDb.contractcost_year1 = contractorDTO.contractcost_year1;
            contractorinDb.dateobligated_year1 = contractorDTO.dateobligated_year1;
            contractorinDb.orsno_year1 = contractorDTO.orsno_year1;
            contractorinDb.num_seedlings_produced_year1 = contractorDTO.num_seedlings_produced_year1;
            contractorinDb.forest_trees_year1 = contractorDTO.forest_trees_year1;
            contractorinDb.fruit_trees_year1 = contractorDTO.fruit_trees_year1;
            contractorinDb.bamboo_year1 = contractorDTO.bamboo_year1;
            contractorinDb.mangrove_year1 = contractorDTO.mangrove_year1;
            contractorinDb.num_seedlings_planted_year1 = contractorDTO.num_seedlings_planted_year1;
            contractorinDb.survivalrate_year1 = contractorDTO.survivalrate_year1;

            //added
            contractorinDb.fruitTrees = contractorDTO.fruitTrees;
            contractorinDb.forestTrees = contractorDTO.forestTrees;
            contractorinDb.bamboo = contractorDTO.bamboo;
            contractorinDb.mangrove = contractorDTO.mangrove;
            //for contract year 2
            contractorinDb.moanumber_year2 = contractorDTO.moanumber_year2;
            contractorinDb.datemoasigned_year2 = contractorDTO.datemoasigned_year2;
            contractorinDb.unitcost_year2 = contractorDTO.unitcost_year2;
            contractorinDb.contractcost_year2 = contractorDTO.contractcost_year2;
            contractorinDb.dateobligated_year2 = contractorDTO.dateobligated_year2;
            contractorinDb.orsno_year2 = contractorDTO.orsno_year2;
            contractorinDb.num_seedlings_planted_year2 = contractorDTO.num_seedlings_planted_year2;
            contractorinDb.num_seedlings_survive_endofyear_1_year2 = contractorDTO.num_seedlings_survive_endofyear_1_year2;
            contractorinDb.survivalrate_year2 = contractorDTO.survivalrate_year2;
            contractorinDb.num_seedlings_replanted_year2 = contractorDTO.num_seedlings_replanted_year2;

            //for contract year 3
            contractorinDb.moanumber_year3 = contractorDTO.moanumber_year3;
            contractorinDb.datemoasigned_year3 = contractorDTO.datemoasigned_year3;
            contractorinDb.unitcost_year3 = contractorDTO.unitcost_year3;
            contractorinDb.contractcost_year3 = contractorDTO.contractcost_year3;
            contractorinDb.dateobligated_year3 = contractorDTO.dateobligated_year3;
            contractorinDb.orsno_year2 = contractorDTO.orsno_year2;
            contractorinDb.num_seedlings_planted_year3 = contractorDTO.num_seedlings_planted_year3;
            contractorinDb.num_seedlings_survive_endofyear_1_year3 = contractorDTO.num_seedlings_survive_endofyear_1_year3;
            contractorinDb.survivalrate_year3 = contractorDTO.survivalrate_year3;
            contractorinDb.num_seedlings_replanted_year3 = contractorDTO.num_seedlings_replanted_year3;
            contractorinDb.orsno_year3 = contractorDTO.orsno_year3;

            //for payments 

            //year1 1st release
            contractorinDb.grossammount_year1_1st = contractorDTO.grossammount_year1_1st;
            contractorinDb.lddap_no_year1_1st = contractorDTO.lddap_no_year1_1st;
            contractorinDb.date_lddap_year1_1st = contractorDTO.date_lddap_year1_1st;

            //year1 2nd release
            contractorinDb.grossammount_year1_2nd = contractorDTO.grossammount_year1_2nd;
            contractorinDb.retentionfee_year1_2nd = contractorDTO.retentionfee_year1_2nd;
            contractorinDb.mobilization_fund_year1_2nd = contractorDTO.mobilization_fund_year1_2nd;
            contractorinDb.amountless_rf_mf_year1_2nd = contractorDTO.amountless_rf_mf_year1_2nd;
            contractorinDb.bir_year1_2nd = contractorDTO.bir_year1_2nd;
            contractorinDb.netammountpaid_year1_2nd = contractorDTO.netammountpaid_year1_2nd;
            contractorinDb.lddapno_year1_2nd = contractorDTO.lddapno_year1_2nd;
            contractorinDb.date_lddap_year1_2nd = contractorDTO.date_lddap_year1_2nd;


            //year1 3rd release
            contractorinDb.grossammount_year1_3rd = contractorDTO.grossammount_year1_3rd;
            contractorinDb.retentionfee_year1_3rd = contractorDTO.retentionfee_year1_3rd;
            contractorinDb.mobilization_fund_year1_3rd = contractorDTO.mobilization_fund_year1_3rd;
            contractorinDb.amountless_rf_mf_year1_3rd = contractorDTO.amountless_rf_mf_year1_3rd;
            contractorinDb.bir_year1_3rd = contractorDTO.bir_year1_2nd;
            contractorinDb.netammountpaid_year1_3rd = contractorDTO.netammountpaid_year1_3rd;
            contractorinDb.lddapno_year1_3rd = contractorDTO.lddapno_year1_3rd;
            contractorinDb.date_lddap_year1_3rd = contractorDTO.date_lddap_year1_3rd;


            //year1 4rd release
            contractorinDb.grossammount_year1_4th = contractorDTO.grossammount_year1_4th;
            contractorinDb.retentionfee_year1_4th = contractorDTO.retentionfee_year1_4th;
            contractorinDb.mobilization_fund_year1_4th = contractorDTO.mobilization_fund_year1_4th;
            contractorinDb.amountless_rf_mf_year1_4th = contractorDTO.amountless_rf_mf_year1_4th;
            contractorinDb.bir_year1_4th = contractorDTO.bir_year1_2nd;
            contractorinDb.netammountpaid_year1_4th = contractorDTO.netammountpaid_year1_4th;
            contractorinDb.lddapno_year1_4th = contractorDTO.lddapno_year1_4th;
            contractorinDb.date_lddap_year1_4th = contractorDTO.date_lddap_year1_4th;

            //year1 5th release
            contractorinDb.grossammount_year1_5th = contractorDTO.grossammount_year1_5th;
            contractorinDb.retentionfee_year1_5th = contractorDTO.retentionfee_year1_5th;
            contractorinDb.mobilization_fund_year1_5th = contractorDTO.mobilization_fund_year1_5th;
            contractorinDb.amountless_rf_mf_year1_5th = contractorDTO.amountless_rf_mf_year1_5th;
            contractorinDb.bir_year1_5th = contractorDTO.bir_year1_2nd;
            contractorinDb.netammountpaid_year1_5th = contractorDTO.netammountpaid_year1_5th;
            contractorinDb.lddapno_year1_5th = contractorDTO.lddapno_year1_5th;
            contractorinDb.date_lddap_year1_5th = contractorDTO.date_lddap_year1_5th;

            //year1 6th release
            contractorinDb.grossammount_year1_6th = contractorDTO.grossammount_year1_6th;
            contractorinDb.retentionfee_year1_6th = contractorDTO.retentionfee_year1_6th;
            contractorinDb.mobilization_fund_year1_6th = contractorDTO.mobilization_fund_year1_6th;
            contractorinDb.amountless_rf_mf_year1_6th = contractorDTO.amountless_rf_mf_year1_6th;
            contractorinDb.bir_year1_6th = contractorDTO.bir_year1_6th;

            //year2 1st release
            contractorinDb.survivalrate_year2_1st = contractorDTO.survivalrate_year2_1st;
            contractorinDb.grossammount_year2_1st = contractorDTO.grossammount_year2_1st;
            contractorinDb.retentionfee_year2_1st = contractorDTO.retentionfee_year2_1st;
            contractorinDb.amountless_rf_year2_1st = contractorDTO.amountless_rf_year2_1st;
            contractorinDb.bir_year2_1st = contractorDTO.bir_year2_1st;
            contractorinDb.netamount_paid_year2_1st = contractorDTO.netamount_paid_year2_1st;
            contractorinDb.lddapno_year2_1st = contractorDTO.lddapno_year2_1st;
            contractorinDb.date_lddap_year2_1st = contractorDTO.date_lddap_year2_1st;



            //year2 2nd release
            contractorinDb.survivalrate_year2_2nd = contractorDTO.survivalrate_year2_2nd;
            contractorinDb.grossammount_year2_2nd = contractorDTO.grossammount_year2_2nd;
            contractorinDb.retentionfee_year2_3rd = contractorDTO.retentionfee_year2_3rd;
            contractorinDb.amountless_rf_year2_2nd = contractorDTO.amountless_rf_year2_2nd;
            contractorinDb.bir_year2_2nd = contractorDTO.bir_year2_2nd;
            contractorinDb.netamount_paid_year2_2nd = contractorDTO.netamount_paid_year2_2nd;
            contractorinDb.lddapno_year2_2nd = contractorDTO.lddapno_year2_2nd;
            contractorinDb.date_lddap_year2_2nd = contractorDTO.date_lddap_year2_2nd;



            //year2 3rd release
            contractorinDb.survivalrate_year2_3rd = contractorDTO.survivalrate_year2_3rd;
            contractorinDb.grossammount_year2_3rd = contractorDTO.grossammount_year2_3rd;
            contractorinDb.retentionfee_year2_3rd = contractorDTO.retentionfee_year2_3rd;
            contractorinDb.amountless_rf_year2_3rd = contractorDTO.amountless_rf_year2_3rd;
            contractorinDb.bir_year2_3rd = contractorDTO.bir_year2_3rd;
            contractorinDb.netamount_paid_year2_3rd = contractorDTO.netamount_paid_year2_3rd;
            contractorinDb.lddapno_year2_3rd = contractorDTO.lddapno_year2_3rd;
            contractorinDb.date_lddap_year2_3rd = contractorDTO.date_lddap_year2_3rd;

            //year2 4th release
            contractorinDb.survivalrate_year2_4th = contractorDTO.survivalrate_year2_4th;
            contractorinDb.grossammount_year2_4th = contractorDTO.grossammount_year2_4th;
            contractorinDb.retentionfee_year2_4th = contractorDTO.retentionfee_year2_4th;
            contractorinDb.amountless_rf_year2_4th = contractorDTO.amountless_rf_year2_4th;
            contractorinDb.bir_year2_4th = contractorDTO.bir_year2_4th;
            contractorinDb.netamount_paid_year2_4th = contractorDTO.netamount_paid_year2_4th;
            contractorinDb.lddapno_year2_4th = contractorDTO.lddapno_year2_4th;
            contractorinDb.date_lddap_year2_4th = contractorDTO.date_lddap_year2_4th;

            //

            //year3 1st release
            contractorinDb.grossammount_year3_1st = contractorDTO.grossammount_year3_1st;
            contractorinDb.survivalrate_year3_1st = contractorDTO.survivalrate_year3_1st;
            contractorinDb.bir_year3_1st = contractorDTO.bir_year3_1st;
            contractorinDb.netamount_paid_year3_1st = contractorDTO.netamount_paid_year3_1st;
            contractorinDb.lddapno_year3_1st = contractorDTO.lddapno_year3_1st;
            contractorinDb.retentionfee_year3_1st = contractorDTO.retentionfee_year3_1st;
            contractorinDb.amountless_rf_year3_1st = contractorDTO.amountless_rf_year3_1st;
            contractorinDb.date_lddap_year3_1st = contractorDTO.date_lddap_year3_1st;
        



            //year3 2nd release
            contractorinDb.survivalrate_year3_2nd = contractorDTO.survivalrate_year3_2nd;
            contractorinDb.grossammount_year3_2nd = contractorDTO.grossammount_year3_2nd;
            contractorinDb.retentionfee_year3_2nd = contractorDTO.retentionfee_year3_2nd;
            contractorinDb.amountless_rf_year3_2nd = contractorDTO.amountless_rf_year3_2nd;
            contractorinDb.bir_year3_2nd = contractorDTO.bir_year3_2nd;
            contractorinDb.netamount_paid_year3_2nd = contractorDTO.netamount_paid_year3_2nd;
            contractorinDb.lddapno_year3_2nd = contractorDTO.lddapno_year3_2nd;
            contractorinDb.date_lddap_year3_2nd = contractorDTO.date_lddap_year3_2nd;



            //year3 3rd release
            contractorinDb.survivalrate_year3_3rd = contractorDTO.survivalrate_year3_3rd;
            contractorinDb.grossammount_year3_3rd = contractorDTO.grossammount_year3_3rd;
            contractorinDb.retentionfee_year3_3rd = contractorDTO.retentionfee_year3_3rd;
            contractorinDb.amountless_rf_year3_3rd = contractorDTO.amountless_rf_year3_3rd;
            contractorinDb.bir_year3_3rd = contractorDTO.bir_year3_3rd;
            contractorinDb.netamount_paid_year3_3rd = contractorDTO.netamount_paid_year3_3rd;
            contractorinDb.lddapno_year3_3rd = contractorDTO.lddapno_year3_3rd;
            contractorinDb.date_lddap_year3_3rd = contractorDTO.date_lddap_year3_3rd;

            //year2 4th release
            contractorinDb.survivalrate_year3_4th = contractorDTO.survivalrate_year3_4th;
            contractorinDb.grossammount_year3_4th = contractorDTO.grossammount_year3_4th;
            contractorinDb.retentionfee_year3_4th = contractorDTO.retentionfee_year3_4th;
            contractorinDb.amountless_rf_year3_4th = contractorDTO.amountless_rf_year3_4th;
            contractorinDb.bir_year3_4th = contractorDTO.bir_year3_4th;
            contractorinDb.netamount_paid_year3_4th = contractorDTO.netamount_paid_year3_4th;
            contractorinDb.lddapno_year3_4th = contractorDTO.lddapno_year3_4th;
            contractorinDb.date_lddap_year3_4th = contractorDTO.date_lddap_year3_4th;

            contractorinDb.DateAdded  = DateTime.Now;

            Db.NgpLogs.Add(new NgpLog()
            {
                Date = DateTime.Now,
                Name = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Name,
                UserName = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.UserName,
                LogMessage = "Edit a Contractor " + "Name: " + contractorDTO.contractor_name    
                + "Address Municipality: " + contractorDTO.address_municipality  
                +  "Address Barangay: " + contractorDTO.address_barangay
                + "Contractor Type: " + contractorDTO.contractor_type,
                UserId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Id,
                RoleId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.RoleID,
                Position = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Position,

            });

            Db.SaveChanges();
            return Ok();
        }



        [HttpDelete]
        [Route("api/contractordelete/delete/{id}")]
        public IHttpActionResult DeleteContractor(int id)
        {
            var sess_id = Request.Headers.GetCookies("auth").FirstOrDefault()?["auth"].Values.Get("LoginID");
            var contractorinDb = Db.ngp_contractor.SingleOrDefault(d => d.contractorID == id);
            if (contractorinDb == null)
            {
                return NotFound();
            }
            Db.ngp_contractor.Remove(contractorinDb);
            Db.NgpLogs.Add(new NgpLog()
            {

                Date = DateTime.Now,
                Name = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Name,
                UserName = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.UserName,
                LogMessage = "Delete a Contractor " + "Name: " + contractorinDb.contractor_name,
                UserId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Id,
                RoleId = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.RoleID,
                Position = Db.NgpUsers.FirstOrDefault(o => o.Id.ToString() == sess_id)?.Position,


            });
            Db.SaveChanges();
            return Ok();
        }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NgpManagementSystem.ViewModel
{
    public class ContractVM
    {
        public string contractorId { get; set; }
        public int contractID { get; set; }
        public string moa { get; set; }
        public string contractorName { get; set; }
        public string location_municipality { get; set; }
        public string location_barangay { get; set; }
        public string location_sitio { get; set; }
        public string area { get; set; }
        public string commodity { get; set; }
        public string commodity_type { get; set; }
        public string survival_rate { get; set; }
        public string project_name { get; set; }
        public string contract_cost { get; set; }
        public string site_code { get; set; }
        public string year_established { get; set; }
        public string num_seedlings_planted { get; set; }
        public string num_seedlings_produced { get; set; }
        public string num_seedlings_survived { get; set; }
        public string num_seedlings_replanted { get; set; }
        public string num_seedlings_survived_year1 { get; set; }
        public Nullable<int> dropdownID { get; set; }
        public string RoleId { get; set; }
        public string Name { get; set; }
    }
}
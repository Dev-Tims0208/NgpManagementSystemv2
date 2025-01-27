﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NgpManagementSystem.DTO
{
    public class AccountDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Nullable<int> RoleID { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string Position { get; set; }
        public Nullable<System.DateTime> DateAdded { get; set; }
        public Nullable<System.DateTime> DateModified { get; set; }

    }
}
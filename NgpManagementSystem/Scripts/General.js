﻿function UserLActivityLogs() {

    $("#accountlogsuser").DataTable({
        "ajax": {
            "url": "/UserActivityLogs/GetUserAccountLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });







    $("#paymentlogsuser").DataTable({
        "ajax": {
            "url": "/UserActivityLogs/GetUserPaymentsLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });




    $("#contractlogsuser").DataTable({
        "ajax": {
            "url": "/UserActivityLogs/GetUserContractLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });



    $("#projectlogsuser").DataTable({
        "ajax": {
            "url": "/UserActivityLogs/GetUserProjectLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });




    $("#contractorlogsuser").DataTable({
        "ajax": {
            "url": "/UserActivityLogs/GetUserContractorLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });







}




function AdminLActivitLogs() {

    $("#contractlogsadmin").DataTable({
        "ajax": {
            "url": "/AdminActivityLogs/GetAdminContractLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });






    $("#paymentlogsadmin").DataTable({
        "ajax": {
            "url": "/AdminActivityLogs/GetAdminPaymentLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });



    $("#accountlogsadmin").DataTable({
        "ajax": {
            "url": "/AdminActivityLogs/GetAdminAccountLogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });



    $("#contractorlogsadmin").DataTable({
        "ajax": {
            "url": "/AdminActivityLogs/GetAdminContractorlogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",
              

            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },
              
            },
          
            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },
        
          

        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });



    $("#useraccountlogsadmin").DataTable({
        "ajax": {
            "url": "/AdminActivityLogs/GetAdminProjectlogs",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Date", "name": "Date",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },

            {
                "data": "UserName", "name": "UserName",


            },
            {
                "data": "LogMessage", "name": "LogMessage",

            },

            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },

            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },


            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });



}

function AdminLogsDashboard() {
    $.ajax({
        type: 'GET',
        url: '/api/adminlogsaccount/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            $('#logsactivityuseraccount tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivityuseraccount tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                        value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                        value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                        value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                        value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                        value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                        value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' : '') +

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });



    $.ajax({
        type: 'GET',
        url: '/api/adminlogscontractor/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            //$('#logsactivitycontractor tbody').html('');
            //$.each(data, function (index, value) {
            //    $('#logsactivitycontractor tbody').append(
            //        '<tr>' +
            //        /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
            //        '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
            //        '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
            //        '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
            //        '<td>' + '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + value.roleId + '</span>' + '</td>' +
            //        '</tr>'
            //    );
            //});
            $('#logsactivitycontractor tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivitycontractor tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                    value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                    value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                     value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                    value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                    value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                    value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' :    '')  + 

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });


    $.ajax({
        type: 'GET',
        url: '/api/adminlogsforcontract/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            $('#logsactivitycontract tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivitycontract tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                        value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                        value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                        value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                        value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                        value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                        value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' : '') +

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });


    $.ajax({
        type: 'GET',
        url: '/api/adminlogsforpayment/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            $('#logsactivitypayment tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivitypayment tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                         value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                         value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                         value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                         value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                         value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                         value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' : '') +

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });



    $.ajax({
        type: 'GET',
        url: '/api/adminlogsprojects/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            $('#logsactivityprojects tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivityprojects tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                     value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                     value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                     value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                     value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                     value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                     value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' : '') +

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });



    $.ajax({
        type: 'GET',
        url: '/api/adminlogssched/get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        success: function (data) {
            $('#logsactivitysched tbody').html('');
            $.each(data, function (index, value) {
                $('#logsactivitysched tbody').append(
                    '<tr>' +
                    /*          '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +*/
                    '<td>' + '<span class="badge badge-light text-black-50  " style="font-size: 10px;border-radius:40px;">' + moment(value.date).format('MMMM DD YYYY LT') + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.logMessage + '</span>' + '</td>' +
                    '<td>' + '<span style="font-size: 15px;">' + value.name + '</span>' + '</td>' +
                    '<td>' +
                    (value.roleId == 1 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Ngp Admin' + '</span>' :
                    value.roleId == 2 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-PuertoPrincesa' + '</span>' :
                   value.roleId == 3 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Quezon' + '</span>' :
                   value.roleId == 5 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-BrookesPoint' + '</span>' :
                  value.roleId == 6 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Coron' + '</span>' :
                   value.roleId == 7 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Taytay' + '</span>' :
                    value.roleId == 8 ? '<span class="badge badge-sm bg-gradient-success" style="font-size: 12px;">' + 'Cenro-Roxas' + '</span>' : '') +

                    '</td>' +
                    '</tr>'
                );
            });
        },

        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });

}




function TotalCounts() {

    //TOTAL USERS ACCCOUNT COUNT
    $.ajax({
        type: 'GET',
        url: '/api/totalusercount/count',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        success: function (data) {
            //alert(data);
            $('#UserAccountadmincount').text(data);
        },
        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });

    //TOTAL CONTRACTORS COUNT
    $.ajax({
        type: 'GET',
        url: '/api/totalcontractor/count',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        success: function (data) {
            //alert(data);
            $('#Contractoradmincount').text(data);
        },
        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });


    //TOTAL PROJECTS COUNT
    $.ajax({
        type: 'GET',
        url: '/api/totalprojects/count',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        success: function (data) {
            //alert(data);
            $('#Projectsadmincount').text(data);
        },
        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });

    //TOTAL CONTRACT COUNT
    $.ajax({
        type: 'GET',
        url: '/api/totalcontract/count',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        success: function (data) {
            //alert(data);
            $('#Contractsadmincount').text(data);
        },
        //if failed
        error: function (data) {

            // toastr.info("Success")
        }
    });

}







function ContractorAnimation() {

    $(document).ready(function () {

        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function () {

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            setProgressBar(++current);
        });

        $(".previous").click(function () {

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            setProgressBar(--current);
        });

        function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
                .css("width", percent + "%")
        }

        $(".submit").click(function () {
            return false;
        })

    });


    //GET DATA CASCADING DROPDOWN FOR SAVING PROJECT
    $.ajax({
        type: 'GET',
        url: '/api/getlocationmunicipality/locationmunicipality/get',
        success: function (data) {
            var html = '<option value="">Select municipalityName</option>';
            $.each(data, function (i, item) {
                html += '<option value="' + item.municipalityId + '">' + item.municipalityName + '</option>';
            });
            $('select[name=location_municipality]').html(html);
            // render divisionsId2 select
            // console log on select change
            $('select[name=location_municipality]').on('change', function () {
                var municipalityId = $('select[name=location_municipality]').val();

                $.ajax({
                    type: 'GET',
                    url: '/api/locationbarangaylist/get/' + municipalityId,
                    success: function (data) {
                        var html = '';
                        $.each(data, function (i, item) {
                            html += '<option value="' + item.barangayId + '">' + item.barangayName + '</option>';
                        });
                        console.log(data);
                        $('select[name=location_barangay]').html(html);
                    }
                });
            });
        }
    });





    //GET DATA CASCADING DROPDOWN FOR SAVING CONTRACTOR
    $.ajax({
        type: 'GET',
        url: '/api/getmunicipality/municipality/get',
        success: function (data) {
            var html = '<option value="">Select municipalityName</option>';
            $.each(data, function (i, item) {
                html += '<option value="' + item.municipalityId + '">' + item.municipalityName + '</option>';
            });
            $('select[name=address_municipality]').html(html);
            // render divisionsId2 select
            // console log on select change
            $('select[name=address_municipality]').on('change', function () {
                var municipalityId = $('select[name=address_municipality]').val();

                $.ajax({
                    type: 'GET',
                    url: '/api/barangaylist/get/' + municipalityId,
                    success: function (data) {
                        var html = '';
                        $.each(data, function (i, item) {
                            html += '<option value="' + item.barangayId + '">' + item.barangayName + '</option>';
                        });
                        console.log(data);
                        $('select[name=address_barangay]').html(html);
                    }
                });
            });
        }
    });

    //GET DATA ONLY FOR EDIT Contractor GET METHOD 

    $("#contractortable").on('click', '.editcontractor', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#editcontractorModal").modal('show');
                $('#editcontractorform').find('input[name="contractorID"]').val(data.contractorID);
                $('#editcontractorform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#editcontractorform').find('select[name="contractor_type"]').val(data.contractor_type);
                $('#editcontractorform').find('select[name="address_municipality"]').val(data.address_municipality);
                $('#editcontractorform').find('select[name="address_barangay"]').val(data.address_barangay);

                $('#editcontractorform').find('input[name="name"]').val(data.name);
                $('#editcontractorform').find('input[name="userName"]').val(data.userName);
                $('#editcontractorform').find('input[name="userId"]').val(data.userId);
                $('#editcontractorform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#editcontractorform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#editcontractorform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#editcontractorform').find('input[name="area"]').val(data.area);
                $('#editcontractorform').find('input[name="year_form"]').val(data.year_form);
                $('#editcontractorform').find('input[name="penro"]').val(data.penro);
                $('#editcontractorform').find('input[select="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#editcontractorform').find('input[name="cenro"]').val(data.cenro);
                $('#editcontractorform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#editcontractorform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#editcontractorform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#editcontractorform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#editcontractorform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#editcontractorform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#editcontractorform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#editcontractorform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#editcontractorform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#editcontractorform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#editcontractorform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#editcontractorform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#editcontractorform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#editcontractorform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#editcontractorform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#editcontractorform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#editcontractorform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#editcontractorform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#editcontractorform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#editcontractorform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#editcontractorform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#editcontractorform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#editcontractorform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#editcontractorform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#editcontractorform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#editcontractorform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#editcontractorform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#editcontractorform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#editcontractorform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#editcontractorform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#editcontractorform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#editcontractorform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#editcontractorform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#editcontractorform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#editcontractorform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#editcontractorform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#editcontractorform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#editcontractorform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#editcontractorform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#editcontractorform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#editcontractorform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#editcontractorform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#editcontractorform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editcontractorform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#editcontractorform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#editcontractorform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#editcontractorform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#editcontractorform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#editcontractorform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#editcontractorform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#editcontractorform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editcontractorform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#editcontractorform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#editcontractorform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#editcontractorform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#editcontractorform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#editcontractorform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#editcontractorform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#editcontractorform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editcontractorform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#editcontractorform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#editcontractorform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#editcontractorform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#editcontractorform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#editcontractorform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#editcontractorform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#editcontractorform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editcontractorform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#editcontractorform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#editcontractorform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#editcontractorform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#editcontractorform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#editcontractorform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#editcontractorform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#editcontractorform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#editcontractorform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#editcontractorform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#editcontractorform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#editcontractorform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#editcontractorform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#editcontractorform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#editcontractorform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#editcontractorform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#editcontractorform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#editcontractorform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#editcontractorform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#editcontractorform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#editcontractorform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#editcontractorform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#editcontractorform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#editcontractorform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#editcontractorform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#editcontractorform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#editcontractorform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 3 2nd release
                $('#editcontractorform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#editcontractorform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#editcontractorform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#editcontractorform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#editcontractorform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#editcontractorform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#editcontractorform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#editcontractorform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#editcontractorform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#editcontractorform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#editcontractorform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#editcontractorform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#editcontractorform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#editcontractorform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#editcontractorform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#editcontractorform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);




                /*  for payments year 3 1st release*/

                $('#editcontractorform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#editcontractorform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#editcontractorform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#editcontractorform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#editcontractorform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#editcontractorform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#editcontractorform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#editcontractorform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#editcontractorform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#editcontractorform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#editcontractorform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#editcontractorform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#editcontractorform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#editcontractorform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#editcontractorform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#editcontractorform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#editcontractorform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#editcontractorform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#editcontractorform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#editcontractorform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#editcontractorform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#editcontractorform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#editcontractorform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#editcontractorform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#editcontractorform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#editcontractorform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#editcontractorform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#editcontractorform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#editcontractorform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#editcontractorform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#editcontractorform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#editcontractorform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);






            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })
    //PUT DATA ONLY FOR EDIT Contractor GET METHOD 
    $("#UpdateRecord").click(function (e) {
        e.preventDefault();
        var data = {

            contractor_name: $('#editcontractorform').find('input[name=contractor_name]').val(),
            contractor_type: $('#editcontractorform').find('select[name=contractor_type]').val(),
            address_municipality: $('#editcontractorform').find('select[name=address_municipality]').val(),
            address_barangay: $('#editcontractorform').find('select[name=address_barangay]').val(),




            roleId: $('#editcontractorform').find('input[name=roleId]').val(),
            userId: $('#editcontractorform').find('input[name=userId]').val(),
            userName: $('#editcontractorform').find('input[name=userName]').val(),
            name: $('#editcontractorform').find('input[name=name]').val(),




            //project
            location_municipality: $('#editcontractorform').find('input[name=location_municipality]').val(),
            location_barangay: $('#editcontractorform').find('input[name=location_barangay]').val(),
            area: $('#editcontractorform').find('input[name=area]').val(),
            year_form: $('#editcontractorform').find('input[name=year_form]').val(),
            penro: $('#editcontractorform').find('input[name=penro]').val(),
            cenro: $('#editcontractorform').find('input[name=cenro]').val(),
            region: $('#editcontractorform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#editcontractorform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#editcontractorform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#editcontractorform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#editcontractorform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#editcontractorform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#editcontractorform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#editcontractorform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#editcontractorform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#editcontractorform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#editcontractorform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#editcontractorform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#editcontractorform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#editcontractorform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#editcontractorform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#editcontractorform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#editcontractorform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#editcontractorform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#editcontractorform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#editcontractorform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#editcontractorform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#editcontractorform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#editcontractorform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#editcontractorform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#editcontractorform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#editcontractorform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#editcontractorform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#editcontractorform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#editcontractorform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#editcontractorform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#editcontractorform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#editcontractorform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#editcontractorform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#editcontractorform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#editcontractorform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#editcontractorform').find('input[name=moanumber_year3]').val(),
            lddap_no_year1_1st: $('#editcontractorform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#editcontractorform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#editcontractorform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#editcontractorform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#editcontractorform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#editcontractorform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#editcontractorform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#editcontractorform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#editcontractorform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#editcontractorform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#editcontractorform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#editcontractorform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#editcontractorform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#editcontractorform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#editcontractorform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#editcontractorform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#editcontractorform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#editcontractorform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#editcontractorform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#editcontractorform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#editcontractorform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#editcontractorform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#editcontractorform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#editcontractorform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#editcontractorform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#editcontractorform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#editcontractorform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#editcontractorform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#editcontractorform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#editcontractorform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#editcontractorform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#editcontractorform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#editcontractorform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#editcontractorform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#editcontractorform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#editcontractorform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#editcontractorform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#editcontractorform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#editcontractorform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#editcontractorform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#editcontractorform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#editcontractorform').find('input[name=date_lddap_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#editcontractorform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#editcontractorform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#editcontractorform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#editcontractorform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#editcontractorform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#editcontractorform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#editcontractorform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#editcontractorform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#editcontractorform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#editcontractorform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#editcontractorform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#editcontractorform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#editcontractorform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#editcontractorform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#editcontractorform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#editcontractorform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#editcontractorform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#editcontractorform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#editcontractorform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#editcontractorform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#editcontractorform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#editcontractorform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#editcontractorform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#editcontractorform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#editcontractorform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#editcontractorform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#editcontractorform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#editcontractorform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#editcontractorform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#editcontractorform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#editcontractorform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#editcontractorform').find('input[name=date_lddap_year2_4th]').val(),


            //year3 1st release

            survivalrate_year3_1st: $('#editcontractorform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#editcontractorform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#editcontractorform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#editcontractorform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#editcontractorform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#editcontractorform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#editcontractorform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#editcontractorform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#editcontractorform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#editcontractorform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#editcontractorform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#editcontractorform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#editcontractorform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#editcontractorform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#editcontractorform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#editcontractorform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#editcontractorform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#editcontractorform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#editcontractorform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#editcontractorform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#editcontractorform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#editcontractorform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#editcontractorform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#editcontractorform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#editcontractorform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#editcontractorform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#editcontractorform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#editcontractorform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#editcontractorform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#editcontractorform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#editcontractorform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#editcontractorform').find('input[name=date_lddap_year3_4th]').val(),

        };


        var id = $('#editcontractorform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#editcontractorModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success("Contractor Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });

    //SAVINGR CONTRACTOR CREATE
    $("#contract_main").validate({
        rules: {
            contractor_name: {
                required: true,
            },
            address_municipality: {
                required: true,
            },
            address_barangay: {
                required: true,
            },
            contractor_type: {
                required: true,
            },
            location_municipality: {
                required: true,
            },
            location_barangay: {
                required: true,
            },
            area: {
                required: true,
            },
            year_form: {
                required: true,
            },
            penro: {
                required: true,
            },
            cenro: {
                required: true,
            },
            region: {
                required: true,
            },
        },
        errorClass: "validationerror",
        messages: {
            contractor_name: {
                required: "Please Input a Contractor",
            },
            address_municipality: {
                required: "Please Select a Municipality",
            },
            address_barangay: {
                required: "Please Select a Barangay",
            },
            contractor_type: {
                required: "Please Select a Type",
            },
        },
        submitHandler: function () {
            if ($("#contract_main").valid()) {
                var valdata = $("#contract_main").serialize();

                $.ajax({
                    url: '/api/contractor/post',
                    type: "POST",
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: valdata,
                });
                setTimeout(function () {
                    $("#pleasewaitModal").modal('show');
                    toastr.success('Successsfully Added a Contractor');
                    setTimeout(function () {
                        location.reload();
                        window.location.href = "/Information/Index";
                    }, 2000)
                }, 2000);
            }
        }
    });


    //SERVER SIDE DATATABLE SHOW DATA FOR CONTRACTOR
    var contractorTbl = $("#contractortable").DataTable({
        "ajax": {
            "url": "/Contractor/GetContractorTable",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "contractorID", "name": "contractorID", "className": "hideThis",
            },
            {
                "data": "contractor_name", "name": "contractor_name",
                "render": function (data, type, row) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >null</span>'
                    }

                    return '<span >' + data + '</span>'



                },

            },
            {
                "data": "address_municipality", "name": "address_municipality",
                "render": function (data, type, row) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >null</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "address_barangay", "name": "address_barangay",
                "render": function (data, type, row) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >null</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "contractor_type", "name": "contractor_type",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "DateAdded", "name": "DateAdded",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },
            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },
            },
            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  style=width:68px;  class=\'btn btn-outline-success editcontractor d-block btn-sm\' data-id = ' + data.contractorID + ' > Edit  <span class="fa fa-edit f-20" >  </span></button>' + '<button  class=\'btn btn-outline-danger  deletecontractor d-block btn-sm\' data-id = ' + data.contractorID + ' > Delete  <span class="fa fa-trash f-20" >  </span></button>'

                }
            },



        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {
            SearchfilterRole(json);
            /*  SearchfilterContractor(json);*/
        }


    });

    //forsearchfilterforrole
    function SearchfilterRole(json) {
        var filterforrole = $('<select/>').addClass("forsearchdropdownfilterrole ");
        filterforrole.append($('<option/>').attr('value', '').text('Select Filter'));
        var roles = [];
        $(json.data).each(function (index, element) {
            if ($.inArray(element.RoleId, roles) == -1) {
                roles.push(element.RoleId);
                filterforrole.append($('<option/>').attr('value', element.RoleId).text(element.RoleId));
            }
        });
        $("#FilterSearchRole").append(filterforrole).children("select").select2();
        $("#FilterSearchRole").on('change', 'select', function () {
            contractorTbl.column(5).search($(this).val()).draw();
        });
    }



    //SERVER SIDE DATATABLE SHOW DATA FOR PROEJCT
    $("#projectable").DataTable({
        "ajax": {
            "url": "/Contractor/GetProjectTables",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "contractorID", "name": "contractorID", "className": "hideThis",
            },
            {
                "data": "area", "name": "area",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
           
            {
                "data": "region", "name": "region",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "location_municipality", "name": "location_municipality",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "location_barangay", "name": "location_barangay",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "penro", "name": "penro",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "year_form", "name": "year_form",
                "render": function (data, type, row, value) {

                    if (data == null) {

                        return '<span  class=" badge bg-danger text-white" >' + data + '</span>'
                    }

                    return '<span >' + data + '</span>'



                },
            },
            {
                "data": "DateAdded", "name": "DateAdded",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },
            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },
            },
            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  style=width:68px;  class=\'btn btn-outline-success editdataproject d-block btn-sm\' data-id = ' + data.contractorID + ' > Edit  <span class="fa fa-edit f-20" >  </span></button>'

                }
            },




        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });




    //GET EDIT PROJECT IN MODAL
    $("#projectable").on('click', '.editdataproject', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#editprojectModal").modal('show');

                //contractor
                $('#editprojectform').find('input[name="contractorID"]').val(data.contractorID);
                $('#editprojectform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#editprojectform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#editprojectform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#editprojectform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#editprojectform').find('input[name="name"]').val(data.name);
                $('#editprojectform').find('input[name="userName"]').val(data.userName);
                $('#editprojectform').find('input[name="userId"]').val(data.userId);
                $('#editprojectform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#editprojectform').find('select[name="location_municipality"]').val(data.location_municipality);
                $('#editprojectform').find('select[name="location_barangay"]').val(data.location_barangay);
                $('#editprojectform').find('input[name="area"]').val(data.area);
                $('#editprojectform').find('select[name="year_form"]').val(data.year_form);
                $('#editprojectform').find('select[name="penro"]').val(data.penro);
                $('#editprojectform').find('select[select="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#editprojectform').find('select[name="cenro"]').val(data.cenro);
                $('#editprojectform').find('select[name="region"]').val(data.region);

                //for contract year1

                $('#editprojectform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#editprojectform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#editprojectform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#editprojectform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#editprojectform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#editprojectform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#editprojectform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#editprojectform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#editprojectform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#editprojectform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#editprojectform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#editprojectform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#editprojectform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#editprojectform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#editprojectform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#editprojectform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#editprojectform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#editprojectform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#editprojectform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#editprojectform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#editprojectform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#editprojectform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#editprojectform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#editprojectform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#editprojectform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#editprojectform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#editprojectform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#editprojectform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#editprojectform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#editprojectform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#editprojectform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#editprojectform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#editprojectform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#editprojectform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#editprojectform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#editprojectform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#editprojectform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#editprojectform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#editprojectform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#editprojectform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#editprojectform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#editprojectform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editprojectform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#editprojectform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#editprojectform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#editprojectform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#editprojectform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#editprojectform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#editprojectform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#editprojectform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editprojectform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#editprojectform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#editprojectform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#editprojectform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#editprojectform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#editprojectform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#editprojectform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#editprojectform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editprojectform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#editprojectform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#editprojectform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#editprojectform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#editprojectform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#editprojectform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#editprojectform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#editprojectform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#editprojectform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#editprojectform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#editprojectform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#editprojectform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#editprojectform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#editprojectform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#editprojectform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#editprojectform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#editprojectform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#editprojectform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#editprojectform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#editprojectform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#editprojectform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#editprojectform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#editprojectform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#editprojectform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#editprojectform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#editprojectform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#editprojectform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#editprojectform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#editprojectform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#editprojectform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#editprojectform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#editprojectform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#editprojectform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#editprojectform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#editprojectform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 3 2nd release
                $('#editprojectform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#editprojectform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#editprojectform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#editprojectform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#editprojectform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#editprojectform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#editprojectform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#editprojectform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#editprojectform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#editprojectform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#editprojectform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#editprojectform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#editprojectform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#editprojectform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#editprojectform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#editprojectform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);




                /*  for payments year 3 1st release*/

                $('#editprojectform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#editprojectform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#editprojectform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#editprojectform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#editprojectform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#editprojectform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#editprojectform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#editprojectform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#editprojectform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#editprojectform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#editprojectform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#editprojectform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#editprojectform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#editprojectform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#editprojectform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#editprojectform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#editprojectform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#editprojectform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#editprojectform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#editprojectform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#editprojectform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#editprojectform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#editprojectform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#editprojectform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#editprojectform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#editprojectform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#editprojectform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#editprojectform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#editprojectform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#editprojectform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#editprojectform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#editprojectform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);










            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })


    //PUT DATA ONLY FOR EDIT PROJECT GET METHOD 
    $("#UpdateProject").click(function (e) {
        e.preventDefault();
        var data = {


            //contractor
            contractorID: $('#editprojectform').find('input[name=contractorID]').val(),
            contractor_name: $('#editprojectform').find('input[name=contractor_name]').val(),
            address_municipality: $('#editprojectform').find('input[name=address_municipality]').val(),
            address_barangay: $('#editprojectform').find('input[name=address_barangay]').val(),
            contractor_type: $('#editprojectform').find('input[name=contractor_type]').val(),

            //forusers
            roleId: $('#editprojectform').find('input[name=roleId]').val(),
            userId: $('#editprojectform').find('input[name=userId]').val(),
            userName: $('#editprojectform').find('input[name=userName]').val(),
            name: $('#editprojectform').find('input[name=name]').val(),




            //project
            location_municipality: $('#editprojectform').find('select[name=location_municipality]').val(),
            location_barangay: $('#editprojectform').find('select[name=location_barangay]').val(),
            area: $('#editprojectform').find('input[name=area]').val(),
            year_form: $('#editprojectform').find('select[name=year_form]').val(),
            penro: $('#editprojectform').find('select[name=penro]').val(),
            cenro: $('#editprojectform').find('select[name=cenro]').val(),
            region: $('#editprojectform').find('select[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#editprojectform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#editprojectform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#editprojectform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#editprojectform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#editprojectform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#editprojectform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#editprojectform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#editprojectform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#editprojectform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#editprojectform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#editprojectform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#editprojectform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#editprojectform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#editprojectform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#editprojectform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#editprojectform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#editprojectform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#editprojectform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#editprojectform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#editprojectform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#editprojectform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#editprojectform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#editprojectform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#editprojectform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#editprojectform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#editprojectform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#editprojectform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#editprojectform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#editprojectform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#editprojectform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#editprojectform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#editprojectform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#editprojectform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#editprojectform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#editprojectform').find('input[name=moanumber_year3]').val(),
            lddap_no_year1_1st: $('#editprojectform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#editprojectform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#editprojectform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#editprojectform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#editprojectform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#editprojectform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#editprojectform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#editprojectform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#editprojectform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#editprojectform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#editprojectform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#editprojectform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#editprojectform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#editprojectform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#editprojectform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#editprojectform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#editprojectform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#editprojectform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#editprojectform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#editprojectform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#editprojectform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#editprojectform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#editprojectform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#editprojectform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#editprojectform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#editprojectform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#editprojectform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#editprojectform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#editprojectform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#editprojectform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#editprojectform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#editprojectform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#editprojectform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#editprojectform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#editprojectform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#editprojectform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#editprojectform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#editprojectform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#editprojectform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#editprojectform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#editprojectform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#editprojectform').find('input[name=date_lddap_year1_6th]').val(),







            //year2 1st release

            survivalrate_year2_1st: $('#editprojectform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#editprojectform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#editprojectform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#editprojectform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#editprojectform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#editprojectform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#editprojectform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#editprojectform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#editprojectform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#editprojectform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#editprojectform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#editprojectform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#editprojectform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#editprojectform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#editprojectform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#editprojectform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#editprojectform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#editprojectform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#editprojectform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#editprojectform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#editprojectform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#editprojectform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#editprojectform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#editprojectform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#editprojectform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#editprojectform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#editprojectform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#editprojectform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#editprojectform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#editprojectform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#editprojectform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#editprojectform').find('input[name=date_lddap_year2_4th]').val(),


            //year3 1st release

            survivalrate_year3_1st: $('#editprojectform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#editprojectform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#editprojectform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#editprojectform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#editprojectform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#editprojectform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#editprojectform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#editprojectform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#editprojectform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#editprojectform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#editprojectform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#editprojectform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#editprojectform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#editprojectform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#editprojectform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#editprojectform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#editprojectform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#editprojectform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#editprojectform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#editprojectform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#editprojectform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#editprojectform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#editprojectform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#editprojectform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#editprojectform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#editprojectform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#editprojectform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#editprojectform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#editprojectform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#editprojectform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#editprojectform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#editprojectform').find('input[name=date_lddap_year3_4th]').val(),






        };


        var id = $('#editprojectform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#editprojectModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success("Project Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });

    //SERVER SIDE DATATABLE SHOW DATA FOR PAYMENT
    $("#paymentables").DataTable({
        "ajax": {
            "url": "/Contractor/GetPaymenttable",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "contractorID", "name": "contractorID", "className": "hideThis",
            },
            {
                "data": "contractor_name", "name": "contractor_name",
            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button   class=\'btn btn-primary getdatayear1payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 1  <span class="fa fa-list f-20" >  </span></button>' + '<button  class=\'btn btn-info  getdatayear2payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 2  <span class="fa fa-list f-20" >  </span></button>' + '<button  class=\'btn btn-success  getdatayear3payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 3   <span class="fa fa-list f-20" >  </span></button>'

                }
            },
            {
                "data": "DateAdded", "name": "DateAdded",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },
            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },
            },
            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button   class=\'btn btn-outline-primary edityear1payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 1  <span class="fa fa-edit f-20" >  </span></button>' + '<button   class=\'btn btn-outline-info edityear2payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 2  <span class="fa fa-edit f-20" >  </span></button>' + '<button  class=\'btn btn-outline-success edityear3payment d-block btn-sm\' data-id = ' + data.contractorID + ' > PAYMENTS YEAR 3  <span class="fa fa-edit f-20" >  </span></button>'
                }
            },




        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });


    //GET DATA ONLY FOR YEAR1 FOR PAYMENT IN MODAL (Edit ONLY YEAR 1)

    $("#paymentables").on('click', '.edityear1payment ', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear1paymentModal").modal('show');
                //contractor
                $('#edityear1paymentform').find('input[name="contractorID"]').val(data.contractorID);
                //contractor
                $('#edityear1paymentform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear1paymentform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear1paymentform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear1paymentform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear1paymentform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear1paymentform').find('input[name="name"]').val(data.name);
                $('#edityear1paymentform').find('input[name="userName"]').val(data.userName);
                $('#edityear1paymentform').find('input[name="userId"]').val(data.userId);
                $('#edityear1paymentform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear1paymentform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear1paymentform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear1paymentform').find('input[name="area"]').val(data.area);
                $('#edityear1paymentform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear1paymentform').find('input[name="penro"]').val(data.penro);
                $('#edityear1paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear1paymentform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear1paymentform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear1paymentform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear1paymentform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear1paymentform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear1paymentform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear1paymentform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear1paymentform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear1paymentform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear1paymentform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear1paymentform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear1paymentform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear1paymentform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear1paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear1paymentform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear1paymentform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear1paymentform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear1paymentform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear1paymentform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear1paymentform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear1paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear1paymentform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear1paymentform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear1paymentform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear1paymentform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear1paymentform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear1paymentform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear1paymentform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear1paymentform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear1paymentform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear1paymentform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear1paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear1paymentform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear1paymentform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear1paymentform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear1paymentform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear1paymentform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear1paymentform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear1paymentform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear1paymentform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear1paymentform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear1paymentform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear1paymentform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear1paymentform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear1paymentform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear1paymentform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear1paymentform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear1paymentform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear1paymentform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear1paymentform').find('input[name="bir_year1_3rd"]').val(data.bir_year1_3rd);
                $('#edityear1paymentform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear1paymentform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear1paymentform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear1paymentform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear1paymentform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear1paymentform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear1paymentform').find('input[name="bir_year1_4th"]').val(data.bir_year1_4th);
                $('#edityear1paymentform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear1paymentform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear1paymentform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear1paymentform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear1paymentform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear1paymentform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear1paymentform').find('input[name="bir_year1_5th"]').val(data.bir_year1_5th);
                $('#edityear1paymentform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear1paymentform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear1paymentform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear1paymentform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear1paymentform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear1paymentform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear1paymentform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#edityear1paymentform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#edityear1paymentform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#edityear1paymentform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#edityear1paymentform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear1paymentform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear1paymentform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear1paymentform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear1paymentform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear1paymentform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear1paymentform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear1paymentform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear1paymentform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear1paymentform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear1paymentform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear1paymentform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear1paymentform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear1paymentform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear1paymentform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear1paymentform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 2 2nd release
                $('#edityear1paymentform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear1paymentform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear1paymentform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear1paymentform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear1paymentform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear1paymentform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear1paymentform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear1paymentform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear1paymentform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear1paymentform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear1paymentform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear1paymentform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear1paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear1paymentform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear1paymentform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear1paymentform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);



                /*  for payments year 3 1st release*/

                $('#edityear1paymentform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear1paymentform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear1paymentform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear1paymentform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear1paymentform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear1paymentform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear1paymentform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear1paymentform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear1paymentform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear1paymentform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear1paymentform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear1paymentform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear1paymentform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear1paymentform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear1paymentform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear1paymentform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear1paymentform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear1paymentform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear1paymentform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear1paymentform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear1paymentform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear1paymentform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear1paymentform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear1paymentform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear1paymentform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear1paymentform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear1paymentform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear1paymentform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear1paymentform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear1paymentform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear1paymentform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear1paymentform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);











            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })

    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 1 ONLY)
    $("#UpdateYear1Payment").click(function (e) {
        e.preventDefault();
        var data = {
            //contractor
            contractorID: $('#edityear1paymentform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear1paymentform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear1paymentform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear1paymentform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear1paymentform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear1paymentform').find('input[name=roleId]').val(),
            userId: $('#edityear1paymentform').find('input[name=userId]').val(),
            userName: $('#edityear1paymentform').find('input[name=userName]').val(),
            name: $('#edityear1paymentform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear1paymentform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear1paymentform').find('input[name=location_barangay]').val(),
            area: $('#edityear1paymentform').find('input[name=area]').val(),
            year_form: $('#edityear1paymentform').find('input[name=year_form]').val(),
            penro: $('#edityear1paymentform').find('input[name=penro]').val(),
            cenro: $('#edityear1paymentform').find('input[name=cenro]').val(),
            region: $('#edityear1paymentform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear1paymentform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear1paymentform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear1paymentform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear1paymentform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear1paymentform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear1paymentform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear1paymentform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear1paymentform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear1paymentform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear1paymentform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear1paymentform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear1paymentform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear1paymentform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear1paymentform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear1paymentform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear1paymentform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear1paymentform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear1paymentform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear1paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear1paymentform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear1paymentform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear1paymentform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear1paymentform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear1paymentform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear1paymentform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear1paymentform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear1paymentform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear1paymentform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear1paymentform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear1paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear1paymentform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear1paymentform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear1paymentform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear1paymentform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear1paymentform').find('input[name=grossammount_year1_1st]').val(),
            lddap_no_year1_1st: $('#edityear1paymentform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear1paymentform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear1paymentform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear1paymentform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear1paymentform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear1paymentform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear1paymentform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear1paymentform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear1paymentform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear1paymentform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear1paymentform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear1paymentform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear1paymentform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear1paymentform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear1paymentform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear1paymentform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear1paymentform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear1paymentform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear1paymentform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear1paymentform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear1paymentform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear1paymentform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear1paymentform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear1paymentform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear1paymentform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear1paymentform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear1paymentform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear1paymentform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear1paymentform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear1paymentform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear1paymentform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear1paymentform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear1paymentform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear1paymentform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear1paymentform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear1paymentform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear1paymentform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear1paymentform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear1paymentform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#edityear1paymentform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#edityear1paymentform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#edityear1paymentform').find('input[name=date_lddap_year1_6th]').val(),







            //year2 1st release

            survivalrate_year2_1st: $('#edityear1paymentform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear1paymentform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear1paymentform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear1paymentform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear1paymentform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear1paymentform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear1paymentform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear1paymentform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear1paymentform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear1paymentform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear1paymentform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear1paymentform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear1paymentform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear1paymentform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear1paymentform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear1paymentform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear1paymentform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear1paymentform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear1paymentform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear1paymentform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear1paymentform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear1paymentform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear1paymentform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear1paymentform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear1paymentform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear1paymentform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear1paymentform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear1paymentform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear1paymentform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear1paymentform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear1paymentform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear1paymentform').find('input[name=date_lddap_year2_4th]').val(),


            //year3 1st release

            survivalrate_year3_1st: $('#edityear1paymentform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear1paymentform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear1paymentform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear1paymentform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear1paymentform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear1paymentform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear1paymentform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear1paymentform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear1paymentform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear1paymentform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear1paymentform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear1paymentform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear1paymentform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear1paymentform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear1paymentform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear1paymentform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear1paymentform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear1paymentform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear1paymentform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear1paymentform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear1paymentform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear1paymentform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear1paymentform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear1paymentform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear1paymentform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear1paymentform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear1paymentform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear1paymentform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear1paymentform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear1paymentform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear1paymentform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear1paymentform').find('input[name=date_lddap_year3_4th]').val(),






        };



        var id = $('#edityear1paymentform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear1paymentModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success(" Year1 Payments Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });










    //GET DATA ONLY FOR YEAR2 FOR PAYMENT IN MODAL (Edit ONLY YEAR 2)

    $("#paymentables").on('click', '.edityear3payment ', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear3paymentModal").modal('show');
                //contractor
                $('#edityear3paymentform').find('input[name="contractorID"]').val(data.contractorID);
                //contractor
                $('#edityear3paymentform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear3paymentform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear3paymentform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear3paymentform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear3paymentform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear3paymentform').find('input[name="name"]').val(data.name);
                $('#edityear3paymentform').find('input[name="userName"]').val(data.userName);
                $('#edityear3paymentform').find('input[name="userId"]').val(data.userId);
                $('#edityear3paymentform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear3paymentform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear3paymentform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear3paymentform').find('input[name="area"]').val(data.area);
                $('#edityear3paymentform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear3paymentform').find('input[name="penro"]').val(data.penro);
                $('#edityear3paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear3paymentform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear3paymentform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear3paymentform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear3paymentform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear3paymentform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear3paymentform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear3paymentform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear3paymentform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear3paymentform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear3paymentform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear3paymentform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear3paymentform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear3paymentform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear3paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear3paymentform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear3paymentform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear3paymentform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear3paymentform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear3paymentform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear3paymentform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear3paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear3paymentform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear3paymentform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear3paymentform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear3paymentform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear3paymentform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear3paymentform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear3paymentform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear3paymentform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear3paymentform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear3paymentform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear3paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear3paymentform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear3paymentform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear3paymentform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear3paymentform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear3paymentform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear3paymentform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear3paymentform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear3paymentform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear3paymentform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear3paymentform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear3paymentform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear3paymentform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear3paymentform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear3paymentform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear3paymentform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear3paymentform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear3paymentform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear3paymentform').find('input[name="bir_year1_3rd"]').val(data.bir_year1_3rd);
                $('#edityear3paymentform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear3paymentform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear3paymentform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear3paymentform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear3paymentform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear3paymentform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear3paymentform').find('input[name="bir_year1_4th"]').val(data.bir_year1_4th);
                $('#edityear3paymentform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear3paymentform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear3paymentform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear3paymentform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear3paymentform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear3paymentform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear3paymentform').find('input[name="bir_year1_5th"]').val(data.bir_year1_5th);
                $('#edityear3paymentform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear3paymentform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear3paymentform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear3paymentform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear3paymentform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear3paymentform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear3paymentform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#edityear3paymentform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#edityear3paymentform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#edityear3paymentform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);






                //for payments year 2 1st release
                $('#edityear3paymentform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear3paymentform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear3paymentform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear3paymentform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear3paymentform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear3paymentform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear3paymentform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear3paymentform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear3paymentform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear3paymentform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear3paymentform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear3paymentform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear3paymentform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear3paymentform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear3paymentform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear3paymentform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 2 2nd release
                $('#edityear3paymentform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear3paymentform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear3paymentform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear3paymentform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear3paymentform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear3paymentform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear3paymentform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear3paymentform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear3paymentform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear3paymentform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear3paymentform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear3paymentform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear3paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear3paymentform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear3paymentform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear3paymentform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);
                $('#edityear3paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);




                /*  for payments year 3 1st release*/

                $('#edityear3paymentform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear3paymentform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear3paymentform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear3paymentform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear3paymentform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear3paymentform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear3paymentform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear3paymentform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear3paymentform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear3paymentform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear3paymentform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear3paymentform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear3paymentform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear3paymentform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear3paymentform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear3paymentform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear3paymentform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear3paymentform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear3paymentform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear3paymentform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear3paymentform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear3paymentform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear3paymentform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear3paymentform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear3paymentform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear3paymentform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear3paymentform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear3paymentform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear3paymentform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear3paymentform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear3paymentform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear3paymentform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);



            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })

    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 3 ONLY)
    $("#UpdateYear3Payment").click(function (e) {
        e.preventDefault();

        var data = {
            //contractor
            contractorID: $('#edityear3paymentform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear3paymentform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear3paymentform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear3paymentform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear3paymentform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear3paymentform').find('input[name=roleId]').val(),
            userId: $('#edityear3paymentform').find('input[name=userId]').val(),
            userName: $('#edityear3paymentform').find('input[name=userName]').val(),
            name: $('#edityear3paymentform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear3paymentform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear3paymentform').find('input[name=location_barangay]').val(),
            area: $('#edityear3paymentform').find('input[name=area]').val(),
            year_form: $('#edityear3paymentform').find('input[name=year_form]').val(),
            penro: $('#edityear3paymentform').find('input[name=penro]').val(),
            cenro: $('#edityear3paymentform').find('input[name=cenro]').val(),
            region: $('#edityear3paymentform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear3paymentform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear3paymentform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear3paymentform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear3paymentform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear3paymentform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear3paymentform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear3paymentform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear3paymentform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear3paymentform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear3paymentform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear3paymentform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear3paymentform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear3paymentform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear3paymentform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear3paymentform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear3paymentform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear3paymentform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear3paymentform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear3paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear3paymentform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear3paymentform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear3paymentform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear3paymentform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear3paymentform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear3paymentform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear3paymentform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear3paymentform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear3paymentform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear3paymentform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear3paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear3paymentform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear3paymentform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear3paymentform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear3paymentform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear3paymentform').find('input[name=grossammount_year1_1st]').val(),
            lddap_no_year1_1st: $('#edityear3paymentform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear3paymentform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear3paymentform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear3paymentform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear3paymentform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear3paymentform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear3paymentform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear3paymentform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear3paymentform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear3paymentform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear3paymentform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear3paymentform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear3paymentform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear3paymentform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear3paymentform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear3paymentform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear3paymentform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear3paymentform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear3paymentform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear3paymentform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear3paymentform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear3paymentform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear3paymentform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear3paymentform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear3paymentform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear3paymentform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear3paymentform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear3paymentform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear3paymentform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear3paymentform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear3paymentform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear3paymentform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear3paymentform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear3paymentform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear3paymentform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear3paymentform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear3paymentform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear3paymentform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear3paymentform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#edityear3paymentform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#edityear3paymentform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#edityear3paymentform').find('input[name=date_lddap_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#edityear3paymentform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear3paymentform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear3paymentform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear3paymentform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear3paymentform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear3paymentform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear3paymentform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear3paymentform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear3paymentform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear3paymentform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear3paymentform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear3paymentform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear3paymentform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear3paymentform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear3paymentform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear3paymentform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear3paymentform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear3paymentform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear3paymentform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear3paymentform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear3paymentform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear3paymentform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear3paymentform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear3paymentform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear3paymentform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear3paymentform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear3paymentform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear3paymentform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear3paymentform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear3paymentform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear3paymentform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear3paymentform').find('input[name=date_lddap_year2_4th]').val(),







            //year3 1st release

            survivalrate_year3_1st: $('#edityear3paymentform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear3paymentform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear3paymentform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear3paymentform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear3paymentform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear3paymentform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear3paymentform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear3paymentform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear3paymentform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear3paymentform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear3paymentform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear3paymentform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear3paymentform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear3paymentform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear3paymentform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear3paymentform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear3paymentform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear3paymentform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear3paymentform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear3paymentform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear3paymentform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear3paymentform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear3paymentform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear3paymentform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear3paymentform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear3paymentform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear3paymentform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear3paymentform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear3paymentform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear3paymentform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear3paymentform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear3paymentform').find('input[name=date_lddap_year3_4th]').val(),














        };


        var id = $('#edityear3paymentform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear3paymentModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success(" Year3 Payments Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });


















    //GET DATA ONLY FOR YEAR2 FOR PAYMENT IN MODAL (Edit ONLY YEAR 2)

    $("#paymentables").on('click', '.edityear2payment ', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear2paymentModal").modal('show');
                //contractor
                $('#edityear2paymentform').find('input[name="contractorID"]').val(data.contractorID);
                //contractor
                $('#edityear2paymentform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear2paymentform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear2paymentform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear2paymentform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear2paymentform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear2paymentform').find('input[name="name"]').val(data.name);
                $('#edityear2paymentform').find('input[name="userName"]').val(data.userName);
                $('#edityear2paymentform').find('input[name="userId"]').val(data.userId);
                $('#edityear2paymentform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear2paymentform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear2paymentform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear2paymentform').find('input[name="area"]').val(data.area);
                $('#edityear2paymentform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear2paymentform').find('input[name="penro"]').val(data.penro);
                $('#edityear2paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear2paymentform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear2paymentform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear2paymentform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear2paymentform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear2paymentform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear2paymentform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear2paymentform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear2paymentform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear2paymentform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear2paymentform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear2paymentform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear2paymentform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear2paymentform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear2paymentform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear2paymentform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear2paymentform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear2paymentform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear2paymentform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear2paymentform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear2paymentform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear2paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear2paymentform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear2paymentform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear2paymentform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear2paymentform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear2paymentform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear2paymentform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear2paymentform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear2paymentform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear2paymentform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear2paymentform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear2paymentform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear2paymentform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear2paymentform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear2paymentform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear2paymentform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear2paymentform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear2paymentform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear2paymentform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear2paymentform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear2paymentform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear2paymentform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear2paymentform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear2paymentform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear2paymentform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear2paymentform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear2paymentform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear2paymentform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear2paymentform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear2paymentform').find('input[name="bir_year1_3rd"]').val(data.bir_year1_3rd);
                $('#edityear2paymentform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear2paymentform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear2paymentform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear2paymentform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear2paymentform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear2paymentform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear2paymentform').find('input[name="bir_year1_4th"]').val(data.bir_year1_4th);
                $('#edityear2paymentform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear2paymentform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear2paymentform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear2paymentform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear2paymentform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear2paymentform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear2paymentform').find('input[name="bir_year1_5th"]').val(data.bir_year1_5th);
                $('#edityear2paymentform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear2paymentform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear2paymentform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear2paymentform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear2paymentform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear2paymentform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear2paymentform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#edityear2paymentform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#edityear2paymentform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#edityear2paymentform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#edityear2paymentform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear2paymentform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear2paymentform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear2paymentform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear2paymentform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear2paymentform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear2paymentform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear2paymentform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear2paymentform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear2paymentform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear2paymentform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear2paymentform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear2paymentform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear2paymentform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear2paymentform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear2paymentform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 2 2nd release
                $('#edityear2paymentform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear2paymentform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear2paymentform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear2paymentform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear2paymentform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear2paymentform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear2paymentform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear2paymentform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear2paymentform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear2paymentform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear2paymentform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear2paymentform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear2paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear2paymentform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear2paymentform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear2paymentform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);
                $('#edityear2paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);



                /*  for payments year 3 1st release*/

                $('#edityear2paymentform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear2paymentform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear2paymentform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear2paymentform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear2paymentform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear2paymentform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear2paymentform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear2paymentform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear2paymentform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear2paymentform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear2paymentform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear2paymentform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear2paymentform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear2paymentform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear2paymentform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear2paymentform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear2paymentform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear2paymentform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear2paymentform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear2paymentform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear2paymentform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear2paymentform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear2paymentform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear2paymentform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear2paymentform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear2paymentform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear2paymentform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear2paymentform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear2paymentform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear2paymentform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear2paymentform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear2paymentform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);









            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })




    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 2 ONLY)
    $("#UpdateYear2Payment").click(function (e) {
        e.preventDefault();

        var data = {
            //contractor
            contractorID: $('#edityear2paymentform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear2paymentform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear2paymentform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear2paymentform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear2paymentform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear2paymentform').find('input[name=roleId]').val(),
            userId: $('#edityear2paymentform').find('input[name=userId]').val(),
            userName: $('#edityear2paymentform').find('input[name=userName]').val(),
            name: $('#edityear2paymentform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear2paymentform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear2paymentform').find('input[name=location_barangay]').val(),
            area: $('#edityear2paymentform').find('input[name=area]').val(),
            year_form: $('#edityear2paymentform').find('input[name=year_form]').val(),
            penro: $('#edityear2paymentform').find('input[name=penro]').val(),
            cenro: $('#edityear2paymentform').find('input[name=cenro]').val(),
            region: $('#edityear2paymentform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear2paymentform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear2paymentform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear2paymentform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear2paymentform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear2paymentform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear2paymentform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear2paymentform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear2paymentform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear2paymentform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear2paymentform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear2paymentform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear2paymentform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear2paymentform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear2paymentform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear2paymentform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear2paymentform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear2paymentform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear2paymentform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear2paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear2paymentform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear2paymentform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear2paymentform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear2paymentform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear2paymentform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear2paymentform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear2paymentform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear2paymentform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear2paymentform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear2paymentform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear2paymentform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear2paymentform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear2paymentform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear2paymentform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear2paymentform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear2paymentform').find('input[name=grossammount_year1_1st]').val(),
            lddap_no_year1_1st: $('#edityear2paymentform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear2paymentform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear2paymentform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear2paymentform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear2paymentform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear2paymentform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear2paymentform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear2paymentform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear2paymentform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear2paymentform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear2paymentform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear2paymentform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear2paymentform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear2paymentform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear2paymentform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear2paymentform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear2paymentform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear2paymentform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear2paymentform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear2paymentform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear2paymentform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear2paymentform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear2paymentform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear2paymentform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear2paymentform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear2paymentform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear2paymentform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear2paymentform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear2paymentform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear2paymentform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear2paymentform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear2paymentform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear2paymentform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear2paymentform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear2paymentform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear2paymentform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear2paymentform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear2paymentform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear2paymentform').find('input[name=bir_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#edityear2paymentform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear2paymentform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear2paymentform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear2paymentform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear2paymentform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear2paymentform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear2paymentform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear2paymentform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear2paymentform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear2paymentform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear2paymentform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear2paymentform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear2paymentform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear2paymentform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear2paymentform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear2paymentform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear2paymentform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear2paymentform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear2paymentform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear2paymentform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear2paymentform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear2paymentform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear2paymentform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear2paymentform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear2paymentform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear2paymentform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear2paymentform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear2paymentform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear2paymentform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear2paymentform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear2paymentform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear2paymentform').find('input[name=date_lddap_year2_4th]').val(),




            //year3 1st release

            survivalrate_year3_1st: $('#edityear2paymentform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear2paymentform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear2paymentform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear2paymentform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear2paymentform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear2paymentform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear2paymentform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear2paymentform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear2paymentform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear2paymentform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear2paymentform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear2paymentform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear2paymentform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear2paymentform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear2paymentform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear2paymentform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear2paymentform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear2paymentform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear2paymentform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear2paymentform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear2paymentform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear2paymentform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear2paymentform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear2paymentform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear2paymentform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear2paymentform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear2paymentform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear2paymentform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear2paymentform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear2paymentform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear2paymentform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear2paymentform').find('input[name=date_lddap_year3_4th]').val(),






          
        };


        var id = $('#edityear2paymentform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear2paymentModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success(" Year2 Payments Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });















    //SERVER SIDE DATATABLE SHOW DATA FOR CONTRACTOR
    $("#contracttables").DataTable({
        "ajax": {
            "url": "/Contractor/GetContractTables",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "contractorID", "name": "contractorID", "className": "hideThis",
            },
            {
                "data": "contractor_name", "name": "contractor_name",
            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  style=width:72px;  class=\'btn btn-primary getdatayear1contract d-block btn-sm\' data-id = ' + data.contractorID + ' > YEAR1  <span class="fa fa-list f-20" >  </span></button>' + '<button  class=\'btn btn-info  getdatayear2contract d-block btn-sm\' data-id = ' + data.contractorID + ' > YEAR2  <span class="fa fa-list f-20" >  </span></button>' + '<button  class=\'btn btn-success  getdatayear3contract d-block btn-sm\' data-id = ' + data.contractorID + ' > YEAR3  <span class="fa fa-list f-20" >  </span></button>'

                }
            },
            {
                "data": "DateAdded", "name": "DateAdded",
                "render": function (data, type, row, meta) {
                    return `<span >${moment(data).format("MMMM DD YYYY, h:mm:ss a")}</span>`;
                }

            },
            {
                "data": "RoleId", "name": "RoleId",
                "render": function (data, type, row) {

                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >NgpAdmin</span>'
                    }

                    return '<span class=" badge bg-secondary text-black" style="font-size:12px;" >' + data + '</span>'



                },
            },
            {
                "data": "Name", "name": "Name",
                "render": function (data, type, row) {

                    return '<span class=" badge bg-info text-white" style="font-size:12px;" >' + data + '</span>'



                },

            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  style=width:100px;  class=\'btn btn-outline-primary edityear1contract d-block btn-sm\' data-id = ' + data.contractorID + ' > EDITYEAR1  <span class="fa fa-edit f-20" >  </span></button>' + '<button  style=width:100px;  class=\'btn btn-outline-info edityear2contract d-block btn-sm\' data-id = ' + data.contractorID + ' > EDITYEAR2  <span class="fa fa-edit f-20" >  </span></button>' + '<button  style=width:100px;  class=\'btn btn-outline-success edityear3contract d-block btn-sm\' data-id = ' + data.contractorID + ' > EDITYEAR3  <span class="fa fa-edit f-20" >  </span></button>'
                }
            },




        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

            /*  SearchfilterContractor(json);*/
        }


    });

    //GET DATA ONLY FOR YEAR1 FOR CONTRACT IN MODAL (Edit ONLY YEAR 1)

    $("#contracttables").on('click', '.edityear1contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear1contractModal").modal('show');
                //contractor
                $('#edityear1contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear1contractform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear1contractform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear1contractform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear1contractform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear1contractform').find('input[name="name"]').val(data.name);
                $('#edityear1contractform').find('input[name="userName"]').val(data.userName);
                $('#edityear1contractform').find('input[name="userId"]').val(data.userId);
                $('#edityear1contractform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear1contractform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear1contractform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear1contractform').find('input[name="area"]').val(data.area);
                $('#edityear1contractform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear1contractform').find('input[name="penro"]').val(data.penro);
                $('#edityear1contractform').find('input[select="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear1contractform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear1contractform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear1contractform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear1contractform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear1contractform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear1contractform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear1contractform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear1contractform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear1contractform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear1contractform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear1contractform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear1contractform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear1contractform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear1contractform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear1contractform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear1contractform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear1contractform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear1contractform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear1contractform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear1contractform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear1contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear1contractform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear1contractform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear1contractform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear1contractform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear1contractform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear1contractform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear1contractform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear1contractform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear1contractform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear1contractform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear1contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear1contractform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear1contractform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear1contractform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear1contractform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear1contractform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear1contractform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear1contractform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear1contractform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear1contractform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear1contractform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear1contractform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear1contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear1contractform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear1contractform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear1contractform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear1contractform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear1contractform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear1contractform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear1contractform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear1contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear1contractform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear1contractform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear1contractform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear1contractform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear1contractform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear1contractform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear1contractform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear1contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear1contractform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear1contractform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear1contractform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear1contractform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear1contractform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear1contractform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear1contractform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear1contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear1contractform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear1contractform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear1contractform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear1contractform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear1contractform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear1contractform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear1contractform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear1contractform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);





                //for payments year 2 1st release
                $('#edityear1contractform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear1contractform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear1contractform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear1contractform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear1contractform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear1contractform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear1contractform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear1contractform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear1contractform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear1contractform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear1contractform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear1contractform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear1contractform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear1contractform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear1contractform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear1contractform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 3 2nd release
                $('#edityear1contractform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear1contractform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear1contractform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear1contractform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear1contractform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear1contractform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear1contractform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear1contractform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear1contractform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear1contractform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear1contractform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear1contractform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear1contractform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear1contractform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear1contractform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear1contractform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);


                /*  for payments year 3 1st release*/

                $('#edityear1contractform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear1contractform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear1contractform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear1contractform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear1contractform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear1contractform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear1contractform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear1contractform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear1contractform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear1contractform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear1contractform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear1contractform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear1contractform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear1contractform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear1contractform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear1contractform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear1contractform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear1contractform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear1contractform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear1contractform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear1contractform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear1contractform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear1contractform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear1contractform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear1contractform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear1contractform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear1contractform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear1contractform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear1contractform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear1contractform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear1contractform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear1contractform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);







            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })


    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 1 ONLY)
    $("#UpdateYear1Contract").click(function (e) {
        e.preventDefault();
        var data = {
            //contractor
            contractorID: $('#edityear1contractform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear1contractform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear1contractform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear1contractform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear1contractform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear1contractform').find('input[name=roleId]').val(),
            userId: $('#edityear1contractform').find('input[name=userId]').val(),
            userName: $('#edityear1contractform').find('input[name=userName]').val(),
            name: $('#edityear1contractform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear1contractform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear1contractform').find('input[name=location_barangay]').val(),
            area: $('#edityear1contractform').find('input[name=area]').val(),
            year_form: $('#edityear1contractform').find('input[name=year_form]').val(),
            penro: $('#edityear1contractform').find('input[name=penro]').val(),
            cenro: $('#edityear1contractform').find('input[name=cenro]').val(),
            region: $('#edityear1contractform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear1contractform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear1contractform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear1contractform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear1contractform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear1contractform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear1contractform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear1contractform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear1contractform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear1contractform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear1contractform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear1contractform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear1contractform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear1contractform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear1contractform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear1contractform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear1contractform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear1contractform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear1contractform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear1contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear1contractform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear1contractform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear1contractform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear1contractform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear1contractform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear1contractform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear1contractform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear1contractform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear1contractform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear1contractform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear1contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear1contractform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear1contractform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear1contractform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear1contractform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear1contractform').find('input[name=moanumber_year3]').val(),
            lddap_no_year1_1st: $('#edityear1contractform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear1contractform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear1contractform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear1contractform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear1contractform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear1contractform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear1contractform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear1contractform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear1contractform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear1contractform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear1contractform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear1contractform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear1contractform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear1contractform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear1contractform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear1contractform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear1contractform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear1contractform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear1contractform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear1contractform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear1contractform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear1contractform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear1contractform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear1contractform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear1contractform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear1contractform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear1contractform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear1contractform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear1contractform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear1contractform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear1contractform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear1contractform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear1contractform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear1contractform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear1contractform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear1contractform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear1contractform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear1contractform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear1contractform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#edityear1contractform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#edityear1contractform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#edityear1contractform').find('input[name=date_lddap_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#edityear1contractform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear1contractform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear1contractform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear1contractform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear1contractform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear1contractform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear1contractform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear1contractform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear1contractform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear1contractform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear1contractform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear1contractform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear1contractform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear1contractform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear1contractform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear1contractform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear1contractform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear1contractform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear1contractform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear1contractform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear1contractform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear1contractform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear1contractform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear1contractform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear1contractform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear1contractform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear1contractform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear1contractform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear1contractform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear1contractform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear1contractform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear1contractform').find('input[name=date_lddap_year2_4th]').val(),


            //year3 1st release

            survivalrate_year3_1st: $('#edityear1contractform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear1contractform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear1contractform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear1contractform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear1contractform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear1contractform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear1contractform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear1contractform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear1contractform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear1contractform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear1contractform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear1contractform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear1contractform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear1contractform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear1contractform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear1contractform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear1contractform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear1contractform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear1contractform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear1contractform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear1contractform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear1contractform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear1contractform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear1contractform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear1contractform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear1contractform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear1contractform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear1contractform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear1contractform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear1contractform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear1contractform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear1contractform').find('input[name=date_lddap_year3_4th]').val(),







        };


        var id = $('#edityear1contractform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear1contractModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success("Contract Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });







    //GET DATA ONLY FOR YEAR2 FOR CONTRACT IN MODAL (Edit ONLY YEAR 2)

    $("#contracttables").on('click', '.edityear2contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear2contractModal").modal('show');
                //contractor
                $('#edityear2contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear2contractform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear2contractform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear2contractform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear2contractform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear2contractform').find('input[name="name"]').val(data.name);
                $('#edityear2contractform').find('input[name="userName"]').val(data.userName);
                $('#edityear2contractform').find('input[name="userId"]').val(data.userId);
                $('#edityear2contractform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear2contractform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear2contractform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear2contractform').find('input[name="area"]').val(data.area);
                $('#edityear2contractform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear2contractform').find('input[name="penro"]').val(data.penro);
                $('#edityear2contractform').find('input[select="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear2contractform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear2contractform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear2contractform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear2contractform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear2contractform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear2contractform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear2contractform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear2contractform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear2contractform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear2contractform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear2contractform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear2contractform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear2contractform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear2contractform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear2contractform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear2contractform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear2contractform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear2contractform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear2contractform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear2contractform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear2contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear2contractform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear2contractform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear2contractform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear2contractform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear2contractform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear2contractform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear2contractform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear2contractform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear2contractform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear2contractform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear2contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear2contractform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear2contractform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear2contractform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear2contractform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear2contractform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear2contractform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear2contractform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear2contractform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear2contractform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear2contractform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear2contractform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear2contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear2contractform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear2contractform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear2contractform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear2contractform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear2contractform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear2contractform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear2contractform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear2contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear2contractform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear2contractform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear2contractform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear2contractform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear2contractform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear2contractform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear2contractform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear2contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear2contractform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear2contractform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear2contractform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear2contractform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear2contractform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear2contractform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear2contractform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear2contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear2contractform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear2contractform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear2contractform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear2contractform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear2contractform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear2contractform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear2contractform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear2contractform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#edityear2contractform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#edityear2contractform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#edityear2contractform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#edityear2contractform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear2contractform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear2contractform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear2contractform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear2contractform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear2contractform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear2contractform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear2contractform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear2contractform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear2contractform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear2contractform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear2contractform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear2contractform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear2contractform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear2contractform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear2contractform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 3 2nd release
                $('#edityear2contractform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear2contractform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear2contractform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear2contractform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear2contractform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear2contractform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear2contractform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear2contractform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear2contractform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear2contractform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear2contractform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear2contractform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear2contractform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear2contractform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear2contractform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear2contractform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);



                /*  for payments year 3 1st release*/

                $('#edityear2contractform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear2contractform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear2contractform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear2contractform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear2contractform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear2contractform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear2contractform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear2contractform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear2contractform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear2contractform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear2contractform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear2contractform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear2contractform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear2contractform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear2contractform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear2contractform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear2contractform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear2contractform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear2contractform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear2contractform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear2contractform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear2contractform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear2contractform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear2contractform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear2contractform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear2contractform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear2contractform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear2contractform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear2contractform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear2contractform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear2contractform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear2contractform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);



            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })



    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 1 ONLY)
    $("#UpdateYear2Contract").click(function (e) {
        e.preventDefault();
        var data = {

            //contractor
            contractorID: $('#edityear2contractform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear2contractform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear2contractform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear2contractform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear2contractform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear2contractform').find('input[name=roleId]').val(),
            userId: $('#edityear2contractform').find('input[name=userId]').val(),
            userName: $('#edityear2contractform').find('input[name=userName]').val(),
            name: $('#edityear2contractform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear2contractform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear2contractform').find('input[name=location_barangay]').val(),
            area: $('#edityear2contractform').find('input[name=area]').val(),
            year_form: $('#edityear2contractform').find('input[name=year_form]').val(),
            penro: $('#edityear2contractform').find('input[name=penro]').val(),
            cenro: $('#edityear2contractform').find('input[name=cenro]').val(),
            region: $('#edityear2contractform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear2contractform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear2contractform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear2contractform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear2contractform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear2contractform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear2contractform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear2contractform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear2contractform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear2contractform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear2contractform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear2contractform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear2contractform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear2contractform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear2contractform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear2contractform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear2contractform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear2contractform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear2contractform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear2contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear2contractform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear2contractform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear2contractform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear2contractform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear2contractform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear2contractform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear2contractform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear2contractform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear2contractform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear2contractform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear2contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear2contractform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear2contractform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear2contractform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear2contractform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear2contractform').find('input[name=moanumber_year3]').val(),
            lddap_no_year1_1st: $('#edityear2contractform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear2contractform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear2contractform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear2contractform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear2contractform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear2contractform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear2contractform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear2contractform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear2contractform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear2contractform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear2contractform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear2contractform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear2contractform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear2contractform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear2contractform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear2contractform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear2contractform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear2contractform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear2contractform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear2contractform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear2contractform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear2contractform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear2contractform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear2contractform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear2contractform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear2contractform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear2contractform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear2contractform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear2contractform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear2contractform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear2contractform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear2contractform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear2contractform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear2contractform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear2contractform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear2contractform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear2contractform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear2contractform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear2contractform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#edityear2contractform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#edityear2contractform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#edityear2contractform').find('input[name=date_lddap_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#edityear2contractform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear2contractform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear2contractform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear2contractform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear2contractform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear2contractform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear2contractform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear2contractform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear2contractform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear2contractform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear2contractform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear2contractform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear2contractform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear2contractform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear2contractform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear2contractform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear2contractform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear2contractform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear2contractform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear2contractform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear2contractform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear2contractform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear2contractform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear2contractform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear2contractform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear2contractform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear2contractform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear2contractform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear2contractform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear2contractform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear2contractform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear2contractform').find('input[name=date_lddap_year2_4th]').val(),


                //year3 1st release

            survivalrate_year3_1st: $('#edityear2contractform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear2contractform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear2contractform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear2contractform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear2contractform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear2contractform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear2contractform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear2contractform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear2contractform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear2contractform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear2contractform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear2contractform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear2contractform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear2contractform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear2contractform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear2contractform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear2contractform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear2contractform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear2contractform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear2contractform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear2contractform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear2contractform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear2contractform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear2contractform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear2contractform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear2contractform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear2contractform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear2contractform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear2contractform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear2contractform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear2contractform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear2contractform').find('input[name=date_lddap_year3_4th]').val(),









        };


        var id = $('#edityear2contractform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear2contractModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success("Contract Year2 Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });





    //GET DATA ONLY FOR YEAR3 FOR CONTRACT IN MODAL (Edit ONLY YEAR 3)

    $("#contracttables").on('click', '.edityear3contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#edityear3contractModal").modal('show');
                //contractor
                $('#edityear3contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#edityear3contractform').find('input[name="contractor_name"]').val(data.contractor_name);
                $('#edityear3contractform').find('input[name="address_municipality"]').val(data.address_municipality);
                $('#edityear3contractform').find('input[name="address_barangay"]').val(data.address_barangay);
                $('#edityear3contractform').find('input[name="contractor_type"]').val(data.contractor_type);
                $('#edityear3contractform').find('input[name="name"]').val(data.name);
                $('#edityear3contractform').find('input[name="userName"]').val(data.userName);
                $('#edityear3contractform').find('input[name="userId"]').val(data.userId);
                $('#edityear3contractform').find('input[name="roleId"]').val(data.roleId);

                //project
                $('#edityear3contractform').find('input[name="location_municipality"]').val(data.location_municipality);
                $('#edityear3contractform').find('input[name="location_barangay"]').val(data.location_barangay);
                $('#edityear3contractform').find('input[name="area"]').val(data.area);
                $('#edityear3contractform').find('input[name="year_form"]').val(data.year_form);
                $('#edityear3contractform').find('input[name="penro"]').val(data.penro);
                $('#edityear3contractform').find('input[select="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear3contractform').find('input[name="cenro"]').val(data.cenro);
                $('#edityear3contractform').find('input[name="region"]').val(data.region);

                //for contract year1

                $('#edityear3contractform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#edityear3contractform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#edityear3contractform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#edityear3contractform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#edityear3contractform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#edityear3contractform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#edityear3contractform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#edityear3contractform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#edityear3contractform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#edityear3contractform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#edityear3contractform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#edityear3contractform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);
                $('#edityear3contractform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1)
                //for contract year 2
                $('#edityear3contractform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#edityear3contractform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#edityear3contractform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#edityear3contractform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#edityear3contractform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#edityear3contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear3contractform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#edityear3contractform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#edityear3contractform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#edityear3contractform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);




                //for contract year 3
                $('#edityear3contractform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#edityear3contractform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#edityear3contractform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#edityear3contractform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#edityear3contractform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#edityear3contractform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#edityear3contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#edityear3contractform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#edityear3contractform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#edityear3contractform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#edityear3contractform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);


                //for payments year 1 1st release
                $('#edityear3contractform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#edityear3contractform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#edityear3contractform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#edityear3contractform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#edityear3contractform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#edityear3contractform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#edityear3contractform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#edityear3contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear3contractform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#edityear3contractform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#edityear3contractform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#edityear3contractform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#edityear3contractform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#edityear3contractform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#edityear3contractform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#edityear3contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear3contractform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#edityear3contractform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#edityear3contractform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#edityear3contractform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#edityear3contractform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#edityear3contractform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#edityear3contractform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#edityear3contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear3contractform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#edityear3contractform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#edityear3contractform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#edityear3contractform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#edityear3contractform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#edityear3contractform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#edityear3contractform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#edityear3contractform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#edityear3contractform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#edityear3contractform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#edityear3contractform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#edityear3contractform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#edityear3contractform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#edityear3contractform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#edityear3contractform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#edityear3contractform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#edityear3contractform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#edityear3contractform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#edityear3contractform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);





                //for payments year 2 1st release
                $('#edityear3contractform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#edityear3contractform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#edityear3contractform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#edityear3contractform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#edityear3contractform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#edityear3contractform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#edityear3contractform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#edityear3contractform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#edityear3contractform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#edityear3contractform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#edityear3contractform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#edityear3contractform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#edityear3contractform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#edityear3contractform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#edityear3contractform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#edityear3contractform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 2 2nd release
                $('#edityear3contractform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#edityear3contractform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#edityear3contractform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#edityear3contractform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#edityear3contractform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#edityear3contractform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#edityear3contractform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#edityear3contractform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#edityear3contractform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#edityear3contractform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#edityear3contractform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#edityear3contractform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#edityear3contractform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#edityear3contractform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#edityear3contractform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#edityear3contractform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);


                /*  for payments year 3 1st release*/

                $('#edityear3contractform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#edityear3contractform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#edityear3contractform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#edityear3contractform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#edityear3contractform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#edityear3contractform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#edityear3contractform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#edityear3contractform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#edityear3contractform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#edityear3contractform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#edityear3contractform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#edityear3contractform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#edityear3contractform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#edityear3contractform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#edityear3contractform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#edityear3contractform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#edityear3contractform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#edityear3contractform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#edityear3contractform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#edityear3contractform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#edityear3contractform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#edityear3contractform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#edityear3contractform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#edityear3contractform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#edityear3contractform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#edityear3contractform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#edityear3contractform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#edityear3contractform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#edityear3contractform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#edityear3contractform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#edityear3contractform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#edityear3contractform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);




            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })



    //PUT DATA ONLY FOR EDIT CONTRACT GET METHOD  (YEAR 3 ONLY)
    $("#UpdateYear3Contract").click(function (e) {
        e.preventDefault();
        var data = {

            //contractor
            contractorID: $('#edityear3contractform').find('input[name=contractorID]').val(),
            contractor_name: $('#edityear3contractform').find('input[name=contractor_name]').val(),
            address_municipality: $('#edityear3contractform').find('input[name=address_municipality]').val(),
            address_barangay: $('#edityear3contractform').find('input[name=address_barangay]').val(),
            contractor_type: $('#edityear3contractform').find('input[name=contractor_type]').val(),


            roleId: $('#edityear3contractform').find('input[name=roleId]').val(),
            userId: $('#edityear3contractform').find('input[name=userId]').val(),
            userName: $('#edityear3contractform').find('input[name=userName]').val(),
            name: $('#edityear3contractform').find('input[name=name]').val(),




            //project
            location_municipality: $('#edityear3contractform').find('input[name=location_municipality]').val(),
            location_barangay: $('#edityear3contractform').find('input[name=location_barangay]').val(),
            area: $('#edityear3contractform').find('input[name=area]').val(),
            year_form: $('#edityear3contractform').find('input[name=year_form]').val(),
            penro: $('#edityear3contractform').find('input[name=penro]').val(),
            cenro: $('#edityear3contractform').find('input[name=cenro]').val(),
            region: $('#edityear3contractform').find('input[name=region]').val(),



            //for contract year 1

            moanumber_year1: $('#edityear3contractform').find('input[name=moanumber_year1]').val(),
            datemoasigned_year1: $('#edityear3contractform').find('input[name=datemoasigned_year1]').val(),
            contractcost_year1: $('#edityear3contractform').find('input[name=contractcost_year1]').val(),
            dateobligated_year1: $('#edityear3contractform').find('input[name=dateobligated_year1]').val(),
            orsno_year1: $('#edityear3contractform').find('input[name=orsno_year1]').val(),
            num_seedlings_produced_year1: $('#edityear3contractform').find('input[name=num_seedlings_produced_year1]').val(),
            forest_trees_year1: $('#edityear3contractform').find('input[name=forest_trees_year1]').val(),
            fruit_trees_year1: $('#edityear3contractform').find('input[name=fruit_trees_year1]').val(),
            bamboo_year1: $('#edityear3contractform').find('input[name=bamboo_year1]').val(),
            mangrove_year1: $('#edityear3contractform').find('input[name=mangrove_year1]').val(),
            num_seedlings_planted_year1: $('#edityear3contractform').find('input[name=num_seedlings_planted_year1]').val(),
            survivalrate_year1: $('#edityear3contractform').find('input[name=survivalrate_year1]').val(),

            num_seedlings_survive_year1: $('#edityear3contractform').find('input[name=num_seedlings_survive_year1]').val(),


            //for contract year 2
            moanumber_year2: $('#edityear3contractform').find('input[name=moanumber_year2]').val(),
            datemoasigned_year2: $('#edityear3contractform').find('input[name=datemoasigned_year2]').val(),
            unitcost_year2: $('#edityear3contractform').find('input[name=unitcost_year2]').val(),
            contractcost_year2: $('#edityear3contractform').find('input[name=contractcost_year2]').val(),
            dateobligated_year2: $('#edityear3contractform').find('input[name=dateobligated_year2]').val(),
            orsno_year2: $('#edityear3contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year2: $('#edityear3contractform').find('input[name=num_seedlings_planted_year2]').val(),
            num_seedlings_survive_endofyear_1_year2: $('#edityear3contractform').find('input[name=num_seedlings_survive_endofyear_1_year2]').val(),
            survivalrate_year2: $('#edityear3contractform').find('input[name=survivalrate_year2]').val(),
            num_seedlings_replanted_year2: $('#edityear3contractform').find('input[name=num_seedlings_replanted_year2]').val(),



            //for contract year 3
            orsno_year3: $('#edityear3contractform').find('input[name=orsno_year3]').val(),
            moanumber_year3: $('#edityear3contractform').find('input[name=moanumber_year3]').val(),
            datemoasigned_year3: $('#edityear3contractform').find('input[name=datemoasigned_year3]').val(),
            unitcost_year3: $('#edityear3contractform').find('input[name=unitcost_year3]').val(),
            contractcost_year3: $('#edityear3contractform').find('input[name=contractcost_year3]').val(),
            dateobligated_year3: $('#edityear3contractform').find('input[name=dateobligated_year3]').val(),
            orsno_year2: $('#edityear3contractform').find('input[name=orsno_year2]').val(),
            num_seedlings_planted_year3: $('#edityear3contractform').find('input[name=num_seedlings_planted_year3]').val(),
            num_seedlings_survive_endofyear_1_year3: $('#edityear3contractform').find('input[name=num_seedlings_survive_endofyear_1_year3]').val(),
            survivalrate_year3: $('#edityear3contractform').find('input[name=survivalrate_year3]').val(),
            num_seedlings_replanted_year3: $('#edityear3contractform').find('input[name=num_seedlings_replanted_year3]').val(),


            //for payments

            //year1 1st release
            grossammount_year1_1st: $('#edityear3contractform').find('input[name=grossammount_year1_1st]').val(),
            lddap_no_year1_1st: $('#edityear3contractform').find('input[name=lddap_no_year1_1st]').val(),
            date_lddap_year1_1st: $('#edityear3contractform').find('input[name=date_lddap_year1_1st]').val(),


            //year1 2nd release
            grossammount_year1_2nd: $('#edityear3contractform').find('input[name=grossammount_year1_2nd]').val(),
            retentionfee_year1_2nd: $('#edityear3contractform').find('input[name=retentionfee_year1_2nd]').val(),
            mobilization_fund_year1_2nd: $('#edityear3contractform').find('input[name=mobilization_fund_year1_2nd]').val(),
            amountless_rf_mf_year1_2nd: $('#edityear3contractform').find('input[name=amountless_rf_mf_year1_2nd]').val(),
            bir_year1_2nd: $('#edityear3contractform').find('input[name=bir_year1_2nd]').val(),
            netammountpaid_year1_2nd: $('#edityear3contractform').find('input[name=netammountpaid_year1_2nd]').val(),
            lddapno_year1_2nd: $('#edityear3contractform').find('input[name=lddapno_year1_2nd]').val(),
            date_lddap_year1_2nd: $('#edityear3contractform').find('input[name=date_lddap_year1_2nd]').val(),



            //year1 3rd release
            grossammount_year1_3rd: $('#edityear3contractform').find('input[name=grossammount_year1_3rd]').val(),
            retentionfee_year1_3rd: $('#edityear3contractform').find('input[name=retentionfee_year1_3rd]').val(),
            mobilization_fund_year1_3rd: $('#edityear3contractform').find('input[name=mobilization_fund_year1_3rd]').val(),
            amountless_rf_mf_year1_3rd: $('#edityear3contractform').find('input[name=amountless_rf_mf_year1_3rd]').val(),
            bir_year1_3rd: $('#edityear3contractform').find('input[name=bir_year1_3rd]').val(),
            netammountpaid_year1_3rd: $('#edityear3contractform').find('input[name=netammountpaid_year1_3rd]').val(),
            lddapno_year1_3rd: $('#edityear3contractform').find('input[name=lddapno_year1_3rd]').val(),
            date_lddap_year1_3rd: $('#edityear3contractform').find('input[name=date_lddap_year1_3rd]').val(),


            //year1 4th release
            grossammount_year1_4th: $('#edityear3contractform').find('input[name=grossammount_year1_4th]').val(),
            retentionfee_year1_4th: $('#edityear3contractform').find('input[name=retentionfee_year1_4th]').val(),
            mobilization_fund_year1_4th: $('#edityear3contractform').find('input[name=mobilization_fund_year1_4th]').val(),
            amountless_rf_mf_year1_4th: $('#edityear3contractform').find('input[name=amountless_rf_mf_year1_4th]').val(),
            bir_year1_4th: $('#edityear3contractform').find('input[name=bir_year1_4th]').val(),
            netammountpaid_year1_4th: $('#edityear3contractform').find('input[name=netammountpaid_year1_4th]').val(),
            lddapno_year1_4th: $('#edityear3contractform').find('input[name=lddapno_year1_4th]').val(),
            date_lddap_year1_4th: $('#edityear3contractform').find('input[name=date_lddap_year1_4th]').val(),



            //year1 5th release
            grossammount_year1_5th: $('#edityear3contractform').find('input[name=grossammount_year1_5th]').val(),
            retentionfee_year1_5th: $('#edityear3contractform').find('input[name=retentionfee_year1_5th]').val(),
            mobilization_fund_year1_5th: $('#edityear3contractform').find('input[name=mobilization_fund_year1_5th]').val(),
            amountless_rf_mf_year1_5th: $('#edityear3contractform').find('input[name=amountless_rf_mf_year1_5th]').val(),
            bir_year1_5th: $('#edityear3contractform').find('input[name=bir_year1_5th]').val(),
            netammountpaid_year1_5th: $('#edityear3contractform').find('input[name=netammountpaid_year1_5th]').val(),
            lddapno_year1_5th: $('#edityear3contractform').find('input[name=lddapno_year1_5th]').val(),
            date_lddap_year1_5th: $('#edityear3contractform').find('input[name=date_lddap_year1_5th]').val(),




            //year1 6th release
            grossammount_year1_6th: $('#edityear3contractform').find('input[name=grossammount_year1_6th]').val(),
            retentionfee_year1_6th: $('#edityear3contractform').find('input[name=retentionfee_year1_6th]').val(),
            mobilization_fund_year1_6th: $('#edityear3contractform').find('input[name=mobilization_fund_year1_6th]').val(),
            amountless_rf_mf_year1_6th: $('#edityear3contractform').find('input[name=amountless_rf_mf_year1_6th]').val(),
            bir_year1_6th: $('#edityear3contractform').find('input[name=bir_year1_6th]').val(),
            netammountpaid_year1_6th: $('#edityear3contractform').find('input[name=netammountpaid_year1_6th]').val(),
            lddapno_year1_6th: $('#edityear3contractform').find('input[name=lddapno_year1_6th]').val(),
            date_lddap_year1_6th: $('#edityear3contractform').find('input[name=date_lddap_year1_6th]').val(),






            //year2 1st release

            survivalrate_year2_1st: $('#edityear3contractform').find('input[name=survivalrate_year2_1st]').val(),
            grossammount_year2_1st: $('#edityear3contractform').find('input[name=grossammount_year2_1st]').val(),
            retentionfee_year2_1st: $('#edityear3contractform').find('input[name=retentionfee_year2_1st]').val(),
            amountless_rf_year2_1st: $('#edityear3contractform').find('input[name=amountless_rf_year2_1st]').val(),
            bir_year2_1st: $('#edityear3contractform').find('input[name=bir_year2_1st]').val(),
            netamount_paid_year2_1st: $('#edityear3contractform').find('input[name=netamount_paid_year2_1st]').val(),
            lddapno_year2_1st: $('#edityear3contractform').find('input[name=lddapno_year2_1st]').val(),
            date_lddap_year2_1st: $('#edityear3contractform').find('input[name=date_lddap_year2_1st]').val(),


            //year2 2nd release

            survivalrate_year2_2nd: $('#edityear3contractform').find('input[name=survivalrate_year2_2nd]').val(),
            grossammount_year2_2nd: $('#edityear3contractform').find('input[name=grossammount_year2_2nd]').val(),
            retentionfee_year2_2nd: $('#edityear3contractform').find('input[name=retentionfee_year2_2nd]').val(),
            amountless_rf_year2_2nd: $('#edityear3contractform').find('input[name=amountless_rf_year2_2nd]').val(),
            bir_year2_2nd: $('#edityear3contractform').find('input[name=bir_year2_2nd]').val(),
            netamount_paid_year2_2nd: $('#edityear3contractform').find('input[name=netamount_paid_year2_2nd]').val(),
            lddapno_year2_2nd: $('#edityear3contractform').find('input[name=lddapno_year2_2nd]').val(),
            date_lddap_year2_2nd: $('#edityear3contractform').find('input[name=date_lddap_year2_2nd]').val(),


            //year2 3rd release

            survivalrate_year2_3rd: $('#edityear3contractform').find('input[name=survivalrate_year2_3rd]').val(),
            grossammount_year2_3rd: $('#edityear3contractform').find('input[name=grossammount_year2_3rd]').val(),
            retentionfee_year2_3rd: $('#edityear3contractform').find('input[name=retentionfee_year2_3rd]').val(),
            amountless_rf_year2_3rd: $('#edityear3contractform').find('input[name=amountless_rf_year2_3rd]').val(),
            bir_year2_3rd: $('#edityear3contractform').find('input[name=bir_year2_3rd]').val(),
            netamount_paid_year2_3rd: $('#edityear3contractform').find('input[name=netamount_paid_year2_3rd]').val(),
            lddapno_year2_3rd: $('#edityear3contractform').find('input[name=lddapno_year2_3rd]').val(),
            date_lddap_year2_3rd: $('#edityear3contractform').find('input[name=date_lddap_year2_3rd]').val(),


            //year2 4th release

            survivalrate_year2_4th: $('#edityear3contractform').find('input[name=survivalrate_year2_4th]').val(),
            grossammount_year2_4th: $('#edityear3contractform').find('input[name=grossammount_year2_4th]').val(),
            retentionfee_year2_4th: $('#edityear3contractform').find('input[name=retentionfee_year2_4th]').val(),
            amountless_rf_year2_4th: $('#edityear3contractform').find('input[name=amountless_rf_year2_4th]').val(),
            bir_year2_4th: $('#edityear3contractform').find('input[name=bir_year2_4th]').val(),
            netamount_paid_year2_4th: $('#edityear3contractform').find('input[name=netamount_paid_year2_4th]').val(),
            lddapno_year2_4th: $('#edityear3contractform').find('input[name=lddapno_year2_4th]').val(),
            date_lddap_year2_4th: $('#edityear3contractform').find('input[name=date_lddap_year2_4th]').val(),


            //year3 1st release

            survivalrate_year3_1st: $('#edityear3contractform').find('input[name=survivalrate_year3_1st]').val(),
            grossammount_year3_1st: $('#edityear3contractform').find('input[name=grossammount_year3_1st]').val(),
            retentionfee_year3_1st: $('#edityear3contractform').find('input[name=retentionfee_year3_1st]').val(),
            amountless_rf_year3_1st: $('#edityear3contractform').find('input[name=amountless_rf_year3_1st]').val(),
            bir_year3_1st: $('#edityear3contractform').find('input[name=bir_year3_1st]').val(),
            netamount_paid_year3_1st: $('#edityear3contractform').find('input[name=netamount_paid_year3_1st]').val(),
            lddapno_year3_1st: $('#edityear3contractform').find('input[name=lddapno_year3_1st]').val(),
            date_lddap_year3_1st: $('#edityear3contractform').find('input[name=date_lddap_year3_1st]').val(),


            //year3 2nd release

            survivalrate_year3_2nd: $('#edityear3contractform').find('input[name=survivalrate_year3_2nd]').val(),
            grossammount_year3_2nd: $('#edityear3contractform').find('input[name=grossammount_year3_2nd]').val(),
            retentionfee_year3_2nd: $('#edityear3contractform').find('input[name=retentionfee_year3_2nd]').val(),
            amountless_rf_year3_2nd: $('#edityear3contractform').find('input[name=amountless_rf_year3_2nd]').val(),
            bir_year3_2nd: $('#edityear3contractform').find('input[name=bir_year3_2nd]').val(),
            netamount_paid_year3_2nd: $('#edityear3contractform').find('input[name=netamount_paid_year3_2nd]').val(),
            lddapno_year3_2nd: $('#edityear3contractform').find('input[name=lddapno_year3_2nd]').val(),
            date_lddap_year3_2nd: $('#edityear3contractform').find('input[name=date_lddap_year3_2nd]').val(),


            //year3 3rd release

            survivalrate_year3_3rd: $('#edityear3contractform').find('input[name=survivalrate_year3_3rd]').val(),
            grossammount_year3_3rd: $('#edityear3contractform').find('input[name=grossammount_year3_3rd]').val(),
            retentionfee_year3_3rd: $('#edityear3contractform').find('input[name=retentionfee_year3_3rd]').val(),
            amountless_rf_year3_3rd: $('#edityear3contractform').find('input[name=amountless_rf_year3_3rd]').val(),
            bir_year3_3rd: $('#edityear3contractform').find('input[name=bir_year3_3rd]').val(),
            netamount_paid_year3_3rd: $('#edityear3contractform').find('input[name=netamount_paid_year3_3rd]').val(),
            lddapno_year3_3rd: $('#edityear3contractform').find('input[name=lddapno_year3_3rd]').val(),
            date_lddap_year3_3rd: $('#edityear3contractform').find('input[name=date_lddap_year3_3rd]').val(),


            //year3 4th release

            survivalrate_year3_4th: $('#edityear3contractform').find('input[name=survivalrate_year3_4th]').val(),
            grossammount_year3_4th: $('#edityear3contractform').find('input[name=grossammount_year3_4th]').val(),
            retentionfee_year3_4th: $('#edityear3contractform').find('input[name=retentionfee_year3_4th]').val(),
            amountless_rf_year3_4th: $('#edityear3contractform').find('input[name=amountless_rf_year3_4th]').val(),
            bir_year3_4th: $('#edityear3contractform').find('input[name=bir_year3_4th]').val(),
            netamount_paid_year3_4th: $('#edityear3contractform').find('input[name=netamount_paid_year3_4th]').val(),
            lddapno_year3_4th: $('#edityear3contractform').find('input[name=lddapno_year3_4th]').val(),
            date_lddap_year3_4th: $('#edityear3contractform').find('input[name=date_lddap_year3_4th]').val(),






        };


        var id = $('#edityear3contractform').find('input[name="contractorID"]').val();
        $.ajax({
            type: 'PUT',
            url: '/api/contractorput/updatecontractor/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {


                $('#edityear3contractModal').modal('hide');
                //show please wait modal
                /*  $('#pleasewait').modal('show');*/
                //show toastr after 3
                setTimeout(function () {
                    toastr.success("Contract Year3 Successfully Updated!");
                    // hide please wait modal
                }, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            },
            //if failed
            error: function (data) {
                toastr.error("Error Saving")
            }
        });
    });


























    //GET DATA ONLY FOR YEAR1 FOR CONTRACT IN MODAL (READ ONLY)

    $("#contracttables").on('click', '.getdatayear1contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year1contractModal").modal('show');
                $('#showdatayear1contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#showdatayear1contractform').find('input[name="moanumber_year1"]').val(data.moanumber_year1);
                $('#showdatayear1contractform').find('input[name="datemoasigned_year1"]').val(data.datemoasigned_year1);
                $('#showdatayear1contractform').find('input[name="contractcost_year1"]').val(data.contractcost_year1);
                $('#showdatayear1contractform').find('input[name="dateobligated_year1"]').val(data.dateobligated_year1);
                $('#showdatayear1contractform').find('input[name="orsno_year1"]').val(data.orsno_year1);
                $('#showdatayear1contractform').find('input[name="num_seedlings_produced_year1"]').val(data.num_seedlings_produced_year1);
                $('#showdatayear1contractform').find('input[name="num_seedlings_survive_year1"]').val(data.num_seedlings_survive_year1);
                $('#showdatayear1contractform').find('input[name="forest_trees_year1"]').val(data.forest_trees_year1);
                $('#showdatayear1contractform').find('input[name="fruit_trees_year1"]').val(data.fruit_trees_year1);
                $('#showdatayear1contractform').find('input[name="bamboo_year1"]').val(data.bamboo_year1);
                $('#showdatayear1contractform').find('input[name="mangrove_year1"]').val(data.mangrove_year1);
                $('#showdatayear1contractform').find('input[name="num_seedlings_planted_year1"]').val(data.num_seedlings_planted_year1);
                $('#showdatayear1contractform').find('input[name="survivalrate_year1"]').val(data.survivalrate_year1);



            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })

    //GET DATA ONLY FOR YEAR2 FOR CONTRACT IN MODAL (READ ONLY)

    $("#contracttables").on('click', '.getdatayear2contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year2contractModal").modal('show');
                $('#showdatayear2contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#showdatayear2contractform').find('input[name="moanumber_year2"]').val(data.moanumber_year2);
                $('#showdatayear2contractform').find('input[name="datemoasigned_year2"]').val(data.datemoasigned_year2);
                $('#showdatayear2contractform').find('input[name="unitcost_year2"]').val(data.unitcost_year2);
                $('#showdatayear2contractform').find('input[name="contractcost_year2"]').val(data.contractcost_year2);
                $('#showdatayear2contractform').find('input[name="dateobligated_year2"]').val(data.dateobligated_year2);
                $('#showdatayear2contractform').find('input[name="orsno_year2"]').val(data.orsno_year2);
                $('#showdatayear2contractform').find('input[name="num_seedlings_planted_year2"]').val(data.num_seedlings_planted_year2);
                $('#showdatayear2contractform').find('input[name="num_seedlings_survive_endofyear_1_year2"]').val(data.num_seedlings_survive_endofyear_1_year2);
                $('#showdatayear2contractform').find('input[name="survivalrate_year2"]').val(data.survivalrate_year2);
                $('#showdatayear2contractform').find('input[name="num_seedlings_replanted_year2"]').val(data.num_seedlings_replanted_year2);





            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })



    //GET DATA ONLY FOR YEAR3 FOR CONTRACT IN MODAL (READ ONLY)

    $("#contracttables").on('click', '.getdatayear3contract', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year3contractModal").modal('show');
                $('#showdatayear3contractform').find('input[name="contractorID"]').val(data.contractorID);
                $('#showdatayear3contractform').find('input[name="moanumber_year3"]').val(data.moanumber_year3);
                $('#showdatayear3contractform').find('input[name="datemoasigned_year3"]').val(data.datemoasigned_year3);
                $('#showdatayear3contractform').find('input[name="unitcost_year3"]').val(data.unitcost_year3);
                $('#showdatayear3contractform').find('input[name="contractcost_year3"]').val(data.contractcost_year3);
                $('#showdatayear3contractform').find('input[name="dateobligated_year3"]').val(data.dateobligated_year3);
                $('#showdatayear3contractform').find('input[name="orsno_year3"]').val(data.orsno_year3);
                $('#showdatayear3contractform').find('input[name="num_seedlings_planted_year3"]').val(data.num_seedlings_planted_year3);
                $('#showdatayear3contractform').find('input[name="num_seedlings_survive_endofyear_1_year3"]').val(data.num_seedlings_survive_endofyear_1_year3);
                $('#showdatayear3contractform').find('input[name="survivalrate_year3"]').val(data.survivalrate_year3);
                $('#showdatayear3contractform').find('input[name="num_seedlings_replanted_year3"]').val(data.num_seedlings_replanted_year3);







            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })






    //GET DATA ONLY FOR YEAR1 FOR PAYMENTS IN MODAL (READ ONLY)

    $("#paymentables").on('click', '.getdatayear1payment', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year1paymentModal").modal('show');
                $('#showdatayear1paymentform').find('input[name="contractorID"]').val(data.contractorID);

                //for payments year 1 1st release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_1st"]').val(data.grossammount_year1_1st);
                $('#showdatayear1paymentform').find('input[name="lddap_no_year1_1st"]').val(data.lddap_no_year1_1st);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_1st"]').val(data.date_lddap_year1_1st);



                //for payments year 1 2nd release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_2nd"]').val(data.grossammount_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="retentionfee_year1_2nd"]').val(data.retentionfee_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="mobilization_fund_year1_2nd"]').val(data.mobilization_fund_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="amountless_rf_mf_year1_2nd"]').val(data.amountless_rf_mf_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="bir_year1_2nd"]').val(data.bir_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="netammountpaid_year1_2nd"]').val(data.netammountpaid_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="lddapno_year1_2nd"]').val(data.lddapno_year1_2nd);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_2nd"]').val(data.date_lddap_year1_2nd);



                //for payments year 1 3rd release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_3rd"]').val(data.grossammount_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="retentionfee_year1_3rd"]').val(data.retentionfee_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="mobilization_fund_year1_3rd"]').val(data.mobilization_fund_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="amountless_rf_mf_year1_3rd"]').val(data.amountless_rf_mf_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="bir_year1_3rd"]').val(data.bir_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="netammountpaid_year1_3rd"]').val(data.netammountpaid_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="lddapno_year1_3rd"]').val(data.lddapno_year1_3rd);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_3rd"]').val(data.date_lddap_year1_3rd);


                //for payments year 1 4th release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_4th"]').val(data.grossammount_year1_4th);
                $('#showdatayear1paymentform').find('input[name="retentionfee_year1_4th"]').val(data.retentionfee_year1_4th);
                $('#showdatayear1paymentform').find('input[name="mobilization_fund_year1_4th"]').val(data.mobilization_fund_year1_4th);
                $('#showdatayear1paymentform').find('input[name="amountless_rf_mf_year1_4th"]').val(data.amountless_rf_mf_year1_4th);
                $('#showdatayear1paymentform').find('input[name="bir_year1_4th"]').val(data.bir_year1_4th);
                $('#showdatayear1paymentform').find('input[name="netammountpaid_year1_4th"]').val(data.netammountpaid_year1_4th);
                $('#showdatayear1paymentform').find('input[name="lddapno_year1_4th"]').val(data.lddapno_year1_4th);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_4th"]').val(data.date_lddap_year1_4th);


                //for payments year 1 5th release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_5th"]').val(data.grossammount_year1_5th);
                $('#showdatayear1paymentform').find('input[name="retentionfee_year1_5th"]').val(data.retentionfee_year1_5th);
                $('#showdatayear1paymentform').find('input[name="mobilization_fund_year1_5th"]').val(data.mobilization_fund_year1_5th);
                $('#showdatayear1paymentform').find('input[name="amountless_rf_mf_year1_5th"]').val(data.amountless_rf_mf_year1_5th);
                $('#showdatayear1paymentform').find('input[name="bir_year1_5th"]').val(data.bir_year1_5th);
                $('#showdatayear1paymentform').find('input[name="netammountpaid_year1_5th"]').val(data.netammountpaid_year1_5th);
                $('#showdatayear1paymentform').find('input[name="lddapno_year1_5th"]').val(data.lddapno_year1_5th);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_5th"]').val(data.date_lddap_year1_5th);




                //for payments year 1 6th release
                $('#showdatayear1paymentform').find('input[name="grossammount_year1_6th"]').val(data.grossammount_year1_6th);
                $('#showdatayear1paymentform').find('input[name="retentionfee_year1_6th"]').val(data.retentionfee_year1_6th);
                $('#showdatayear1paymentform').find('input[name="mobilization_fund_year1_6th"]').val(data.mobilization_fund_year1_6th);
                $('#showdatayear1paymentform').find('input[name="amountless_rf_mf_year1_6th"]').val(data.amountless_rf_mf_year1_6th);
                $('#showdatayear1paymentform').find('input[name="bir_year1_6th"]').val(data.bir_year1_6th);
                $('#showdatayear1paymentform').find('input[name="netammountpaid_year1_6th"]').val(data.netammountpaid_year1_6th);
                $('#showdatayear1paymentform').find('input[name="lddapno_year1_6th"]').val(data.lddapno_year1_6th);
                $('#showdatayear1paymentform').find('input[name="date_lddap_year1_6th"]').val(data.date_lddap_year1_6th);







            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })





    //GET DATA ONLY FOR YEAR1 FOR PAYMENTS IN MODAL (READ ONLY)

    $("#paymentables").on('click', '.getdatayear2payment', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year2paymentModal").modal('show');
                $('#showdatayear2paymentform').find('input[name="contractorID"]').val(data.contractorID);
                //for payments year 2 1st release
                $('#showdatayear2paymentform').find('input[name="survivalrate_year2_1st"]').val(data.survivalrate_year2_1st);
                $('#showdatayear2paymentform').find('input[name="grossammount_year2_1st"]').val(data.grossammount_year2_1st);
                $('#showdatayear2paymentform').find('input[name="retentionfee_year2_1st"]').val(data.retentionfee_year2_1st);
                $('#showdatayear2paymentform').find('input[name="amountless_rf_year2_1st"]').val(data.amountless_rf_year2_1st);
                $('#showdatayear2paymentform').find('input[name="bir_year2_1st"]').val(data.bir_year2_1st);
                $('#showdatayear2paymentform').find('input[name="netamount_paid_year2_1st"]').val(data.netamount_paid_year2_1st);
                $('#showdatayear2paymentform').find('input[name="lddapno_year2_1st"]').val(data.lddapno_year2_1st);
                $('#showdatayear2paymentform').find('input[name="date_lddap_year2_1st"]').val(data.date_lddap_year2_1st);




                //for payments year 2 2nd release
                $('#showdatayear2paymentform').find('input[name="survivalrate_year2_2nd"]').val(data.survivalrate_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="grossammount_year2_2nd"]').val(data.grossammount_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="retentionfee_year2_2nd"]').val(data.retentionfee_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="amountless_rf_year2_2nd"]').val(data.amountless_rf_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="bir_year2_2nd"]').val(data.bir_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="netamount_paid_year2_2nd"]').val(data.netamount_paid_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="lddapno_year2_2nd"]').val(data.lddapno_year2_2nd);
                $('#showdatayear2paymentform').find('input[name="date_lddap_year2_2nd"]').val(data.date_lddap_year2_2nd);



                //for payments year 2 2nd release
                $('#showdatayear2paymentform').find('input[name="survivalrate_year2_3rd"]').val(data.survivalrate_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="grossammount_year2_3rd"]').val(data.grossammount_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="retentionfee_year2_3rd"]').val(data.retentionfee_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="amountless_rf_year2_3rd"]').val(data.amountless_rf_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="bir_year2_3rd"]').val(data.bir_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="netamount_paid_year2_3rd"]').val(data.netamount_paid_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="lddapno_year2_3rd"]').val(data.lddapno_year2_3rd);
                $('#showdatayear2paymentform').find('input[name="date_lddap_year2_3rd"]').val(data.date_lddap_year2_3rd);



                //for payments year 2 4th release
                $('#showdatayear2paymentform').find('input[name="survivalrate_year2_4th"]').val(data.survivalrate_year2_4th);
                $('#showdatayear2paymentform').find('input[name="grossammount_year2_4th"]').val(data.grossammount_year2_4th);
                $('#showdatayear2paymentform').find('input[name="retentionfee_year2_4th"]').val(data.retentionfee_year2_4th);
                $('#showdatayear2paymentform').find('input[name="amountless_rf_year2_4th"]').val(data.amountless_rf_year2_4th);
                $('#showdatayear2paymentform').find('input[name="bir_year2_4th"]').val(data.bir_year2_4th);
                $('#showdatayear2paymentform').find('input[name="netamount_paid_year2_4th"]').val(data.netamount_paid_year2_4th);
                $('#showdatayear2paymentform').find('input[name="lddapno_year2_4th"]').val(data.lddapno_year2_4th);
                $('#showdatayear2paymentform').find('input[name="date_lddap_year2_4th"]').val(data.date_lddap_year2_4th);





            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })





    //GET DATA ONLY FOR YEAR 3 FOR PAYMENTS IN MODAL (READ ONLY)

    $("#paymentables").on('click', '.getdatayear3payment', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractorget/get/' + id;
        //alert(id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#year3paymentModal").modal('show');
                $('#showdatayear3paymentform').find('input[name="contractorID"]').val(data.contractorID);

                /*  for payments year 3 1st release*/

                $('#showdatayear3paymentform').find('input[name="survivalrate_year3_1st"]').val(data.survivalrate_year3_1st);
                $('#showdatayear3paymentform').find('input[name="grossammount_year3_1st"]').val(data.grossammount_year3_1st);
                $('#showdatayear3paymentform').find('input[name="retentionfee_year3_1st"]').val(data.retentionfee_year3_1st);
                $('#showdatayear3paymentform').find('input[name="amountless_rf_year3_1st"]').val(data.amountless_rf_year3_1st);
                $('#showdatayear3paymentform').find('input[name="bir_year3_1st"]').val(data.bir_year3_1st);
                $('#showdatayear3paymentform').find('input[name="netamount_paid_year3_1st"]').val(data.netamount_paid_year3_1st);
                $('#showdatayear3paymentform').find('input[name="lddapno_year3_1st"]').val(data.lddapno_year3_1st);
                $('#showdatayear3paymentform').find('input[name="date_lddap_year3_1st"]').val(data.date_lddap_year3_1st);




                //for payments year 3 2nd release
                $('#showdatayear3paymentform').find('input[name="survivalrate_year3_2nd"]').val(data.survivalrate_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="grossammount_year3_2nd"]').val(data.grossammount_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="retentionfee_year3_2nd"]').val(data.retentionfee_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="amountless_rf_year3_2nd"]').val(data.amountless_rf_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="bir_year3_2nd"]').val(data.bir_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="netamount_paid_year3_2nd"]').val(data.netamount_paid_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="lddapno_year3_2nd"]').val(data.lddapno_year3_2nd);
                $('#showdatayear3paymentform').find('input[name="date_lddap_year3_2nd"]').val(data.date_lddap_year3_2nd);



                //for payments year 3 3rd release
                $('#showdatayear3paymentform').find('input[name="survivalrate_year3_3rd"]').val(data.survivalrate_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="grossammount_year3_3rd"]').val(data.grossammount_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="retentionfee_year3_3rd"]').val(data.retentionfee_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="amountless_rf_year3_3rd"]').val(data.amountless_rf_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="bir_year3_3rd"]').val(data.bir_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="netamount_paid_year3_3rd"]').val(data.netamount_paid_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="lddapno_year3_3rd"]').val(data.lddapno_year3_3rd);
                $('#showdatayear3paymentform').find('input[name="date_lddap_year3_3rd"]').val(data.date_lddap_year3_3rd);



                //for payments year 3 4th release
                $('#showdatayear3paymentform').find('input[name="survivalrate_year3_4th"]').val(data.survivalrate_year3_4th);
                $('#showdatayear3paymentform').find('input[name="grossammount_year3_4th"]').val(data.grossammount_year3_4th);
                $('#showdatayear3paymentform').find('input[name="retentionfee_year3_4th"]').val(data.retentionfee_year3_4th);
                $('#showdatayear3paymentform').find('input[name="amountless_rf_year3_4th"]').val(data.amountless_rf_year3_4th);
                $('#showdatayear3paymentform').find('input[name="bir_year3_4th"]').val(data.bir_year3_4th);
                $('#showdatayear3paymentform').find('input[name="netamount_paid_year3_4th"]').val(data.netamount_paid_year3_4th);
                $('#showdatayear3paymentform').find('input[name="lddapno_year3_4th"]').val(data.lddapno_year3_4th);
                $('#showdatayear3paymentform').find('input[name="date_lddap_year3_4th"]').val(data.date_lddap_year3_4th);





            },
            //if failed
            error: function (data) {
                // console.log(data, data.id, data.name);
                toastr.error("error")
            }
        })
    })








    //GET DATA FOR ROLE DYNAMIC FOR TYPE CONTRACTOR
    $.ajax({
        type: 'GET',
        url: '/api/roledata/get',
        success: function (data) {
            $.each(data, function (index, value) {
                $('select[name=roleId]').append('<option value="' + value.id + '">' + value.roleName + '</option>');
            })
        }
    });


    /// GET DATA FOR DELETE CONTRACTOR 

    $('#contractortable').on('click', '.deletecontractor', function () {
        var id = $(this).attr('data-id');
        var url = '/api/contractordelete/delete/' + id;
        $("#ContractorId").val(id);
        $("#deletecontractorModal").modal('show');


    });


    /*  DELETE CONTRACTOR  DELETE DATA AFTER CLICK*/
    $("#btnContractorDelete").click(function () {

        // for deletion
        var st = $("#ContractorId").val();
        //alert(dept);
        $.ajax({
            type: "DELETE",
            url: "/api/contractordelete/delete/" + st,
            success: function (response) {

                setTimeout(function () {
                    toastr.success("Contractor Successfully Deleted");
                    setTimeout(function () {
                        location.reload();
                    }, 2000)
                }, 1500);
                $("#deletecontractorModal").modal('hide');
            },
            error: function (response) {
                toastr.error("Unable to Delete ");
                //alert(result, result.DepartmentId, result.Name);
            }
        })

    })

}


function Account() {
    //SERVER SIDE DATATABLE SHOW DATA FOR USER
    $("#usertable").DataTable({
        "ajax": {
            "url": "/Account/GetUserDatatable",
            "type": "POST",
            "datatype": "json", dataSrc: "data"
        },

        "processing": "true",
        "serverSide": "true",
        "serverSide": "true",
        "order": [[1, "desc"]],

        "columns": [
            {
                "data": "Id", "name": "Id", "className": "hideThis",
            },
            {
                "data": "Name", "name": "Name",
            },
            {
                "data": "Email", "name": "Email",
            },
            {
                "data": "UserName", "name": "UserName",
            },
            {
                "data": "RoleID", "name": "RoleID",
            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  class=\'btn btn-success btn-sm d-block  edit \' data-id = ' + data.Id + ' > Edit <span class="fa fa-edit f-20" >  </span></button>'
                        +
                        '<button  class=\'btn btn-danger deleteaccount d-block btn-sm\' data-id = ' + data.Id + ' > Delete<span class="fa fa-trash f-20" >  </span></button>'


                }
            },
            {
                "data": null,
                'render': function (data, type, full, meta) {
                    return '<button  class=\'btn btn-info  changephoto d-block btn-sm\' data-id = ' + data.Id + ' > Change Profile <span class="fa fa-image f-20" >  </span></button>' + '<button  class=\'btn btn-primary btn-sm  resetpass \' data-id = ' + data.Id + ' > Reset Password <span class="fa fa-key f-20" >  </span></button>'

                }
            },
            {
                "data": "RoleID", "name": "RoleID",
                "render": function (data, type, row) {
                    if (data == "NgpAdmin") {

                        return '<span  class=" badge bg-secondary text-black" stByle="font-size:12px;" >Admin</span>'
                    }

                    return '<span  class=" badge bg-secondary text-black" style="font-size:12px;" >User</span>'

                },
            },




        ],


        "processing": "true",
        "language": {
            "processing": "processing... please wait"
        },

        "fnInitComplete": function (oSettings, json) {

        }


    });



    //GET DATA FOR ROLE DYNAMIC FOR CREATE ACCOUNT
    $.ajax({
        type: 'GET',
        url: '/api/roledata/get',
        success: function (data) {
            $.each(data, function (index, value) {
                $('select[name=roleId]').append('<option value="' + value.id + '">' + value.roleName + '</option>');
            })
        }
    });
    //GET DATA FOR ROLE DYNAMIC  FOR EDIT ACCOUNT
    $.ajax({
        type: 'GET',
        url: '/api/roledata/get',
        success: function (data) {
            $.each(data, function (index, value) {
                $('select[name=roleID]').append('<option value="' + value.id + '">' + value.roleName + '</option>');
            })
        }
    });

    //GET DATA ONLY FOR EDIT ACCOUNT GET METHOD 
    $('#usertable').on('click', '.edit', function () {
        var id = $(this).attr('data-id');
        var url = '/api/editaccount/geteditaccount/' + id;
        /*    toastr.success(id);*/


        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $('#editAccountModal').modal('show');
                $('#editaccount').find('input[name="id"]').val(data.id);
                $('#editaccount').find('input[name="name"]').val(data.name);
                $('#editaccount').find('input[name="userName"]').val(data.userName);
                $('#editaccount').find('input[name="email"]').val(data.email);
                $('#editaccount').find('select[name="roleID"]').val(data.roleID);

            }
        })


    });


    //GET DATA CHANGE IMAGE
    $('#usertable').on('click', '.changephoto', function () {
        var id = $(this).attr('data-id');
        var url = '/api/editaccount/geteditaccount/' + id;

        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $("#changePhotoModal").modal('show');
                $('#changephoto').find('input[name="AccountId"]').val(data.id);
                $('#changephoto').find('input[name="name"]').val(data.name);
                console.log(data.id)

            }
        });

        var url2 = '/api/account/getpics/' + id;

        $.ajax({
            type: 'GET',
            url: url2,
            success: function (data) {
                $('#changephoto').find('input[name="id"]').val(data.id);
                $("#imageshow").empty();
                $("#imageshow").append("<img style='width:155px;height:155px; border-radius: 92px; overflow:hidden' src='" + data.filePath + "' />");
            }
        });
    });



    /// GET DATA FOR DELETE ACCOUNT  IN ACCOUNT TABLE

    $('#usertable').on('click', '.deleteaccount', function () {
        var id = $(this).attr('data-id');
        var url = '/api/accountdelete/getaccountdelete/' + id;
        $("#DeleteAccountId").val(id);
        $("#deleteAccountModal").modal('show');




    });

    //  //GET DATA ONLY FOR  RESET PASSWORD
    $('#usertable').on('click', '.resetpass', function () {
        var id = $(this).attr('data-id');
        var url = '/api/editaccount/geteditaccount/' + id;
        /*    toastr.success(id);*/
        $.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                $('#resetpassModal').modal('show');
                $('#resetpassword').find('input[name="id"]').val(data.id);
                $('#resetpassword').find('input[name="userName"]').val(data.userName);
                $('#resetpassword').find('input[name="password"]').val('');
                $('#resetpassword').find('input[name="name"]').val(data.name);
                $('#resetpassword').find('input[name="email"]').val(data.email);
                $('#resetpassword').find('input[name="roleID"]').val(data.roleID);

            }
        })
    });







    // SAVING CREATE ACCOUNT WITH PICTURE
    $("#createaccount").validate({
        rules: {
            Name: {
                required: true,
            },
            Email: {
                required: true,
            },
            UserName: {
                required: true,
            },
            Password: {
                required: true,
                regex: ("(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\\-_]).{8,}$")
            },
            roleId: {
                required: true,

            },


        },
        errorClass: "validationerror",
        messages: {
            Name: {
                required: "Please Input a Name",
            },
            Email: {
                required: "Please Input a Email",
            },
            UserName: {
                required: "Please Input a Username",
            },
            Password: {
                required: "Please Input a Password",
                regex: "At least 1 Uppercase,1 Lowercase,1 Special Character, 1 Numeric Character and Minimum of 8 Characters"
            },
            roleId: {
                required: "Please Select a Role",
            },


        },
    });
    $("#createaccount").submit(function (e) {

        e.preventDefault();
        var formData = new FormData(this);
        if ($("#createaccount").valid()) {
            $('#createModal').modal('hide');
            $.ajax({
                type: 'POST',
                url: '/api/addaccount/post',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {

                    setTimeout(function () {
                        toastr.success("Account Successfully Created");
                        setTimeout(function () {
                            location.reload();
                        }, 2000)
                    }, 1500);
                    $("#createModal").modal('hide');
                },
                error: function (response) {
                    toastr.error("Unable to Delete Dependent in Foreign Key");
                    //alert(result, result.DepartmentId, result.Name);
                }
            });
        }
    })



    /* SAVING EDIT ACCOUNT POST METHOD*/
    $("#editaccount").validate({
        rules: {
            name: {
                required: true,
            },
            userName: {
                required: true,
            },
            email: {
                required: true,
            },
            roleID: {
                required: true,
            },

        },
        errorClass: "tomerror",
        messages: {
            name: {
                required: "Please Enter Your Name",
            },
            userName: {
                required: "Please Enter Your Username",
            },
            email: {
                required: "Please Enter Your Email",
            },
            roleID: {
                required: "Please Select Your RoleID",
            },

        },
        submitHandler: function () {
            if ($("#editaccount").valid()) {
                var valdata = $("#editaccount").serialize();
                $('#editAccountModal').modal('hide');
                $.ajax({
                    url: '/api/savingeditaccount/post/' + id,
                    type: "POST",
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: valdata,
                });
                setTimeout(function () {
                    toastr.success('EDIT SUCCESSFULLY');
                    setTimeout(function () {
                        location.reload();
                    }, 2000)
                }, 1500);
            }
        }
    });


    /*  DELETE ACCOUNT POST  DELETE DATA AFTER CLICK*/
    $("#btnAccounteDelete").click(function () {

        // for deletion
        var st = $("#DeleteAccountId").val();
        //alert(dept);
        $.ajax({
            type: "DELETE",
            url: "/api/accountdelete/getaccountdelete/" + st,
            success: function (response) {

                setTimeout(function () {
                    toastr.success("Account Successfully Deleted");
                    setTimeout(function () {
                        location.reload();
                    }, 2000)
                }, 1500);
                $("#deleteAccountModal").modal('hide');
            },
            error: function (response) {
                toastr.error("Unable to Delete Dependent in Foreign Key");
                //alert(result, result.DepartmentId, result.Name);
            }
        })

    })

    //CHANGE PROFILE PICTURE SAVING PHOTO
    $("#changephoto").submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        if ($("#changephoto").valid()) {
            $('#changePhotoModal').modal('hide');
            $.ajax({
                type: 'POST',
                url: '/api/changephoto',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {

                    setTimeout(function () {
                        toastr.success("Profile Picture Successfully Change");
                        setTimeout(function () {
                            location.reload();
                        }, 2000)
                    }, 1500);
                    $("#changePhotoModal").modal('hide');
                },
                error: function (response) {
                    toastr.error("Unable to Delete Dependent in Foreign Key");
                    //alert(result, result.DepartmentId, result.Name);
                }

            });
        }
    })


    //RESET PASSWORD SAVING FOR USER ACCOUNT
    $("#resetpassword").validate({
        rules: {

            userName: {
                required: true,
            },
            password: {
                required: true,
                regex: ("(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\\-_]).{8,}$")
            },


        },
        errorClass: "validationerror",
        messages: {

            userName: {
                required: "Please Enter Your Username",
            },
            password: {
                required: "Please Input a Password",
                regex: "At least 1 Uppercase,1 Lowercase,1 Special Character, 1 Numeric Character and Minimum of 8 Characters"
            },


        },
        submitHandler: function () {
            if ($("#resetpassword").valid()) {
                var valdata = $("#resetpassword").serialize();
                $('#resetpassModal').modal('hide');
                $.ajax({
                    url: '/api/resetpassword/postresetpassword/' + id,
                    type: "POST",
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: valdata,
                });
                setTimeout(function () {
                    toastr.success('RESET PASSWORD SUCCESSFULLY');
                    setTimeout(function () {
                        location.reload();
                    }, 2000)
                }, 1500);
            }
        }
    });

    //SAVINGR ROLE ADD ROLE
    $("#createrole").validate({
        rules: {
            RoleName: {
                required: true,
            },
        },
        messages: {
            RoleName: {
                required: "Please Input a Role",
            },
        },
        submitHandler: function () {
            if ($("#createrole").valid()) {
                var valdata = $("#createrole").serialize();
                $('#createroleModal').modal('hide');
                $.ajax({
                    url: '/api/saverole/post',
                    type: "POST",
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: valdata,
                });
                setTimeout(function () {
                    toastr.success('Successsfully Added a Role');
                    setTimeout(function () {
                        location.reload();
                    }, 2000)
                }, 1500);
            }
        }
    });
}
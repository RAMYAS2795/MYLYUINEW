$(document).ready(function () {
    var varSignup = { ID: 0, ContactPersonName: "", ContactPersonDesignation: "", InstitutionName: "", TypeInstitute: "", City: "", State: "", Country: "", NoOfStudent: "", Role: "", HearAboutmyly: "", ContactNumber: "", EmailID: "", TimeToContact: "", Remark:"", FeatureDetail: [] }
    $("#submitFreeSignUpDetail").bind("click", function () {
        var selected_value = []; // initialize empty array 
        $(".source:checked").each(function () {
            selected_value.push($(this).val());
        });
        //var valid = false;
        //debugger
        //if ($('#name').val() == "" && $('#institutionname').val() == "") {
        //    valid = false;
        //}
        //else if ($('#name').val() != "" && $('#institutionname').val() == "") {
        //    valid = true;
        //}
        //else if ($('#name').val() == "" && $('#institutionname').val() != "") {
        //    valid = true;
        //}
        var valid = $("#formRegister").validationEngine('validate');
        if (valid) {
            varSignup.ContactPersonName = $('#name').val();
            varSignup.ContactPersonDesignation = $('#designation').val();
            varSignup.InstitutionName = $('#institutionname').val();
            varSignup.TypeInstitute = $('#typeinstitute').val();
            varSignup.City = $('#city').val();
            varSignup.State = $('#state').val();
            varSignup.Country = $('#country').val();
            varSignup.NoOfStudent = $('#numberofstudents').val();
            varSignup.Role = $('#role').val();
            varSignup.HearAboutmyly = $('#hearfrom').val();
            varSignup.ContactNumber = $('#contactnumber').val();
            varSignup.EmailID = $('#emailId').val();
            varSignup.TimeToContact = $('#timetocontact').val();
            varSignup.Remark = $('#remark').val();
            varSignup.FeatureDetail = [];
            $.each(selected_value, function (i, e) {
                var FeatureDetail = {
                    ID: 0,
                    FeatureName: selected_value[i],
                    FreeSignUpID: null,
                };
                varSignup.FeatureDetail.push(FeatureDetail);
            });
            var data = JSON.stringify(varSignup);
            ServerRequest(MethodName.SaveFreeSignUp, data, OnSuccessContact, OnErrorContact);
        }
        else {
            $("#formRegister").validationEngine();
        }
        return false;
    });
});
function OnSuccessContact(result) {
    switch (result.SingleResult) {
        case ResultCode.Success: BootstrapDialog.show({ title: 'Thank you', message: 'Thank you for registering with myly.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] });
            $('#formRegister')[0].reset();
            selected_value = []; 
            break; case ResultCode.AlreadyExist: BootstrapDialog.show({ title: 'Already exists', message: 'You have already filled this form using this Email ID and Contact Number.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] });
                break; case ResultCode.AlreadyExistEmail: BootstrapDialog.show({ title: 'Already exists', message: 'You have already filled this form using this Email ID.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] });
                    break; case ResultCode.AlreadyExistContact: BootstrapDialog.show({ title: 'Already exists', message: 'You have already filled this form using this Contact Number.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] });
                break; case ResultCode.Error: BootstrapDialog.show({ title: 'Error', message: 'There is some error in contact form submission.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] }); break; case ResultCode.EmailSendFailed: BootstrapDialog.show({ title: 'Information', message: 'There is some error in email send.', closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] }); break;
    }
}
function OnErrorContact(error) {
    BootstrapDialog.show({ title: 'Error', message: error, closable: false, buttons: [{ label: 'OK', action: function (dialogRef) { dialogRef.close(); } }] });
}
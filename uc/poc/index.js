!function() {
  var params = (new URL(document.location)).searchParams;
  var ucForm = document.querySelector('#uc-form');

  var workspaceId = params.get('wsid');
  var formId = params.get('formId');
  var configApiHost = params.get('host') || 'api-development-consent-config.treasuredata.com';


  if (workspaceId && formId) {
    ucForm.jsonUrl = `https://${configApiHost}/api/universal_consent/workspaces/${workspaceId}/forms/${formId}/settings`;
  }
}();

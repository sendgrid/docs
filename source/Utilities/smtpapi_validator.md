---
layout: page
title: SMTP API Header Validator
weight: 80
navigation:
  show: true
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="{{root_url}}/assets/smtpapi_validator.js"></script>
<div id="successAlert" class="alert alert-success">
</div>
<div id="failAlert" class="alert alert-danger">
</div>
  
<textarea id="smtpapi_headers" class="form-control" rows="12" placeholder="Paste your X-SMTPAPI header here">
</textarea>
  
<button id="validate_headers" type="button" class="btn btn-primary">
Check Headers
</button>

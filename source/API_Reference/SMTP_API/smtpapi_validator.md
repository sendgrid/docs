---
layout: page
sidebar: true
fluid: true
responsive: true
title: SMTP API Header Validator
weight: 99
navigation:
  show: true
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="{{root_url}}/assets/smtpapi_validator.js"></script>
<div markdown="1" id="successAlert" class="alert alert-success">
</div>
<div markdown="1" id="failAlert" class="alert alert-danger">
</div>
  
<textarea markdown="1" id="smtpapi_headers" class="form-control" rows="12" placeholder="Paste your X-SMTPAPI header here">
</textarea>
  
<button markdown="1" id="validate_headers" type="button" class="btn btn-primary">
Check Headers
</button>


---
layout: page
weight: 10
title: Python
navigation:
  show: true
---

{% anchor h2 %}
Parse Webhook 
{% endanchor %}

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to http://sendgrid.biz/parse. In this example we wil be using Python the Flask framework.

Given this scenario, the following are the parameters you would set at the [Parse API settings page](https://sendgrid.com/developer/reply):

{% codeblock %}
Hostname: email.sendgrid.biz
{% endcodeblock %}

{% codeblock %}
URL: http://sendgrid.biz/parse
{% endcodeblock %}

  To test this scenario, we sent an email to isaac@email.sendgrid.biz and created the following code: 

{% codeblock lang:python %}
from flask import Flask, request
import simplejson
app = Flask(__name__)

@app.route('/parse', methods=['POST'])
def sendgrid_parser():
  # Consume the entire email
  envelope = simplejson.loads(request.form.get('envelope'))

  # Get some header information
  to_address = envelope['to'][0]
  from_address = envelope['from']

  # Now, onto the body
  text = request.form.get('text')
  html = request.form.get('html')
  subject = request.form.get('subject')

  # Process the attachements, if any
  num_attachments = int(request.form.get('attachments', 0))
  attachments = []
  if num_attachments > 0:
    for num in range(1, (num_attachments + 1)):
      attachment = request.files.get(('attachment%d' % num))
      attachments.append(attachment.read())
      # attachment will have all the parameters expected in a Flask file upload

  return "OK"

if __name__ == '__main__':
    app.run(debug=True)

{% endcodeblock %}

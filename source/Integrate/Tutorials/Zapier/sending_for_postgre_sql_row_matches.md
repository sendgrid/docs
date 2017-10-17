---
seo:
  title: Sending SendGrid Emails For New PostgreSQL Custom Query Row Matches
  description: Learn how to use Zapier to send mail through SendGrid when new PostgreSQL rows are created.
  keywords: integrate, tutorial, PostgreSQL, SendGrid, Zapier
title: Sending SendGrid Emails For New PostgreSQL Custom Query Row Matches
weight: 0
layout: page
navigation:
  show: true
---

If you want to send emails automatically through SendGrid when new custom PostgreSQL rows are created, you can do that using [Zapier](http://zapier.com).

You will need:

* a [PostgreSQL](http://www.postgresql.com) account
* a [SendGrid](http://sendgrid.com) account
* a [Zapier](http://zapier.com) account

## Steps

1. [Getting your accounts ready](#ready)
2. [Connecting your accounts](#connect)

### Getting your accounts ready<a name="ready"></a>


To connect your PostgreSQL account to Zapier you will need an active PostgreSQL, and a database that you wish to pull data from. To get started with PostgreSQL, including information on how to install the program and how to create a database, go [here](http://www.postgresql.org/docs/9.4/static/tutorial-start.html). You can learn more about getting started with PostgreSQL on Zapier, [here](https://zapier.com/help/postgresql/#how-get-started-postgresql).

To link your PostgreSQL to SendGrid, you must have an active SendGrid account. To learn more about getting started with SendGrid basics, start [here](https://sendgrid.com/docs/index.html). For more information about getting started with SendGrid on Zapier, go [here](https://zapier.com/help/sendgrid/#how-get-started-sendgrid).

### Connecting your accounts<a name="connect"></a>

Click here to [Send SendGrid emails for new PostgreSQL custom query row matches](https://zapier.com/zapbook/zaps/4781/send-sendgrid-emails-for-new-postgresql-custom-query-row-matches/).

1. Choose your PostgreSQL account from the list of accounts, or connect a new account.
2. To connect a new account, you will need the IP address or hostname of where your database is. Input this data in the **Host** field, indicate if you use an alternate **Port**, and fill in the **Database** and **Username** fields with the appropriate data. You may also need to fill out the **Password** field if your database user requires it.
![Connecting PostgreSQL](https://api.monosnap.com/rpc/file/download?id=OTK4dRBb1xZSxiiBDQXS4owNzpOlOf)
3. Create or fill in the **Custom Query** you wish to use. Click **Save + Continue**.
![PostgreSQL selection](https://api.monosnap.com/rpc/file/download?id=BFLSEIzfoiaq6RfAGiP6wJ7Tj7OzaH)
4. Choose your SendGrid account from the list of accounts, or connect a new account.
5. To connect your SendGrid account to Zapier for the first time, you will enter the credentials of an API/mail account. If you have not created this account, you can do so [here](https://sendgrid.com/credentials).
![Credential entry](https://api.monosnap.com/rpc/file/download?id=gAajRq9wMKNTN4HyEKzAMosD71ifb8)
6. Using fields from PostgreSQL, create and customize the email message that the Zap will send. The required fields for this step are **To**, **From**, and **Subject**, but you may fill in further fields if you desire to do so.
![Email creation](https://api.monosnap.com/rpc/file/download?id=PMa2LUCYaqGcvdy9pPUtMhtrUtp5nW)
7. Click **Save + Finish**.

Now test the Zap to make sure it works. Once you’re satisfied with the results, a new SendGrid email will be sent whenever your custom query is matched in your PostgreSQL.

*Note: if you ever want to change this PostgreSQL and SendGrid integration, just go to [your Zapier dashboard](https://zapier.com/app/dashboard) and tweak anything you'd like.*

You can also check out all that’s possible with [PostgreSQL on Zapier](https://zapier.com/zapbook/postgresql/), and other ways to connect [PostgreSQL and SendGrid](https://zapier.com/zapbook/postgresql/sendgrid).

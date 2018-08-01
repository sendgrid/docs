Hello! Thank you for choosing to help contribute to the SendGrid documentation site! There are many ways you can contribute and help is always welcome.  When writing documentation, we ask you to consider the following style guidelines. 

* [Style](#style)
    * [Numbers](#numbers)
    * [About Additional Resources](#about-additional-resources)
    * [Cross References](#cross-references)
* [Terminology](#terminology)
* [Punctuation](#punctuation)
* [Capitalization](#capitalization)
* [Warning and info blocks](#warning-and-info-blocks)
* [Screenshots](#screenshots)


<a name="style"></a>
## Style

We strive to make our documentation concise, clear, organized, and scannable. 

* Use conversational language and industry-standard terms when possible.
* Contractions are OK and preferred.
* Use bulleted lists and numbered steps where applicable. 

When documenting a UI action, make it **bold**. Avoid using the word "button" in the step and simply refer to the name on the UI element. 
    For example, "Enter your username and password, and then click **login**." 

Where possible, write pages in a "jobs to be done" format. Jobs to be done style includes:

* Table of contents at the beginning
* "Additional Resources" section at the end
* Include sections to achieve the goal, with steps for each task (numbered steps, clear directions, and correct UI workflow)
	For an example, see [Sending a Campaign]({{root_url}}/help-support/sending-email/how-to-send-email/)
	
**Avoid passive voice.** A good way to check if your sentence is in passive or not is to add "by zombies" to the end of it. If zombies end up doing the action, it's passive. 

Example: Any templates, campaigns, contacts, or API keys created by the teammate will not be deleted....by zombies(!)

<a name="numbers"></a>
### Numbers

Use numerals instead of spelling them out. However, if a number leads off the sentence, spell it out.
YES: “SendGrid offers 10 templates in Marketing Campaigns.”
YES: “Ten templates are included in Marketing Campaigns.”

<a name="cross references"></a>
### Cross References

When referring to other pages in the documentation, make sure your link text is descriptive. 

YES: For more information, see [Event Webhook] documentation.
NO: For more information, click [here].

<a name="about-additional-resources"></a>
### About Additional Resources

"Additional Resources" is an h2 section that contains three to five bullet points with links out to other closely related pages. These pages could be SendGrid blogs or docs pages with information about next steps, use cases, or other things a user should consider when they are completing the task on the page. Every page should have an additional resources page, so if it doesn't, feel free to add one!

Here is an example "Additional Resources" section: {{root_url}}/help-support/sending-email/editor.html#-Additional-Resources

Here is example formatting:

```
## Additional Resources

* [Sending an Email]({{root_url}}/help-support/sending-email/how-to-send-email/)
* [A/B Testing]({{root_url}}/help-support/sending-email/a-b-testing/)
* [Campaign Statistics]({{root_url}}/help-support/analytics-and-reporting/campaign-stats/)
* [Marketing Templates]({{root_url}}/help-support/sending-email/working-with-marketing-templates/)
```

<a name="terminology"></a>
## Terminology

* SaaS - note capitalization
* Cloud-based - note hyphen
* Warmup - one word with no hyphen
* Mail stream - 2 words
* Statistics - do not shorten to “stats”
* Email - NOT e-mail
* Deactivate - not inactivate 
* Recipients - The people that receive email from SendGrid Customers. Not “users” or “customers”.
* “Log in” - verb
* “login” - noun
* “sign up” - verb
* “sign-up” - noun
* “username” - one word

When referring to file types, like a PDF file, or a CSV file, refer to it as a CSV file, and not as a `.csv file`, unless it is an example file, like `my-file.csv`. When it's an example file, it should be in `code syntax`.

<a name="punctuation"></a>
## Punctuation

* Use Oxford commas. 
* Refrain from using exclamation points when possible.
* Watch out for 2 spaces after periods--there can be only one.
* Keep periods and punctuation marks inside the quotation marks. 

<a name="capitalization"></a>
## Capitalization

* When in doubt...make it lowercase! 
* Use sentence case for headings unless it contains a feature name or UI element. (For example, Getting started with the Design Editor.)
* Only capitalize exclusive feature names like “Event Webhook” and “Marketing Campaigns” not, “drag & drop editor” or “transactional templates". 

<a name="warning and info blocks"></a>
## Warning and info blocks

These are great for quick information that you want to highlight to a user. Especially for “gotchas” or “neat tricks”. Please use the tags below to show these in your content.

```
{% warning %}
Your warning
{% endwarning %}

{% info %}
Your note
{% endinfo %}

```

<a name="screenshots"></a>
## Screenshots


Not every single page or step needs an accompanying screenshot. When in doubt, follow the guidelines below. 

### Needs a screenshot:

* The layout of the main elements and areas of the interface with captions. For example, the toolbar, status bar, main menu, pop-up menu. This avoids needing to explain in words: “On the bar on the left, click on the second button from the top”.
* Each action that significantly changes the state of the system, interface or data.
* Pop-up (modal) windows.

### Does NOT need a screenshot:

* Install and uninstall wizards (unless there is something really unusual about a lot of the settings).
* Login pages.
* Standard dialog windows (open, save).
* Endless drop-down lists (select language or country).
* Individual buttons (use text).
* Anything that is already described in detail or included on other screenshots – better to provide a link.
* Screens containing details about the version, rights, etc. If a new version comes out, you may need to change numbers or letters on every single screenshot.
* Pieces of code, configs, etc. Instead, insert these as formatted text – it looks better, and users can easily copy them.

### File format and naming:

Please use .png, .gif, or .jpg files. Give the screenshots unique, meaningful names, obeying a specific format, such as general_settings_privacy. Avoid spaces, uppercase letters, and excessively long names.

### Size and resolution:

When possible, try to take screenshot at a size that is twice what it will need to be on the page. 

### Alt text:

As a best practice, all screenshots should have accompanying alt text. 

Use the following format when inserting an image into the docs:

`![alt text here]({{root_url}}/images/<image_name>.png)`


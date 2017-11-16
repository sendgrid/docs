Hello! Thank you for choosing to help contribute to the SendGrid documentation site! There are many ways you can contribute and help is always welcome.  When writing documentation, we ask you to consider the following style guidelines. 

* [Terminology](#terminology)
* [Punctuation](#punctuation)
* [Capitalization](#capitalization)
* [Warning and info blocks](#warning-and-info-blocks)
* [Screenshots](#screenshots)


We strive to make our documentation concise, clear, organized, and scannable. 

* Use conversational language and industry-standard terms when possible.
* Contractions are OK and preferred.
* Use bulleted lists and numbered steps where applicable. 

<a name="terminology"></a>
## Terminology

* SaaS (note capitalization)
* Cloud-based (note hyphen)
* Warmup, one word, no hyphen
* Mail stream, 2 words
* Statistics, not “stats”
* Email NOT e-mail
* Deactivate, not inactivate 
* Recipients = The people that receive email from SendGrid Customers. Not “users” or “customers”.
* “Log in” = verb
* “login” = noun
* “sign up” = verb
* “sign-up” = noun
* “username” = one word

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

* The layout of the main elements and areas of the interface with captions. For example, the toolbar, status bar, main menu, pop-up menu.      This avoids needing to explain in words: “On the bar on the left, click on the second button from the top”.
* A screenshot for each action that significantly changes the state of the system, interface or data.
* Pop-up (modal) windows.

### Does NOT need a screenshot:

* Install and uninstall wizards (unless there is something really unusual about a lot of the settings).
* Login pages.
* Standard dialog windows (open, save).
* Endless drop-down lists (select language or country).
* Individual buttons (use text).
* Anything that is already described in detail or included on other screenshots – better to provide a link.
* Screens containing details about the version, rights, etc. If a new version comes out, you may need to change numbers or letters on every    single screenshot.
* Pieces of code, configs, etc. Better to insert these as formatted text – it looks better, and users can easily copy them.

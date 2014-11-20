---
layout: page
title: Enforced TLS
weight: 90
navigation:
  show: true
---

The Enforced TLS settings specify whether or not the recipient is required to 
support TLS or have a valid certificate. See the 
[SMTP Ports User Guide]({{root_url}}/User_Guide/smtp_ports.html) for more
information on opportunistic TLS.

{% info %}
If either setting is enabled and the recipient does not support TLS or have a 
valid certificate, we drop the message and send a block event with "TLS required 
but not supported" as the description.
{% endinfo %}

{% anchor h2 %}
GET
{% endanchor %}

Get the current Enforced TLS settings.

{% apiv3example get GET https://api.sendgrid.com/v3/user/settings/enforced_tls %}
{% v3response %}
HTTP/1.1 200
{
    "require_tls": true,
    "require_valid_cert": false 
}

{% endv3response %}
{% endapiv3example %}

<h2 class="anchor-wrap"><a name="-PATCH" class="anchor" href="#-PATCH"><span class="anchor-icon"><i class="icon-link"></i></span></a>PATCH</h2>


<p>Change the Enforced TLS settings</p>

<table id="parameters-patch" class="table table-bordered table-striped">
  <tbody>
    <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Requirements</th>
      <th>Description</th>
    </tr>
    
  <tr>
  <td>require_tls</td>
  <td>False</td>
  <td>true or false</td>
  <td>Require recipient TLS support</td>
</tr>

  <tr>
  <td>require_valid_cert</td>
  <td>False</td>
  <td>true or false</td>
  <td>Require certificates to be valid</td>
</tr>


  </tbody>
</table>




<div class="api-example panel" id="apiv3example-patch">
  
<div class="panel-body">
  <h3>Request</h3>
  <div class="code-wrapper" id="wrapper_6cdbe1717528ec18ba1b43f6d15dcabe" itemscope itemtype="http://schema.org/Code">
  <meta itemscope="name" content="">
  <meta itemscope="programmingLangauge" content="http">
  <div class="code-buttons">
    <ul class="nav nav-tabs">
      <li class="pull-right">
        <a class="copycode code-button btn-mini" id="copy_6cdbe1717528ec18ba1b43f6d15dcabe">
          <i class="icon-copy"></i> Copy
        </a>
      </li>
      <li class="pull-right">
        <a class="expandcode code-button btn-mini" id="expand_6cdbe1717528ec18ba1b43f6d15dcabe">
          <i class="icon-fullscreen"></i> Fullscreen
        </a>
      </li>
    </ul>
  </div>
  <figure class="code" id="code_6cdbe1717528ec18ba1b43f6d15dcabe">
  
 <div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
</pre></td><td class='code'><pre><code class='http'><span class='line'><span class="nf">PATCH</span> <span class="nn">https://api.sendgrid.com/v3/user/settings/enforced_tls</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
</span></code></pre></td></tr></table></div></figure></div>
  Request Body<br/><div class="code-wrapper" id="wrapper_4a37d8f3abc322ceab35578dccfdf13a" itemscope itemtype="http://schema.org/Code">
  <meta itemscope="name" content="">
  <meta itemscope="programmingLangauge" content="json">
  <div class="code-buttons">
    <ul class="nav nav-tabs">
      <li class="pull-right">
        <a class="copycode code-button btn-mini" id="copy_4a37d8f3abc322ceab35578dccfdf13a">
          <i class="icon-copy"></i> Copy
        </a>
      </li>
      <li class="pull-right">
        <a class="expandcode code-button btn-mini" id="expand_4a37d8f3abc322ceab35578dccfdf13a">
          <i class="icon-fullscreen"></i> Fullscreen
        </a>
      </li>
    </ul>
  </div>
  <figure class="code" id="code_4a37d8f3abc322ceab35578dccfdf13a">
  
 <div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
</pre></td><td class='code'><pre><code class='javascript'><span class='line'><span class="p">{</span>
</span><span class='line'>  <span class="s2">&quot;require_tls&quot;</span><span class="o">:</span> <span class="s2">true</span>
</span><span class='line'><span class="p">}</span>
</span></code></pre></td></tr></table></div></figure></div> 
  <h3>Response</h3>
  <div class="code-wrapper" id="wrapper_4414af367285e3e29f722e60fc5f18aa" itemscope itemtype="http://schema.org/Code">
  <meta itemscope="name" content="">
  <meta itemscope="programmingLangauge" content="json">
  <div class="code-buttons">
    <ul class="nav nav-tabs">
      <li class="pull-right">
        <a class="copycode code-button btn-mini" id="copy_4414af367285e3e29f722e60fc5f18aa">
          <i class="icon-copy"></i> Copy
        </a>
      </li>
      <li class="pull-right">
        <a class="expandcode code-button btn-mini" id="expand_4414af367285e3e29f722e60fc5f18aa">
          <i class="icon-fullscreen"></i> Fullscreen
        </a>
      </li>
    </ul>
  </div>
  <figure class="code" id="code_4414af367285e3e29f722e60fc5f18aa">
  
 <div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
</pre></td><td class='code'><pre><code class='javascript'><span class='line'><span class="nx">HTTP</span><span class="o">/</span><span class="mf">1.1</span> <span class="mi">200</span>
</span><span class='line'><span class="p">{</span>
</span><span class='line'>    <span class="s2">&quot;require_tls&quot;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
</span><span class='line'>    <span class="s2">&quot;require_valid_cert&quot;</span><span class="o">:</span> <span class="kc">false</span>
</span><span class='line'><span class="p">}</span>
</span></code></pre></td></tr></table></div></figure></div>
</div>


</div>

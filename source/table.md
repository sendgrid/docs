---
layout: page
weight: 0
title: Docs tables
hideFeedback: true
showTitle: false
breadcrumbs: false
navigation:
  show: true
---

{% apitable %}

  {% api_table_param personalization "array of objects" Yes "Min100, Max500" "a hadfjasdf asdfas df description" 0 %}
    {% api_table_param to "array of objects" Yes "Min100, Max500" "a hadfjasdf asdfas df description" 1 %}
      {% api_table_param email array Yes "Min100, Max500" "a hadfjasdf asdfas df description" 2 %}
      {% api_table_param name array Yes "Min100, Max500" "a hadfjasdf asdfas df description" 2 %}
    {% api_table_param cc string Yes "Min100, Max500" "a hadfjasdf asdfas df description" 1 %}
    {% api_table_param send_at integer Yes "Min100, Max500" "a hadfjasdf asdfas df description" 1 %}
    {% api_table_param subject number Yes "Min100, Max500" "a hadfjasdf asdfas df description" 1 %}
  {% api_table_param subject boolean Yes "Min100, Max500" "a hadfjasdf asdfas df description" 0 %}

{% endapitable %}

---
title: 'Creating A Live Dashboard with Bokeh'
date: 2017-03-13
author: Josh Usry
featured_image:
excerpt: Using Bokeh to create live dashboard.
redirect_from:
  - /blog/2017/3/13/dashboard/
---

Recently, I completed a project creating an analytics dashboard for a client.
I used Bokeh for the visualizations and wanted to share my experiences.

# Overview

I'd like to describe the dashboard I created and then talk about some of the
steps it took to create. You can see the finished product below:

![Image of Dashboard](/images/dashboard/all_tiny.png){:width="70%"}

In the top left corner we have statistics for three servers with line graphs
representing CPU, memory, and disk usage.  If any graph has a reading above 75%
it, its title, and its plot turn red like [this](https://bokeh.pydata.org/en/latest/docs/gallery/box_annotation.html).
When the readings drop, things go back to normal. Moving downward, we have two
line graphs plotting users currently connected to our system and how fast our
system is processing their messages over time.  At the bottom is a live Google
Map of users in the field that are transmitting, with colors representing
different user states.

On the top right we have various tables showing running processes, versioning,
jar info, uptime, and open file statistics (when available). Below that, we have
an alerts area displaying faults, overflows, and server errors. The figures
change to red when they exceed certain parameters and the drop downs are shown
as needed. Finally, we have the 'firehose' on the bottom right that's fed from
tails of various logs from two boxes, colored coded to keep it straight.  It's
not shown in the photo, but the log scrolls fairly like a terminal, albeit
quickly (my client said they wanted it 'for peace of mind', even though the logs
fly by at light speed).

#### Close Ups

You can see some of the elements close up in the images below:

![Image of server graphs](/images/dashboard/server_graphs.png){:width="70%"}
![Image of GPS lines](/images/dashboard/lines_gps.png){:width="70%"}
![Image of process alerts](/images/dashboard/alerts_procs.png){:width="70%"}

#### Full Sized Shot

And here is a shot showing the dahsboard updating over time:

![Image of dashboard in action](/images/dashboard/action.gif){:width="70%"}

# Development Strategy

My game plan for the project was to create each module grouping (server stats,
long line graphs, GPS, tables firehose) separately and then fit them together
in whatever way made the most visual sense. I felt this approach allowed me to
pay closer attention to the details of each module and adjust the over all app
layout as needed withoutmuch issue.  All modules are comprised of only two Bokeh
elements, HTML divs (including the Google Map) and line graphs. Periodic callbacks
update everything, except the Google Map that hits a local Flask API periodically
via Javascript instead.  I did this because at the time of writing there were some
issues with Bokeh's GMapPlot (but that should be resolved in the next release).
Error handling was mostly concentrated to handling data from the various Bash
commands used to source server stats and dealing with their output, expected or
otherwise.

# Back End Setup

I tried to stay with the "server app" design similar to those shown [here](https://bokeh.pydata.org/en/latest/docs/gallery.html)
and kept my folder structure as prescribed [here](https://bokeh.pydata.org/en/latest/docs/user_guide/server.html#directory-format)
to try and keep things simple, with all my Python in a common folder and a HTML
file in a "templates" folder.  This was done so Bokeh's Tornado server would
find the HTML file and use it as a template for the app.  I also used [threads](https://bokeh.pydata.org/en/latest/docs/user_guide/server.html#updating-from-threads)
and [unlocked callbacks](https://bokeh.pydata.org/en/latest/docs/user_guide/server.html#updating-from-unlocked-callbacks)
for pretty much every element in the app to keep things responsive.  The data
for all modules is sourced from three daemonized [threads](https://docs.python.org/2/library/threading.html),
responsible for information from SSH, HTTP, and SQL.  They are started by server
lifecycle hooks described [here](https://bokeh.pydata.org/en/latest/docs/user_guide/server.html#lifecycle-hooks),
init when the server is launched, gather data from their respective source,
and make it available to the dashboard.  And since the dashboard gets data from
the a general cache, N users are able to share info cached from a single database,
SSH, and HTTP connection.  Awesome.  This also allows the dashboard to scale nicely,
especially with Tornado's help.

# Next Steps

I didn't have enough time to give the dashboard a memory, so when you log in you
can't see anything from previous runs.  My client didn't see this as a deal breaker,
having dedicated plasma screens and projectors for this kind of thing (with some
instances showing months of cached data). But it's kind of problematic if anything
should happen to those systems, or even the browsers on them.To remedy this, I'd
like to save data using locally to a SQlite database and initialize the dashboard
with cached data from it to show a week or more of data.

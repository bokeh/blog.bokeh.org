---
title: 'Guide to Resources'
date: 2016-10-03
author: Bryan Van de Ven
featured_image:
excerpt: An overview of all the community resources available for navigating Bokeh questions.
redirect_from:
  - /blog/2016/10/3/resources-overview/
---


Recently, [@birdsarah](https://twitter.com/birdsarah) and I have given a few Bokeh talks and tutorials. As part of that, we recently updated the ["Additional Resources" tutorial notebook](http://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/master/tutorial/A1%20-%20Extra%20Resources.ipynb). It seemed like a good idea to collect and expand upon that information here, to provide a quick guide to getting around.

-----

### Documentation

The [Main Project Documentation Page](https://bokeh.pydata.org/en/latest) is always a good place to start. It has links to many other resources, but to help make navigating the docs easier, here are some shortcuts:


*[User's Guide](https://bokeh.pydata.org/en/latest/docs/user_guide.html)* &mdash; The user's guide has many topic-oriented subsections, for example
 - [Plotting with Basic Glyphs](https://bokeh.pydata.org/en/latest/docs/user_guide/plotting.html)
 - [Adding Interactions](https://bokeh.pydata.org/en/latest/docs/user_guide/interaction.html)
 - [Running a Bokeh Server](https://bokeh.pydata.org/en/latest/docs/user_guide/server.html)
 - [Extending Bokeh](https://bokeh.pydata.org/en/latest/docs/user_guide/extensions.html).

And many others. Each user's guide section typically example code and corresponding live plots that demomnstrate how to accomplish various tasks.


*[Gallery](https://bokeh.pydata.org/en/latest/docs/gallery.html)* &mdash; One of the best ways to learn is to find an existing example similar to what you want, and to study it and then use it as a starting place. Starting from a known working example can often save time and effort when getting started by allowing you to make small, incremental changes and observing the outcome. The Bokeh docs have a large thumbnail gallery that links to live plots and apps with corresponding code.


*[Reference Guide](https://bokeh.pydata.org/en/latest/docs/reference.html)* &mdash; If you are already familiar with Bokeh and have questions about specific details of the objects you are already using, the reference guide is a good resource for finding information. The reference guide is automatically generated from the project source code and is a complete resources for all Bokeh models and their properties.

-----

### Example Applications and Scripts

In addition to all the live gallery examples, Bokeh has many additional scripts and apps that can be instructive to study and emulate.

The [examples folder](https://github.com/bokeh/bokeh/tree/master/examples/) in the GitHub repository has many subfolders dedicated to different kinds of topics. Some of the hightlights are:

 - [app](https://github.com/bokeh/bokeh/tree/master/examples/app) - example Bokeh applications, run with `bokeh serve`
 - [howto](https://github.com/bokeh/bokeh/tree/master/examples/howto) - examples arranged around specific topics such as layout or notebook comms
 - [plotting](https://github.com/bokeh/bokeh/tree/master/examples/plotting) - a large collections of examples using the `bokeh.plotting` interface
 - [webgl](https://github.com/bokeh/bokeh/tree/master/examples/webgl) - some examples demonstrating WebGL usage

To make the things easier to obtain, a zip file of just the examples is also available at

`https://cdn.pydata.org/bokeh/examples/examples-<x.y.z>.zip`

For example, the examples zipfile for the 0.12.2 release can be found at:

[`https://cdn.pydata.org/bokeh/examples/examples-0.12.2.zip`](https://cdn.pydata.org/bokeh/examples/examples-0.12.2.zip)

-----

### General Community Support

Bokeh has a large and growing community. The best place to go for general support questions (either to ask, or to answer!) is one of the community support resources listed below.

*[Mailing list](https://groups.google.com/a/anaconda.com/forum/#!forum/bokeh)* &mdash; A good place to start with for questions (especially for related projects such as RBokeh, bokeh.scala, or DataShader).

*[StackOverflow](http://stackoverflow.com/questions/tagged/bokeh)* &mdash; Another place to go for general questions. Be sure to use the [#bokeh](http://  stackoverflow.com/questions/tagged/bokeh) tag!

*[Gitter chat channel](https://gitter.im/bokeh/bokeh)* &mdash; The chat channel is a great place to come to talk about getting involved in Bokeh   development.

In any of these places, if you happen to know the answer to a question, please take a little time to post it! There are a finite number of hours in a day, so as the number of users grows, the only sustainable path for "getting answers" is to have more people *providing answers*.

-----

### Project Development

From filing bug and feature issues, helping with documentation and small bugfixes, or diving into more involved development, the long-term success of the Bokeh project relies on having an engaged and active community tending to it. Here are some resources to help get involved with helping the project:

*[Source code](https://github.com/bokeh/bokeh)* &mdash; Go here to clone the GitHub repo (in order to contribute or get the examples), or to submit issues to the issue tracker

*[Issue tracker](https://github.com/bokeh/bokeh/issues)* &mdash; The GitHub issue tracker is the place to go to submit bug reports and feature requests. For bug reports, always include *as much information as possible*, including version and platform details, a thorough descriptions, and **most importantly**: a minimal, complete, runnable example to reproduce the issue. More than anything else, this will help to have the issue looked at promptly.

**NOTE:** *The issue tracker is **not** an appropriate place to go for general support questions.* For those, see the "General Community Support" links above.

*[Developer's Guide](https://bokeh.pydata.org/en/latest/docs/dev_guide.html)* &mdash; If you are interesting in becoming a contributor to Bokeh, the developer's guide is the place to start. It has information about getting a development environment set up, the library architecture, writing and running tests, and more.

---
title: 'Opportunities for New Contributors'
date: 2019-11-08
author: Carolyn Hulsey
featured_image:
excerpt: >
  Our first post of a regular feature focusing on entry points for new contributors.
draft: false

---

We’re always excited when Bokeh users express interest in becoming contributors, and usually the first question is: how can I help?

Our [issue list on GitHub](https://github.com/bokeh/bokeh/issues) is a good place to start... but can be daunting if you're new to the project. To make things easier for you, several of these are tagged [**good first issue**](https://github.com/bokeh/bokeh/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), which are some of the more accessible fixes and improvements, and a great way for a new contributor to make a difference. Good first issues generally come in two flavors: technical, but specific and contained; and less technical but broad, touching several aspects of the project to accomplish a goal.

We’ve chosen some of these good first issues to highlight, and encourage our users to get involved. For all of these, contributors should feel free to add to the discussion of the issue and get a clear picture of how best to solve the problem. If you have a question about an issue, chances are very good that other people have the same question!

We’d like to make this a regular feature on the Bokeh blog, to encourage new contributors on an ongoing basis. Here’s our inaugural list.

### Good First Issues

* **Document bokeh.sampledata ([9329](https://github.com/bokeh/bokeh/issues/9329))**. This section of our [Reference Guide](http://docs.bokeh.org/en/latest/docs/reference/sampledata.html) is nearly empty! The GitHub issue includes a couple of suggestions for how to address this.
* **Add fill properties to slope ([9194](https://github.com/bokeh/bokeh/issues/9194))**.  This one proposes the ability to shade an infinite area above or below a linear boundary. The issue poses this as a modification to the [Slope](http://docs.bokeh.org/en/latest/docs/user_guide/annotations.html#slopes) annotation.
* **Support semi-infinite bands ([6767](https://github.com/bokeh/bokeh/issues/6767))**. This one’s a similar concept: the ability to have a [Band](http://docs.bokeh.org/en/latest/docs/user_guide/annotations.html#bands) with only one boundary, so that the filled area extends infinitely.
* **Add a progress bar to bokeh widget list ([6556](https://github.com/bokeh/bokeh/issues/6556))**. This is one that would benefit a lot of users, and requires both Python and TypeScript components; the core team is happy to help interested contributors with examples and direction.
* **Expose tap and hover tool hit radius ([2230](https://github.com/bokeh/bokeh/issues/2230))**. Originally brought up in a [Stack Overflow question](https://stackoverflow.com/questions/29923118/how-to-increase-click-radius-in-bokeh) about making it easier to select points with [TapTool](http://docs.bokeh.org/en/latest/docs/reference/models/tools.html?highlight=hovertool#bokeh.models.tools.TapTool) and [HoverTool](http://docs.bokeh.org/en/latest/docs/reference/models/tools.html?highlight=hovertool#bokeh.models.tools.HoverTool).
* **GridPlot ignores ‘title’ property ([1449](https://github.com/bokeh/bokeh/issues/1449))**. In a [gridplot layout](http://docs.bokeh.org/en/latest/docs/user_guide/layout.html?highlight=gridplot#grids-layout-for-plots), it would be useful to be able to set a single master title that refers to all of the plots in the layout. This issue also lists a couple of approaches to get this top-level title working.

Also, as always, we are interested to see what you make. Our examples gallery could use some fresh new instances of Bokeh at work. Our examples focus on readable code that illustrate how to use Bokeh; there are interactive applications that show how to leverage Bokeh Server, but also plenty of simple or static plots that act as clear visual references for users who are exploring their options for visualization within the library. So whatever you’re designing, big or small, we’d love to see it and consider it for inclusion in our examples set!

----



As always, anyone interested in helping out should drop by the
[Dev Chat Channel](https://gitter.im/bokeh/bokeh-dev) and say hello!

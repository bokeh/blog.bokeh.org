---
title: 'Enjoying the bokeh.models API'
date: 2017-07-05
author: Luke Canavan
featured_image:
excerpt: Develop bespoke visualizations using the low-level bokeh.models interface.
redirect_from:
  - /blog/2017/7/5/idiomatic_bokeh/
---

#### Prior Art

I was inspired to write a cookbook-style bokeh educational guide after reading
Tom Auspurger's recent [Modern Pandas](https://tomaugspurger.github.io/modern-1.html)
series. As a Bokeh developer who has written a lot of Bokeh visualizations,
I've developed a some personal opinions on best practices for using Bokeh. A
great resource for following along is the
[User Guide](https://bokeh.pydata.org/en/latest/docs/user_guide.html)
section of the Bokeh documentation.

#### Introduction

Let's define some Bokeh terminology before diving into things. In Bokeh, Models
represent all the parts of your visualization: plots, data sources,
axes, tools, etc. They are classes that have some defined properties
(i.e. `Plot` models have a `plot_height` and `plot_width`), as well as
some associated event handling (i.e. changing the
`Plot.background_fill_color` property will cause the plot to re-render and
update the background_fill_color).

[Models Reference](https://bokeh.pydata.org/en/latest/docs/reference/models.html)

Glyphs are a subset of Models and represent Bokeh's plotting primitives-
the Lines, Circles and Rects that compose visualizations. You could think
of them as the equivalent to D3's elements.

[Glyphs Reference](https://bokeh.pydata.org/en/latest/docs/reference/models/glyphs.html)

Bokeh has two main API levels for assemble these Models and Glyphs into
full-fledged visualization:
* `bokeh.plotting` for mid-level, with reasonable defaults for conciseness
* `bokeh.models` for low-level, very explicit development

Additionally, some libraries built on top of Bokeh offer an even higher
level of abstraction such as [HoloViews](http://holoviews.org/).

There are several valid Bokeh-development patterns, but I find the low-level,
primitives-based bokeh.models API to be ideal for developing custom, bespoke
visualizations. Under the hood, Bokeh generates a JSON blob called a
"scenegraph" that describes the visualization (a "Document" in Bokeh) and
is consumed by the BokehJS client library in order to render an output.
You can view this scenegraph via the `Document.to_json` method, though it's
generally not friendly by humans.

It's helpful to know that all Bokeh visualizations boil down to a collection
of models and attributes. In order to build up a scenegraph, you just have to
build up a collection of models. There's not any magic beyond that.

Please note, I haven't used Bokeh much in an exploratory
manner, so I don't know how well the below workflow fits. Usually I have an
idea of the shape of my data and what my intended visualization looks like.

-----

#### Using the ``bokeh.models.plots.Plot`` object

The basis of using the low-level `bokeh.models` API is building visualizations
using the `Plot` Model. A `Plot` object is the foundation onto which any
Bokeh visualization is composed - it holds all of axes, grids, glyphs and
toolbar tools. Additionally, there are a few Plot-specific properties like
height, width and background color. A good reference for understanding these
is the `Plot`
[documentation](https://bokeh.pydata.org/en/latest/docs/reference/models/plots.html#bokeh.models.plots.Plot).

You only have to specify a `Plot` object's `x_range` and `y_range`
attributes for it to be renderable. Creating a range-only Plot will yield an
empty rectangle when passed to the `bokeh.io.show` method, which is exactly
what we expect. It's an empty canvas without any axes, glyphs or tools!

```python
from bokeh.models import Plot, Range1d

plot = Plot(x_range=Range1d(), y_range=Range1d(), plot_height=200)
```

<div>
<center>
  <script
      src="/js/idiomatic-bokeh/blank_plot.js"
      id="e63c762d-2c1b-4167-8711-ac61da385d54"
      data-bokeh-model-id="37768dfd-9456-416e-9830-003e03dbf404"
      data-bokeh-doc-id="c659cace-3466-420f-941e-e3a889e3164f"
  ></script>
</center>
</div>

This is exciting stuff!

##### Defining Ranges: Using a Range1d vs FactorRange vs DataRange1d

There are three range types and it's helpful to pick the right one. You use the
`Range1d` Model when you want to set the start and end values of your range,
regardless of what data is being plotted. For example, I would use a Range1d
when I want a range to span from 0 - 100%, even if my data's range is from 12 - 94%.

```python
range = Range(start=0, end=100)
```

The `FactorRange` Model is similar to the Range1d model, except that handles
categorical values instead of continuous ones. An example situation to use
a FactorRange is when plotting values by months of the year.

```python
range = FactorRange(factors=["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
```

You use a `DataRange1d` Model when you want the range to reflect the extent
of your plotted data. For example, Dask.distributed uses Bokeh for its
diagnostic web interface [link](https://distributed.readthedocs.io/en/latest/web.html).
The interface takes advantage of a several DataRange1d models to plot the
progress of computation tasks and CPU/memory usage over time. The DataRange1d
inspects the min and max of the plotted values and automatically adjusts the
visible range accordingly.

```python
range = DataRange1d()
```

One new requirement in Bokeh 0.12.6 is that range models correspond with an
appropriate `Scale` Model (which maps between screen and data space) on
the same dimension. If you have a misconfigured Range and Scale pair, you'll
raise a validation error.

-----

#### Additive development, not subtractive or mutative

In general, I prefer to develop Bokeh visualizations in an additive way,
where each element or interaction is explicitly inserted. The result is usually
more verbose, but I feel the code is easier to write and read later.

I think it's best to show a counter-example to demonstrate the model mutation
and deletion tangle I'm hoping to avoid. The core of the bokeh.plotting API is
the `figure` method, which creates a subclassed instance of Plot with defaults
related to ranges, axes, grids, tools, etc.

```python
from bokeh.plotting import figure

plot = figure()
```

These defaults are very reasonable and many can be modified via arguments to
the `figure` method. In my experience, however, they often include models I
need to remove or modify and my code starts to look like this:

```python
from bokeh.plotting import figure

plot = figure()

# hide the x and y grids
plot.xgrid.visible = False
plot.ygrid.visible = False

# change x axis defaults
plot.xaxis[0].ticker = BasicTicker(num_desired_ticks=2)
plot.xaxis[0].formatter = NumericalTickFormatter(format="0b")
plot.xaxis[0].min_tick_line_width = 4
plot.xaxis[0].major_tick_line_width = 2
```

At this level of customization, it's easier to explicitly set the property
values in the Models' `__init__` methods and not have created unwanted Models
in the first place. The code below generated the same output as above, but reads
more cleanly.

```python
plot = Plot()

x_axis = LinearAxis(
  formatter=NumericalTickFormatter(format="0b"),
  ticker=BasicTicker(num_desired_ticks=2),
  min_tick_line_width=4,
  major_tick_line_width=2)
y_axis = LinearAxis()

plot.add_layout(x_axis, 'below')
plot.add_layout(y_axis, 'left')
```

#### Tools

I generally only include a single tool with non-default attributes in finalized
visualizations, whether it's a HoverTool with a custom tooltips or a TapTool
that initiates some sort of custom interaction. Therefore, instead of selecting
and mutating a tool that is added by default in via the `figure` method, it's
cleaner to explicitly create and add tools.

```python

# Don't do this
hover = plot.select_one(HoverTool)
hover.tooltips = my_custom_tooltips
hover.line_policy = 'nearest'
pan = plot.select_one(PanTool)
pan.dimension = 'x'

# Do this instead
hover_tool = HoverTool(tooltips=my_custom_tooltips, line_policy='nearest')
pan_tool = PanTool(dimension="x")
plot.add_tools(hover_tool, pan_tool)
```

The `figure` method also supports adding tools like this or via the
__init__ method (i.e. ``figure(tools=[hover_tool, pan_tool])), so it may be a
good habit to build.

#### Glyphs

Glyphs are added via the `Plot.add_glyph` method, which requires creating
a ColumnDataSource instead of optionally creating one (or implicitly having
it happen internally) like the convenience glyphs methods of `Figure`.

The string keyword argument values are matched up against equally-named columns
in the ColumnDataSource while single values are broadcast across all of the
glyphs.

#### Adding glyphs

```python
source = ColumnDataSource(data=dict(
  x=[5, 10, 15], y=[3, 2, 3], height=[1, 1, 1]
))

plot.add_glyph(
  source,
  Rect(x='x', y='y', width=10, height='height', fill_color='red', line_color='blue'))
```

#### Wrap up

Using the bokeh.models interface trades a little extra typing for a simpler
incremental approach to building interactive visualizations. Refactoring code
developed in this way is easier because it's obvious where elements of the
visualization are created and added. All-in-all, I think it's the way to go

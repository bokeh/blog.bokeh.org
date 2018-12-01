---
title: 'Styling Bokeh Visualizations'
date: 2017-07-24
author: Luke Canavan
featured_image:
excerpt: Strategies for managing Bokeh styling code.
redirect_from:
  - /blog/2017/7/24/styling-bokeh/
---


#### Introduction

Web developers typically confine their business logic code into JS files,
their layouts into HTML templates, and their styling into CSS files. This
decoupling makes navigating and working on a code base easier.

In Bokeh, it's just as valuable to decouple the styles of your Models from the
business logic that generates them. In this post, I'll share two ways I've
found helpful for doing this.

Additionally, I've created a Monokai-inspired dark theme for Bokeh that you
can use. It makes Bokeh visualizations look like this:

<div>
<br>
<center>
<script
    src="/js/styling-bokeh/auto_theme.js"
    id="03c6e4fc-3d9c-46d8-a343-9a51b7339794"
    data-bokeh-model-id="8d155e08-7d33-4fb5-84fd-7a7738e994df"
    data-bokeh-doc-id="58e8b09d-d61a-49c7-b541-2404988bbc89"
></script>
</center>
<br>
</div>

You can download the Theme file
[here](https://gist.github.com/canavandl/4ed8e3d1fccacfb9b5b237821decfda7)
and read below about how to use it.

#### Using Styling Dictionaries

One solution to separating styles from implementation is to create an adjacent
python module (I generally call it "styles.py") that contains dictionaries of
Bokeh style properties for Models. To me, the distinction of whether something
belongs in the styles dictionary or business logic is whether it's based on
data. If a Glyph color is computed based on some data value, it belongs in the
business logic. Otherwise, it should go in a styles dictionary. Based on that
rubric, I'll even include some simple Bokeh Models like Tickers and Formatters
in my styles dictionary.

Here's an example styles module:

```python
#### contents of styles.py

from bokeh.models import BasicTicker, PrintfTickFormatter

DARK_GRAY = "#282828"
BROWN_GRAY = "#49483E"

PLOT_OPTS = dict(
  background_fill_color=DARK_GRAY,
  border_fill_color=DARK_GRAY,
  outline_line_color=BROWN_GRAY,
  plot_height=600,
  plot_width=800
)

AXIS_OPTS = dict(
  axis_label_standoff=10,
  axis_label_text_font_size="15pt",
  axis_line_color=BROWN_GRAY,
  ticker=BasicTicker(num_minor_ticks=2),
  formatter=PrintfTickFormatter(format="%4.1e")
)

```

Next, I'll splat these style dictionaries into the appropriate Models when
instantiating them. Here's how it looks in practice:

```python
from bokeh.models import Plot, Range1d, LinearAxis
from .styles import PLOT_OPTS, AXIS_OPTS

plot = Plot(x_range=Range1d(), y_range=Range1d(), **PLOT_OPTS)
plot.add_layout(
  LinearAxis(**AXIS_OPTS), "left"
)
plot.add_layout(
  LinearAxis(**AXIS_OPTS), "below"
)

```

The benefit of using style dictionaries is their simplicity. They make
visualization code much shorter and readable because they pull out all of your
styling code into a separate module. I think styles dictionaries most useful
for simpler visualization, perhaps embedding a single plot within a web app.

#### Using Bokeh Themes

The alternative to using styling dictionaries is creating Bokeh Themes. Themes
are a specification for creating custom defaults for Bokeh Models via a YAML
file or a JSON. I think that Themes are a fantastic way to maintaining a
consistent style across a larger set of visualizations because you don't have
to remember to explicitly add styles to individual models. Here's an example of
a YAML theme file:

```yaml
#### contents of theme.yaml
attrs:
    Plot:
        background_fill_color: "#282828"
        border_fill_color: "#282828"
        outline_line_color: "#49483E"
    Axis:
        axis_label_standoff: 10
        axis_label_text_font_size="15pt"
        axis_line_color: "#49483E"
    BasicTicker:
        num_minor_ticks: 2
    PrintfTickFormatter:
        format: "%4.1e"

```

When you set your Document's ``theme`` property, all of your custom styles
are applied to the appropriate models. You can read more in the [Themes
documentation](https://bokeh.pydata.org/en/latest/docs/reference/themes.html#bokeh-themes).

Here, we're attaching our Theme to our Bokeh Document:

```python
from bokeh.theme import Theme

theme = Theme(filename="./theme.yaml")

doc = Document(theme=theme) #### or Document().theme = theme
doc.add_root(plot)

```

Now the Axis styles in our yaml file are applied to all Axis Models within
our Document!

#### When to Use Styling Dictionaries or Themes

The styling dictionary approach seems to work best when developing via the
``bokeh.models`` API, where you're explicitly creating and adding all of your
models. (You can read my previous
[blog post](https://bokeh.github.io/blog/2017/7/5/idiomatic_bokeh/) about the
bokeh.models API). In the ``bokeh.plotting`` API some plot components, like
axes for example, are implicitly created inside the ``figure`` method. This is
where Themes may be better solution because they will automatically be applied
to all relevant Models.

What if you want different styles for the same model type? It's possible to
have different style dictionaries for distinct model instances (i.e. having
``X_AXIS_OPTS`` and ``Y_AXIS_OPTS`` dicts for a LinearAxis Model).
Alternatively, since Themes just change the model defaults, it's possible to
override the new defaults however you normally would.

Finally, Themes are easier to share with others. You should be able to
download or copy and paste the Theme file from
[here](https://gist.github.com/canavandl/4ed8e3d1fccacfb9b5b237821decfda7)
into a local file and attach it to any visualization you already have.

#### Grab Bag of Bokeh Styling Tips

Unrelated to styling dictionaries or themes, I have a couple of styling
pro-tips that I'd like to share:

* If you want your HTML body (or whatever HTML element your layout is inside of)
style to be visible behind your plots, set the Plot ``background_fill_color``
and ``border_fill_color`` attributes to ``None``.
* If you want to add custom CSS to your layout (i.e. in order to change the html
body background color) you can specify a custom template for your Document and
either inline or load your custom CSS there.

#### Conclusion

Bokeh's styling is very nice by default. However, extending Bokeh with your
own custom styles can add an impressive level of polish to your visualizations.
Now that you're an expert in styling, here are some things to do next:

* Try out the dark theme and share your feedback
* Develop a theme of your own and share with us

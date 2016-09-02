document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("565e9069-85b7-4a81-a5c2-b3974428fad7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '565e9069-85b7-4a81-a5c2-b3974428fad7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/dev/bokeh-0.12.2rc1.min.js', 'https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.2rc1.min.js', 'https://cdn.pydata.org/bokeh/dev/bokeh-compiler-0.12.2rc1.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              for (var name in modules) {
                var module = modules[name];
          
                if (typeof(module) === "string") {
                  try {
                    coffee = Bokeh.require("coffee-script")
                  } catch (e) {
                    throw new Error("Compiler requested but failed to import. Make sure bokeh-compiler(-min).js was included.")
                  }
          
                  function compile(code) {
                    var body = coffee.compile(code, {bare: true, shiftLine: true});
                    return new Function("require", "module", "exports", body);
                  }
          
                  modules[name] = [compile(module), {}];
                }
              }
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                Bokeh.Models.register_locations(Bokeh.require(entry[i]));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })({
           "custom/main":[function(require,module,exports){
             module.exports = { LatexLabel: require("custom/latex_label") };
           }, {}],
           "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"943cbb8d-8a50-4dcd-a206-10647f964cc2":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},"ticker":{"id":"9367bfef-0853-4e74-afb1-b2f1a646cfed","type":"BasicTicker"}},"id":"c3a2041b-d5e4-4360-aeba-fd7334286b26","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e81394e-630a-4c02-b3a2-d21e20b30a63","type":"Line"},{"attributes":{},"id":"6fcd16ca-d96e-4579-9ebf-ba6ed0b1e898","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"04da157c-11fc-4e25-bace-86839fb4b7aa","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a8a78105-a06a-46cf-b683-ebd671d3d180","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2,0.21,0.22,0.23,0.24,0.25,0.26,0.27,0.28,0.29,0.3,0.31,0.32,0.33,0.34,0.35000000000000003,0.36,0.37,0.38,0.39,0.4,0.41000000000000003,0.42,0.43,0.44,0.45,0.46,0.47000000000000003,0.48,0.49,0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.5700000000000001,0.58,0.59,0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.6900000000000001,0.7000000000000001,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.8,0.81,0.8200000000000001,0.8300000000000001,0.84,0.85,0.86,0.87,0.88,0.89,0.9,0.91,0.92,0.93,0.9400000000000001,0.9500000000000001,0.96,0.97,0.98,0.99,1.0],"y":[3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.8090169943749475,2.7289686274214118,2.6374239897486897,2.5358267949789965,2.425779291565073,2.3090169943749475,2.187381314585725,2.0627905195293135,1.9372094804706865,1.8126186854142752,1.6909830056250525,1.5742207084349271,1.4641732050210032,1.3625760102513103,1.2710313725785887,1.1909830056250525,1.1236933199561365,1.0702235141117487,1.031416838871369,1.0078852986855222,1.0,1.007885298685522,1.031416838871369,1.0702235141117487,1.1236933199561363,1.1909830056250525,1.2710313725785884,1.3625760102513103,1.4641732050210037,1.5742207084349278,1.6909830056250525,1.8126186854142754,1.9372094804706868,2.062790519529313,2.1873813145857244,2.3090169943749475,2.425779291565073,2.535826794978996,2.6374239897486893,2.7289686274214113,2.8090169943749475,2.8763066800438635,2.9297764858882513,2.968583161128631,2.9921147013144775,3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.809016994374947,2.728968627421411,2.6374239897486897,2.5358267949789974,2.425779291565073,2.309016994374948,2.187381314585725,2.0627905195293135,1.9372094804706872,1.812618685414275,1.690983005625053,1.5742207084349267,1.4641732050210035,1.3625760102513094,1.2710313725785882,1.1909830056250528,1.123693319956137,1.0702235141117487,1.031416838871369,1.007885298685522,1.0,1.007885298685522,1.031416838871369,1.0702235141117482,1.1236933199561365,1.1909830056250523,1.2710313725785891,1.3625760102513103,1.4641732050210043,1.574220708434926,1.690983005625052,1.8126186854142743,1.9372094804706865,2.0627905195293126,2.187381314585725,2.309016994374947,2.4257792915650733,2.5358267949789965,2.63742398974869,2.7289686274214118,2.8090169943749475,2.876306680043863,2.9297764858882513,2.968583161128631,2.992114701314478,3.0]}},"id":"3f0f3802-937d-4f3d-8e47-55fb65590f1d","type":"ColumnDataSource"},{"attributes":{},"id":"9367bfef-0853-4e74-afb1-b2f1a646cfed","type":"BasicTicker"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"59896697-9777-4de8-9018-0c48e58de0bc","type":"SaveTool"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},"ticker":{"id":"9591e8de-da55-4422-91fb-084d680a7427","type":"BasicTicker"}},"id":"671d2ea2-ac08-4c86-a4c4-0d87bc399192","type":"Grid"},{"attributes":{"callback":null},"id":"fb204aff-6f27-4855-bc71-7b9d7fb05faa","type":"DataRange1d"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"268c6f8d-3828-46a1-aacc-15d58c59dd39","type":"PanTool"},{"attributes":{},"id":"9591e8de-da55-4422-91fb-084d680a7427","type":"BasicTicker"},{"attributes":{},"id":"c0356dae-74dc-44ca-9948-0708ba242df4","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"a8a78105-a06a-46cf-b683-ebd671d3d180","type":"BoxAnnotation"},"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"c781574b-e74c-476c-8622-52638ed20e8d","type":"BoxZoomTool"},{"attributes":{},"id":"4a34bea3-ae8d-4265-b92a-98501d62d05f","type":"ToolEvents"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"f92a29dc-d4f7-4cf0-a369-14d847c61383","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe5f956a-19a0-4258-8a4f-a3421e443bef","type":"Line"},{"attributes":{"axis_label":"time (s)","formatter":{"id":"6fcd16ca-d96e-4579-9ebf-ba6ed0b1e898","type":"BasicTickFormatter"},"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},"ticker":{"id":"9591e8de-da55-4422-91fb-084d680a7427","type":"BasicTicker"}},"id":"86521be5-7c70-4b66-a5b5-72f91a7f332d","type":"LinearAxis"},{"attributes":{"axis_label":"voltage (mV)","formatter":{"id":"c0356dae-74dc-44ca-9948-0708ba242df4","type":"BasicTickFormatter"},"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},"ticker":{"id":"9367bfef-0853-4e74-afb1-b2f1a646cfed","type":"BasicTicker"}},"id":"4822b6cd-ddf5-48ae-a355-eb2d56b242b2","type":"LinearAxis"},{"attributes":{"below":[{"id":"86521be5-7c70-4b66-a5b5-72f91a7f332d","type":"LinearAxis"}],"left":[{"id":"4822b6cd-ddf5-48ae-a355-eb2d56b242b2","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"86521be5-7c70-4b66-a5b5-72f91a7f332d","type":"LinearAxis"},{"id":"671d2ea2-ac08-4c86-a4c4-0d87bc399192","type":"Grid"},{"id":"4822b6cd-ddf5-48ae-a355-eb2d56b242b2","type":"LinearAxis"},{"id":"c3a2041b-d5e4-4360-aeba-fd7334286b26","type":"Grid"},{"id":"a8a78105-a06a-46cf-b683-ebd671d3d180","type":"BoxAnnotation"},{"id":"32961d95-7696-4501-96f0-be7408fffcd2","type":"GlyphRenderer"},{"id":"df8c5fb9-2e87-4632-b91f-bc5731d2e055","type":"LatexLabel"}],"title":{"id":"0dc03c2f-1d89-4d9c-9632-b914af62d87f","type":"Title"},"tool_events":{"id":"4a34bea3-ae8d-4265-b92a-98501d62d05f","type":"ToolEvents"},"toolbar":{"id":"d89924dc-cf84-4810-a6a9-5db77ce9adbe","type":"Toolbar"},"x_range":{"id":"04da157c-11fc-4e25-bace-86839fb4b7aa","type":"DataRange1d"},"y_range":{"id":"fb204aff-6f27-4855-bc71-7b9d7fb05faa","type":"DataRange1d"}},"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"268c6f8d-3828-46a1-aacc-15d58c59dd39","type":"PanTool"},{"id":"465007fd-027f-4dcb-a02f-892a61f56d0d","type":"WheelZoomTool"},{"id":"c781574b-e74c-476c-8622-52638ed20e8d","type":"BoxZoomTool"},{"id":"59896697-9777-4de8-9018-0c48e58de0bc","type":"SaveTool"},{"id":"0fd49ba2-cc5c-4ee3-a858-1b5dc40f4388","type":"ResetTool"},{"id":"f92a29dc-d4f7-4cf0-a369-14d847c61383","type":"HelpTool"}]},"id":"d89924dc-cf84-4810-a6a9-5db77ce9adbe","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}","text_font_size":{"value":"16pt"},"x":55,"x_units":"screen","y":445,"y_units":"screen"},"id":"df8c5fb9-2e87-4632-b91f-bc5731d2e055","type":"LatexLabel"},{"attributes":{"data_source":{"id":"3f0f3802-937d-4f3d-8e47-55fb65590f1d","type":"ColumnDataSource"},"glyph":{"id":"1e81394e-630a-4c02-b3a2-d21e20b30a63","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"fe5f956a-19a0-4258-8a4f-a3421e443bef","type":"Line"},"selection_glyph":null},"id":"32961d95-7696-4501-96f0-be7408fffcd2","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"0dc03c2f-1d89-4d9c-9632-b914af62d87f","type":"Title"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"465007fd-027f-4dcb-a02f-892a61f56d0d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"98d01587-0cb6-446e-8df6-820154ed4151","subtype":"Figure","type":"Plot"}},"id":"0fd49ba2-cc5c-4ee3-a858-1b5dc40f4388","type":"ResetTool"}],"root_ids":["98d01587-0cb6-446e-8df6-820154ed4151"]},"title":"Bokeh Application","version":"0.12.2rc1-dirty"}};
                  var render_items = [{"docid":"943cbb8d-8a50-4dcd-a206-10647f964cc2","elementid":"565e9069-85b7-4a81-a5c2-b3974428fad7","modelid":"98d01587-0cb6-446e-8df6-820154ed4151"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-0.12.2rc1.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-0.12.2rc1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.2rc1.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.2rc1.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});
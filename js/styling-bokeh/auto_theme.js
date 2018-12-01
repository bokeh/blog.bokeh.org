(function() {
  var fn = function() {

    (function(global) {
      function now() {
        return new Date();
      }

      var force = false;

      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }





      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("03c6e4fc-3d9c-46d8-a343-9a51b7339794");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03c6e4fc-3d9c-46d8-a343-9a51b7339794' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];

      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },

        function(Bokeh) {

        },

        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"58e8b09d-d61a-49c7-b541-2404988bbc89":{"roots":{"references":[{"attributes":{"num_minor_ticks":2},"id":"57f0617b-7099-47ec-9a1b-e6eef1334dd3","type":"BasicTicker"},{"attributes":{},"id":"6448caee-c654-4385-bd62-4e046b5eb7b9","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Auto Model","axis_label_text_color":{"value":"#888888"},"axis_line_color":{"value":"#49483E"},"formatter":{"id":"6448caee-c654-4385-bd62-4e046b5eb7b9","type":"CategoricalTickFormatter"},"major_label_orientation":0.785,"major_label_text_color":{"value":"#888888"},"major_tick_line_color":{"value":"#49483E"},"minor_tick_line_color":{"value":"#49483E"},"plot":{"id":"8d155e08-7d33-4fb5-84fd-7a7738e994df","type":"Plot"},"ticker":{"id":"1b1f0763-d7c3-4a36-92ed-90b4c816cc2e","type":"CategoricalTicker"}},"id":"c9273577-4534-45e5-9359-50f6fa0791d4","type":"CategoricalAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"value":null},"top":{"field":"mpg"},"width":{"value":0.9},"x":{"field":"name"}},"id":"5590de10-5680-42e9-ba16-2c848b606438","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f9d80988-071c-4bdf-b714-0e759777cd27","type":"Toolbar"},{"attributes":{},"id":"9ffbf60d-0ac9-462f-8571-80f5ff1c9ac5","type":"BasicTicker"},{"attributes":{},"id":"80235c9a-e8d6-4e3e-8f69-e2be35a23193","type":"ToolEvents"},{"attributes":{},"id":"bcd379fb-6ab6-4283-911e-4c36f134197f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["amc rebel sst","buick skylark 320","chevrolet chevelle malibu","chevrolet impala","ford galaxie 500","ford torino","plymouth fury iii","plymouth satellite","pontiac catalina"]},"id":"35d986dc-147c-42be-be6f-5d9c3078932d","type":"FactorRange"},{"attributes":{},"id":"1b1f0763-d7c3-4a36-92ed-90b4c816cc2e","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":19,"start":10},"id":"788ff513-479d-463a-b8c0-6ec12231ad8d","type":"Range1d"},{"attributes":{"data_source":{"id":"acd40936-b15a-4bd9-87ee-b9ba59706e34","type":"ColumnDataSource"},"glyph":{"id":"5590de10-5680-42e9-ba16-2c848b606438","type":"VBar"},"hover_glyph":null,"muted_glyph":null},"id":"a32cd5ea-3bb7-48b0-9dc8-76d435323cd7","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"#49483E"},"grid_line_dash":[6,4],"plot":{"id":"8d155e08-7d33-4fb5-84fd-7a7738e994df","type":"Plot"},"ticker":{"id":"9ffbf60d-0ac9-462f-8571-80f5ff1c9ac5","type":"BasicTicker"}},"id":"b6e24c17-5ef2-4e1f-8f92-fb0c8ca2dc91","type":"Grid"},{"attributes":{"callback":null,"column_names":["color","mpg","name","index"],"data":{"color":["#E6DB74","#66D9EF","#F92672","#AE81FF","#75715E","#FD971F","#FFD569","#A6E22E","#529B2F"],"index":[3,1,0,6,5,4,7,2,8],"mpg":{"__ndarray__":"AAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAALEAAAAAAAAAuQAAAAAAAADFAAAAAAAAALEAAAAAAAAAyQAAAAAAAACxA","dtype":"float64","shape":[9]},"name":["amc rebel sst","buick skylark 320","chevrolet chevelle malibu","chevrolet impala","ford galaxie 500","ford torino","plymouth fury iii","plymouth satellite","pontiac catalina"]}},"id":"acd40936-b15a-4bd9-87ee-b9ba59706e34","type":"ColumnDataSource"},{"attributes":{"axis_label":"MPG","axis_label_text_color":{"value":"#888888"},"axis_line_color":{"value":"#49483E"},"formatter":{"id":"bcd379fb-6ab6-4283-911e-4c36f134197f","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#888888"},"major_tick_line_color":{"value":"#49483E"},"minor_tick_line_color":{"value":"#49483E"},"plot":{"id":"8d155e08-7d33-4fb5-84fd-7a7738e994df","type":"Plot"},"ticker":{"id":"57f0617b-7099-47ec-9a1b-e6eef1334dd3","type":"BasicTicker"}},"id":"12cfa7b2-0568-43b7-8afd-890cdeec8e25","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#282828"},"below":[{"id":"c9273577-4534-45e5-9359-50f6fa0791d4","type":"CategoricalAxis"}],"border_fill_color":{"value":"#282828"},"left":[{"id":"12cfa7b2-0568-43b7-8afd-890cdeec8e25","type":"LinearAxis"}],"outline_line_color":{"value":"#49483E"},"renderers":[{"id":"a32cd5ea-3bb7-48b0-9dc8-76d435323cd7","type":"GlyphRenderer"},{"id":"c9273577-4534-45e5-9359-50f6fa0791d4","type":"CategoricalAxis"},{"id":"12cfa7b2-0568-43b7-8afd-890cdeec8e25","type":"LinearAxis"},{"id":"b6e24c17-5ef2-4e1f-8f92-fb0c8ca2dc91","type":"Grid"}],"title":{"id":"c0538d3f-8347-4601-93b4-435de0f9dd9a","type":"Title"},"tool_events":{"id":"80235c9a-e8d6-4e3e-8f69-e2be35a23193","type":"ToolEvents"},"toolbar":{"id":"f9d80988-071c-4bdf-b714-0e759777cd27","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35d986dc-147c-42be-be6f-5d9c3078932d","type":"FactorRange"},"x_scale":{"id":"a6c0cdfb-569e-4d63-b771-c4b588b6341f","type":"CategoricalScale"},"y_range":{"id":"788ff513-479d-463a-b8c0-6ec12231ad8d","type":"Range1d"},"y_scale":{"id":"e2742fe4-885e-41d2-b0c1-8ff06d4cce4b","type":"LinearScale"}},"id":"8d155e08-7d33-4fb5-84fd-7a7738e994df","type":"Plot"},{"attributes":{"plot":null,"text":"Auto MPG by Car Model","text_color":{"value":"#CCCCCC"}},"id":"c0538d3f-8347-4601-93b4-435de0f9dd9a","type":"Title"},{"attributes":{},"id":"a6c0cdfb-569e-4d63-b771-c4b588b6341f","type":"CategoricalScale"},{"attributes":{},"id":"e2742fe4-885e-41d2-b0c1-8ff06d4cce4b","type":"LinearScale"}],"root_ids":["8d155e08-7d33-4fb5-84fd-7a7738e994df"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"58e8b09d-d61a-49c7-b541-2404988bbc89","elementid":"03c6e4fc-3d9c-46d8-a343-9a51b7339794","modelid":"8d155e08-7d33-4fb5-84fd-7a7738e994df"}];

                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

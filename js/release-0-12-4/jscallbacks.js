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
      };var element = document.getElementById("e938d7b9-355c-4a5f-b605-11621a96bd08");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e938d7b9-355c-4a5f-b605-11621a96bd08' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"79464cdd-56e4-43fa-a661-256d89a2cb2f":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f536faa9-bcc6-47bf-8d14-3d50ae0e8b74","type":"PanTool"},{"id":"0633d417-2ba6-4437-b447-16872fdc5557","type":"WheelZoomTool"},{"id":"ee5f4cd2-e40a-4e9b-8dbd-97d6c376913e","type":"BoxZoomTool"},{"id":"86ce8c77-5338-450d-856d-0967d2c7289e","type":"SaveTool"},{"id":"3509973d-6342-4899-94e6-624a96f005f0","type":"ResetTool"},{"id":"5d6e3536-7c89-43e4-94f7-4fb518a9f324","type":"HelpTool"}]},"id":"f41e9972-b059-4d4a-91de-82adc33ffcff","type":"Toolbar"},{"attributes":{"formatter":{"id":"88f2b480-7a8c-483b-b0df-e57df05ffb1d","type":"BasicTickFormatter"},"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b87e632-9ac6-4e69-b0b3-7fe1990b63cc","type":"BasicTicker"}},"id":"950dfc81-b561-4821-8d77-0a3fd11ecf05","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"1fb9680e-9ccc-482e-8185-c85984132f78","type":"ColumnDataSource"}},"code":"\n    x0 = cb_obj.start;\n    x1 = cb_obj.end;\n    eps = (x1-x0) / 100\n    for (i=0; i<101; i++) {\n        source.data.x[i] = x0 + i*eps\n        source.data.y[i] = Math.sin(source.data.x[i])\n    }\n    source.trigger('change')\n"},"id":"b717b840-46c7-49c9-8252-1c9568dc6281","type":"CustomJS"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a62b90f-8c2e-4b5a-b090-8e05b28ec891","type":"Line"},{"attributes":{"callback":null},"id":"563808ea-fe33-4bad-a646-151a127ec35e","type":"DataRange1d"},{"attributes":{"callback":null,"js_callbacks":{"change:end":[{"id":"b717b840-46c7-49c9-8252-1c9568dc6281","type":"CustomJS"}],"change:start":[{"id":"b717b840-46c7-49c9-8252-1c9568dc6281","type":"CustomJS"}]}},"id":"b75b6376-0c0b-4f09-a6dc-440058769337","type":"DataRange1d"},{"attributes":{},"id":"2b87e632-9ac6-4e69-b0b3-7fe1990b63cc","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"767c0bbf-171b-4a50-a0b1-af7c889e0bfc","type":"Line"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b87e632-9ac6-4e69-b0b3-7fe1990b63cc","type":"BasicTicker"}},"id":"590cc37c-9f4d-435a-a2a5-3c44053d7a09","type":"Grid"},{"attributes":{"data_source":{"id":"1fb9680e-9ccc-482e-8185-c85984132f78","type":"ColumnDataSource"},"glyph":{"id":"4a62b90f-8c2e-4b5a-b090-8e05b28ec891","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"767c0bbf-171b-4a50-a0b1-af7c889e0bfc","type":"Line"},"selection_glyph":null},"id":"b5970857-67e6-409f-aecb-2aaa4334a9a6","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1892649e-ee34-4a6d-bc45-2f00f00a4e42","type":"BasicTickFormatter"},"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b10ebf39-075f-4ecd-a0e2-4fa0b92508f0","type":"BasicTicker"}},"id":"409ef9bf-da20-4fda-a171-8fba5b30b564","type":"LinearAxis"},{"attributes":{},"id":"88f2b480-7a8c-483b-b0df-e57df05ffb1d","type":"BasicTickFormatter"},{"attributes":{},"id":"b10ebf39-075f-4ecd-a0e2-4fa0b92508f0","type":"BasicTicker"},{"attributes":{},"id":"5c8ba842-3664-437e-a116-5213cbf3fd67","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b10ebf39-075f-4ecd-a0e2-4fa0b92508f0","type":"BasicTicker"}},"id":"c626995b-ae7e-4614-88fb-545130673371","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ea746038-5c25-4b3e-a9e8-0068dd212940","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"f536faa9-bcc6-47bf-8d14-3d50ae0e8b74","type":"PanTool"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"0633d417-2ba6-4437-b447-16872fdc5557","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"ea746038-5c25-4b3e-a9e8-0068dd212940","type":"BoxAnnotation"},"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"ee5f4cd2-e40a-4e9b-8dbd-97d6c376913e","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Pan left and right and see the plot go on forever"},"id":"0e22f94b-dfa8-43c7-ae8b-d9798b0ed14e","type":"Title"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"86ce8c77-5338-450d-856d-0967d2c7289e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZm5P5qZmZmZmck/NDMzMzMz0z+amZmZmZnZPwAAAAAAAOA/NDMzMzMz4z9nZmZmZmbmP5qZmZmZmek/zczMzMzM7D8AAAAAAADwP5qZmZmZmfE/NDMzMzMz8z/NzMzMzMz0P2dmZmZmZvY/AAAAAAAA+D+amZmZmZn5PzQzMzMzM/s/zczMzMzM/D9nZmZmZmb+PwAAAAAAAABAzczMzMzMAECamZmZmZkBQGdmZmZmZgJANDMzMzMzA0AAAAAAAAAEQM3MzMzMzARAmpmZmZmZBUBnZmZmZmYGQDQzMzMzMwdAAAAAAAAACEDNzMzMzMwIQJqZmZmZmQlAZ2ZmZmZmCkA0MzMzMzMLQAAAAAAAAAxAzczMzMzMDECamZmZmZkNQGdmZmZmZg5ANDMzMzMzD0AAAAAAAAAQQGdmZmZmZhBAzczMzMzMEEAzMzMzMzMRQJqZmZmZmRFAAAAAAAAAEkBnZmZmZmYSQM3MzMzMzBJANDMzMzMzE0CamZmZmZkTQAAAAAAAABRAZ2ZmZmZmFEDNzMzMzMwUQDQzMzMzMxVAmpmZmZmZFUAAAAAAAAAWQGdmZmZmZhZAzczMzMzMFkA0MzMzMzMXQJqZmZmZmRdAAAAAAAAAGEBnZmZmZmYYQM3MzMzMzBhANDMzMzMzGUCamZmZmZkZQAAAAAAAABpAZ2ZmZmZmGkDNzMzMzMwaQDQzMzMzMxtAmpmZmZmZG0AAAAAAAAAcQGdmZmZmZhxAzczMzMzMHEA0MzMzMzMdQJqZmZmZmR1AAAAAAAAAHkBnZmZmZmYeQM3MzMzMzB5ANDMzMzMzH0CamZmZmZkfQAAAAAAAACBAMzMzMzMzIEBnZmZmZmYgQJqZmZmZmSBAzczMzMzMIEAAAAAAAAAhQDMzMzMzMyFAZ2ZmZmZmIUCamZmZmZkhQM3MzMzMzCFAAAAAAAAAIkAzMzMzMzMiQGdmZmZmZiJAmpmZmZmZIkDNzMzMzMwiQAAAAAAAACNANDMzMzMzI0BnZmZmZmYjQJqZmZmZmSNAzczMzMzMI0AAAAAAAAAkQA==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAAAAAsy4vLro65P7zSPSP/bck/NLq6lc3p0j9rZyvpOuzYP/AFS3Tort4/WkGlF40R4j+5GUZpbp3kP83+v8KU9OY/QKhdmAMR6T/uDAmPVO3qPzhjLUzFhOw/xVUaokPT7T9LHsX5d9XuPwPhRN/NiO8/i20sm3rr7z/FQuDHgfzvP7aYL9e3u+8/8BW9gcIp7z9XOBofF0juP0a00er2GO0//HLrP2mf6z8I16rZM9/pPyIvWC3R3Oc/mNHD9WSd5T+wys8NrybjP7uFoLv8fuA/DKckJDFa2z/A5V0jcnDVP9MwSNa4n84/W9W2bTgQwj8uEJiCD0qlPzIt6Dk3462/lwy3ygIxxL90TP8QyVrQvx9iun47c9a/8dHwQ0FS3L9BGy7savTgv6DA7P9WlOO/zrMfLS4C5r+uHtzduTfov73I4npTL+q/1xLQ3/Lj678ligE6O1Htv/AoRTGGc+6/gEDHPe1H77+67F0TUczvv1LsNw9f/++//z0MmpTg77+k6yJ2QHDvvzOZ4PWBr+6/uSLYHEag7b/XJLqyQkXsvzcSvFTvoeq/cAUyl3y66L9XsApOyZPmv7T1lhdWM+S/oMd6STef4b/K347HCrzdvxu9C2SY7de/wKKwivHh0b9c+zPXGVHHvx7NvttYRbW/fj/Lwqk3kT8sKjUvK9a9PzzLxkANics/kgnpL0vw0z/9iDWkD+nZPwkR6pqNn98/wBrYG5SC4j8ICm3CCAblP4tjZOG2U+c/D8njJbpl6T9JdB3cxjbrP/YpBXs3wuw/MK78hhgE7j8P+BCtMvnuP1hU7vwSn+8/L7eALBH07z+pXzrVU/fvP3vPKKDSqO8/Z7RJW1YJ7z8uM+n3dhruP1BhK3eX3uw/mvctz99Y6z/82V/YNI3pPy6xtFcugOc/96EuPws35T/d0spCpLfiP4A3I+RcCOA/kS8MNiZg2j8X2Z+JG2zUP2ub1R2oh8w/TyzOvj7cvz/iQUSoul6ZP3snpJQaPbO/KLcVCFdQxr9yobGuhmTRvwJus+BkdNe/cLYgoURI3b9TT/P1nmjhvw==","dtype":"float64","shape":[101]}}},"id":"1fb9680e-9ccc-482e-8185-c85984132f78","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"3509973d-6342-4899-94e6-624a96f005f0","type":"ResetTool"},{"attributes":{"plot":{"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"}},"id":"5d6e3536-7c89-43e4-94f7-4fb518a9f324","type":"HelpTool"},{"attributes":{"below":[{"id":"950dfc81-b561-4821-8d77-0a3fd11ecf05","type":"LinearAxis"}],"left":[{"id":"409ef9bf-da20-4fda-a171-8fba5b30b564","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"950dfc81-b561-4821-8d77-0a3fd11ecf05","type":"LinearAxis"},{"id":"590cc37c-9f4d-435a-a2a5-3c44053d7a09","type":"Grid"},{"id":"409ef9bf-da20-4fda-a171-8fba5b30b564","type":"LinearAxis"},{"id":"c626995b-ae7e-4614-88fb-545130673371","type":"Grid"},{"id":"ea746038-5c25-4b3e-a9e8-0068dd212940","type":"BoxAnnotation"},{"id":"b5970857-67e6-409f-aecb-2aaa4334a9a6","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"0e22f94b-dfa8-43c7-ae8b-d9798b0ed14e","type":"Title"},"tool_events":{"id":"5c8ba842-3664-437e-a116-5213cbf3fd67","type":"ToolEvents"},"toolbar":{"id":"f41e9972-b059-4d4a-91de-82adc33ffcff","type":"Toolbar"},"x_range":{"id":"b75b6376-0c0b-4f09-a6dc-440058769337","type":"DataRange1d"},"y_range":{"id":"563808ea-fe33-4bad-a646-151a127ec35e","type":"DataRange1d"}},"id":"f8e557d9-4434-466e-8d7c-a510d15cb7e7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1892649e-ee34-4a6d-bc45-2f00f00a4e42","type":"BasicTickFormatter"}],"root_ids":["f8e557d9-4434-466e-8d7c-a510d15cb7e7"]},"title":"Bokeh Application","version":"0.12.4"}};
                var render_items = [{"docid":"79464cdd-56e4-43fa-a661-256d89a2cb2f","elementid":"e938d7b9-355c-4a5f-b605-11621a96bd08","modelid":"f8e557d9-4434-466e-8d7c-a510d15cb7e7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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

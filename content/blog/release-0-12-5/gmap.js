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
      };var element = document.getElementById("2b7026f2-9f7a-4608-b958-dcd772383506");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b7026f2-9f7a-4608-b958-dcd772383506' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/dev/bokeh-0.12.5dev16.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.5dev16.min.js"];
    
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
                var docs_json = {"afb47a02-4c54-41ce-8acc-53d08d5c819e":{"roots":{"references":[{"attributes":{},"id":"ed6ef778-3633-4d94-8a6a-6e7d2088d06f","type":"ToolEvents"},{"attributes":{"callback":null},"id":"d2e617f3-06a5-48a6-acc0-b6205ebdf39a","type":"Range1d"},{"attributes":{"children":[{"id":"4eb26db7-7d2f-4ed6-8397-169f1efdca09","type":"Button"}]},"id":"183e4e2d-1745-4eac-9aac-5993df628dbd","type":"WidgetBox"},{"attributes":{"formatter":{"id":"a39752ac-8b1c-4b74-99af-12918f58de52","type":"MercatorTickFormatter"},"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"dbc79b9f-06c0-4570-9de3-47475c122959","type":"MercatorTicker"}},"id":"4ad139e0-59b3-43de-a519-6a0a688938a8","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"91c16532-62ed-48b5-be8b-895d63059612","type":"Circle"},{"attributes":{"children":[{"id":"813b831a-a6b4-404c-99d9-d6f7bfca2e68","type":"Button"}]},"id":"4d363203-9bbe-4738-bf75-f37b5adf4108","type":"WidgetBox"},{"attributes":{"dimension":"lon"},"id":"dbc79b9f-06c0-4570-9de3-47475c122959","type":"MercatorTicker"},{"attributes":{"dimension":"lat"},"id":"874a3be1-ac3d-426a-a664-ba43d19afd6c","type":"MercatorTicker"},{"attributes":{"callback":null,"column_names":["lat","lon","fill"],"data":{"fill":["orange","blue","green"],"lat":[30.2861,30.2855,30.2869],"lon":[-97.7394,-97.739,-97.7405]}},"id":"afdb4b20-3f02-4858-8f39-6136118ac219","type":"ColumnDataSource"},{"attributes":{"dimension":"lat"},"id":"74c027e0-a1fe-49d7-878a-eb009ad70084","type":"MercatorTickFormatter"},{"attributes":{"children":[{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"},{"id":"03f2494f-bc31-432b-b25f-40d5ad38f38f","type":"Row"}]},"id":"e9eec7ed-3b9b-4675-bb83-2732fe223578","type":"Column"},{"attributes":{"formatter":{"id":"74c027e0-a1fe-49d7-878a-eb009ad70084","type":"MercatorTickFormatter"},"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"874a3be1-ac3d-426a-a664-ba43d19afd6c","type":"MercatorTicker"}},"id":"7500c2e1-a655-4c26-93ee-64ce40f93053","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"fill"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"9e0a3213-84fa-42b3-9624-cce8022e9109","type":"Circle"},{"attributes":{"children":[{"id":"183e4e2d-1745-4eac-9aac-5993df628dbd","type":"WidgetBox"},{"id":"4d363203-9bbe-4738-bf75-f37b5adf4108","type":"WidgetBox"}]},"id":"03f2494f-bc31-432b-b25f-40d5ad38f38f","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"69f3e1dd-89a3-4821-8b68-eba6ff4398e9","type":"Title"},{"attributes":{"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"}},"id":"a1daa31b-b356-4a7d-91f2-4919c3806da0","type":"WheelZoomTool"},{"attributes":{"callback":{"id":"9a3477f8-1a93-4560-b701-0e1e3e2b3f4f","type":"CustomJS"},"icon":null,"label":"Toggle Scale Control"},"id":"813b831a-a6b4-404c-99d9-d6f7bfca2e68","type":"Button"},{"attributes":{"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"}},"id":"39c86655-9f2c-42a0-afc0-9551cf68b38c","type":"PanTool"},{"attributes":{"args":{"mo":{"id":"01d91acc-5c03-4e6e-b2b6-33c3b0f8837e","type":"GMapOptions"}},"code":"\n    if (mo.styles == null) {\n        mo.styles = '[{\"featureType\":\"administrative\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"lightness\":33}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2e5d4\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c5dac6\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"},{\"lightness\":20}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":20}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c5c6c6\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e4d7c6\"}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fbfaf7\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#acbcc9\"}]}]';\n        mo.map_type=\"roadmap\"\n    }\n    else {\n        mo.styles = null;\n        mo.map_type=\"hybrid\"\n    }\n"},"id":"d2095b0f-84db-48e3-a72d-d7a4eae2efa3","type":"CustomJS"},{"attributes":{"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"}},"id":"45b3d9ce-3646-45b2-9b76-c69c4c3a00b5","type":"ResetTool"},{"attributes":{"plot":{"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"}},"id":"bf40340e-bed2-44fc-b2e4-8eca8d4f4a76","type":"HelpTool"},{"attributes":{"args":{"mo":{"id":"01d91acc-5c03-4e6e-b2b6-33c3b0f8837e","type":"GMapOptions"}},"code":"\n    mo.scale_control = !mo.scale_control;\n"},"id":"9a3477f8-1a93-4560-b701-0e1e3e2b3f4f","type":"CustomJS"},{"attributes":{"data_source":{"id":"afdb4b20-3f02-4858-8f39-6136118ac219","type":"ColumnDataSource"},"glyph":{"id":"9e0a3213-84fa-42b3-9624-cce8022e9109","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"91c16532-62ed-48b5-be8b-895d63059612","type":"Circle"},"selection_glyph":null},"id":"12b82595-f075-4c5c-9701-6893f873ef12","type":"GlyphRenderer"},{"attributes":{"api_key":"AIzaSyAG36KKQQXdy-Z4Holpv3wiXDMcO057HgI","below":[{"id":"4ad139e0-59b3-43de-a519-6a0a688938a8","type":"LinearAxis"}],"left":[{"id":"7500c2e1-a655-4c26-93ee-64ce40f93053","type":"LinearAxis"}],"map_options":{"id":"01d91acc-5c03-4e6e-b2b6-33c3b0f8837e","type":"GMapOptions"},"renderers":[{"id":"4ad139e0-59b3-43de-a519-6a0a688938a8","type":"LinearAxis"},{"id":"7500c2e1-a655-4c26-93ee-64ce40f93053","type":"LinearAxis"},{"id":"12b82595-f075-4c5c-9701-6893f873ef12","type":"GlyphRenderer"}],"title":{"id":"69f3e1dd-89a3-4821-8b68-eba6ff4398e9","type":"Title"},"tool_events":{"id":"ed6ef778-3633-4d94-8a6a-6e7d2088d06f","type":"ToolEvents"},"toolbar":{"id":"71326e16-609b-428b-ba7f-92c4ee6da55f","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"3fa311fc-1bb2-40f6-b77f-bbcce4ac6b0f","type":"Range1d"},"y_range":{"id":"d2e617f3-06a5-48a6-acc0-b6205ebdf39a","type":"Range1d"}},"id":"0ea9b568-372f-43f4-9523-0d8985c50836","subtype":"GMap","type":"GMapPlot"},{"attributes":{"lat":30.2861,"lng":-97.7394,"styles":"\n[{\"featureType\":\"administrative\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"lightness\":33}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2e5d4\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c5dac6\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"},{\"lightness\":20}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":20}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c5c6c6\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e4d7c6\"}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fbfaf7\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#acbcc9\"}]}]\n","zoom":14},"id":"01d91acc-5c03-4e6e-b2b6-33c3b0f8837e","type":"GMapOptions"},{"attributes":{"dimension":"lon"},"id":"a39752ac-8b1c-4b74-99af-12918f58de52","type":"MercatorTickFormatter"},{"attributes":{"callback":{"id":"d2095b0f-84db-48e3-a72d-d7a4eae2efa3","type":"CustomJS"},"icon":null,"label":"Toggle Map Style"},"id":"4eb26db7-7d2f-4ed6-8397-169f1efdca09","type":"Button"},{"attributes":{"callback":null},"id":"3fa311fc-1bb2-40f6-b77f-bbcce4ac6b0f","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"39c86655-9f2c-42a0-afc0-9551cf68b38c","type":"PanTool"},{"id":"a1daa31b-b356-4a7d-91f2-4919c3806da0","type":"WheelZoomTool"},{"id":"45b3d9ce-3646-45b2-9b76-c69c4c3a00b5","type":"ResetTool"},{"id":"bf40340e-bed2-44fc-b2e4-8eca8d4f4a76","type":"HelpTool"}]},"id":"71326e16-609b-428b-ba7f-92c4ee6da55f","type":"Toolbar"}],"root_ids":["e9eec7ed-3b9b-4675-bb83-2732fe223578"]},"title":"Bokeh Application","version":"0.12.5dev16-3-g957066369-dirty"}};
                var render_items = [{"docid":"afb47a02-4c54-41ce-8acc-53d08d5c819e","elementid":"2b7026f2-9f7a-4608-b958-dcd772383506","modelid":"e9eec7ed-3b9b-4675-bb83-2732fe223578"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-0.12.5dev16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-0.12.5dev16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.5dev16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.5dev16.min.css");
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

(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("1125d527-a5d1-4882-9032-77fff062c52f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1125d527-a5d1-4882-9032-77fff062c52f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fdaeedc6-f208-4dac-b4eb-d5dc68a130d5":{"roots":{"references":[{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"c9895c68-34c5-4f62-a1b6-ca0291dad651","type":"Selection"},"selection_policy":{"id":"820c94c0-0bfa-4edd-ba52-e48405d910f4","type":"UnionRenderers"}},"id":"44523f02-a10a-48b0-a4b8-a1bc787b1922","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"9084dec4-df44-400c-b3a4-297d2f7092e4","type":"Title"},{"attributes":{"source":{"id":"697efb1f-6c27-46c2-9cf7-d523ae9b4ac4","type":"ColumnDataSource"}},"id":"c903f9fb-b829-45c7-997d-f3da5032b2bb","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"4962f984-2270-456f-b030-7aac410ae3ea","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"85965ec9-be40-4865-a819-d3454bc4f8ec","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"09351f42-b4f7-4179-9e7e-0f74448e01b1","type":"VBar"},{"attributes":{"below":[{"id":"5412d115-7b93-4451-9483-56ef626422ec","type":"CategoricalAxis"}],"left":[{"id":"21e0f63b-f573-41c6-83b9-1ac8d5086dbd","type":"LinearAxis"}],"min_border":70,"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"5412d115-7b93-4451-9483-56ef626422ec","type":"CategoricalAxis"},{"id":"db298d9e-925f-465b-97d9-544db8bfd5cd","type":"Grid"},{"id":"21e0f63b-f573-41c6-83b9-1ac8d5086dbd","type":"LinearAxis"},{"id":"4c91906c-433d-41a5-908d-e72a32167b1a","type":"Grid"},{"id":"1b1e32f1-f049-4ed4-bc51-6859c45cfbd7","type":"Legend"},{"id":"a654d939-b7c2-4eab-b5e1-7f7ac84c3294","type":"GlyphRenderer"},{"id":"52540665-f09d-493f-a467-c9e77decd65c","type":"GlyphRenderer"},{"id":"b2a6a75a-6855-4de5-b364-d75dce32ed1f","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"9084dec4-df44-400c-b3a4-297d2f7092e4","type":"Title"},"toolbar":{"id":"5b2191c0-d526-49a3-9314-eca52414956f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"998f9887-44e9-4907-81f6-d76d9d8b6631","type":"FactorRange"},"x_scale":{"id":"4f4e7fee-bd84-4618-80a3-f583e714d12e","type":"CategoricalScale"},"y_range":{"id":"d42d419b-de0c-419e-8ac6-6120cf4f6761","type":"DataRange1d"},"y_scale":{"id":"ac910554-bf75-47de-9caf-411ab8224035","type":"LinearScale"}},"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"4962f984-2270-456f-b030-7aac410ae3ea","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"85965ec9-be40-4865-a819-d3454bc4f8ec","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4bfb1ac6-1893-493f-918b-3aa4fbcb6199","type":"VBar"},{"attributes":{"data_source":{"id":"44523f02-a10a-48b0-a4b8-a1bc787b1922","type":"ColumnDataSource"},"glyph":{"id":"09351f42-b4f7-4179-9e7e-0f74448e01b1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"4bfb1ac6-1893-493f-918b-3aa4fbcb6199","type":"VBar"},"selection_glyph":null,"view":{"id":"8a21cbb9-5864-48a4-b305-04387d2fbd16","type":"CDSView"}},"id":"52540665-f09d-493f-a467-c9e77decd65c","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"998f9887-44e9-4907-81f6-d76d9d8b6631","type":"FactorRange"},{"attributes":{"source":{"id":"44523f02-a10a-48b0-a4b8-a1bc787b1922","type":"ColumnDataSource"}},"id":"8a21cbb9-5864-48a4-b305-04387d2fbd16","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"120e5af9-befc-4510-8559-4a8208d4b993","type":"HoverTool"}]},"id":"5b2191c0-d526-49a3-9314-eca52414956f","type":"Toolbar"},{"attributes":{},"id":"3b72866d-8d5a-4bca-bc01-8eca132c9d06","type":"Selection"},{"attributes":{"items":[{"id":"773cc199-31ac-462d-b1d7-83493d4a81cd","type":"LegendItem"},{"id":"3e7de349-77a6-4cc2-87f3-74a078248ff2","type":"LegendItem"},{"id":"1afdbb04-0d32-4aea-9c62-44e61659a1f1","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"}},"id":"1b1e32f1-f049-4ed4-bc51-6859c45cfbd7","type":"Legend"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"a654d939-b7c2-4eab-b5e1-7f7ac84c3294","type":"GlyphRenderer"}]},"id":"773cc199-31ac-462d-b1d7-83493d4a81cd","type":"LegendItem"},{"attributes":{},"id":"7f233d42-9b1d-4f88-870d-2624def833d1","type":"UnionRenderers"},{"attributes":{},"id":"4f4e7fee-bd84-4618-80a3-f583e714d12e","type":"CategoricalScale"},{"attributes":{},"id":"c98a139f-ef0d-4160-9780-7e1321ef958f","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"52540665-f09d-493f-a467-c9e77decd65c","type":"GlyphRenderer"}]},"id":"3e7de349-77a6-4cc2-87f3-74a078248ff2","type":"LegendItem"},{"attributes":{"callback":null,"start":0},"id":"d42d419b-de0c-419e-8ac6-6120cf4f6761","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"6ddae3d6-9c6c-4897-92d9-f98439c37abf","type":"Selection"},"selection_policy":{"id":"927894e6-a3ca-45ed-8fc9-49abaad2f352","type":"UnionRenderers"}},"id":"540c9bc8-c165-42cf-bd53-b1ce82cf0941","type":"ColumnDataSource"},{"attributes":{},"id":"ac910554-bf75-47de-9caf-411ab8224035","type":"LinearScale"},{"attributes":{"formatter":{"id":"a65ab955-bd12-4357-9098-b909811a59c8","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cf896f2-c57d-45af-ba63-f10204a8b800","type":"BasicTicker"}},"id":"21e0f63b-f573-41c6-83b9-1ac8d5086dbd","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"a9690101-9654-4df3-b057-e84c2619da09","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"aa0b6cdd-855f-4dcb-bf25-18e31bd10ee3","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"09cff920-9b45-4d9d-8080-f2a2eec67e25","type":"VBar"},{"attributes":{"formatter":{"id":"c98a139f-ef0d-4160-9780-7e1321ef958f","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae907913-910c-4fa4-b39b-d5784343fec5","type":"CategoricalTicker"}},"id":"5412d115-7b93-4451-9483-56ef626422ec","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"a9690101-9654-4df3-b057-e84c2619da09","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"aa0b6cdd-855f-4dcb-bf25-18e31bd10ee3","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"08f02d3a-dcaa-4356-96f4-2dd4c5b56147","type":"VBar"},{"attributes":{},"id":"ae907913-910c-4fa4-b39b-d5784343fec5","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"95689009-ec20-4714-9475-af84fc940212","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"6c0752c1-591c-4709-b7c9-a302e0539522","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e5ecfa27-566a-4451-969f-865132c0896b","type":"VBar"},{"attributes":{"data_source":{"id":"540c9bc8-c165-42cf-bd53-b1ce82cf0941","type":"ColumnDataSource"},"glyph":{"id":"09cff920-9b45-4d9d-8080-f2a2eec67e25","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"08f02d3a-dcaa-4356-96f4-2dd4c5b56147","type":"VBar"},"selection_glyph":null,"view":{"id":"239b358e-bdf8-4341-b7a9-2e6bbe72720d","type":"CDSView"}},"id":"b2a6a75a-6855-4de5-b364-d75dce32ed1f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cf896f2-c57d-45af-ba63-f10204a8b800","type":"BasicTicker"}},"id":"4c91906c-433d-41a5-908d-e72a32167b1a","type":"Grid"},{"attributes":{"source":{"id":"540c9bc8-c165-42cf-bd53-b1ce82cf0941","type":"ColumnDataSource"}},"id":"239b358e-bdf8-4341-b7a9-2e6bbe72720d","type":"CDSView"},{"attributes":{},"id":"c9895c68-34c5-4f62-a1b6-ca0291dad651","type":"Selection"},{"attributes":{"fields":["2015"]},"id":"6c0752c1-591c-4709-b7c9-a302e0539522","type":"Stack"},{"attributes":{},"id":"820c94c0-0bfa-4edd-ba52-e48405d910f4","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"d4647db6-fed4-412b-a881-7086a6915a4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae907913-910c-4fa4-b39b-d5784343fec5","type":"CategoricalTicker"}},"id":"db298d9e-925f-465b-97d9-544db8bfd5cd","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"b2a6a75a-6855-4de5-b364-d75dce32ed1f","type":"GlyphRenderer"}]},"id":"1afdbb04-0d32-4aea-9c62-44e61659a1f1","type":"LegendItem"},{"attributes":{},"id":"a65ab955-bd12-4357-9098-b909811a59c8","type":"BasicTickFormatter"},{"attributes":{},"id":"927894e6-a3ca-45ed-8fc9-49abaad2f352","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"120e5af9-befc-4510-8559-4a8208d4b993","type":"HoverTool"},{"attributes":{},"id":"2cf896f2-c57d-45af-ba63-f10204a8b800","type":"BasicTicker"},{"attributes":{"fields":[]},"id":"95689009-ec20-4714-9475-af84fc940212","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"4962f984-2270-456f-b030-7aac410ae3ea","type":"Stack"},{"attributes":{},"id":"6ddae3d6-9c6c-4897-92d9-f98439c37abf","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"85965ec9-be40-4865-a819-d3454bc4f8ec","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"a9690101-9654-4df3-b057-e84c2619da09","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"aa0b6cdd-855f-4dcb-bf25-18e31bd10ee3","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"3b72866d-8d5a-4bca-bc01-8eca132c9d06","type":"Selection"},"selection_policy":{"id":"7f233d42-9b1d-4f88-870d-2624def833d1","type":"UnionRenderers"}},"id":"697efb1f-6c27-46c2-9cf7-d523ae9b4ac4","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"95689009-ec20-4714-9475-af84fc940212","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"6c0752c1-591c-4709-b7c9-a302e0539522","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"36359b9f-2015-4154-a084-d27fe2204c8f","type":"VBar"},{"attributes":{"data_source":{"id":"697efb1f-6c27-46c2-9cf7-d523ae9b4ac4","type":"ColumnDataSource"},"glyph":{"id":"36359b9f-2015-4154-a084-d27fe2204c8f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"e5ecfa27-566a-4451-969f-865132c0896b","type":"VBar"},"selection_glyph":null,"view":{"id":"c903f9fb-b829-45c7-997d-f3da5032b2bb","type":"CDSView"}},"id":"a654d939-b7c2-4eab-b5e1-7f7ac84c3294","type":"GlyphRenderer"}],"root_ids":["d4647db6-fed4-412b-a881-7086a6915a4e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fdaeedc6-f208-4dac-b4eb-d5dc68a130d5","roots":{"d4647db6-fed4-412b-a881-7086a6915a4e":"1125d527-a5d1-4882-9032-77fff062c52f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
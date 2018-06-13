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
      };var element = document.getElementById("958ee0e3-7c57-471b-b3d0-baa2b1341491");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '958ee0e3-7c57-471b-b3d0-baa2b1341491' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/dev/bokeh-0.13.0dev11.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.13.0dev11.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.13.0dev11.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-gl-0.13.0dev11.min.js"];
    
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
                    
                  var docs_json = '{"25a4e92b-1ae0-4104-b826-43e44e9a4701":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"82a21c0e-aa7e-4d79-b049-fae714f92f92","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"89ff0607-dbdc-4a6f-a807-ebbd1818a39a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"910550d0-bb28-4c88-afed-458168f345c5","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1b671843-f9a4-4a4a-839b-84bf7deb0f47","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"dd772cb5-1f2d-4113-b2ea-ac8f325389f7","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"f94afcc0-7d35-4bf5-aaba-57e3474a8a1e","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"80fc570a-f7a5-423e-988d-cabba812d1a8","type":"GlyphRenderer"}]},"id":"08a90645-12ef-4277-80bc-bb6d16692337","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"2fab8bd1-da98-41eb-a085-d9ce0c46afe2","type":"Title"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"42b72a87-c2bc-49cd-8197-16ae87b07ec0","type":"Selection"},"selection_policy":{"id":"72ab4048-a4b5-40eb-80e5-fdcfc7e0ea40","type":"UnionRenderers"}},"id":"3e79df93-3af5-49b1-b181-cc7f064b5384","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"f5f4b65f-cd7d-4a1a-b1ed-464a494b16f1","type":"CategoricalAxis"}],"left":[{"id":"4be1e11c-83bb-444a-9c67-dacc815209d9","type":"LinearAxis"}],"min_border":70,"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"f5f4b65f-cd7d-4a1a-b1ed-464a494b16f1","type":"CategoricalAxis"},{"id":"a5e5aaa7-f0a7-48fc-8aac-cb55ac475356","type":"Grid"},{"id":"4be1e11c-83bb-444a-9c67-dacc815209d9","type":"LinearAxis"},{"id":"3ce769cc-9776-43cd-9518-dc9092aa52fc","type":"Grid"},{"id":"58e93f15-b0f8-4f5c-8c2e-c6f0021e9635","type":"Legend"},{"id":"80fc570a-f7a5-423e-988d-cabba812d1a8","type":"GlyphRenderer"},{"id":"cab8956f-b1f7-4c44-a98c-520525e51d0c","type":"GlyphRenderer"},{"id":"404d8e45-ec0e-4eab-89f9-514be3a4419d","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"2fab8bd1-da98-41eb-a085-d9ce0c46afe2","type":"Title"},"toolbar":{"id":"4602287f-546e-4fc1-bd0f-4e3f791fab08","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c8200766-0c9b-496f-96b7-5e512f8739fa","type":"FactorRange"},"x_scale":{"id":"9a0d68c2-9946-4980-9bde-664d6f80e3cb","type":"CategoricalScale"},"y_range":{"id":"76194983-91d9-48d1-9b56-01d2d25f8765","type":"DataRange1d"},"y_scale":{"id":"89d3add2-0fb6-4898-9c7f-f52b0404ba05","type":"LinearScale"}},"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"aec46ce1-0fb7-471e-b329-8dbac862473d","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"f798a8e2-f1d2-403e-bfc2-3db3fcdfb46c","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"c2a38294-2ecc-4ced-9231-a20ec55c50ad","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"aec46ce1-0fb7-471e-b329-8dbac862473d","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"f798a8e2-f1d2-403e-bfc2-3db3fcdfb46c","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"81a69e9e-bcbd-4450-84ad-9414baff35fd","type":"VBar"},{"attributes":{"items":[{"id":"08a90645-12ef-4277-80bc-bb6d16692337","type":"LegendItem"},{"id":"db302439-fd56-4025-ad54-4c1ee1e0b9c8","type":"LegendItem"},{"id":"a2222764-8a4b-4349-b483-56afec95769f","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"}},"id":"58e93f15-b0f8-4f5c-8c2e-c6f0021e9635","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"c8200766-0c9b-496f-96b7-5e512f8739fa","type":"FactorRange"},{"attributes":{"data_source":{"id":"3e79df93-3af5-49b1-b181-cc7f064b5384","type":"ColumnDataSource"},"glyph":{"id":"c2a38294-2ecc-4ced-9231-a20ec55c50ad","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"81a69e9e-bcbd-4450-84ad-9414baff35fd","type":"VBar"},"selection_glyph":null,"view":{"id":"87aac3d9-e785-457c-8c91-dacf1fe6b775","type":"CDSView"}},"id":"cab8956f-b1f7-4c44-a98c-520525e51d0c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d8a9279f-0cc3-4258-8c27-08c3af7a826c","type":"HoverTool"}]},"id":"4602287f-546e-4fc1-bd0f-4e3f791fab08","type":"Toolbar"},{"attributes":{"source":{"id":"3e79df93-3af5-49b1-b181-cc7f064b5384","type":"ColumnDataSource"}},"id":"87aac3d9-e785-457c-8c91-dacf1fe6b775","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"aec46ce1-0fb7-471e-b329-8dbac862473d","type":"Stack"},{"attributes":{},"id":"d8a57665-f642-4971-9bbe-c2e60491e16c","type":"Selection"},{"attributes":{},"id":"256a3be5-01dc-48e3-b440-a60c157fe450","type":"Selection"},{"attributes":{},"id":"9a0d68c2-9946-4980-9bde-664d6f80e3cb","type":"CategoricalScale"},{"attributes":{},"id":"49418ee9-4ef3-4942-a7b1-d6124d5c5790","type":"UnionRenderers"},{"attributes":{},"id":"c9319d60-479e-475c-84e2-f545b294c10a","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"76194983-91d9-48d1-9b56-01d2d25f8765","type":"DataRange1d"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"cab8956f-b1f7-4c44-a98c-520525e51d0c","type":"GlyphRenderer"}]},"id":"db302439-fd56-4025-ad54-4c1ee1e0b9c8","type":"LegendItem"},{"attributes":{},"id":"89d3add2-0fb6-4898-9c7f-f52b0404ba05","type":"LinearScale"},{"attributes":{},"id":"4bea2ae0-224a-4452-98ee-9ea4014e74c1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4bea2ae0-224a-4452-98ee-9ea4014e74c1","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"424909bc-8a87-4e4b-9671-6a14d54cf621","type":"BasicTicker"}},"id":"4be1e11c-83bb-444a-9c67-dacc815209d9","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"82a21c0e-aa7e-4d79-b049-fae714f92f92","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"89ff0607-dbdc-4a6f-a807-ebbd1818a39a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0831156b-c5c2-45f3-8a5c-574b24219272","type":"VBar"},{"attributes":{"formatter":{"id":"c9319d60-479e-475c-84e2-f545b294c10a","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"133b76b7-06ea-4e68-ad9b-1a0fc99973a3","type":"CategoricalTicker"}},"id":"f5f4b65f-cd7d-4a1a-b1ed-464a494b16f1","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"516a9c4b-43e7-42bd-82f0-525e08c7fd76","type":"ColumnDataSource"},"glyph":{"id":"910550d0-bb28-4c88-afed-458168f345c5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"0831156b-c5c2-45f3-8a5c-574b24219272","type":"VBar"},"selection_glyph":null,"view":{"id":"77efd52c-22bf-40e4-bb9e-5cb70c401f08","type":"CDSView"}},"id":"404d8e45-ec0e-4eab-89f9-514be3a4419d","type":"GlyphRenderer"},{"attributes":{},"id":"133b76b7-06ea-4e68-ad9b-1a0fc99973a3","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"1b671843-f9a4-4a4a-839b-84bf7deb0f47","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"dd772cb5-1f2d-4113-b2ea-ac8f325389f7","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"7872710b-c0b3-43f7-8989-938674e564bb","type":"VBar"},{"attributes":{"source":{"id":"516a9c4b-43e7-42bd-82f0-525e08c7fd76","type":"ColumnDataSource"}},"id":"77efd52c-22bf-40e4-bb9e-5cb70c401f08","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"133b76b7-06ea-4e68-ad9b-1a0fc99973a3","type":"CategoricalTicker"}},"id":"a5e5aaa7-f0a7-48fc-8aac-cb55ac475356","type":"Grid"},{"attributes":{},"id":"42b72a87-c2bc-49cd-8197-16ae87b07ec0","type":"Selection"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"d8a9279f-0cc3-4258-8c27-08c3af7a826c","type":"HoverTool"},{"attributes":{},"id":"72ab4048-a4b5-40eb-80e5-fdcfc7e0ea40","type":"UnionRenderers"},{"attributes":{},"id":"424909bc-8a87-4e4b-9671-6a14d54cf621","type":"BasicTicker"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"404d8e45-ec0e-4eab-89f9-514be3a4419d","type":"GlyphRenderer"}]},"id":"a2222764-8a4b-4349-b483-56afec95769f","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"5710d64e-488e-4682-a0b4-109f2ef4d3bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"424909bc-8a87-4e4b-9671-6a14d54cf621","type":"BasicTicker"}},"id":"3ce769cc-9776-43cd-9518-dc9092aa52fc","type":"Grid"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"256a3be5-01dc-48e3-b440-a60c157fe450","type":"Selection"},"selection_policy":{"id":"62f1203f-1191-47ec-bee2-b538646ac070","type":"UnionRenderers"}},"id":"516a9c4b-43e7-42bd-82f0-525e08c7fd76","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e7eb2f96-11f5-4aaa-b687-dd64a28151ac","type":"ColumnDataSource"},"glyph":{"id":"f94afcc0-7d35-4bf5-aaba-57e3474a8a1e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"7872710b-c0b3-43f7-8989-938674e564bb","type":"VBar"},"selection_glyph":null,"view":{"id":"13019bbd-0db8-44b2-9d08-fe42006d0e2c","type":"CDSView"}},"id":"80fc570a-f7a5-423e-988d-cabba812d1a8","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"1b671843-f9a4-4a4a-839b-84bf7deb0f47","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"dd772cb5-1f2d-4113-b2ea-ac8f325389f7","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"f798a8e2-f1d2-403e-bfc2-3db3fcdfb46c","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"82a21c0e-aa7e-4d79-b049-fae714f92f92","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"89ff0607-dbdc-4a6f-a807-ebbd1818a39a","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"d8a57665-f642-4971-9bbe-c2e60491e16c","type":"Selection"},"selection_policy":{"id":"49418ee9-4ef3-4942-a7b1-d6124d5c5790","type":"UnionRenderers"}},"id":"e7eb2f96-11f5-4aaa-b687-dd64a28151ac","type":"ColumnDataSource"},{"attributes":{},"id":"62f1203f-1191-47ec-bee2-b538646ac070","type":"UnionRenderers"},{"attributes":{"source":{"id":"e7eb2f96-11f5-4aaa-b687-dd64a28151ac","type":"ColumnDataSource"}},"id":"13019bbd-0db8-44b2-9d08-fe42006d0e2c","type":"CDSView"}],"root_ids":["5710d64e-488e-4682-a0b4-109f2ef4d3bb"]},"title":"Bokeh Application","version":"0.13.0dev11"}}';
                  var render_items = [{"docid":"25a4e92b-1ae0-4104-b826-43e44e9a4701","roots":{"5710d64e-488e-4682-a0b4-109f2ef4d3bb":"958ee0e3-7c57-471b-b3d0-baa2b1341491"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-0.13.0dev11.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-0.13.0dev11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.13.0dev11.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.13.0dev11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.13.0dev11.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.13.0dev11.min.css");
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
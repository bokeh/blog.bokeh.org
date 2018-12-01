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
      };var element = document.getElementById("b297c624-57f8-442d-8cf8-2703ee7fa550");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b297c624-57f8-442d-8cf8-2703ee7fa550' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"04492b3a-3cb9-4d29-a7ce-7563a1d34ed8":{"roots":{"references":[{"attributes":{"data_source":{"id":"54c635e0-d099-4fae-9087-4c8deb6d86a3","type":"ColumnDataSource"},"glyph":{"id":"97d4250d-b033-436e-8470-ec1f72fd91af","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"436cdfd5-7fe6-4d8c-b10e-5e2401ca45c5","type":"Wedge"},"selection_glyph":null,"view":{"id":"8a53705b-faf0-4ac1-86fe-f58c724a8a71","type":"CDSView"}},"id":"7f1bafeb-e54d-49e1-9d12-1c9568a62181","type":"GlyphRenderer"},{"attributes":{},"id":"dd7e44bb-65f8-4d21-bfd7-210d4365ede5","type":"HelpTool"},{"attributes":{"field":"angle","include_zero":true},"id":"5f44d582-dd1b-4347-9109-3c5ca7537335","type":"CumSum"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"@country: @value"},"id":"33da5b4a-6190-4abb-9308-c42907ab2502","type":"HoverTool"},{"attributes":{},"id":"d8a7ee6f-277a-41d9-8c19-4198c4dc8a70","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a7ee6f-277a-41d9-8c19-4198c4dc8a70","type":"BasicTicker"}},"id":"8c1d0af0-e371-4760-ab82-ddb4461b295a","type":"Grid"},{"attributes":{"callback":null},"id":"4a45093b-760b-4a98-98af-d6e0091e365e","type":"DataRange1d"},{"attributes":{},"id":"479c86e5-679f-4194-a14a-c8b2692c0987","type":"UnionRenderers"},{"attributes":{"end_angle":{"expr":{"id":"3e1c257f-dff0-4705-82a8-fdb584f29f2a","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"5f44d582-dd1b-4347-9109-3c5ca7537335","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"97d4250d-b033-436e-8470-ec1f72fd91af","type":"Wedge"},{"attributes":{"end_angle":{"expr":{"id":"3e1c257f-dff0-4705-82a8-fdb584f29f2a","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"5f44d582-dd1b-4347-9109-3c5ca7537335","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"436cdfd5-7fe6-4d8c-b10e-5e2401ca45c5","type":"Wedge"},{"attributes":{},"id":"adb32a66-85bc-429a-a94c-5979f7922b56","type":"BasicTicker"},{"attributes":{"items":[{"id":"3775f034-0880-45f6-944d-209087bbb596","type":"LegendItem"}],"plot":{"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"}},"id":"7f0fb55e-e254-4109-8d61-a948d7c9c6e8","type":"Legend"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"7f1bafeb-e54d-49e1-9d12-1c9568a62181","type":"GlyphRenderer"}]},"id":"3775f034-0880-45f6-944d-209087bbb596","type":"LegendItem"},{"attributes":{},"id":"f1632a6c-1caf-4c3c-ba33-80d9b0a63fa2","type":"LinearScale"},{"attributes":{},"id":"6e333ab2-7959-4663-865d-c44c922232a6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":["0","1","2","3","4","5","6","7","8","9","10","11"],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"097190b5-49b1-498d-bab6-b6d3be9a43ab","type":"Selection"},"selection_policy":{"id":"479c86e5-679f-4194-a14a-c8b2692c0987","type":"UnionRenderers"}},"id":"54c635e0-d099-4fae-9087-4c8deb6d86a3","type":"ColumnDataSource"},{"attributes":{},"id":"b1bbaced-53fb-4c7a-8c17-1c1246fd923d","type":"WheelZoomTool"},{"attributes":{"source":{"id":"54c635e0-d099-4fae-9087-4c8deb6d86a3","type":"ColumnDataSource"}},"id":"8a53705b-faf0-4ac1-86fe-f58c724a8a71","type":"CDSView"},{"attributes":{"below":[{"id":"6c59f2fa-d6a9-4f30-a852-8ea25cb9784c","type":"LinearAxis"}],"left":[{"id":"72b057ff-546c-4b65-a27d-ea90d346a82f","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"6c59f2fa-d6a9-4f30-a852-8ea25cb9784c","type":"LinearAxis"},{"id":"2b26e6fd-b514-4a84-a770-8f3ce219e157","type":"Grid"},{"id":"72b057ff-546c-4b65-a27d-ea90d346a82f","type":"LinearAxis"},{"id":"8c1d0af0-e371-4760-ab82-ddb4461b295a","type":"Grid"},{"id":"4fa6632b-d60c-475e-a6b5-b9ee66d8e105","type":"BoxAnnotation"},{"id":"7f0fb55e-e254-4109-8d61-a948d7c9c6e8","type":"Legend"},{"id":"7f1bafeb-e54d-49e1-9d12-1c9568a62181","type":"GlyphRenderer"}],"title":{"id":"63c93190-4e05-4bd8-b9e9-e20c5675d51f","type":"Title"},"toolbar":{"id":"6d6c0681-684e-4553-b60c-9e365885287f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c0853bc4-a688-46fc-89ea-3c4ae6781dab","type":"DataRange1d"},"x_scale":{"id":"f1632a6c-1caf-4c3c-ba33-80d9b0a63fa2","type":"LinearScale"},"y_range":{"id":"4a45093b-760b-4a98-98af-d6e0091e365e","type":"DataRange1d"},"y_scale":{"id":"1f2f9aec-8ce4-4802-94a2-17e89273cd35","type":"LinearScale"}},"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"},"ticker":{"id":"adb32a66-85bc-429a-a94c-5979f7922b56","type":"BasicTicker"}},"id":"2b26e6fd-b514-4a84-a770-8f3ce219e157","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"91c417a2-7af4-4f3d-8907-1abd071d0173","type":"PanTool"},{"id":"b1bbaced-53fb-4c7a-8c17-1c1246fd923d","type":"WheelZoomTool"},{"id":"f1c0c85f-d7a2-411d-a9d3-11d72efcd148","type":"BoxZoomTool"},{"id":"c91c31d9-5b88-45ed-9228-f03bcb34bba3","type":"SaveTool"},{"id":"568ce28e-022d-46c4-b7d6-5e0deb67d59e","type":"ResetTool"},{"id":"dd7e44bb-65f8-4d21-bfd7-210d4365ede5","type":"HelpTool"},{"id":"33da5b4a-6190-4abb-9308-c42907ab2502","type":"HoverTool"}]},"id":"6d6c0681-684e-4553-b60c-9e365885287f","type":"Toolbar"},{"attributes":{},"id":"b58761ad-989b-43cb-85f5-1f31cb39c39b","type":"BasicTickFormatter"},{"attributes":{"field":"angle"},"id":"3e1c257f-dff0-4705-82a8-fdb584f29f2a","type":"CumSum"},{"attributes":{},"id":"1f2f9aec-8ce4-4802-94a2-17e89273cd35","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"63c93190-4e05-4bd8-b9e9-e20c5675d51f","type":"Title"},{"attributes":{},"id":"c91c31d9-5b88-45ed-9228-f03bcb34bba3","type":"SaveTool"},{"attributes":{"axis_label":null,"formatter":{"id":"6e333ab2-7959-4663-865d-c44c922232a6","type":"BasicTickFormatter"},"plot":{"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"},"ticker":{"id":"adb32a66-85bc-429a-a94c-5979f7922b56","type":"BasicTicker"},"visible":false},"id":"6c59f2fa-d6a9-4f30-a852-8ea25cb9784c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c0853bc4-a688-46fc-89ea-3c4ae6781dab","type":"DataRange1d"},{"attributes":{"axis_label":null,"formatter":{"id":"b58761ad-989b-43cb-85f5-1f31cb39c39b","type":"BasicTickFormatter"},"plot":{"id":"01225df8-62af-4f72-b987-080477c097be","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a7ee6f-277a-41d9-8c19-4198c4dc8a70","type":"BasicTicker"},"visible":false},"id":"72b057ff-546c-4b65-a27d-ea90d346a82f","type":"LinearAxis"},{"attributes":{},"id":"91c417a2-7af4-4f3d-8907-1abd071d0173","type":"PanTool"},{"attributes":{},"id":"097190b5-49b1-498d-bab6-b6d3be9a43ab","type":"Selection"},{"attributes":{"overlay":{"id":"4fa6632b-d60c-475e-a6b5-b9ee66d8e105","type":"BoxAnnotation"}},"id":"f1c0c85f-d7a2-411d-a9d3-11d72efcd148","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4fa6632b-d60c-475e-a6b5-b9ee66d8e105","type":"BoxAnnotation"},{"attributes":{},"id":"568ce28e-022d-46c4-b7d6-5e0deb67d59e","type":"ResetTool"}],"root_ids":["01225df8-62af-4f72-b987-080477c097be"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"04492b3a-3cb9-4d29-a7ce-7563a1d34ed8","roots":{"01225df8-62af-4f72-b987-080477c097be":"b297c624-57f8-442d-8cf8-2703ee7fa550"}}];
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
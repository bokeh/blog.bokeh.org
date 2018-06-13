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
      };var element = document.getElementById("cc1d0eea-3619-4f3f-9cfa-245b02781b60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc1d0eea-3619-4f3f-9cfa-245b02781b60' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"35e01711-607e-4a32-8daf-a07078cf02d8":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"144339fc-d5fb-423f-ae07-7a15f5e888dc","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":["0","1","2","3","4","5","6","7","8","9","10","11"],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"f03114b2-5f27-46e3-b042-411045b24302","type":"Selection"},"selection_policy":{"id":"20aebbfe-a84d-4100-ad4b-32f90b297d62","type":"UnionRenderers"}},"id":"119bd810-992f-4ad6-a1d8-3d5c6f732436","type":"ColumnDataSource"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"35e88b06-7bf7-4b7b-a0fa-f71097fc75f2","type":"GlyphRenderer"}]},"id":"0514a8c6-62ff-46e9-8b2f-16a4432a5aa2","type":"LegendItem"},{"attributes":{},"id":"01a154d8-5025-4e88-b89d-8d6aa6663ff6","type":"BasicTickFormatter"},{"attributes":{},"id":"20aebbfe-a84d-4100-ad4b-32f90b297d62","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"119bd810-992f-4ad6-a1d8-3d5c6f732436","type":"ColumnDataSource"},"glyph":{"id":"6692289d-ca17-42ff-98bc-36d9ca43d615","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26ca522c-f67d-4cd4-a2da-b19f48241f27","type":"Wedge"},"selection_glyph":null,"view":{"id":"64a0ecfe-173f-49ae-99e7-3279befef094","type":"CDSView"}},"id":"35e88b06-7bf7-4b7b-a0fa-f71097fc75f2","type":"GlyphRenderer"},{"attributes":{},"id":"edf39ae3-fb75-448f-ab34-f7eae0e74d93","type":"ResetTool"},{"attributes":{"axis_label":null,"formatter":{"id":"b4ffebd9-bb79-43ee-9e86-90101a67f767","type":"BasicTickFormatter"},"plot":{"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e66cb7c-ea9e-4ccd-92bd-cefa5b89423f","type":"BasicTicker"},"visible":false},"id":"29e6435d-598b-4cbf-90f7-705f79265c79","type":"LinearAxis"},{"attributes":{},"id":"f03114b2-5f27-46e3-b042-411045b24302","type":"Selection"},{"attributes":{},"id":"6e66cb7c-ea9e-4ccd-92bd-cefa5b89423f","type":"BasicTicker"},{"attributes":{},"id":"b27a08ca-21ea-45ab-a2b8-a13cacdda6b3","type":"HelpTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e66cb7c-ea9e-4ccd-92bd-cefa5b89423f","type":"BasicTicker"}},"id":"f54b9ed2-5cf3-4436-aff2-78c1dbb6cea4","type":"Grid"},{"attributes":{"below":[{"id":"966bd62a-c1ad-478b-bc1f-4cd2706a761b","type":"LinearAxis"}],"left":[{"id":"29e6435d-598b-4cbf-90f7-705f79265c79","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"966bd62a-c1ad-478b-bc1f-4cd2706a761b","type":"LinearAxis"},{"id":"bcf29766-fd39-4aed-8b0c-cea85054d8cc","type":"Grid"},{"id":"29e6435d-598b-4cbf-90f7-705f79265c79","type":"LinearAxis"},{"id":"f54b9ed2-5cf3-4436-aff2-78c1dbb6cea4","type":"Grid"},{"id":"144339fc-d5fb-423f-ae07-7a15f5e888dc","type":"BoxAnnotation"},{"id":"b5e8ca1f-f692-4fb6-9248-64fa0c0e6040","type":"Legend"},{"id":"35e88b06-7bf7-4b7b-a0fa-f71097fc75f2","type":"GlyphRenderer"}],"title":{"id":"a324a9ec-2d05-4ad1-84c2-1a02b3d2ab00","type":"Title"},"toolbar":{"id":"609e26fc-de58-4604-ad8e-edc69d8553af","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"860dcb51-2847-41eb-9a6d-194651879777","type":"DataRange1d"},"x_scale":{"id":"794a2b71-c0a0-4186-b32a-90a863127725","type":"LinearScale"},"y_range":{"id":"aa161a57-8f68-4155-977d-353c61363946","type":"DataRange1d"},"y_scale":{"id":"6a482ca4-5dd6-4764-87f4-8320a3b35628","type":"LinearScale"}},"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b4ffebd9-bb79-43ee-9e86-90101a67f767","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"a324a9ec-2d05-4ad1-84c2-1a02b3d2ab00","type":"Title"},{"attributes":{"end_angle":{"expr":{"id":"36da6489-5963-4257-bb9b-522b9d574ca7","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"6221452a-2573-43fb-8bfa-2807c3772aaf","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"26ca522c-f67d-4cd4-a2da-b19f48241f27","type":"Wedge"},{"attributes":{"field":"angle","include_zero":true},"id":"6221452a-2573-43fb-8bfa-2807c3772aaf","type":"CumSum"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6439b840-3c23-4e7e-b6a2-d31e08cf4cc3","type":"PanTool"},{"id":"217c7556-dcea-48de-8364-6d9700dc7ed6","type":"WheelZoomTool"},{"id":"22d86b29-0f37-4381-9bb6-830f27145de3","type":"BoxZoomTool"},{"id":"fa567ece-f654-44aa-ada9-383f5ded69f1","type":"SaveTool"},{"id":"edf39ae3-fb75-448f-ab34-f7eae0e74d93","type":"ResetTool"},{"id":"b27a08ca-21ea-45ab-a2b8-a13cacdda6b3","type":"HelpTool"}]},"id":"609e26fc-de58-4604-ad8e-edc69d8553af","type":"Toolbar"},{"attributes":{"callback":null},"id":"860dcb51-2847-41eb-9a6d-194651879777","type":"DataRange1d"},{"attributes":{"overlay":{"id":"144339fc-d5fb-423f-ae07-7a15f5e888dc","type":"BoxAnnotation"}},"id":"22d86b29-0f37-4381-9bb6-830f27145de3","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"aa161a57-8f68-4155-977d-353c61363946","type":"DataRange1d"},{"attributes":{"items":[{"id":"0514a8c6-62ff-46e9-8b2f-16a4432a5aa2","type":"LegendItem"}],"plot":{"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"}},"id":"b5e8ca1f-f692-4fb6-9248-64fa0c0e6040","type":"Legend"},{"attributes":{},"id":"794a2b71-c0a0-4186-b32a-90a863127725","type":"LinearScale"},{"attributes":{},"id":"6439b840-3c23-4e7e-b6a2-d31e08cf4cc3","type":"PanTool"},{"attributes":{"source":{"id":"119bd810-992f-4ad6-a1d8-3d5c6f732436","type":"ColumnDataSource"}},"id":"64a0ecfe-173f-49ae-99e7-3279befef094","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f234fa9-6a12-49a0-8f0f-40bee52c8aa1","type":"BasicTicker"}},"id":"bcf29766-fd39-4aed-8b0c-cea85054d8cc","type":"Grid"},{"attributes":{"field":"angle"},"id":"36da6489-5963-4257-bb9b-522b9d574ca7","type":"CumSum"},{"attributes":{},"id":"6a482ca4-5dd6-4764-87f4-8320a3b35628","type":"LinearScale"},{"attributes":{"end_angle":{"expr":{"id":"36da6489-5963-4257-bb9b-522b9d574ca7","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"6221452a-2573-43fb-8bfa-2807c3772aaf","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"6692289d-ca17-42ff-98bc-36d9ca43d615","type":"Wedge"},{"attributes":{},"id":"217c7556-dcea-48de-8364-6d9700dc7ed6","type":"WheelZoomTool"},{"attributes":{},"id":"5f234fa9-6a12-49a0-8f0f-40bee52c8aa1","type":"BasicTicker"},{"attributes":{"axis_label":null,"formatter":{"id":"01a154d8-5025-4e88-b89d-8d6aa6663ff6","type":"BasicTickFormatter"},"plot":{"id":"0e9b097c-c494-40fa-8bad-e3464a7d1f12","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f234fa9-6a12-49a0-8f0f-40bee52c8aa1","type":"BasicTicker"},"visible":false},"id":"966bd62a-c1ad-478b-bc1f-4cd2706a761b","type":"LinearAxis"},{"attributes":{},"id":"fa567ece-f654-44aa-ada9-383f5ded69f1","type":"SaveTool"}],"root_ids":["0e9b097c-c494-40fa-8bad-e3464a7d1f12"]},"title":"Bokeh Application","version":"0.13.0dev11"}}';
                  var render_items = [{"docid":"35e01711-607e-4a32-8daf-a07078cf02d8","roots":{"0e9b097c-c494-40fa-8bad-e3464a7d1f12":"cc1d0eea-3619-4f3f-9cfa-245b02781b60"}}];
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
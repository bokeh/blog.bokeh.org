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
      };var element = document.getElementById("e63c762d-2c1b-4167-8711-ac61da385d54");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e63c762d-2c1b-4167-8711-ac61da385d54' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.6.min.js"];

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
                var docs_json = {"c659cace-3466-420f-941e-e3a889e3164f":{"roots":{"references":[{"attributes":{"callback":null},"id":"7a840861-03c0-4779-8317-302434c20847","type":"Range1d"},{"attributes":{"callback":null},"id":"31171791-977d-47c4-8ca1-43dbfb956c07","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"75d4f435-f268-4ed2-acce-52a78a8df54f","type":"Title"},{"attributes":{},"id":"b76d5c4b-5a59-4a1d-8926-380ccdd26ac3","type":"ToolEvents"},{"attributes":{"plot_height":200,"title":{"id":"75d4f435-f268-4ed2-acce-52a78a8df54f","type":"Title"},"tool_events":{"id":"b76d5c4b-5a59-4a1d-8926-380ccdd26ac3","type":"ToolEvents"},"toolbar":{"id":"50928166-1147-47c1-bb12-bdf186dc91e2","type":"Toolbar"},"x_range":{"id":"31171791-977d-47c4-8ca1-43dbfb956c07","type":"Range1d"},"x_scale":{"id":"735b89e0-5727-44fc-81c3-f28125fb2e67","type":"LinearScale"},"y_range":{"id":"7a840861-03c0-4779-8317-302434c20847","type":"Range1d"},"y_scale":{"id":"f825a039-2f0a-4889-a485-bf671df49124","type":"LinearScale"}},"id":"37768dfd-9456-416e-9830-003e03dbf404","type":"Plot"},{"attributes":{},"id":"735b89e0-5727-44fc-81c3-f28125fb2e67","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"50928166-1147-47c1-bb12-bdf186dc91e2","type":"Toolbar"},{"attributes":{},"id":"f825a039-2f0a-4889-a485-bf671df49124","type":"LinearScale"}],"root_ids":["37768dfd-9456-416e-9830-003e03dbf404"]},"title":"Bokeh Application","version":"0.12.7dev3-36-g433c92d81"}};
                var render_items = [{"docid":"c659cace-3466-420f-941e-e3a889e3164f","elementid":"e63c762d-2c1b-4167-8711-ac61da385d54","modelid":"37768dfd-9456-416e-9830-003e03dbf404"}];

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

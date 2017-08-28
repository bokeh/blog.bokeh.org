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
      };var element = document.getElementById("ffc8a4d5-726a-44db-af00-c21149b09c5c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffc8a4d5-726a-44db-af00-c21149b09c5c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/dev/bokeh-0.12.7rc3.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.7rc3.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.12.7rc3.min.js", "https://cdn.pydata.org/bokeh/dev/bokeh-gl-0.12.7rc3.min.js"];
    
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
                var docs_json = {"dd6669cf-03bf-4337-9ecc-bb4fb4b4244c":{"roots":{"references":[{"attributes":{},"id":"458fc046-5f6e-4cde-8f00-fe379dbc2d26","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"1a0e832b-eb6f-4fb2-a085-ccfffdb917e0","type":"Range1d"},{"attributes":{},"id":"e38fa389-88a3-4f7b-a2d5-2412d9088f02","type":"NodesOnly"},{"attributes":{"plot":null,"text":""},"id":"75843f20-d53d-4a84-9a90-5d89612206bb","type":"Title"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"8a7346c9-ea55-45af-a1a2-385a25381f5b","type":"Range1d"},{"attributes":{},"id":"12c2c748-cbb8-4566-990e-b18a24f903aa","type":"LinearScale"},{"attributes":{},"id":"753cf8ab-090a-4477-bb54-a9f922dd9927","type":"LinearScale"},{"attributes":{"edge_renderer":{"id":"009d6d0d-0e55-48c8-a5a7-4c68938dc194","type":"GlyphRenderer"},"inspection_policy":{"id":"0e278e00-9766-4938-bcfb-5d80039a1a23","type":"NodesOnly"},"layout_provider":{"id":"64c335ac-6309-4f82-a9ab-c01d58619878","type":"StaticLayoutProvider"},"node_renderer":{"id":"935d1d8a-44ba-4596-9386-431243140ddc","type":"GlyphRenderer"},"selection_policy":{"id":"458fc046-5f6e-4cde-8f00-fe379dbc2d26","type":"NodesOnly"}},"id":"a9db98ed-2383-4cb1-b9a8-0c9ccfd28b61","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"fa7b5416-ba09-453d-8422-58634bf6d473","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["Node Number","@index"]]},"id":"12914ed9-0647-4d12-88bf-52c388f0c539","type":"HoverTool"},{"attributes":{"plot":null,"text":""},"id":"cb3feca9-19df-49dc-ad1b-df5035beebc3","type":"Title"},{"attributes":{},"id":"91c0c042-73e1-4836-a06e-c28d67a9800d","type":"LinearScale"},{"attributes":{"children":[{"id":"2b9a6e89-ddac-435e-8ec3-56ad9fb902c1","type":"Plot"},{"id":"4cc05e23-6288-43be-a0b7-e2dc5009c3ae","type":"Plot"}]},"id":"a813aa6e-3616-49ed-a52b-70e3c4714f32","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"12914ed9-0647-4d12-88bf-52c388f0c539","type":"HoverTool"}]},"id":"766a438d-548c-4458-aaee-4157e9a9cba9","type":"Toolbar"},{"attributes":{},"id":"0e278e00-9766-4938-bcfb-5d80039a1a23","type":"NodesOnly"},{"attributes":{"plot_height":300,"plot_width":300,"renderers":[{"id":"a9db98ed-2383-4cb1-b9a8-0c9ccfd28b61","type":"GraphRenderer"}],"title":{"id":"75843f20-d53d-4a84-9a90-5d89612206bb","type":"Title"},"toolbar":{"id":"766a438d-548c-4458-aaee-4157e9a9cba9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fa7b5416-ba09-453d-8422-58634bf6d473","type":"Range1d"},"x_scale":{"id":"753cf8ab-090a-4477-bb54-a9f922dd9927","type":"LinearScale"},"y_range":{"id":"8a7346c9-ea55-45af-a1a2-385a25381f5b","type":"Range1d"},"y_scale":{"id":"d0a8bd09-f2bd-41bc-be1f-a16c3fcf18a2","type":"LinearScale"}},"id":"2b9a6e89-ddac-435e-8ec3-56ad9fb902c1","type":"Plot"},{"attributes":{},"id":"d0a8bd09-f2bd-41bc-be1f-a16c3fcf18a2","type":"LinearScale"},{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":4}},"id":"6792c961-ba32-45d6-b533-627ed2637c06","type":"MultiLine"},{"attributes":{"graph_layout":{"0":[0.8244822935705629,0.32866546022171494],"1":[0.9481675000176832,-0.31466068217609433],"10":[-0.27195430736921056,0.9110349001156002],"11":[0.16391884253934408,0.4641014606243592],"12":[-0.23851991364355785,0.1535375556833143],"13":[-0.7821332471858082,-0.5628393574988539],"14":[-0.14026434342713523,-1.0],"15":[0.5031658911248726,-0.8767473270243457],"16":[1.0,-0.11547369872374136],"17":[0.4680842563581822,0.4667905142943738],"18":[-0.2332147940187359,0.6623923730931336],"19":[0.28924973703349766,0.9072128024391306],"2":[0.5925232561236813,-0.27954004292533585],"3":[0.15801830578068432,-0.8148236548889256],"4":[-0.40582481038579177,-0.29013528074740014],"5":[0.21117268879311513,-0.2584602646974701],"6":[-0.24546066888521267,-0.7029055852592022],"7":[-0.7259592677901173,-0.018937989196877725],"8":[-1.0,0.008402857586924384],"9":[-0.8521870304913352,0.47918748390954]}},"id":"64c335ac-6309-4f82-a9ab-c01d58619878","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}},"id":"003df071-762f-4771-a668-e3c65ca3ac12","type":"ColumnDataSource"},{"attributes":{"callback":null,"tooltips":null},"id":"3db3c087-5d89-46d2-85d2-1ba9bb40b368","type":"HoverTool"},{"attributes":{"graph_layout":{"0":[-0.40118794334304464,-0.4110940273505518],"1":[-0.12619016012860984,-0.6887360673736455],"10":[-0.8649023071547641,-0.5093778086016092],"11":[-0.8277173653590458,0.2911515078063296],"12":[-0.33863987458133094,-1.0],"13":[0.1685689823542711,-0.6159502475582561],"14":[0.9675338585382938,0.22964124500040528],"15":[1.0,0.023893739965553218],"16":[-0.9839753855553718,0.24333309574547224],"17":[-0.6901723873868522,-0.7831002959767688],"18":[0.9940874517407401,-0.18610539281857985],"19":[-0.1200863473674062,-0.19735395286393198],"2":[0.21381181325459941,-0.39349393091844975],"20":[0.6308041694236859,0.6777903434838688],"21":[-0.5346269060215805,-0.9108265303376113],"22":[0.8860475004484243,0.4214931462156577],"23":[0.35682056922240646,0.6873458737329883],"24":[-0.2984902928443962,0.8551540236653961],"25":[-0.044714826508669425,0.9219505016287983],"26":[0.46477409390049784,0.8345503471725773],"27":[0.08543369211495078,0.4637662145015924],"28":[0.4830067547097312,-0.11095906088544571],"29":[0.744683016141122,0.6071084550126125],"3":[-0.08700467958260039,-0.92053378780253],"30":[0.5273170966022269,-0.4154871448023857],"31":[0.010560159042320993,0.29423932679479536],"32":[0.6338362882051587,0.17704051217912453],"33":[0.5037331306897144,0.12511138623194862],"4":[-0.9181734153359646,-0.3388481650954167],"5":[-0.9999169807048076,-0.18591939937622326],"6":[-1.0,-0.02573669051547811],"7":[0.08888980274635916,-0.9681271339269862],"8":[0.2134755085105675,-0.1551410727901953],"9":[0.825301852739768,-0.5483284315908805]}},"id":"2ec76868-de47-498d-aea3-06c059171694","type":"StaticLayoutProvider"},{"attributes":{"fill_color":{"value":"orange"},"size":{"units":"screen","value":18}},"id":"62cf0b49-01c9-4cf9-ba60-d710a239a790","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3db3c087-5d89-46d2-85d2-1ba9bb40b368","type":"HoverTool"}]},"id":"46acf18a-f2b0-4b05-9d1b-2723b68a4b0f","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#cccccc"},"line_width":{"value":2}},"id":"4773369d-eb1a-48c8-b302-5a1a421c704e","type":"MultiLine"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"30e19e4d-d1ac-4382-983f-6ec4fcd06e20","type":"Range1d"},{"attributes":{"data_source":{"id":"003df071-762f-4771-a668-e3c65ca3ac12","type":"ColumnDataSource"},"glyph":{"id":"62cf0b49-01c9-4cf9-ba60-d710a239a790","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5268ad9f-3c24-4543-8152-80a6a27c31ac","type":"CDSView"}},"id":"935d1d8a-44ba-4596-9386-431243140ddc","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26233add-8e94-43ad-965a-7a71c796961c","type":"ColumnDataSource"}},"id":"89ac2d5c-3ecd-4815-ad85-e293c267f81a","type":"CDSView"},{"attributes":{"data_source":{"id":"26233add-8e94-43ad-965a-7a71c796961c","type":"ColumnDataSource"},"glyph":{"id":"4773369d-eb1a-48c8-b302-5a1a421c704e","type":"MultiLine"},"hover_glyph":{"id":"6792c961-ba32-45d6-b533-627ed2637c06","type":"MultiLine"},"muted_glyph":null,"view":{"id":"89ac2d5c-3ecd-4815-ad85-e293c267f81a","type":"CDSView"}},"id":"e186aaa2-a76f-419a-a030-2d03f87d95c6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,19,5,2,16,3,11,4,14,5,9,6,7,15,8,18,9,13,10,11,19,12,13,17,14,15,16,17,18,19],"start":[0,0,0,1,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,12,12,13,14,15,16,17,18]}},"id":"ed183f22-7f4d-4bb6-a89f-23054e2f0cd1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"26233add-8e94-43ad-965a-7a71c796961c","type":"ColumnDataSource"},{"attributes":{},"id":"4aa1787f-ad89-4822-96de-e406165aaa1e","type":"NodesAndLinkedEdges"},{"attributes":{"source":{"id":"36a4b93e-d3d7-48ee-8e5d-483078c3d7d2","type":"ColumnDataSource"}},"id":"e3432c95-2c81-4c2f-b658-f6ed5e69c33f","type":"CDSView"},{"attributes":{"data_source":{"id":"36a4b93e-d3d7-48ee-8e5d-483078c3d7d2","type":"ColumnDataSource"},"glyph":{"id":"92e762e3-b69f-42b5-aaca-ebff7427fbf9","type":"Circle"},"hover_glyph":{"id":"bc7c9ddd-56ec-4e95-82e9-2abc0ce8305e","type":"Circle"},"muted_glyph":null,"view":{"id":"e3432c95-2c81-4c2f-b658-f6ed5e69c33f","type":"CDSView"}},"id":"4c3d398a-daff-42e1-aa91-b1c4abc60f00","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"36a4b93e-d3d7-48ee-8e5d-483078c3d7d2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"003df071-762f-4771-a668-e3c65ca3ac12","type":"ColumnDataSource"}},"id":"5268ad9f-3c24-4543-8152-80a6a27c31ac","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.6}},"id":"d5223467-4ef3-4c9a-93d6-e7da53332262","type":"MultiLine"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":25}},"id":"bc7c9ddd-56ec-4e95-82e9-2abc0ce8305e","type":"Circle"},{"attributes":{"edge_renderer":{"id":"e186aaa2-a76f-419a-a030-2d03f87d95c6","type":"GlyphRenderer"},"inspection_policy":{"id":"4aa1787f-ad89-4822-96de-e406165aaa1e","type":"NodesAndLinkedEdges"},"layout_provider":{"id":"2ec76868-de47-498d-aea3-06c059171694","type":"StaticLayoutProvider"},"node_renderer":{"id":"4c3d398a-daff-42e1-aa91-b1c4abc60f00","type":"GlyphRenderer"},"selection_policy":{"id":"e38fa389-88a3-4f7b-a2d5-2412d9088f02","type":"NodesOnly"}},"id":"8960a5ae-ce7a-48c0-83d8-d5df8d6a9827","type":"GraphRenderer"},{"attributes":{"source":{"id":"ed183f22-7f4d-4bb6-a89f-23054e2f0cd1","type":"ColumnDataSource"}},"id":"25a2cf38-8e7a-4f49-8520-502fc1f4a7fa","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":18}},"id":"92e762e3-b69f-42b5-aaca-ebff7427fbf9","type":"Circle"},{"attributes":{"data_source":{"id":"ed183f22-7f4d-4bb6-a89f-23054e2f0cd1","type":"ColumnDataSource"},"glyph":{"id":"d5223467-4ef3-4c9a-93d6-e7da53332262","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25a2cf38-8e7a-4f49-8520-502fc1f4a7fa","type":"CDSView"}},"id":"009d6d0d-0e55-48c8-a5a7-4c68938dc194","type":"GlyphRenderer"},{"attributes":{"plot_height":300,"plot_width":300,"renderers":[{"id":"8960a5ae-ce7a-48c0-83d8-d5df8d6a9827","type":"GraphRenderer"}],"title":{"id":"cb3feca9-19df-49dc-ad1b-df5035beebc3","type":"Title"},"toolbar":{"id":"46acf18a-f2b0-4b05-9d1b-2723b68a4b0f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30e19e4d-d1ac-4382-983f-6ec4fcd06e20","type":"Range1d"},"x_scale":{"id":"12c2c748-cbb8-4566-990e-b18a24f903aa","type":"LinearScale"},"y_range":{"id":"1a0e832b-eb6f-4fb2-a085-ccfffdb917e0","type":"Range1d"},"y_scale":{"id":"91c0c042-73e1-4836-a06e-c28d67a9800d","type":"LinearScale"}},"id":"4cc05e23-6288-43be-a0b7-e2dc5009c3ae","type":"Plot"}],"root_ids":["a813aa6e-3616-49ed-a52b-70e3c4714f32"]},"title":"Bokeh Application","version":"0.12.7rc3"}};
                var render_items = [{"docid":"dd6669cf-03bf-4337-9ecc-bb4fb4b4244c","elementid":"ffc8a4d5-726a-44db-af00-c21149b09c5c","modelid":"a813aa6e-3616-49ed-a52b-70e3c4714f32"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-0.12.7rc3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-0.12.7rc3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.7rc3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-widgets-0.12.7rc3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.12.7rc3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/dev/bokeh-tables-0.12.7rc3.min.css");
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

    // 80 px - 'header'
    // 500px  'carousel'
    // 10 px - space between 'carousel' and 'menu_panel'
    // 200px - 'menu_panel'
    // 10px - space between 'menu_panel' and 'zenit_content_below_menu_panel'
    $(function () {
          var elem_header = $('#zenit_header_background_80px');
          var elem_menu_panel = $('#zenit_menu_panel_200px');
          var elem_main_content = $('#zenit_content_below_menu_panel');
          var offset = !device.mobile() ? "200px" : "80px"
          
          var top = $(this).scrollTop();
    
          if (top < 430) {
            elem_header.css({ "opacity": top / 430 });
            if (elem_menu_panel) {
              elem_menu_panel.css({ "position": "inherit" });
            }
            elem_main_content.css({ "margin-top": "0" });
          }
    
          $(window).scroll(function () {
            var elem_header = $('#zenit_header_background_80px');
            var elem_menu_panel = $('#zenit_menu_panel_200px');
            var elem_main_content = $('#zenit_content_below_menu_panel');
            var offset = !device.mobile() ? "200px" : "80px"
    
            top = $(this).scrollTop();
    
            elem_header.css({ "opacity": top / 430 });
    
            if (elem_menu_panel.length > 0) {
              if (top >= 430) {
                elem_menu_panel.css({ "position": "fixed", "top": "80px" });
                elem_main_content.css({ "margin-top": offset });
              } else {
                elem_menu_panel.css({ "position": "inherit" });
                elem_main_content.css({ "margin-top": "0" });
              }
            }
          });
    
        });
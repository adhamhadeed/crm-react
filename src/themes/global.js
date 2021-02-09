import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body_bg_color};
    color:${(props) => props.theme.body_text_color};
  }
  .main-content{
    color:${(props) => props.theme.content_text_color};
   }
  nav{
    background-color: ${(props) => props.theme.body_bg_alt_color};
    box-shadow: ${(props) => props.theme.box_shadow}; 
    color:${(props) => props.theme.body_text_color};
  }
 
  .side-nav{
    background-color: ${(props) => props.theme.body_bg_alt_color};
    box-shadow: ${(props) => props.theme.box_shadow}; 
    color:${(props) => props.theme.body_text_color};
  }
  .side-nav-list .list-item{
    border-bottom-color: ${(props) => props.theme.side_nav_border_bg_color};
  }
  a, a:hover{
    color: ${(props) => props.theme.link_bg_hover_color};
  }
  .side-nav .side-nav-list .list-item:hover{
    background-color:${(props) => props.theme.link_bg_hover_color};
  }
  .side-nav .side-nav-list .list-item.selected{
   border-left-color:${(props) => props.theme.side_nav_selected_bg_color};
  }
  .side-nav-slider{
    background-color:${(props) => props.theme.body_bg_alt_color};
    box-shadow: ${(props) => props.theme.box_shadow}; 
  }
 
`;

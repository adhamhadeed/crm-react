import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.bodyTextColor};
  }
  nav{
    background-color: ${(props) => props.theme.navBarBgColor};
    box-shadow: ${(props) => props.theme.boxShadow}; 
    color:${(props) => props.theme.navTextColor};
  }
 
  .side-nav{
    background-color: ${(props) => props.theme.sideNavBgColor};
    box-shadow: ${(props) => props.theme.boxShadow}; 
    color:${(props) => props.theme.navTextColor};
  }
  .side-nav-list .list-item{
    border-bottom-color: ${(props) => props.theme.sideNavBorderBottomColor};
  }
  a, a:hover{
    color: ${(props) => props.theme.linkColor};
  }
  .side-nav .side-nav-list .list-item:hover{
    background-color:${(props) => props.theme.linkHoverBgColor};
  }
  .side-nav .side-nav-list .list-item.selected{
   border-left-color:${(props) => props.theme.selectedListItemBgColor};
  }
  .side-nav-slider{
    background-color:${(props) => props.theme.sideNavSliderBgColor};
    box-shadow: ${(props) => props.theme.boxShadow}; 
  }
  .page{
    background-color:${(props) => props.theme.pageBgColor};
    box-shadow: ${(props) => props.theme.boxShadow}; 
  }
`;

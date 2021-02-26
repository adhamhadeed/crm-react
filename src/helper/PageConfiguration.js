import {
  UserService,
  PropertiesService,
  SettingsService,
} from "../services/Index";
import { getNavListItems } from "./../services/SideNavService";

function getPageConfiguration(pageKey) {
  let pageConfig = {};
  const items = getNavListItems("studio");
  const item = items.filter((item) => item.id === pageKey);
  if (item && item.length > 0) {
    pageConfig = { ...item[0] };
    // eslint-disable-next-line default-case
    switch (item[0].id) {
      case "users":
        pageConfig.apiURL = UserService.getUsers;
        break;
      case "applicationProperties":
        pageConfig.apiURL = PropertiesService.getProperties;
        break;
      case "settings":
        pageConfig.apiURL = SettingsService.getSettings;
        break;
    }
  }

  return pageConfig;
}

export { getPageConfiguration };

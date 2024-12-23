import fs from "fs";
import path from "path";
import { apiSidebarMeta } from './../config/api-sidebar-meta';
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export function generateApiSidebar(): SidebarsConfig {
  const basePath = './docs/apis';

  console.debug("-----debug log 1 start-----");
  console.debug("Generating API sidebars from", basePath);
  console.debug("-----debug log 1 end-----");

  const sidebars: SidebarsConfig = {
    "Getting Started": [
      {
        "type": "doc",
        "id": "apis/intro",
      }
    ]
  };

  // Read all subdirectories in the base folder
  const serviceDirs = fs.readdirSync(basePath).filter((dir) => {
    const fullPath = path.join(basePath, dir);
    return fs.statSync(fullPath).isDirectory();
  });

  // sort the directories based on the position in sidebarMeta
  serviceDirs.sort((a, b) => {
    const positionA = apiSidebarMeta[a]?.position ?? Number.MAX_SAFE_INTEGER;
    const positionB = apiSidebarMeta[b]?.position ?? Number.MAX_SAFE_INTEGER;
    return positionA - positionB;
  });

  // Construct sidebars dynamically
  serviceDirs.forEach((service) => {
    const sidebarPath = path.resolve(`${basePath}/${service}/sidebar.ts`);

    // Ensure the sidebar file exists
    if (fs.existsSync(sidebarPath)) {


      console.debug("-----debug log 2.1 start-----");
      console.debug("Sorted API directories:", sidebarPath);
      console.debug("-----debug log 2.1 end-----");
      const label = apiSidebarMeta[service]?.label ?? service;
      sidebars[label] = require(sidebarPath);;
    }
  });

  console.debug("-----debug log 2 start-----");
  console.debug("Generated API sidebars:", JSON.stringify(sidebars, null, 2));
  console.debug("-----debug log 2 end-----");
  return sidebars;
}

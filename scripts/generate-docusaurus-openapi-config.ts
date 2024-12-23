import fs from 'fs';
import path from 'path';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

export function generateDocusaurusOpenAPIConfig(): Plugin.PluginOptions {
  const apisDirName = 'openapi-specs';
  const outputDirName = 'docs/apis';

  const openApiSpecs = fs.readdirSync('./' + apisDirName);

  const config: Plugin.PluginOptions = {};

  openApiSpecs.forEach(openApiSpecFile => {
    const name = path.basename(openApiSpecFile, path.extname(openApiSpecFile));
    config[name] = {
      specPath: `${apisDirName}/${openApiSpecFile}`,
      outputDir: `./${outputDirName}/${name}`,
      sidebarOptions: {
        groupPathsBy: 'tag',
        categoryLinkSource: 'tag',
      },
      hideSendButton: false,
      showSchemas: true,
    } satisfies OpenApiPlugin.Options;
  });
  return config;
}
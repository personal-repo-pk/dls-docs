import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/taxonomy-and-tags/taxonomy-and-tags",
    },
    {
      type: "category",
      label: "Tags",
      items: [
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/retrieves-tags-within-a-specified-context-and-taxonomy",
          label: "Retrieves tags within a specified context and taxonomy.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/updates-tags-within-a-specific-taxonomy-context",
          label: "Updates tags within a specific taxonomy context.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/creates-tags-within-a-specified-context-and-taxonomy",
          label: "Creates tags within a specified context and taxonomy.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/deletes-a-tag-from-a-specified-taxonomy-within-a-given-context",
          label: "Deletes a tag from a specified taxonomy within a given context.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/associate-or-unassociate-one-or-more-tags-with-a-class",
          label: "Associate or unassociate one or more tags with a class.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/apiresponse",
          label: "APIResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/tagcreateinputbody",
          label: "tagCreateInputBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/tagcreatebody",
          label: "tagCreateBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/tagupdatebody",
          label: "tagUpdateBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/associatetagsbody",
          label: "associateTagsBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/createtagapiresponse",
          label: "CreateTagAPIResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/createtagapipartialresponse",
          label: "CreateTagAPIPartialResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/deletetagapiresponse",
          label: "DeleteTagAPIResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/deletetagapipartialresponse",
          label: "DeleteTagAPIPartialResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/updatetagapisucessresponse",
          label: "UpdateTagAPISucessResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/taxonomy-and-tags/schemas/gettagapiresponse",
          label: "GetTagAPIResponse",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

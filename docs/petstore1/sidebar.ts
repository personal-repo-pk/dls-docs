import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Tags",
      items: [
        {
          type: "doc",
          id: "petstore1/retrieves-tags-within-a-specified-context-and-taxonomy",
          label: "Retrieves tags within a specified context and taxonomy.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore1/updates-tags-within-a-specific-taxonomy-context",
          label: "Updates tags within a specific taxonomy context.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore1/creates-tags-within-a-specified-context-and-taxonomy",
          label: "Creates tags within a specified context and taxonomy.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore1/deletes-a-tag-from-a-specified-taxonomy-within-a-given-context",
          label: "Deletes a tag from a specified taxonomy within a given context.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore1/associate-or-unassociate-one-or-more-tags-with-a-class",
          label: "Associate or unassociate one or more tags with a class.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "User management",
      items: [
        {
          type: "doc",
          id: "petstore1/creates-or-updates-a-user-account-based-on-organizational-entitlement",
          label: "Creates or updates a user account based on organizational entitlement.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore1/update-user-information-across-all-spaces",
          label: "Update user information across all spaces.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore1/retrieves-all-users-within-a-specified-organization",
          label: "Retrieves all users within a specified organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore1/retrieves-detailed-information-for-a-specific-user",
          label: "Retrieves detailed information for a specific user.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore1/deletes-a-teacher-or-admin-user-from-the-system",
          label: "Deletes a teacher or admin user from the system.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore1/update-a-users-role-within-an-organization",
          label: "Update a user's role within an organization.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "petstore1/get-an-access-token-for-an-external-user-using-o-auth-2-0",
          label: "Get an access token for an external user using OAuth 2.0",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Preferences",
      items: [
        {
          type: "doc",
          id: "petstore1/retrieves-all-documents-within-a-specified-folder-including-subfolders",
          label: "Retrieves all documents within a specified folder, including subfolders.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore1/retrieves-a-specific-document-from-a-designated-folder",
          label: "Retrieves a specific document from a designated folder.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore1/updates-documents-within-specified-folders",
          label: "Updates documents within specified folders.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore1/creates-a-new-document-or-folder",
          label: "Creates a new document or folder.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore1/deletes-documents-from-specified-folders",
          label: "Deletes documents from specified folders.",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

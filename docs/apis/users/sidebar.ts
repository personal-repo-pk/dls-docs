import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/users/users",
    },
    {
      type: "category",
      label: "User management",
      items: [
        {
          type: "doc",
          id: "apis/users/creates-or-updates-a-user-account-based-on-organizational-entitlement",
          label: "Creates or updates a user account based on organizational entitlement.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/users/update-user-information-across-all-spaces",
          label: "Update user information across all spaces.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/users/retrieves-all-users-within-a-specified-organization",
          label: "Retrieves all users within a specified organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/users/retrieves-detailed-information-for-a-specific-user",
          label: "Retrieves detailed information for a specific user.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/users/deletes-a-teacher-or-admin-user-from-the-system",
          label: "Deletes a teacher or admin user from the system.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/users/update-a-users-role-within-an-organization",
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
          id: "apis/users/get-an-access-token-for-an-external-user-using-o-auth-2-0",
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
          id: "apis/users/retrieves-all-documents-within-a-specified-folder-including-subfolders",
          label: "Retrieves all documents within a specified folder, including subfolders.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/users/retrieves-a-specific-document-from-a-designated-folder",
          label: "Retrieves a specific document from a designated folder.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/users/updates-documents-within-specified-folders",
          label: "Updates documents within specified folders.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/users/creates-a-new-document-or-folder",
          label: "Creates a new document or folder.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/users/deletes-documents-from-specified-folders",
          label: "Deletes documents from specified folders.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "apis/users/schemas/apiresponse",
          label: "APIResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/apijobresponse",
          label: "APIJobResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/resourcenotfound",
          label: "ResourceNotFound",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/badrequest",
          label: "BadRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/reqbodyforusersetup",
          label: "ReqBodyForUserSetup",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/orgentitlementobject",
          label: "OrgEntitlementObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/resbodyforusersetp",
          label: "ResBodyForUserSetp",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/createdrivedocbody",
          label: "CreateDriveDocBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/createdocumentsentites",
          label: "CreateDocumentsEntites",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/multidocumentresponse",
          label: "MultiDocumentResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updatedrivedocbody",
          label: "UpdateDriveDocBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updatedocumententities",
          label: "UpdateDocumentEntities",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/documentresponse",
          label: "DocumentResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/documentitemresponse",
          label: "DocumentItemResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/externaluserrequestbody",
          label: "ExternalUserRequestBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/tokenresponse",
          label: "TokenResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/user",
          label: "User",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/tokenuser",
          label: "TokenUser",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/role",
          label: "Role",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/organization",
          label: "Organization",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/classdata",
          label: "ClassData",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/resourcedata",
          label: "ResourceData",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/userlist",
          label: "UserList",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updateuserinfobody",
          label: "UpdateUserInfoBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updateuserspacesres",
          label: "UpdateUserSpacesRes",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/userspaceentity",
          label: "UserSpaceEntity",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updaterolerequest",
          label: "UpdateRoleRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/updateroleextdata",
          label: "UpdateRoleExtData",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/useraddress",
          label: "UserAddress",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/multidocumentresponse-success",
          label: "MultiDocumentResponse_success",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/users/schemas/user-meta",
          label: "User_meta",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/classes-and-groups/classes-and-groups",
    },
    {
      type: "category",
      label: "Classes",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieves-the-list-of-all-classes-within-a-specified-organization",
          label: "Retrieves the list of all classes within a specified organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/creates-a-new-instructor-led-class",
          label: "Creates a new instructor-led class.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-a-specific-classs-details",
          label: "Retrieve a specific class's details.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/updates-the-details-of-a-class-only-teachers-or-creators-of-the-class-can-perform-this-action",
          label: "Updates the details of a class. Only teachers or creators of the class can perform this action.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/deletes-an-empty-class-from-a-specific-organization",
          label: "Deletes an empty class from a specific organization.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Enrollments",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieves-the-total-number-of-students-or-teachers-enrolled-in-a-specific-class",
          label: "Retrieves the total number of students or teachers enrolled in a specific class.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-a-list-of-users-enrolled-in-a-specific-class",
          label: "Retrieve a list of users enrolled in a specific class.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-a-users-class-enrollments-within-an-organization",
          label: "Retrieve a user's class enrollments within an organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/enroll-a-user-in-a-course",
          label: "Enroll a user in a course",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/unenroll-a-user-from-a-course",
          label: "Unenroll a user from a course.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/enroll-user-in-a-course",
          label: "Enroll user in a course",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Codes",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/enroll-a-user-in-a-class-using-a-class-code",
          label: "Enroll a user in a class using a class code.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/validates-a-class-code-for-a-given-account",
          label: "Validates a class code for a given account.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/generates-a-unique-code-for-a-class",
          label: "Generates a unique code for a class.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Materials",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/associate-a-product-with-a-class",
          label: "Associate a product with a class.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/unlink-a-product-from-a-course",
          label: "Unlink a product from a course",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/associates-an-array-of-products-with-a-class",
          label: "Associates an array of products with a class.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Gradebook",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-gradebook-metadata-for-a-class",
          label: "Retrieve gradebook metadata for a class",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/creates-a-gradebook-for-a-class",
          label: "Creates a gradebook for a class.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/updates-the-metadata-of-a-classs-gradebook",
          label: "Updates the metadata of a class's gradebook.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/deletes-gradebook-metadata-for-a-specific-class",
          label: "Deletes gradebook metadata for a specific class.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-gradebook-columns-for-a-class",
          label: "Retrieve gradebook columns for a class.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/update-multiple-gradebook-columns-for-a-class",
          label: "Update multiple gradebook columns for a class.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/add-multiple-columns-to-a-specific-gradebook-within-a-class",
          label: "Add multiple columns to a specific gradebook within a class.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/delete-one-or-more-columns-from-a-class-gradebook",
          label: "Delete one or more columns from a class gradebook.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-all-classes-associated-with-a-specific-gradebook-column-component",
          label: "Retrieve all classes associated with a specific gradebook column component.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/remove-all-gradebook-columns-associated-with-a-specific-component",
          label: "Remove all gradebook columns associated with a specific component.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Bulk actions",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/create-multiple-classes-within-an-organization-simultaneously",
          label: "Create multiple classes within an organization simultaneously.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/enroll-multiple-users-in-a-course",
          label: "Enroll multiple users in a course",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/unenroll-multiple-users-from-a-course",
          label: "Unenroll multiple users from a course",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Groups",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieves-all-groups-matching-the-specified-path",
          label: "Retrieves all groups matching the specified path.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/creates-a-new-group-within-the-specified-organization",
          label: "Creates a new group within the specified organization.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieves-metadata-for-a-specific-group-excluding-child-groups",
          label: "Retrieves metadata for a specific group, excluding child groups.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/updates-the-metadata-of-a-specific-group-including-membership-records-and-product-associations",
          label: "Updates the metadata of a specific group, including membership records and product associations.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/deletes-a-specific-group",
          label: "Deletes a specific group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/archives-a-specific-group-preserving-its-membership-at-the-time-of-archiving",
          label: "Archives a specific group, preserving its membership at the time of archiving.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/unarchives-a-specific-group",
          label: "Unarchives a specific group.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Memberships",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-all-memberships-for-a-specific-group",
          label: "Retrieve all memberships for a specific group.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieves-all-members-across-all-child-groups-within-a-specified-parent-group",
          label: "Retrieves all members across all child groups within a specified parent group.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/enroll-multiple-users-into-a-specific-group-requires-the-external-user-i-ds-and-dls-user-i-ds-in-the-request-body",
          label: "Enroll multiple users into a specific group.  Requires the external user IDs and DLS user IDs in the request body.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/un-enroll-a-user-from-a-specified-group",
          label: "Un-enroll a user from a specified group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/retrieve-all-memberships-accessible-via-a-specified-path",
          label: "Retrieve all memberships accessible via a specified path.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/enrolments",
          label: "Enrolments",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/productmeta",
          label: "ProductMeta",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponse",
          label: "APIResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsemultiuserenroll",
          label: "APIResponseMultiUserEnroll",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponseuserenroll",
          label: "APIResponseUserEnroll",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponseselfenroll",
          label: "APIResponseSelfEnroll",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classinfo",
          label: "ClassInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponseenrollmultiusersuccessful",
          label: "APIResponseEnrollMultiUserSuccessful",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponseenrollmultiuserpartial",
          label: "APIResponseEnrollMultiUserPartial",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponseenrollmultiusererror",
          label: "APIResponseEnrollMultiUserError",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsepartialcomplete",
          label: "APIResponsePartialComplete",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsesuccess",
          label: "APIResponseSuccess",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsesuccessarchive",
          label: "APIResponseSuccessArchive",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsesuccessunarchive",
          label: "APIResponseSuccessUnarchive",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apiresponsedeleteclass",
          label: "APIResponseDeleteClass",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/organization",
          label: "Organization",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classcodebody",
          label: "ClassCodeBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/joinspacesresp",
          label: "JoinSpacesResp",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/enrollinclassbody",
          label: "EnrollInClassBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/enrollusers",
          label: "EnrollUsers",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/newclassmetadata",
          label: "NewClassMetadata",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classlimits",
          label: "ClassLimits",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/updateclassmetadata",
          label: "UpdateClassMetadata",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/getclassesresponsewithenrollment",
          label: "GetClassesResponseWithEnrollment",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classentitywithenrollment",
          label: "ClassEntityWithEnrollment",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classentity",
          label: "ClassEntity",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundles",
          label: "Bundles",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleentity",
          label: "BundleEntity",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproduct",
          label: "BundleProduct",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductext",
          label: "BundleProductExt",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductdls",
          label: "BundleProductDls",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductmeta",
          label: "BundleProductMeta",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductclasses",
          label: "BundleProductClasses",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductactivation",
          label: "BundleProductActivation",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/bundleproductanalytics",
          label: "BundleProductAnalytics",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/hidden",
          label: "Hidden",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classmetadata",
          label: "ClassMetadata",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/assignment",
          label: "Assignment",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/pairingstatus",
          label: "PairingStatus",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/setofclasses",
          label: "SetOfClasses",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/product",
          label: "Product",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/enrollmentmeta",
          label: "EnrollmentMeta",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/class",
          label: "Class",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/association",
          label: "Association",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/multiassociationreqbody",
          label: "MultiAssociationReqBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/multiassociationresponse",
          label: "MultiAssociationResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/genclasscoderes",
          label: "GenClassCodeRes",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/accesstokenexpired",
          label: "AccessTokenExpired",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/accessdenied",
          label: "AccessDenied",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/invalidauthorizationtoken",
          label: "InvalidAuthorizationToken",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/resourcenotfound",
          label: "ResourceNotFound",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/userspaceentityinprocess",
          label: "UserSpaceEntityInprocess",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/validateclasscoderes",
          label: "ValidateClassCodeRes",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/validateclasscodemeta",
          label: "ValidateClassCodeMeta",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/newclassmetadatamulti",
          label: "NewClassMetadataMulti",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classentities",
          label: "ClassEntities",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/ownerinmulticlasses",
          label: "OwnerInMultiClasses",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/teachersinmulticlasses",
          label: "TeachersInMultiClasses",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/productentitiesinmulticlasses",
          label: "ProductEntitiesInMultiClasses",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/badrequest",
          label: "BadRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/invalidtoken",
          label: "InvalidToken",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/expiredaccesstoken",
          label: "ExpiredAccessToken",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/createclassresponsemulti",
          label: "CreateClassResponseMulti",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classownershipentity",
          label: "ClassOwnershipEntity",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classuserslist",
          label: "ClassUsersList",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classusers",
          label: "ClassUsers",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/entitydescription",
          label: "EntityDescription",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/addressdescription",
          label: "AddressDescription",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/spacedescription",
          label: "SpaceDescription",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/useraddress",
          label: "UserAddress",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupandmembershipschema",
          label: "GroupAndMembershipSchema",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupandmembershipschemawitharchivekeys",
          label: "GroupAndMembershipSchemaWithArchiveKeys",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/membershipschema",
          label: "MembershipSchema",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/memberobject",
          label: "MemberObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupinfo",
          label: "GroupInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupresponsebody",
          label: "GroupResponseBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupresponsebodywitharchivekeys",
          label: "GroupResponseBodyWithArchiveKeys",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/memberssnapshot",
          label: "MembersSnapshot",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/memberssnapshotobject",
          label: "MembersSnapshotObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupobject",
          label: "GroupObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupobjectbody",
          label: "GroupObjectBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/withoutpathgroupobjectbody",
          label: "WithoutPathGroupObjectBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/enrollmentobject",
          label: "EnrollmentObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/apideleteresponse",
          label: "APIDeleteResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupmultiuserbody",
          label: "GroupMultiUserBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/groupmultiuserobject",
          label: "GroupMultiUserObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classentityresponse",
          label: "ClassEntityResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/instructorentity",
          label: "InstructorEntity",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/multiclassclonebody",
          label: "MultiClassCloneBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/clonesettingsobject",
          label: "CloneSettingsObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/clonesettingsadvancedobject",
          label: "CloneSettingsAdvancedObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/advancedstudentenrollmentobject",
          label: "AdvancedStudentEnrollmentObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/advancedteacherenrollmentobject",
          label: "AdvancedTeacherEnrollmentObject",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/gradebookmetabody",
          label: "GradebookMetaBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/gradebookmetares",
          label: "GradebookMetaRes",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/gradebooksmetares",
          label: "GradebooksMetaRes",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/updategradebookmetabody",
          label: "UpdateGradebookMetaBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/addgradebookcolumnbody",
          label: "AddGradebookColumnBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/addgradebookcolumnsresbody",
          label: "AddGradebookColumnsResBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/getgradebookcolumnsresbody",
          label: "GetGradebookColumnsResBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/gradebookcolumnobj",
          label: "GradebookColumnObj",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/gradebookcolumnresobj",
          label: "GradebookColumnResObj",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/classbody",
          label: "ClassBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/updatecolumnsofgradebookbody",
          label: "UpdateColumnsOfGradebookBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "apis/classes-and-groups/schemas/updatecolumnsofgradebookres",
          label: "UpdateColumnsOfGradebookRes",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
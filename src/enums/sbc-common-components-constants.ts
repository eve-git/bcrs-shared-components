export enum SessionStorageKeys {
  AffidavitNeeded = 'AFFIDAVIT_NEEDED',
  ApiConfigKey = 'AUTH_API_CONFIG',
  AuthApiUrl = 'AUTH_API_URL',
  AuthWebUrl = 'AUTH_WEB_URL',
  BusinessIdentifierKey = 'BUSINESS_ID',
  CurrentAccount = 'CURRENT_ACCOUNT',
  DocApiKey = 'DOC_API_KEY',
  DocApiUrl = 'DOC_API_URL',
  ExtraProvincialUser = 'EXTRAPROVINCIAL_USER',
  FasWebUrl = 'FAS_WEB_URL',
  GovnUser = 'AUTH_GOVN_USER',
  InvitationToken = 'INV_TOKEN',
  KeyCloakIdToken = 'KEYCLOAK_ID_TOKEN',
  KeyCloakRefreshToken = 'KEYCLOAK_REFRESH_TOKEN',
  KeyCloakToken = 'KEYCLOAK_TOKEN',
  LaunchDarklyFlags = 'LD_FLAGS',
  NameRequestUrl = 'NAME_REQUEST_URL',
  OrgSearchFilter = 'ORG_SEARCH_FILTER',
  PaginationNumberOfItems = 'PAGINATION_NUMBER_OF_ITEMS',
  PaginationOptions = 'PAGINATION_OPTIONS',
  PayApiUrl = 'PAY_API_URL',
  PendingAccountsSearchFilter = 'PENDING_ACCOUNTS_SEARCH_FILTER',
  PprWebUrl = 'PPR_WEB_URL',
  PreventStorageSync = 'PREVENT_STORAGE_SYNC',
  RegistryHomeUrl = 'REGISTRY_HOME_URL',
  RejectedAccountsSearchFilter = 'REJECTED_ACCOUNTS_SEARCH_FILTER',
  SessionSynced = 'SESSION_SYNCED',
  SiteminderLogoutUrl = 'SITEMINDER_LOGOUT_URL',
  StatusApiUrl = 'STATUS_API_URL',
  WhatsNew = 'WHATS_NEW'
}

export enum Account {
  ANONYMOUS = 'ANONYMOUS',
  PREMIUM = 'PREMIUM',
  BASIC = 'BASIC',
  SBC_STAFF = 'SBC_STAFF',
  UNLINKED_PREMIUM = 'UNLINKED_PREMIUM', // premium accounts without bcol linking
  STAFF = 'STAFF'
}

export enum IdpHint {
  BCROS = 'bcros',
  IDIR = 'idir',
  BCSC = 'bcsc',
  BCEID = 'bceid'
}

export enum LoginSource {
  BCROS = 'BCROS',
  IDIR = 'IDIR',
  BCSC = 'BCSC',
  BCEID = 'BCEID'
}

export enum Role {
  AdminEdit = 'admin_edit',
  BnEdit = 'bn_edit',
  Staff = 'staff',
  Public = 'public_user',
  Edit = 'edit',
  Basic = 'basic',
  StaffCreateAccounts = 'create_accounts',
  StaffManageAccounts = 'manage_accounts',
  AnonymousUser = 'anonymous_user',
  StaffViewAccounts = 'view_accounts',
  Tester = 'tester',
  AccountHolder = 'account_holder',
  PublicUser = 'public_user',
  StaffSuspendAccounts = 'suspend_accounts',
  GOVMAccountUser = 'gov_account_user',
  ManageGlCodes = 'manage_gl_codes',
  FasSearch = 'fas_search',
  ViewAllTransactions = 'view_all_transactions'
}

export enum Pages {
  ACCOUNT = 'account',
  SETTINGS = 'settings',
  NON_BCSC_INSTRUCTIONS = 'nonbcsc-info/instructions',
  ACCOUNT_FREEZ = 'account-freeze',
  ACCOUNT_SWITCHING = 'account-switching',
  REGISTRY_DASHBOARD = 'dashboard',
  USER_PROFILE = 'userprofile',
  CREATE_ACCOUNT = 'setup-account',
  CREATE_GOVM_ACCOUNT = 'setup-govm-account',
  UPDATE_ACCOUNT = 'update-account',
  CREATE_NON_BCSC_ACCOUNT = 'setup-non-bcsc-account',
  CHOOSE_AUTH_METHOD = 'choose-authentication-method',
  PENDING_APPROVAL = 'pendingapproval',
  MAIN = 'account',
  SIGNIN = 'signin',
  SIGNOUT = 'signout',
  CREATE_USER_PROFILE = 'createuserprofile',
  SEARCH_BUSINESS = 'searchbusiness',
  USER_PROFILE_TERMS = 'userprofileterms',
  USER_PROFILE_TERMS_DECLINE = 'unauthorizedtermsdecline',
  HOME = 'home',
  SETUP_ACCOUNT_NON_BCSC = 'nonbcsc-info',
  SETUP_ACCOUNT_NON_BCSC_INSTRUCTIONS = 'instructions',
  SETUP_ACCOUNT_NON_BCSC_DOWNLOAD = 'download',
  ACCOUNT_FREEZE_UNLOCK = 'account-freeze-nsf',
  ACCOUNT_FREEZE = 'account-freeze',
  ACCOUNT_UNLOCK_SUCCESS = 'account-unlock-success',
  ACCOUNT_SETTINGS = 'settings',
  EDIT_ACCOUNT_TYPE= '/change-account',
  STAFF_DASHBOARD_OLD= '/searchbusiness',
  STAFF_SETUP_ACCOUNT = 'staff-setup-account',
  CONFIRM_TOKEN = 'confirmtoken',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/dashboard',
  STAFF = '/staff',
  STAFF_DASHBOARD = '/staff/dashboard',
  STAFF_DASHBOARD_ACTIVE = '/staff/dashboard/active',
  STAFF_DASHBOARD_REVIEW = '/staff/dashboard/review',
  STAFF_DASHBOARD_REJECTED = '/staff/dashboard/rejected',
  STAFF_DASHBOARD_INVITATIONS = '/staff/dashboard/invitations',
  STAFF_DASHBOARD_SUSPENDED = '/staff/dashboard/suspended',
  MAKE_PAD_PAYMENT = '/make-cc-payment/',
  STAFF_GOVM_SETUP_ACCOUNT = '/staff-govm-setup-account',
  SETUP_GOVM_ACCOUNT_SUCCESS='setup-govm-account-success',
  DUPLICATE_ACCOUNT_WARNING='/duplicate-account-warning',
  AFFIDAVIT_COMPLETE = 'upload-affidavit',
  LOGIN = 'login'
}

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  REJECTED = 'REJECTED',
  PENDING_STAFF_REVIEW = 'PENDING_STAFF_REVIEW',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  NSF_SUSPENDED = 'NSF_SUSPENDED',
  SUSPENDED = 'SUSPENDED',
  PENDING_INVITE_ACCEPT = 'PENDING_INVITE_ACCEPT'
}

// keep in sync with the pay-api invoice status enum
export enum InvoiceStatus {
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  CREDITED = 'CREDITED',
  COMPLETED = 'COMPLETED', // NOTE: this === PAID value (api alters it from PAID to COMPLETED in postdump)
  DELETE_ACCEPTED = 'DELETE_ACCEPTED',
  DELETED = 'DELETED',
  PAID = 'PAID',
  PARTIAL = 'PARTIAL_PAID',
  PENDING = 'PENDING',
  REFUND_REQUESTED = 'REFUND_REQUESTED',
  REFUNDED = 'REFUNDED',
  SETTLEMENT_SCHEDULED = 'SETTLEMENT_SCHED',
  UPDATE_REVENUE_ACCOUNT = 'GL_UPDATED',
  UPDATE_REVENUE_ACCOUNT_REFUND = 'GL_UPDATED_REFUND'
}

export enum AffiliationTypes {
  NAME_REQUEST ='Name Request',
  INCORPORATION_APPLICATION = 'Incorporation Application',
  CORPORATION = 'Corporation',
  REGISTRATION = 'Registration'
}

export enum LearFilingTypes {
  AMALGAMATION = 'Amalgamation',
  INCORPORATION = 'Incorporation',
  REGISTRATION = 'Registration'
}

// NB: Corp Type is sometimes called Legal Type
// see also https://github.com/bcgov/bcrs-shared-components/blob/main/src/modules/corp-type-module/corp-type-module.ts
export enum CorpTypes {
  // actual corp types
  BC_CCC = 'CC',
  BC_COMPANY = 'BC',
  BC_ULC_COMPANY = 'ULC',
  BENEFIT_COMPANY = 'BEN',
  COOP = 'CP',
  PARTNERSHIP = 'GP',
  SOLE_PROP = 'SP',

  // overloaded values
  INCORPORATION_APPLICATION = 'TMP',
  NAME_REQUEST = 'NR',
  REGISTRATION = 'RTMP'
}

export enum NrState {
  APPROVED = 'APPROVED',
  DRAFT = 'DRAFT',
  HOLD = 'HOLD',
  REJECTED = 'REJECTED',
  CONDITION = 'CONDITION',
  CONDITIONAL = 'CONDITIONAL',
  REFUND_REQUESTED = 'REFUND_REQUESTED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  CONSUMED = 'CONSUMED',
  PROCESSING = 'PROCESSING'
}

export enum NrDisplayStates {
  APPROVED = 'Approved',
  HOLD = 'Pending Staff Review',
  DRAFT = 'Draft',
  REJECTED = 'Rejected',
  CONDITIONAL = 'Conditional Approval',
  REFUND_REQUESTED = 'Cancelled, Refund Requested',
  CANCELLED = 'Cancelled',
  EXPIRED = 'Expired',
  CONSUMED = 'Consumed',
  PROCESSING = 'Processing'
}

export enum NrConditionalStates {
  RECEIVED = 'R',
  WAIVED = 'N',
  REQUIRED = 'Y',
}

export enum NrTargetTypes {
  LEAR = 'lear',
  COLIN = 'colin',
  ONESTOP = 'onestop'
}

export enum NrEntityType {
  // BC Entity Types:
  BC = 'BC', // Benefit Company
  CC = 'CC', // Community Contribution Company
  CP = 'CP', // Cooperative Association
  CR = 'CR', // BC Limited Company
  DBA = 'DBA',
  FI = 'FI',
  FR = 'FR',
  GP = 'GP',
  LL = 'LL',
  LP = 'LP',
  PA = 'PA',
  PAR = 'PAR',
  SO = 'SO',
  UL = 'UL', // Unlimited Liability Company

  // XPRO Entity Types:
  RLC = 'RLC',
  XCP = 'XCP',
  XCR = 'XCR',
  XLL = 'XLL',
  XLP = 'XLP',
  XSO = 'XSO',
  XUL = 'XUL',

  INFO = 'INFO', // special value for sub-menu
}

export enum BusinessState {
  ACTIVE = 'Active',
  DRAFT = 'Draft'
}

export enum AccessType {
  REGULAR = 'REGULAR',
  EXTRA_PROVINCIAL = 'EXTRA_PROVINCIAL',
  ANONYMOUS = 'ANONYMOUS',
  REGULAR_BCEID = 'REGULAR_BCEID',
  GOVM = 'GOVM',
  GOVN = 'GOVN'
}

export enum Permission {
  REMOVE_BUSINESS = 'REMOVE_BUSINESS',
  CHANGE_ADDRESS = 'CHANGE_ADDRESS',
  VIEW_ADDRESS = 'VIEW_ADDRESS',
  CHANGE_ORG_NAME = 'CHANGE_ORG_NAME',
  INVITE_MEMBERS = 'INVITE_MEMBERS',
  CHANGE_ACCOUNT_TYPE = 'CHANGE_ACCOUNT_TYPE',
  CHANGE_ROLE = 'CHANGE_ROLE',
  RESET_PASSWORD = 'RESET_PASSWORD',
  VIEW_ACCOUNT = 'VIEW_ACCOUNT',
  TRANSACTION_HISTORY = 'TRANSACTION_HISTORY',
  MANAGE_STATEMENTS = 'MANAGE_STATEMENTS',
  VIEW_PAYMENT_METHODS = 'VIEW_PAYMENT_METHODS',
  VIEW_ADMIN_CONTACT = 'VIEW_ADMIN_CONTACT',
  RESET_OTP = 'RESET_OTP',
  MAKE_PAYMENT = 'MAKE_PAYMENT',
  GENERATE_INVOICE = 'GENERATE_INVOICE',
  VIEW_AUTH_OPTIONS = 'VIEW_AUTH_OPTIONS',
  CHANGE_AUTH_OPTIONS = 'CHANGE_AUTH_OPTIONS',
  EDIT_REQUEST_PRODUCT_PACKAGE = 'EDIT_REQUEST_PRODUCT_PACKAGE',
  VIEW_ACTIVITYLOG = 'VIEW_ACTIVITYLOG',
  VIEW_REQUEST_PRODUCT_PACKAGE='VIEW_REQUEST_PRODUCT_PACKAGE',
  DEACTIVATE_ACCOUNT='DEACTIVATE_ACCOUNT',
  VIEW_USER_LOGINSOURCE='VIEW_USER_LOGINSOURCE',
  EDIT_BUSINESS_INFO = 'EDIT_BUSINESS_INFO',
  VIEW_DEVELOPER_ACCESS = 'VIEW_DEVELOPER_ACCESS',
}

export enum LDFlags {
  AuthLearnMore = 'auth-options-learn-more',
  PaymentTypeAccountCreation = 'payment-type-in-account-creation',
  LinkToNewNameRequestApp ='link-to-new-name-request-app',
  EnableMandatoryAddress = 'enable-mandatory-address',
  EnableGovmInvite = 'enable-govm-account-invite',
  HideProductPackage = 'hide-product-packages',
  EnableOrgNameAutoComplete = 'enable-org-name-auto-complete',
  IaSupportedEntities = 'ia-supported-entities',
  EnableFasDashboard = 'enable-fas-dashboard',
  DisableGovNAccountCreation='disable-govn-account',
  EnableBcCccUlc = 'enable-bc-ccc-ulc',
  ProductBusSearchStatus = 'product-BUSINESS_SEARCH-status',
  ProductBusSearchPremTooltip = 'product-BUSINESS_SEARCH-prem-tooltip',
  ProductCSOStatus = 'product-CSO-status',
  ProductWillsStatus = 'product-VS-status',
  ProductSiteRegistryStatus = 'product-ESRA-status',
  ProductBCAStatus = 'product-BCA-status',
  BusSearchLink = 'bus-search-staff-link',
  EnableDetailsFilter = 'enable-transactions-detail-filter',
  SentryEnable = 'sentry-enable',
  BannerText = 'banner-text'
}

export enum DateFilterCodes {
  TODAY = 'TODAY',
  YESTERDAY = 'YESTERDAY',
  LASTWEEK = 'LASTWEEK',
  LASTMONTH = 'LASTMONTH',
  CUSTOMRANGE = 'CUSTOMRANGE'
}

export enum SearchFilterCodes {
  DATERANGE = 'daterange',
  USERNAME = 'username',
  ACCOUNTNAME = 'accountname',
  FOLIONUMBER = 'folio'
}

export enum PaymentTypes {
  CASH = 'CASH',
  CHEQUE = 'CHEQUE',
  CREDIT_CARD = 'CC',
  BCOL = 'DRAWDOWN',
  DIRECT_PAY = 'DIRECT_PAY',
  EFT = 'EFT',
  INTERNAL = 'INTERNAL',
  NO_FEE = 'NO_FEE',
  ONLINE_BANKING = 'ONLINE_BANKING',
  PAD = 'PAD',
  EJV = 'EJV',
  WIRE = 'WIRE'
}

export enum paymentErrorType {
  GENERIC_ERROR = 'GENERIC_ERROR',
  PAYMENT_CANCELLED = 'PAYMENT_CANCELLED',
  DECLINED= 'DECLINED',
  INVALID_CARD_NUMBER = 'INVALID_CARD_NUMBER',
  DECLINED_EXPIRED_CARD = 'DECLINED_EXPIRED_CARD',
  DUPLICATE_ORDER_NUMBER = 'DUPLICATE_ORDER_NUMBER',
  TRANSACTION_TIMEOUT_NO_DEVICE = 'TRANSACTION_TIMEOUT_NO_DEVICE',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
}

export enum StaffCreateAccountsTypes {
  DIRECTOR_SEARCH = 'DIRECTOR_SEARCH',
  GOVM_BUSINESS = 'GOVM_BUSINESS'
}

export enum ProductStatus {
  NOT_SUBSCRIBED = 'NOT_SUBSCRIBED',
  PENDING_STAFF_REVIEW = 'PENDING_STAFF_REVIEW',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
}

export enum TaskRelationshipType {
  ORG = 'ORG',
  PRODUCT = 'PRODUCT',
  USER = 'USER'
}

export enum TaskRelationshipStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  REJECTED = 'REJECTED',
  PENDING_STAFF_REVIEW = 'PENDING_STAFF_REVIEW',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  PENDING_INVITE_ACCEPT = 'PENDING_INVITE_ACCEPT',
  HOLD = 'HOLD'
}

export enum TaskStatus {
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
  HOLD = 'HOLD'
}

export enum TaskType {
  NEW_ACCOUNT_STAFF_REVIEW = 'New Account',
  GOVM_REVIEW = 'GovM',
  GOVN_REVIEW = 'GovN',
  BCEID_ADMIN_REVIEW = 'BCeID Admin'
}

export enum TaskAction {
  AFFIDAVIT_REVIEW = 'AFFIDAVIT_REVIEW',
  ACCOUNT_REVIEW = 'ACCOUNT_REVIEW',
  PRODUCT_REVIEW = 'PRODUCT_REVIEW'
}

export enum FeeCodes {
  PPR_CHANGE_OR_AMENDMENT = 'TRF'
}

export enum DisplayModeValues{
  VIEW_ONLY = 'VIEW_ONLY'
}

export enum OnholdOrRejectCode {
  ONHOLD = 'On Hold',
  REJECTED = 'Reject Account'
}

export const ORG_AUTO_COMPLETE_MAX_RESULTS_COUNT = 5
export const ALLOWED_URIS_FOR_PENDING_ORGS: string[] = ['setup-non-bcsc-account']

export const DEACTIVATE_ACCOUNT_MESSAGE : Map<string, string> = new Map([
  ['OUTSTANDING_CREDIT', 'deactivateCreditAccountMsg'],
  ['TRANSACTIONS_IN_PROGRESS', 'deactivateActiveTransactionsMsg'],
  ['DEFAULT', 'deactivateGenericMsg']
])

export enum AffidavitStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  INACTIVE = 'INACTIVE'
}

export enum AffidavitNumberStatus {
  PENDING = 'Pending'
}

export enum PatchActions {
  UPDATE_STATUS = 'updateStatus',
  UPDATE_ACCESS_TYPE = 'updateAccessType'
}

export enum RequestTrackerType {
  InformCRA = 'INFORM_CRA',
  ChangeDeliveryAddress = 'CHANGE_DELIVERY_ADDRESS',
  ChangeMailingAddress = 'CHANGE_MAILING_ADDRESS',
  ChangeName = 'CHANGE_NAME',
  ChangeStatus = 'CHANGE_STATUS',
  ChangeParty = 'CHANGE_PARTY',
}

export enum Product {
  BCA = 'BCA',
  BUSINESS = 'BUSINESS',
  BUSINESS_SEARCH = 'BUSINESS_SEARCH',
  CSO = 'CSO',
  ESRA = 'ESRA',
  MHR = 'MHR',
  PPR = 'PPR',
  RPPR = 'RPPR',
  RPT = 'RPT',
  VS = 'VS'
}

export enum EntityAlertTypes {
  FROZEN = 'FROZEN',
  BADSTANDING = 'BAD_STANDING',
  LIQUIDATION = 'LIQUIDATION',
  DISSOLUTION = 'DISSOLUTION',
  PROCESSING = 'PROCESSING',
  EXPIRED = 'EXPIRED'
}

export const ACCOUNT_ID = 'accountid'

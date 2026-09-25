// ─── RESUME-VERIFIED DATA ────────────────────────────────────────────────────
// Source: Salma_Shaik_Resume.docx — all content resume-supported only.

export const person = {
  name: "Salma Shaik",
  title: "Microsoft Power Apps & Dynamics 365 CE Developer",
  email: "salmashaik13579@gmail.com",
  phone: "+91 8639420642",
  whatsapp: "918639420642",
  location: "Guntur, Andhra Pradesh, India",
  company: "Starlite Infotech",
  role: "Power Apps Developer",
  yearsExp: "4+",
  available: true,
};

export const summary =
  "I'm a Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of experience at Starlite Infotech, building and supporting enterprise CRM solutions on Dynamics 365 CE, Dataverse, and Power Automate. I develop synchronous and asynchronous C#.NET plugins, custom workflow activities, and JavaScript form scripts. I build Model-Driven Apps with Business Process Flows, business rules, forms, views, charts, and dashboards. I've worked with FetchXML, WebAPI, and REST integrations, SSIS and CRM SDK data migration, SSRS reporting, Ribbon Workbench customizations, security roles, record-level access, and solution management across development, UAT, and production environments.";

export const aboutPoints = [
  "I specialize in Dynamics 365 CE and Power Platform enterprise CRM implementations across energy management, global manufacturing sales, and social services.",
  "I develop synchronous and asynchronous C#.NET plugins and custom workflow activities for validation, calculations, escalations, and process automation.",
  "I implement JavaScript form scripts, business rules, and Ribbon Workbench command customizations for real-time validation and guided user actions.",
  "I configure Dataverse entities and relationships, Business Process Flows, forms, views, charts, and dashboards in Model-Driven Apps.",
  "I build Power Automate flows for notifications, lead assignment, escalations, approvals, and data archiving.",
  "I develop FetchXML queries, WebAPI integrations, and SSRS reports, and support SSIS and CRM SDK data migration with validation.",
  "I manage security roles and record-level access, handle solutions across development, UAT, and production, and support functional, regression, and UAT testing.",
];

export const stats = [
  { value: "4+", label: "Years Experience", sublabel: "Enterprise CRM" },
  { value: "~85%", label: "Data-Entry Reduction", sublabel: "Energy Financials" },
  { value: "500+", label: "Regional Sales Users", sublabel: "Coats Group" },
  { value: "5,000+", label: "Active Cases", sublabel: "Avutox" },
];

export const experience = [
  {
    company: "Starlite Infotech",
    role: "Power Apps Developer",
    period: "August 2022 – Present",
    current: true,
    domain: "Energy Management · Manufacturing Sales · Social Services",
    responsibilities: [
      "Develop and support Dynamics 365 CE and Power Platform solutions for enterprise clients across multiple domains.",
      "Build synchronous and asynchronous C#.NET plugins and custom workflow activities for validation, calculations, escalations, and process automation.",
      "Implement JavaScript form scripts, business rules, and Ribbon Workbench command customizations for real-time validation and guided user actions.",
      "Configure Dataverse entities and relationships, Business Process Flows, forms, views, charts, and dashboards in Model-Driven Apps.",
      "Build Power Automate flows for notifications, lead assignment, escalations, approvals, and data archiving.",
      "Develop FetchXML queries, WebAPI integrations, and SSRS reports; support SSIS and CRM SDK data migration with post-migration validation.",
      "Configure security roles and record-level access; manage solutions across development, UAT, and production; handle functional, regression, and UAT testing and production support.",
    ],
  },
];

export const projects = [
  {
    id: "energy-financials",
    index: "01",
    title: "Energy Financials",
    subtitle: "Enterprise Energy Data Management",
    client: "Microsoft Cloud Operations",
    role: "D365 CE Developer / Power Apps Developer",
    domain: "Energy Management & Cloud Operations",
    color: "#0078d4",
    tech: ["Dynamics 365 CE","Dataverse","Power Apps","Power Automate","C#.NET","JavaScript","HTML","CSS","WebAPI","FetchXML","Ribbon Workbench"],
    description: "Centralized Dynamics 365 CE solution that consolidates energy usage and spending data from multiple utility providers, replacing fragmented Excel-based tracking.",
    highlights: [
      "Developed synchronous and asynchronous C#.NET plugins for energy data validation, consumption tracking, and utility provider reconciliation.",
      "Created Dataverse entities for Energy Providers, Utility Accounts, Consumption Records, and Billing Data with structured utility data relationships.",
      "Wrote JavaScript form scripts for real-time validation, dynamic consumption calculations, and billing calculation checks; configured business rules.",
      "Built an interactive energy consumption dashboard using HTML, CSS, and JavaScript.",
      "Customized command bar actions with Ribbon Workbench for bulk data import and utility provider registration.",
      "Wrote FetchXML queries for consumption aggregations and billing summaries, and WebAPI calls for data retrieval and integration.",
      "Built Power Automate flows for automated notifications and data archiving; configured security roles and managed solution deployment.",
    ],
    impact: { value: "~85%", label: "Reduction in manual data-entry activities" },
    flow: ["Utility Providers","Dataverse Entities","Business Logic","Power Automate","Dashboards"],
  },
  {
    id: "coats-group",
    index: "02",
    title: "Coats Group",
    subtitle: "Dynamics 365 CE Sales Implementation",
    client: "Coats Group PLC",
    role: "CRM Developer / Power Apps Developer",
    domain: "Manufacturing & Global Sales Operations",
    color: "#742774",
    tech: ["Dynamics 365 CE","Power Apps","Dataverse","SQL Server 2016","SSIS","CRM SDK","Power Automate","FetchXML","SSRS","JavaScript"],
    description: "Dynamics 365 CE Sales implementation for a global manufacturer covering account management, lead-to-opportunity processes, quotations, orders, and regional sales operations.",
    highlights: [
      "Built out Account, Contact, Lead, Opportunity, Quote, and Order data models aligned with regional sales requirements.",
      "Configured Sales Hub components and customized forms, views, charts, and dashboards.",
      "Implemented Business Process Flows for lead qualification and opportunity management with conditional stage transitions.",
      "Configured multi-level security roles, record-level sharing rules, entity relationships, and cascading behaviors.",
      "Developed SSIS packages and used the CRM SDK to migrate customer, product, and historical sales data with post-migration validation.",
      "Built Power Automate flows for lead assignment, opportunity escalation, and quote approval notifications.",
      "Developed FetchXML queries for sales metrics and SSRS reports for pipeline and forecasting; managed solutions and supported production cutover.",
    ],
    impact: { value: "500+", label: "Regional sales users across 8 geographical regions" },
    flow: ["Lead","Qualification","Opportunity","Quote","Order"],
  },
  {
    id: "avutox",
    index: "03",
    title: "Avutox",
    subtitle: "Child Safety & Family Services CRM Platform",
    client: "Avutox",
    role: "CRM Developer / Power Apps Developer",
    domain: "Social Services & Child Welfare",
    color: "#0ea5e9",
    tech: ["Microsoft Dynamics CRM 2016","Dynamics 365 CE","Dataverse","Power Apps","Power Automate","JavaScript","C#.NET","Business Process Flows","FetchXML"],
    description: "CRM platform supporting case intake, family assessment, service planning, service delivery tracking, and outcome management for a child safety and family services organization.",
    highlights: [
      "Built custom entities for Family Records, Child Cases, Case Workers, Service Plans, and Service Delivery with configured relationships.",
      "Wrote JavaScript validation for case intake and assessment forms; configured business rules for mandatory fields and assessment checks.",
      "Developed C#.NET plugins and custom workflow activities, including automatic case escalation logic.",
      "Customized Ribbon Workbench command bars for case escalation and service-plan actions.",
      "Configured a Business Process Flow covering Intake, Assessment, Service Planning, Service Delivery, and Outcome Measurement.",
      "Configured security roles and record-level access separating case-worker and supervisor permissions.",
      "Developed FetchXML queries and reports; managed solution deployment, testing, and resolution of production issues.",
    ],
    impact: { value: "5,000+", label: "Active cases supported" },
    flow: ["Intake","Assessment","Service Planning","Service Delivery","Outcome Measurement"],
  },
];

export const skillGroups = [
  {
    title: "Dynamics 365 / CRM",
    color: "#0078d4",
    items: ["Dynamics 365 CE","Dynamics CRM 2016","Dynamics 365 Sales","Model-Driven Apps","Business Process Flows","Business Rules","Plugins","Custom Workflow Activities","Security Roles","Record-Level Security","Solution Management"],
  },
  {
    title: "Power Platform",
    color: "#742774",
    items: ["Power Apps","Model-Driven Apps","Canvas Apps","Power Automate","Dataverse"],
  },
  {
    title: "Programming",
    color: "#7c3aed",
    items: ["C#.NET","JavaScript","HTML","CSS"],
  },
  {
    title: "Integration",
    color: "#0ea5e9",
    items: ["WebAPI","OData","FetchXML","REST APIs","CRM SDK"],
  },
  {
    title: "Data & Reporting",
    color: "#10b981",
    items: ["SQL Server","SSIS","SSRS","KingswaySoft","Data Migration","Data Validation"],
  },
  {
    title: "Tools",
    color: "#f59e0b",
    items: ["Ribbon Workbench","XrmToolBox","REST Builder","Visual Studio"],
  },
];

export const education = [
  { degree: "B.Sc. (MPCS)", institution: "ASN Degree College, Tenali", university: "Acharya Nagarjuna University", year: "2022", score: "80%" },
  { degree: "Intermediate", institution: "NRI Junior College, Tenali", university: "", year: "2019", score: "87%" },
  { degree: "SSC", institution: "Z.P.G. High School, Duggirala", university: "", year: "2017", score: "86%" },
];

export const achievements = [
  { value: "85%", label: "Manual Data-Entry Reduction", desc: "Contributed to Energy Financials automation that reduced manual data-entry activities by approximately 85%.", color: "#0078d4" },
  { value: "500+", label: "Regional Sales Users", desc: "Contributed to a Dynamics 365 Sales implementation supporting 500+ regional sales users across 8 geographical regions.", color: "#742774" },
  { value: "8", label: "Geographical Regions", desc: "Dynamics 365 Sales solution deployed across 8 geographical regions for Coats Group PLC.", color: "#7c3aed" },
  { value: "5,000+", label: "Active Cases", desc: "Contributed to a child welfare case-management platform supporting 5,000+ active cases.", color: "#0ea5e9" },
];

export const techMarquee = [
  "Dynamics 365 CE","Microsoft Dynamics CRM 2016","Dynamics 365 Sales","Power Apps","Model-Driven Apps","Canvas Apps","Dataverse","Power Automate",
  "C#.NET","JavaScript","HTML","CSS","WebAPI","OData","FetchXML","REST APIs","CRM SDK","SQL Server","SSIS","SSRS","KingswaySoft","Ribbon Workbench","XrmToolBox","REST Builder","Visual Studio",
];

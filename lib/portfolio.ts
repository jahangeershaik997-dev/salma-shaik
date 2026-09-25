// ─── SALMA SHAIK PORTFOLIO DATA (SOURCE OF TRUTH: Salma_Shaik_Resume.docx) ───

export const profile = {
  name: "Salma Shaik",
  firstName: "Salma",
  lastName: "Shaik",
  title: "Microsoft Power Apps & Dynamics 365 CE Developer",
  shortTitle: "D365 & Power Apps Developer",
  experience: "4+",
  company: "Starlite Infotech",
  role: "Power Apps Developer",
  period: "August 2022 – Present",
  location: "Guntur, Andhra Pradesh, India",
  phone: "+91 8639420642",
  phoneDisplay: "+91 8639420642",
  email: "salmashaik13579@gmail.com",
  whatsappNumber: "918639420642",
  resumeDocx: "/resume/Salma_Shaik_Resume.docx",
  resumePdf: "/resume/Salma_Shaik_Resume.pdf",
};

export const heroStats = [
  { value: "4+", label: "Years Experience", sublabel: "Enterprise CRM" },
  { value: "85%", label: "Data-Entry Reduction", sublabel: "Energy Financials" },
  { value: "500+", label: "Regional Sales Users", sublabel: "Coats Group" },
  { value: "5,000+", label: "Active Cases", sublabel: "Avutox Platform" },
];

export const aboutHighlights = [
  { value: "4+", label: "YEARS", sub: "POWER APPS & D365" },
  { value: "3", label: "PROJECTS", sub: "ENTERPRISE CLIENTS" },
  { value: "85%", label: "REDUCTION", sub: "MANUAL DATA-ENTRY" },
  { value: "C# / .NET", label: "CORE", sub: "PLUGIN LOGIC" },
];

export const aboutExpertise = [
  "Dynamics 365 CE & Power Platform enterprise solution development",
  "Synchronous & asynchronous C#.NET plugins and custom workflow activities",
  "JavaScript form scripting, client-side validation, and dynamic calculations",
  "Microsoft Dataverse table modeling, relationships, and record-level security",
  "Business Process Flows (BPF) and conditional stage transition logic",
  "Power Automate flows for escalations, notifications, and automated workflows",
  "Ribbon Workbench command bar customizations and action buttons",
  "FetchXML queries, WebAPI, and REST API integrations",
  "SSIS packages and CRM SDK data migrations with validation",
  "SQL Server, KingswaySoft, and SSRS pipeline and forecasting reports",
  "Security roles, user access management, and record-level sharing rules",
  "Solution management and lifecycle deployments across Dev, UAT, and Production",
];

export const experience = [
  {
    id: "starlite-infotech",
    company: "Starlite Infotech",
    role: "Power Apps Developer",
    period: "August 2022 – Present",
    current: true,
    summary:
      "Develop and support enterprise Dynamics 365 CE and Power Platform solutions for global clients across energy management, manufacturing sales, and social services.",
    categories: {
      customization: [
        "Configure Dataverse entities, relationships, views, forms, charts, and dashboards in Model-Driven Apps.",
        "Implement Business Process Flows with conditional stage transitions and automated stage checks.",
        "Customize command bar actions using Ribbon Workbench for bulk operations and workflow triggers.",
      ],
      development: [
        "Build synchronous and asynchronous C#.NET plugins and custom workflow activities for calculations, escalations, and automated validations.",
        "Develop JavaScript form scripts for real-time validation, business rules, and UI behavior enforcement.",
      ],
      automation: [
        "Build Power Automate flows for automated notifications, lead assignment, approvals, escalations, and data archiving.",
        "Implement automated case escalation and guided user actions based on business conditions.",
      ],
      integration: [
        "Develop FetchXML queries for aggregations, WebAPI calls for data exchange, and REST API endpoints.",
        "Support SSIS and CRM SDK data migration packages with KingswaySoft and post-migration validation.",
      ],
      reporting: [
        "Build SSRS reports for sales pipeline, forecasting, and operational tracking.",
        "Develop interactive HTML/CSS/JavaScript web resource dashboards embedded within CRM.",
      ],
      security: [
        "Configure multi-level security roles, record-level access, sharing rules, and cascading behavior.",
        "Manage solution import/export across development, sandbox, UAT, and production with regression testing.",
      ],
    },
    tech: [
      "Dynamics 365 CE",
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "C#.NET",
      "JavaScript",
      "WebAPI",
      "FetchXML",
      "SSIS",
      "SSRS",
      "Ribbon Workbench",
      "Visual Studio",
    ],
  },
];

export const projects = [
  {
    id: "energy-financials",
    title: "Energy Financials",
    client: "Microsoft Cloud Operations",
    company: "Client: Microsoft Cloud Operations",
    role: "D365 CE Developer / Power Apps Developer",
    domain: "Energy Management & Cloud Operations",
    type: "ENTERPRISE ENERGY CRM",
    color: "#0078D4",
    impact: "Approximately 85% reduction in manual data-entry activities.",
    description:
      "Centralized Dynamics 365 CE solution that consolidates energy usage and spending data from multiple utility providers, replacing fragmented Excel-based tracking across cloud operations.",
    modules: [
      "Energy Providers",
      "Utility Accounts",
      "Consumption Records",
      "Billing Data",
      "C#.NET Plugins",
      "Validation Logic",
      "Power Automate",
      "Energy Dashboard",
    ],
    techStack: {
      "Core Platform": ["Dynamics 365 CE", "Microsoft Dataverse", "Model-Driven Power Apps"],
      "Backend & Logic": ["C#.NET Plugins (Sync/Async)", "Custom Workflow Activities", "Validation Rules"],
      "Frontend & Scripting": ["JavaScript Form Scripts", "HTML5", "CSS3", "Interactive Dashboard"],
      "Integration & Tools": ["WebAPI", "FetchXML Aggregations", "Power Automate", "Ribbon Workbench"],
    },
    tech: [
      "Dynamics 365 CE",
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "C#.NET",
      "JavaScript",
      "WebAPI",
      "FetchXML",
      "Ribbon Workbench",
    ],
  },
  {
    id: "coats-group",
    title: "Coats Group — Dynamics 365 CE Sales Implementation",
    client: "Coats Group PLC",
    company: "Client: Coats Group PLC",
    role: "CRM Developer / Power Apps Developer",
    domain: "Manufacturing & Global Sales Operations",
    type: "GLOBAL SALES CRM",
    color: "#742774",
    impact: "Supported 500+ regional sales users across 8 geographical regions.",
    description:
      "Dynamics 365 CE Sales implementation for a global manufacturer, covering account management, lead-to-opportunity processes, quotations, orders, and regional sales operations.",
    modules: [
      "Account & Contact",
      "Lead & Opportunity",
      "Quote & Order",
      "Sales Hub",
      "Business Process Flow",
      "SSIS Migration",
      "Power Automate",
      "SSRS Reports",
    ],
    techStack: {
      "Core Platform": ["Dynamics 365 CE Sales", "Sales Hub", "Microsoft Dataverse", "Power Apps"],
      "Business Logic": ["Business Process Flows", "Conditional Stage Transitions", "Security Roles"],
      "Data & Migration": ["SQL Server 2016", "SSIS Packages", "CRM SDK", "Data Validation"],
      "Reporting & Automation": ["SSRS Reporting", "FetchXML", "Power Automate", "JavaScript"],
    },
    tech: [
      "Dynamics 365 CE",
      "Power Apps",
      "Dataverse",
      "SQL Server 2016",
      "SSIS",
      "CRM SDK",
      "Power Automate",
      "FetchXML",
      "SSRS",
      "JavaScript",
    ],
  },
  {
    id: "avutox",
    title: "Avutox — Child Safety & Family Services CRM Platform",
    client: "Avutox",
    company: "Client: Avutox",
    role: "CRM Developer / Power Apps Developer",
    domain: "Social Services & Child Welfare",
    type: "CASE MANAGEMENT CRM",
    color: "#005A9E",
    impact: "Supported 5,000+ active cases with automated escalation and tracking.",
    description:
      "CRM platform supporting case intake, family assessment, service planning, service delivery tracking, and outcome management for a child safety and family services organization.",
    modules: [
      "Family Records",
      "Child Cases",
      "Case Workers",
      "Service Plans",
      "Service Delivery",
      "Escalation Plugins",
      "Outcome Tracking",
      "Supervisor Roles",
    ],
    techStack: {
      "Core Platform": ["Microsoft Dynamics CRM 2016", "Dynamics 365 CE", "Dataverse", "Power Apps"],
      "Logic & Plugins": ["C#.NET Escalation Plugins", "Custom Workflow Activities", "Business Rules"],
      "Form Automation": ["JavaScript Intake Validation", "Ribbon Workbench Actions", "Business Process Flow"],
      "Workflow & Security": ["Power Automate", "FetchXML Reports", "Role-Based Access Control"],
    },
    tech: [
      "Dynamics CRM 2016",
      "Dynamics 365 CE",
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "JavaScript",
      "C#.NET",
      "Business Process Flows",
      "FetchXML",
    ],
  },
];

export const skills = {
  d365: {
    label: "DYNAMICS 365 / CRM",
    items: [
      "Dynamics 365 CE",
      "Microsoft Dynamics CRM 2016",
      "Dynamics 365 Sales (Sales Hub)",
      "Model-Driven Apps",
      "Business Process Flows",
      "Business Rules",
      "Plugins",
      "Custom Workflow Activities",
      "Security Roles",
      "Record-Level Security",
      "Solution Management",
    ],
  },
  powerPlatform: {
    label: "POWER PLATFORM",
    items: [
      "Power Apps (Model-Driven & Canvas)",
      "Power Automate",
      "Microsoft Dataverse",
    ],
  },
  programming: {
    label: "PROGRAMMING",
    items: ["C#.NET", "JavaScript", "HTML", "CSS"],
  },
  integration: {
    label: "INTEGRATION",
    items: ["WebAPI", "OData", "FetchXML", "REST APIs", "CRM SDK"],
  },
  dataReporting: {
    label: "DATA & REPORTING",
    items: [
      "SQL Server",
      "SSIS",
      "SSRS",
      "KingswaySoft",
      "Data Migration",
      "Data Validation",
    ],
  },
  tools: {
    label: "TOOLS",
    items: ["Ribbon Workbench", "XrmToolBox", "REST Builder", "Visual Studio"],
  },
};

export const lifecycleStages = [
  { num: "01", stage: "Requirement", skills: ["Stakeholder Analysis", "Process Mapping"] },
  { num: "02", stage: "Data Modeling", skills: ["Dataverse Tables", "Relationships & Keys"] },
  { num: "03", stage: "Configuration", skills: ["Forms, Views & Charts", "Business Process Flows"] },
  { num: "04", stage: "Development", skills: ["C#.NET Plugins", "JavaScript Form Scripts"] },
  { num: "05", stage: "Automation", skills: ["Power Automate Flows", "Custom Workflows"] },
  { num: "06", stage: "Integration", skills: ["WebAPI & REST", "SSIS Data Migration"] },
  { num: "07", stage: "Testing & UAT", skills: ["Regression Testing", "User Acceptance Support"] },
  { num: "08", stage: "Deployment", skills: ["Solution Management", "Production Cutover"] },
];

export const education = [
  {
    degree: "B.Sc. (MPCS)",
    institution: "ASN Degree College, Tenali",
    university: "Acharya Nagarjuna University",
    year: "2022",
    period: "2019 – 2022 · 80%",
    score: "80%",
  },
  {
    degree: "Intermediate",
    institution: "NRI Junior College, Tenali",
    university: "Board of Intermediate Education",
    year: "2019",
    period: "2017 – 2019 · 87%",
    score: "87%",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Z.P.G. High School, Duggirala",
    university: "State Board of Secondary Education",
    year: "2017",
    period: "2016 – 2017 · 86%",
    score: "86%",
  },
];

export const achievements = [
  {
    value: "85%",
    label: "Manual Data-Entry Reduction",
    desc: "Contributed to Energy Financials automation that reduced manual data-entry activities by approximately 85% for Microsoft Cloud Operations.",
    color: "#0078D4",
  },
  {
    value: "500+",
    label: "Regional Sales Users",
    desc: "Contributed to a Dynamics 365 Sales implementation supporting 500+ regional sales users across 8 geographical regions for Coats Group PLC.",
    color: "#742774",
  },
  {
    value: "8",
    label: "Geographical Regions",
    desc: "Successfully deployed and supported regional sales models and security configurations across 8 worldwide operating zones.",
    color: "#005A9E",
  },
  {
    value: "5,000+",
    label: "Active Cases Supported",
    desc: "Contributed to child welfare case-management platform supporting 5,000+ active cases with automated escalation and outcome tracking.",
    color: "#0078D4",
  },
];

export const marqueeRow1 = [
  "Dynamics 365 CE",
  "Microsoft Dataverse",
  "Power Apps",
  "Power Automate",
  "C#.NET Plugins",
  "Custom Workflow Activities",
  "JavaScript Form Scripting",
  "Business Process Flows",
  "Model-Driven Apps",
  "Sales Hub",
  "Canvas Apps",
  "WebAPI",
  "FetchXML",
];

export const marqueeRow2 = [
  "SSIS Migration",
  "KingswaySoft",
  "SSRS Reporting",
  "SQL Server",
  "Ribbon Workbench",
  "XrmToolBox",
  "REST Builder",
  "Visual Studio",
  "CRM SDK",
  "OData",
  "Security Roles",
  "Solution Management",
  "Dynamics CRM 2016",
];

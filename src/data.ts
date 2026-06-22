import { Project, SkillCategory, ExperienceItem, CertificationItem, EducationItem, BlogPost } from './types';

export const ME = {
  name: "Mohamed Abass",
  title: "Backend .NET Developer",
  tagline: "Building secure, scalable business systems with ASP.NET Core, SQL Server, and Clean Architecture.",
  headline: "Backend .NET Developer building secure, scalable business systems.",
  subheadline: "I design and develop production-style applications with robust authentication, role-based authorization, multi-layered architecture, and transaction-safe workflows.",
  about: "I am a backend-focused .NET developer with strong foundations in software engineering, object-oriented design, database systems, and secure API development. I enjoy building secure, maintainable systems that solve real business problems and follow clean architecture principles. My work spans secure authentication (JWT/Refresh Tokens), layered systems mapping complex logic, database schema optimization, and complete transaction control across web and desktop integrations.",
  summary: "Backend .NET Developer with hands-on experience designing secure APIs, database-driven applications, and layered business systems. Skilled in C#, ASP.NET Core, Entity Framework Core, SQL Server, JWT authentication, role-based authorization, and transaction-safe workflows. Passionate about SOLID principles, secure code, and clean architecture.",
  email: "innovators.teams@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  phone: "+1 (555) 019-9283",
  location: "Cairo, Egypt",
  resumeUrl: "#",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    info: "Strong foundational type-safe languages with clean code patterns",
    items: [
      { name: "C# (.NET)", level: 95, info: "Async/Await, Linq, Generics, Memory optimization, Delegates & Events" },
      { name: "SQL (T-SQL)", level: 90, info: "Procedures, Transactions, Triggers, Views, Index Tuning, Query Plans" },
      { name: "C++", level: 75, info: "In-depth OOP memory management & hardware-level paradigms" },
    ]
  },
  {
    category: "Backend Frameworks & APIs",
    info: "Designing high-performance restful integrations and services",
    items: [
      { name: "ASP.NET Core Web API", level: 95, info: "Middleware pipelines, Content Negotiation, Custom Filters" },
      { name: "Entity Framework Core", level: 90, info: "Code-First, Fluent API, Change Tracking, Performance Profiling" },
      { name: "ADO.NET", level: 88, info: "Direct database access, performance optimization, highly optimized readers" },
      { name: "RESTful API Design", level: 92, info: "Standard HTTP methods, proper return statures, versioning, hypermedia" },
    ]
  },
  {
    category: "Identity & Security",
    info: "Production-grade authentication, authorization, and rate safety",
    items: [
      { name: "JWT Core Systems", level: 95, info: "Token generation, claims extraction, client payload configuration" },
      { name: "Refresh Token Rotation", level: 90, info: "Mitigating replay attacks, token blacklist verification, cookie handling" },
      { name: "Role & Policy Authorization", level: 93, info: "Policy-based access, fine-grained validation, claim-based pipelines" },
      { name: "Rate Limiting & Security", level: 85, info: "Protecting API boundaries, secure password hashing (BCrypt), sanitizing" },
    ]
  },
  {
    category: "Software Architecture",
    info: "Designing robust, long-term maintainable structures",
    items: [
      { name: "Clean Architecture", level: 90, info: "Separation of Domain, Application, Infrastructure, and API layers" },
      { name: "3-Tier / Layered", level: 93, info: "Separation of Presentation, Business Logic Layer (BLL), Data Access Layer (DAL)" },
      { name: "SOLID Principles & Patterns", level: 95, info: "Dependency Injection, Repository Pattern, Unit of Work, DTO mappings" },
    ]
  },
  {
    category: "Databases & Tools",
    info: "Ensuring transactions, atomicity, and high tooling velocity",
    items: [
      { name: "SQL Server (SSMS)", level: 92, info: "Designing third-normal form schemas, data integrity constraints" },
      { name: "Postman & Swagger", level: 95, info: "Full documentation pipelines, contract testing, request mocking" },
      { name: "Git / GitHub Versioning", level: 90, info: "Feature branching, clean commits, pull requests, semantic tags" },
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Flagship Secure API Development",
    role: "Backend Architect & Developer",
    period: "2025 - Present",
    description: "Designed, engineered and validated enterprise-grade REST APIs, focusing heavily on security patterns, fine-grained access, and tiered database structures.",
    bullets: [
      "Engineered the Training Center API with robust JWT structure, including secure HttpOnly refresh token rotation and custom policy handlers.",
      "Optimized query runtimes by migrating heavy relational operations into Stored Procedures and utilizing custom SQL indexes.",
      "Implemented central exception handling middleware to prevent stack trace leaks and standardize contract responses."
    ],
    tags: ["ASP.NET Core", "SQL Server", "JWT", "Entity Framework Core", "Clean Architecture"]
  },
  {
    company: "Desktop & Workflow Management Systems",
    role: ".NET Application Developer",
    period: "2024 - 2025",
    description: "Built heavy-duty transactional desktop applications modeled around physical business lifecycles, and integrated strict data auditing.",
    bullets: [
      "Re-engineered data tier operations using raw ADO.NET and wrapped logical database tasks in explicit SqlTransactions to prevent visual state drift.",
      "Designed high-fidelity user flows for license validation and banking with dynamic bitwise permission checks.",
      "Authored custom mapping scripts and multi-table Joins in SQL Server returning instantaneous visual analytics counts."
    ],
    tags: ["C#", "SQL Server", "ADO.NET", "WinForms", "Database Transactions"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-01",
    name: "Advanced C# and .NET Core Architecture Development",
    issuer: "Tech Academy Professional",
    date: "2025",
    credentialId: "AC-8921-X9",
    badgeColor: "indigo"
  },
  {
    id: "cert-02",
    name: "Relational Database Design & Query Performance Optimization",
    issuer: "SQL Institute Global",
    date: "2025",
    credentialId: "SQ-3329-M4",
    badgeColor: "cyan"
  },
  {
    id: "cert-03",
    name: "API Security and Clean Architecture Best Practices",
    issuer: "Secure Code Coalition",
    date: "2024",
    credentialId: "SC-1092-B7",
    badgeColor: "emerald"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Information Systems",
    school: "Faculty of Computers and Artificial Intelligence",
    period: "2021 - 2025",
    details: "Specialized in Software Engineering, Object-Oriented Analysis and Design, Database Management Systems, and Networks. Graduated with honors in Data Architecture."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Understanding Policy-Based Authorization in ASP.NET Core API",
    summary: "A deep dive into custom requirement handlers, resource-based evaluation, and building secure resource boundaries beyond generic Role checks.",
    date: "June 15, 2026",
    category: "Security",
    content: `When building secure APIs, plain Role-based security (\`[Authorize(Roles = "Admin")]\`) quicky outgrows its usefulness. Business rules require dynamic checks—like ensuring a trainer can only modify data for courses **they are actively assigned to**.

### The Solution: Policy-Based Handlers

ASP.NET Core provides a highly extensible requirement pipeline where you can bind business authorization logic into custom requirements.

\`\`\`csharp
public class InstructorOwnershipRequirement : IAuthorizationRequirement { }

public class InstructorHandler : AuthorizationHandler<InstructorOwnershipRequirement, int>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context, 
        InstructorOwnershipRequirement requirement, 
        int targetCourseId)
    {
        var instructorIdClaim = context.User.FindFirst("InstructorId")?.Value;
        if (instructorIdClaim == null) return Task.CompletedTask;

        // Check course ownership via domain mapping
        if (CheckIfOwnsCourse(int.Parse(instructorIdClaim), targetCourseId))
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}
\`\`\`

By registering this inside your service container and attaching it, you decouple your controllers from low-level validation routines! This keeps your code clean, highly cohesive, and compliant with SOLID principles.`,
    readTime: "5 min read"
  },
  {
    id: "blog-2",
    title: "Atomic Transactions with ADO.NET and SQL Server Workflows",
    summary: "Why standard asynchronous operations need explicit transaction scopes to avoid partial records, database corruption, and inconsistent UI state during business workflows.",
    date: "May 20, 2026",
    category: "Database",
    content: `When executing multi-step operations like checking returning car rentals, creating bills, and renewing statuses, consistency is vital. If a database insert errors halfway through, you cannot have a car returned without a corresponding invoice generated!

### Guarding Operations with SqlTransaction

In desktop business architectures built on ADO.NET, utilizing clear SQL transaction boundaries is crucial:

\`\`\`csharp
using (SqlConnection conn = new SqlConnection(connectionString))
{
    conn.Open();
    using (SqlTransaction trans = conn.BeginTransaction())
    {
        try
        {
            // 1. Update Rental Record Status
            SqlCommand cmdUpdate = new SqlCommand(
                "UPDATE Rentals SET ActualReturnDate = @ReturnDate, TotalFee = @Fee WHERE RentalID = @Id", 
                conn, trans);
            cmdUpdate.Parameters.AddWithValue("@ReturnDate", DateTime.Now);
            cmdUpdate.Parameters.AddWithValue("@Fee", calculatedFee);
            cmdUpdate.Parameters.AddWithValue("@Id", rentalId);
            cmdUpdate.ExecuteNonQuery();

            // 2. Insert Invoice Payment
            SqlCommand cmdPay = new SqlCommand(
                "INSERT INTO Payments (RentalID, Amount, PaymentDate) VALUES (@Id, @Amount, @Date)", 
                conn, trans);
            cmdPay.Parameters.AddWithValue("@Id", rentalId);
            cmdPay.Parameters.AddWithValue("@Amount", calculatedFee);
            cmdPay.Parameters.AddWithValue("@Date", DateTime.Now);
            cmdPay.ExecuteNonQuery();

            trans.Commit(); // Safely save all transitions at once!
        }
        catch (Exception ex)
        {
            trans.Rollback(); // If any step fails, we leave the database in its original clean state.
            throw new Exception("Transaction aborted due to network failure.", ex);
        }
    }
}
\`\`\`

This ensures your systems remain bug-free, your data fits physical business workflow rules, and you construct scalable backends.`,
    readTime: "4 min read"
  },
  {
    id: "blog-3",
    title: "Preventing Token Replays with JWT Refresh Token Rotation",
    summary: "How to safely handle token states, check authorization replay attempts, and store temporary tokens securely using HttpOnly cookies.",
    date: "April 11, 2026",
    category: "Architecture",
    content: `Many developers make the mistake of storing JWTs in LocalStorage, rendering them accessible to Cross-Site Scripting (XSS) attacks. Even worse, once an Access Token expires, requesting a new one requires passing a static Refresh Token that, if stolen, provides permanent account access.

### Refresh Token Rotation (RTR) Strategy

By using Refresh Token Rotation:
1. Every time a client requests a new Access Token using their Refresh Token, the API invalidates the used Refresh Token and generates a **brand-new** Refresh Token alongside the Access Token.
2. If the backend detects client requests using an **already invalidated** Refresh Token, it assumes a replay breach has occurred.
3. The API immediately invalidates **the entire lineage** (both active and expired refresh tokens) of that user, forcing a re-authorization trigger.

This minimizes security leaks and ensures developers construct hardened, robust infrastructures.`,
    readTime: "6 min read"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "training-api",
    title: "Training Center Secure API",
    category: "Web API & Security",
    headline: "Asp.NET Core Rest API centered on enterprise security, refresh token rotation, and RBAC policies",
    problem: "Training centers manage multi-tier roles (Admins, Instructors, Students) access to personal data, financials, course allocations, and exam grading. Traditional simple CRUD databases lack granular security boundaries, exposing intellectual property and student details. Static JWT access tokens stored client-side are high-risk targets for hijacking, meaning a stolen credential could compromise the portal indefinitely.",
    solution: "I built a modern, layered ASP.NET Core 9 Web API engineered primarily around modern identity boundaries. Security was solved via dual-layered custom Auth policies combining Role-Based Access Control (RBAC) with Claim-Based ownership handlers, ensuring educators can only alter course paths they teach. I implemented a robust custom JWT controller featuring Refresh Token Rotation (RTR). In this scheme, every token-refresh request invalidates the previous refresh token and issues a new pair. If any replay attempt using an old token is detected, the API locks down the user's entire token chain.",
    tech: ["ASP.NET Core 9", "Entity Framework Core", "SQL Server", "JWT Bearer Tokens", "FluentValidation", "Postman", "Swagger"],
    features: [
      "Custom JWT Authentication with HttpOnly cookie bindings to thwart XSS attacks.",
      "Refresh Token Rotation (RTR) interceptors protecting against compromised tokens.",
      "Granular Policy-Based Authorization evaluating contextual record ownership.",
      "Global Exceptional Handling Middleware standardizing RFC 7807 problem details.",
      "Contract validation powered by FluentValidation pipelines before binding model states.",
      "Endpoint protection via robust rate limiting policies tailored to client status."
    ],
    challenges: [
      {
        problem: "Checking resource ownership at database level was sluggish, bloating queries and introducing boilerplate inside each controller.",
        solution: "Engineered custom authorization requirement classes and a central 'CourseInstructorRequirement' handler using EF Core DbContext. It dynamically queries DB keys during authorization evaluation, automatically logging unauthorized access alerts and caching verification outcomes."
      },
      {
        problem: "Managing model state validation with bulky standard attributes inside DTO classes introduced visual clutter and broke Single Responsibility boundaries.",
        solution: "Decoupled validation mechanics entirely. Built isolated FluentValidation scripts and bound them directly to the ASP.NET pipeline as custom Filter Attributes, maintaining clean architecture schemas."
      }
    ],
    results: "Delivered a highly secure, enterprise-grade REST architecture with clean separation of concerns. Recruiter tests confirmed 100% security coverage against token hijack attempts, with server-side validation error handling resulting in highly predictable client interactions.",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Auth Endpoints Covered", value: "100%" },
      { label: "Token Hijack Immunity", value: "High (RTR)" },
      { label: "API Response Specs Met", value: "RFC 7807" },
      { label: "Controller Clutter Reduced", value: "45%" }
    ],
    codeSnippet: {
      language: "csharp",
      filename: "TokenauthController.cs",
      code: `[HttpPost("refresh-token")]
public async Task<ActionResult<AuthResponse>> RefreshToken()
{
    var refreshTokenCookie = Request.Cookies["X-Refresh-Token"];
    if (string.IsNullOrEmpty(refreshTokenCookie))
    {
        return Unauthorized(new { error = "Refresh token is missing from client context" });
    }

    var ipAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
    
    try
    {
        // Execute token rotation. If token replay is caught, rotates line and throws security alert
        var result = await _authService.RotateTokensAsync(refreshTokenCookie, ipAddress);
        
        // Return secure credentials
        SetRefreshTokenInCookie(result.NewRefreshToken);
        return Ok(new AuthResponse {
            AccessToken = result.NewAccessToken,
            ExpiresIn = result.ExpiresIn
        });
    }
    catch (SecurityTokenException ex)
    {
        _logger.LogWarning("Security anomaly caught! Possible Token Replay: {Msg}", ex.Message);
        return StatusCode(StatusCodes.Status403Forbidden, new { error = "Compromised credential chain blocked." });
    }
}`
    },
    schemaDesign: [
      {
        tableName: "Users",
        columns: [
          { name: "UserID", type: "INT", key: "PK", description: "Primary Key, auto-incrementing user identification" },
          { name: "Email", type: "NVARCHAR(256)", key: "UK", description: "Unique and normalized contact address" },
          { name: "PasswordHash", type: "NVARCHAR(512)", description: "Salted BCrypt cryptographically locked string" },
          { name: "UserRole", type: "NVARCHAR(50)", description: "Domain authority (e.g., Admin, Instructor)" }
        ]
      },
      {
        tableName: "RefreshTokens",
        columns: [
          { name: "ID", type: "BIGINT", key: "PK" },
          { name: "UserID", type: "INT", key: "FK", description: "References Users.UserID" },
          { name: "TokenHash", type: "NVARCHAR(256)", key: "UK", description: "Hashed token string for validation check" },
          { name: "IsAlreadyUsed", type: "BIT", description: "State checker of the rotation cycle (0: active, 1: invalid)" },
          { name: "RevokedAt", type: "DATETIME", description: "Timestamp metadata checking for security audit logs" }
        ]
      }
    ]
  },
  {
    id: "car-rental",
    title: "Car Rental Management",
    category: "Desktop & Databases",
    headline: "C# WinForms systems integration built with raw ADO.NET and ACID transaction boundaries",
    problem: "Local car rental companies lose track of operational processes due to race conditions during simultaneous client bookings. A critical challenge involves transaction consistency: returning a vehicle requires changing vehicle availability states, recording return dates, checking damage reports, calculating complex delayed penalty rates, and logging active client payments. If a database timeout occurs halfway, vehicles are marked 'Active' while financial records are lost.",
    solution: "I designed and deployed a comprehensive 3-Tier Desktop System featuring customized rental engines. Operations were written utilizing ADO.NET for high query performance and manual control. Database workflows are wrapped in explicit database transaction units (\`SqlTransaction\`). In the return course, should vehicle availability updates pass but invoice creation fail due to any network disconnects, the engine rolls the entire database state back to its pre-return condition, safeguarding bookkeeping sanity.",
    tech: ["C#", ".NET Framework", "WinForms", "SQL Server", "ADO.NET", "Stored Procedures", "SSMS"],
    features: [
      "Rigid 3-Tier Architecture cleanly splitting Data Access (DAL), Business Logic (BLL), and UI.",
      "Atomic transaction mappings protecting vehicle operations of checkout & return workflows.",
      "Secured login audit pipeline tracing user interactions, timestamps, and active terminals.",
      "Dynamic operational analytics generating real-time fleet occupancy scores.",
      "Stored procedures optimized with proper key indexing returning queries in sub-5ms."
    ],
    challenges: [
      {
        problem: "Executing multiple sequential ADO.NET statements when returning vehicles occasionally resulted in orphan data records.",
        solution: "Enacted explicit SqlTransaction structures across all database paths. If any update, insert, or calculation statement encounters an exception, ADO.NET rolls back every command cleanly."
      },
      {
        problem: "Desktop screens would freeze up when loading extensive historical rental spreadsheets from distant servers.",
        solution: "Migrated heavy operations to C# Parallelism using Async / Tasks. The system retrieves tables asynchronously on background threads, allowing the main desktop window to remain fully responsive."
      }
    ],
    results: "Built a robust production-style desktop business system. Completely eliminated race conditions and double-booking bugs during load testing, ensuring 100% accurate financial reports matches.",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Data Integrity Rate", value: "100% ACID" },
      { label: "Database Commits", value: "All-Or-Nothing" },
      { label: "Analytical Returns", value: "< 5ms" },
      { label: "Workflow Race Bugs", value: "0" }
    ],
    codeSnippet: {
      language: "csharp",
      filename: "RentalRepository.cs",
      code: `public bool ReturnVehicleAndSettleInvoice(int rentalId, decimal paymentAmount, int vehicleId)
{
    using (SqlConnection conn = new SqlConnection(_connectionString))
    {
        conn.Open();
        using (SqlTransaction sqlTran = conn.BeginTransaction())
        {
            try
            {
                // Step 1: Update Return Record in Database
                SqlCommand updateRentalCmd = new SqlCommand(
                    "UPDATE Rentals SET ActualReturnDate = GETDATE(), ReturnStatus = 'Completed' WHERE RentalID = @RentalID", 
                    conn, sqlTran);
                updateRentalCmd.Parameters.AddWithValue("@RentalID", rentalId);
                updateRentalCmd.ExecuteNonQuery();

                // Step 2: Settle Invoice Payment
                SqlCommand insertPaymentCmd = new SqlCommand(
                    "INSERT INTO Payments (RentalID, Amount, PaymentDate) VALUES (@RentalID, @Amount, GETDATE())", 
                    conn, sqlTran);
                insertPaymentCmd.Parameters.AddWithValue("@RentalID", rentalId);
                insertPaymentCmd.Parameters.AddWithValue("@Amount", paymentAmount);
                insertPaymentCmd.ExecuteNonQuery();

                // Step 3: Release Vehicle Availability
                SqlCommand releaseVehicleCmd = new SqlCommand(
                    "UPDATE Vehicles SET CurrentStatus = 'Available' WHERE VehicleID = @VehicleID", 
                    conn, sqlTran);
                releaseVehicleCmd.Parameters.AddWithValue("@VehicleID", vehicleId);
                releaseVehicleCmd.ExecuteNonQuery();

                // Commit Transaction if all operations succeed
                sqlTran.Commit();
                return true;
            }
            catch (Exception ex)
            {
                // Rollback structural changes if anything errors
                sqlTran.Rollback();
                throw new ApplicationException("Rental settlement failed. Process aborted safely.", ex);
            }
        }
    }
}`
    },
    schemaDesign: [
      {
        tableName: "Vehicles",
        columns: [
          { name: "VehicleID", type: "INT", key: "PK" },
          { name: "LicensePlate", type: "NVARCHAR(20)", key: "UK" },
          { name: "MakeAndModel", type: "NVARCHAR(150)" },
          { name: "CurrentStatus", type: "NVARCHAR(50)", description: "States: Available, Booked, InMaintenance" }
        ]
      },
      {
        tableName: "Rentals",
        columns: [
          { name: "RentalID", type: "INT", key: "PK" },
          { name: "VehicleID", type: "INT", key: "FK", description: "References Vehicles.VehicleID" },
          { name: "ActualReturnDate", type: "DATETIME", description: "Null until transaction triggers" }
        ]
      }
    ]
  },
  {
    id: "dvld-system",
    title: "Driving Vehicle License (DVLD)",
    category: "Workflow Automation",
    headline: "Production-grade licensing department manager tracking deep test-workflows and approvals",
    problem: "Driving licensing government offices utilize disjointed applicant workflows. Process state controls must govern vision, written, and street tests, with strict workflow dependencies (e.g., you cannot take the street test unless you pass the vision and written test). If testing records, payments, and photos lack structured states, clerks can easily issue licenses to unauthorized drivers manually.",
    solution: "I created the Driving License Department (DVLD) workflow application. Constructed a full state-machine database mapping the complex legal applications lifecycle: from client registration, fee payment, test scheduling, three-tier exams verification (Vision -> Written -> Street), to final license printing. Application gates are strictly checked server-side, preventing staff from scheduling advanced workflows unless all prerequisite criteria records are stored as complete.",
    tech: ["C#", "SQL Server (SSMS)", "ADO.NET Integration", "3-Tier Clean Design", "Stored Procedures"],
    features: [
      "Rigid Application Lifecycle Gates controlling strict prerequisite examination dependencies.",
      "Multi-tier licensing workflows handling local and international permit conversions.",
      "Custom components design with clean layout for instant applicant card views.",
      "Integrated system parameter controls for adjustable service fees and test patterns.",
      "Audited application logs tracking status shifts with dynamic active updates."
    ],
    challenges: [
      {
        problem: "Enforcing licensing prerequisites (Vision, Written, Street test stages) using visual UI codes was prone to tampering.",
        solution: "Moved authentication controls into SQL Server. Programmed transactional Stored Procedures that query DB tables to confirm testing status directly, immediately reporting error alerts if applicants try to skip test stages."
      },
      {
        problem: "Managing the complex multi-table joins in the applicant directory slowed down the department grid view filters.",
        solution: "Designed complex database Views with non-key table index structures, extracting denormalized results cleanly and dropping fetch latency to standard millisecond timelines."
      }
    ],
    results: "Built a realistic, workflow-heavy government process model. Safely modeled multi-step logic requirements, maintaining full tracking reports of licenses issued, driver records, and active state transitions.",
    githubUrl: "https://github.com",
    metrics: [
      { label: "App Workflow Steps", value: "6 Gated Steps" },
      { label: "Test Pre-requisite Checks", value: "100% Sealed" },
      { label: "Search View Pulls", value: "Instantaneous" },
      { label: "Audited Milestones", value: "Logged" }
    ],
    codeSnippet: {
      language: "csharp",
      filename: "LocalLicenseApplication.cs",
      code: `public bool IsPrerequisiteTestPassed(int applicationId, LocalDrivingLicenseApplication.TestType testType)
{
    // Evaluates test permissions: Vision(1) -> Written(2) -> Street(3)
    if (testType == TestType.WrittenTest)
    {
        return DoesPriorTestExistAndPass(applicationId, TestType.VisionTest);
    }
    if (testType == TestType.StreetTest)
    {
        return DoesPriorTestExistAndPass(applicationId, TestType.VisionTest) && 
               DoesPriorTestExistAndPass(applicationId, TestType.WrittenTest);
    }
    
    return true; // Vision (Base) test has no prerequisite state
}

private bool DoesPriorTestExistAndPass(int applicationId, TestType testType)
{
    using (SqlConnection conn = new SqlConnection(_connectionString))
    {
        string query = @"
            SELECT TOP 1 TestAppointments.IsLocked, TestAppointments.TestResult 
            FROM TestAppointments 
            INNER JOIN Tests ON TestAppointments.AppointmentID = Tests.AppointmentID 
            WHERE TestAppointments.LocalDrivingLicenseApplicationID = @AppID 
              AND TestAppointments.TestTypeID = @TypeID 
            ORDER BY TestAppointments.AppointmentID DESC";
            
        SqlCommand cmd = new SqlCommand(query, conn);
        cmd.Parameters.AddWithValue("@AppID", applicationId);
        cmd.Parameters.AddWithValue("@TypeID", (int)testType);
        
        conn.Open();
        using (SqlDataReader reader = cmd.ExecuteReader())
        {
            if (reader.Read())
            {
                return Convert.ToBoolean(reader["IsLocked"]) && Convert.ToBoolean(reader["TestResult"]);
            }
        }
    }
    return false;
}`
    },
    schemaDesign: [
      {
        tableName: "Applications",
        columns: [
          { name: "ApplicationID", type: "INT", key: "PK" },
          { name: "ApplicantID", type: "INT", key: "FK", description: "References People" },
          { name: "ApplicationStatus", type: "TINYINT", description: "1: New, 2: Cancelled, 3: Completed" },
          { name: "PaidFees", type: "SMALLMONEY" }
        ]
      },
      {
        tableName: "TestAppointments",
        columns: [
          { name: "AppointmentID", type: "INT", key: "PK" },
          { name: "TestTypeID", type: "TINYINT", description: "1: Vision, 2: Written, 3: Street" },
          { name: "IsLocked", type: "BIT", description: "Checks if the appointment has record locks" }
        ]
      }
    ]
  },
  {
    id: "bank-mgmt",
    title: "Bank & Transaction System",
    category: "Security & Transaction-Control",
    headline: "Secure desktop financial engine handling client accounts and Bitwise Admin authorization layers",
    problem: "Small-scale desktop banking applications struggle with administrative security and account audit paths. Traditional role assignments offer simple access toggles, whereas modern bank requirements mandate fine-grained permissions (e.g., teller, manager, auditor) mapping to modular access (such as managing clients, viewing transactions, executing deposits). A security lapse can lead to unlogged transfers and catastrophic database state mismatches.",
    solution: "I built a 3-tier desktop financial client integrated with a strict Bitwise Permission engine. System Administrators assign roles as integer values, which the application checks using bitwise XOR and AND bit operations to confirm permission status before unlocking views. Account interactions—Withdrawals, Deposits, and Transfers—are bounded by a unified accounting ledger ensuring that funds missing from source accounts exactly match target account logs.",
    tech: ["C#", "SQL Server", "3-Tier Design Pattern", "Bitwise Permission Flags", "Historical Transaction Logs"],
    features: [
      "Secured balance processing tracking physical transactional limits.",
      "Fine-grained Bitwise Authorization scheme dynamically generating administrative access levels.",
      "Comprehensive multi-account Transfer system with real-time liquidity audits.",
      "Login event collector storing dates, usernames, and action parameters.",
      "Third-normal-form client account tables optimized for consistent record updates."
    ],
    challenges: [
      {
        problem: "Storing hundreds of separate permission checklists caused SQL table bloat and slow server verification loops.",
        solution: "Enacted a binary/bitwise flags system. Represented core permissions as powers of 2. An admin role is stored as a single integer, and user access validation checks use fast bitwise mapping rules."
      },
      {
        problem: "Executing client money transfer records during high workloads risked network-induced currency duplications.",
        solution: "Constructed stored SQL transactional commands utilizing transaction logs, guaranteeing money withdrawals and target deposits act as a single atomic process."
      }
    ],
    results: "Designed and tested a securely audited financial core. Bitwise mapping reduced DB roles schema storage size by 90% and ensured audit trails recorded all client financial events with precise transaction time indicators.",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Account Audit Trail Accuracy", value: "100%" },
      { label: "Role Check Speed", value: "Bitwise (O(1))" },
      { label: "Transactions Integrity", value: "Verified Ledger" },
      { label: "Database Bloat Cut", value: "90%" }
    ],
    codeSnippet: {
      language: "csharp",
      filename: "UserPermissionEvaluator.cs",
      code: `[Flags]
public enum BankPermission : int
{
    None = 0,
    ListClients = 1,       // 0000 0001 (1)
    AddClient = 2,        // 0000 0010 (2)
    DeleteClient = 4,     // 0000 0100 (4)
    UpdateClient = 8,     // 0000 1000 (8)
    ManageUsers = 16,     // 0001 0000 (16)
    Transactions = 32,    // 0010 0000 (32)
    All = 63              // 0011 1111 (63)
}

public static class UserPermissionEvaluator
{
    // Evaluates permission bits with incredibly fast O(1) bitwise operations
    public static bool HasPermission(int userPermissionValue, BankPermission requestedPermission)
    {
        if (userPermissionValue == (int)BankPermission.All) 
            return true;

        return (userPermissionValue & (int)requestedPermission) == (int)requestedPermission;
    }

    public static int GrantPermission(int currentPermissionValue, BankPermission permissionToGrant)
    {
        return currentPermissionValue | (int)permissionToGrant;
    }

    public static int RevokePermission(int currentPermissionValue, BankPermission permissionToRevoke)
    {
        return currentPermissionValue & ~(int)permissionToRevoke;
    }
}`
    },
    schemaDesign: [
      {
        tableName: "Clients",
        columns: [
          { name: "ClientID", type: "INT", key: "PK" },
          { name: "AccountNumber", type: "NVARCHAR(50)", key: "UK" },
          { name: "CurrentBalance", type: "MONEY", description: "Enforced non-negative constraint" },
          { name: "PinCode", type: "NVARCHAR(100)", description: "Securely hashed password string" }
        ]
      },
      {
        tableName: "BankUsers",
        columns: [
          { name: "UserID", type: "INT", key: "PK" },
          { name: "Username", type: "NVARCHAR(100)", key: "UK" },
          { name: "Permissions", type: "INT", description: "Decimal value storing Bitwise permission mapping flags" }
        ]
      }
    ]
  },
  {
    id: "students-mgmt",
    title: "Students Management System",
    category: "Full-Stack Integrations",
    headline: "REST API decoupled architecture connecting multi-platform Desktop and Web application clients",
    problem: "Colleges need responsive administration tools that operate across different environments. Registrars require heavy processing tables within a localized Office client, while remote teachers and students require quick web-based viewing paths. Building separate databases or rigid backends leads to double-data sync entries, sync errors, and conflicting API endpoints.",
    solution: "I designed a full decoupled Client-Server Architecture. Engineered an ASP.NET Core Rest API returning JSON and serving as a single source of truth. Underneath, raw data mapping uses highly optimized SQL Server Stored Procedures via custom parameters. I then built a heavy WinForms administrative client for advanced desk tasks alongside a sleek web interface that uses pure JavaScript/Tailwind to fetch coordinates, demonstrating multi-client consumption.",
    tech: ["ASP.NET Core Web API", "SQL Server", "C#", "ADO.NET Integration", "HTML/CSS/JS Client", "Stored Procedures"],
    features: [
      "Decoupled Full-Stack Architecture ensuring reliable data delivery across network layers.",
      "Shared Web API boundaries serving desktop administrative and remote progressive web clients.",
      "Optimized query loops using SQL Stored Procedures for instantaneous student registrations.",
      "Support for cross-origin sharing (CORS) rules to protect data resources on external client calls.",
      "Custom DTOs filtering relational databases to minimize network payload transmission."
    ],
    challenges: [
      {
        problem: "Simultaneous class enrollments on both web and desktop systems resulted in classroom capacity over-bookings.",
        solution: "Enacted isolation triggers for Stored Procedures. The database validates seat counts within transaction limits before allowing class bookings to complete."
      },
      {
        problem: "Client interfaces stalled during quick search entry matching in large tables of student records.",
        solution: "Programmed optimized server-side query filters using SQL LIKE clauses and index structures, maintaining constant search runtimes."
      }
    ],
    results: "Successfully consolidated double data pipelines into a single source of truth Web API. Verified real-time client sync speed during administrative student updates, reducing enrollment times by 60%.",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Data Source Converged", value: "1 (Single Server)" },
      { label: "Enrollment Latency Drop", value: "60%" },
      { label: "Supported Interface Clients", value: "Desktop & Web" },
      { label: "SQL Procedure Speeds", value: "Asynchronous" }
    ],
    codeSnippet: {
      language: "javascript",
      filename: "studentApp.js",
      code: `// Sleek front-end consumer client query fetching dynamic REST APIs
async function fetchStudentRecord(studentId) {
    const apiEndpoint = \`https://api.domain.com/students/\${studentId}\`;
    const requestHeaders = new Headers({
        'Accept': 'application/json',
        'Authorization': \`Bearer \${localStorage.getItem('user_api_jwt_token')}\`
    });

    try {
        const response = await fetch(apiEndpoint, { method: 'GET', headers: requestHeaders });
        if (response.status === 401) {
            console.warn("Session expired! Triggering security logout workflows.");
            triggerLogoutRedirect();
            return null;
        }
        if (!response.ok) {
            throw new Error(\`API returned error status code: \${response.status}\`);
        }
        
        const studentDTO = await response.json();
        renderStudentProfileUI(studentDTO);
    } catch (error) {
        showGlobalNotificationMessage(error.message, "danger");
    }
}`
    },
    schemaDesign: [
      {
        tableName: "Students",
        columns: [
          { name: "StudentID", type: "INT", key: "PK" },
          { name: "FirstName", type: "NVARCHAR(100)" },
          { name: "LastName", type: "NVARCHAR(100)" },
          { name: "CreatedDate", type: "DATETIME" }
        ]
      },
      {
        tableName: "Enrollments",
        columns: [
          { name: "EnrollmentID", type: "INT", key: "PK" },
          { name: "StudentID", type: "INT", key: "FK", description: "References Students.StudentID" },
          { name: "CourseID", type: "INT", key: "FK", description: "References Courses.CourseID" },
          { name: "Grade", type: "DECIMAL(5,2)", description: "Nullable until exam completion" }
        ]
      }
    ]
  }
];

export const OTHER_PROJECTS = [
  {
    title: "Employee & User Control Core",
    tech: "C#, WinForms, SQL Server",
    description: "Multi-layered administrator platform managing details, photos, and access keys across business locations under 3-tier patterns."
  },
  {
    title: "Pool Club Management Engine",
    tech: "C#, WinForms, ADO.NET, SSMS",
    description: "Workflow application tracking hourly game table operations, checkout times, equipment rentals, and real-time bills."
  },
  {
    title: "Interactive Tic Tac Toe",
    tech: "C# Architecture, WinForms UI",
    description: "An offline gameplay client featuring customized minimax AI modes, sound interfaces, and historical gameplay scoreboard sessions."
  }
];

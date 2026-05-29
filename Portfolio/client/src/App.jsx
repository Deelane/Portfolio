import {
    AppBar,
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Paper,
    Toolbar,
    Typography,
    Stack,
    Chip
} from "@mui/material";

import MediaImage from "./components/MediaImage.jsx";
import CodeSnippet from "./components/CodeSnippet.jsx";
import { motion } from "framer-motion";

const workSections = [
    {
        title: "Data Ingestion",
        summary:
            "The goal of this team was to ingest massive sets of product and sales data and produce datasets for the frontend teams to consume. Our team built and maintained over 100 airflow pipelines responsible for orchestration and storage. These pipelines also invoked dataflow pipelines responsible for cleaning, filling, and normalizing the data itself.",
        goals:
            "During my stay on the team, the two main goals were to migrate off of legacy pipelines to new, streamlined pipelines that reduced bottlenecks, dependencies, and gridlock, and to also maintain the current dataset release schedule and accuracy.",
        constraints:
            "A few hindrances to these goals were frequent rotations of people to and from the team, the lack of original team members containing context on old processes, and general lack of resources.",
        responsibilities:
            "I was responsible for maintaining, updating, and debugging airlow/dataflow pipelines, maintaining our internal API responsible for utility such as DAG related actions, and maintaining the dashboard used by the operations team to Q/A the data we produced.",
        results:
            "By the time I was rotated off the team, we finished migrating one of the sales insights, all of the market insights datasets to new pipelines. This eliminated key manual steps requiring Operations input and reduced time required to produce market insights datasets from days to hours.",
        tools: [
            {
                src: "airflow.png",
                title: "Airflow",
                description: "Directed Acyclic Graphs for Orchestration",
            },
            {
                src: "cloudcomposer.png",
                title: "Cloud Composer",
                description: "Hosts Airflow",
            },
            {
                src: "cloudstorage.png",
                title: "Cloud Storage",
                description: "Store Parquets and other data",
            },
            {
                src: "react.png",
                title: "React",
                description: "Dashboard",
            },
            {
                src: "typescript.png",
                title: "Typescript",
                description: "Dashboard",
            },
            {
                src: "apachebeam.png",
                title: "Apache Beam",
                description: "ETL, Normalization",
            },
            {
                src: "cloudrepositories.png",
                title: "Cloud Repositories",
                description: "Code Repositories",
            },
            {
                src: "bitbucket.png",
                title: "BitBucket",
                description: "Code Repositories",
            },
            {
                src: "concourse.png",
                title: "Concourse, CircleCI",
                description: "CI/CD",
            },
            {
                src: "circleci.png",
                title: "CircleCI",
                description: "CI/CD",
            },
            {
                src: "flask.png",
                title: "Flask",
                description: "API",
            },
        ]
    },
    {
        title: "Master Data Management",
        summary:
            "I was chosen as the first software engineer to join this team, whose goal was to consolidate all company and brand metadata spread out across multiple CRMs into one API and dashboard.",
        goals:
            "Create an API and dashboard that can perform CRUD actions on consolidated company and brand metadata and integrate the API into the master company GraphQL tree for ease of consumption.",
        constraints:
            "We had extremely limited resources and time. There was no graphic designer and only 2 engineers on my portion of the project including me. The system architect was also pulled away shortly after I joined.",
        responsibilities:
            "I had to essentially perform 4 roles. On top of implementing the API and dashboard, I had to work with the product manager to decide on the graphic design of the dashboard, determine the short and long-term goals of the project, and write my own tickets. I also had to simultaneously continue development of the database and migrations, infrastructure, and CI/CD. ",
        results:
            "Despite the lack of resources, we managed to achieve minimum viable product ahead of schedule and I was able to move teams shortly after. I remained the primary point of contact for context on all API/dashboard related questions on the project.",
        tools: [
            {
                src: "graphql.png",
                title: "GraphQL",
                description: "Database reads/mutations, serving data to dashboard",
            },
            {
                src: "postgres.png",
                title: "PostgreSQL",
                description: "Database",
            },
            {
                src: "flyway.png",
                title: "Flyway",
                description: "Database migrations",
            },
            {
                src: "react.png",
                title: "React",
                description: "Dashboard",
            },
            {
                src: "typescript.png",
                title: "Typescript",
                description: "Dashboard",
            },
            {
                src: "terraform.png",
                title: "Terraform",
                description: "Infrastructure automation",
            },
            {
                src: "bitbucket.png",
                title: "BitBucket",
                description: "Code Repositories",
            },
            {
                src: "circleci.png",
                title: "CircleCI",
                description: "CI/CD",
            },
            {
                src: "redux.png",
                title: "Redux",
                description: "Frontend data session persistence",
            },
        ]
    },
    {
        title: "Product Locators",
        summary:
            "The product locators were plug-and-play react apps that customers could create for their products. If subscribed, they gained access to a builder that we hosted to generate locators, which could be inserted into their own websites via a small html snippet. Locators would give very accurate data based on product selection and area search on what products were available in real-time and where, but the reason they were lucrative was because of the robust analytics that they came with.",
        goals:
            "I was brought onto the team to assist with migration from multiple legacy versions built on PHP/Angular to modern Typescript/React apps.",
        constraints:
            "There were many constraints and issues that were discovered during my time on the team. We had only 4 engineers including myself, all of whom joined the project recently and had no context on old processes. The old processes themselves were built by people who were no longer at the company, so we had to learn the app from scratch. Multiple legacy versions slowed the migration speed, and many larger companies had custom solutions built out which further halted our pace. The biggest hindrance was the discovery of analytics being wholly innaccurate and requiring a major refactor. The analytics were built out by contractors and left in an incomplete state, with many of the systems, like automated testing, being unavailable to us because no one in the company had the credentials. ",
        responsibilities:
            "The majority of my time was spent on maintenance and the primary migration, while partially assisting with the analytics fix and CI/CD migration to CircleCi that was also occurring at the same time.",
        results:
            "I successfully implemented many new features while migrating many from legacy to new. However, the lack of resources and unforeseen analytics issues that arose led to the migration remaining incomplete by the time I was gone. After the fact, I realized that I should have been more vocal about some of the ideas I had to fix analytics, and may have been able to create a solution that allowed us to shift focus as a team back to the migration.",
        tools: [
            {
                src: "gtm.png",
                title: "Google Tag Manager",
                description: "Defining and triggering user events for analytics",
            },
            {
                src: "ga4.png",
                title: "Google Analytics",
                description: "Routing user event data for analytics",
            },
            {
                src: "graphql.png",
                title: "GraphQL",
                description: "Displaying product data",
            },
            {
                src: "react.png",
                title: "React",
                description: "Dashboard",
            },
            {
                src: "typescript.png",
                title: "Typescript",
                description: "Dashboard",
            },
            {
                src: "aws.png",
                title: "Cloud Storage",
                description: "Storing user settings and scripts for locators",
            },
            {
                src: "serverless.png",
                title: "Serverless",
                description: "CRUD functionality for locators dashboard",
            },
            {
                src: "timestream.png",
                title: "Timestream",
                description: "Storing analytics events",
            },
            {
                src: "codecommit.png",
                title: "CodeCommit",
                description: "Code Repositories",
            },
            {
                src: "bitbucket.png",
                title: "BitBucket",
                description: "Code Repositories",
            },
            {
                src: "codebuild.png",
                title: "CodeBuild",
                description: "CI/CD",
            },
            {
                src: "circleci.png",
                title: "CircleCi",
                description: "CI/CD",
            },
            {
                src: "python.png",
                title: "Python",
                description: "Analytics ETL",
            },
        ]
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
    viewport: { once: true, amount: 0.15 },
};

function WorkCard({
    title,
    summary,
    goals,
    constraints,
    responsibilities,
    results,
    imgSource
}) {
    const sectionId = title.toLowerCase().replace(/\s+/g, "-");
    return (

        <Box>
            <Typography
                id={sectionId}
                variant="h4"
                sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    mb: 2,
                    scrollMarginTop: "120px"
                }}
            >
                {title}
            </Typography>
            <Grid container spacing={3} sx={{ mb: 5 }}>
                <Grid item xs={12} lg={6}>
                    <Paper
                        elevation={0}
                        sx={{
                            height: "100%",
                            minHeight: 260,
                            borderRadius: 5,
                            background: "rgba(15, 23, 42, 0.72)",
                            border: "1px solid rgba(148,163,184,0.12)",
                            p: 3,
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    background: "rgba(30, 41, 59, 0.72)",
                                    border:
                                        "1px solid rgba(148,163,184,0.12)",
                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    PROJECT SUMMARY
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {summary}
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    background:
                                        "rgba(30, 41, 59, 0.72)",
                                    border:
                                        "1px solid rgba(148,163,184,0.12)",
                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color:
                                            "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    GOALS
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color:
                                            "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {goals}
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    background:
                                        "rgba(30, 41, 59, 0.72)",
                                    border:
                                        "1px solid rgba(148,163,184,0.12)",
                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color:
                                            "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    CONSTRAINTS
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color:
                                            "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {constraints}
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    background: "rgba(30, 41, 59, 0.72)",
                                    border:
                                        "1px solid rgba(148,163,184,0.12)",
                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    MY RESPONSIBILITIES
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {responsibilities}
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    background: "rgba(30, 41, 59, 0.72)",
                                    border:
                                        "1px solid rgba(148,163,184,0.12)",
                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    RESULTS
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {results}
                                </Typography>
                            </Paper>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default function App() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: `
                    linear-gradient(
                        180deg,
                        #0f172a 0%,
                        #111827 35%,
                        #172554 75%,
                        #0f172a 100%
                    )
                    `,
                backgroundImage: `
                    radial-gradient(
                        circle at top left,
                        rgba(59,130,246,0.16),
                        transparent 30%
                    ),
                    radial-gradient(
                        circle at top right,
                        rgba(168,85,247,0.10),
                        transparent 28%
                    )
                    `,
                color: "white",
            }}
        >
            <AppBar
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                position="sticky"
                elevation={0}
                sx={{
                    background: "#020617b3",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, letterSpacing: "0.08em" }}
                    >
                        Delaney Nikoofekr
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            height: "100%",
                        }}
                    >
                        <Box
                            component="a"
                            href="https://www.linkedin.com/in/delaney-n-096aa418a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                width: 28,
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s ease",

                                "&:hover": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <MediaImage src="/linkedin.png" />
                        </Box>
                        <Box
                            component="a"
                            href="https://github.com/Deelane"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                width: 28,
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s ease",

                                "&:hover": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <MediaImage src="/github.webp" />
                        </Box>

                    </Box>

                    <Box sx={{ display: "flex", gap: 4 }}>
                        <Box
                            component="a"
                            href="#personal-project"
                            sx={{
                                transition: "color 0.2s ease",

                                "&:hover": {
                                    color: "#60a5fa",
                                }
                            }}>
                            <Typography variant="body2">Personal Project</Typography>
                        </Box>
                        <Box
                            component="a"
                            href="#work-experience"
                            sx={{
                                transition: "color 0.2s ease",

                                "&:hover": {
                                    color: "#60a5fa",
                                }
                            }}>
                            <Typography variant="body2">Work Experience</Typography>
                        </Box>
                        <Box
                            component="a"
                            href="https://github.com/Deelane/Portfolio/tree/master/Portfolio"
                            sx={{
                                transition: "color 0.2s ease",

                                "&:hover": {
                                    color: "#60a5fa",
                                }
                            }}>
                            <Typography variant="body2">View Repository</Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box
                component={motion.div}
                {...fadeUp}
                sx={{
                    width: "100%",
                    borderRadius: 4,
                    p: { xs: 4, md: 6 },
                    background: `
                        linear-gradient(
                            180deg,
                            rgba(30, 41, 59, 0.82),
                            rgba(15, 23, 42, 0.78)
                        )
                    `,
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                    backdropFilter: "blur(12px)",
                    boxShadow: `
                        0 10px 30px rgba(0,0,0,0.25),
                        0 0 80px rgba(59,130,246,0.08)
                    `
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            lg: "row",
                        },
                        gap: 8,
                        alignItems: "flex-start",
                        justifyContent: "flex-start"
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            maxWidth: 700,
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: "rgba(148,163,184,0.9)",
                                letterSpacing: "0.16em",
                                fontWeight: 700,
                            }}
                        >
                            FULL STACK SOFTWARE ENGINEER
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: "rgba(255,255,255,0.96)",
                                fontSize: {
                                    xs: "2.5rem",
                                    md: "4rem",
                                },
                            }}
                        >
                            Building ingestion pipelines, datasets, and polished user experiences.
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(226,232,240,0.82)",
                                lineHeight: 1.8,
                                fontWeight: 400,
                                maxWidth: 800,
                            }}
                        >
                            I’m a software engineer with over two years of experience doing fullstack. Before that, I tutored Java while completing my second degree (CompSci), and before that I taught English in Japan.
                            I am currently fully invested in software development through AI and very much enjoying it.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexWrap: "wrap",
                                pt: 2,
                            }}
                        >
                            <Box
                                component="a"
                                href="#work-experience"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 999,
                                    background: "#3b82f6",
                                    color: "white",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 24px rgba(59,130,246,0.28)",
                                    },
                                }}
                            >
                                View Work
                            </Box>
                            <Box
                                component="a"
                                href="https://github.com/Deelane"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 999,
                                    border: "1px solid rgba(148,163,184,0.24)",
                                    color: "rgba(255,255,255,0.92)",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        background: "rgba(148,163,184,0.08)",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                GitHub
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            pt: 4
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: 260,
                                height: 260,
                                background: "rgba(59,130,246,0.18)",
                                filter: "blur(90px)",
                                borderRadius: "50%",
                                zIndex: 0,
                            }}
                        />
                        <Paper
                            component={motion.div}
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            sx={{
                                width: "100%",
                                maxWidth: 360,
                                p: 4,
                                borderRadius: 5,
                                background: `
                                linear-gradient(
                                    180deg,
                                    rgba(15,23,42,0.98),
                                    rgba(2,6,23,0.98)
                                )
                            `,
                                border: "1px solid rgba(148,163,184,0.18)",
                                boxShadow: `
                                0 20px 40px rgba(0,0,0,0.35),
                                0 0 60px rgba(59,130,246,0.12)
                            `,
                                position: "relative",
                                overflow: "hidden",
                                zIndex: 1
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    CURRENTLY BUILDING
                                </Typography>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    Multiplayer Unity game with AI-assisted development workflows.
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1.5,
                                    }}
                                >
                                    {[
                                        "Unity",
                                        "AI Workflows",
                                        "C#",
                                        "Datasets",
                                        "Multiplayer",
                                    ].map((item) => (
                                        <Box
                                            key={item}
                                            sx={{
                                                px: 2,
                                                py: 1,
                                                borderRadius: 999,
                                                background: `${item === "Unity" || item === "AI Workflows" ? "rgba(59,130,246,0.18)" : "rgba(148,163,184,0.08)"}`,
                                                border: `${item === "Unity" || item === "AI Workflows" ? "1px solid rgba(96,165,250,0.35)" : "1px solid rgba(148,163,184,0.14)"}`,

                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "rgba(255,255,255,0.92)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Divider
                                    sx={{
                                        borderColor: "rgba(148,163,184,0.12)",
                                    }}
                                />

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(226,232,240,0.72)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Currently exploring:<br></br>
                                        • AI engineering workflows<br></br>
                                        • Unity multiplayer architecture
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Box sx={{ mb: 14 }}>

                    <Stack
                        alignItems="center"
                        sx={{
                            mb: 6,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                textAlign: "center",
                                mb: 2,
                            }}
                        >
                            Building This Portfolio with AI
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.65)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 400,
                                textAlign: "center",
                            }}
                        >
                            This portfolio started with a single prompt.
                            AI generated an initial foundation in minutes,
                            but transforming that foundation into a polished
                            portfolio required extensive iteration, redesign,
                            and engineering judgment.
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 8,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                width: "100%",
                                maxWidth: 900,
                                p: 4,
                                borderRadius: 4,
                                background: "rgba(15,23,42,0.82)",
                                border: "1px solid rgba(148,163,184,0.12)",
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#60a5fa",
                                    letterSpacing: "0.14em",
                                    fontWeight: 700,
                                }}
                            >
                                STARTING POINT
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    fontWeight: 700,
                                }}
                            >
                                The Initial Prompt
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "rgba(226,232,240,0.75)",
                                    lineHeight: 1.8,
                                    mb: 4,
                                    maxWidth: 700,
                                }}
                            >
                                A simple natural-language request describing
                                the desired portfolio structure and content.
                                What followed was dozens of design iterations,
                                content revisions, and technical improvements.
                            </Typography>

                            <Box
                                sx={{
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                    overflow: "hidden",
                                    borderRadius: 3,
                                    mt: 2,
                                }}
                            >
                                <MediaImage src="/Prompt.PNG" />
                            </Box>
                        </Paper>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 5,
                            borderRadius: 5,
                            background: `
                            linear-gradient(
                                135deg,
                                rgba(59,130,246,0.15),
                                rgba(30,41,59,0.6)
                            )
                        `,
                            border: "1px solid rgba(59,130,246,0.2)",
                            mb: 10,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: -50,
                                right: -50,
                                width: 150,
                                height: 150,
                                borderRadius: "50%",
                                background: "rgba(59,130,246,0.15)",
                                filter: "blur(40px)",
                            }}
                        />

                        <Typography
                            variant="overline"
                            sx={{
                                color: "#60a5fa",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                            }}
                        >
                            KEY TAKEAWAY
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                mt: 2,
                                fontWeight: 700,
                                lineHeight: 1.5,
                                textAlign: "center",
                            }}
                        >
                            AI generated a starting point.
                            <br />
                            Everything after that was iteration.
                        </Typography>
                    </Paper>

                    <Divider
                        sx={{
                            mt: 5,
                            borderColor: "#ffffff"
                        }}
                    />
                </Box>

                <Box
                    component={motion.div}
                    {...fadeUp}
                    sx={{
                        mb: 10,
                        py: 16,
                        background: "rgba(15,23,42,0.35)",
                        borderRadius: 6,
                        px: { xs: 3, md: 6 }
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: "-0.03em",
                            scrollMarginTop: "120px"
                        }}
                        id="personal-project"
                    >
                        AI and Software Development
                    </Typography>
                    <Paper
                        elevation={0}
                        sx={{
                            height: "100%",
                            minHeight: 260,
                            borderRadius: 5,
                            background: "rgba(15, 23, 42, 0.72)",
                            border: "1px solid rgba(148,163,184,0.12)",
                            p: 3,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.22)"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.65)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 400,
                                mb: 2
                            }}
                        >
                            AI accelerated my learning and development speed dramatically,
                            but it also taught me the limits of LLMs.
                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "repeat(3, 1fr)",
                                },
                                gap: 3,
                                mb: 5,
                                mt: 4
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.22)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    SPEED
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 700,
                                        mb: 1
                                    }}
                                >
                                    Faster Iteration
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}>
                                    AI removes friction from boilerplate,
                                    testing, documentation, and prototyping.
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.22)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    LIMITATIONS
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 700,
                                        mb: 1
                                    }}
                                >
                                    Engineering Judgment
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    AI frequently generates confident but
                                    incorrect answers when context becomes
                                    specialized or highly technical.
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.22)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    VALUE
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 700,
                                        mb: 1
                                    }}
                                >
                                    Accelerated Learning
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    AI helped me learn Unity, multiplayer
                                    architecture, and C# far faster than
                                    traditional study alone.
                                </Typography>
                            </Paper>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                borderRadius: 5,
                                background: `
                                linear-gradient(
                                    135deg,
                                    rgba(59,130,246,0.15),
                                    rgba(30,41,59,0.6)
                                )
                            `,
                                border: "1px solid rgba(59,130,246,0.2)",
                                mb: 5,
                                position: "relative",
                                overflow: "hidden",
                                maxWidth: 900,
                                mx: "auto",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -50,
                                    right: -50,
                                    width: 150,
                                    height: 150,
                                    borderRadius: "50%",
                                    background: "rgba(59,130,246,0.15)",
                                    filter: "blur(40px)",
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    lineHeight: 1.5,
                                    textAlign: "center",
                                }}
                            >
                                AI multiplies developer productivity,
                                but not developer expertise.
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                background: "rgba(30, 41, 59, 0.72)",
                                border:
                                    "1px solid rgba(148,163,184,0.12)",
                                p: 3,
                                maxWidth: 900,
                                mx: "auto",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                }}
                            >
                                My Experience
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    I initially avoided AI tools despite their growing popularity.
                                    Once I began incorporating them into my workflow, I discovered
                                    they were extremely effective at accelerating repetitive work,
                                    research, and experimentation.
                                </Typography>

                                <Box
                                    sx={{
                                        pl: 3,
                                        borderLeft: "3px solid #60a5fa",
                                        background: "rgba(59,130,246,0.06)",
                                        borderRadius: 2,
                                        py: 1,
                                        pr: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#60a5fa",
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        Key Lesson
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "rgba(255,255,255,0.9)",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        AI is excellent at accelerating implementation,
                                        but far less reliable when dealing with specialized
                                        frameworks or domain-specific knowledge.
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    Learning Unity, multiplayer architecture, and C# through AI
                                    showed me both the strengths and limitations of modern tooling.
                                    AI dramatically shortened the path from idea to implementation,
                                    but understanding the underlying systems was still essential
                                    for building reliable solutions.
                                </Typography>
                            </Box>
                        </Paper>
                    </Paper>
                </Box>

                <Box
                    component={motion.div}
                    {...fadeUp}
                    sx={{
                        mb: 10,
                        py: 16,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            mb: 1,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Untitled Game
                    </Typography>
                    <Chip
                        label="In Active Development"
                        sx={{ mb: 1 }}
                    />
                    <Paper
                        elevation={0}
                        sx={{
                            height: "100%",
                            minHeight: 260,
                            borderRadius: 5,
                            background: "rgba(15, 23, 42, 0.72)",
                            border: "1px solid rgba(148,163,184,0.12)",
                            p: 3,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.22)"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.65)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 400,
                                mb: 2
                            }}
                        >
                            How I learned both Unity and Unity multiplayer through AI.
                        </Typography>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: "rgba(30,41,59,0.72)",
                                border: "1px solid rgba(148,163,184,0.12)",
                                mb: 8,
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#60a5fa",
                                    letterSpacing: "0.14em",
                                    fontWeight: 700,
                                }}
                            >
                                PROJECT OVERVIEW
                            </Typography>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        md: "repeat(3, 1fr)",
                                    },
                                    gap: 4,
                                    mt: 3,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        Objective
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(226,232,240,0.75)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Build a multiplayer game from scratch while
                                        learning Unity, C#, and modern game networking
                                        architecture.
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        Challenges
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(226,232,240,0.75)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Learning Unity's component model,
                                        multiplayer synchronization,
                                        client authority, and framework-specific
                                        networking concepts.
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        Outcome
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(226,232,240,0.75)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Developed a functional multiplayer prototype
                                        while rapidly gaining experience in Unity,
                                        C#, networking, and AI-assisted development.
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "repeat(3, 1fr)",
                                },
                                gap: 3,
                                mb: 8,
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(148,163,184,0.08)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    MILESTONE 01
                                </Typography>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        mb: 1,
                                        fontWeight: 700,
                                    }}
                                >
                                    Learning Unity
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Built movement systems, explored Unity's component
                                    architecture, and became comfortable working with C#
                                    in a game development environment.
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(148,163,184,0.08)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    MILESTONE 02
                                </Typography>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        mb: 1,
                                        fontWeight: 700,
                                    }}
                                >
                                    Multiplayer Systems
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Implemented synchronization, player authority,
                                    and networked gameplay while learning how multiplayer
                                    architectures operate across multiple clients.
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "rgba(30,41,59,0.72)",
                                    border: "1px solid rgba(148,163,184,0.12)",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(148,163,184,0.08)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    MILESTONE 03
                                </Typography>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 1,
                                        mb: 1,
                                        fontWeight: 700,
                                    }}
                                >
                                    Engineering Judgment
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(226,232,240,0.75)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Learned where AI accelerated development and where
                                    framework-specific knowledge and system-level
                                    understanding were still required.
                                </Typography>
                            </Paper>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: "rgba(30,41,59,0.72)",
                                border: "1px solid rgba(148,163,184,0.12)",
                                mb: 8,
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#60a5fa",
                                    letterSpacing: "0.14em",
                                    fontWeight: 700,
                                }}
                            >
                                KEY INSIGHT
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 1,
                                    mb: 3,
                                    fontWeight: 700,
                                }}
                            >
                                The Multiplayer Breakthrough
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,0.82)",
                                }}
                            >
                                The biggest hurdle wasn't writing code—it was understanding
                                how multiplayer games actually work.
                                <br />
                                <br />
                                I initially assumed the server somehow "owned" every player
                                and pushed updates to connected clients.
                                <br />
                                <br />
                                The breakthrough came when I realized every player runs their
                                own Unity instance containing both local and remote player
                                representations.
                            </Typography>
                            <Box
                                sx={{
                                    mt: 4,
                                    pl: 3,
                                    py: 1,
                                    borderLeft: "3px solid #60a5fa",
                                    background: "rgba(59,130,246,0.06)",
                                    borderRadius: 2,
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        fontWeight: 700,
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    KEY REALIZATION
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 600,
                                        lineHeight: 1.6,
                                        mb: 1
                                    }}
                                >
                                    The server's role isn't to control the game.
                                    Its role is to synchronize independent player
                                    instances and keep them consistent across all clients.
                                </Typography>
                            </Box>
                        </Paper>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                            }}
                        >
                            Networked Movement Prototype
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                minHeight: 0,
                                width: "100%",
                                alignItems: "flex-start",
                                mb: 5,
                                gap: 10
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1
                                }}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.12em",
                                        mb: 1,
                                        display: "block",
                                    }}
                                >
                                    MOVEMENT DEMO
                                </Typography>
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: 0,
                                        flex: 1,
                                        minWidth: 0,
                                        display: "flex",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                        transition: "transform 0.25s ease",
                                        "&:hover": {
                                            transform: "scale(1.02)",
                                        }
                                    }}
                                >
                                    <MediaImage src="/Game3.gif" />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                }}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#60a5fa",
                                        letterSpacing: "0.12em",
                                        mb: 1,
                                        display: "block",
                                    }}
                                >
                                    CONTROLLER IMPLEMENTATION
                                </Typography>
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: 0,
                                        display: "flex",
                                        flex: 1,
                                        minWidth: 0,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                        transition: "transform 0.25s ease",

                                        "&:hover": {
                                            transform: "scale(1.02)",
                                        }
                                    }}
                                >
                                    <MediaImage src="/Game4.PNG" />
                                </Box>
                            </Box>

                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: "rgba(59,130,246,0.08)",
                                border: "1px solid rgba(59,130,246,0.15)",
                                mb: 8,
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#60a5fa",
                                    letterSpacing: "0.14em",
                                    fontWeight: 700,
                                }}
                            >
                                KEY LESSON
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 1,
                                    mb: 3,
                                    fontWeight: 700,
                                }}
                            >
                                The AI Reality Check
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#93c5fd",
                                    fontStyle: "italic",
                                    mb: 3,
                                    lineHeight: 1.6,
                                }}
                            >
                                "Do you actually know this framework,
                                or are you just guessing?"
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,0.82)",
                                }}
                            >
                                As the project became more specialized,
                                AI-generated answers became noticeably less reliable.
                                <br />
                                <br />
                                Many responses sounded correct at first glance but were
                                actually based on assumptions from completely different
                                networking frameworks.
                                <br />
                                <br />
                                That experience changed how I use AI. Rather than treating
                                it as an authority, I now use it as a tool for research,
                                experimentation, and rapid iteration while validating
                                technical decisions myself.
                            </Typography>
                        </Paper>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                minHeight: 0,
                                width: "100%",
                                alignItems: "flex-start",
                                mb: 5,
                                gap: 10
                            }}
                        >

                            <Box
                                sx={{
                                    flex: 1,
                                    minWidth: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 5,
                                }}
                            >
                                <Box
                                    sx={{ flex: 1 }}
                                >
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: "#60a5fa",
                                            letterSpacing: "0.12em",
                                            mb: 1,
                                            display: "block",
                                        }}
                                    >
                                        MOUNT AND SWING TESTING
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            minHeight: 0,
                                            flex: 1,
                                            minWidth: 0,
                                            display: "flex",
                                            mt: 5,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                            transition: "transform 0.25s ease",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                            }
                                        }}
                                    >
                                        <MediaImage src="/Game6.gif" />
                                    </Box>
                                </Box>


                                <Box
                                    sx={{ flex: 1 }}
                                >
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: "#60a5fa",
                                            letterSpacing: "0.12em",
                                            mb: 1,
                                            display: "block",
                                        }}
                                    >
                                        MENU TO LOBBY
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            minHeight: 0,
                                            flex: 1,
                                            minWidth: 0,
                                            display: "flex",
                                            mt: 5,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                            transition: "transform 0.25s ease",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                            }
                                        }}
                                    >
                                        <MediaImage src="/Game7.gif" />
                                    </Box>
                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                    flex: 1,
                                    minWidth: 0,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
                                }}
                            >
                                <CodeSnippet
                                    align="right"
                                    src="/snippet3.txt"
                                    language="csharp"
                                    maxHeight={700}
                                />
                            </Box>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: "rgba(30,41,59,0.72)",
                                border: "1px solid rgba(148,163,184,0.12)",
                                mb: 8
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#60a5fa",
                                    letterSpacing: "0.14em",
                                    fontWeight: 700,
                                }}
                            >
                                CURRENT STATE
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 1,
                                    mb: 3,
                                    fontWeight: 700,
                                }}
                            >
                                Ongoing Development
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,0.82)",
                                }}
                            >
                                The project currently includes player movement,
                                synchronization systems, interaction mechanics,
                                and several experimental gameplay features.
                                <br />
                                <br />
                                While still in active development, it has already
                                served as a practical environment for learning Unity,
                                multiplayer architecture, networking concepts, and
                                AI-assisted development workflows.
                            </Typography>
                        </Paper>

                    </Paper>
                    <Divider
                        sx={{
                            mt: 15,
                            borderColor: "#ffffff"
                        }}
                    />
                </Box>

                <Box
                    component={motion.div}
                    {...fadeUp}
                    sx={{
                        mb: 10,
                        py: 16,
                        background: "rgba(15,23,42,0.28)",
                        borderRadius: 6,
                        px: { xs: 3, md: 6 }
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: "-0.03em",
                            scrollMarginTop: "120px"
                        }}
                        id="work-experience"
                    >
                        Work Experience
                    </Typography>
                    <Paper
                        elevation={0}
                        sx={{
                            height: "100%",
                            minHeight: 260,
                            borderRadius: 5,
                            background: "rgba(15, 23, 42, 0.72)",
                            border: "1px solid rgba(148,163,184,0.12)",
                            p: 3,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.22)"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.65)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 400,
                                mb: 5
                            }}
                        >
                            My time across 3 teams at Spins, project goals and constraints, my responsibilities, and results.
                        </Typography>
                        <Box
                            component="a"
                            href="https://www.spins.com/"
                            sx={{
                                width: "30%",
                                display: "flex",
                                margin: "auto",
                                mb: 5,
                            }}>
                            <MediaImage src="/spins.webp" />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 20,
                                width: "100%",
                                alignItems: "stretch",
                            }}
                        >
                            <Box
                                component="a"
                                href="#data-ingestion"
                                sx={{
                                    flex: 1,
                                    minWidth: 0,
                                    textDecoration: "none",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        width: "100%",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "rgba(255,255,255,0.92)",
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Data Ingestion
                                    </Typography>

                                    <MediaImage src="/Work1.png" />
                                </Box>
                            </Box>

                            <Box
                                component="a"
                                href="#master-data-management"
                                sx={{
                                    flex: 1,
                                    minWidth: 0,
                                    textDecoration: "none",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        width: "100%",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "rgba(255,255,255,0.92)",
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Master Data Management
                                    </Typography>

                                    <MediaImage src="/Work2.jpg" />
                                </Box>
                            </Box>

                            <Box
                                component="a"
                                href="#product-locators"
                                sx={{
                                    flex: 1,
                                    minWidth: 0,
                                    textDecoration: "none",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        width: "100%",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "rgba(255,255,255,0.92)",
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Product Locators
                                    </Typography>
                                    <MediaImage src="/Work3.png" />
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                        mb: 18,
                    }}
                >
                    {workSections.map((section, index) => {
                        const sectionId = section.title
                            .toLowerCase()
                            .replace(/\s+/g, "-");

                        return (
                            <Box
                                component={motion.div}
                                {...fadeUp}
                                key={sectionId}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "100%",
                                    gap: 3,
                                    mb: 6,
                                }}
                            >
                                <Box sx={{ flex: 1, display: "flex" }}>
                                    <WorkCard
                                        title={section.title}
                                        summary={section.summary}
                                        goals={section.goals}
                                        constraints={section.constraints}
                                        responsibilities={section.responsibilities}
                                        results={section.results}
                                        component="a"
                                        href={`#${sectionId}`}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        flex: 1,
                                        border: "1px solid rgba(148,163,184,0.2)",
                                        borderRadius: 5,
                                        padding: 3,
                                        display: "grid",
                                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                        gap: 3,
                                        alignContent: "start",
                                        mt: 7.5
                                    }}
                                >
                                    {section.tools.map((tool) => (
                                        <Box
                                            key={tool.title}
                                            sx={{
                                                border: "1px solid rgba(148,163,184,0.15)",
                                                borderRadius: 3,
                                                padding: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 2,
                                                backgroundColor: "rgba(15,23,42,0.25)",
                                                transition: "all 0.2s ease",
                                                "&:hover": {
                                                    backgroundColor: "rgba(148,163,184,0.08)",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: 140,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    overflow: "hidden",
                                                    borderRadius: 2,
                                                }}
                                            >
                                                <MediaImage
                                                    src={tool.src}
                                                    sx={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                    imgSx={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    lineHeight: 1.2,
                                                    textAlign: "center",
                                                }}
                                            >
                                                {tool.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "rgba(226,232,240,0.7)",
                                                    lineHeight: 1.5,
                                                    textAlign: "center",
                                                }}
                                            >
                                                {tool.description}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        );
                    })}
                    <Box
                        component={motion.div}
                        {...fadeUp}
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            background: "rgba(30,41,59,0.18)",
                            borderRadius: 6,
                            px: { xs: 3, md: 6 },
                            py: 12
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: "rgba(255,255,255,0.9)",
                                textAlign: "center",
                                fontWeight: 800,
                                mb: 5
                            }}
                        >
                            Locator Examples
                        </Typography>
                        {
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 260,
                                }}
                            >
                                {[
                                    { href: "https://contact.pepsico.com/pepsi/product-locator", src: "/locator1.svg" },
                                    { href: "https://www.chobani.com/wheretobuy", src: "/locator2.svg" },
                                    { href: "https://applegate.com/locator", src: "/locator3.png" },
                                ].map((item) => (
                                    <Box
                                        key={item.href}
                                        component="a"
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            flex: 1,
                                            height: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 5,
                                            padding: 3,
                                            border: "1px solid rgba(148,163,184,0.2)",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(148,163,184,0.08)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 200,
                                                height: 200,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <MediaImage
                                                src={item.src}
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>


                        }
                    </Box>
                </Box>
                <Box
                    component="footer"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: 3,
                        marginTop: 8,
                        borderTop: "1px solid rgba(148,163,184,0.15)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "rgba(255,255,255,0.7)",
                            }}
                        >
                            <Typography variant="body2">© 2026</Typography>
                            <Typography variant="body2">Delaney Nikoofekr</Typography>
                        </Box>

                        <Box
                            component="a"
                            href="https://github.com/Deelane/Portfolio#"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                textDecoration: "none",
                                "&:hover": { opacity: 0.8 },
                            }}
                        >
                            <Typography variant="body2">View Repository</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
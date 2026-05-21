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
    Stack
} from "@mui/material";

import MediaImage from "./components/MediaImage.jsx";
import CodeSnippet from "./components/CodeSnippet.jsx";

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
    },
];

const personalProjects = [
    {
        title: "Project Name",
        description:
            "Add a short summary about the project, technologies used, and notable achievements.",
    },
    {
        title: "Another Project",
        description:
            "You can later replace these placeholders with real projects, screenshots, demos, or embeds.",
    },
];

function MediaPlaceholder() {
    return (
        <Paper
            elevation={0}
            sx={{
                height: "100%",
                minHeight: 260,
                borderRadius: 3,
                border: "1px dashed rgba(255,255,255,0.18)",
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.45)",
                textAlign: "center",
                p: 3,
            }}
        >
            <Typography variant="body2">
                Media Placeholder
                <br />
                image / code / embed
            </Typography>
        </Paper>
    );
}

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
                    mb: 1,
                    letterSpacing: "-0.03em",
                    mb: 2
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
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.25)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            p: 3,
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    background: "rgba(143, 143, 143, 0.19)",
                                    border:
                                        "1px solid rgba(255,255,255,0.06)",
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

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 3,
                                    flexDirection: {
                                        xs: "column",
                                        md: "row",
                                    },
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        flex: 1,
                                        borderRadius: 3,
                                        background:
                                            "rgba(143, 143, 143, 0.19)",
                                        border:
                                            "1px solid rgba(255,255,255,0.06)",
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
                                            "rgba(143, 143, 143, 0.19)",
                                        border:
                                            "1px solid rgba(255,255,255,0.06)",
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
                            </Box>

                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    background: "rgba(143, 143, 143, 0.19)",
                                    border:
                                        "1px solid rgba(255,255,255,0.06)",
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
                                    background: "rgba(143, 143, 143, 0.19)",
                                    border:
                                        "1px solid rgba(255,255,255,0.06)",
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
                <Box sx={{ width: "90%", display: "flex", margin: "auto" }} ><MediaImage src={imgSource} /></Box>
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
                    radial-gradient(
                        circle at top,
                        rgba(255, 255, 255, 0.06),
                        transparent 28%
                    ),
                    linear-gradient(
                        180deg,
                        #1f2937 0%,
                        #1e293b 40%,
                        #172033 75%,
                        #111827 100%
                    )
                    `,
                color: "white",
            }}
        >
            <AppBar
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
                        Delaney N.
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
                            href="#personal-project">
                            <Typography variant="body2">Personal Project</Typography>
                        </Box>
                        <Box
                            component="a"
                            href="#work-experience">
                            <Typography variant="body2">Work Experience</Typography>
                        </Box>
                        <Box
                            component="a"
                            href="">
                            <Typography variant="body2">View Repository</Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
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
            0 10px 30px rgba(0,0,0,0.28),
            inset 0 1px 0 rgba(255,255,255,0.03)
        `,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        maxWidth: 900,
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
                        SOFTWARE ENGINEER
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
                        I’m a software engineer with a little over two years of experience doing fullstack. My experience is about equal across frontend, backend, devops, and infrastructure, with a slight bias towards frontend and away from infrastructure. I tutored Java while completing my second degree (CompSci), and taught English in Japan before that. My time in education has made me a good communicator and has garnered my patience, and I believe these skills make me a better engineer. I unfortunately, however, joined the software game a bit too late, but i'm still keeping up. I am currently fully invested in software development through AI and very much enjoying it.
                    </Typography>
                </Box>
            </Box>
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                <Box sx={{ mb: 14 }}>
                    <Stack alignItems="center" sx={{ mb: 15 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "rgba(255,255,255)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 800,
                                textAlign: "center"
                            }}
                        >
                            I'll be completely honest... I used AI to generate the majority of this page, and that's okay.
                        </Typography>
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            minHeight: 0,
                            width: "100%",
                            gap: 30,
                            alignItems: "flex-start",
                            mb: 10
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "rgba(255,255,255)",
                                    lineHeight: 1.7,
                                    fontWeight: 800,
                                }}
                            >
                                Yep, here's the prompt:
                            </Typography>

                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                }}
                            >
                                <MediaImage src="/Prompt.PNG" />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "rgba(255,255,255)",
                                    lineHeight: 1.7,
                                    fontWeight: 800,
                                }}
                            >
                                And here is the initial code:
                            </Typography>

                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                }}
                            >
                                <CodeSnippet
                                    align="right"
                                    src="/snippet1.txt"
                                    language="jsx"
                                    maxHeight="780px"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Stack spacing={10} sx={{ alignItems: "center", mb: 10 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "rgba(255,255,255)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 800,
                                textAlign: "center"
                            }}
                        >
                            Frustratingly simple.
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "rgba(255,255,255)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 800,
                                textAlign: "center"
                            }}
                        >
                            It took all of 3 minutes to get a new project going, even perfectly implementing a new technology I have never worked with.
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "rgba(255,255,255)",
                                maxWidth: 900,
                                lineHeight: 1.7,
                                fontWeight: 800,
                                textAlign: "center"
                            }}
                        >
                            Here are my thoughts on AI in software development.
                        </Typography>

                    </Stack>

                    <Divider
                        sx={{
                            mt: 5,
                            borderColor: "#ffffff"
                        }}
                    />
                </Box>

                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: "-0.03em",
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
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.25)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            p: 3,
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
                            How I use AI in software development and my short thoughts on AI.
                        </Typography>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                background: "rgba(143, 143, 143, 0.19)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                p: 3,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                Though I partially blame AI for my extended unemployment during the tech layoffs, I think it is an invaluable tool in software development and it is here to stay. An experienced developer can use AI to increase their throughput by multiple factors, trivializing things like boilerplate, documentation, and testing --- and that's just the beginning. AI is being integrated into applications in so many creative ways, but it ultimately comes down to the skills and creativity of the developers to use it properly.
                                <br></br><br></br>
                                While I think it's a shame that I have spent much of the AI boom unemployed, having avoided using AI for a while out of spite, it has ultimately led to me learning things that I never thought I would learn, at a pace I could never imagine. Next, I'm going to talk about how I used AI to learn Unity through a multiplayer game project.
                            </Typography>
                        </Paper>
                    </Paper>
                </Box>

                <Box sx={{ mb: 10 }}>
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
                    <Paper
                        elevation={0}
                        sx={{
                            height: "100%",
                            minHeight: 260,
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.25)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            p: 3,
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
                                borderRadius: 3,
                                background: "rgba(143, 143, 143, 0.19)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                p: 3,
                                mb: 5,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                Being a long time video game enthusiast, I always had thoughts about making my own game. However, I didn't really know where to start. After a bit of deliberation, I decided to take the plunge and start my first project that would be fully bootstrapped by AI.
                                <br></br><br></br>
                                Meet: Untitled Game.
                            </Typography>
                        </Paper>
                        <Box
                            sx={{
                                height: "100%",
                                minHeight: 0,
                                display: "flex",
                            }}
                        >
                            <MediaImage src="/Game1.PNG" />
                        </Box>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                background: "rgba(143, 143, 143, 0.19)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                p: 3,
                                mb: 5,
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                Charming, right?
                                <br></br><br></br>
                                While the visuals are a work in progress, I am actually very proud on how fleshed out the mechanics are, given the amount of time I have put into it.
                                <br></br><br></br>
                                To be honest, I did have to watch a short few videos to get started with modeling and attaching scripts to objects, but once I learned the basics I moved to AI development. I started with a simple prompt asking for a movement script and was given one. I didn't understand it all at first, but I did notice one thing; this isn't the movement system described in the video I watched. This was actually my first experience with the inaccuracies of GPT, and it would be a sign of things to come.
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
                                    height: "100%",
                                    minHeight: 0,
                                    flex: 1,
                                    minWidth: 0,
                                    display: "flex",
                                }}
                            >
                                <MediaImage src="/Game2.gif" />
                            </Box>

                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                    flex: 1,
                                    minWidth: 0,
                                }}
                            >
                                <CodeSnippet
                                    align="right"
                                    src="/snippet2.txt"
                                    language="csharp"
                                    maxHeight={350}
                                />
                            </Box>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                background: "rgba(143, 143, 143, 0.19)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                p: 3,
                                mb: 5,
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{

                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                As it turns out, there is a much newer movement system in Unity based off of input events, as opposed to the older one based on polling. ChatGPT generated a script with the polling style because, presumably, there was much more data available for it to train on using that style. I learned quickly that ChatGPT would not always give me what was best for what I was trying to do.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 5,
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                Fast forward and I've implemented a swinging system and started implementing multiplayer. This was honestly the best and worst part for me, because I had to wrap my head around the differences between Unity multiplayer architecture and traditional client-server architecture. In Unity, you make an object and add scripts to it to make it do stuff. For example, I create my player object and add a movement script to it. If I want to add more players, I just add another player object, right? Okay, well if you want to play multiplayer these objects now need to be networked. I can set up a server and communicate my movements to it, done! But wait, why doesn't the other player see me moving? That's where the complexity of Unity multiplayer comes in. In reality, both of us are running our own instances of Unity, and we both have 2 players loaded during runtime, ourselves and our counterpart. If you want to see each other move, you need to configure your scripts and network so that when a player sends their movements to the server, the server sends those movements to all other players so that their Unity instances can move their copies of the moving player.
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
                                    height: "100%",
                                    minHeight: 0,
                                    flex: 1,
                                    minWidth: 0,
                                    display: "flex",
                                }}
                            >
                                <MediaImage src="/Game3.gif" />
                            </Box>

                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                    flex: 1,
                                    minWidth: 0,
                                }}
                            >
                                <MediaImage src="/Game4.PNG" />
                            </Box>
                        </Box>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                background: "rgba(143, 143, 143, 0.19)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                p: 3,
                                mb: 5,
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                It was during my multiplayer implementation that I learned the true limitations of GPT, and that it will straight out lie to you without even knowing.
                                <br></br><br></br>
                                I used a specific, very new, multiplayer framework to implement multiplayer in my game. When I asked for simple snippets or had simple questions, it was able to answer fairly accuractely.
                                However, when I had very specific questions regarding the framework itself, it would answer very confidently and very incorrectly.
                                It took me a few back and forths of incorrect information before I finally asked it: "do you actually know about the framwork I am working with or are you just guessing?"
                                It answered very truthfully, that it only made assumptions based on data from other popular frameworks, one of which the current one I was working with took many things from.
                                That is when I learned exactly what I should and shouldn't rely on AI assistance for.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    color:
                                        "rgba(255,255,255,0.82)",
                                }}
                            >
                                All in all, I ended up learning Unity, Unity multiplayer, and C# through the use of AI at an incredibly rapid pace.
                                I made a lot of progress on a game that I would have fun playing myself if I am ever able to finish it, and came out a more experienced and modernized developer in the process.
                                It's not much, but here is a small look into where the game is currently and an example of some server code. I hope you can see the vision.
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
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: 0,
                                        flex: 1,
                                        minWidth: 0,
                                        display: "flex",
                                    }}
                                >
                                    <MediaImage src="/Game6.gif" />
                                </Box>

                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: 0,
                                        flex: 1,
                                        minWidth: 0,
                                        display: "flex",
                                    }}
                                >
                                    <MediaImage src="/Game7.gif" />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 0,
                                    display: "flex",
                                    flex: 1,
                                    minWidth: 0,
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
                    </Paper>
                    <Divider
                        sx={{
                            mt: 15,
                            borderColor: "#ffffff"
                        }}
                    />
                </Box>

                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: "-0.03em",
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
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.25)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            p: 3,
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
                            <WorkCard
                                key={sectionId}
                                title={section.title}
                                summary={section.summary}
                                goals={section.goals}
                                constraints={section.constraints}
                                responsibilities={section.responsibilities}
                                results={section.results}
                                component="a"
                                href={`#${sectionId}`}
                                imgSource={`Tools${index + 1}.PNG`}
                            />
                        )
                    })}
                </Box>
            </Container>
        </Box>
    );
}
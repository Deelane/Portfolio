import { useEffect, useState } from "react";
import { Paper, Box, Typography } from "@mui/material";
import Prism from "prismjs";
import "../index.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-csharp";

function normalizeLanguage(language) {
    if (!language) return "text";

    const map = {
        js: "javascript",
        javascript: "javascript",
        jsx: "jsx",
        ts: "typescript",
        tsx: "tsx",
        sql: "sql",
        json: "json",
        md: "markdown",
        text: "text",
        txt: "text",
        cs: "csharp",
        csharp: "csharp",
        "C#": "csharp",
    };

    return map[language.toLowerCase()] || language;
}

export default function CodeSnippet({
    code,
    src,
    language,
    align = "center",
    maxHeight = 350,
}) {
    const [content, setContent] = useState("");

    useEffect(() => {
        if (src) {
            fetch(src)
                .then((res) => res.text())
                .then((text) => setContent(text));
        } else {
            setContent(code || "");
        }
    }, [src, code]);

    const resolvedLanguage = normalizeLanguage(language);

    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <Box className={`codeWrap codeAlign-${align}`}>
            <Paper elevation={0} className="codeSnippet">
                {/* Code */}
                <Box className="codeBody">
                    <pre className={`language-${resolvedLanguage}`} style={{
                        maxHeight,
                    }}>
                        <code className={`language-${resolvedLanguage}`}>
                            {content}
                        </code>
                    </pre>
                </Box>
            </Paper>
        </Box>
    );
}
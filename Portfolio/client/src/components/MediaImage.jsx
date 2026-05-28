import { Paper, Box } from "@mui/material";

export default function MediaImage({
    src,
    alt = "image",
    align = "center",
    sx = {},
    imgSx = {},
}) {
    const justifyMap = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: justifyMap[align] || "center",
                width: "100%",
                minWidth: 0,
                ...sx,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    background: "none",
                    display: "block",
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        ...imgSx,
                    }}
                />
            </Paper>
        </Box>
    );
}
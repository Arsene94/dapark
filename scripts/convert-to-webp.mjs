import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = path.join(process.cwd(), "public", "images");
const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 75;
const MAX_WIDTH = 1600;

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                return walk(fullPath);
            }
            return fullPath;
        }),
    );

    return files.flat();
}

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function convertImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    if (!ALLOWED_EXTENSIONS.has(ext)) {
        return;
    }

    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

    const image = sharp(filePath);
    const metadata = await image.metadata();

    const shouldResize = metadata.width && metadata.width > MAX_WIDTH;

    let pipeline = image.rotate();

    if (shouldResize) {
        pipeline = pipeline.resize({
            width: MAX_WIDTH,
            withoutEnlargement: true,
        });
    }

    await ensureDir(path.dirname(outputPath));

    await pipeline.webp({
        quality: QUALITY,
        effort: 6,
    }).toFile(outputPath);

    console.log(`✔ Converted: ${filePath} -> ${outputPath}`);
}

async function main() {
    try {
        const files = await walk(INPUT_DIR);
        await Promise.all(files.map(convertImage));
        console.log("Done.");
    } catch (error) {
        console.error("Conversion failed:", error);
        process.exit(1);
    }
}

main();

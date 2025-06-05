import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { join } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to automatically create .htaccess file for Apache servers
    {
      name: "generate-htaccess",
      writeBundle() {
        const htaccessContent = `RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]`;

        writeFileSync(
          join(process.cwd(), "dist", ".htaccess"),
          htaccessContent
        );
        console.log("✅ .htaccess file created for SPA routing");
      },
    },
  ],
  base: "/",
});

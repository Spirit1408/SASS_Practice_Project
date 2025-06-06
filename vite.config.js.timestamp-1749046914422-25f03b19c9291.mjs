// vite.config.js
import imagemin from "file:///E:/study/Projects/SASS_Project/node_modules/imagemin/index.js";
import imageminWebp from "file:///E:/study/Projects/SASS_Project/node_modules/imagemin-webp/index.js";
import path from "path";
import { defineConfig } from "file:///E:/study/Projects/SASS_Project/node_modules/vite/dist/node/index.js";
import glob from "file:///E:/study/Projects/SASS_Project/node_modules/fast-glob/out/index.js";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "file:///E:/study/Projects/SASS_Project/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import purgecss from "file:///E:/study/Projects/SASS_Project/node_modules/@fullhuman/postcss-purgecss/lib/postcss-purgecss.js";
var __vite_injected_original_dirname = "E:\\study\\Projects\\SASS_Project";
var __vite_injected_original_import_meta_url = "file:///E:/study/Projects/SASS_Project/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 86
      },
      jpeg: {
        quality: 86
      },
      jpg: {
        quality: 86
      }
    }),
    {
      ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
        destination: "./src/img/webp/",
        plugins: [imageminWebp({ quality: 86 })]
      }),
      apply: "serve"
    },
    purgecss({
      content: ["./**/*.html"]
    })
  ],
  build: {
    minify: false,
    // disable minification
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync(["./*.html", "./pages/**/*.html"]).map((file) => [
          path.relative(
            __vite_injected_original_dirname,
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      // output unminified CSS file
      output: {
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzdHVkeVxcXFxQcm9qZWN0c1xcXFxTQVNTX1Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHN0dWR5XFxcXFByb2plY3RzXFxcXFNBU1NfUHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc3R1ZHkvUHJvamVjdHMvU0FTU19Qcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IGltYWdlbWluIGZyb20gXCJpbWFnZW1pblwiO1xyXG5pbXBvcnQgaW1hZ2VtaW5XZWJwIGZyb20gXCJpbWFnZW1pbi13ZWJwXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBnbG9iIGZyb20gXCJmYXN0LWdsb2JcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplclwiO1xyXG5pbXBvcnQgcHVyZ2Vjc3MgZnJvbSBcIkBmdWxsaHVtYW4vcG9zdGNzcy1wdXJnZWNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xyXG4gICAgICBwbmc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4NixcclxuICAgICAgfSxcclxuICAgICAganBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDg2LFxyXG4gICAgICB9LFxyXG4gICAgICBqcGc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4NixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAge1xyXG4gICAgICAuLi5pbWFnZW1pbihbXCIuL3NyYy9pbWcvKiovKi57anBnLHBuZyxqcGVnfVwiXSwge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi4vc3JjL2ltZy93ZWJwL1wiLFxyXG4gICAgICAgIHBsdWdpbnM6IFtpbWFnZW1pbldlYnAoeyBxdWFsaXR5OiA4NiB9KV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBhcHBseTogXCJzZXJ2ZVwiLFxyXG4gICAgfSxcclxuICAgIHB1cmdlY3NzKHtcclxuICAgICAgY29udGVudDogW1wiLi8qKi8qLmh0bWxcIl0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IGZhbHNlLCAvLyBkaXNhYmxlIG1pbmlmaWNhdGlvblxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIGdsb2JcclxuICAgICAgICAgIC5zeW5jKFtcIi4vKi5odG1sXCIsIFwiLi9wYWdlcy8qKi8qLmh0bWxcIl0pXHJcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoXHJcbiAgICAgICAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICApLFxyXG4gICAgICAvLyBvdXRwdXQgdW5taW5pZmllZCBDU1MgZmlsZVxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLltleHRdXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLE9BQU8sY0FBYztBQUN6UyxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsMEJBQTBCO0FBQ25DLE9BQU8sY0FBYztBQVByQixJQUFNLG1DQUFtQztBQUFrSSxJQUFNLDJDQUEyQztBQVM1TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxtQkFBbUI7QUFBQSxNQUNqQixLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0UsR0FBRyxTQUFTLENBQUMsK0JBQStCLEdBQUc7QUFBQSxRQUM3QyxhQUFhO0FBQUEsUUFDYixTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFBQSxNQUN6QyxDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWE7QUFBQSxJQUN6QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxDQUFDLFlBQVksbUJBQW1CLENBQUMsRUFDdEMsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLEtBQUs7QUFBQSxZQUNIO0FBQUEsWUFDQSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxNQUFNO0FBQUEsVUFDdkQ7QUFBQSxVQUNBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUE7QUFBQSxNQUVBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

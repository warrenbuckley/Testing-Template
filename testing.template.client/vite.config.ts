import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'testing.template',
    },
    outDir: '/home/runner/work/Testing-Template/Testing-Template/Testing.Template/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/Testing.Template
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});

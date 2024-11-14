# ccc-444 company website

## Get started this way

- check you have `nvm` & `pnpm` installed on your machine
- check you have the Node version indicated in `.nvmrc` file
- if not, run `nvm install`
- run `nvm use`
- run `pnpm dev`

### Important regarding resizings

- all resizing scripts are centralized in layouts/default.vue

- all components using teleport need to include
  `
    <script setup>
      const loadingStore = defineLoadingStoreFromComposable () ()
      onUpdated (() => loadingStore.patchIsResizingMode ())
    </script>
  `
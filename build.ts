import { $ } from "bun"

await $`rm -rf content`
await $`git clone https://github.com/HuakunShen/kb.git content`

await $`quartz build`

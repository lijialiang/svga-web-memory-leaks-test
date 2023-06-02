#!/usr/bin/env zx

// start static server
const serverCommand = $`live-server ./test --port=8080 --no-browser`

// wait for server to start
await sleep(3000)

// memlab test
await $`memlab run --work-dir ./tmp --scenario ./scripts/memlab-test.js`

// exit server
serverCommand.nothrow().kill()

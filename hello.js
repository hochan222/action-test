#!/usr/bin/env node
const { program } = require("@caporal/core")

program
.argument("<name>", "Name to greet")
.option("-g, --greating <word>", "Greating to use", {
  default: "Hello",
})
.action(({ logger, args, options }) => {
  logger.info("%s, %s!", options.greating, args.name)
})

program.run()

#!/usr/bin/env ts-node
// file: pizza-hit.ts
import { program } from "@caporal/core"
import path from "path"

program
  .name("My super program")
  .version("1.0.0")
  .description("A program that does something.")
  .discover(path.join(__dirname, ""))
  // First possible command: "order"
  .command("order", "Order a pizza")
  .argument("<type>", "Type of pizza")
  .option("-e, --extra-ingredients <ingredients>", "Extra ingredients")
  .action(({ logger, args, options }) => {
    logger.info("Order received: %s", args.type)
    if (options.extraIngredients) {
      logger.info("Extra: %s", options.extraIngredients)
    }
  })

  // Another command: "cancel"
  .command("cancel", "Cancel an order")
  .argument("<order-id>", "Order id")
  .action(({ logger, args }) => {
    logger.info("Order canceled: %s", args.orderId)
  })

program.run()
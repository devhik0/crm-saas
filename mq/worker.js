#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = "task_queue";

    // This makes sure the queue is declared before attempting to consume from it
    channel.assertQueue(queue, {
      durable: true,
    });

    channel.consume(
      queue,
      function (msg) {
        var secs = msg.content.toString().split(".").length - 1;

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
        }, secs * 1000);
      },
      {
        // automatic acknowledgment mode,
        // see /docs/confirms for details
        noAck: true,
      }
    );
  });
});

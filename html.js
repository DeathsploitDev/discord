<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discord Webhook Tutorial</title>
  </head>
  <body>
    <button onclick="sendMessage()">Send</button>
  </body>

  <script>
    function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discordapp.com/api/webhooks/676118118082281513/ZS5YcWhurzokBrKX9NgexqtxrJA5Pu2Bo4i7_JsIxC-JIbPBVhSZkcVVukGOro52rnQA");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
    }
  </script>
</html>

# Hackathon Getlinked Hackathon 1.0 LandingPage

## Table of contents

- [Overview](#overview)
  - [The features](#the-features)
  - [developers](#developers)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The features

UI Coding Challenge to Win N500k Cash or Laptop.💰💻🔥

As promised, I’ve got a coding challenge to develop a pixel perfect version of a landing page from a figma link.

http://getLinked.ai is proudly sponsoring this coding challenge and it’s open to all developers

### developers

- Frontend developer: [bamidele louis ](https://github.com/louis-bamidele)
- Frontend developer: [martins adepoju ](https://github.com/Martinsadepoju4)

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [live site](https://silver-lebkuchen-79cc2f.netlify.app/)
- Figma design: [link to figma](<https://www.figma.com/file/OlP4rBgsrNVRZe5K6ADXck/Getlinked-(Copy)?type=design&node-id=0%3A1&mode=dev>)

## My process

### Built with

- React
- passsport
- mongoDB
- Stripe
- Motion Framer
- useQuary and alot more

### What I learned

I didn't know how to use Stripe, with this project I learned how to do that.

See code snippets, see below:

```Stripe
 app.post("/create-checkout-session", async (req, res) => {
  let listOfData = [];
  let email = req.body.details.user.email;
  req.body.cart.map((item) => {
    let unitAmount = convertToUnitAmount(item.newPrice);
    listOfData.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.images,
        },
        unit_amount: unitAmount,
      },
      quantity: item.numOfOrder,
      adjustable_quantity: {
        enabled: true,
      },
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: listOfData,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/successful`,
    cancel_url: `${YOUR_DOMAIN}/checkout`,
    customer_email: email,
  });
  res.send(session);
})
```

test("chargeScooter", async () => {
    const scooter = new Scooter();
    await scooter.chargeScooter(); // we need to wait for the charge!
    console.log("Test complete");
  });
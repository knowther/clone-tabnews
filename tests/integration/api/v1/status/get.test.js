test("GET /api/v1/status deveria retornar 200 e status ok", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

const request = require("supertest");
const app = require("../server");

describe("Server", () => {
  it("page should return hello world by default", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual("<h1>Hello stranger!</h1>");
  });

  it("page should return hello {name} if name query exists", async () => {
    const response = await request(app).get("/").query({ name: "Ethan" });
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual("<h1>Hello Ethan!</h1>");
  });
});

afterAll(() => {
  app.close();
});

import request from "supertest";
import {Express} from 'express-serve-static-core';
import app from "../src/app"
let server: Express
describe(`Coordinates Request`, () => {
  beforeAll(() => {
    server = app;
  });
  test("should return 200 with coordinate points within specified boundary box", async () => {
    const response = await request(server).get("/api/coordinates?bbox=10,11,-12,100&limit=1");
    expect(response.statusCode).toBe(200); //expect status 200 passed
    expect(response.body.features.length).toEqual(1) // expect limit to work
  });
});
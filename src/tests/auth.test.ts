import { getAPIKey } from "../api/auth";
import { test, expect } from "vitest";

test("getAPIKey should return null if no authorization header is present", () => {
  const headers = {};
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBeNull();
});

test("getAPIKey should return null if authorization header is not in the correct format", () => {
  const headers = { authorization: "Bearer 12345" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBeNull();
});

test("getAPIKey should return the api key if the authorization header is in the correct format", () => {
  const headers = { authorization: "ApiKey 12345" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe("12345");
});

test("getAPIKey should return null if authorization header has extra spaces", () => {
  const headers = { authorization: "ApiKey  12345" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe("12345");
});

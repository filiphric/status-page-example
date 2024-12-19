import { test, expect } from "vitest";
import { getStatusColor } from "./statusData";

test("getStatusColor returns the correct color for each status", () => {
  expect(getStatusColor("operational")).toBe("bg-green-500");
  expect(getStatusColor("partial-outage")).toBe("bg-yellow-500");
  expect(getStatusColor("major-outage")).toBe("bg-red-500");
  expect(getStatusColor("unknown")).toBe("bg-gray-500");
});
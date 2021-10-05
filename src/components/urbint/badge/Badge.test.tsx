import React from "react";
import { render, screen } from "@testing-library/react";
import { LevelEnum } from "../utils/LevelEnum";
import Badge from "./Badge";

describe("Badge", () => {
  test("Check if correct risk level is displayed in BADGE", () => {
    render(<Badge isBadge riskLevel={LevelEnum.medium} />);

    const labelMedium = screen.getByText("MEDIUM");
    expect(labelMedium).toBeInTheDocument();
  });

  test("Check if correct risk level is displayed in LABEL", () => {
    render(<Badge isBadge={false} riskLevel={LevelEnum.veryHigh} />);

    const labelVeryHigh = screen.getByText("VERY HIGH RISK");
    expect(labelVeryHigh).toBeInTheDocument();
  });

  test("Check for correct background color in badge", () => {
    render(<Badge isBadge riskLevel={LevelEnum.medium} />);

    const badge = screen.getByText("MEDIUM");
    expect(badge.classList.contains("badge-medium")).toBe(true);
  });
});

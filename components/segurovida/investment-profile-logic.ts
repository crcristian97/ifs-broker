/**
 * Pregunta 1: ¿Qué porcentaje de activos líquidos piensa invertir?
 * Mapeo a perfil orientativo.
 */
export type InvestmentProfileId =
  | "conservative"
  | "balanced"
  | "growth"
  | "aggressive";

const Q1_TO_PROFILE: Record<string, InvestmentProfileId> = {
  lt25: "conservative", // Menos del 25%
  "25-50": "balanced", // Entre 25% y 50%
  "50-75": "growth", // Entre 50% y 75%
  gt75: "aggressive", // Más del 75%
};

export function getProfileIdFromQ1(q1: string): InvestmentProfileId | null {
  if (!q1) return null;
  return Q1_TO_PROFILE[q1] ?? null;
}

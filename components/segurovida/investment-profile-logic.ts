/**
 * Cuestionario de perfil de inversión: la puntuación usa las 7 respuestas.
 * Cada respuesta aporta un nivel de tolerancia al riesgo (1 = más conservador, 5–6 = más agresivo).
 * El perfil solo se calcula si todas las preguntas tienen respuesta.
 */
export type InvestmentProfileId =
  | "conservative"
  | "balanced"
  | "growth"
  | "aggressive";

/** 1 = conservador, 5 = agresivo */
const SCORE_Q1: Record<string, number> = {
  lt20: 1,
  r21_40: 2,
  r41_60: 3,
  r61_80: 4,
  gt80: 5,
};

/** Mayor retorno/vol esperado = mayor puntuación */
const SCORE_Q2: Record<string, number> = {
  r12_v25: 5,
  r10_v15: 4,
  r8_v10: 3,
  r6_v5: 2,
  r4_v2: 1,
};

/** Orden del ejemplo: de mayor disposición a volatilidad a preservación */
const SCORE_Q3: Record<string, number> = {
  att_high_long: 5,
  att_some_vol: 4,
  att_long_not_short: 3,
  att_above_inflation: 2,
  att_preserve: 1,
};

const SCORE_Q4: Record<string, number> = {
  inc_sig: 5,
  inc_10pct: 4,
  above_inf: 3,
  same: 2,
  decrease: 1,
};

const SCORE_Q5: Record<string, number> = {
  short_high: 5,
  long_growth: 4,
  sustained: 3,
  income: 2,
  preserve_inf: 1,
};

const SCORE_Q6: Record<string, number> = {
  buy_more: 5,
  nothing: 4,
  switch_if_year: 3,
  switch_cons: 2,
  sell_all: 1,
};

/** Horizonte más largo → mayor capacidad de asumir riesgo (escala 1–6) */
const SCORE_Q7: Record<string, number> = {
  lt1y: 1,
  y1_3: 2,
  y4_6: 3,
  y7_10: 4,
  y11_15: 5,
  gt15: 6,
};

export type InvestmentAnswers = {
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
  q6: string
  q7: string
}

function scoreFromMaps(
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string,
  q6: string,
  q7: string,
): number | null {
  const s1 = SCORE_Q1[q1]
  const s2 = SCORE_Q2[q2]
  const s3 = SCORE_Q3[q3]
  const s4 = SCORE_Q4[q4]
  const s5 = SCORE_Q5[q5]
  const s6 = SCORE_Q6[q6]
  const s7 = SCORE_Q7[q7]
  if (
    s1 === undefined ||
    s2 === undefined ||
    s3 === undefined ||
    s4 === undefined ||
    s5 === undefined ||
    s6 === undefined ||
    s7 === undefined
  ) {
    return null
  }
  return s1 + s2 + s3 + s4 + s5 + s6 + s7
}

/**
 * Suma mínima 7, máxima 36 (Q7 llega a 6). Umbrales por franja.
 */
function profileFromTotal(total: number): InvestmentProfileId {
  if (total <= 14) return "conservative"
  if (total <= 21) return "balanced"
  if (total <= 28) return "growth"
  return "aggressive"
}

/**
 * Devuelve el perfil solo si las 7 respuestas están completas y son válidas.
 */
export function getInvestmentProfileId(
  answers: InvestmentAnswers,
): InvestmentProfileId | null {
  const { q1, q2, q3, q4, q5, q6, q7 } = answers
  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7) return null
  const total = scoreFromMaps(q1, q2, q3, q4, q5, q6, q7)
  if (total === null) return null
  return profileFromTotal(total)
}

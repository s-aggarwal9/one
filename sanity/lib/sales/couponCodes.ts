export const COUPON_CODES = {
  DIWALI: "DIWALI",
  HOLI: "HOLI",
  IDAY: "IDAY",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;

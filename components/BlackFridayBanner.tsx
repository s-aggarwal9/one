import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.DIWALI);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <h2>{sale.title}</h2>
          <p>{sale.description}</p>
          <div>
            <div>
              <span>
                Use code: <span>{sale.couponCode}</span>
              </span>
              <span> for {sale.discountAmount}%OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackFridayBanner;

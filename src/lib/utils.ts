import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?:
      | "USD"
      | "EUR"
      | "GBP"
      | "INR"
      | "JPY"
      | "AUD"
      | "CAD"
      | "CHF"
      | "CNY"
      | "SEK"
      | "NZD"
      | "MXN"
      | "SGD"
      | "HKD"
      | "NOK"
      | "KRW"
      | "TRY"
      | "RUB"
      | "ZAR"
      | "BRL"
      | "BDT"
      | "PKR"
      | "LKR"
      | "MYR"
      | "THB"
      | "IDR"
      | "PHP"
      | "VND"
      | "AED"
      | "SAR"
      | "QAR"
      | "KWD"
      | "OMR"
      | "BHD"
      | "JOD"
      | "LYD"
      | "TND"
      | "MAD"
      | "DZD"
      | "EGP"
      | "IQD"
      | "YER"
      | "SYP"
      | "LBP"
      | "SDG"
      | "SOS"
      | "DJF"
      | "ERN"
      | "ETB"
      | "KES"
      | "UGX"
      | "TZS"
      | "RWF"
      | "BIF"
      | "GNF"
      | "XOF"
      | "XAF"
      | "CDF"
      | "AOA"
      | "MZN"
      | "ZMW"
      | "MWK"
      | "SZL"
      | "LSL"
      | "CVE"
      | "GHS"
      | "XPF"
      | "PGK"
      | "FJD"
      | "TWD"
      | "MOP"
      | "BND"
      | "MMK"
      | "KHR"
      | "LAK"
      | "BTN"
      | "NPR"
      | "AFN"
      | "UZS"
      | "KZT"
      | "TJS"
      | "AZN"
      | "GEL"
      | "AMD"
      | "BYN"
      | "MDL"
      | "UAH"
      | "KGS"
      | "TMT"
      | "RSD"
      | "MKD"
      | "ALL"
      | "BAM"
      | "HRK"
      | "CZK"
      | "HUF"
      | "PLN"
      | "RON"
      | "BGN"
      | "ISK"
      | "JMD"
      | "TTD"
      | "XCD"
      | "GYD"
      | "BBD"
      | "SRD"
      | "KYD"
      | "BSD"
      | "BMD"
      | "SBD"
      | "WST"
      | "FJD"
      | "TND";
    locale?: string;
    notation?: Intl.NumberFormatOptions["notation"];
    style?: Intl.NumberFormatOptions["style"];
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {}
) {
  const {
    currency = "USD",
    locale = "en-US",
    notation = "standard",
    style = "currency",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    throw new Error("Invalid price value");
  }
  // Ensure price is a number
  if (typeof numericPrice !== "number") {
    throw new Error("Price must be a number");
  } 

  // if (typeof price === "string") {
  //   price = parseFloat(price);
  // }

  return new Intl.NumberFormat(locale, {
    style,
    currency,
    notation,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numericPrice);
}

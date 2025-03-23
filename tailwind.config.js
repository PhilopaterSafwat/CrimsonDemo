/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#9B1B30", // Crimson Red (اللون الأساسي)
        burgundy: "#611224", // Deep Burgundy (لون غامق للأزرار والتفاصيل)
        beige: "#EDE0D4", // Soft Beige (لون الخلفية)
        charcoal: "#2D2D2D", // Charcoal Gray (لون النصوص الداكنة)
        pureWhite: "#FFFFFF", // Pure White (لون أساسي للخلفيات الفاتحة والنصوص)
      },
      container: {
        center: true,
        padding: "1rem", // يمكنك إضافة Padding حسب الحاجة
      }
    },
  },
  plugins: [],
}


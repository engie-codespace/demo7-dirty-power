// Utility to generate 1000 time series points for Bess, Wind, and Solar
export function generateTimeSeriesData(): Array<{ name: string; Bess: number; Wind: number; Solar: number }> {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      name: `T${i + 1}`,
      Bess: 50 + 20 * Math.sin(i / 50) + Math.random() * 10,
      Wind: 80 + 30 * Math.cos(i / 40) + Math.random() * 15,
      Solar: 60 + 25 * Math.sin(i / 70 + 1) + Math.random() * 8
    });
  }
  return data;
}

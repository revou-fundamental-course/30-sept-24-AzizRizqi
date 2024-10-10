// Tambahkan event listener ke event DOMContentLoaded pada document
document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan referensi ke input fields, tombol, dan elemen metode perhitungan
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationMethodElement = document.getElementById('calculation-method');
    const convertButton = document.getElementById('convert');
    const reverseButton = document.getElementById('reverse');
    const resetButton = document.getElementById('reset');
  
    // Tambahkan event listener ke tombol konversi
    convertButton.addEventListener('click', () => {
      // Konversi nilai Celsius ke Fahrenheit
      const celsiusValue = parseFloat(celsiusInput.value);
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        
        // Tampilkan metode perhitungan
        const calculationMethod = `
          ${celsiusValue}°C × (9/5) = ${(celsiusValue * 9/5).toFixed(2)} 
          ${(celsiusValue * 9/5).toFixed(2)} + 32 = ${fahrenheitValue.toFixed(2)}°F`;
        calculationMethodElement.innerText = calculationMethod;
      } else {
        alert('Masukkan nilai Celsius yang valid.');
      }
    });
  
    // Tambahkan event listener ke tombol balik
    reverseButton.addEventListener('click', () => {
      // Konversi nilai Fahrenheit ke Celsius
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
        
        // Tampilkan metode perhitungan
        const calculationMethod = `
          ${fahrenheitValue}°F - 32 = ${(fahrenheitValue - 32).toFixed(2)} 
          ${(fahrenheitValue - 32).toFixed(2)} × (5/9) = ${celsiusValue.toFixed(2)}°C`;
        calculationMethodElement.innerText = calculationMethod;
      } else {
        alert('Masukkan nilai Fahrenheit yang valid.');
      }
    });
  
    // Tambahkan event listener ke tombol reset
    resetButton.addEventListener('click', () => {
      // Reset input fields dan elemen metode perhitungan
      celsiusInput.value = '';
      fahrenheitInput.value = '';
      calculationMethodElement.innerText = ''; 
    });
  });
// main.js
const ctx = document.getElementById('myChart').getContext('2d');

// Datos del gráfico
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const data = [12, 19, 3, 5, 2];

// Configuración del gráfico
const config = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Cantidad en Miles de Pacientes Atendidos en los 5 Primeros Meses',
      data: data,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Crear el gráfico
const myChart = new Chart(ctx, config);

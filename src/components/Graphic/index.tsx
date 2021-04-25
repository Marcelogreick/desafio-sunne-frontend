import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './styles.module.scss';

const data = {
  labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
  datasets: [
    {
      label: 'kWh',
      data: [3000, 1500, 1000, 800, 300],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Graphic = () => (
  <div className={styles.graphic}>
    <div className='header'>
      <h1 className='title'>Consumo em kWh</h1>
    </div>
    <Bar type data={data} options={options} />
  </div>
);

export default Graphic;

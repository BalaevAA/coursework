  
import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const data = {
  labels: ['Еда и продукты', 'Образование', 'Транспорт', 'Отдых', 'Различные товары'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(153, 50, 204)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(153, 50, 204)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutoutPercentage: 70
}

export const DoughnutChart = () => {
  return(
    <>
      <Doughnut 
        data={data}
        width={100}
        height={100}
      />
    </>
  );
};
import React,{useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import style from './Chart.module.css'


const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);
    const lineChart = (
        dailyData.length!== 0 ? (
            <Line
           data={{
               labels:dailyData.map(({date}) => date),
               datasets:[{
                data: dailyData.map(({confirmed})=> confirmed),
                label:'Infecttados',
                borderColor:'#3333ff',
                fill:true,
               },{
                data: dailyData.map(({deaths})=> deaths),
                label:'Mortes',
                borderColor:'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill:true,
               }],
           }}
            />
        ): null
    );
    console.log(confirmed, recovered, deaths);
    const barChart =(
        confirmed ?(
            <Bar
            data={{
                labels:['Infectados', ' Recuperados', 'Mortes'],
                datasets:[{
                    label:'Pessoas',
                    backgroundColor:[
                        'rgba(0, 0, 225, 0.5)',
                        'rgba(0, 225, 0, 0.5)',
                        'rgba(225, 0, 0, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true, text:`Estado atual em ${country}`}
            }}
            /> 
        ):null
    )
    return (
        <div className={style.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart

import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CoundUp from 'react-countup';
import cx from 'classnames';
import styles from './Card.module.css';



export const Cards = ({data:{recovered, deaths, confirmed, lastUpdate}}) => {
    
    if(!confirmed){
        return 'loading...'
    }
    console.log(lastUpdate)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary">Infectados</Typography>
                        <Typography variant="h5">
                            <CoundUp
                            start={0}
                            duration={2,5}
                            separator=","
                            end={confirmed.value}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2"> Números de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary">Recuperados</Typography>
                        <Typography variant="h5">
                        <CoundUp
                        start={0}
                        duration={2,5}
                        separator=","
                        end={recovered.value}
                        />
                        </Typography>
                        <Typography color="textSecondary"> 
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2"> Números de casos recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary">Infectados</Typography>
                        <Typography variant="h5">
                        <CoundUp
                        start={0}
                        duration={2,5}
                        separator=","
                        end={deaths.value}
                        />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                            </Typography>
                        <Typography variant="body2"> Números de mortes por COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
            
        </div>
    )
}
export default Cards

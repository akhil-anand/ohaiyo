import { Grid, Typography } from '@material-ui/core'
import React,{ useEffect , useState} from 'react';

import Dialogue from './Dialogue/Dialogue';
import ScrollIntoView from 'react-scroll-into-view';
import Timer from './Timer';
import './styles.css';

import zhongli1 from '../../assets/zhongli/zhongli1.png'
import zhongli2 from '../../assets/zhongli/zhongli2.png'
import zhongli3 from '../../assets/zhongli/zhongli3.png'
import zhongli4 from '../../assets/zhongli/zhongli4.png'
import zhongli5 from '../../assets/zhongli/zhongli5.png'

import zhongli_1 from '../../assets/zhongli1/zhongli1.png'
import zhongli_2 from '../../assets/zhongli1/zhongli2.png'
import zhongli_3 from '../../assets/zhongli1/zhongli3.png'
import zhongli_4 from '../../assets/zhongli1/zhongli4.png'

import itachi1 from '../../assets/itachi/itachi1.jpg'
import itachi2 from '../../assets/itachi/itachi2.jpg'
import sharingan from '../../assets/itachi/sharingan.png'

function Home () {

    const [zhongliTimer, setZhongliTimer] = useState(0);
    const zhongliPics = [ zhongli1, zhongli2, zhongli3, zhongli4, zhongli5]
    const zhongliPics1 = [ zhongli_1, zhongli_2, zhongli_3, zhongli_4]


    useEffect(()=>{
        const interval = setInterval(() => {        
            setZhongliTimer((prevTimer => Timer(prevTimer)))
          }, 1000);

      
    }, [])

  return (
    <div>
        {/* <div style={{height:'30vh'}}>

        </div> */}
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={8}  id="no1">
                    <div className="dialogue" data-aos="fade-down" data-aos-duration="1800">
                <ScrollIntoView selector="#no2">

                <Dialogue value="ohaiyo"/>
                {/* <button className="mdl-button mdl-js-button mdl-button--raised">
                    Jump to bottom
                </button> */}
                <div data-aos="fade-up" data-aos-delay="800">

                <span className="wave" >👋</span>
                </div>
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no2">
                <div className="dialogue" style={{fontSize:"5rem"}} data-aos="fade-left" data-aos-duration="1500">
                <ScrollIntoView selector="#no3">
                <Dialogue value="how have you been?" />
                <div data-aos="fade-right" data-aos-delay="1200">

                <img src={zhongliPics[zhongliTimer]}/>
                </div>
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no3">
                <div className="dialogue" style={{fontSize:"5rem"}} data-aos="fade-up-right" data-aos-delay="300" data-aos-duration="1200">
                <ScrollIntoView selector="#no4">
                {/* <Dialogue value="how have you been?" /> */}
                <img src={zhongliPics[4]}/>
                <div data-aos="fade-right" data-aos-delay="1800">

                <img src={zhongliPics1[zhongliTimer]} style={{height:'10rem'}}/>
                </div>
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no4">
                <div className="dialogue" style={{marginTop:'-1.5rem',overflow:'hidden',fontSize:'2rem',color:'white', zIndex:'5'}}>
                <ScrollIntoView selector="#no5">
                <img src={itachi1} style={{width:'100vw', backgroundSize:'cover', position:'relative', top:'-10vh'}}/>
                {/* <Dialogue value="It’s foolish to fear what we have yet to see and know."/> */}
                {/* <img src={zhongliPics1[zhongliTimer]} style={{height:'10rem', marginTop:'4rem'}}/> */}
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no5">
                <div className="dialogue" style={{marginTop:'-1rem',overflow:'hidden'}}>
                <ScrollIntoView selector="#no6">
                {/* <Dialogue value="how have you been?" /> */}
                <img src={itachi2} style={{width:'100vw', backgroundSize:'cover'}}/>
                {/* <img src={zhongliPics1[zhongliTimer]} style={{height:'10rem', marginTop:'4rem'}}/> */}
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no6">
                <div className="dialogue" style={{backgroundColor:'black',marginTop:'-2vh'}}>
                <ScrollIntoView selector="#no7">
                {/* <Dialogue value="how have you been?" /> */}
                <div style={{position:'relative', top:'50vh',left:'-17vw'}}>

                <img src={sharingan} className="animate-spin" style={{width:'90vw',marginLeft:'50vw'}}/>
                </div>
                {/* <img src={zhongliPics1[zhongliTimer]} style={{height:'10rem', marginTop:'4rem'}}/> */}
                </ScrollIntoView>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} id="no7">
                <div className="dialogue" data-aos="fade up" data-aos-delay="800" style={{fontSize:'5rem'}}>
                <ScrollIntoView selector="#no8">
                <Dialogue value="Oyasuminasai niti chan :)" />
                {/* <img src={zhongliPics1[zhongliTimer]} style={{height:'10rem', marginTop:'4rem'}}/> */}
                </ScrollIntoView>
                </div>
            </Grid>
        </Grid>

    </div>
  )
}

export default Home
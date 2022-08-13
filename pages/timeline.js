import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout'
import Image from 'next/image'
import divider from '../public/img/divider.png';
import CameraIcon from '../public/img/icons/camera-front.png';
import DanceIcon from '../public/img/icons/dance.png';
import MartiniIcon from '../public/img/icons/martini.png';
import ServiceIcon from '../public/img/icons/service.png';
import WeddingIcon from '../public/img/icons/wedding.png';
import ChurchIcon from '../public/img/icons/church-with-steeple.png';
import LocationIcon from '../public/img/wedding-location.svg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Gallery() {
  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1" style={{paddingBottom: '5em'}}>
        <h2 className="color-gold smaller">Timeline</h2>

        <div className="container-one-column">
          <div className="dividerImg"><Image src={divider} alt="digital flowers" /></div>
          <div className="width-50">
            <VerticalTimeline layout='1-column-left'>
              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#cba135', color: '#fff', marginLeft: '4em'}}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.5em'}}
                icon={<Image src={LocationIcon} alt="location pin icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white padding-bottom-5">Arrive at Church</h3>
                <div className='text-align-right'>{ process.env.CEREMONY_ADDR.l1 }</div>
                <div className='text-align-right'>{ process.env.CEREMONY_ADDR.l2 }</div>
                <div className='text-align-right'>{ process.env.CEREMONY_ADDR.l3 }</div>
                <div style={{marginBottom: '-1em'}}>2:30 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.3em'}}
                icon={<Image src={ChurchIcon} alt="Church icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Ceremony</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>3:00 PM</div>
                
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.5em'}}
                icon={<Image src={CameraIcon} alt="camera icon" style={{width: '1.8em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Family Photos</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>4:00 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#cba135', color: '#fff', marginLeft: '4em' }}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.5em'}}
                icon={<Image src={LocationIcon} alt="location pin icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white padding-bottom-5">Go to Jacaranda</h3>
                <div className='text-align-right'>{ process.env.RECEPTION_ADDR.l1 }</div>
                <div className='text-align-right'>{ process.env.RECEPTION_ADDR.l2 }</div>
                <div className='text-align-right'>{ process.env.RECEPTION_ADDR.l3 }</div>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>4:30 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.5em'}}
                icon={<Image src={CameraIcon} alt="camera icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Family Photos</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>5:00 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.3em'}}
                icon={<Image src={MartiniIcon} alt="martini icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Cocktail Hour</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>6:00 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.3em'}}
                icon={<Image src={ServiceIcon} alt="dinner dish icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Reception Begins</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>7:00 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.3em'}}
                icon={<Image src={WeddingIcon} alt="bride and groom dancing icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">First Dance</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>7:10 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#ffcaba', color: '#fff', marginLeft: '4em'}}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.4em'}}
                icon={<Image src={DanceIcon} alt="dancing icon" style={{width: '2em'}} />}
              >
                <h3 className="vertical-timeline-element-title color-white">Dancing!</h3>
                <div style={{marginBottom: '-1em', paddingTop: '0.5em'}}>8:30 PM</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#cba135', color: '#fff', marginLeft: '4em'}}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                iconStyle={{ background: '#cba135', color: '#fff', width: '3em', height: '3em', padding: '0.5em'}}
                icon={<Image src={LocationIcon} alt="location pin icon" style={{width: '2em'}}/>}
              >
                <h3 className="vertical-timeline-element-title color-white padding-bottom-5">Home Time!</h3>
                
                <div style={{marginBottom: '-1em'}}>11:00 PM</div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>

        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        < br />
      </section>
    </Layout>
  )
}
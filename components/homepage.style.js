const styles = {
    container: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '100% repeat(3, auto)',
      gridTemplateAreas: `
        'content0'
        'content1'
        'content2'
        'content3'
      `
    },
    background: {
      backgroundImage: 'url("/img/engagement/EnteranceTruck.JPG")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    },
    content0: {
      gridArea: 'content0'
    },
    content1: {
      backgroundColor: '#fff3e6',
      gridArea: 'content1',
      paddingTop: '2em',
      paddingBottom: '10em',
    },
    content2: {
      gridArea: 'content2',
      backgroundColor: '#ffcccc',
      paddingBottom: '4em'
    },
    content3: {
      gridArea: 'content3',
      backgroundColor: 'rgba(255,255,255,0.8)',
      textAlign: 'center'
    },
    sideContent: {
      width: '100%',
      marginRight: '5%'
    },
    sideImg: {
      width: '50%',
      float: 'left'
    },
    image: {
      width: '100%'
    },
    weddingTime: {
      fontFamily: 'tajawal',
      fontWeight: 'bold'
    },
    rsvpButtonContainer: {
      textAlign: 'center'
    },
    rsvpButton: {
      backgroundColor: '#cba135',
      color: '#ffdcd3',
      fontSize: '1em'
    },
    galleryButton: {
      backgroundColor: '#cba135',
      color: '#fff3e6',
      fontSize: '1em'
    }
  }
  
  export default styles;
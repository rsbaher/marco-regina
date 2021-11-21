const styles = {
  container: {
    backgroundColor: '#cbece4',
    minHeight: '100%'
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    gridTemplateRows: 'repeat(5, auto) 2em',
    gridGap: '1.5em',
    paddingBottom: '1.5em'
  },
  title: {
    fontFamily: 'adlery_swash',
    fontSize: '4em',
    margin: '0',
    padding: '1em .5em .5em',
    textAlign: 'center',
    gridColumn: '2 / span 3',
    gridRow: '1'
  },
  radioGroupIsComing: {
    gridColumn: '2 / span 3',
    gridRow: '2'
  },
  inputName: {
    gridColumn: '2 / span 3',
    gridRow: '3'
  },
  checkboxGroupLocations: {
    gridColumn: '2 / span 3',
    gridRow: '4'
  },
  inputPax: {
    gridColumn: '2 / span 3',
    gridRow: '5'
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#d78380',
    color: 'white',
    display: 'flex',
    fontSize: '1em',
    gridColumn: '3',
    gridRow: '6',
    justifySelf: 'center',
    lineHeight: '2em',
    padding: '0.2em 1em',
    width: 'auto'
  },
  spinner: {
    alignSelf: 'center',
    height: '1.5em',
    marginRight: '.5em'
  },
  addToCalendar: {
    border: 'none',
    fontFamily: 'tajawal',
    margin: '.2em'
  }
}
  
  export default styles;
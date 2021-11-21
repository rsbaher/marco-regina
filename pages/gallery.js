import styles from '../components/homepage.style'
import Layout from '../components/Layout'
import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'


export default () => {
  
  return (
    <Layout>
      <section style={styles.content1}>
        Engagement Photos
      </section>
      <section style={styles.content2}>
        Wedding Photos
      </section>
      </Layout>
  )
}
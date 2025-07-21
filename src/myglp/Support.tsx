import allStyles from './all.module.css';
import styles from './Support.module.css';

import LinkButton from './components/LinkButton';
import Header from './components/Header';

export default function Support() {
  return (
    <div id="support" className={styles.supportContainer}>
      <section className={allStyles.wideContainer}>
        <Header title="Support" />
        <div className={styles.supportGrid}>
          <article>
            <h3>Get in Touch</h3>
            <p>
              Send questions, comments, or feature requests to <a href="mailto:support@myglp.app">support@myglp.app</a>.
            </p>
          </article>
          <article>
            <h3>Privacy &amp; Terms of Use</h3>
            <p>
              Take a look at the privacy policy and terms of use below.
            </p>
            <div>
              <LinkButton title="Privacy Policy" href="/privacy" />
            </div>
            <div>
              <LinkButton title="Terms of Use" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" />
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
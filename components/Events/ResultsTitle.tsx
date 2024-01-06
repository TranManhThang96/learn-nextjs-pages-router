import Button from '../UI/Button';
import classes from './results-title.module.css';

function ResultsTitle({ date }: { date: Date }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button href="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;

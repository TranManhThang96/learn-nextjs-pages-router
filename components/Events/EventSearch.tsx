import React, { useRef } from 'react';
import classes from './event-search.module.css';
import Button from '@/components/UI/Button';

const years = [2021, 2022];

const EventSearch = ({
  onSearch,
}: {
  onSearch: (year: string, month: string) => void;
}) => {
  const yearInputRef = useRef<HTMLSelectElement | null>(null);
  const monthInputRef = useRef<HTMLSelectElement | null>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const selectedYear = yearInputRef?.current?.value;
    const selectedMonth = monthInputRef?.current?.value;
    if (selectedYear && selectedMonth) {
      onSearch(selectedYear, selectedMonth);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {Array.from({ length: 12 }, (_, month) => (
              <option value={month + 1} key={month + 1}>
                {`0${month + 1}`.slice(-2)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onclick={() => {}}>Find Events</Button>
    </form>
  );
};

export default EventSearch;

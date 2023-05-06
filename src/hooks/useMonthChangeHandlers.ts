import type { View } from '../components/Datepicker/Datepicker';

export const useMonthChangeHandlers = (type: View, date: Date, setDate: (date: Date) => void) => {
  const currentDate = date;

  const handlePrevClick = () => {
    if (type === 'weekly') {
      const day = date.getDate();
      currentDate.setDate(day - 7);
      setDate(currentDate);
    } else {
      currentDate.setMonth(currentDate.getMonth() - 1);
      setDate(currentDate);
    }
  };

  const handleNextClick = () => {
    if (type === 'weekly') {
      const day = currentDate.getDate();
      currentDate.setDate(day + 7);
      setDate(currentDate);
    } else {
      currentDate.setMonth(currentDate.getMonth() + 1);
      setDate(currentDate);
    }
  };

  const handleNextYearClick = () => {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    setDate(currentDate);
  };

  const handlePrevYearClick = () => {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    setDate(currentDate);
  };

  return { handlePrevClick, handleNextClick, handleNextYearClick, handlePrevYearClick };
};
